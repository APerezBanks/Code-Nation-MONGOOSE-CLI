const { exitProcess } = require("yargs");
const Movie = require("./model");


// CRUD > Create
exports.addMovie = async (titleString, actorString, yearString) => {
    try {
        await Movie.create({title: titleString, actor: actorString, year: yearString})
        return "Success Adding to the List";
      } catch (error) {
            console.log(error)   
    }
}
// CRUD > Read
exports.list = async () => {
    try {
        return await Movie.find({});
      } catch (error) {
            console.log(error);
    }
}
// CRUD > Update

            exports.update = async (title, actorNew, yearNew ) => {
                try {
            // const movie = await Movie.findOne({title: title}).exec()
            // console.log(movie)
                return await Movie.updateOne({title: title} ,{actor: actorNew });
            } catch (error) {
                console.log(error);
            }



   // Crud > Delete
    }
exports.deleteM =  async (title, actor) => {
  
       try {
           return await Movie.deleteOne({ title: title}, {actor: actor});
           
   
           
       } catch (error) {
           console.log(error)
           
       }
      
   };


