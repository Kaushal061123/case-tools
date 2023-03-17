//Excecise 16: Using EventEmitter class for handling 
//events
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.once('start',() => {
    console.log('started here');
});

eventEmitter.emit('start');

eventEmitter.on('start',number => {
    console.log(`started ${number}`);
});

eventEmitter.emit('start',12);

eventEmitter.on('start',(start,end) =>{
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start',1,100);
eventEmitter.emit('start',22);
