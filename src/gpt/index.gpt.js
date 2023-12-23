const { apiKey } = require('../config/index.config')
const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey
})

module.exports = openai