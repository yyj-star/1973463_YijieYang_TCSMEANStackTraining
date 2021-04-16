let express = require('express');
let app = express(); 
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 9090; 
let mongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID
let url = 'mongodb://localhost:27017';


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/chat.html');
});

async function insertData(dataObj){
    if (!dataObj) throw 'no data input!';
    let db = await mongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    let _db = await db.db('meanstack');
    let chatLogCol = _db.collection('ChatLog')
    try{
        await chatLogCol.insertOne({
                _id: new ObjectID(),
                name:dataObj.name,
                message: dataObj.msg
        });
    }catch(error){
        console.log(error)
    };
};

io.on("connection", async (socket)=>{
    console.log('Client connected!');
    socket.on('chat message', async (msg)=>{
        console.log(msg)
        try{
           await insertData(msg); 
        }catch(error){
            console.log(error)
        }
    });
})

http.listen(port,()=>{console.log('Server running on port: '+port)});