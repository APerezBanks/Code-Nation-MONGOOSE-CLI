const Tvshow = require("./modeltv");


// CRUD > Create
exports.addShow = async (titleString, actorString, yearString) => {
    try {
        await Tvshow.create({title: titleString, actor: actorString, year: yearString})
        return "Success Adding to the Tv List";
      } catch (error) {
            console.log(error)   
    }
}
// CRUD > Read
exports.listTV = async () => {
    try {
        return await Tvshow.find({});
      } catch (error) {
            console.log(error);
    }
}
// CRUD > Update

exports.updateTV = async (title, actorNew, yearNew ) => {
        try {
        return await Tvshow.updateOne({title: title} ,{actor: actorNew }, { year: yearNew} );
      } catch (error) {
          console.log(error);
      }
   // Crud > Delete
    }
exports.deleteTV =  async (title, actor) => {
       try {
           return await Tvshow.deleteOne({ title: title}, {actor})
           
       } catch (error) {
           console.log(error)
           
       }
      
   };


