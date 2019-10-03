import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artistxp-ssr';
   constructor (private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
    //add custom material icons
    matIconRegistry.addSvgIcon('iconName', domSanitizer.bypassSecurityTrustResourceUrl('/path/to/your/svg/icon.svg'));
}
}
