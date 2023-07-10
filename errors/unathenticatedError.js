import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnathenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UnathenticatedError;
  }
}

export default UnathenticatedError;
