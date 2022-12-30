const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
server.listen(3000).on('listening', () => {
    console.log('Server is listening on port 3000');
});

app.use(cors());
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('message', (msg) => {
      console.log('message: ' + msg);
      io.emit('message', msg);
    });
  });