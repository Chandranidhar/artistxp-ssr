import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams,UIParams, UIResponse } from 'ngx-facebook';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api-service';
import {CookieService} from "ngx-cookie-service";
// import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
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


  constructor(public FBS: FacebookService,fb: FormBuilder,private _http: HttpClient,private router: Router, public apiservice : ApiService,private route:ActivatedRoute, userdata: CookieService) { 
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
  agreetotermsFunc(){
    this.agreedtoterms = true;
    if(this.agreedtoterms == true){
      
      // var link = this._commonservices.nodesslurl1+'signupartistxp';
      var data = {
        firstname: this.dataForm.controls['firstname'].value,
        lastname: this.dataForm.controls['lastname'].value,
        phone: this.dataForm.controls['phone'].value,
        email: this.dataForm.controls['email'].value,
        username: this.dataForm.controls['username'].value,
        password: this.dataForm.controls['password'].value,
        gender: this.dataForm.controls['gender'].value,
        height: this.dataForm.controls['height'].value,
        weight: this.dataForm.controls['weight'].value,
        bust: this.dataForm.controls['bust'].value,
        waist: this.dataForm.controls['waist'].value,
        hips: this.dataForm.controls['hips'].value,
        ethnicity: this.dataForm.controls['ethnicity'].value,
        /*height:[''],
         weight:[''],
         bust:[''],
         waist:[''],
         hips:[''],
         ethnicity:[''],*/
        parent: this.parent,
        mediaid: this.mediaid,
        dancer: 0,
        producer: 0,
        model: 0,
        musicians: 0,
        fan: 0,
        signupaffiliate: 0,
      };

      if(this.dataForm.controls['dancer'].value){
        data.dancer = 1;
      }
      if(this.dataForm.controls['model'].value){
        data.model = 1;
      }
      if(this.dataForm.controls['musicians'].value){
        data.musicians = 1;
      }
      if(this.dataForm.controls['producer'].value){
        data.producer = 1;
      }
      if(this.dataForm.controls['fan'].value){
        data.fan = 1;
      }
      if(this.dataForm.controls['signupaffiliate'].value){
        data.signupaffiliate = 1;
      }
      this.apiservice.postDatawithoutToken('signupartistxp',data)
      // this._http.post(link, data)
          .subscribe(res => {
            let result:any;
            result = res;
            // this.modalRef = this.modalService.show(template);
            if(result.status=='success'){
              this.agreecookiemodal = false;

              console.log(this.agreeval);
              let udetails = result.result.ops[0];
              this.userdata.set('blastorpass','true');
              
              if(udetails.musicians == 1 || udetails.dancer == 1 || udetails.model == 1 || udetails.producer == 1 || udetails.fan == 1){

                // this.userdata.set('signupuserdata',JSON.stringify(udetails));
                this.router.navigateByUrl('/signupflow3/'+udetails._id);
              }else
              {
                // this.modalRef = this.modalService.show(template);

                this.dataForm.controls['firstname'].setValue('');
                this.dataForm.controls['lastname'].setValue('');
                this.dataForm.controls['phone'].setValue('');
                this.dataForm.controls['email'].setValue('');
                this.dataForm.controls['username'].setValue('');
                this.dataForm.controls['password'].setValue('');
                this.dataForm.controls['confirmpassword'].setValue('');
                this.dataForm.controls['gender'].setValue('');
                this.dataForm.controls['height'].setValue('');
                this.dataForm.controls['weight'].setValue('');
                this.dataForm.controls['bust'].setValue('');
                this.dataForm.controls['waist'].setValue('');
                this.dataForm.controls['ethnicity'].setValue('');

                this.dataForm.controls['accepttermscond'].setValue(false);
                this.dataForm.controls['ageandolder'].setValue(false);
                this.dataForm.controls['musicians'].setValue(false);
                this.dataForm.controls['producer'].setValue(false);
                this.dataForm.controls['dancer'].setValue(false);
                this.dataForm.controls['model'].setValue(false);
                this.dataForm.controls['signupaffiliate'].setValue(false);
                this.dataForm.controls['fan'].setValue(true);

                for (let x in this.dataForm.controls) {
                  this.dataForm.controls[x].markAsUntouched();
                }
              }


            }else{                  //for development.artistxp
              this.is_error= result.msg;
            }
          }, error => {
            console.log("Oooops!");
          });
    }
  }
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

}
