import { RegistrationComponentComponent } from './log-register/registration-component/registration-component.component';
import { LoginComponentComponent } from './log-register/login-component/login-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'login-component', component: LoginComponentComponent},
  {path: 'registration-component', component: RegistrationComponentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
