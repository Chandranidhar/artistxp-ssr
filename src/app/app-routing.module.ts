import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import all component here
import { Signupflow1Component } from './components/signupflow1/signupflow1.component';

const routes: Routes = [
  { path: '', component: Signupflow1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
