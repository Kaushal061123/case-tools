var fs = require('fs');
try{
      fs.readFile('caltestwef.js','utf8',function(error,data){
        if(error){
            throw error;
            return
        }
      });
}
catch (error)
{
    console.error('Caught the error synchronously');
}