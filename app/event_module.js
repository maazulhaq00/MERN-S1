const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("welcome", ()=>{
//     console.log("Welcome Ahmed");
// })

// emitter.emit("welcome");

// with arguments
// emitter.on("welcome", (name, prof)=>{
//     console.log(`Welcome ${name}, You are a ${prof}`);
// })

// emitter.emit("welcome", "Ahmed", "Full Stack Dev");

emitter.on("welcome", (args)=>{
    console.log(`Welcome ${args.name}, You are a ${args.prof}`);
})

// emitter.on("welcome", (args)=>{
//     let {name, prof} = args
//     console.log(`Welcome ${args.name}, You are a ${arg.prof}`);
// })

emitter.emit("welcome", {name: "Hasnain", prof: "Principle"});
