// Dependencies

var path = require("path");

// Routing

module.exports = function(app) {
  // HTML GET Requests

  // trying to figure out error message that tells me it is looking in the wrong place for notes.html and index.html
  
  app.get("/notes", function(req, res) {
    console.log(__dirname)
    // res.sendFile(path.join(__dirname, "notes.html"));
  });

  // If no matching route is found default to index
  app.get("*", function(req, res) {
    // res.sendFile(path.join(__dirname, "index.html"));
  });
};
