import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
// meta data module import statement
import { MetaModule } from '@ngx-meta/core';
// ngx-bootstrap moment
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {ModalModule} from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
// component import statements here
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import { SignupflowComponent, QueryDialogComponent, TermsDialogComponent, SuccessDialogComponent } from './components/signupflow/signupflow.component';
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
import { AgreementComponent,SignDialogComponent } from './components/agreement/agreement.component';
import { InvitationforlaunchplanComponent } from './components/invitationforlaunchplan/invitationforlaunchplan.component';
import { SignupforblockchainComponent } from './components/signupforblockchain/signupforblockchain.component';
import { Signupforblockchainstep2Component } from './components/signupforblockchainstep2/signupforblockchainstep2.component';
import { SignupforblockchainconfirmationComponent } from './components/signupforblockchainconfirmation/signupforblockchainconfirmation.component';
import { ArtistxpinfoComponent } from './components/artistxpinfo/artistxpinfo.component';
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
    SuccessDialogComponent,
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
    AgreementComponent,SignDialogComponent, InvitationforlaunchplanComponent, SignupforblockchainComponent, Signupforblockchainstep2Component, SignupforblockchainconfirmationComponent, ArtistxpinfoComponent
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
    FacebookModule.forRoot(),
    MetaModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    ScrollToModule.forRoot()
    // CookieService 
  ],
  providers: [AuthGuard,CookieService,ApiService],
  entryComponents: [SignupflowComponent, QueryDialogComponent,TermsDialogComponent,SuccessDialogComponent,BlastorpassComponent, TermsDialogComponent,QueryDialogBlastComponent,AgreementComponent, SignDialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
