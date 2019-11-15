import { Component, OnInit, ViewChildren, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public logo: any = '';
  public signUpRouteingUrl: any = '/signupflow';
  public loginRouteingUrl: any = '/login';
  public formTitle: any = 'Forget Password';
  public serverUrl:any = this.apiservice.api_url;
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };

  public domanUrl: any = 'localhost:4200/reset-password';
  constructor(public activatedRouter: ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder) {}
  

  ngOnInit() {
  }

}
