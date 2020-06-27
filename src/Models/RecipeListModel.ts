import { RecipeTeaser } from "./";

export interface RecipeListModel {
	limit: number;
	offset: number;
	recipes: Array<RecipeTeaser>;
	totalResults: number;
}