require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  apiKey: process.env.OPEN_AI_KEY
}