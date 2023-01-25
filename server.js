const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post("/", async (req, res) => {
    try {
  
      console.log(req.body);
      // res.status(200).json({
      //   teste: "teste",
      // });
      res.send(req.body)
    } catch (err) {
      console.log("erro: => " + err);
    }
  });

  app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
  })

app.listen(8080);