import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormService} from '../../form.service';
import {ApiService} from '../../services/api-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(public formBuilder: FormBuilder,public f:FormService, public api_service:ApiService) { this.genarateloginForm(); 
  }

  ngOnInit() {
    let condition:any = {};
    condition = {"email":"selena@yopmail.com","password":"123456"};
    this.api_service.postDatawithoutToken('loginasuser',condition).subscribe(res=> {
      let result:any;
      result = res;
      console.log(result);
    });
  }
  genarateloginForm() {
    this.loginForm = this.formBuilder.group({

      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required,Validators.minLength(6)]],
    });
  }

  // inputBlur(val: any) {
  //   this.loginForm.controls[val].markAsUntouched();
  // }

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
        }
  }
}
