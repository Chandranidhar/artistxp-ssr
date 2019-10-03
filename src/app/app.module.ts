import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 96ae7c8c824c90a137c480435bf98b9743700969
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import { SignupflowComponent } from './components/signupflow/signupflow.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SignupheaderComponent,
    SignupflowComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
=======
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    FormsModule, 
    ReactiveFormsModule 
>>>>>>> 96ae7c8c824c90a137c480435bf98b9743700969
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
