// Centralized error handling for the API.
//
// Before this, controllers each caught their own errors and returned
// ad-hoc 500 responses, and there was no handler for unknown routes
// or for errors thrown outside a try/catch (e.g. in middleware).
// These two handlers must be registered last, after all routes.

export const notFound = (req, res, next) => {
    res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack || err);

    const status = err.status || err.statusCode || 500;
    const message = status === 500 ? "Internal server error" : err.message;

    res.status(status).json({ error: message });
};
