const { Router } = require('express')
const router = Router()

const gptController = require('../controllers/gpt.controller')

router.get('/', gptController.getGpt)
router.post('/', gptController.postGpt)
/* router.put('/', gptController.putGpt)
router.delete('/', gptController.deleteGpt) */

module.exports = router