
class Item {
    name:string;
    price: number;
    constructor(name:string, price: number){
        this.name = name;
        this.price = price;
    }
}
var dataArr:Array<Item> = new Array();

function addToCart(index:number):void{
    var name:string =(<HTMLInputElement>document.getElementById(`item-${index}-name`)).value;
    var strPrice: any = (<HTMLInputElement>document.getElementById(`item-${index}-price`)).value;
    var price:number = parseFloat(strPrice);
    let itemObj = new Item(name,price);
    //console.log(itemObj);
    dataArr.push(itemObj);
    localStorage.setItem('shopping-cart-info', JSON.stringify(dataArr));
    alert(`Item Added: ${name}`);
}
