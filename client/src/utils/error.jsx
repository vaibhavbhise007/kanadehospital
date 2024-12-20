export const handleError = (error) => {
    if (error.response && error.response.data) {
        return error.response.data.message || "Something went wrong";
    }
    return error.message || "An unexpected error occurred";
};
