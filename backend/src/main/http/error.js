export class ErudityAPIError extends Error {
  constructor(status, cause) {
    super(`${cause}`);
    this.name = "ErudityAPIError";
    this.status = status;
    this.cause = cause;
  }
}
