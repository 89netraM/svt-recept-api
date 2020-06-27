import { BaseController } from "./BaseController";
import { Recipe } from "../Models";

export class RecipeController extends BaseController {
	/**
	 * Returns recipe by slug.
	 */
	public recipe(slug: string): Promise<Recipe> {
		return this.get(`/v1/recipe/${slug}`);
	}
}