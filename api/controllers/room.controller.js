const { roomModel } = require('../models/room.model')

// crear sala
exports.addUser = (req, res) => {
  roomModel
    .find(req.params.roomId)
    .populate('users')
    .then(room => {
      room.users.push(req.body)
      room.save()
      res.status(200).json(room.users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getARoom = (req, res) => {
  roomModel
    .findOne(req.params.name)
    .then(room => {
      res.status(200).json(room)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
