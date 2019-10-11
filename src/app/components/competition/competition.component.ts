import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl,DomSanitizer,} from '@angular/platform-browser';
declare var $:any;
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  public onSelectid(){
    console.log('Router selected');
  
  }

}
let greeter = new CompetitionComponent();
module FooModule {  
    export var FooInstance = new CompetitionComponent();
}
