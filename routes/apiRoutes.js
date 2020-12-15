// Dependencies

const fs = require('fs')

// linking "data source" to db.json
var notes = require("../db/db.json");

// Routing

module.exports = function(app) {
    // API GET Requests

    // attempt #1

    // app.get("/api/notes", function(req, res) {
    //   // this code shows the json note data
    //   res.json(notes);
    //   //read db.json file
    //   fs.readFile('db.json', function(error, data){
    //   // i am trying to return all saved notes as json here
    //     return res.send(data);
    //     // return res.json()
    //   })
    // });

    // attempt #2
    // Displays notes, or returns error
  app.get("/api/notes", function(req, res) {
    var storedNotes = req.body;
    console.log(storedNotes);

    for (var i = 0; i < notes.length; i++) {
      if (storedNotes === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
    return res.json(error);
  });


    // Displays a single character, or returns false
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

  
    // API POST Request

    app.post("/api/notes", function(req, res) {
      // receive new note and save on req.body
      var newNote = req.body;
      console.log(newNote);
      // add to db.json file
      notes.push(newNote);
      // return new note to client
      res.json(newNote);

      // fs.writeFile('db.json', req.body, function(error){
      //   if (error) throw error;
      //   console.log("Added!")
    });

    // API DELETE Requests

    app.delete("/api/notes/:id", function(req, res) {
      // read all notes from db.json

      // remove note with given id property

      // rewrite notes to db.json file
    })

  };
  