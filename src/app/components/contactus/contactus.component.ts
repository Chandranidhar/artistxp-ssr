import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description','At ArtistXP, we are always available to artists, fans and members for any assistance that they may need. Contact Us TODAY and we will be happy to respond to your queries!');
    this.meta.setTag('og:title', 'ArtistXP.com - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://testbed.artistxp.com/contactus');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'ArtistXP Contact Us, Contact Us, Artist Experience');
   
    this.meta.setTag('twitter:description','At ArtistXP, we are always available to artists, fans and members for any assistance that they may need. Contact Us TODAY and we will be happy to respond to your queries!');
    this.meta.setTag('twitter:title', 'ArtistXP.com - Contact Us');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
   }

  ngOnInit() {
  }

}
