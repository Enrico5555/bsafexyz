//process.stdout.write(new Date().toString());

var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('public'))
app.use(express.json());

function reverseString(st) {
		var split_str = st.split("");
		var reverse_array = split_str.reverse();
		return reverse_array.join("");
}

app.get('/', function (req, res) {
   	//res.send('Hello World');
	res.sendFile(path.join(__dirname+'/public/index.html'));
	//res.sendFile('public/index.html');
})

app.post('/post_ws', function (req, res) {
	//reverse, slice(4, 12), toUpperCase y charAt(3)
	console.log(req.body);
	var result = {'text1': reverseString(req.body.text1), 'text2': req.body.text2.slice(4, 12), 'text3': req.body.text3.toUpperCase(), 'text4': req.body.text4.charAt(3)};
    res.send(result);
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
