import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent{
  currentUser = JSON.parse(localStorage.getItem("registeredUsers"))
  email: string;
  password: string;
  constructor() { }

  ngOnInit(): void { 
  }

  loginUser(){

   
    if(this.currentUser.find(x => x.email === this.email && x.password === this.password)) {
      alert('ok')
    }

  }

}
