/**
 * An error thrown when the returned status code of an HTTP request isn't 200.
 */
export class HttpStatusCodeError {
	/**
	 * The status code that caused the error.
	 */
	public readonly statusCode: number;

	public constructor(statusCode: number) {
		this.statusCode = statusCode;
	}
}