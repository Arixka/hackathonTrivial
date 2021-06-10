const { UserModel } = require('../models/user.model')

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}

exports.getUsers = (req, res) => {
  UserModel
    .find()
    .then(user => {
      console.log('meh')
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'Error' })
    })
}
