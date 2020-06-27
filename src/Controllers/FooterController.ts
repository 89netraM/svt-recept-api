import { BaseController } from "./BaseController";
import { FooterModel } from "../Models";

export class FooterController extends BaseController {
	/**
	 * Returns a list of footer links.
	 */
	public footer(): Promise<FooterModel>;
	/**
	 * Returns a list of footer links.
	 */
	public footer(limit: number, offset: number): Promise<FooterModel>;
	public footer(limit?: number, offset?: number): Promise<FooterModel> {
		if (limit != null && offset != null) {
			return this.get("/v1/footer", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/footer");
		}
	}
}