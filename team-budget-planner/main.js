function readData(){
    var obj = {}
    obj.clientName = document.getElementById('client-name').value
    obj.projectName = document.getElementById('project-name').value
    obj.budgetNumber = document.getElementById('budget-number').value
    return obj; 
}

var dataArr = [];

function store(){    
    var data = readData();
    dataArr.push(data);
    localStorage.setItem('project-info',JSON.stringify(dataArr))
}


function clearField(){
    document.getElementById('client-name').value = '';
    document.getElementById('project-name').value = '';
    document.getElementById('budget-number').value = '';
}

function addBudget(){
    store();  
    clearField(); 
}