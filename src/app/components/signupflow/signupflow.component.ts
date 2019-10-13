import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { FormService } from '../../form.service';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// for dialog
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { MatStepper } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';             /*for comma , and enter key codes from keyboard*/
import {MatChipInputEvent} from '@angular/material/chips';
import { FacebookService, InitParams,UIParams, UIResponse } from 'ngx-facebook';
declare var FB: any;
declare var twttr: any;
declare var $:any;
declare var gapi:any;
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
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
  fourthForm: FormGroup;
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

  // fourthg form 
  @ViewChild('gsharelink1',{static:true}) gsharelink1: ElementRef;
  @ViewChild('gsharelink2',{static:true}) gsharelink2: ElementRef;
  @ViewChild('gsharelink3',{static:true}) gsharelink3: ElementRef;
  @ViewChild('gsharelink4',{static:true}) gsharelink4: ElementRef;
  
  public FB_APP_ID:any;
  public FB_APP_SECRET:any;
  public LI_CLIENT_ID:any;
  public LI_CLIENT_SECRET:any;
  public usercookie:any;
  public affiliatename:any;
  public username:any;
  public userdetails:any;
  public submitmodal:any = false;
  public firstname:any;
  public lastname:any;
  public user_id:any;
  public auth2 :any;
  public admsg :any = 0;
  public axmsg :any = 0;
  public socialmediaerror:any = 0;
  public dataForm: FormGroup;
  private fb;
  /*mat chip initialisation starts here*/
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  contactarray: any= [];
  public userContacts: any=[];
  public checkemail: any = 0;
  public invitesystem:any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  /*mat chip initialisation ends here*/


  // 2nd form 
  public instrument_list = ['Accordion', 'Bagpipes', 'Banjo', 'Bass guitar', 'Bassoon', 'Berimbau', 'Bongo', 'Cello', 'Clarinet', 'Clavichord' , 'Coranglais', 'Cornet', 'Cymbal', 'Didgeridoo', 'DJ Controller', 'Double bass', 'Drum kit', 'Euphonium', 'Flute', 'French horn', 'Glass harmonica', 'Glockenspiel', 'Gong', 'Guitar', 'Hang', 'Harmonica', 'Harp', 'Harpsichord', 'Hammered dulcimer', 'Hurdy gurdy', 'Jew’s harp', 'Kalimba', 'Lute', 'Lyre', 'Mandolin', 'Marimba', 'Melodica', 'Mixing Software', 'Oboe', 'Ocarina', 'Octobass', 'Organ', 'Oud', 'Pan Pipes', 'Pennywhistle', 'Piano', 'Piccolo', 'Pungi', 'Recorder', 'Saxophone', 'Sitar', 'Synthesizer', 'Tambourine', 'Timpani', 'Triangle', 'Trombone', 'Trumpet', 'Theremin', 'Tuba', 'Ukulele', 'Viola', 'Violin', 'Whamola', 'Xylophone', 'Zither'];

  public musicgenreList:any = ['Hip Hop', 'Rap', 'Trap', 'Pop', 'EDM', 'Techno', 'Trance', 'Trap', 'Dubstep', 'Country', 'Blues', 'Grunge', 'Indie Rock', 'Classic Rock', 'Punk', 'Ska', 'Heavy Metal', 'Folk', 'Jazz', 'Reggae', 'Classical', 'Latin Pop', 'Latin Rock', 'Cumbia'];  

  public dancegenrelist:any = [ 'Hip hop', 'Break Dance', 'Other Urban', 'Latin/Rhythm', 'Free and Improvised Dance', 'American Rhythm', 'Ballroom','EDM House', 'Disco', 'Historical', 'Bollywood Dance', 'Country Dance', 'Belly Dance', 'Ceremonial Dance', 'Ballet'];

  public modelgenrelist:any = [ 'Fashion model','Editorial Fashion model','Fashion catalogue model','Runway model','Commercial model','Print model','Glamour model','Promotional model','Lingerie model','Catalog model','Petite  model','Mature model','Freelance model','Fitness model','Parts model','Plus-size model','Art model','Pinup model','Alternative model','Social influencer','Teen/Junior model','Black-tape model','Body paint model','Hiphop model','Instagram model'];
  public webarr:any = [];
  public website:any = [];
  public image;
  public selectedFile:File;

  // 3rd step declaration
  public step = 0;
  public musicianlist:any =[];
  public dancerlist:any =[];
  public modellist:any =[];
  public fanlist:any =[];


  constructor(public _formBuilder: FormBuilder, public f: FormService, public apiService: ApiService, public _http: HttpClient, public dialog: MatDialog, public userdata: CookieService,public FBS: FacebookService, public activeRoute:ActivatedRoute, public router:Router) {
    this.fstgen();
    this.secgen();
    this.fourthFormGenerate();
    let initParams: InitParams = {
      appId: '2034821446556410',
      xfbml: true,
      version: 'v2.8'
  };

  FBS.init(initParams);
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

  openGenreDialog() {            //demo for dialog 
    const dialogGenreRef = this.dialog.open(GenreDialogComponent, {
     panelClass:'myClass',
      data: { agreeterms: 0 }
    });
    dialogGenreRef.afterClosed().subscribe(result => {
      console.log('GenreDialog was closed');
      console.log(result);
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
    this.filteredCityOptions = this.firstForm.controls['city'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(this.selectedcityarray, value))
      );
  }

  ngOnInit() {

    this.getCountryStateCityList();
    this.getUserList();
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
      // username:[null],
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


  agreetotermsFunc() {
    // if(this.agreedtoterms == true){
    // var link = this._commonservices.nodesslurl1+'signupartistxp';
    var data = {
      firstname: this.firstForm.controls['firstname'].value,
      lastname: this.firstForm.controls['lastname'].value,
      phone: this.firstForm.controls['phone'].value,
      email: this.firstForm.controls['email'].value,
      username: this.firstForm.controls['email'].value,
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
          console.log('this.myStepper');
          console.log(this.myStepper);
            this.myStepper.next();
          
          
          let udetails = result.result.ops[0];
          this.userdata.set('_id',result.result.ops[0]._id);
          this.userdata.set('firstname', data.firstname);
          this.userdata.set('lastname', data.lastname);
          this.userdata.set('username', data.email);
          this.userdata.set('email', data.email);
          this.userdata.set('dancer', this.firstForm.controls['dancer'].value);
          this.userdata.set('fan', this.firstForm.controls['fan'].value);
          this.userdata.set('musicians', this.firstForm.controls['musicians'].value);
          this.userdata.set('model', this.firstForm.controls['model'].value);
          this.userdata.set('signupaffiliate', this.firstForm.controls['signupaffiliate'].value);
          this.userdata.set('vocalist', this.firstForm.controls['vocalist'].value);
          this.userdata.set('instrumentalist', this.firstForm.controls['signupaffiliate'].value);
          this.userdata.set('dj', this.firstForm.controls['dj'].value);
          this.userdata.set('producer', this.firstForm.controls['producer'].value);
          this.userdata.set('sound_engineer', this.firstForm.controls['sound_engineer'].value);
          this.userdata.set('song_writer', this.firstForm.controls['song_writer'].value);
          this.userdata.set('blastorpass','false');
          console.log(this.userdata.getAll());
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
      
      musicgenre:[''],
      dancegenre:[''],
      modelgenre:[''],
      instrumentgenre:[''],
      height: [null],
      waist: [null],
      weight: [null],
      hips: [null],
      bust: [null],
      ethnicity:[null],

      beginning: false,
      elementary: false,
      junior: false,
      senior: false,
      private: false,
      website: this._formBuilder.array([this.createWebsite('')]),
    })
  }

  createWebsite(defaultVal): FormGroup {
    if (this.userdata.get('fan') == 'false') {

      return this._formBuilder.group({name: [defaultVal]});
      // return this.fb.group({name: [defaultVal, Validators.required]});
    }
    else {
      return this._formBuilder.group({name: ['']});
    }
  }

  get websites(): FormGroup {
    return this.secondForm.get('website') as FormGroup;
  }
  addWebsite(defaultVal){
    this.website = this.secondForm.get('website') as FormArray;
    this.website.push(this.createWebsite(defaultVal));
  }

  delWebsite(index){
    const control = <FormArray>this.secondForm.controls['website'];
    if(control.length > 1)
      control.removeAt(index);
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

  
  /**array filds for website */
  
// upload function
onFileChanged(event:any) {
  console.log(event.target.files);
  if(event.target.files!=null)
  this.selectedFile = event.target.files[0];
  const uploadData = new FormData();
  uploadData.append('file', this.selectedFile);
  uploadData.append('type', 'profile-picture');
  uploadData.append('prefix', 'profile-picture');
  uploadData.append('conversion_needed', 'profile-picture');
  uploadData.append('servername', 'artistxp');
  uploadData.append('bucketname', 'file.audiodeadline.com');
  uploadData.append('conversion_needed', '0');
  console.log(uploadData);
  // this._http.post(this.uploadurl, uploadData)
  this.apiService.postUploadFunction(uploadData,'artistxp')
      .subscribe(event => {
        let res:any;
        res = event;
        console.log(res);
        if(res.status == 'success'){
          this.image = res.basepath+'/artistxp/'+res.data.fileservername;
          console.log(this.image);
        }
      });
}

  /**2nd form submit */
  secondsubmit() {
    console.log(this.secondForm.value);
    if (this.secondForm.valid) {
      console.log(this.secondForm.value);
      console.log("this.userdata.get('_id')");
      console.log(this.userdata.get('_id'));
      for(let n in this.secondForm.controls['website'].value){
        this.webarr.push(this.secondForm.controls['website'].value.website[n].name);
      }
      
      var data = {
        _id: this.userdata.get('_id'),
        musicgenre: this.secondForm.controls['musicgenre'].value,
        dancegenre: this.secondForm.controls['dancegenre'].value,
        modelgenre: this.secondForm.controls['modelgenre'].value,
        instrumentgenre: this.secondForm.controls['instrumentgenre'].value,
        height: this.secondForm.controls['height'].value,
        waist: this.secondForm.controls['waist'].value,
        weight: this.secondForm.controls['weight'].value,
        hips: this.secondForm.controls['hips'].value,
        bust: this.secondForm.controls['bust'].value,
        ethnicity: this.secondForm.controls['ethnicity'].value,
        beginning: this.secondForm.controls['beginning'].value,
        elementary: this.secondForm.controls['elementary'].value,
        junior: this.secondForm.controls['junior'].value,
        senior: this.secondForm.controls['senior'].value,
        private: this.secondForm.controls['private'].value,
        images: this.image,
        website: this.webarr,
      };
      this.apiService.postDatawithoutToken('signup2post',data)
      .subscribe(res => {
        let result:any;
        result = res;
        if(result.status=='success'){
          console.log('success block--');
          this.userdata.delete('affiliatename');
          this.userdata.delete('mediaid');
          this.userdata.delete('signupuserdata');
          this.myStepper.next();
         /* if(this.userdetails.signupaffiliate == 1){

          }else{
            this.router.navigateByUrl('/');
            console.log('else success block--');
          }*/
        }
      }, error => {
        console.log("Oooops!");
      });

    }
    else {
      console.log("Not Valid");
    }
  }

// 3rd form functions
// expansion panel functions


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

// user list data 
getUserList(){
 
  this.apiService.postDatawithoutToken('expertisdata',{
    "limit" : 30,
    "skip" : 0
})
  .subscribe(res=>{
    let result:any = {};
    result = res;
    console.log('result in userlist call');
    console.log(result);
    if(result.status == 'success'){
      this.musicianlist = result.data.musicians_data;
      this.dancerlist = result.data.dancer_data;
      this.modellist = result.data.model_data;
      this.fanlist = result.data.fan_data;
    }
  })

}

// fourth form development
fourthFormGenerate() {
  this.fourthForm = this._formBuilder.group({
    /*fullname: ["", Validators.required],*/
    socialinvite: [""],
    socialcontact: [""],
    /* emailcontact:  ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],*/
    /*phoneno: ["", Validators.required],*/
    audiodeadlinemsg: ["I just found an awesome online streaming show that I think you would be interested in! It is based on a quarterly live streamed show that will showcase artists of all kinds such as, musicians, dancers, producers, and rappers. The artists go head to head in a competition where they show their best work and we get to vote on our favorite artist! When the best of the best is picked by the community, we get to watch them go head to head and collaborate on an original song that they will have only 8-hours to complete! This is a chance to see artists in live action in a real time studio making their creativity come to life. Don’t miss out and check it out now!"],
    artistxpmsg: ["Come join ArtistXP with me! I just joined this new social media that is full of fun and exciting features that I think you would enjoy too! They are all about a tight knit artist community where independent artists are even closer to their fans than ever before. As an artist you will be able to consolidate where all your work is located no matter what social media you use the most. They can do artist exchanges where it promotes all artists to work together by sharing each other’s artistry! As a fan we have front row seats to watch their creativity bloom. There is so much more it has to offer; all you need to do is come join me in this amazing community. Check it out now!"],
  });
}

  sendsocialinvite(){
    console.log("this.fourthForm.controls['socialinvite'].value");
    console.log(this.fourthForm.controls['socialinvite'].value);
    this.socialmediaerror = 0;
    if(this.fourthForm.controls['socialinvite'].value==""){
      this.socialmediaerror = 1;
    }
    if(this.fourthForm.controls['socialinvite'].value=="twitter"){
      setTimeout(()=> {
        this.gsharelink1.nativeElement.click();
      }, 500);
    }
    if(this.fourthForm.controls['socialinvite'].value=="linkedin"){
      setTimeout(()=> {
        this.gsharelink3.nativeElement.click();
      }, 500);
    }
    if(this.fourthForm.controls['socialinvite'].value=="tumblr"){
      setTimeout(()=> {
        this.gsharelink4.nativeElement.click();
      }, 500);
    }
    if(this.fourthForm.controls['socialinvite'].value=="facebook"){
      setTimeout(()=> {
        this.gsharelink2.nativeElement.click();
      }, 500);
    }
  }

  sendartistxpmsg(){
    
    // let link :any = this._commonservices.nodesslurl+'artistxpemailsend';
    let data = {'artistxpmsg':this.fourthForm.controls['artistxpmsg'].value,emails:this.contactarray,'fullname':this.userdetails.firstname+' '+this.userdetails.lastname};
    console.log(data);
    this.apiService.postDatawithoutToken('artistxpemailsend', data)
    // this._http.post(link,data)
        .subscribe(res=>{
          let result:any;
          result = res;
          if(result.status == "success"){
            this.contactarray = [];
          }
        });
  }
  postinfb2(username){
    // var link = this._commonservices.phpurlforshare+'sharetool2.php?media_id=ArtistXP_Social_Banner.jpg&username='+username+'&image=ArtistXP_Social_Banner.jpg&submittype=signup';
    
    let options: any = {};
    options = {
      method: 'share',

      // href: this._commonservices.phpurlforshare+'sharetool2.php?media_id=ArtistXP_Social_Banner.jpg&username='+username+'&image=ArtistXP_Social_Banner.jpg&submittype=signup'
  };
  this.FBS.ui(options)
                    .then((res: UIResponse) => {
                        // console.log('Got the users profile', res);
                    })
                    .catch(this.handleError);
  }
  private handleError(error) {
    console.error('Error processing action', error);
}
  /*-------------------mat chip functions-----------------*/
  /*function to add chip*/
  add(event: MatChipInputEvent): void {
    if(this.emailFormControl.valid || (this.contactarray!=null && this.contactarray.length>0)){
      const input = event.input;
      const value = event.value;

      // Add our input email
      if ((value || '').trim()) {
        this.contactarray.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
    }

  }

  /*function to add chip*/
  remove(fruit: any): void {
    const index = this.contactarray.indexOf(fruit);
    if (index >= 0) {
      this.contactarray.splice(index, 1);
    }
  }
  /*-------------------mat chip functions-----------------*/

  ngAfterViewInit(): void {
    setTimeout(() => this.signIn(), 1000);
  }
  signIn() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1036664457460-9o9ihhnjrnb3vqhklo72nu5mu7gbp84r.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
        // scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
      });
      this.auth2.attachClickHandler(document.getElementById('googleres'), {}, this.onSignIn, this.onFailure);
    })
  }
  onFailure(data:any){
    console.log('onFailure called');
    console.log(data);
  }
  onSignIn = (data: any) => {

    // setTimeout(() => this.fetchmail(), 1000);
    this.handleAuthorization(data.Zi);
    console.log('onSignIn');
    console.log(data);
    console.log(data.Zi);
    //console.log(data.WE.Zi);
  }

  handleAuthorization(authorizationResult) {
    if (authorizationResult && !authorizationResult.error) {
      let link:any = "https://www.google.com/m8/feeds/contacts/default/thin?alt=json&access_token=" + authorizationResult.access_token + "&max-results=500&v=3.0";
      this._http.get(link)
          .subscribe(res=>{
            this.contactarray=[];
            //process the response here
            let response:any={};
            response = res;
            console.log('response.gd$email');
            /* console.log(response.feed.gd$email);
             console.log(response.feed.entry);
             console.log(response.feed);*/
            for(let v in response.feed.entry){
              console.log('response.feed.entry.gd$email');
              if(typeof (response.feed.entry[v].gd$email)!='undefined'){
                //console.log(response.feed.entry[v].gd$email[0].address);
                this.contactarray.push(response.feed.entry[v].gd$email[0].address);
              }
            }
            console.log('contactarray');
            console.log(this.contactarray);
            console.log(this.contactarray.length);
          });
      /*function(response){
       var contactarray=[];
       //process the response here
       console.log(response);
       console.log('response.gd$email');
       console.log(response.feed.gd$email);
       console.log(response.feed.entry);
       console.log(response.feed);
       for(var v in response.feed.entry){
       console.log('response.feed.entry.gd$email');
       if(typeof (response.feed.entry[v].gd$email)!='undefined'){
       //console.log(response.feed.entry[v].gd$email[0].address);
       contactarray.push(response.feed.entry[v].gd$email[0].address);
       }
       }
       console.log('contactarray');
       console.log(contactarray);
       console.log(contactarray.length);
       });*/
    }
  }
  fetchmail() {
    console.log('fetchmail');
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: 'H1qzKV7Q8iUciTn8arwZPcti',
        discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
        clientId: '1036664457460-9o9ihhnjrnb3vqhklo72nu5mu7gbp84r.apps.googleusercontent.com',
        scope: 'profile email https://www.googleapis.com/auth/contacts.readonly'
      }).then(() => {
        return gapi.client.people.people.connections.list({
          resourceName:'people/me',
          personFields: 'emailAddresses,names'
        });
      }).then(
          (res) => {
            console.log("Res: " + JSON.stringify(res));         // to debug
            this.userContacts.emit(this.transformToMailListModel(res.result));
          },
          error => console.log("ERROR " + JSON.stringify(error))
      );
    });
  }
  transformToMailListModel(item:any){
    return item;
  }



  /*for google contacts api service*/

  getcontacts(){
    if(this.fourthForm.controls['socialcontact'].value == 'gmail'){
      console.log('gapi-------------------------');
      console.log(gapi);
      setTimeout(()=>{
        this.signIn();

      },2000);
      if(this.contactarray == null || this.contactarray.length == 0){
        this.checkemail = 1;
      }

    }
  }
  /*functions to access google contacts*/
  gotomainpage(){
    this.submitmodal = true;
    // let link2= this._commonservices.nodesslurl+"getalldetailsbyuserid";
    //alert(this.userdata.get('user_id'));
    //if(this.user_id=='' || this.user_id==null || this.user_id.length<5) return true;
    let data = {'user_id':this.activeRoute.snapshot.params.id};
    this.apiService.postDatawithoutToken('getalldetailsbyuserid', data)
    // this._http.post(link2,data)
        .subscribe(res=>{
          let result:any;
          result = res;
          // console.log(result);
          this.usercookie.set('real_name',result.item[0].realname);
          this.usercookie.set('user_name',result.item[0].username);
          this.usercookie.set('user_id',result.item[0]._id);
          this.usercookie.set('image',result.item[0].images);
          this.usercookie.set('fan',result.item[0].fan);
          this.usercookie.set('musicians',result.item[0].musicians);
          this.usercookie.set('dancer',result.item[0].dancer);
          this.usercookie.set('model',result.item[0].model);
          this.usercookie.set('signupaffiliate',result.item[0].signupaffiliate);
          this.usercookie.set('last_notify_id',result.item[0].last_notify_id);
          console.log(this.usercookie);
          setTimeout(()=>{
            if(this.invitesystem == 'on'){
              if(result.item[0].signupaffiliate == 1){
                this.router.navigateByUrl('/agreement/'+result.item[0]._id);
              }else{
                this.router.navigateByUrl('/invitationforlaunchplan');
              }
              
            }
            else{
              if(result.item[0].signupaffiliate == 1){
                this.router.navigateByUrl('/agreement/'+result.item[0]._id);
              }else
                this.router.navigateByUrl('/profile');
            }





            // console.log(this.usercookie.get('blastorpass'));
            // if(result.item[0].signupaffiliate == 1){
            //   this.router.navigateByUrl('/agreement/'+result.item[0]._id);
            // }else{
            //   this.submitmodal = false;
            //   if(this.usercookie.get('blastorpass')=='true'){
            //     this.router.navigateByUrl('/fbartistxpactive');
            //   }else{
            //     this.router.navigateByUrl('/profile');
            //   }
            // }
            
            
          },2000);
        });
    // this.usercookie.set('user_id',this.activeRoute.snapshot.params.id);



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

// genre dialog component
@Component({
  selector: 'genre-dialog',
  templateUrl: 'genre.component.html',
})
export class GenreDialogComponent {
 
  constructor(public dialogRef: MatDialogRef<TermsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  public onNoClick(): void {
    this.dialogRef.close();
  }
  
}



