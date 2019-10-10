import { Component, OnInit,Inject } from '@angular/core';
import { AbstractControl,FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormService } from '../../form.service';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// for dialog
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-signupflow',
  templateUrl: './signupflow.component.html',
  styleUrls: ['./signupflow.component.css']
})
export class SignupflowComponent implements OnInit {

  isLinear = false;
  firstForm: FormGroup;
  secondForm: FormGroup;
  public countrylistarray:any = [];
  public statelistarray:any = [];
  public citylistarray:any = [];
  public selectedstatearray:any = [];
  public selectedcityarray:any = [];
  filteredCountryOptions: Observable<string[]>;
  filteredStateOptions: Observable<string[]>;
  filteredCityOptions: Observable<string[]>;

  constructor(public _formBuilder: FormBuilder, public f: FormService, public apiService: ApiService, public _http: HttpClient, public dialog: MatDialog) {
     this.fstgen();
     this.secgen(); 
    }
    openDialog() {            //demo for dialog 
      const dialogRef = this.dialog.open(QueryDialogComponent, {
        data: {
          animal: 'panda'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  getCountryStateCityList(){
    // this._http.get("assets/json/country.json")
    this.apiService.getJsonObject('assets/json/country.json')
    .subscribe(res=>{
      let result: any;
      result =res;
      console.log('result in Country----');
      console.log(result);
      this.countrylistarray = result;
    });
    this.apiService.getJsonObject('assets/json/state.json')
    .subscribe(res=>{
      let result2: any;
      result2 =res;
      this.statelistarray = result2;
    });
    this.apiService.getJsonObject('assets/json/cities.json')
    .subscribe(res=>{
      let result3: any;
      result3 =res;
      this.citylistarray = result3;
    });
  }  
  setStatelist(){
    this.selectedstatearray = [];
    let selectedcountry:any = {};
    for(let i in this.countrylistarray){
      if(this.countrylistarray[i].name == this.firstForm.controls['country'].value){
        selectedcountry = this.countrylistarray[i];
      }
    }
    for(let i in this.statelistarray){
    if(this.statelistarray[i].country_id == selectedcountry.id){
      this.selectedstatearray.push(this.statelistarray[i]);
    }
    }
    this.filteredStateOptions = this.firstForm.controls['state'].valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(this.selectedstatearray,value))
    );
    console.log('this.selectedstatearray');
    console.log(this.selectedstatearray);
  }

  setCitylist(){
    this.selectedcityarray = [];
    let selectedstate:any = {};
    for(let i in this.statelistarray){
      if(this.statelistarray[i].name == this.firstForm.controls['state'].value){
        selectedstate = this.statelistarray[i];
      }
    }
    for(let i in this.citylistarray){
    if(this.citylistarray[i].state_id == selectedstate.id){
      this.selectedcityarray.push(this.citylistarray[i]);
    }
    }
    console.log('this.selectedcityarray');
    console.log(this.selectedcityarray);
    this.filteredCityOptions = this.firstForm.controls['city'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.selectedcityarray,value))
      );
  }

  ngOnInit() {

    this.getCountryStateCityList();
    this.filteredCountryOptions = this.firstForm.controls['country'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.countrylistarray,value))
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
  private _filter(array:any,value: string): string[] {
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
      phone: [null, [Validators.required]],
      aliases: [null],
      hometown: [null, [Validators.required]],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      musicians: false,
      dancer: false,
      afiliates: false,
      model: false,
      fan: false,
      vocalist: false,
      instrumentalist: false,
      dj: false,
      producer: false,
      sound_engineer: false,
      song_writer: false,
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
   

    if (this.firstForm.valid) {
      console.log(this.firstForm.value);
    }
    else {
      this.firstForm.markAllAsTouched();
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
      private:false,

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


@Component({
  selector: 'query-dialog',
  templateUrl: 'english-speaking-country-reason.component.html',
})
export class QueryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    // this.dialogRef.close();
  }
}
