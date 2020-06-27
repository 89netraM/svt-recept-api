import { BaseController } from "./";
import { ChefListModel, Chef, RecipeSearchModel, RecipeListModel } from "../Models";

export class ChefController extends BaseController {
	/** Returns all chefs. */
	public chefsAll(): Promise<ChefListModel>;
	/** Returns all chefs. */
	public chefsAll(markedAsChef: boolean): Promise<ChefListModel>;
	/** Returns all chefs. */
	public chefsAll(limit: number, offset: number): Promise<ChefListModel>;
	/** Returns all chefs. */
	public chefsAll(markedAsChef: boolean, limit: number, offset: number): Promise<ChefListModel>;
	public chefsAll(a?: boolean | number, b?: number, c?:number): Promise<ChefListModel> {
		if (a == null) {
			return this.get("/v1/chefs/all");
		}
		else if (typeof a === "number") {
			return this.get("/v1/chefs/all", { "limit": a, "offset": b });
		}
		else {
			if (b == null) {
				return this.get("/v1/chefs/all", { "markedAsChef": a });
			}
			else {
				return this.get("/v1/chefs/all", { "markedAsChef": a, "limit": b, "offset": c });
			}
		}
	}
	
	/** Returns all editorial chefs. */
	public chefs(): Promise<ChefListModel>;
	/** Returns all editorial chefs. */
	public chefs(limit: number, offset: number): Promise<ChefListModel>;
	public chefs(limit?: number, offset?: number): Promise<ChefListModel> {
		if (limit != null && offset != null) {
			return this.get("/v1/chefs", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/chefs");
		}
	}

	/**
	 * Returns chef by slug.
	 */
	public chef(slug: string): Promise<Chef> {
		return this.get(`/v1/chef/${slug}`);
	}
	
	/**
	 * Returns a list of recipes for chef by slug.
	 */
	public chefRecipes(slug: string): Promise<RecipeSearchModel>;
	/**
	 * Returns a list of recipes for chef by slug.
	 */
	public chefRecipes(slug: string, limit: number, offset: number): Promise<RecipeSearchModel>;
	public chefRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeSearchModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/chef/${slug}/recipes`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/chef/${slug}/recipes`);
		}
	}
	
	/**
	 * Returns editorial recipes for chef by slug.
	 */
	public chefEditorialRecipes(slug: string): Promise<RecipeListModel>;
	/**
	 * Returns editorial recipes for chef by slug.
	 */
	public chefEditorialRecipes(slug: string, limit: number, offset: number): Promise<RecipeListModel>;
	public chefEditorialRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeListModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/chef/${slug}/recipes/editorial`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/chef/${slug}/recipes/editorial`);
		}
	}
}