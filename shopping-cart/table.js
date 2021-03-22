function retrieveItem() {
    var strObj = localStorage.getItem('shopping-cart-info');
    var obj = JSON.parse(strObj);
    var table = document.getElementById('shopping-cart-table');
    var body = table.getElementsByTagName('tbody')[0];
    for (var i = 0; i < obj.length; i++) {
        var newRow = body.insertRow(i);
        var cell1 = newRow.insertCell();
        cell1.innerHTML = obj[i].name;
        var cell2 = newRow.insertCell();
        cell2.innerHTML = "$" + obj[i].price;
    }
}
function calculateTotal() {
    var strObj = localStorage.getItem('shopping-cart-info');
    var obj = JSON.parse(strObj);
    var sum = 0;
    for (var i = 0; i < obj.length; i++) {
        sum += obj[i].price;
    }
    document.write('$' + sum);
}
retrieveItem();
