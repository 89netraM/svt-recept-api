import { BaseController } from "./";
import { Tags, RecipeCategory, RecipeSearchModel, RecipeListModel } from "../Models";

export class CategoriesController extends BaseController {
	/**
	 * Returns a list of all available categories.
	 */
	public categories(): Promise<{ tags: Array<Tags> }>;
	/**
	 * Returns a list of all available categories.
	 */
	public categories(limit: number, offset: number): Promise<{ tags: Array<Tags> }>;
	public categories(limit?: number, offset?: number): Promise<{ tags: Array<Tags> }> {
		if (limit != null && offset != null) {
			return this.get("/v1/categories", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/categories");
		}
	}

	/**
	 * Returns category by slug.
	 */
	public category(slug: string): Promise<RecipeCategory> {
		return this.get(`/v1/category/${slug}`);
	}

	/**
	 * Returns a list of recipes for recipe category by slug.
	 */
	public categoryRecipes(slug: string): Promise<RecipeSearchModel>;
	/**
	 * Returns a list of recipes for recipe category by slug.
	 */
	public categoryRecipes(slug: string, limit: number, offset: number): Promise<RecipeSearchModel>;
	public categoryRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeSearchModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/category/${slug}/recipes`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/category/${slug}/recipes`);
		}
	}

	/**
	 * Returns editorial recipes for recipe category by slug.
	 */
	public categoryEditorialRecipes(slug: string): Promise<RecipeListModel>;
	/**
	 * Returns editorial recipes for recipe category by slug.
	 */
	public categoryEditorialRecipes(slug: string, limit: number, offset: number): Promise<RecipeListModel>;
	public categoryEditorialRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeListModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/category/${slug}/recipes/editorial`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/category/${slug}/recipes/editorial`);
		}
	}
}