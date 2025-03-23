import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { connect } from "mongoose";
import { join } from "path";
import { gameRouter, handleError, handleLog } from "./controller.js";
import { getDirname, MONGOURI, PORT } from "./utils.js";

const server = express();

server.use(express.static(join(getDirname(), "..", "public")));
server.use(express.json());
server.use(fileUpload({ createParentPath: true }));
server.use(cors({ origin: ["http://127.0.0.1:3000"] }));
server.use(handleLog);
server.use(handleError);
server.use("/game", gameRouter);

try {
	await connect(MONGOURI);
	console.log("Successfully connected to mongodb");
	server.listen(PORT, () => {
		console.log(`Listening at 127.0.0.1:${PORT}`);
	});
} catch (err) {
	console.log(`Something went wrong: ${err.message}`, err);
}
