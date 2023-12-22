
let express = require("express"),
    router = express.Router();

const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'properboozer',
    password: 's3kreee7'
})

router.get('/status', (req, res) => {
    res.send({ "Status": "API up and running!" })
})

// ======PUBS======

router.get('/pubs/', (req, res) => {
    conn.query('SELECT * FROM Pubs;', function (error, results, fields) {
        if (error) throw error;
        console.log('Res: ', results);
        res.send(results)
    });
})

router.get('/pubs/:id/nearby_museums', (req, res) => {
    // res.send({ "test": `get pub ${req.params.id}` })
    const query = "SELECT Museums.* FROM Museums JOIN PubMuseumAssociation ON Museums.id = PubMuseumAssociation.museum_id WHERE PubMuseumAssociation.pub_id = "
    conn.query(query + req.params.id + ";", function (error, results, fields) {
        if (error) throw error;
        console.log('Res: ', results);
        res.send(results)
    });
})

router.get('/pubs/:id', (req, res) => {
    res.send({ "test": `get pub ${req.params.id}` })
})

// ======MUSEUMS======

router.get('/museums/', (req, res) => {
    conn.query('SELECT * FROM Museums;', function (error, results, fields) {
        if (error) throw error;
        console.log('Res: ', results);
        res.send(results)
    });
})

router.get('/museums/:id', (req, res) => {
    res.send({ "test": `get museum ${req.params.id}` })
})

module.exports = router