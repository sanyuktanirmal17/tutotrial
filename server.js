const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const ap = require("./app/routes/tutorial.routes")(app);

const app = express();

const db = require("./app/models");
db.sequelize.sync(); 

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  

  var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  //need to drop existing tables and re-sync database.
  db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  
    
  // set port, listen for requests
  require("./app/routes/tutorial.routes")(app);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });