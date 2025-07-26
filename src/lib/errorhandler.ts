/**
 * @typedef {Object} SupabaseError
 * @property {string} code - PostgreSQL error code (e.g., '23505' for unique violation)
 * @property {string} message - General error message from Supabase/PostgreSQL
 * @property {string} [details] - More specific details about the error (optional)
 * @property {string} [hint] - A hint to resolve the error (optional)
 */

/**
 * Parses and throws a formatted error based on a Supabase or JavaScript error object.
 *
 * @param {SupabaseError | Error | any} error - The error object to parse.
 * @throws {Error} A new Error with a user-friendly message.
 */
export function errorHandler(error) {
    let message = "An unknown error occurred.";
  
    if (!error) {
      throw new Error(message);
    }
  
    if (error instanceof Error) {
      if (error.message.includes("Network Error") || error.message.includes("Failed to fetch")) {
        throw new Error("Could not connect to the server. Please check your internet connection.");
      }
      throw new Error(`An unexpected error occurred: ${error.message}`);
    }
  
    /** @type {SupabaseError} */
    const supabaseError = error;
    const { code, message: rawMessage, hint } = supabaseError;
  
    switch (code) {
      case "PGRST116":
        return null;
      case '23502':
        message = "A required field is missing. Please fill in all necessary information.";
        break;
      case '23503':
        message = "Cannot complete this action. It's linked to other data that might be missing or in use.";
        break;
      case '23505':
        message = "This entry already exists. Please provide a unique value.";
        break;
      case '22P02':
        message = "Invalid data format provided. Please check your input fields.";
        break;
      case '42P01':
        message = "Internal server error: The requested resource is unavailable. Please try again later.";
        break;
      case '42703':
        message = "Internal server error: Data structure mismatch. Please contact support.";
        break;
      case 'PGRST100':
        message = "Invalid request: Please ensure all parameters are correct.";
        break;
      case '400':
      case '401':
        message = "You are not authorized to perform this action. Please log in.";
        break;
      case '403':
        message = "You do not have permission to access this resource.";
        break;
      case '404':
        message = "The requested resource was not found.";
        break;
      case '409':
        message = "There was a conflict with your request. Please try again.";
        break;
      case '500':
        message = "An unexpected server error occurred. Please try again later.";
        break;
  
      default:
        message = rawMessage ? `An error occurred: ${rawMessage}. ${hint ?? ""}` : message;
        break;
    }
  
    throw new Error(message);
  }
  