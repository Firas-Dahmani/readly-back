const express = require('express');
const multer = require('multer');
const { extractTextFromImage } = require('../services/readIMG');

const router = express.Router();

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const text = await extractTextFromImage(req.body.image);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: 'Error extracting text from image.' });
  }
});

module.exports = router;