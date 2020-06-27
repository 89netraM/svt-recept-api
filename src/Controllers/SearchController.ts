import { BaseController } from "./";
import { RecipeSearchModelBase } from "../Models";

export class SearchController extends BaseController {
	/**
	 * Returns a list of recipes.
	 */
	public search(query: string): Promise<RecipeSearchModelBase>;
	/**
	 * Returns a list of recipes.
	 */
	public search(query: string, limit: number, offset: number): Promise<RecipeSearchModelBase>;
	public search(query: string, limit?: number, offset?: number): Promise<RecipeSearchModelBase> {
		if (limit != null && offset != null) {
			return this.get("/v1/search", { "q": query, "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/search", { "q": query });
		}
	}
	
	/**
	 * Returns a list of recipes based on tags.
	 */
	public searchTag(slug: string): Promise<RecipeSearchModelBase>;
	/**
	 * Returns a list of recipes based on tags.
	 */
	public searchTag(slug: string, limit: number, offset: number): Promise<RecipeSearchModelBase>;
	public searchTag(slug: string, limit?: number, offset?: number): Promise<RecipeSearchModelBase> {
		if (limit != null && offset != null) {
			return this.get(`/v1/search/tag/${slug}`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/search/tag/${slug}`);
		}
	}
	
	/**
	 * Returns a list of latest recipes.
	 */
	public searchLatest(): Promise<RecipeSearchModelBase>;
	/**
	 * Returns a list of latest recipes.
	 */
	public searchLatest(limit: number, offset: number): Promise<RecipeSearchModelBase>;
	public searchLatest(limit?: number, offset?: number): Promise<RecipeSearchModelBase> {
		if (limit != null && offset != null) {
			return this.get("/search/latest", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/search/latest");
		}
	}
}