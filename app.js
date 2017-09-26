var express = require('express');
var fs = require('fs');
var app = express();

// using require to make http req
app.get('/api/videos', function (req, res) {
	var request = require('request');

	request('http://demo2697834.mockable.io/movies', function (error, response, body) {
	  	//enable CORS 
	  	res.header("Access-Control-Allow-Origin", "*");
		res.json(body);
	});	
})

app.listen(3000, function () {
	console.log('Server listening on port 3000');
});