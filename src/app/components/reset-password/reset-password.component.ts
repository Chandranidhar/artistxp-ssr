import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public fromTitleName: any = 'Reset Form';

  public logo: any = '';
  public serverUrl: any = this.apiservice.api_url;
  public addEndpoint: any = {
    endpoint:'resetpassword',
    source:'user'
  };
  constructor(public apiservice: ApiService) { }

  ngOnInit() {
  }

}
