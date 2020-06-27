/// <reference lib="DOM"/>

import { IHttpWrapper } from "../";
import { HttpStatusCodeError } from "../";

/**
 * An Http wrapper that uses the Web API function `fetch`, and therefor only
 * works in (newer) browsers.
 */
export class FetchHttpWrapper implements IHttpWrapper {
	public async get<T>(url: string): Promise<T> {
		const response = await fetch(url);

		if (response.status !== 200) {
			throw new HttpStatusCodeError(response.status);
		}
		else {
			const json = await response.json();
			return json as T;
		}
	}
}