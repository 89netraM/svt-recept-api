import { Image, RecipeSearchModelBase } from ".";

export interface RecipeSearchModel extends RecipeSearchModelBase {
	image: Image;
	name: string;
}