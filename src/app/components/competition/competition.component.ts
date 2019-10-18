import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl,DomSanitizer,} from '@angular/platform-browser';
import { MetaService } from '@ngx-meta/core';
declare var $:any;
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  constructor(public readonly meta: MetaService) { 
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'Monthly Competitions for talented artists and performers to feature, where fans from social networks can vote for them to win competitions and exciting prizes.');
    this.meta.setTag('og:title', 'AudioDeadline Competitions for Talented Artists & Performers');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'Competitions for Artists, Artists Monthly Competitions');
   
    this.meta.setTag('twitter:description', 'Monthly Competitions for talented artists and performers to feature, where fans from social networks can vote for them to win competitions and exciting prizes.');
    this.meta.setTag('twitter:title', 'AudioDeadline Competitions for Talented Artists & Performers');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
   
  }

  ngOnInit() {
   
  }
  public onSelectid(){
    console.log('Router selected');
  
  }

}
// let greeter = new CompetitionComponent();
// module FooModule {  
//     export var FooInstance = new CompetitionComponent();
// }
