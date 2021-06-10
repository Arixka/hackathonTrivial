const userRouter = require('express').Router()

const { createUser, getUsers } = require('../controllers/user.controller')

userRouter.post('/', createUser)
userRouter.get('/', getUsers)

exports.userRouter = userRouter
