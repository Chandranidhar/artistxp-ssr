import { Component, OnInit, Inject } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {MatDialog} from '@angular/material';
import {LocationStrategy} from "@angular/common";
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-signupheader',
  templateUrl: './signupheader.component.html',
  styleUrls: ['./signupheader.component.css']
})
export class SignupheaderComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, public router: Router, private locStrat: LocationStrategy, public dialog: MatDialog) { }

  
  public click: any;
 
  navbarOpen = false;
  isPopState = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  
  ngOnInit(): void  {
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && !this.isPopState) {
        this.window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });

  }

}
