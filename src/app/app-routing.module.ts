import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import all component here
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import {SignupflowComponent} from './components/signupflow/signupflow.component';
import { BlastorpassComponent } from './components/blastorpass/blastorpass.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signupheader', component: SignupheaderComponent },
  { path: 'signupflow', component: SignupflowComponent },
  { path: 'blastorpass', component: BlastorpassComponent },
  // demo example for resolve and auth guard along with can activate
  
  // { path: "recentSignUp", component: RecentSignUpComponent, canActivate:[AuthGuard], resolve: {results: Resolveservice}, data: {source: 'admindashboard'}},
  // { path: "activeUsers", component: ActiveUsersComponent, canActivate:[AuthGuard], resolve: {results: Resolveservice}, data: {source: 'admindashboard'}},
  // { path: "login/:path/:id", component: LoginComponent, resolve: {results: Resolveservice}, data: { source: 'allmodelllist', condition: {_id: 'id'}}},
  // { path: "brand", component: BrandmanagementComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
