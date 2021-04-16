let express = require('express');
let app = express();
let port = 9090;
let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/main.html")
});
app.get('/add', (req,res)=>{
    res.sendFile(__dirname + "/views/add.html")
});
app.get('/update', (req,res)=>{
    res.sendFile(__dirname + "/views/update.html")
});
app.get('/delete', (req,res)=>{
    res.sendFile(__dirname + "/views/delete.html")
});

app.post('/addCourse',(req,res)=>{
    
    let cid = req.body.cid
    let cname = req.body.cname
    let cdes  =req.body.cdes
    let ccost = req.body.ccost

    mongoClient.connect(url, { useUnifiedTopology: true }, (err,client)=>{

        if(!err){
            console.log("connect successfully")
            let db = client.db('meanstack');
            db.collection('CourseData').insertOne({
                _id:cid, 
                course_name: cname, 
                course_description: cdes,
                course_cost: ccost
            }, (err,result)=>{
                if(!err){
                    console.log('Added successfully, '+result.insertedCount)
                }else{
                    console.log('Add failed, ' +err)
                }
                client.close();
            })
        }else{
            console.log(err)
        }
    })
    res.redirect('/add')
});

app.post('/updateCourse',(req,res)=>{
    let cid = req.body.cid
    let cname= req.body.cname
    let cdes =req.body.cdes
    let ccost= req.body.ccost
    
    mongoClient.connect(url, { useUnifiedTopology: true }, (err,client)=>{

        if(!err){
            console.log("connect successfully")
            let db = client.db('meanstack');
            db.collection('CourseData').updateOne({_id:cid}, {$set:{
                course_name:cname,
                course_description:cdes,
                course_cost:ccost
            }}, (err,result)=>{
                if(!err){
                    console.log('Updated successfully, '+result.modifiedCount)
                }else{
                    console.log('Add failed, ' +err)
                }
                client.close();
            })
        }else{
            console.log(err)
        }
    })
    res.redirect('/update')
});

app.post('/deleteCourse',(req,res)=>{
    let cid = req.body.cid

    mongoClient.connect(url, { useUnifiedTopology: true }, (err,client)=>{

        if(!err){
            console.log("connect successfully")
            let db = client.db('meanstack');
            db.collection('CourseData').deleteOne({_id:cid}, (err,result)=>{
                if(!err){
                    if(result.deletedCount>0){ 
                        console.log('Delete successfully, '+result.deletedCount);
                    }else{
                        console.log('Delete failed');
                    }
                   
                }else{
                    console.log('Delete failed, ' +err)
                }
                client.close();
            })
        }else{
            console.log(err)
        }
    })
    res.redirect('/delete')
});

async function getData(){
    let db = await mongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    let _db = await db.db('meanstack');
    let courseDataCol = _db.collection('CourseData')
    let data =  await courseDataCol.find({}).toArray();
    return data
};

app.get('/fetch', async (req,res)=>{
    const result = await getData();
    //console.log(result);
    res.json(result);
})



app.listen(port, ()=>console.log("Server running on port "+port));