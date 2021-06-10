const questionRouter = require('express').Router()

const { getQuestionId, getDiffQuestions } = require('../controllers/question.controller')

questionRouter.get('/', getDiffQuestions)
questionRouter.get('/:id', getQuestionId)

exports.questionRouter = questionRouter
