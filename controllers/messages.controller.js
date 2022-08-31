const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'mts-logo.jpg'));
    // res.send('<ul><li>Hellow from messages controller</li></ul>');
};

function postMessage(req, res) {
    console.log("Updating messages ...");
};

module.exports = {
    getMessages,
    postMessage
}