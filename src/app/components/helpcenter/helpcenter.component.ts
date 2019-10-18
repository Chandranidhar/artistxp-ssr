import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.css']
})
export class HelpcenterComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'ArtistXP Support Resources and Tools to help artists and fans to enjoy the Artist Experience and Get Started with the latest in the artist community.');
    this.meta.setTag('og:title', 'ArtistXP.com – Get Started And Access Support Resources');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'Artist Support Resources, Artist Experience, Artist Community');

    this.meta.setTag('twitter:description', 'ArtistXP Support Resources and Tools to help artists and fans to enjoy the Artist Experience and Get Started with the latest in the artist community.');
    this.meta.setTag('twitter:title', 'ArtistXP.com – Get Started And Access Support Resources');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');

   }

  ngOnInit() {
  }

}
