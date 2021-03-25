import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  fname: string= ''
  lname: string = ''
  username: string = ''
  dataArray: Array<any> = new Array();
  constructor() {
    let strObj:any = localStorage.getItem('userInfo')
    let obj = JSON.parse(strObj)
    this.fname =obj.fname
    this.lname =obj.lname
    this.username =obj.username
   }

  ngOnInit(): void {
  }
  addContactInfo(contactInfo:any){  
    let contactObj:any = {}
    contactObj.contactName = contactInfo.contactName;
    contactObj.contactNumber = contactInfo.contactNumber;
    this.dataArray.push(contactObj);
    console.log(this.dataArray)   
  } 
}
