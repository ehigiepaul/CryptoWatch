var _db = require("pouchdb");

var os = require("os");

var db = new _db("http://localhost:5984/cryptowatch");

db
  .get("setting")
  .then(mes => {
    console.log(mes);
  })
  .catch(err => {
    if (err.name == "not_found") {
      createSettings();
    }
  });

function createSettings() {
  db
    .put({
      _id: "setting",
      options: {
        position: "",
        apiKey: "",
        favorite: []
      },
      created_on: new Date()
    })
    .then(mes => {
      console.log(mes);
      console.log("created");
    });
}
