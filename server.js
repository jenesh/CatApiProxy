const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const apiKey = require('./apiKey/catApi')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json(apiKey);
})

app.get('/random', async (req, res) => {

    const config = {
        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search',
        headers: {'x-api-key' : apiKey}
    }

    const data = await axios(config);

    res.send(data.data);
    console.log(data);
})

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})