const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortID: {
        type: String, 
        required: true, 
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    }, 
    visitHistory: [ { timestamps: { type: Number }}]
}, { timestamps: true})


const URL = mongoose.model('url', userSchema)


module.exports = URL;