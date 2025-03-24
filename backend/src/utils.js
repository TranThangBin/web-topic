import { dirname } from "path";
import { fileURLToPath } from "url";

export const MONGOURI =
	process.env.MONGOURI || "mongodb://mongo:27017/game-store";
export const PORT = process.env.PORT || 8080;
export function getDirname() {
	return dirname(fileURLToPath(import.meta.url));
}
