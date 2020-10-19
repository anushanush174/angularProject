import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component'
import { RefDirective } from './modal/ref.directive';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  entryComponents: [ModalComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 