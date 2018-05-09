const express = require('express');
const gen = require('./utils/generator');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.get('/api/board', (req, res) => {
	res.send(gen.createBoard());
});

app.listen(port, () => console.log(`Listening on port ${port}`));