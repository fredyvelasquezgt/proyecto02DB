const config = {
  port: process.env.PORT || 8000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRouter: process.env.FILES_ROUTER || 'files',
}

module.exports = config
