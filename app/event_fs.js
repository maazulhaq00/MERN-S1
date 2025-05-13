const EventEmitter = require("events");
const fs = require("fs");

const emitter = new EventEmitter();

let filename = "users.json"

let users = [];

if(fs.existsSync(filename)){
    users = JSON.parse(fs.readFileSync(filename, 'utf-8'))
}


function saveData(){
    fs.writeFileSync(filename, JSON.stringify(users, null, 2), 'utf-8')
}

emitter.on("signup", (args)=>{

    if(args?.username != null && args?.password != null){
        users.push(args);
        console.log("Sign Up successfull");
        saveData();
    }
    else{
        console.log("Provide username / password");
    }
})

emitter.on("login", (args)=>{
    if(users.find((user) => user.username == args?.username && user.password == args?.password)){
        console.log(`${args.username} logged in successfully`);
    }
    else {
        console.log("Incorrect username or password");
    }
})

// emitter.emit("signup");
// emitter.emit("signup", {username: "maazulhaq"});
// emitter.emit("signup", {username: "maazulhaq", password: "maaz123"});

// emitter.emit("login");
// emitter.emit("login", {username: "abc", password: "abc"});
// emitter.emit("login", {username: "maazulhaq", password: "maaz123"});


// emitter.emit("signup", {username: "maazulhaq", password: "maaz123"});
// emitter.emit("signup", {username: "umermansoor", password: "um123"});
emitter.emit("login", {username: "maazulhaq", password: "maaz123"});

