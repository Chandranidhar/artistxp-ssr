import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../form.service';
import { ApiService } from '../../services/api-service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public userdata;
  constructor(public formBuilder: FormBuilder, public f: FormService, public api_service: ApiService, public cookieservice: CookieService, public router: Router,public readonly meta: MetaService) {
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', 'The Artist Experience is the all new Social Network for Artists to interact with new and existing fans, and build relationships with other Talented Artists and Fans.');
    this.meta.setTag('og:title', 'ArtistXP.com – The New Social Network for Artists');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://testbed.artistxp.com/competition');
    this.meta.setTag('og:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
    this.meta.setTag('og:keywords', 'Social Network for Artists,  Artist Experience');

    this.meta.setTag('twitter:description', 'The Artist Experience is the all new Social Network for Artists to interact with new and existing fans, and build relationships with other Talented Artists and Fans.');
    this.meta.setTag('twitter:title', 'ArtistXP.com – The New Social Network for Artists');
    this.meta.setTag('twitter:card', 'summary_large_image');
    this.meta.setTag('twitter:image', 'https://testbed.artistxp.com/assets/images/artistxpmediamarketingsignupbann.jpg');
    this.meta.setTag('og:keywords', 'Social Network for Artists,  Artist Experience');
    this.genarateloginForm();
  }

  ngOnInit() {
  }
  genarateloginForm() {
    this.loginForm = this.formBuilder.group({

      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  loginsubmit() {

            if (this.loginForm.valid) 
            {
         // console.log(this.loginForm.value);
          this.api_service.postDatawithoutToken('loginasuser',this.loginForm.value).subscribe(res=> {
            let result:any;
            result = res;
            console.log(result);
          });
        } 
        else 
        {
          this.loginForm.controls['email'].markAsTouched();
          this.loginForm.controls['password'].markAsTouched();
    for (let x in this.loginForm.controls) {
      console.log(this.loginForm.controls[x]);
      this.loginForm.controls[x].markAsTouched();
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.api_service.postDatawithoutToken('loginasuser', this.loginForm.value).subscribe(res => {
        let result: any;
        result = res;
        if (result.status == "success") {
          this.cookieservice.set('userdetails', JSON.stringify(result.msg));
          this.cookieservice.set('real_name', result.msg.realname);
          this.cookieservice.set('user_name', result.msg.username);
          this.cookieservice.set('user_id', result.msg._id);
          this.cookieservice.set('image', result.msg.images);
          this.cookieservice.set('fan', result.msg.fan);
          this.cookieservice.set('musicians', result.msg.musicians);
          this.cookieservice.set('dancer', result.msg.dancer);
          this.cookieservice.set('model', result.msg.model);
          this.cookieservice.set('signupaffiliate', result.msg.signupaffiliate);
          this.cookieservice.set('last_notify_id', result.msg.last_notify_id);
          // just to give it a render on homepage , later things will change
          this.router.navigate(['/invitationforlaunchplan']);
        }

      });
    }
    else {
      console.log('error in form validation');
    }
  }
  }
}
