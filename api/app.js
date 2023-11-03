let pubData = require('./data/pubData.json')

const express = require('express')
const app = express();

const cors = require("cors")

app.use(cors())

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get('/', (req, res) => {
    res.send({ "Status": "API up and running!" })
})

app.get('/pubs/', (req, res) => {
    res.send(pubData)
})

app.get('/pubs/:id', (req, res) => {
    res.send({ "test": `get pub ${req.params.id}` })
})