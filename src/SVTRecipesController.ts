import { IHttpWrapper } from "./HttpWrapper";
import { CategoriesController, ChefController, FooterController, ProgramController, RecipeController, SearchController, StartPageController } from "./Controllers";

/**
 * Main class for all your recipe needs. A gateway to SVT's Recept API.
 */
export class SVTRecipesController {
	public static readonly defaultBaseURL: string = "https://program-recept-api.app.svt.se";

	/**
	 * Returns a URL to the given image.
	 * @param imageId The id of the image.
	 * @param format  The format of the image. `wide` is in 16:9 format.
	 * @param width   The pixel with of the image. Max is 3000px.
	 */
	public static imageHelper(imageId: number, format: "wide" | "square" | "original" = "original", width: number | "unscaled" = 1280): string {
		return `https://www.svtstatic.se/image/${format}/${width}/${imageId}`;
	}

	private readonly httpWrapper: IHttpWrapper;
	private readonly baseURL: string;

	public readonly categories: CategoriesController;
	public readonly chef: ChefController;
	public readonly footer: FooterController;
	public readonly program: ProgramController;
	public readonly recipe: RecipeController;
	public readonly search: SearchController
	public readonly startPage: StartPageController;

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
		this.search = new SearchController(this.httpWrapper, this.baseURL);
		this.startPage = new StartPageController(this.httpWrapper, this.baseURL);
	}
}