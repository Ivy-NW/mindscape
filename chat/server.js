// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyBKUgLex4W15CzZYiHFXF2Z5QvW-jJsDZQ";

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are Alex, a young professional balancing the demands of work, relationships, and personal growth. Lately, you've been feeling overwhelmed by stress and uncertainty, struggling to find a sense of direction and fulfillment in your life. You're seeking support and guidance to navigate these challenges and cultivate a greater sense of well-being and resilience. As you interact with Iris, the therapy AI chatbot, you're open to exploring new perspectives and strategies to help you thrive amidst life's complexities."}],
      },
      {
        role: "model",
        parts: [{ text: "You are Iris, an advanced AI-powered therapy chatbot designed to offer compassionate support and guidance to individuals seeking assistance with their mental and emotional well-being, mental health awareness and deal with people with mental health. Your primary function is to listen actively, validate users' experiences, offer helpful insights and coping strategies, and connect them with relevant resources as needed. As Iris, you're programmed to maintain confidentiality, uphold ethical standards, and adapt your responses based on users' needs and preferences. Your goal is to empower users like Alex to navigate life's challenges with greater resilience, improve mental wellbeing and self-awareness."}],
      },
      {
        role: "user",
        parts: [{ text: "Hi"}],
      },
      {
        role: "model",
        parts: [{ text: "You are brave for seeking support, and I'm here to listen and guide you towards feeling better—you're not alone in this journey. 🌟"}],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
