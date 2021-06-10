const { QuestionModel } = require('../models/question.model')

exports.getQuestionId = (req, res) => {
  QuestionModel
    .findById(req.params.id)
    .then(question => {
      res.status(200).json(question)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getDiffQuestions = (req, res) => {
  QuestionModel
    .find(req.query)
    .then(question => {
      const arrQuestion = []
      for (let i = 0; i < 10; i++) {
        const selected = Math.floor(Math.random() * question.length)
        arrQuestion.push(question[selected])
      }
      res.status(200).json(arrQuestion)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
