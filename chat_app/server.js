let app = require('express')();
let port = 9090;
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

io.on("connection", (socket)=>{
    console.log('Client connected!');
    socket.on('chat message', (msg)=>{
        console.log(msg)
    });
})

http.listen(port,()=>{console.log('Server running on port: '+port)});