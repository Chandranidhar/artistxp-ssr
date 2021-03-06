import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description','The ArtistXP Privacy Policy has been created to protect and show commitment to the Information We Collect About You, and the proper Security of How We Use Information');
    this.meta.setTag('og:title', 'ArtistXP – Privacy Policy');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://testbed.artistxp.com/privacypolicy');
    this.meta.setTag('og:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
    this.meta.setTag('og:keywords', 'ArtistXP Privacy Policy, Information Security, California Privacy Rights');
   
    this.meta.setTag('twitter:description','The ArtistXP Privacy Policy has been created to protect and show commitment to the Information We Collect About You, and the proper Security of How We Use Information.');
    this.meta.setTag('twitter:title', 'ArtistXP – Privacy Policy');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
   
   }

  ngOnInit() {
  }

}
