const openai = require('../gpt/index.gpt')

const controller = {
  getGpt: async (req, res) => {
    res.json({
      message: "Test get"
    })
  },
  postGpt: async (req, res) => {
    try {
      const { prompt } = req.body
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        response_format:{ "type": "json_object" },
        messages: [
          { 
            "role": "user", 
            "content": prompt 
          }
        ],
        max_tokens: 10
      })
      return res.status(200).json({
        success: true,
        data: response.data.choices[0].message
      })
    } catch (error) {
      console.error('Error en postGpt:', error);
      return res.status(500).json({ success: false, error: 'Error en el servidor: ' + error.message })
    }
  },
  /* putGpt: async (req, res) => {

  },
  deleteGpt: async (req, res) => {

  } */
}

module.exports = controller