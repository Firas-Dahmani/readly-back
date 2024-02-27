
const textToSpeech = async (textToRead) => {
  try {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${process.env.ELEVEN_LABS_VOICE_ID}`;
    
    const headers = {
      Accept: 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': process.env.ELEVEN_LABS_API_KEY,
    };

    const data = {
      text: textToRead,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.status === 200) {
      throw new Error('Failed to get audio from Eleven Labs API');
    }
    
    // Convert response to array buffer
    const audioBuffer = await response.arrayBuffer();

    return audioBuffer;
    
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to get audio from Eleven Labs API');
  }
};

module.exports = {
  textToSpeech,
};