//Using Simple NodeJs with Express to Store 3rd party Api Data to be Added to the DOM

//Empty Object To Act As EndPoint For All Routes
const projectData = {};

//Express To make A loacl host server
let express = require("express");

//Instance of Express
let app = express();

//Dependencies and middlewares
let cors = require("cors");
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

//Pointing at Website Folder
app.use(express.static("website"));

//LocalHost Server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`running on localhost:${port}`);
});

//Set a Post Route
app.post("/add", (req, res) => {
  projectData = req.body;
  res.send(projectData);
});

//Set A Get Route
app.get("/all", (req, res) => {
  res.send(projectData);
});
