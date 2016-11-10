var express = require('express');
var fs = require('fs');

var app = express();
var port = process.env.port || 3000;





var filetree = {};

var walkDirectory = function(path, obj) {
  var dir = fs.readdirSync(path);
  for (var i = 0; i < dir.length; i++) {
    var name = dir[i];
    var target = path + '/' + name;

    var stats = fs.statSync(target);
    if (stats.isDirectory()) {
      	obj[name] = {};
     	walkDirectory(target, obj[name]);
    } else if (stats.isFile()){
		obj[name] = null;
	}
  }
};

walkDirectory('./', filetree);
console.log(filetree);

app.get('/backend', function(req, res){
	res.json(filetree);
});

app.use('/files', express.static(__dirname + '/build'));

app.listen(port, function(){
	console.log(`server up on ${port}`);
});
