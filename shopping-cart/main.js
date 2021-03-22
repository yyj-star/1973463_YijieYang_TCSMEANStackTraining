var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    return Item;
}());
var dataArr = new Array();
function addToCart(index) {
    var name = document.getElementById("item-" + index + "-name").value;
    var strPrice = document.getElementById("item-" + index + "-price").value;
    var price = parseFloat(strPrice);
    var itemObj = new Item(name, price);
    //console.log(itemObj);
    dataArr.push(itemObj);
    localStorage.setItem('shopping-cart-info', JSON.stringify(dataArr));
    alert("Item Added: " + name);
}
