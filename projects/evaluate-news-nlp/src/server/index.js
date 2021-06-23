var dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// You could call it aylienapi, or anything else
var textapi = process.env.API_KEY;
// });

var baseURL = "https://api.meaningcloud.com/sentiment-2.1";
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
