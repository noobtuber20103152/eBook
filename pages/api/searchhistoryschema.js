const mongoose = require("mongoose");
const { Schema } = mongoose;
const searchquery = new Schema({
    search: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const searchqueryData = mongoose.models.searchquery || mongoose.model("searchquery", searchquery)
module.exports = searchqueryData;