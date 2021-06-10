const roomRouter = require('express').Router()

const { addUser, getARoom } = require('../controllers/room.controller')

roomRouter.post('/rooms/:roomId', addUser)
roomRouter.get('/rooms', getARoom)

exports.roomRouter = roomRouter
