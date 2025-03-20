import { Model, Schema } from "mongoose";

type TGame = {
	id: string;
	name: string;
	description?: string;
	releaseDate: Date;
	thumbnail?: string;
};

type TGameSchema = Schema<TGame>;

type TGameModel = Model<TGame>;
