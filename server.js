const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

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

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})