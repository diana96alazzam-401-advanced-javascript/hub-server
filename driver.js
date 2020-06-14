'use strict';
const events = require('./events');

events.on('pickup', pickUpLogger);


function pickUpLogger(payload){
  setTimeout(()=> {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
    setTimeout(()=>{
      events.emit('delivered', payload);
    }, 3000);

  }, 1000);
}

module.exports = pickUpLogger;
