const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header',
   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );

   if (req.method === 'OPTIONS') {
      res.header('Access-Controll-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).send({});
   }
   next();

});


app.post("/",  bodyParser.text({type: '*/*'}), async function(req, res) {
    try {
  
      console.log(req.body);

      const lmao = JSON.parse(req.body)
      // JSON.stringify(req.body)

      // res.status(200).json({
      //   teste: "teste",
      // });
      res.send(lmao)
    } catch (err) {
      console.log("erro: => " + err);
    }
  });

  app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
  })

app.listen(process.env.PORT || 3003);