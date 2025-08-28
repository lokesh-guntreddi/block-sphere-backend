const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.askGemini = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(question);

    res.json({ answer: result.response.text() });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: "Gemini failed", details: err.message });
  }
};
