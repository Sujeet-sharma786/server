const mongoose = require('mongoose')

const ImagesSchema = new mongoose.Schema({

        name:String,
        desc:String,
        imgUrl:String
    }

    )
   

module.exports = mongoose.model("images",ImagesSchema);