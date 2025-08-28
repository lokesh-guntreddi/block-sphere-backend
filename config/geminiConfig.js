// src/config/geminiConfig.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Make sure you set GOOGLE_API_KEY in .env
const apiKey = process.env.GOOGLE_API_KEY;
let client = null;

if (apiKey) {
  client = new GoogleGenerativeAI(apiKey);
}

module.exports = {
  client,
  hasGemini: !!client,
};
