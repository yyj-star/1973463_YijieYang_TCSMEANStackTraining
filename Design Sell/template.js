
function loadData(){
    for( var i = 0; i<10; i++){
        document.getElementById('main-div').innerHTML += 
        `<div class = "template-card"> 
            <img src= "img/portfolio-item${i+1}.jpg"/> 
            <br/>
            <input id = 'buy-button' type = 'button' value = 'Buy Now' class = 'buy-button'/>
            <input id= 'shopping-button' type = 'button' value = 'Add to Cart' class = 'buy-button'/>
        </div>`
    }
    hide_button();
}

function hide_button(){
    document.getElementById('load-button').setAttribute("style","visibility:hidden");
}