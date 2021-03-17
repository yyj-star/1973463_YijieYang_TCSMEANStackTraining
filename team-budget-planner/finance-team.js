var i = 0
function getAndInsert(){
    var strObj = localStorage.getItem('project-info')
    obj = JSON.parse(strObj);

    var table = document.getElementById('ftable');
    var body = table.getElementsByTagName('tbody')[0];

    for(let i = 0; i<obj.length; i++){
        var newRow = body.insertRow(i);
        for (let j = 0; j<3; j++){
            var cell = newRow.insertCell(j);
            switch(j){
                case 0:
                    cell.innerHTML = obj[i].clientName;
                    break;
                case 1:
                    cell.innerHTML = obj[i].projectName;
                    break;
                case 2:
                    cell.innerHTML = '$ '+ obj[i].budgetNumber;
                    break;
            }
        }
    }
};

function calculateFinalBudget(){
    var strObj = localStorage.getItem('project-info')
    obj = JSON.parse(strObj);
    console.log('obj ', obj)
    let sum = 0
    for(let i = 0; i< obj.length; i++){
       
       sum += parseInt(obj[i].budgetNumber)
    }
    console.log(sum);
    document.write('$'+sum);
}


getAndInsert();