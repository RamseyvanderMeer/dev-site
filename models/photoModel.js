const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({

    photo_id:{
        type:String,
        unique:true,
        required:true
    },
    images:{
        type:Object,
        required:true
    }

})

module.exports = mongoose.model('photo', photoSchema)