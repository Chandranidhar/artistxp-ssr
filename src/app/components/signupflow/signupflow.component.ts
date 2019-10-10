import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormService } from '../../form.service';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// for dialog
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { MatStepper } from '@angular/material';
export interface DialogData {

  agreeterms: any;
}
@Component({
  selector: 'app-signupflow',
  templateUrl: './signupflow.component.html',
  styleUrls: ['./signupflow.component.css']
})

export class SignupflowComponent implements OnInit {

  @ViewChild('stepper',{static:true}) public myStepper: MatStepper;
  isLinear = false;
  firstForm: FormGroup;
  secondForm: FormGroup;
  public countrylistarray: any = [];
  public statelistarray: any = [];
  public citylistarray: any = [];
  public selectedstatearray: any = [];
  public selectedcityarray: any = [];
  filteredCountryOptions: Observable<string[]>;
  filteredStateOptions: Observable<string[]>;
  filteredCityOptions: Observable<string[]>;
  signup: any = {};
  public err: any = 0;
  public isOptional:any = false;
  constructor(public _formBuilder: FormBuilder, public f: FormService, public apiService: ApiService, public _http: HttpClient, public dialog: MatDialog, public userdata: CookieService) {
    this.fstgen();
    this.secgen();
    this.openTermsDialog();
  }
  openQueryDialog() {            //demo for dialog 
    const dialogQueryRef = this.dialog.open(QueryDialogComponent);
    dialogQueryRef.afterClosed().subscribe(result => {
      console.log('QueryDialog was closed');
    });
  }
  openTermsDialog() {            //demo for dialog 
    const dialogTermsRef = this.dialog.open(TermsDialogComponent, {
      data: { agreeterms: 0 }
    });
    dialogTermsRef.afterClosed().subscribe(result => {
      console.log('TermsDialog was closed');
      console.log(result);
    });
  }
  openTermsDialogAgree() {            //demo for dialog 
    const dialogTermsRef = this.dialog.open(TermsDialogComponent, {
      data: { agreeterms: 1 }
    });
    dialogTermsRef.afterClosed().subscribe(result => {
      console.log('TermsDialog was closed');
      console.log(result);
      if(result == 1){

        this.agreetotermsFunc();
      }
    });
  }

  emailcheck(email) {
    this.apiService.postDatawithoutToken('datalist', { "source": "user", "condition": { "email": email } })
      .subscribe(res => {
        let result1: any = {};
        result1 = res;
        this.signup = result1.resc;
        console.log(result1.resc);
        console.log(this.signup);
        if (this.signup == 1) {
          this.err = 1;
          console.log(this.err);
        } else {
          this.err = 0;
          console.log(this.err);
        }
      })
  }

