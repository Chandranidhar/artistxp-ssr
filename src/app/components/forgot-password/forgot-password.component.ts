import { Component, OnInit, ViewChildren, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../services/api-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgorpassword: FormGroup;
  // @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  constructor(public activatedRouter: ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder, public dialog: MatDialog) {
    this.forgorpassword = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
    });
  }

  ngOnInit() {
  }

  /**forgotpassword Form Submit  */
  forgotpasswordFormSubmit() {
    
    for (let x in this.forgorpassword.controls) {
      this.forgorpassword.controls[x].markAsTouched();
    }
    if (this.forgorpassword.valid) {
      console.log(this.forgorpassword.value);
      this.apiservice.postDatawithoutToken('', this.forgorpassword.value).subscribe(res => {
        let result: any;
        result = res;
        if (result.status == "success") {
        console.log("please check you email");
        }

      });
    }
  }

  /**blur function */
  inputUntouched(val: any) {
    this.forgorpassword.controls[val].markAsUntouched();
  }
}
