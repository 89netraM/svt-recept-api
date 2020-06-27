import { IHttpWrapper } from "./HttpWrapper";
import { CategoriesController } from "./Controllers/CategoriesController";

/**
 * Main class for all your recipe needs. A gateway to SVT's Recept API.
 */
export class SVTRecipesController {
	public static readonly defaultBaseURL: string = "https://program-recept-api.app.svt.se";

	private readonly httpWrapper: IHttpWrapper;
	private readonly baseURL: string;

	public readonly categories: CategoriesController;

	/**
	 * @param httpWrapper The Http wrapper to use for Http requests.
	 * @param baseURL     Use this base URL instead of the default one.
	 */
	public constructor(httpWrapper: IHttpWrapper, baseURL: string = SVTRecipesController.defaultBaseURL) {
		this.httpWrapper = httpWrapper;
		this.baseURL = baseURL;

		this.categories = new CategoriesController(this.httpWrapper, this.baseURL);
	}
}