import { IHttpWrapper } from "..";

export abstract class BaseController {
	private readonly httpWrapper: IHttpWrapper;
	private readonly baseURL: string;

	public constructor(httpWrapper: IHttpWrapper, baseURL: string) {
		this.httpWrapper = httpWrapper;
		this.baseURL = baseURL;
	}

	protected get<T>(urlPart: string, queryParameters?: { [name: string]: string | number | boolean }): Promise<T> {
		let url = this.baseURL + urlPart;

		if (queryParameters != null) {
			url += "?" + Object.getOwnPropertyNames(queryParameters).map(n => `${n}=${queryParameters[n]}`).join("&");
		}

		return this.httpWrapper.get<T>(url);
	}
}