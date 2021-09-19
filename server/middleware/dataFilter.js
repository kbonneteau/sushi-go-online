/**
 * Sanitize user input for URL parameters (only allow numbers, letters and dashes) to avoid script injections
 * @param {string} id entered in URL
 * @returns {string} with any non-accepted characters filtered out.
 */

// need to change this to middleware format (i.e. req, res, next())
const filterUserInput = id => {
    return id.replace(/[^a-z0-9\-]/gi, "");
};

module.exports = {
    filterUserInput
}