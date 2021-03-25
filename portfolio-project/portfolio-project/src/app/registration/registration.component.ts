import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(public router: Router) { }
  signupInfo = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })
  ngOnInit(): void {
  }
  redirectLoginPage(){
    this.router.navigate([""])
  }
  signupUser(){
    console.log(JSON.stringify(this.signupInfo.value));
    localStorage.setItem('userInfo',JSON.stringify(this.signupInfo.value));
    alert('Registration Successful, you may now login!')
  }
}
