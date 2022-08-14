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

app.get('/', (req, res) => {
    res.send('Hellloooooo');
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

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})