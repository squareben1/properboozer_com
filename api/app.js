// let pubData = require('./data/pubData.json')
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000;
let routes = require("./routes.js")

const cors = require("cors")

app.use(cors({ origin: "http://localhost:3000" }))

app.use("/", routes);
app.use(express.json());


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
