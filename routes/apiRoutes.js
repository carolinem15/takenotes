// Dependencies

const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// linking "data source" to db.json
var notes = require("../db/db.json");

// Routing

module.exports = function(app) {
    // API GET Request

    app.get("/api/notes", function(req, res) {
      // this code shows the json note data
      res.json(notes);
    });

    // API POST Request

    app.post("/api/notes", function(req, res) {
      // receive new note and save on req.body
      var newNote = req.body;
      // added unique identifier npm package 
      newNote.id = uuidv4(); 
      // add to db.json file
      notes.push(newNote);
      // return new note to client
      console.log(notes);
      res.json(newNote);
      
      fs.writeFile('db/db.json', JSON.stringify(notes), function(error){
        if (error) throw error;
        console.log("Added!");
      });
    });

    // API DELETE Requests

    app.delete("/api/notes/:id", function(req, res) {
      // read all notes from db.json
      console.log(req.params);
      // used .filter() to select out a note with a specific id
      let editedNotes = notes.filter(note => note.id != req.params.id);
      console.log(editedNotes);
      res.json(editedNotes);
      // rewrite notes to db.json file
      fs.writeFile('db/db.json', JSON.stringify(editedNotes), function(error){
        if (error) throw error;
        console.log("Added!");
      });
    });

  };
  