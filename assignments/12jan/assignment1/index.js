var events=require('events');

var eventEmitter=new events.EventEmitter();

var listner1=function(){
 	var fs=require('fs');
var data='';
var readstream=fs.createReadStream('input.txt');
readstream.setEncoding('utf8');
readstream.on('data',function(chunk){
	data+=chunk;	
})
readstream.on('end',function(){
   console.log(data); 	
})
readstream.on('error',function(err){
   console.log(err.stack);	
})
}

eventEmitter.on('myreadstream',listner1);

eventEmitter.emit('myreadstream');