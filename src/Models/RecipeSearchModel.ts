import { Image, RecipeTeaser } from "./";

export interface RecipeSearchModel {
	image: Image;
	limit: number;
	name: string;
	offset: number;
	query: string;
	results: Array<RecipeTeaser>;
	totalResults: number;
}