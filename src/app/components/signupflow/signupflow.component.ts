import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormService } from '../../form.service';
@Component({
  selector: 'app-signupflow',
  templateUrl: './signupflow.component.html',
  styleUrls: ['./signupflow.component.css']
})
export class SignupflowComponent implements OnInit {

  isLinear = false;
  firstForm: FormGroup;
  secondForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public _formBuilder: FormBuilder, public f: FormService) { this.fstgen(); this.secgen(); }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  fstgen() {
    this.firstForm = this._formBuilder.group({

      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmpassword: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [Validators.required]],
      aliases: [null],
      hometown: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      musicians: false,
      dancer: false,
      afiliates: false,
      model: false,
      fan: false,
      private: false,
      public: false

    });
  }
  accounttype() {
    if (this.firstForm.value.fans == true) {
      disabled: false;
      this.firstForm.patchValue({
        dancer: false
      })
    }
  }
  /**for account type validation */
  statechangeforaccounttype() {
    if (this.firstForm.controls['fan'].value == true) {
      this.firstForm.controls['model'].setValue(false);
      this.firstForm.controls['afiliates'].setValue(false);
      this.firstForm.controls['dancer'].setValue(false);
      this.firstForm.controls['musicians'].setValue(false);
    }
    if (this.firstForm.controls['musicians'].value == true || this.firstForm.controls['dancer'].value == true || this.firstForm.controls['model'].value == true) {
      this.firstForm.controls['afiliates'].setValue(true);
      this.firstForm.controls['fan'].setValue(false);
    }
  }
  /*for privacy validation */
  statechangeforprivacy() {
    if (this.firstForm.controls['private'].value == true) {
      this.firstForm.controls['public'].setValue(false);
    }

    if (this.firstForm.controls['public'].value == true) {
      this.firstForm.controls['private'].setValue(false);
    }
  }

  /**submit function */
  firstsubmit() {
    //console.log(this.firstForm.value);
    if (this.firstForm.valid) {
      console.log(this.firstForm.value);
    }
    else {
      this.firstForm.controls['firstname'].markAsTouched();
      this.firstForm.controls['lastname'].markAsTouched();
      this.firstForm.controls['gender'].markAsTouched();
      this.firstForm.controls['email'].markAsTouched();
      this.firstForm.controls['password'].markAsTouched();
      this.firstForm.controls['confirmpassword'].markAsTouched();
      this.firstForm.controls['phone'].markAsTouched();
      this.firstForm.controls['hometown'].markAsTouched();
      this.firstForm.controls['city'].markAsTouched();
      this.firstForm.controls['state'].markAsTouched();
      this.firstForm.controls['zip'].markAsTouched();
    }

  }

  /**2nd form genarate */
  secgen() {
    this.secondForm = this._formBuilder.group({
      genre: false,
      heavymetal: false,
      edm: false,
      rap: false,
      blues: false,
      country: false,
      musical: false,
      rock: false,
      pop: false,
      hiphop: false,

      beginning: false,
      elementary: false,
      junior: false,
      senior: false,

      experiences: this._formBuilder.array([this.getUnit()]),
      website: this._formBuilder.array([this.getweb()]),
    })
  }
  /**2nd formcheckboxchange function */
  changeforexperienceddancerability() {

    if (this.secondForm.controls['beginning'].value == true) {
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
    }

    if (this.secondForm.controls['elementary'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
    }

    if (this.secondForm.controls['junior'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
    }

    if (this.secondForm.controls['senior'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
    }

  }

  /**array fields */
  public getUnit() {
    return this._formBuilder.group({
      exper: [null, [Validators.required]],
    });
  }
  addCreds() {
    //console.log("hello");
    const control = <FormArray>this.secondForm.controls['experiences'];
    control.push(this.getUnit());
  }
  delCreds(i: number) {
    //console.log(i);
    if (i != 0) {
      const control = <FormArray>this.secondForm.controls['experiences'];
      control.removeAt(i);
    }

  }
/**array filds for website */
  getweb() {
    return this._formBuilder.group({
      wsite: [null, [Validators.required]],
    });
  }
  

  addweb() {
    //console.log("hello");
    const control = <FormArray>this.secondForm.controls['website'];
    control.push(this.getweb());
  }

  delweb(k: number) {
    //console.log(i);
    if (k != 0) {
      const control = <FormArray>this.secondForm.controls['website'];
      control.removeAt(k);
    }

  }
  /**2ns form submit */
  secondsubmit() {
    if (this.secondForm.valid) {
      console.log(this.secondForm.value);

    }
    else {
      console.log("Not Valid");
    }
  }
}
