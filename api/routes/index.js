const router = require('express').Router()
const { userRouter } = require('./user.router')
const { questionRouter } = require('./question.router')
const { createRoom } = require('./room.router')

router
  .use('/users', userRouter)
  .use('/questions', questionRouter)
  .use('/rooms', createRoom)

exports.router = router
