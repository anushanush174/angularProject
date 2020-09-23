import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  fullNameControl = new FormGroup({});
  registeredUsersArray = [];
  currentUser: any = {};

  constructor(private formBuilder: FormBuilder) { 
    this.fullNameControl = this.formBuilder.group({
      name: new FormControl(),
      surname: new FormControl(),
      mail: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl(),
    })
  };

  ngOnInit() {
  }

  onSubmit(){
    this.currentUser = Object.assign(this.currentUser, this.fullNameControl.value);
    this.registeredUsersArray.push(this.currentUser);
    localStorage.setItem("registeredUsers", JSON.stringify(this.registeredUsersArray))
  }
}