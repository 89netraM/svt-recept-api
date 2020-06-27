import { IHttpWrapper } from "./HttpWrapper";
import { CategoriesController, ChefController, FooterController, ProgramController, RecipeController } from "./Controllers";

/**
 * Main class for all your recipe needs. A gateway to SVT's Recept API.
 */
export class SVTRecipesController {
	public static readonly defaultBaseURL: string = "https://program-recept-api.app.svt.se";

	private readonly httpWrapper: IHttpWrapper;
	private readonly baseURL: string;

	public readonly categories: CategoriesController;
	public readonly chef: ChefController;
	public readonly footer: FooterController;
	public readonly program: ProgramController;
	public readonly recipe: RecipeController;

	/**
	 * @param httpWrapper The Http wrapper to use for Http requests.
	 * @param baseURL     Use this base URL instead of the default one.
	 */
	public constructor(httpWrapper: IHttpWrapper, baseURL: string = SVTRecipesController.defaultBaseURL) {
		this.httpWrapper = httpWrapper;
		this.baseURL = baseURL;

		this.categories = new CategoriesController(this.httpWrapper, this.baseURL);
		this.chef = new ChefController(this.httpWrapper, this.baseURL);
		this.footer = new FooterController(this.httpWrapper, this.baseURL);
		this.program = new ProgramController(this.httpWrapper, this.baseURL);
		this.recipe = new RecipeController(this.httpWrapper, this.baseURL);
	}
}