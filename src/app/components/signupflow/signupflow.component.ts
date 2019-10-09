import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../form.service';
@Component({
  selector: 'app-signupflow',
  templateUrl: './signupflow.component.html',
  styleUrls: ['./signupflow.component.css']
})
export class SignupflowComponent implements OnInit {

  isLinear = false;
  firstForm:FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public _formBuilder: FormBuilder,public f:FormService) {this.fstgen(); }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  fstgen(){
    this.firstForm = this._formBuilder.group({

      firstname:[null,[Validators.required]],
      lastname:[null,[Validators.required]],
      gender:[null,[Validators.required]],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required,Validators.minLength(6)]],
      confirmpassword:[null,[Validators.required,Validators.minLength(6)]],
      phone:[null,[Validators.required]],
      aliases:[null],
      // hometown:[null,[Validators.required]],
      city:[null,[Validators.required]],
      state:[null,[Validators.required]],
      zip:[null,[Validators.required]],
      recordingartist:false,
      dancer:false,
      afiliates:false,
      models:false,
      fans:false,
      private:false,
      public:false

    });
  }
accounttype(){
  if(this.firstForm.value.fans==true){
    disabled:false;
  this.firstForm.patchValue({
    dancer:false
  })
}
}
/**for account type validation */
statechangeforaccounttype(){
  if(this.firstForm.controls['fans'].value == true){
    this.firstForm.controls['models'].setValue(false);
    this.firstForm.controls['afiliates'].setValue(false);
    this.firstForm.controls['dancer'].setValue(false);
    this.firstForm.controls['recordingartist'].setValue(false);
  }
  if(this.firstForm.controls['recordingartist'].value == true || this.firstForm.controls['dancer'].value == true || this.firstForm.controls['models'].value == true){
    this.firstForm.controls['afiliates'].setValue(true);
    this.firstForm.controls['fans'].setValue(false);
  }
}
/*for privacy validation */
statechangeforprivacy(){
  if(this.firstForm.controls['private'].value == true){
    this.firstForm.controls['public'].setValue(false);
  }

  if(this.firstForm.controls['public'].value == true){
    this.firstForm.controls['private'].setValue(false);
  }
}

/**submit function */
  firstsubmit(){
    //console.log(this.firstForm.value);
        if(this.firstForm.valid)
        {
          console.log(this.firstForm.value);
        }
        else
        {
          this.firstForm.controls['firstname'].markAsTouched();
          this.firstForm.controls['lastname'].markAsTouched();
          this.firstForm.controls['gender'].markAsTouched();
          this.firstForm.controls['email'].markAsTouched();
          this.firstForm.controls['password'].markAsTouched();
          this.firstForm.controls['confirmpassword'].markAsTouched();
          this.firstForm.controls['phone'].markAsTouched();
          // this.firstForm.controls['hometown'].markAsTouched();
          this.firstForm.controls['city'].markAsTouched();
          this.firstForm.controls['state'].markAsTouched();
          this.firstForm.controls['zip'].markAsTouched();
        }

  }

}
