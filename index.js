const express = require("express");
const ioHook = require('iohook');
const keycode = require('os-keycode').keycode
const fs = require('fs');
const path = require('path');
const os = require('os');

// Express
var app = express();
app.use(express.static(__dirname + '/views'));

// Savefile paht
const savePath = './progress.txt'
//const keyCharPath = './keys.txt'
const defaultCount = 1000000;

//Set your keybinds here!
var keyCodes = new Set([keycode('w'), keycode('e'), keycode('o'), keycode('p')]);
var waiting = false;
var counterStart;
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Counter class
class Counter {
    // Counter constructor
    constructor(value){
        this.value = value;
        this.finish = 0;
    }
    // Counter getter
    get counterValue(){
        return this.value;
    }
    // Counter setter
    set counterValue(current){
        this.value = current;
    }
    // Add method
    add() {
        //console.log(this.start);
        if(this.value != 0){
            // Substract from count
            this.value--;
        };
    }
}

// Bad \/
//------------------------
// Jank way to check if file exists
try {
    fs.statSync(savePath);

    // Read
    counterStart = fs.readFileSync(savePath, { encoding:'utf8', flag:'r' });
    //console.log(counterStart);
// If not exists use default
} catch(err) { 
    counterStart = defaultCount; 
}
/*
// Jank way to check if file exists
try {
    fs.statSync(keyCharPath);

    // Read and parse
    // Messy!
    allKeys = fs.readFileSync(keyCharPath, { encoding:'utf8', flag:'r' }).toString().split(os.EOL);
    allKeys.forEach(function(element, index) { this[index] = keycode(element); }, allKeys);
    keyCodes = new Set(allKeys)
    //console.log(keyCodes);
// If not exists use default
} catch(err) { 
    console.log(err);
}
//------------------------*/


//console.log(counterStart);
// Instantiate counter
const clickCounter = new Counter(counterStart);


// Used for serving the HTML page (if used)
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

// Websocket server
io.on('connection', function(socket){
    // Log user connection
    console.log("Connected!");

    // Send data
    socket.emit("Max", defaultCount);
    socket.emit("Count", clickCounter.counterValue);
});

// Server
http.listen(8000, function(){
  console.log("Server running on localhost:8000");
});

// IoHook Listener
ioHook.on("keypress", event => {
    //console.log(event.rawcode);
    if (keyCodes.has(event.rawcode)){
        // Add to count
        clickCounter.add()

        // Console log the couter
        //console.log(clickCounter.counterValue);

        // Emit count to websocket server
        io.emit("Count", clickCounter.counterValue);
        // If we reach 0, wait and reset
        if (clickCounter.counterValue == 0 && !waiting){
            setTimeout(() => {clickCounter.counterValue = defaultCount; waiting=false}, 10000);

            // Temporary fix to avoid multiple resets
            waiting = true;
        }
    }
});

// Start IoHook
ioHook.start();

// Saver timer
setInterval(function(){ 
    fs.writeFile(savePath, clickCounter.counterValue.toString(), err => {
        if (err) { console.error(err); return }
    });
}, 2000);