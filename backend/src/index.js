import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { connect } from "mongoose";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import {
	createGame,
	deleteGame,
	queryGame,
	handleError,
	updateGame,
} from "./controller.js";

const MONGOURI = process.env.MONGOURI || "mongodb://mongo:27017/game";
const PORT = process.env.PORT || 8080;
const DIRNAME = dirname(fileURLToPath(import.meta.url));

const server = express();

const gameRouter = express.Router();
gameRouter.get("/query", queryGame);
gameRouter.post("/new", createGame);
gameRouter.patch("/update/:id", updateGame);
gameRouter.delete("/delete/:id", deleteGame);

server.use(express.static(join(DIRNAME, "..", "public")));
server.use(express.json());
server.use(fileUpload({ createParentPath: true }));
server.use(cors({ origin: ["http://127.0.0.1:3000"] }));
server.use("/game", gameRouter);
server.use(handleError);

try {
	await connect(MONGOURI);
	console.log("Successfully connected to mongodb");
	server.listen(PORT, () => {
		console.log(`Listening at 127.0.0.1:${PORT}`);
	});
} catch (err) {
	console.log(`Something went wrong: ${err.message}`, err);
}
