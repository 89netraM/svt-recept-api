import { IHttpWrapper } from "./HttpWrapper";

export class SVTRecipesController {
	private readonly httpWrapper: IHttpWrapper;

	public constructor(httpWrapper: IHttpWrapper) {
		this.httpWrapper = httpWrapper;
	}
}