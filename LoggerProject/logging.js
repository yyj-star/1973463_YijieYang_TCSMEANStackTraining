var fs = require('fs');
var obj = require('readline-sync');

var objData = []
let exportFunctions = {
    getUserInfo(){
        debugger
        
        let firstName = obj.question('Enter the first name: ');
        let lastName = obj.question('Enter the last name: ');
        let gender = obj.question('Enter the gender: ');
        let email = obj.question('Enter the email: ');

        let singlData = {"firstName": firstName, "lastName":lastName, "gender": gender, "email":email}
        debugger
        if (fs.existsSync('./userInfo.json')){
     
            let existData = fs.readFileSync('userInfo.json');
            let parsedData = JSON.parse(existData);
            parsedData.push(singlData);
            return parsedData;
        }else{

            objData.push(singlData);
            return objData
        }
    },

    storeInJson(obj){
        debugger
        var objStr = JSON.stringify(obj);
        fs.writeFile('userInfo.json', objStr,(error)=>{
            if(!error){
                console.log('Stored successfully');
            }else{
                console.log(error);
            }
        })
    }
};

module.exports = exportFunctions;



