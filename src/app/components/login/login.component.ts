import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { this.genarateloginForm(); }

  ngOnInit() {
  }
  genarateloginForm() {
    this.loginForm = this.formBuilder.group({

      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required,Validators.minLength(6)]],
    });
  }
  
  loginsubmit() {

            if (this.loginForm.valid) 
            {
          console.log(this.loginForm.value);
        } 
        else 
        {
          this.loginForm.controls['email'].markAsTouched(),
          this.loginForm.controls['password'].markAsTouched()
        }
  }
}
