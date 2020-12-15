// Dependencies

var path = require("path");

// Routing

module.exports = function(app) {
  // HTML GET Requests

  // trying to figure out error message that tells me it is looking in the wrong place for notes.html and index.html
  // what is the difference between router.get and app.get?
  // 
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to index
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
