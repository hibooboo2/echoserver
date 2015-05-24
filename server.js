"strict";

var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.get('/', function (req, res){
	res.send('{"message":"Hello", "from":hostAddress}"');
})

app.post('*',function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/json'
    })
    res.end('{ 	"Url":"'+ req.url+'"}');
    console.log("Request from: " + req.url + JSON.stringify(req.body));
});

app.listen(8000, function(){});
