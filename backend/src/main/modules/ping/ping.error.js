import { ErudityAPIError } from "../../http";

export class PingError extends ErudityAPIError {
  constructor(status, cause) {
    status ? super(status, cause) : super(400, cause);
    this.name = "PingError";
  }
}
