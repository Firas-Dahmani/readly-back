const express = require('express');
const { textToSpeech } = require('../services/textToSpeechService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const audioData = await textToSpeech(req.body.textToRead);
    const bufferToBase64 = Buffer.from(audioData).toString('base64')
    res.send(bufferToBase64)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
