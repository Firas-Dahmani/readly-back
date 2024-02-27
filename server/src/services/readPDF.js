const pdf = require('pdf-parse');
const mammoth = require("mammoth");

async function convertBase64ToText(base64Data, fileType) {
  const dataWithoutPrefix = base64Data.replace(/^data:application\/(pdf|vnd.openxmlformats-officedocument.wordprocessingml.document);base64,/, '');
  let binaryData = Buffer.from(dataWithoutPrefix, 'base64');
  
  if (fileType === 'pdf') {
    // For PDF files
    const pdfData = await pdf(binaryData);
    return pdfData.text;
  } else if (fileType === 'docx') {
    // Use mammoth to extract raw text
    try {
      const result = await mammoth.extractRawText({ buffer: binaryData });
      // Result will contain the raw text content
        return result.value;
      } catch (err) {
        console.error("Error extracting content:", err);
        throw err; // Rethrow the error to handle it at a higher level
      }
  } else {
    throw new Error('Unsupported file type');
  }
}


module.exports = convertBase64ToText;

