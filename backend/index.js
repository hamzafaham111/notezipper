const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
    res.send("API Is Running")
})

app.get("/api/notes", (req, res) => {
    res.send(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((e) => e._id === req.params.id)
    res.send(note);
})
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`)
});