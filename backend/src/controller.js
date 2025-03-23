import { Error } from "mongoose";
import { GameModel } from "./model.js";
import { Router } from "express";
import { join, extname } from "path";
import { getDirname } from "./utils.js";

const GameNotFoundError = new Error("Game not found");

/**
 * @typedef {import("./types.d.ts").TGame} TGame
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

/**
 * @param {Request} req
 * @param {NextFunction} next
 */
export function handleLog(req, _, next) {
	console.log(req.method, req.path);
	next();
}

/**
 * @param {Response} res
 */
export function handleError(err, _, res, __) {
	console.error(err);
	if (err === GameNotFoundError) {
		res.status(404).json({ message: err.message });
		return;
	}
	if (err instanceof Error.ValidationError) {
		res.status(400).json({ message: err.message });
		return;
	}
	res.status(500).end("Internal server error");
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function queryGame(req, res, next) {
	try {
		const { id, name, releaseDate } = req.query;
		const sort = { _id: 1 };
		if (releaseDate === "asc") {
			sort.releaseDate = -1;
		}else if (releaseDate === "desc") {
			sort.releaseDate = 1;
		}
		const games = await GameModel.find(
			{
				id: { $regex: id || "", $options: "i" },
				name: { $regex: name || "", $options: "i" },
			},
			{ _id: 0 },
			{ sort },
		);
		res.json(games);
	} catch (err) {
		next(err);
	}
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function createGame(req, res, next) {
	try {
		const game = await GameModel.insertOne(req.game);
		res.json(game);
	} catch (err) {
		next(err);
	}
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function updateGame(req, res, next) {
	try {
		const game = await GameModel.findOneAndUpdate(
			{ id: req.params.id },
			{ $set: req.game },
			{ runValidators: true, new: true },
		);
		if (game !== null) {
			res.json(game);
			return;
		}
		throw GameNotFoundError;
	} catch (err) {
		next(err);
	}
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function validateGame(req, _, next) {
	const { id, ...game } = req.body;
	try {
		await GameModel.validate(game);
		req.game = game;
		next();
	} catch (err) {
		next(err);
	}
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function handleFileUpload(req, _, next) {
	const files = req.files;
	if (!files || !files.thumbnail || files.thumbnail.size === 0) {
		next();
		return;
	}
	const thumbnail = files.thumbnail;
	const filename = Date.now().toString() + extname(thumbnail.name);
	try {
		await thumbnail.mv(
			join(getDirname(), "..", "public", "images", filename),
		);
		req.game.thumbnail = filename;
		next();
	} catch (err) {
		next(err);
	}
}

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function deleteGame(req, res, next) {
	try {
		const game = await GameModel.findOneAndDelete({ id: req.params.id });
		if (game !== null) {
			res.json(game);
			return;
		}
		throw GameNotFoundError;
	} catch (err) {
		next(err);
	}
}

export const gameRouter = Router();
gameRouter.get("/query", queryGame);
gameRouter.post("/new", validateGame, handleFileUpload, createGame);
gameRouter.patch("/update/:id", validateGame, handleFileUpload, updateGame);
gameRouter.delete("/delete/:id", deleteGame);
