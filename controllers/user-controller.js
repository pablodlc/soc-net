const { User } = require('../models');

const userController = {

  // CREATE A USER
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(404).json(err));
  },

  // GET ALL USERS
  getAllUser(req, res) {
    User.find({})
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  // GET A USER (BY ID)
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // UPDATE A USER (BY ID)
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      body,
      {
        new: true,
        runValidators: true
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // DELETE A USER
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // FRIENDS----------

  // ADD A FRIEND
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      {
        _id: params.id
      },
      {
        $push: { friends: params.friendId }
      },
      { new: true })
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: 'No user found with this id.' });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.json(err));
  },

  // REMOVE A FRIEND
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      {
        _id: params.id
      },
      { $pull: { friends: params.friendId } },
      { new: true })
      .populate({ path: 'friends', select: '-__v' })
      .select('-__v')
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: 'No user found with this id.' });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.status(400).json(err));
  }

};

module.exports = userController;
