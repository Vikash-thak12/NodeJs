const shortid = require('shortid')
const URL = require('../models/url')


// Function for generating new short url 
async function  handleGenerateNewUrl(req, res) {
    const body = req.body;
    const shortID = shortid();
    if(!body.url) return res.status(400).json({ Error: "Url must required:"})

    await URL.create( {
        shortID: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.json({ ID: shortID})
}

async function handleGetAnalytics(req, res){
    const shortID = req.params.shortID;
    const result = await URL.findOne({ shortID })
    return res.json( {
        TotalClicks: result.visitHistory.length,
        Analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewUrl,
    handleGetAnalytics
}
