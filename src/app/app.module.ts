import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,  //components, directives, pipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    SharedModule //modules
  ],
  providers: [], //services
  bootstrap: [AppComponent] // main module
})
export class AppModule {
}
