const nanoid = require("nanoid")
const URL = require('../models/url')

async function  handleGenerateNewUrl(req, res) {
    const body = req.body;
    const shortID = nanoid(8);
    if(!body.url) return res.status(400).json({ Error: "Url must required:"})

    await URL.create( {
        shortID: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.json({ shortID: shortID})
}


module.exports = {
    handleGenerateNewUrl,
}