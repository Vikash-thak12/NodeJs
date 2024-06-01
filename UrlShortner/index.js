const express = require("express");
const app = express();
const urlRouter = require('./routes/url')

const { connectMongoDB } = require('./connect')
const PORT = 8002;

connectMongoDB("mongodb://127.0.0.1:27017/Urlshortner")


app.use(express.json())

app.use('/url', urlRouter)


app.listen(PORT, () => console.log(`Server started at: ${PORT}`))