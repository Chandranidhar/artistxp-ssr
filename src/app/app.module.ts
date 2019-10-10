import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
// universal(SEO usage) import statements here
import { NgtUniversalModule } from '@ng-toolkit/universal';
// cookieservice import statements here
import { CookieService } from 'ngx-cookie-service';
// authguard import statements here
import { AuthGuard } from './services/auth.guard';
// ngx-facebook import statements here
import { FacebookModule } from 'ngx-facebook';
// component import statements here
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import { SignupflowComponent, QueryDialogComponent, TermsDialogComponent } from './components/signupflow/signupflow.component';
import { ApiService } from './services/api-service';
import { BlastorpassComponent } from './components/blastorpass/blastorpass.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SignupheaderComponent,
    SignupflowComponent,
    QueryDialogComponent,
    TermsDialogComponent,
    BlastorpassComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    FormsModule, 
    ReactiveFormsModule,
    FacebookModule.forRoot()
    // CookieService 
  ],
  providers: [AuthGuard,CookieService,ApiService],
  entryComponents: [SignupflowComponent, QueryDialogComponent,TermsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
