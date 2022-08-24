const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Haytham adel",
    },
    {
        id: 1,
        name: "Mostafa Haytham adel",
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const end = Date.now();
    console.log(end - start);
})

// used to parse the response
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hellloooooo haitham');
})

app.get('/friends/:id', (req, res) => {
    const friendId = req.params.id;
    friends[friendId] ? res.json(friends[friendId]) : res.sendStatus(404);
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hellow from messages</li></ul>');
})

app.post('/messages', (req, res) => {
    console.log("Updating messages ...");
})

app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.sendStatus(400)
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    }
    friends.push(newFriend);
    res.json(newFriend);
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})