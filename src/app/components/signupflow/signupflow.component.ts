import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signupflow',
  templateUrl: './signupflow.component.html',
  styleUrls: ['./signupflow.component.css']
})
export class SignupflowComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;s
  secondFormGroup: FormGroup;
  constructor(public _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
