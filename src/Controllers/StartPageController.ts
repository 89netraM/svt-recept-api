import { BaseController } from "./";
import { LatestLinksModel, RecommendedLinksModel, TopImage } from "../Models";

export class StartPageController extends BaseController {
	/**
	 * Returns a list of latest programme links.
	 */
	public latest(): Promise<LatestLinksModel>;
	/**
	 * Returns a list of latest programme links.
	 */
	public latest(limit: number, offset: number): Promise<LatestLinksModel>;
	public latest(limit?: number, offset?: number): Promise<LatestLinksModel> {
		if (limit != null && offset != null) {
			return this.get("/v1/startpage/latest", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/startpage/latest");
		}
	}
	
	/**
	 * Returns a list of recipe links.
	 */
	public recommended(): Promise<RecommendedLinksModel>;
	/**
	 * Returns a list of recipe links.
	 */
	public recommended(limit: number, offset: number): Promise<RecommendedLinksModel>;
	public recommended(limit?: number, offset?: number): Promise<RecommendedLinksModel> {
		if (limit != null && offset != null) {
			return this.get("/v1/startpage/recommended", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/startpage/recommended");
		}
	}
	
	/**
	 * Returns a list of images.
	 */
	public topImage(): Promise<TopImage>;
	/**
	 * Returns a list of images.
	 */
	public topImage(limit: number, offset: number): Promise<TopImage>;
	public topImage(limit?: number, offset?: number): Promise<TopImage> {
		if (limit != null && offset != null) {
			return this.get("/v1/startpage/top-image", { "limit": limit, "offset": offset });
		}
		else {
			return this.get("/v1/startpage/top-image");
		}
	}
}