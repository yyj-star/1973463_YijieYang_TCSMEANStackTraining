import { Component, OnInit } from '@angular/core';
import {AnswersDataModel} from '../answers.model';
import { MyServiceService } from '../my-service.service';
import { fromEventPattern } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  rights:number = 0; 
  final_msg:string = ''
  msg1:string = ''
  msg2:string = ''
  msg3:string = ''
  msg4:string = ''
  msg5:string = ''
  msg6:string = ''
  msg7:string = ''
  msg8:string = ''
  msg9:string = ''
  msg10:string = ''
  
  inputArr:Array<string> = [];
  ansArr:Array<AnswersDataModel> = [];
  bool1:boolean = false;
  bool2:boolean = false;
  bool3:boolean = false;
  bool4:boolean = false;
  bool5:boolean = false;
  bool6:boolean = false;
  bool7:boolean = false;
  bool8:boolean = false;
  bool9:boolean = false;
  bool10:boolean = false;

  bool11:boolean = false;
  bool22:boolean = false;
  bool33:boolean = false;
  bool44:boolean = false;
  bool55:boolean = false;
  bool66:boolean = false;
  bool77:boolean = false;
  bool88:boolean = false;
  bool99:boolean = false;
  bool1010:boolean = false;


  constructor(public myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getAnswers().subscribe(data =>this.ansArr = data, error => console.log(error))
  }
  checkAnswer(userAnswer:any){
    let question1 = userAnswer.q1button; 
    this.msg1 = `You selected ${question1}`
    console.log(userAnswer)
    //clear user input
    for(let x in userAnswer){
        this.inputArr.push(userAnswer[x]);
    }

    console.log(this.inputArr);
      
      for(let i = 0; i<this.ansArr.length; i++){
        if (this.inputArr[i] != this.ansArr[i].answer){
          switch(i){
            case 0:
              this.bool1 = true;
              this.msg1 = this.ansArr[i].answer;
              break;
            case 1:
              this.bool2 = true;
              this.msg2 = this.ansArr[i].answer;
              break;
            case 2:
              this.bool3 = true;
              this.msg3 = this.ansArr[i].answer;
              break;
            case 3:
              this.bool4 = true;
              this.msg4 = this.ansArr[i].answer;
              break;
            case 4:
              this.bool5 = true;
              this.msg5 = this.ansArr[i].answer;
              break;
            case 5:
              this.bool6 = true;
              this.msg6 = this.ansArr[i].answer;
              break;
            case 6:
              this.bool7 = true;
              this.msg7 = this.ansArr[i].answer;
              break;
            case 7:
              this.bool8 = true;
              this.msg8 = this.ansArr[i].answer;
              break;
            case 8:
              this.bool9 = true;
              this.msg9 = this.ansArr[i].answer;
              break;
            case 9:
              this.bool10 = true;
              this.msg10 = this.ansArr[i].answer;
              break;
          }
        }else{
          this.rights ++;
          switch(i){
            case 0:
              this.bool11 = true;
              this.msg1 = 'Correct!';
              break;
            case 1:
              this.bool22 = true;
              this.msg2 = 'Correct!';
              break;
            case 2:
              this.bool33 = true;
              this.msg3 = 'Correct!';
              break;
            case 3:
              this.bool44 = true;
              this.msg4 = 'Correct!';
              break;
            case 4:
              this.bool55 = true;
              this.msg5 = 'Correct!';
              break;
            case 5:
              this.bool66 = true;
              this.msg6 = 'Correct!';
              break;
            case 6:
              this.bool77 = true;
              this.msg7 = 'Correct!';
              break;
            case 7:
              this.bool88 = true;
              this.msg8 = 'Correct!';
              break;
            case 8:
              this.bool99 = true;
              this.msg9 = 'Correct!';
              break;
            case 9:
              this.bool1010 = true;
              this.msg10 = 'Correct!';
              break;
          }
        }
      }
      this.final_msg = `You got ${this.rights}/10 corect!`;
    }
  }