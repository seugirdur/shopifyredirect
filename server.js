const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

app.get("/", async function (req, res) {
  res.send("Hello World");
});

app.post("/", bodyParser.text({ type: "*/*" }), async function (req, res) {
  try {
    console.log(req.body);
    const lmao = req.body;

    res.send(lmao);
  } catch (err) {
    console.log("erro: => " + err);
  }
});

app.post("/login", urlencodedParser, function (req, res) {
  res.send("welcome, " + req.body.username);
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server running on port ${port}`));
