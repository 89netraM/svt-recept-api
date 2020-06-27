/**
 * An interface for making HTTP requests. Used so that the API wrapper can be
 * platform independent.
 */
export interface IHttpWrapper {
	/**
	 * A method that requests the specified `url` and returns the JSON content
	 * in the type of `T`.
	 *
	 * @param url The request URL.
	 *
	 * @throws {HttpStatusCodeError} Should throw an error if the returned HTTP
	 *                               status code isn't 200.
	 */
	get<T>(url: string): Promise<T>;
}