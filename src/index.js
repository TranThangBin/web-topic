const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT;
const WORKFACTOR = process.env.WORKFACTOR;
const MONGO_URI = process.env.MONGO_URI;
const MONGO_APPNAME = process.env.APPNAME;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const MONGO_DATABASE = process.env.MONGO_DATABASE;
const MONGO_USERS_COLLECTION = process.env.MONGO_USERS_COLLECTION;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS.split(",");

const missingUsernameError = new Error("required field username is missing");
const missingPasswordError = new Error("required field password is missing");
const invalidGenderError = new Error(
	"the gender provided is not a valid gender",
);
const mismatchPasswordError = new Error(
	"'confirm password' does not match 'password'",
);
const duplicatedUsernameError = new Error(
	"a user with this username has already exists please try another one",
);
const unauthorizedError = new Error("your login information is incorrect");

const client = new mongodb.MongoClient(MONGO_URI, {
	appName: MONGO_APPNAME,
	auth: {
		username: MONGO_USER,
		password: MONGO_PASS,
	},
});

const app = express();

app.use(
	cors({
		origin: [
			"http://127.0.0.1:3000",
			"http://localhost:3000",
			...ALLOWED_ORIGINS,
		],
	}),
	express.json(),
	(req, _, next) => {
		console.log(req.host, req.method);
		next();
	},
);

app.post("/register", async (req, res, next) => {
	const {
		username,
		password,
		confirmPassword,
		displayName,
		dateOfBirth,
		gender,
	} = req.body || {};
	if (!username) {
		next(missingUsernameError);
		return;
	}
	if (!password) {
		next(missingPasswordError);
		return;
	}
	if (password !== confirmPassword) {
		next(mismatchPasswordError);
		return;
	}
	if (gender !== "male" && gender !== "female") {
		next(invalidGenderError);
		return;
	}
	try {
		const existedUser = await client
			.db(MONGO_DATABASE)
			.collection(MONGO_USERS_COLLECTION)
			.findOne({ username });
		if (existedUser != null) {
			next(duplicatedUsernameError);
			return;
		}
		const user = {
			username,
			gender,
			password: bcrypt.hashSync(password, parseInt(WORKFACTOR)),
			displayName: displayName || username,
			dateOfBirth: new Date(dateOfBirth) || null,
		};
		await client
			.db(MONGO_DATABASE)
			.collection(MONGO_USERS_COLLECTION)
			.insertOne(user);
		res.status(200).end();
	} catch (error) {
		next(error);
	}
});

app.post("/login", async (req, res, next) => {
	const { username, password } = req.body || {};
	if (!username) {
		next(missingUsernameError);
		return;
	}
	if (!password) {
		next(missingPasswordError);
		return;
	}
	try {
		const existedUser = await client
			.db(MONGO_DATABASE)
			.collection(MONGO_USERS_COLLECTION)
			.findOne({ username });
		if (
			existedUser === null ||
			!bcrypt.compareSync(password, existedUser.password)
		) {
			next(unauthorizedError);
			return;
		}
		const { _id, password: _, ...user } = existedUser;
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
});

app.use((err, _, res, __) => {
	console.error(err);
	if (
		err === missingUsernameError ||
		err === missingPasswordError ||
		err === mismatchPasswordError ||
		err === duplicatedUsernameError
	) {
		res.status(400).json({ message: err.message });
		return;
	}
	if (err === unauthorizedError) {
		res.status(401).json({ message: err.message });
		return;
	}
	res.status(500).end();
});

async function run() {
	await client.connect();
	console.log("Successfully connecting to mongodb");
	app.listen(PORT, () => {
		console.log(`Listening at http://127.0.0.1:${PORT}`);
	});
}

run();
