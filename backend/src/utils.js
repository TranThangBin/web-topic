import { dirname } from "path";
import { fileURLToPath } from "url";

export const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017";
export const MONGO_DATABASE = process.env.MONGO_DATABASE || "game-store";
export const MONGO_USER = process.env.MONGO_USER || "example";
export const MONGO_PASS = process.env.MONGO_PASS || "examplepass";
export const MONGO_APPNAME = process.env.MONGO_APPNAME || "Cluster0";
export const PORT = process.env.PORT || 8080;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") || [
	"http://127.0.0.1:3000",
	"http://localhost:3000",
];
export function getDirname() {
	return dirname(fileURLToPath(import.meta.url));
}
