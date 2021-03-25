import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string =''
  strObj: string = ''
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  loginUser(userRef:any){
    let userName = userRef.username;
    let userPassword = userRef.password;
    let strObj:any = localStorage.getItem('userInfo');
    let obj = JSON.parse(strObj)
    if (JSON.stringify(userName) == JSON.stringify(obj.username) && 
    JSON.stringify(userPassword) == JSON.stringify(obj.password)){
      this.msg = 'Success';
    }else{
      this.msg = 'Fail';
    }
    alert(this.msg);
    this.redirectToPortfolio(this.msg);
  }
  redirectToPortfolio(msg:string){
      if(msg == 'Fail'){
        alert('Try log-in again or Register');
      }else if(msg == 'Success'){
        this.router.navigate(["portfolio"]);
      }
  }
}
