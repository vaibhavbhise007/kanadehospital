// Function to get the value of a cookie by name
function getCookieValueByName(cookies, name) {
    // Check if the name exists in cookies (use "in" keyword)
    if (!(name in cookies)) return null;

    // Return the value associated with the name
    return cookies[name];
}

// Export the getCookieValueByName function
module.exports = { getCookieValueByName };