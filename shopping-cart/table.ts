function retrieveItem():void {
    var strObj:string = localStorage.getItem('shopping-cart-info');
    var obj:any = JSON.parse(strObj);
    var table:any = document.getElementById('shopping-cart-table');
    var body:any = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i < obj.length; i++) {
        var newRow = body.insertRow(i);
        var cell1 = newRow.insertCell();
        cell1.innerHTML = obj[i].name;
        var cell2 = newRow.insertCell();
        cell2.innerHTML = `$${obj[i].price}`;
    }
}
function calculateTotal():void{
    let strObj:string = localStorage.getItem('shopping-cart-info')
    let obj:any = JSON.parse(strObj);
    let sum:number = 0
    for(let i = 0; i< obj.length; i++){
       sum += obj[i].price
    }
    document.write('$'+sum);
}
retrieveItem();