let fs = require('fs');

var dataArry = []
let exportFunctions = {
    addData(data){
        let empId = data.empId;
        let taskId = data.taskId;
        let taskDesc = data.taskDesc;
        let deadLine = data.deadLine;

        let singleData = {"empId":empId, "taskId":taskId, "taskDesc":taskDesc, "deadLine":deadLine};
        if (fs.existsSync('./taskInfo.json')){
            let existData = fs.readFileSync('taskInfo.json');
            let parsedData = JSON.parse(existData);
            // Check for duplicate ids by looping through all the existing ids
            for(let x of parsedData){
                if (x.taskId == taskId){
                    return parsedData;
                }
            };
            parsedData.push(singleData);
            this.storeInJson(parsedData);
            return parsedData;
        }else{
            dataArry.push(singleData);
            this.storeInJson(dataArry);
            return dataArry
        }
    },
    storeInJson(obj){
        var objStr = JSON.stringify(obj);
        fs.writeFileSync('taskInfo.json', objStr,(error)=>{
            if(!error){
                console.log('Stored successfully');
            }else{
                console.log(error);
            }
        })
    },

    deleteData(deleteId){
        if (fs.existsSync('./taskInfo.json')){
            let existData = fs.readFileSync('taskInfo.json');
            let parsedData = JSON.parse(existData);
            console.log('parsedData b4 ', parsedData)
            for(let i=0; i<parsedData.length;i++){
                if (parsedData[i].taskId == deleteId){
                    parsedData.splice(i,1);
                    console.log('parsedData after, ', parsedData);
                    
                    let strObj = JSON.stringify(parsedData);
                    fs.writeFileSync('taskInfo.json',strObj, (error)=>{
                        console.log(error);
                    })
                }  return parsedData;
            }
        }else{
            return [];
        }
    }
}

module.exports = exportFunctions; 