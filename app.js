// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const narrationRoutes = require("./routes/narrationRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));

app.use("/api", narrationRoutes);

// health
app.get("/health", (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

module.exports = app;
