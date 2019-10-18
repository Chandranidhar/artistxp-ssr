import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-refundpolicy',
  templateUrl: './refundpolicy.component.html',
  styleUrls: ['./refundpolicy.component.css']
})
export class RefundpolicyComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'ArtistXP Refund Policy in combination with the ArtistXP Blockchain Media Refund Policy lays down important guidelines and eligibility for refunds of purchases made on the Social Network for Artists.');
    this.meta.setTag('og:title', 'ArtistXP.com – Refund Policy');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'ArtistXP Refund Policy, Blockchain Media Refund Policy');

    this.meta.setTag('twitter:description', 'ArtistXP Refund Policy in combination with the ArtistXP Blockchain Media Refund Policy lays down important guidelines and eligibility for refunds of purchases made on the Social Network for Artists.');
    this.meta.setTag('twitter:title', 'ArtistXP.com – Refund Policy');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
   
   }

  ngOnInit() {
  }

}
