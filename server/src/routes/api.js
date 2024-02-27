const express = require('express');
const readPDFRouter = require('./readPDFRouter');
const readIMGRouter = require('./readIMGRouter');
const readTextRouter = require('./readTextRouter');

const api = express.Router();

api.use('/getDocument', readPDFRouter);
api.use('/getImage', readIMGRouter);
api.use('/textToSpeech', readTextRouter);

module.exports = api;