import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitationforlaunchplan',
  templateUrl: './invitationforlaunchplan.component.html',
  styleUrls: ['./invitationforlaunchplan.component.css']
})
export class InvitationforlaunchplanComponent implements OnInit {

  constructor(public cookie:CookieService, public router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/');
  }

}
