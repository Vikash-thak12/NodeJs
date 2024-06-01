const express = require("express");
const app = express();

const { connectMongoDB } = require('./connect')
const PORT = 8002;

connectMongoDB("mongodb://127.0.0.1:27017/Urlshortner")



app.listen(PORT, () => console.log(`Server started at: ${PORT}`))