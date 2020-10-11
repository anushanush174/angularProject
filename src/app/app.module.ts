import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { SwitchComponent } from './switch/switch.component'  



@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 