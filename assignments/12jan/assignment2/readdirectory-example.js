var fs=require('fs');
fs.readdir('maindir',function(err,files){
  if(err){
	return console.error(err);  
  }	
  files.forEach(function(file){
	 
	  fs.readdir('maindir/'+file,function(err,files){
		   if(err){
			  return console.error(err);   
		   } 
		  files.forEach(function(myfile){
			  console.log('Name of Directory: '+file);  
			  console.log('Name of file: '+files);  
		  })  
	  })
  })
})





