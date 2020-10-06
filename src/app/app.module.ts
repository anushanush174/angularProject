import { StyleDirective } from './directives/style.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,

  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }