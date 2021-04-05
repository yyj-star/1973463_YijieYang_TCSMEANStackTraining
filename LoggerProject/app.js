let loggingData = require('./logging'); 
debugger 
let userDataArray = loggingData.getUserInfo(); 
console.log(userDataArray);
loggingData.storeInJson(userDataArray);