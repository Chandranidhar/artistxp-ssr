import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../services/api-service';
@Component({
  selector: 'app-signupforblockchainstep2',
  templateUrl: './signupforblockchainstep2.component.html',
  styleUrls: ['./signupforblockchainstep2.component.css']
})
export class Signupforblockchainstep2Component implements OnInit {
  public blockchainForm: FormGroup;
  public blockchainForm_submit: any = false;
  public formBuilder;
  public url: any = {};
  public userdata: CookieService;
  public cardValidDateSetup:any = { validMM: [], validYY: [] };
  public states: any;
  public blockChainId: any;
  public acceptTermsAndConditionsFlag: any = false;
  public invalidCard_serverSiteMessage: any = null;

  constructor( FormBuilder: FormBuilder,
    public _http: HttpClient,
    public route: ActivatedRoute,
    public router: Router,
    userdata: CookieService,
    public apiService: ApiService) {
      this.formBuilder  = FormBuilder;
    this.userdata     = userdata;

    /* call function to get state data */
    this.getStateList();

    /* set year and month */
    this.getYYMM();

    /* get id from url and get user details */
    this.route.params.subscribe(params=>{
      this.blockChainId = params['blockChainId'];
      this.getUserDetails();
    });
     }

  ngOnInit() {
       /* scroll top */
       window.scrollTo(1000,0);

       /* form builder and validate rule */
       this.blockchainForm = this.formBuilder.group({
         firstname:    [ null, [ Validators.required, Validators.maxLength(100) ] ],
         lastname:     [ null, [ Validators.required, Validators.maxLength(100) ] ],
         email:        [ null, [ Validators.required, Validators.maxLength(100), Validators.email ] ],
         address:      [ null, [ Validators.required, Validators.maxLength(1000) ] ],
         city:         [ null, [ Validators.required, Validators.maxLength(50) ] ],
         country:      [ null, [ Validators.required, Validators.maxLength(50) ] ],
         zip:          [ null, [ Validators.required, Validators.maxLength(10) ] ],
         state:        [ null, [ Validators.required, Validators.maxLength(50) ] ],
         /* for card details */
         cardnumber:   [ null, [ Validators.required, Validators.minLength(10), Validators.maxLength(24) ] ],
         cardValidMM:  [ "", [ Validators.required, Validators.min(1), Validators.max(12) ] ],
         cardValidYY:  [ "", [ Validators.required, Validators.min(this.cardValidDateSetup.validYY[0]), Validators.max(this.cardValidDateSetup.validYY[59]) ] ],
         cvv:          [ null, [ Validators.required, Validators.minLength(3), Validators.maxLength(5) ] ],
         promocode:    [ null, [ Validators.maxLength(30) ] ],
       });
  }
   /* form validate function */
   get blockchainForm_Validate() { return this.blockchainForm.controls; }

   /* blockchain form submit */
   blockchainForm_Submit() {
     this.blockchainForm_submit = true;
     this.invalidCard_serverSiteMessage = null;
 
     if (this.blockchainForm.valid && this.acceptTermsAndConditionsFlag) {
       let data: any = this.blockchainForm.value;
       data._id = this.blockChainId;
       this.apiService.postDatawithoutToken('updateallcustomer', data)
       .subscribe(response => {
         let result:any = response;
         switch(result.status) {
           case 'success':
             this.router.navigate(['/signupforblockchainconfirmation/' + this.blockChainId]);
             break;
           default:
             if(result.message) {
               this.invalidCard_serverSiteMessage = result.message;
             } else {
               console.log('An error occord.');
             }
             break;
         }
       },error => {
         console.log('An error occord.');
       });
     }
   }
 
   /* get user details */
   getUserDetails() {
     
     var data = { "condition": { "_id": this.blockChainId }, "source": "blockchainuser_details_view" };
     this.apiService.postDatawithoutToken('datalist', data)
     .subscribe(response => {
       let result:any = response;
       this.blockchainForm.patchValue({ 
         firstname:  result.res[0].firstName,
         lastname:   result.res[0].lastName,
         email:      result.res[0].email,
         address:    result.res[0].address,
         country:    result.res[0].country,
         city:       result.res[0].city,
         zip:        result.res[0].zipCode,
         state:      result.res[0].state
       });
     },error => {
       console.log('An error occord.');
     });
   }
 
   /* get state list */
   getStateList() {
     this.apiService.getDatawithouttoken('getusastates')
    //  this._http.get(link)
     .subscribe(response => {
       let result:any = response;
       this.states = result;
     }, error => {
       console.log('An error occord.');
     });
   }
 
   /* set month and year for card dropdown */
   getYYMM() {
     /* set years for dorpdown */
     var myDate = new Date();
     let fromYear: number = myDate.getFullYear() + 1;
     let toYear: number = fromYear + 60;
     for(let loop = fromYear; loop <= toYear; ++loop){
       this.cardValidDateSetup.validYY.push(loop);
     }
 
     /* set month for dropdown */
     for(let loop = 1; loop <= 12; ++loop){
       this.cardValidDateSetup.validMM.push(loop);
     }
     console.log('this.cardValidDateSetup');
     console.log(this.cardValidDateSetup);
   }
 
   /* Accept Terms And Conditions */
   acceptTermsAndConditions() {
     if(this.acceptTermsAndConditionsFlag) {
       this.acceptTermsAndConditionsFlag = false;
     } else {
       this.acceptTermsAndConditionsFlag = true;
     }
   }

}
