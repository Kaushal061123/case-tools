//ex 18: Program using Event Emitter crashes since
//exceptions are not handled.
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
emitter.emit('error',new Error('our error is bad and we feel bad'));

emitter.on('error',function(error){
    console.error(error.message);
});