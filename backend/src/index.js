import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { connect } from "mongoose";
import { join } from "path";
import { gameRouter, handleError, handleLog } from "./controller.js";
import {
	getDirname,
	MONGO_APPNAME,
	MONGO_DATABASE,
	MONGO_URI,
	PORT,
	MONGO_USER,
	MONGO_PASS,
	ALLOWED_ORIGINS,
} from "./utils.js";

const server = express();

server.use(express.static(join(getDirname(), "..", "public")));
server.use(express.json());
server.use(fileUpload({ createParentPath: true }));
server.use(cors({ origin: ALLOWED_ORIGINS }));
server.use(handleLog);
server.use(handleError);
server.use("/game", gameRouter);

try {
	await connect(MONGO_URI, {
		user: MONGO_USER,
		pass: MONGO_PASS,
		appName: MONGO_APPNAME,
		dbName: MONGO_DATABASE,
	});
	console.log("Successfully connected to mongodb");
	server.listen(PORT, () => {
		console.log(`Listening at 127.0.0.1:${PORT}`);
	});
} catch (err) {
	console.log(`Something went wrong: ${err.message}`, err);
}