  getCountryStateCityList() {
    // this._http.get("assets/json/country.json")
    this.apiService.getJsonObject('assets/json/country.json')
      .subscribe(res => {
        let result: any;
        result = res;
        console.log('result in Country----');
        console.log(result);
        this.countrylistarray = result;
      });
    this.apiService.getJsonObject('assets/json/state.json')
      .subscribe(res => {
        let result2: any;
        result2 = res;
        this.statelistarray = result2;
      });
    this.apiService.getJsonObject('assets/json/cities.json')
      .subscribe(res => {
        let result3: any;
        result3 = res;
        this.citylistarray = result3;
      });
  }
  setStatelist() {
    this.selectedstatearray = [];
    let selectedcountry: any = {};
    for (let i in this.countrylistarray) {
      if (this.countrylistarray[i].name == this.firstForm.controls['country'].value) {
        selectedcountry = this.countrylistarray[i];
      }
    }
    for (let i in this.statelistarray) {
      if (this.statelistarray[i].country_id == selectedcountry.id) {
        this.selectedstatearray.push(this.statelistarray[i]);
      }
    }
    this.filteredStateOptions = this.firstForm.controls['state'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.selectedstatearray, value))
      );
    console.log('this.selectedstatearray');
    console.log(this.selectedstatearray);
  }

  setCitylist() {
    this.selectedcityarray = [];
    let selectedstate: any = {};
    for (let i in this.statelistarray) {
      if (this.statelistarray[i].name == this.firstForm.controls['state'].value) {
        selectedstate = this.statelistarray[i];
      }
    }
    for (let i in this.citylistarray) {
      if (this.citylistarray[i].state_id == selectedstate.id) {
        this.selectedcityarray.push(this.citylistarray[i]);
      }
    }
    console.log('this.selectedcityarray');
    console.log(this.selectedcityarray);
    this.filteredCityOptions = this.firstForm.controls['city'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.selectedcityarray, value))
      );
  }

  ngOnInit() {

    this.getCountryStateCityList();
    this.filteredCountryOptions = this.firstForm.controls['country'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.countrylistarray, value))
      );
    // this.filteredStateOptions = this.firstForm.controls['state'].valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(this.selectedstatearray,value))
    // );
    // this.filteredCityOptions = this.firstForm.controls['city'].valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(this.selectedcityarray,value))
    // );

  }
  private _filter(array: any, value: string): string[] {
    const filterValue = value.toLowerCase();

    return array.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  fstgen() {
    this.firstForm = this._formBuilder.group({

      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmpassword: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null],
      alias: [null],
      hometown: [null],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      musicians: false,
      dancer: false,
      signupaffiliate: false,
      model: false,
      fan: false,
      vocalist: false,
      instrumentalist: false,
      dj: false,
      producer: false,
      sound_engineer: false,
      song_writer: false,
      privateval: false,
      publicval: false,
      height: [null],
      weight: [null],
      bust: [null],
      waist: [null],
      hips: [null],
      ethnicity: [null],


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
      this.firstForm.controls['signupaffiliate'].setValue(false);
      this.firstForm.controls['dancer'].setValue(false);
      this.firstForm.controls['musicians'].setValue(false);
    }
    if (this.firstForm.controls['musicians'].value == true || this.firstForm.controls['dancer'].value == true || this.firstForm.controls['model'].value == true) {
      this.firstForm.controls['signupaffiliate'].setValue(true);
      this.firstForm.controls['fan'].setValue(false);
    }
  }
  /*for privacy validation */
  statechangeforprivacy() {
    if (this.firstForm.controls['privateval'].value == true) {
      this.firstForm.controls['publicval'].setValue(false);
    }

    if (this.firstForm.controls['publicval'].value == true) {
      this.firstForm.controls['privateval'].setValue(false);
    }
  }

  /**submit function */
  firstsubmit() {
    // this.emailcheck(this.firstForm.controls['email'].value);
    this.firstForm.markAllAsTouched();
    if (this.firstForm.valid) {
      this.apiService.postDatawithoutToken('datalist', { "source": "user", "condition": { "email": this.firstForm.controls['email'].value } })
        .subscribe(res => {
          let result1: any = {};
          result1 = res;
          this.signup = result1.resc;
          console.log(result1.resc);
          console.log(this.signup);
          if (this.signup == 1) {
            this.err = 1;
            console.log(this.err);
            console.log('false');
          } else {
            this.err = 0;
            console.log(this.err);
            this.openTermsDialogAgree();
          }
        })
    } else {
      console.log('error');
    }




  }

  // old function

  agreetotermsFunc() {
    // if(this.agreedtoterms == true){
    // var link = this._commonservices.nodesslurl1+'signupartistxp';
    var data = {
      firstname: this.firstForm.controls['firstname'].value,
      lastname: this.firstForm.controls['lastname'].value,
      phone: this.firstForm.controls['phone'].value,
      email: this.firstForm.controls['email'].value,
      // username: this.dataForm.controls['username'].value,
      password: this.firstForm.controls['password'].value,
      gender: this.firstForm.controls['gender'].value,
      alias: this.firstForm.controls['alias'].value,
      hometown: this.firstForm.controls['hometown'].value,
      city: this.firstForm.controls['city'].value,
      state: this.firstForm.controls['state'].value,
      country: this.firstForm.controls['country'].value,
      zip: this.firstForm.controls['zip'].value,
      vocalist: this.firstForm.controls['vocalist'].value,
      instrumentalist: this.firstForm.controls['instrumentalist'].value,
      dj: this.firstForm.controls['dj'].value,
      producer: this.firstForm.controls['producer'].value,
      sound_engineer: this.firstForm.controls['sound_engineer'].value,
      song_writer: this.firstForm.controls['song_writer'].value,
      // parent: this.parent,
      // mediaid: this.mediaid,
      dancer: 0,
      model: 0,
      musicians: 0,
      fan: 0,
      signupaffiliate: 0,
      publicval: 0,
      privateval: 0

    };

    if (this.firstForm.controls['publicval'].value) {
      data.publicval = 1;
    }
    if (this.firstForm.controls['privateval'].value) {
      data.privateval = 1;
    }
    if (this.firstForm.controls['dancer'].value) {
      data.dancer = 1;
    }
    if (this.firstForm.controls['model'].value) {
      data.model = 1;
    }
    if (this.firstForm.controls['musicians'].value) {
      data.musicians = 1;
    }
    if (this.firstForm.controls['fan'].value) {
      data.fan = 1;
    }
    if (this.firstForm.controls['signupaffiliate'].value) {
      data.signupaffiliate = 1;
    }

    // this._http.post(link, data)
    this.apiService.postDatawithoutToken('signupartistxp', data)
      .subscribe(res => {
        let result: any;
        result = res;
        if (result.status == 'success') {
          // this.agreecookiemodal = false; // modal close here
          // this.termsmodal.onNoClick();
          // console.log(this.agreeval);
          this.dialog.closeAll();
          setTimeout(()=>{
            this.myStepper.next();
          },2000);
          
          let udetails = result.result.ops[0];
          this.userdata.set('firstname', data.firstname);
          this.userdata.set('lastname', data.lastname);
          this.userdata.set('email', data.email);
          this.userdata.set('dancer', this.firstForm.controls['dancer'].value);
          this.userdata.set('fan', this.firstForm.controls['fan'].value);
          this.userdata.set('producer', this.firstForm.controls['producer'].value);
          this.userdata.set('musicians', this.firstForm.controls['musicians'].value);
          this.userdata.set('model', this.firstForm.controls['model'].value);
          this.userdata.set('signupaffiliate', this.firstForm.controls['signupaffiliate'].value);
          this.userdata.set('vocalist', this.firstForm.controls['vocalist'].value);
          this.userdata.set('instrumentalist', this.firstForm.controls['signupaffiliate'].value);
          this.userdata.set('dj', this.firstForm.controls['dj'].value);
          this.userdata.set('producer', this.firstForm.controls['producer'].value);
          this.userdata.set('sound_engineer', this.firstForm.controls['sound_engineer'].value);
          this.userdata.set('song_writer', this.firstForm.controls['song_writer'].value);
          //this.userdata.set('blastorpass','true');

          if (udetails.musicians == 1 || udetails.dancer == 1 || udetails.model == 1 || udetails.producer == 1 || udetails.fan == 1) {

            // this.userdata.set('signupuserdata',JSON.stringify(udetails));
            // this.router.navigateByUrl('/signupflow3/'+udetails._id);    //next step
          } else {
            // this.modalRef = this.modalService.show(template);

            this.firstForm.controls['firstname'].setValue('');
            this.firstForm.controls['lastname'].setValue('');
            this.firstForm.controls['phone'].setValue('');
            this.firstForm.controls['email'].setValue('');
            // this.dataForm.controls['username'].setValue('');
            this.firstForm.controls['password'].setValue('');
            this.firstForm.controls['confirmpassword'].setValue('');
            this.firstForm.controls['gender'].setValue('');
            // this.firstForm.controls['height'].setValue('');
            // this.firstForm.controls['weight'].setValue('');
            // this.firstForm.controls['bust'].setValue('');
            // this.firstForm.controls['waist'].setValue('');
            // this.firstForm.controls['ethnicity'].setValue('');

            this.firstForm.controls['musicians'].setValue(false);
            this.firstForm.controls['producer'].setValue(false);
            this.firstForm.controls['dancer'].setValue(false);
            this.firstForm.controls['model'].setValue(false);
            this.firstForm.controls['signupaffiliate'].setValue(false);
            this.firstForm.controls['fan'].setValue(true);

            for (let x in this.firstForm.controls) {
              this.firstForm.controls[x].markAsUntouched();
            }
          }


        } else {                  //for development.artistxp
          // this.is_error= result.msg;
        }
      }, error => {
        console.log("Oooops!");
      });
    // }
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
      private: false,

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
      this.secondForm.controls['private'].setValue(false);
    }

    else if (this.secondForm.controls['elementary'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
      this.secondForm.controls['private'].setValue(false);
    }

    else if (this.secondForm.controls['junior'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
      this.secondForm.controls['private'].setValue(false);
    }

    else if (this.secondForm.controls['senior'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
      this.secondForm.controls['private'].setValue(false);
    }
    else if (this.secondForm.controls['private'].value == true) {
      this.secondForm.controls['beginning'].setValue(false);
      this.secondForm.controls['elementary'].setValue(false);
      this.secondForm.controls['junior'].setValue(false);
      this.secondForm.controls['senior'].setValue(false);
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
// query for english speaking country dialog component

@Component({
  selector: 'query-dialog',
  templateUrl: 'english-speaking-country-reason.component.html',
})
export class QueryDialogComponent {
  constructor(public dialogRef: MatDialogRef<QueryDialogComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
// terms and conditions agreement policy dialog component
@Component({
  selector: 'agree-terms-dialog',
  templateUrl: 'terms-condition-agree.component.html',
})
export class TermsDialogComponent {
 
  constructor(public dialogRef: MatDialogRef<TermsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  public onNoClick(): void {
    this.dialogRef.close();
  }
  
}

