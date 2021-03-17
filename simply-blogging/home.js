var blogData = []
function readData(){
    var title = document.getElementById('title').value;
    var body = document.getElementById('article-body').value;
    var imageInfo = document.getElementById('image').files[0].name;
    
    blogObj = {}
    blogObj.title = title;
    blogObj.body = body;
    blogObj.imageInfo = imageInfo;
    blogData.push(blogObj)
    sessionStorage.setItem('blogData', JSON.stringify(blogData))
    retrieve();
}

function retrieve(){
    var strObj= sessionStorage.getItem('blogData')
    obj = JSON.parse(strObj);
    console.log('retrieved data = ', obj); 
    
    var table = document.getElementById('blog-table');
    var oldBody = table.getElementsByTagName('tbody')[0];
    var body = document.createElement('tbody');
    oldBody.parentNode.replaceChild(body, oldBody);

    for(let i = 0; i< obj.length; i++){
        if (i != 1 && i % 3 == 0){
            var newRow = body.insertRow();  
            var cell = newRow.insertCell();
            cell.innerHTML = `<div class = 'cell'><div class = 'blog-title'> <p class ='blog-title-p'> Title: ${obj[i].title} </p> </div>` + "<br/>" 
            + `<div class = 'blog-body'> ${obj[i].body} </div>` + "<br/>" 
            + `<img src = '${obj[i].imageInfo}' id = 'blog-image'/> </div>` ;
        }else{
            var cell = newRow.insertCell();
            cell.innerHTML = `<div class = 'cell'> <div class = 'blog-title'> <p class ='blog-title-p'> Title: ${obj[i].title} </p> </div>` + "<br/>" 
            + `<div class = 'blog-body'> ${obj[i].body} </div>` + "<br/>" 
            + `<img src = '${obj[i].imageInfo}' id = 'blog-image'/> </div>` ;
        }        
    }
}


function reset(){
    document.getElementById('title').value = '';
    document.getElementById('article-body').value = '';
};