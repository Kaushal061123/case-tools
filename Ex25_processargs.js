//Ex 25:
//1.Accessing command line arguments
//2.printing __filename and __dirname
process.argv.forEach(function(value,index,args){
    console.log('process.argv[' +index + '] = ' + value);
});
console.log('Currently executing file is ' +__filename)
console.log('It is located in ' +__dirname);