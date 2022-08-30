const friendsModel = require('../models/friends.model');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.sendStatus(400)
    }
    const newFriend = {
        id: friendsModel.friends.length,
        name: req.body.name
    }
    friendsModel.friends.push(newFriend);
    res.json(newFriend);
};

function getFriends(req, res) {
    res.json(friendsModel.friends)
};

function getFriend(req, res) {
    const friendId = req.params.id;
    friendsModel.friends[friendId] ? res.json(friendsModel.friends[friendId]) : res.sendStatus(404);
};

module.exports = {
    getFriend,
    getFriends,
    postFriend
}