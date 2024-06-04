const express = require("express");
const app = express();
const urlRouter = require('./routes/url')
const URL = require('./models/url')


const { connectMongoDB } = require('./connect')
const PORT = 8001;

//connecting to the server
connectMongoDB("mongodb://127.0.0.1:27017/FinalUrlShortner").then( () => console.log("MongoDb connected"))


app.use(express.json())

app.use('/url', urlRouter)
app.get('/:shortID', async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            },
        }
    })
    // res.redirect(result.redirectUrl);
    res.redirect(entry.redirectUrl)
})


app.listen(PORT, () => console.log(`Server started at: ${PORT}`))

