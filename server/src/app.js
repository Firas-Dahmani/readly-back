require('dotenv').config();
const express = require("express")
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const apiKey = process.env.ELEVEN_LABS_API_KEY;

if (!apiKey) {
  console.error('API key is missing. Please check your .env file.');
  process.exit(1);
}

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));  // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/v1', api)

module.exports = app