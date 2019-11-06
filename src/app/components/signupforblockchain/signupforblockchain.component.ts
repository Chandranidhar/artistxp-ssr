import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {FormService} from '../../form.service';
@Component({
  selector: 'app-signupforblockchain',
  templateUrl: './signupforblockchain.component.html',
  styleUrls: ['./signupforblockchain.component.css']
})
export class SignupforblockchainComponent implements OnInit {
  public blockchainForm: FormGroup;
  public fb;
  public _id;
  public userdata:CookieService;
  public blockChainStatus: any;
  public userdetails:any;
  public serverurl:any;
  public exitmodal:any=false;
  public existmsg:any='';
  public redirect_url:any='';
  public created_date:any='';
  public state:any=[];
  public errormodal:any = false;
  public clickHereUrl: any = '/signupforblockchainkychowto';

  constructor(fb: FormBuilder,_commonservices:FormService) {
    this.fb = fb;
   }

  ngOnInit() {
    this.blockchainForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      city: ["", Validators.required],
      country: ["USA"],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      // _id: ["", Validators.required],
      email: ["", SignupforblockchainComponent.validateEmail],
    });
  }
  static validateEmail(control: FormControl){
    if(control.value==''){
      return { 'invalidemail': true };
    }

    if ( !control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
      return { 'invalidemail': true };
    }
  }

}
