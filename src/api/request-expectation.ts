import { RequestExt } from "../server";
import {
  validateRawBodyEquals,
  validateBodyEquals,
  validateBodyEmpty,
  validateBodyNotEmpty,
  validateXMLBodyEquals,
} from "./request-validations";

/**
 * Class containing all the expectations that can be run on the request.
 */
export class RequestExpectation {
  public constructor(private originalRequest: RequestExt) {}
  /**
   * Expect the raw body of the request to match the given string.
   * @param rawBody Raw request body.
   * @throws {ValidationError} if there is an error.
   */
  public rawBodyEquals(expectedRawBody: string | undefined): void {
    validateRawBodyEquals(this.originalRequest, expectedRawBody);
  }

  /**
   * Expect the body of the request to match the given object.
   * @param rawBody Raw request body.
   * @throws {ValidationError} if there is an error.
   */
  public bodyEquals(expectedRawBody: unknown | undefined): void {
    validateBodyEquals(this.originalRequest, expectedRawBody);
  }

  /**
   * Expect the body of the request to be empty.
   * @throws {ValidationError} if there is an error.
   */
  public bodyEmpty(): void {
    validateBodyEmpty(this.originalRequest);
  }

  /**
   * Expect the body of the request to be not empty.
   * @throws {ValidationError} if there is an error.
   */
  public bodyNotEmpty(): void {
    validateBodyNotEmpty(this.originalRequest);
  }

  /**
   * Expect the body of the request matches the XML body you expect
   * @param expectedRawBody Raw request XML body expressed in a string.
   * @throws {ValidationError} if there is an error.
   */
  public async xmlBodyEquals(expectedRawBody: string): Promise<void> {
    await validateXMLBodyEquals(this.originalRequest, expectedRawBody);
  }
}
