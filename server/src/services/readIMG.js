const Tesseract = require('tesseract.js');

const extractTextFromImage = async (imageBuffer) => {
  try {
    const { data: { text } } = await Tesseract.recognize(
      imageBuffer,
      'eng+fra+ara'
    );

    return text;
  } catch (error) {
    console.error('Error extracting text from image:', error);
    throw error;
  }
};

module.exports = {
  extractTextFromImage,
};


