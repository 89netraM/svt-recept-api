import { BaseController } from "./BaseController";
import { ProgramListModel, Program, RecipeSearchModel, RecipeListModel } from "../Models";

export class ProgramController extends BaseController {
	/**
	 * Returns all programs.
	 */
	public programs(): Promise<ProgramListModel>;
	/**
	 * Returns all programs.
	 */
	public programs(limit: number, offset: number): Promise<ProgramListModel>;
	public programs(limit?: number, offset?: number): Promise<ProgramListModel> {
		if (limit != null && offset != null) {
			return this.get("/v1/programs", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/programs");
		}
	}

	/**
	 * Returns program by slug.
	 */
	public program(slug: string): Promise<Program> {
		return this.get(`/v1/program/${slug}`);
	}

	/**
	 * Returns a list of recipes for a specific program.
	 */
	public programRecipes(slug: string): Promise<RecipeSearchModel>;
	/**
	 * Returns a list of recipes for a specific program.
	 */
	public programRecipes(slug: string, limit: number, offset: number): Promise<RecipeSearchModel>;
	public programRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeSearchModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/program/${slug}/recipes`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/program/${slug}/recipes`);
		}
	}

	/**
	 * Returns editorial recipes for program by slug.
	 */
	public programEditorialRecipes(slug: string): Promise<RecipeListModel>;
	/**
	 * Returns editorial recipes for program by slug.
	 */
	public programEditorialRecipes(slug: string, limit: number, offset: number): Promise<RecipeListModel>;
	public programEditorialRecipes(slug: string, limit?: number, offset?: number): Promise<RecipeListModel> {
		if (limit != null && offset != null) {
			return this.get(`/v1/program/${slug}/recipes/editorial`, { "limit": limit, "offset": offset });
		}
		else {
			return this.get(`/v1/program/${slug}/recipes/editorial`);
		}
	}
}