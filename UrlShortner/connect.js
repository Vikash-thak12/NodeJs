const mongoose = require('mongoose')

async function connectMongoDB(url) {
    return mongoose.connect(url).then( () => console.log("The database is connected successfully:"))
}

module.exports = {
    connectMongoDB
}