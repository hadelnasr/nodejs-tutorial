const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hellloooooo');
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