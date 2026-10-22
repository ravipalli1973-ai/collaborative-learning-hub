module.exports = function errorHandler(err, req, res, next) {
  console.error('[Error]', err.stack || err.message);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
};