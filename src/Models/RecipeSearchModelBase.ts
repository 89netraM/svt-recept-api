import { RecipeTeaser } from ".";

export interface RecipeSearchModelBase {
	limit: number;
	offset: number;
	query: string;
	results: Array<RecipeTeaser>;
	totalResults: number;
}