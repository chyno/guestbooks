const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://chyno.github.io' : 'http://localhost:3000'
}