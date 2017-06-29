var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.sendFile(__dirname + "/" +"index.htm");
});

/*var server = app.listen(8001,function(){
	console.log('Server stared...http://localhost:8001');
})*/

module.exports = app;