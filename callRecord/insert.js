let fs = require('fs');
let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

let dataArr = fs.readFileSync('call_data.json');
let parsedData = JSON.parse(dataArr);
console.log(parsedData);

mongoClient.connect(url, { useUnifiedTopology: true }, (err,client)=>{

    if(!err){
        console.log("connect successfully")
        let db = client.db('meanstack');

        for(let x of parsedData){
            db.collection('callData').insertOne({
                _id: x._id, 
                source: x.source,
                destination: x.destination,
                sourceLocation: x.sourceLocation,
                destinationLocation: x.destinationLocation,
                callDuration: x.callDuration ,
                roaming: x.roaming ,
                callCharge: x.callCharge 
            }, (err,result)=>{
            if(!err){
                console.log(result.insertedCount)
            }else{
                console.log(err)
            }
            client.close();
        })
        }        
    }else{
        console.log(err)
    }
})

