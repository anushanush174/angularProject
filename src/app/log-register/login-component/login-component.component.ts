import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent{
  userName:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.userName == "admin" && this.password == "admin"){
      console.log("welcome admmn")
    }
  }

}
