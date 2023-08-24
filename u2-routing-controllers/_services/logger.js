const logger = (req, _res, next) => {
  // Ignore requests for services-worker
  if (req.url === '/service-worker.js') return next()
  // log to console
  console.log(`${new Date().toISOString()}
[${req.method}] ${req.url} ${JSON.stringify(req.body)}`)
  // Hand-over to next middleware/controller
  return next()
}

module.exports = {
  logger
}
