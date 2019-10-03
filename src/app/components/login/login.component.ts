import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormService} from '../../form.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private f:FormService) { this.genarateloginForm(); }

  ngOnInit() {
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
          console.log(this.loginForm.value);
        } 
        else 
        {
          this.loginForm.controls['email'].markAsTouched();
          this.loginForm.controls['password'].markAsTouched();
        }
  }
}
