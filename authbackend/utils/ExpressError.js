class ExpressError extends Error {
  constructor(message, success, statusCode) {
    super(message);
    this.message = message;
    this.success = success;
    this.statusCode = statusCode;
  }
}
export default ExpressError;
