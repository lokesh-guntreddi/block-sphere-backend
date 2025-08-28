// routes/chatRoutes.js
const express = require("express");
const router = express.Router();
const { chatWithTutor } = require("./controllers/chatController");

router.post("/chat", chatWithTutor);

module.exports = router;
