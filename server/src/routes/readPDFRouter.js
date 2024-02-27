const express = require('express');
const readPDF = require("../services/readPDF");

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const textToRead = await readPDF(req.body.document, req.body.type);
    res.json({ textToRead });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
