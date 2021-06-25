const dotenv = require('dotenv');
dotenv.config();
const APIKey = process.env.API_KEY;
console.log("MeaningCloud APPI key =", APIKey)
let path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors')
let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}
const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))
console.log(JSON.stringify(mockAPIResponse))
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})
// Setup Server
const port = 8080;
// Spin up the server
// const server = app.listen(port, () => console.log(`Running on localhost: ${port}`));
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})
// POST route
app.post('/inputfield', async (req, res) => {
    console.log('req====+>', req.body)
    const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + req.body.url + "&lang=en")
    try {
        console.log(result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error", error);
    }
});
