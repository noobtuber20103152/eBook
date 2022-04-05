const mongoose = require('mongoose')
const mongouri = "mongodb://localhost:27017/ebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const ConnectToMongo = () => {
    mongoose.connect(mongouri, () => {
        console.log("Connected Successfully")
    })
}
module.exports = ConnectToMongo;