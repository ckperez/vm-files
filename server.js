var express = require('express');
var fs = require('fs');

var app = express();
var port = process.env.port || 3000;

var getFiles = function(folder){ //will return array of items in folder
	fs.readdir(folder, (err, data)=>{
		if (err){
			throw err;
		}
		return data;
	});
};

app.use(express.static(__dirname + '/build'));

app.listen(port, function(){
	console.log(`server up on ${port}`);
});
