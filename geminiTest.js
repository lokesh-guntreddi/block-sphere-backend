require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function run() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Hello Gemini, what is a qubit?");
    console.log(result.response.text());
  } catch (err) {
    console.error("Gemini API Error:", err.message);
  }
}

run();
