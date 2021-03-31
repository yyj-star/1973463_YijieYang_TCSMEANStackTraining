import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TaskdataModel} from './data.model'

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(public http:HttpClient) { }
  storeTaskJson(task:any){
    this.http.post("http://localhost:3000/tasks", task).subscribe(result=>console.log(result),error=>console.log(error)); 
  }

  loadTaskData():Observable<TaskdataModel[]>{
    return this.http.get<TaskdataModel[]>("http://localhost:3000/tasks"); 
  }

}
