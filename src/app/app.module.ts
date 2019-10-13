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
import { SignupflowComponent, QueryDialogComponent, TermsDialogComponent, GenreDialogComponent } from './components/signupflow/signupflow.component';
import { ApiService } from './services/api-service';
import { BlastorpassComponent, QueryDialogBlastComponent, TermsDialogBlastComponent } from './components/blastorpass/blastorpass.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CommunityComponent } from './components/community/community.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { CompetitionrulesComponent } from './components/competitionrules/competitionrules.component';
import { RefundpolicyComponent } from './components/refundpolicy/refundpolicy.component';
import { AgreementComponent } from './components/agreement/agreement.component';
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
    GenreDialogComponent,
    BlastorpassComponent,
    CompetitionComponent,
    CommunityComponent,
    TermsDialogBlastComponent,
    QueryDialogBlastComponent,
    HelpcenterComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    CompetitionrulesComponent,
    RefundpolicyComponent,
    AgreementComponent
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
  entryComponents: [SignupflowComponent, QueryDialogComponent,TermsDialogComponent,GenreDialogComponent,BlastorpassComponent, TermsDialogComponent,QueryDialogBlastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
