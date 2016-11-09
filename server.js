var express = require('express');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/build'));
/*
app.get('*', function(request, response) {
 console.log('New request:', request.url);
 response.sendFile('index.html', { root: '.' });
}); 
*/
app.listen(port, function(){
	console.log(`server up on ${port}`);
});
