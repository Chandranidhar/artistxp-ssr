import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import { SignupflowComponent } from './components/signupflow/signupflow.component';
import { AppModule } from './app.module';
@NgModule({
  imports: [
    
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
