function notFoundHandler(req, res, next) {
  const err = new Error('Method not found');
  err.status = 404;
  next(err);
}

export default notFoundHandler;
