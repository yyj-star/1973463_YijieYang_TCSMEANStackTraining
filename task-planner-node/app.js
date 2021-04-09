let http = require('http')
let url = require('url')
let port = 9090; 
let functions = require('./functions');

let body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
</head>
<body>
    <h2>Add Task</h2>
    <form action= 'http://localhost:9090/add' method = 'get'>
        <label >Emp Id</label>
        <input type="text" name = 'empId'/>
        <br/>
        <label >Task Id</label>
        <input type="text" name = 'taskId'/>
        <br/>
        <label>Task</label>
        <input type="text" name = 'taskDesc'/>
        <br/>
        <label>Dead line</label>
        <input type="date" name = 'deadLine'/>
        <br/>
        <input type="submit" value = 'Add Task'>
        <input type="reset" value = 'Reset'>
        <br/>
    </form>

    <h2>Delete Task </h2>
    <form action = 'http://localhost:9090/delete' method= 'get'>
        <label> Task Id </label> 
        <input type = 'text' name = 'deleteId'/>
        <input type= 'submit' value = 'Delete'/>
        <input type ='reset' value = 'Reset'/>
    </form>
    <br/>
    <table id = 'task-table' border= '1'> 
    <thead> 
        <tr>
            <th>Emp Id </th>
            <th>Task Id </th>
            <th>Task</th>
            <th>Dead line</th>
        </tr>
    </thead>
`
//TODO 
//delete functionality

let server = http.createServer((req,res)=>{
    var pathInfo = url.parse(req.url, true).pathname
    if(pathInfo == '/'){
        res.setHeader('content-type','text/html')
        res.end(body);
    }
    else if(pathInfo == '/add'){
        var data = url.parse(req.url, true).query;
        console.log('data is ' , data);
        let dataArr = functions.addData(data);
        console.log('returned dataArr is ', dataArr);

        for(let i = 0; i<dataArr.length; i++){
            body += `
            <tbody>
                 <tr> 
                    <td>${dataArr[i].empId}</td>
                     <td>${dataArr[i].taskId}</td>
                     <td>${dataArr[i].taskDesc}</td>
                     <td>${dataArr[i].deadLine}</td>
                 </tr>
             </tbody>
            `
        }
        body += `
        </table>
        </body>
        </html>` 
        res.end(body); 
    }
    else if(pathInfo == '/delete'){
        var deleteId = url.parse(req.url, true).query.deleteId;
        // function to delete item from the json data
        let dataArr = functions.deleteData(deleteId); 
        if (dataArr.length == 0){
           res.end(body+`</table>
           </body>
           <p>Nothing to delete</p>
           </html>`);  
        }
        for(let i = 0; i<dataArr.length; i++){
            body += `
            <tbody>
                 <tr> 
                    <td>${dataArr[i].empId}</td>
                     <td>${dataArr[i].taskId}</td>
                     <td>${dataArr[i].taskDesc}</td>
                     <td>${dataArr[i].deadLine}</td>
                 </tr>
             </tbody>
            `
        }
        body += `
        </table>
        </body>
        </html>` 
        res.end(body);
    }
    res.end();
});

server.listen(port, ()=>console.log('Server running on port: '+port));