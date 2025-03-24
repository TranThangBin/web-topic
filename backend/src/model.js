import { model, Schema } from "mongoose";

/** @type {import("./types").TGameSchema} */
const GameSchema = new Schema({
	id: {
		type: String,
		immutable: true,
		unique: true,
		index: true,
	},
	name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 100,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	releaseDate: {
		type: Date,
		validate: {
			validator: (v) => v <= Date.now(),
			message: "Release date should not be later than the current moment",
		},
		default: Date.now(),
	},
	thumbnail: String,
});

GameSchema.pre("save", async function (next) {
	if (!this.isNew) {
		return next();
	}

	try {
		const Model = this.constructor;

		const lastDoc = await Model.findOne(
			{},
			{ id: 1, _id: 0 },
			{ sort: { _id: -1 } },
		).limit(1);

		if (lastDoc === null) {
			this.id = "GAME" + "0001";
		} else {
			const lastID = lastDoc.id;
			const prevNumber = parseInt(lastID.slice(-4)) + 1;
			this.id = "GAME" + prevNumber.toString().padStart(4, "0");
		}

		next();
	} catch (err) {
		next(err);
	}
});

/** @type {import("./types").TGameModel} */
export const GameModel = model("games", GameSchema);
