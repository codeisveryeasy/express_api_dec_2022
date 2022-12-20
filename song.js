let mongoose = require("mongoose")

//setup new schema (database)
let youtubeSchema = mongoose.Schema

//map to song collection
let songCollection = new youtubeSchema({
    "videoid":String,
    "likes":Number,
    "dislikes":Number,
    "views":Number
},{
    collection:"song"
})

module.exports = mongoose.model("myvideos", songCollection)