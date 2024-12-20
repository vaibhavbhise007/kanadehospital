// Constants for localStorage keys
const TOKEN_KEY = 'session-token';

/**
 * Retrieve the authentication token from localStorage or cookies.
 * @returns {string | null} - The token if available, or null if not.
 */
export const getToken = () => {
    // First, try to retrieve the token from localStorage
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) return token;

    // Fallback to cookies if the token isn't in localStorage
    return getCookie(TOKEN_KEY);
};

/**
 * Save the authentication token to localStorage.
 * @param {string} token - The token to store.
 */
export const setToken = (token) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        setCookie(TOKEN_KEY, token, { secure: true, sameSite: 'Strict' }); // Store in cookies as well
    }
};

/**
 * Remove the authentication token from localStorage and cookies.
 */
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    deleteCookie(TOKEN_KEY);
};


/**
 * Clear both token and user data from localStorage and cookies.
 */
export const clearAuthData = () => {
    clearToken();
};

/**
 * Retrieve a cookie value by name.
 * @param {string} name - The name of the cookie.
 * @returns {string | null} - The cookie value if found, or null.
 */
export const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
};

/**
 * Set a cookie value.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {Object} options - Additional options (e.g., `secure`, `path`).
 */
export const setCookie = (name, value, options = {}) => {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (options.expires) {
        cookie += `; expires=${options.expires.toUTCString()}`;
    }
    if (options.path) {
        cookie += `; path=${options.path}`;
    }
    if (options.secure) {
        cookie += '; secure';
    }
    if (options.sameSite) {
        cookie += `; samesite=${options.sameSite}`;
    }
    document.cookie = cookie;
};

/**
 * Delete a cookie by name.
 * @param {string} name - The name of the cookie.
 */
export const deleteCookie = (name) => {
    document.cookie = `${name}=; max-age=0; path=/`;
};

/**
 * Check if the user is authenticated (token exists in localStorage or cookies).
 * @returns {boolean} - True if a token exists, false otherwise.
 */
export const isAuthenticated = () => !!getToken();

/**
 * Log debug information about the current auth state.
 */
export const logAuthState = () => {
    console.log('Auth State:');
    console.log('Token:', getToken());
};

// Exporting all utility functions
export default {
    getToken,
    setToken,
    clearToken,
    clearAuthData,
    getCookie,
    setCookie,
    deleteCookie,
    isAuthenticated,
    logAuthState,
};
