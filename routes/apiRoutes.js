// Dependencies

const fs = require('fs')

// linking "data source" to db.json
var notes = require("./db/db.json");

// Routing

module.exports = function(app) {
    // API GET Requests
    app.get("/api/notes", function(req, res) {
    // this code shows the json note data
      res.json(notes);
      //read db.json file
        fs.readFile('db.json', function(error, data){
            // i am trying to return all saved notes as json here
            return res.send();
            // return res.json()
        })
    });
  
    // API POST Requests

    app.post("/api/notes", function(req, res) {
      // receive new note and save on req.body
      notes.push(req.body)
      // add to db.json file
      // return new note to client
      fs.writeFile('db.json', req.body, function(error){
        if (error) throw error;
        console.log("Added!")
    })
    });

    // API DELETE Requests
    
  };
  