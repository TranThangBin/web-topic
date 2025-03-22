import { Error } from "mongoose";
import { GameModel } from "./model.js";

const GameNotFoundError = new Error("Game not found");

/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

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
export async function queryGame(req, res, next) {
	try {
		const { id, name } = req.query;
		const games = await GameModel.find(
			{
				id: { $regex: id || "", $options: "i" },
				name: { $regex: name || "", $options: "i" },
			},
			{ _id: 0 },
		);
		games.sort((a, b) => {
			const idx1 = a.get("id").slice(-4);
			const idx2 = b.get("id").slice(-4);
			return parseInt(idx1) - parseInt(idx2);
		});
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
export async function createGame(req, res, next) {
	const game = new GameModel(req.body);
	try {
		await game.save();
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
export async function updateGame(req, res, next) {
	try {
		const $set = {};
		for (const k in req.body) {
			if (k !== "id" && req.body[k] !== undefined) {
				$set[k] = req.body[k];
			}
		}
		const game = await GameModel.findOneAndUpdate(
			{ id: req.params.id },
			{ $set },
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
export async function deleteGame(req, res, next) {
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
