/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';
import { matchingPasswords } from '../_helpers/must-match.validator';
import { CookieService } from 'ngx-cookie-service';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
    /** @type {?} */
    DialogData.prototype.name;
}
export class SignUpComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} dialog
     * @param {?} apiService
     * @param {?} cookieService
     */
    constructor(fb, http, router, dialog, apiService, cookieService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.message = '';
        this.state_usss = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ];
        this.formTitleValue = '';
        this.serverUrlValue = '';
        this.forgetRouteingUrlValue = '';
        this.loginRouteingUrlValue = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.signUpForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: [null, Validators.required],
            zip: [null, Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            companyname: [null],
            designation: [null],
            companywebsite: [null],
            status: 1
        }, {
            validator: matchingPasswords('password', 'confirmpassword')
        });
        // this.openDialog();
    }
    /**
     * @param {?} typeval
     * @return {?}
     */
    set userType(typeval) {
        this.typevalue = typeval;
    }
    /**
     * @param {?} formTitleVal
     * @return {?}
     */
    set formTitle(formTitleVal) {
        this.formTitleValue = (formTitleVal) || '<no name set>';
        this.formTitleValue = formTitleVal;
        // console.log(this.formTitleValue);
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
        // console.log(this.serverUrlValue);
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @param {?} addEndpointVal
     * @return {?}
     */
    set addEndpoint(addEndpointVal) {
        this.addEndpointValue = addEndpointVal;
        console.log(this.addEndpointValue);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set forgetRouteingUrl(routeingUrlval) {
        this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.forgetRouteingUrlValue = routeingUrlval;
        // console.log(this.forgetRouteingUrlValue);
    }
    /**
     * @param {?} routeingUrlval
     * @return {?}
     */
    set loginRouteingUrl(routeingUrlval) {
        this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
        this.loginRouteingUrlValue = routeingUrlval;
        // console.log(this.loginRouteingUrlValue);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); //  Clear the server url
        // setTimeout(() => {
        this.apiService.setServerUrl(this.serverUrlValue); //  set the server url
        // }, 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); //  Clear the endpoint
        // setTimeout(() => {
        this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); //  set the endpoint
        //  set the endpoint
        // }, 50);
        /** @type {?} */
        let endpoint = 'gettemptoken';
        this.http.get(this.serverUrlValue + endpoint).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == "success") {
                this.cookieService.set('jwttoken', result.token);
            }
        }));
    }
    /**
     * ****** Sign Up Form Submit start here********
     * @return {?}
     */
    signUpFormSubmit() {
        // use for validation checking
        for (let x in this.signUpForm.controls) {
            this.signUpForm.controls[x].markAsTouched();
        }
        if (this.signUpForm.valid) {
            if (this.signUpForm.value.confirmpassword != null) {
                delete this.signUpForm.value.confirmpassword;
            }
            /** @type {?} */
            let allData = this.signUpForm.value;
            allData.type = this.typevalue;
            console.log(allData);
            // let link: any = this.fullUrlValue;
            /** @type {?} */
            let data = {
                'data': allData,
                "source": this.addEndpointValue.source,
                "token": this.cookieService.get('jwttoken')
            };
            console.log(data);
            this.apiService.signup(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                let result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    this.openDialog();
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialog.closeAll();
                    }), 3000);
                    this.router.navigateByUrl('/login'); // navigate to dashboard url y
                    // this is use for reset the from
                    this.formDirective.resetForm();
                }
                else {
                    // display error message on html
                    this.message = result.msg;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const dialogRef = this.dialog.open(commonModalComponent, {
            width: '250px',
            data: { name: 'this.name', animal: this.animal }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            this.animal = result;
        }));
    }
    /**
     * ****** Sign Up Form Submit end here********
     * @return {?}
     */
    // This is use for navigate this component to forget component 
    forgetpassword() {
        this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
    }
    // This is use for navigate this component to forget component 
    /**
     * @return {?}
     */
    login() {
        this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.signUpForm.controls[val].markAsUntouched();
    }
}
SignUpComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sign-up',
                template: "<div class=\"as_formdiv\">\r\n<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"signUpForm\"  (ngSubmit)=\"signUpFormSubmit()\" novalidate>\r\n\r\n\r\n      <mat-error class=\"error\" *ngIf=\"message != ''\">{{message}}</mat-error>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" (blur)=\"inputUntouched('firstname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['firstname'].valid && signUpForm.controls['firstname'].errors.required && signUpForm.controls['firstname'].touched\">\r\n          First Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" (blur)=\"inputUntouched('lastname')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['lastname'].valid && signUpForm.controls['lastname'].errors.required && signUpForm.controls['lastname'].touched\">\r\n          Last Name field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].errors.required && signUpForm.controls['email'].touched\">\r\n          Email field can not be blank</mat-error>\r\n        <mat-error *ngIf=\"!signUpForm.controls['email'].valid && !signUpForm.controls['email'].errors.required\">Email is\r\n          not valid</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Phone Number\" formControlName=\"phone\" (blur)=\"inputUntouched('phone')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['phone'].valid && signUpForm.controls['phone'].errors.required && signUpForm.controls['phone'].touched\">\r\n          Phone Number field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n   <!-- added by sourav -->\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].errors.required && signUpForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n      </mat-form-field>\r\n      <!-- added by sourav -->\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" formControlName=\"confirmpassword\" (blur)=\"inputUntouched('confirmpassword')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['confirmpassword'].valid && signUpForm.controls['confirmpassword'].errors.required && signUpForm.controls['confirmpassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n          <mat-error *ngIf=\"signUpForm.hasError('mismatchedPasswords')\">Passwords must match</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Zip Code\" type=\"text\" formControlName=\"zip\" (blur)=\"inputUntouched('zip')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['zip'].valid && signUpForm.controls['zip'].errors.required && signUpForm.controls['zip'].touched\">\r\n          Zip field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" (blur)=\"inputUntouched('city')\">\r\n        <mat-error\r\n          *ngIf=\"!signUpForm.controls['city'].valid && signUpForm.controls['city'].errors.required && signUpForm.controls['city'].touched\">\r\n          City field can not be blank</mat-error>\r\n      </mat-form-field>\r\n\r\n \r\n      <mat-form-field>\r\n      <mat-label>State</mat-label>\r\n      <mat-select formControlName=\"state\">\r\n        <mat-option *ngFor=\"let state of state_usss\" [value]=\"state.abbreviation\">\r\n          {{state.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company name\" type=\"text\" formControlName=\"companyname\">\r\n      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Designation in company\" type=\"text\" formControlName=\"designation\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company website\" type=\"text\" formControlName=\"companywebsite\">\r\n      </mat-form-field>\r\n\r\n\r\n      <!-- added by sourav -->\r\n\r\n      <button mat-raised-button color=\"primary\">Sign Up</button>\r\n      <span class=\"signupfooter\">\r\n        <a (click)=\"forgetpassword()\">Forget Password</a>\r\n        <a (click)=\"login()\">Login</a>\r\n      </span>\r\n    </form>\r\n  </mat-card>\r\n</div></div>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{min-height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
SignUpComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: MatDialog },
    { type: ApiService },
    { type: CookieService }
];
SignUpComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    userType: [{ type: Input }],
    formTitle: [{ type: Input }],
    serverUrl: [{ type: Input }],
    logo: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    forgetRouteingUrl: [{ type: Input }],
    loginRouteingUrl: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SignUpComponent.prototype.message;
    /** @type {?} */
    SignUpComponent.prototype.animal;
    /** @type {?} */
    SignUpComponent.prototype.name;
    /** @type {?} */
    SignUpComponent.prototype.typevalue;
    /** @type {?} */
    SignUpComponent.prototype.state_usss;
    /** @type {?} */
    SignUpComponent.prototype.formDirective;
    /** @type {?} */
    SignUpComponent.prototype.formTitleValue;
    /** @type {?} */
    SignUpComponent.prototype.serverUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.forgetRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.loginRouteingUrlValue;
    /** @type {?} */
    SignUpComponent.prototype.addEndpointValue;
    /** @type {?} */
    SignUpComponent.prototype.logoValue;
    /** @type {?} */
    SignUpComponent.prototype.signUpForm;
    /** @type {?} */
    SignUpComponent.prototype.fb;
    /** @type {?} */
    SignUpComponent.prototype.http;
    /** @type {?} */
    SignUpComponent.prototype.router;
    /** @type {?} */
    SignUpComponent.prototype.dialog;
    /** @type {?} */
    SignUpComponent.prototype.apiService;
    /** @type {?} */
    SignUpComponent.prototype.cookieService;
}
export class commonModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
commonModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'commonModal',
                template: "<h1 mat-dialog-title>Thanks!</h1>\r\n<div mat-dialog-actions>\r\n  <p>Your account has been successfully created</p>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button  cdkFocusInitial>Ok</button> -->\r\n</div>"
            }] }
];
/** @nocollapse */
commonModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    commonModalComponent.prototype.dialogRef;
    /** @type {?} */
    commonModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUdDOzs7SUFGQyw0QkFBZTs7SUFDZiwwQkFBYTs7QUFPZixNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7O0lBa1QxQixZQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsTUFBaUIsRUFBUyxVQUFzQixFQUFTLGFBQTRCO1FBQTdKLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFqVHpLLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJbEIsZUFBVSxHQUFLO1lBQ3BC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SSxDQUFZO0lBQUksQ0FBQzs7OztJQUVyRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDJRQUE4QzthQUUvQzs7OztZQTVjeUIsWUFBWTs0Q0FpZG5DLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHJCLHlDQUFvRDs7SUFDdEQsb0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QsIFZpZXdDaGlsZCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBtYXRjaGluZ1Bhc3N3b3JkcyB9IGZyb20gJy4uL19oZWxwZXJzL211c3QtbWF0Y2gudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIGFuaW1hbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1zaWduLXVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbi11cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbi11cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xyXG4gIGFuaW1hbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdHlwZXZhbHVlOiBhbnk7XHJcbiAgcHVibGljIHN0YXRlX3Vzc3M6YW55PVtcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBbGFiYW1hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFsYXNrYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQUtcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBbWVyaWNhbiBTYW1vYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiQVNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJBcml6b25hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBWlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkFya2Fuc2FzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJBUlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkNhbGlmb3JuaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29sb3JhZG9cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNPXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29ubmVjdGljdXRcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkNUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGVsYXdhcmVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkRFXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGlzdHJpY3QgT2YgQ29sdW1iaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkRDXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJGTVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkZsb3JpZGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIkZMXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR2VvcmdpYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiR0FcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJHdWFtXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJHVVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkhhd2FpaVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSElcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJZGFob1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSURcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJbGxpbm9pc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiSUxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJJbmRpYW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJJTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIklvd2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIklBXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiS2Fuc2FzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJLU1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIktlbnR1Y2t5XCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJLWVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkxvdWlzaWFuYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTEFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYWluZVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTUVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNSFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1hcnlsYW5kXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNRFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1hc3NhY2h1c2V0dHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1BXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWljaGlnYW5cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1JXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTWlubmVzb3RhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pc3Npc3NpcHBpXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNU1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1pc3NvdXJpXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJNT1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk1vbnRhbmFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1UXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmVicmFza2FcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5FXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV2YWRhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOVlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBIYW1wc2hpcmVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk5IXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTmV3IEplcnNleVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkpcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOZXcgTWV4aWNvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOTVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5ldyBZb3JrXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOWVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5vcnRoIENhcm9saW5hXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJOQ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk5vcnRoIERha290YVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiTkRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk1QXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiT2hpb1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiT0hcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJPa2xhaG9tYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiT0tcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJPcmVnb25cIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIk9SXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFsYXVcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlBXXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGVubnN5bHZhbmlhXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJQQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJQUlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlJob2RlIElzbGFuZFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiUklcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBDYXJvbGluYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiU0NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJTb3V0aCBEYWtvdGFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlNEXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGVubmVzc2VlXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJUTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlRleGFzXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJUWFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlV0YWhcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIlVUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVybW9udFwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVlRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kc1wiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVklcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJWaXJnaW5pYVwiLFxyXG4gICAgICAgIFwiYWJicmV2aWF0aW9uXCI6IFwiVkFcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJXYXNoaW5ndG9uXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXQVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIldlc3QgVmlyZ2luaWFcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldWXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiV2lzY29uc2luXCIsXHJcbiAgICAgICAgXCJhYmJyZXZpYXRpb25cIjogXCJXSVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIld5b21pbmdcIixcclxuICAgICAgICBcImFiYnJldmlhdGlvblwiOiBcIldZXCJcclxuICAgIH1cclxuXTtcclxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG5cclxuICBwdWJsaWMgZm9ybVRpdGxlVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGZvcmdldFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBsb2dpblJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHVzZXJUeXBlKHR5cGV2YWw6IGFueSkge1xyXG4gICAgdGhpcy50eXBldmFsdWUgPSB0eXBldmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIEZvcm0gbmFtZVxyXG4gIHNldCBmb3JtVGl0bGUoZm9ybVRpdGxlVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuZm9ybVRpdGxlVmFsdWUgPSAoZm9ybVRpdGxlVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmZvcm1UaXRsZVZhbHVlID0gZm9ybVRpdGxlVmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtVGl0bGVWYWx1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmxWYWw6IGFueSkge1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IChzZXJ2ZXJVcmxWYWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSBzZXJ2ZXJVcmxWYWw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybFZhbHVlKTtcclxuXHJcbiAgfVxyXG5ASW5wdXQoKSAgICAgIC8vIHNldCB0aGUgZnJvbSBsb2dvXHJcblxyXG5zZXQgbG9nbyhsb2dvVmFsIDogYW55KSB7XHJcbiAgdGhpcy5sb2dvVmFsdWUgPSBsb2dvVmFsO1xyXG59XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0IHRoZSBlbmRwb2ludCBBbmQgc291cmNlXHJcbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XHJcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSlcclxuICB9XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBuYXZpZ2F0ZSBCeSBGb3JnZXQgUGFzc3dvcmQgVXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBmb3JnZXRSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZvcmdldFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAgIHRoaXMuZm9yZ2V0Um91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IGxvZ2luIFVybCBmcm9tIHByb2plY3RcclxuICBzZXQgbG9naW5Sb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmxvZ2luUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUgPSByb3V0ZWluZ1VybHZhbDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9naW5Sb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIHNpZ25VcEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcclxuICAgICAgIHRoaXMuc2lnblVwRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXHJcbiAgICAgIGZpcnN0bmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbGFzdG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29uZmlybXBhc3N3b3JkOltudWxsLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB6aXA6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNpdHk6W251bGwsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHN0YXRlOltudWxsLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb21wYW55bmFtZTpbbnVsbF0sXHJcbiAgICAgIGRlc2lnbmF0aW9uOltudWxsXSxcclxuICAgICAgY29tcGFueXdlYnNpdGU6W251bGxdLFxyXG4gICAgICBzdGF0dXM6MVxyXG4gICAgfSwge1xyXG4gICAgICAgIHZhbGlkYXRvcjogbWF0Y2hpbmdQYXNzd29yZHMoJ3Bhc3N3b3JkJywgJ2NvbmZpcm1wYXNzd29yZCcpXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAvLyB0aGlzLm9wZW5EaWFsb2coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vICBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgICAvLyAgc2V0IHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICAvLyB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVSTCk7XHJcblxyXG5cclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhcmFkZEVuZHBvaW50KCk7ICAgICAgIC8vICBDbGVhciB0aGUgZW5kcG9pbnRcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2V0YWRkRW5kcG9pbnQodGhpcy5hZGRFbmRwb2ludFZhbHVlLmVuZHBvaW50KTsgICAvLyAgc2V0IHRoZSBlbmRwb2ludFxyXG4gICAgLy8gfSwgNTApO1xyXG4gICBcclxuXHJcbiAgICBcclxubGV0IGVuZHBvaW50OiBhbnkgPSAnZ2V0dGVtcHRva2VuJztcclxudGhpcy5odHRwLmdldCggdGhpcy5zZXJ2ZXJVcmxWYWx1ZStlbmRwb2ludCkuc3Vic2NyaWJlKHJlcz0+e1xyXG4gIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG4gIHJlc3VsdCA9IHJlcztcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldCgnand0dG9rZW4nLCByZXN1bHQudG9rZW4pO1xyXG4gIH1cclxufSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgc2lnblVwRm9ybVN1Ym1pdCgpIHtcclxuICAgXHJcbiAgXHJcbiAgICAvLyB1c2UgZm9yIHZhbGlkYXRpb24gY2hlY2tpbmdcclxuICAgIGZvciAobGV0IHggaW4gdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuc2lnblVwRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaWduVXBGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpZ25VcEZvcm0udmFsdWUuY29uZmlybXBhc3N3b3JkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNpZ25VcEZvcm0udmFsdWUuY29uZmlybXBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGV0IGFsbERhdGE6IGFueSA9IHRoaXMuc2lnblVwRm9ybS52YWx1ZTtcclxuICAgICAgICAgICAgICBhbGxEYXRhLnR5cGUgPSB0aGlzLnR5cGV2YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxEYXRhKTtcclxuICAgICAgXHJcbiAgICAgIC8vIGxldCBsaW5rOiBhbnkgPSB0aGlzLmZ1bGxVcmxWYWx1ZTtcclxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAnZGF0YSc6IGFsbERhdGEsXHJcbiAgICAgICAgXCJzb3VyY2VcIjogdGhpcy5hZGRFbmRwb2ludFZhbHVlLnNvdXJjZSxcclxuICAgICAgICBcInRva2VuXCI6IHRoaXMuY29va2llU2VydmljZS5nZXQoJ2p3dHRva2VuJylcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNpZ251cChkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICBcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIH0sMzAwMCk7XHJcbiAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nICkgICAgIC8vIG5hdmlnYXRlIHRvIGRhc2hib2FyZCB1cmwgeVxyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHVzZSBmb3IgcmVzZXQgdGhlIGZyb21cclxuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIG9uIGh0bWxcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgXHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbW1vbk1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICBkYXRhOiB7bmFtZTogJ3RoaXMubmFtZScsIGFuaW1hbDogdGhpcy5hbmltYWx9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vKioqKioqKioqIFNpZ24gVXAgRm9ybSBTdWJtaXQgZW5kIGhlcmUqKioqKioqKiovIFxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBmb3JnZXRwYXNzd29yZCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5mb3JnZXRSb3V0ZWluZ1VybFZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBUaGlzIGlzIHVzZSBmb3IgbmF2aWdhdGUgdGhpcyBjb21wb25lbnQgdG8gZm9yZ2V0IGNvbXBvbmVudCBcclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nICsgdGhpcy5sb2dpblJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRVbnRvdWNoZWQodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2lnblVwRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbW1vbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4uL2NvbW1vbk1vZGFsL2NvbW1vbk1vZGFsLmh0bWwnLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIGNvbW1vbk1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Y29tbW9uTW9kYWxDb21wb25lbnQ+LFxyXG4gIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkgeyB9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=