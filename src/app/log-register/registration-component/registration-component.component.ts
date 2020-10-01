import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      mail: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl(),
      repeatPassword: new FormControl(),
      
    })
  };

  ngOnInit() {
  }

  onSubmit(){
    // for(i=0; i<)
  //this.fullNameControl.value['name']
    if(this.currentUser)
      this.currentUser = Object.assign(this.currentUser, this.fullNameControl.value);
    this.registeredUsersArray.push(this.currentUser);
    localStorage.setItem("registeredUsers", JSON.stringify(this.registeredUsersArray))

  }
}