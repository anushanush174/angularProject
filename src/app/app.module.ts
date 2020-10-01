import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldListComponent } from './hello-world-list/hello-world-list.component';
import { LoginComponentComponent } from './log-register/login-component/login-component.component';
import { RegistrationComponentComponent } from './log-register/registration-component/registration-component.component';

import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component'


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldListComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    Post2Component,
    Post3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  exports: [HelloWorldListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }