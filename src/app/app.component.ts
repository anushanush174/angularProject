import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required, 
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl()
      })
    })
  }

  
  submit(){
    if(this.form.valid){
      console.log('form', this.form)
      const formData = {...this.form.value}
      console.log('form data', formData)
    }
  }
}