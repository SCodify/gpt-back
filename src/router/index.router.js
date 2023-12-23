const gptRouter = require('./gpt.router.js')

const router = (app) => {
  app.use('/api/ask', gptRouter)
}

module.exports = router