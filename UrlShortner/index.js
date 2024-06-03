const express = require("express");
const app = express();
const urlRouter = require('./routes/url')
const URL = require('./models/url')


const { connectMongoDB } = require('./connect')
const PORT = 8000;

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


// const express = require("express");
// const app = express();
// const urlRouter = require('./routes/url');
// const URL = require('./models/url');
// const { connectMongoDB } = require('./connect');
// const PORT = 8002;

// connectMongoDB("mongodb://127.0.0.1:27017/url-short");

// app.use(express.json());

// app.use('/url', urlRouter);

// app.get('/:shortID', async (req, res) => {
//     const shortID = req.params.shortID;
//     try {
//         console.log(`Received request with shortID: ${shortID}`);
        
//         const entry = await URL.findOneAndUpdate(
//             { shortID },
//             {
//                 $push: {
//                     visitHistory: {
//                         timestamp: Date.now()
//                     }
//                 }
//             },
//             { new: true } // This option returns the updated document
//         );

//         if (!entry) {
//             // Handle case where entry is not found
//             console.log(`No entry found for shortID: ${shortID}`);
//             return res.status(404).send('URL not found');
//         }

//         console.log(`Redirecting to: ${entry.redirectUrl}`);
//         res.redirect(entry.redirectUrl);
//     } catch (error) {
//         // Handle any other errors
//         console.error(`Error occurred while processing shortID: ${shortID}`, error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(PORT, () => console.log(`Server started at: ${PORT}`));
