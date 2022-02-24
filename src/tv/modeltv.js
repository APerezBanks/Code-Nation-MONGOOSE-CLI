const mongoose = require("mongoose");


const tvshowSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: " Not specified ",

    },
    year: {
        type: String,
        default: " Not specified "

    },
});


const Tvshow = mongoose.model("Tvshow", tvshowSchema);

module.exports = Tvshow;