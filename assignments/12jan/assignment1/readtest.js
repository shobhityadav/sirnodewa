var fs=require('fs');
exports.myreadstream=function(){
  fs.readFile('input.txt',function(err,data){
	 if(err){
	     return console.error(err);	 
     }
	 console.log(data.toString());
	 return;	 
 })	
}