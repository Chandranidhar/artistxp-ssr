import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.css']
})
export class TermsandconditionsComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'ArtistXP.com Terms and Conditions outlines Eligibility, User Registration, Proprietary Rights, Compliance and Security of all Information, Products and Services found on the Social Network.');
    this.meta.setTag('og:title', 'ArtistXP.com – Terms & Conditions');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'ArtistXP Terms and Conditions, Compliance, Eligibility Guidelines');
   
    this.meta.setTag('twitter:description', 'ArtistXP.com Terms and Conditions outlines Eligibility, User Registration, Proprietary Rights, Compliance and Security of all Information, Products and Services found on the Social Network.');
    this.meta.setTag('twitter:title', 'ArtistXP.com – Terms & Conditions');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
   
   }

  ngOnInit() {
  }

}
