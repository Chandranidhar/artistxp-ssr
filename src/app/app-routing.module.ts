import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import all component here
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import {SignupflowComponent} from './components/signupflow/signupflow.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signupheader', component: SignupheaderComponent },
  { path: 'signupflow', component: SignupflowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
