const mongoose = require("mongoose");

// define a  schema s : is the class constructor , pass to themodel is the class name

const movieSchema = new mongoose.Schema( {
// this above is a schema, can take different value pairs . we passing an object {}
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

// require means it must , be a string , must have a title, and not the same tittle (unique)

// model bellow should always have a capital letter

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;