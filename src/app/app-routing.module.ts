import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import all component here
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupheaderComponent } from './components/signupheader/signupheader.component';
import {SignupflowComponent} from './components/signupflow/signupflow.component';
import { BlastorpassComponent } from './components/blastorpass/blastorpass.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CommunityComponent } from './components/community/community.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { CompetitionrulesComponent } from './components/competitionrules/competitionrules.component';
import { RefundpolicyComponent } from './components/refundpolicy/refundpolicy.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { InvitationforlaunchplanComponent } from './components/invitationforlaunchplan/invitationforlaunchplan.component';
import { SignupforblockchainComponent } from './components/signupforblockchain/signupforblockchain.component';
import { SignupforblockchainconfirmationComponent } from './components/signupforblockchainconfirmation/signupforblockchainconfirmation.component';
import { Signupforblockchainstep2Component } from './components/signupforblockchainstep2/signupforblockchainstep2.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ArtistxpinfoComponent } from './components/artistxpinfo/artistxpinfo.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CookiepolicyComponent } from './components/cookiepolicy/cookiepolicy.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component:ForgotPasswordComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signupheader', component: SignupheaderComponent },
  { path: 'signupflow', component: SignupflowComponent },
  { path: 'blastorpass', component: BlastorpassComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'helpcenter', component: HelpcenterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'competitionrules', component: CompetitionrulesComponent },
  { path: 'refundpolicy', component: RefundpolicyComponent },
  { path: 'agreement/:userid', component: AgreementComponent },
  { path: 'invitationforlaunchplan', component: InvitationforlaunchplanComponent },
  { path: 'signupforblockchain', component: SignupforblockchainComponent },
  { path: 'signupforblockchainconfirmation', component: SignupforblockchainconfirmationComponent },
  { path: 'signupforblockchainstep2', component: Signupforblockchainstep2Component },
  { path: 'artistxpinfo', component: ArtistxpinfoComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'cookiepolicy',component:CookiepolicyComponent}
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
