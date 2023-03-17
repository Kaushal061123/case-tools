//Excercise 10:Code that executes across multiple event loop cycles.
//It contains WebAPI function -setTimeout and setInterval
console.log('one event loop cycle');
setTimeout(function(){
    console.log('different cycle');
},100);

setInterval(function(){
    console.log('Task A');
},10);
setInterval(function(){
    console.log('Task B');
},15);