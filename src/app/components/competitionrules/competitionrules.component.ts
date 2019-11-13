import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-competitionrules',
  templateUrl: './competitionrules.component.html',
  styleUrls: ['./competitionrules.component.css']
})
export class CompetitionrulesComponent implements OnInit {

  constructor(public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'ArtistXP Competition Rules must be adhered to by all competing artists and every member of the ArtistXP Community associated to the contests in any manner.');
    this.meta.setTag('og:title', 'ArtistXP Competition Rules');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://testbed.artistxp.com/competitionrules');
    this.meta.setTag('og:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
    this.meta.setTag('og:keywords', 'ArtistXP Competition Rules, Guidelines, ArtistXP Community');

    this.meta.setTag('twitter:description','ArtistXP Competition Rules must be adhered to by all competing artists and every member of the ArtistXP Community associated to the contests in any manner.');
    this.meta.setTag('twitter:title', 'ArtistXP Competition Rules');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');

   }

  ngOnInit() {
  }

}
