const express = require('express');

const app = express();
const port = 9000;

const API_KEY = 'jPanwZMCVEj3ya4zOGuP1NVrcBjRNv6b';

app.get('/', (req, res) => {
    res.status(200).json({ code: 'OK' });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
