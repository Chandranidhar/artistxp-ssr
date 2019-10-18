import { Component, OnInit, Inject } from '@angular/core';
import { FacebookService, InitParams,UIParams, UIResponse } from 'ngx-facebook';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api-service';
import {CookieService} from "ngx-cookie-service";
// import {BsModalRef, BsModalService} from "ngx-bootstrap";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormService } from '../../form.service';
import {Router, ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../signupflow/signupflow.component';
import { MetaService } from '@ngx-meta/core';
declare var $:any;
declare var FB: any;
@Component({
  selector: 'app-blastorpass',
  templateUrl: './blastorpass.component.html',
  styleUrls: ['./blastorpass.component.css']
})
export class BlastorpassComponent implements OnInit {
  // modalRef: BsModalRef;
  public dataForm: FormGroup;
  public firstForm:FormGroup;
  private fb;
  public serverurl;
  public chkerror;
  public udetails:any;
  public chkerror1;
  public state2;
  public parent;
  public mediaid;
  public is_error;
  public agreedtoterms:any = false;
  private userdata: CookieService;
  private user_id;
  public termsandconditionsmodal:any = false;
  public agreecookiemodal:any = false;
  public agreeval:any = 0;
  public err:any=0;
  public erruser:any=0;
  public feature:any=0;
  public result:any;
  signup:any={};
  public countrylistarray: any = [];
  public statelistarray: any = [];
  public citylistarray: any = [];
  public selectedstatearray: any = [];
  public selectedcityarray: any = [];
  filteredCountryOptions: Observable<string[]>;
  filteredStateOptions: Observable<string[]>;
  filteredCityOptions: Observable<string[]>;


  constructor(public FBS: FacebookService,fb: FormBuilder,private _http: HttpClient,private router: Router, public apiservice : ApiService,private route:ActivatedRoute, userdata: CookieService, public dialog: MatDialog,  public f: FormService, public readonly meta: MetaService) { 
    this.meta.setTitle('ArtistXP');
    this.meta.setTag('og:description', ' Independent Artists can participate in the Blast or Pass program by posting their content for review by Alfa Blvck, and be featured as the Artist of the Week.');
    this.meta.setTag('og:title', 'ArtistXP.com – Blast Or Pass');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');
    this.meta.setTag('og:keywords', 'ArtistXP Blast or Pass, Artist of the Week, Alfa Blvck, ArtistXP Music Network');
   
    this.meta.setTag('twitter:description', ' Independent Artists can participate in the Blast or Pass program by posting their content for review by Alfa Blvck, and be featured as the Artist of the Week.');
    this.meta.setTag('twitter:title', 'ArtistXP.com – Blast Or Pass');
    this.meta.setTag('twitter:card', 'summary');
    this.meta.setTag('twitter:image', 'https://artistxp.com/assets/images/artistheaderlogo.png');

    this.fb = fb;
    this.chkerror = 0;
    this.chkerror1 = 0;
    this.is_error = 0;
    this.fb = fb;
    // this.serverurl=_commonservices.url;
    this.parent = '';
    this.mediaid = '';
    let initParams: InitParams = {
      appId: '2034821446556410',
      xfbml: true,
      version: 'v2.8'
    };
    this.userdata = userdata;

    FBS.init(initParams);
    FB.XFBML.parse();
    this.route.params.subscribe(params=>{
      console.log('params');
      console.log(params);
      if(typeof (params.uname) != 'undefined'){
        this.parent = params.uname;
        // this.userdata.set('affiliatename', this.parent);
        this.addNoOfClick();
      }else{
        let userdata2: any;
        userdata2= userdata.get('affiliatename');
        if (typeof (userdata2) != 'undefined' && userdata2 != ''){
          this.parent = userdata2;
        }
        let userdata3: any;
        userdata3= userdata.get('mediaid');
        if (typeof (userdata3) != 'undefined' && userdata3 != ''){
          this.mediaid = userdata3;
        }
      }


      if(params.uname==null){             //for grab url link, where parent is in url

        console.log(this.route.snapshot.url[0].path);
        // this.userdata.set('affiliatename', this.route.snapshot.url[0].path);
        this.parent = this.route.snapshot.url[0].path;
        this.addNoOfClick();
        console.log('params blank');
      }
    });
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
  private _filter(array: any, value: string): string[] {
    const filterValue = value.toLowerCase();

    return array.filter(option => option.name.toLowerCase().includes(filterValue));
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
    this.dataForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", BlastorpassComponent.validateEmail],
      // username: ["", FbartistxpComponent.validateUsername],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required],
      gender: ["", Validators.required],
      accepttermscond: [false],
      ageandolder: [false],
      musicians: [false],
      dancer: [false],
      producer: [false],
      model: [false],
      signupaffiliate: [true],
      fan: [false],
      height:[''],
      weight:[''],
      bust:[''],
      waist:[''],
      hips:[''],
      ethnicity:[''],
    },{validator: this.matchingPasswords('password', 'confirmpassword')});


    this.firstForm = this.fb.group({

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
      signupaffiliate: true,
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


    },{validator: this.matchingPasswords('password', 'confirmpassword')});
    this.filteredCountryOptions = this.firstForm.controls['country'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.countrylistarray, value))
      );
  }
  scrollToTop(){

    $('html, body').animate({
      scrollTop: $(".communitysignupnewblock1right").offset().top
    }, 1000);
  }
  open_termsandconditions(){
    this.termsandconditionsmodal = true;

  }
  onChangeCategory(){
    if(this.dataForm.controls['musicians'].value || this.dataForm.controls['dancer'].value || this.dataForm.controls['model'].value || this.dataForm.controls['producer'].value){
      this.dataForm.controls['fan'].setValue(false);
    }
    if(!this.dataForm.controls['musicians'].value && !this.dataForm.controls['dancer'].value && !this.dataForm.controls['model'].value && !this.dataForm.controls['producer'].value){
      this.dataForm.controls['fan'].setValue(true);
    }
    if(this.dataForm.controls['model'].value){
      this.feature=1
    }else{
      this.feature=0;
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

  firstsubmit() {
    // this.emailcheck(this.firstForm.controls['email'].value);
    this.firstForm.markAllAsTouched();
    if (this.firstForm.valid) {
      this.apiservice.postDatawithoutToken('datalist', { "source": "user", "condition": { "email": this.firstForm.controls['email'].value } })
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
    this.apiservice.postDatawithoutToken('signupartistxp', data)
      .subscribe(res => {
        let result: any;
        result = res;
        if (result.status == 'success') {
          // this.agreecookiemodal = false; // modal close here
          // this.termsmodal.onNoClick();
          // console.log(this.agreeval);
          this.dialog.closeAll();
          // setTimeout(()=>{
          //   this.myStepper.next();
          // },2000);
          
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
          this.userdata.set('blastorpass','true');
          this.router.navigateByUrl('/signupflow');

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






  dosubmit1() {
    this.is_error = 0;
    this.chkerror = 0;
    this.chkerror1 = 0;
    let x: any;
    for (x in this.dataForm.controls) {
      this.dataForm.controls[x].markAsTouched();
    }
    this.emailcheck(this.dataForm.controls['email'].value);
    console.log(this.err);
    console.log(this.erruser);
    if(this.erruser==1 || this.err==1 || this.dataForm.valid == false){
      this.agreecookiemodal = false;
      console.log('false');
    }

    if (this.dataForm.valid  && this.erruser==0 && this.err==0) {
      if ((this.dataForm.controls['accepttermscond'].value == false || this.dataForm.controls['accepttermscond'].value == 0)) {
        this.chkerror = 1;
        this.dataForm.controls['accepttermscond'].setErrors({'incorrect': true});
        return false;
      }  else if ((this.dataForm.controls['ageandolder'].value == false || this.dataForm.controls['ageandolder'].value == 0)) {
        this.chkerror1 = 1;
        this.dataForm.controls['ageandolder'].setErrors({'incorrect': true});
        return false;
      }
      else {
        this.agreecookiemodal = true;
        
        // var link = this.serverurl+'signup';
        



      }
    }
  }
  // agreetotermsFunc(){
  //   this.agreedtoterms = true;
  //   if(this.agreedtoterms == true){
      
  //     // var link = this._commonservices.nodesslurl1+'signupartistxp';
  //     var data = {
  //       firstname: this.dataForm.controls['firstname'].value,
  //       lastname: this.dataForm.controls['lastname'].value,
  //       phone: this.dataForm.controls['phone'].value,
  //       email: this.dataForm.controls['email'].value,
  //       username: this.dataForm.controls['username'].value,
  //       password: this.dataForm.controls['password'].value,
  //       gender: this.dataForm.controls['gender'].value,
  //       height: this.dataForm.controls['height'].value,
  //       weight: this.dataForm.controls['weight'].value,
  //       bust: this.dataForm.controls['bust'].value,
  //       waist: this.dataForm.controls['waist'].value,
  //       hips: this.dataForm.controls['hips'].value,
  //       ethnicity: this.dataForm.controls['ethnicity'].value,
  //       /*height:[''],
  //        weight:[''],
  //        bust:[''],
  //        waist:[''],
  //        hips:[''],
  //        ethnicity:[''],*/
  //       parent: this.parent,
  //       mediaid: this.mediaid,
  //       dancer: 0,
  //       producer: 0,
  //       model: 0,
  //       musicians: 0,
  //       fan: 0,
  //       signupaffiliate: 0,
  //     };

  //     if(this.dataForm.controls['dancer'].value){
  //       data.dancer = 1;
  //     }
  //     if(this.dataForm.controls['model'].value){
  //       data.model = 1;
  //     }
  //     if(this.dataForm.controls['musicians'].value){
  //       data.musicians = 1;
  //     }
  //     if(this.dataForm.controls['producer'].value){
  //       data.producer = 1;
  //     }
  //     if(this.dataForm.controls['fan'].value){
  //       data.fan = 1;
  //     }
  //     if(this.dataForm.controls['signupaffiliate'].value){
  //       data.signupaffiliate = 1;
  //     }
  //     this.apiservice.postDatawithoutToken('signupartistxp',data)
  //     // this._http.post(link, data)
  //         .subscribe(res => {
  //           let result:any;
  //           result = res;
  //           // this.modalRef = this.modalService.show(template);
  //           if(result.status=='success'){
  //             this.agreecookiemodal = false;

  //             console.log(this.agreeval);
  //             let udetails = result.result.ops[0];
  //             this.userdata.set('blastorpass','true');
              
  //             if(udetails.musicians == 1 || udetails.dancer == 1 || udetails.model == 1 || udetails.producer == 1 || udetails.fan == 1){

  //               // this.userdata.set('signupuserdata',JSON.stringify(udetails));
  //               this.router.navigateByUrl('/signupflow3/'+udetails._id);
  //             }else
  //             {
  //               // this.modalRef = this.modalService.show(template);

  //               this.dataForm.controls['firstname'].setValue('');
  //               this.dataForm.controls['lastname'].setValue('');
  //               this.dataForm.controls['phone'].setValue('');
  //               this.dataForm.controls['email'].setValue('');
  //               this.dataForm.controls['username'].setValue('');
  //               this.dataForm.controls['password'].setValue('');
  //               this.dataForm.controls['confirmpassword'].setValue('');
  //               this.dataForm.controls['gender'].setValue('');
  //               this.dataForm.controls['height'].setValue('');
  //               this.dataForm.controls['weight'].setValue('');
  //               this.dataForm.controls['bust'].setValue('');
  //               this.dataForm.controls['waist'].setValue('');
  //               this.dataForm.controls['ethnicity'].setValue('');

  //               this.dataForm.controls['accepttermscond'].setValue(false);
  //               this.dataForm.controls['ageandolder'].setValue(false);
  //               this.dataForm.controls['musicians'].setValue(false);
  //               this.dataForm.controls['producer'].setValue(false);
  //               this.dataForm.controls['dancer'].setValue(false);
  //               this.dataForm.controls['model'].setValue(false);
  //               this.dataForm.controls['signupaffiliate'].setValue(false);
  //               this.dataForm.controls['fan'].setValue(true);

  //               for (let x in this.dataForm.controls) {
  //                 this.dataForm.controls[x].markAsUntouched();
  //               }
  //             }


  //           }else{                  //for development.artistxp
  //             this.is_error= result.msg;
  //           }
  //         }, error => {
  //           console.log("Oooops!");
  //         });
  //   }
  // }
  addNoOfClick(){
    var link =this.serverurl+'addNoOfClick';

    var data = {username:this.parent};

    this._http.post(link, data)
        .subscribe(res => {
          console.log("Success!");
        },error => {
          console.log("Oooops!");
        });
  }
  addMediaNoOfClick(){
    var link =this.serverurl+'addMediaNoOfClick';
    var data = {mediaid:this.mediaid};

    this._http.post(link, data)
        .subscribe(res => {
          console.log("Success!");
        },error => {
          console.log("Oooops!");
        });
  }
  static validateUsername(control: FormControl){
    if(control.value==''){
      return { 'invalidusername': true };
    }

    if ( !control.value.match(/^\S*$/)){
      return { 'invalidusername': true };
    }
  }
  static validateEmail(control: FormControl){
    if(control.value==''){
      return { 'invalidemail': true };
    }

    if ( !control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
      return { 'invalidemail': true };
    }
  }
  public matchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup): {[key: string]: any} => {

      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value){
        confirmPassword.setErrors({'incorrect': true});
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
  emailcheck(email){
    this.apiservice.postDatawithoutToken('datalist',{"source": "user","condition":{"email":email}})
    // this._http.post(link,({"source": "user","condition":{"email":email}}))
        .subscribe(res=>{
          let result1:any;
          result1=res;
          // this.signup=result1.resc;

          if(result1.resc==1){
            this.err=1;
          }else{
            this.err=0;
          }
          return;
        })
  }
  openQueryDialog() {            //demo for dialog 
    const dialogQueryRef = this.dialog.open(QueryDialogBlastComponent);
    dialogQueryRef.afterClosed().subscribe(result => {
      console.log('QueryDialog was closed');
    });
  }
  openTermsDialog() {            //demo for dialog 
    const dialogTermsRef = this.dialog.open(TermsDialogBlastComponent, {
      data: { agreeterms: 0 }
    });
    dialogTermsRef.afterClosed().subscribe(result => {
      console.log('TermsDialog was closed');
      console.log(result);
    });
  }
  openTermsDialogAgree() {            //demo for dialog 
    const dialogTermsRef = this.dialog.open(TermsDialogBlastComponent, {
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

}

// query for english speaking country dialog component

@Component({
  selector: 'query-dialog',
  templateUrl: '../signupflow/english-speaking-country-reason.component.html',
})
export class QueryDialogBlastComponent {
  constructor(public dialogRef: MatDialogRef<QueryDialogBlastComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
// terms and conditions agreement policy dialog component
@Component({
  selector: 'agree-terms-dialog',
  templateUrl: '../signupflow/terms-condition-agree.component.html',
})
export class TermsDialogBlastComponent {
 
  constructor(public dialogRef: MatDialogRef<TermsDialogBlastComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  public onNoClick(): void {
    this.dialogRef.close();
  }
  
}
