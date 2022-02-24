require("./db/connection");
// this above runs first everything in the connection.js
const mongoose = require ("mongoose");
const yargs = require("yargs");
const {addMovie, list, update, deleteM } = require("./movie/functions");
const {addShow, listTV, updateTV, deleteTV } = require("./tv/functionstv");

// Task:
// • Create a CLI that allows users to store movies in a MongoDB database using mongoose.
// • App must cover all CRUD operations.
// • Movie entries should include optional information.
// Stretch goals - Allow for filtered search results (by name/actor/rating), 
// Create a second Schema/Model for TV shows with full CRUD operations.

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log( await addMovie(yargsObj.title, yargsObj.actor, yargsObj.year));
            // add functionality

        } else if ( yargsObj.list) {
            console.log(await list());
            //list functionality

        } else if (yargsObj.update) {
            console.log(await update(yargsObj.actorNew, yargsObj.title, yargsObj.year));

        } else if (yargsObj.deleteM) {
            console.log (await deleteM(yargsObj.title, yargsObj.title, yargsObj.year));
            
        } else {
            console.log("Incorrect command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
        
    }
}

app(yargs.argv);


// const appTv = async (yargsObj) => {
//     try {
//         if (yargsObj.add) {
//             console.log( await addShow(yargsObj.title, yargsObj.actor, yargsObj.year));
//             // add functionality

//         } else if ( yargsObj.listTV) {
//             console.log(await listTV());
//             //list functionality

//         } else if (yargsObj.updateTV) {
//             console.log(await updateTV(yargsObj.actorNew, yargsObj.title, yargsObj.year));

//         } else if (yargsObj.deleteTV) {
//             console.log (await deleteTV(yargsObj.title, yargsObj.title, yargsObj.year));
            
//         } else {
//             console.log("Incorrect command");
//         }
//         await mongoose.disconnect();
//     } catch (error) {
//         console.log(error)
        
//     }
// }


// appTv(yargs.argv);