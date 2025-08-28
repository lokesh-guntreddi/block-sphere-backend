const express = require("express");
const router = express.Router();
const narrationController = require("../controllers/narrationController");

router.post("/ask-gemini", narrationController.askGemini);

module.exports = router;
