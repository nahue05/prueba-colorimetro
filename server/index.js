const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io")
const io = new Server(server);


io.on('connection',(socket)=>{
    console.log('a new socket connected');
})

app.get('/', (req, res, next) =>{
    res.sendFile(__dirname + '/index.html')
});

const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({ path: 'COM4', baudRate: 9600 })



const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))
parser.on('data', console.log)

parser.on('data', function(data){
    
    io.emit('arduino:data',{
        value:data.toString()
})
})

server.listen(3000, () =>{
    console.log('server on port', 3000);
})




