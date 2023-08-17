const EventEmitter = require("events");
const customEmitter = new EventEmitter;

// event.on("eventName", listner()) => Creating events
// event.emit("eventName") => Execute created events

customEmitter.on("message" , (name) => {
    console.log(`Event Emitted message : ${name}`);
})

customEmitter.emit("message", "john")