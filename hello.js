var express=require('express');
var app=express();

app.get('/',function(req,res){
 res.send('Hello World!');	
})

var server=app.listen(3000,function(){
	var port=server.address().port;
	var host=server.address().address;
	console.log('App Listing at http://%s:%s',host,port);	
})