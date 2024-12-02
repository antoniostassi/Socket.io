const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log('Message received: ' + message);
        io.emit('message', message);
    })
})