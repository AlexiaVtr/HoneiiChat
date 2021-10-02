
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});



io.on('connection', (socket) => {
    console.log("New user connected")
    
    socket.on('sendMessage', (messageInfo) => {
        console.log("New event: send message")
        socket.broadcast.emit('reseiveMessage', messageInfo)

    })
});

app.get('/',(req,res) => {
    res.send('<h1>Hello</h1>')
});

http.listen(3000, () => {
    console.log("listen in port 3000")
});