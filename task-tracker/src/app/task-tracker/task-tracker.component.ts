import { Component, OnInit } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';
import { MyService } from '../my-service.service';
import {TaskdataModel} from '../data.model'

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})

export class TaskTrackerComponent implements OnInit {
  inboundDataArray:Array<TaskdataModel> = [];

  constructor(public myService1: MyService) { }

  ngOnInit(): void {    
    this.myService1.loadTaskData().subscribe(result => this.inboundDataArray = result, error => console.log(error));
  }
  storeTask(tasksInput:any){
    this.myService1.storeTaskJson(tasksInput);
    console.log('getting data...')
    this.myService1.loadTaskData().subscribe(result => this.inboundDataArray = result, error => console.log(error));
  }
}
