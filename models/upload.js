const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    originalname:{
        type:String
    },
    path:{
        type:String
    },
    size:{
        type:Number
    }
})

const Upload = mongoose.model('Upload', UploadSchema);

module.exports = Upload;