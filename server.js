var express = require('express');
var fs = require('fs');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/build'));



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

// function buildTree(newPath){
// 	var files = fs.readdirSync(newPath);
// 	path = newPath;
// 	console.log(files);
// 		for (var i = 0; i < files.length; i++){
// 		//files.forEach(function(file) {
// 			if (files[i].indexOf('.') != -1){
// 				tree[files[i]] = null;
// 			}
// 			else{
// 				addPath = files[i];
// 				path = path + '/' + addPath;
// 				console.log(addPath);
// 				tree[files[i]] = {};
// 				buildTree(path)

// 			}
// 		};
// console.log(tree);
// }



// buildTree('./');


app.use((req, res)=>{

})

app.listen(port, function(){
	console.log(`server up on ${port}`);
});
