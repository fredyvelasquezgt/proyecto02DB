const Pool = require('pg').Pool

module.exports = () => {
  return new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proyecto',
    password: 'uvg2022',
    port: 5432,
  })
}
