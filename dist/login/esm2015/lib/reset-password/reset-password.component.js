/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
export class ResetPasswordComponent {
    /**
     * @param {?} fb
     * @param {?} http
     * @param {?} router
     * @param {?} route
     * @param {?} apiService
     * @param {?} cookieService
     */
    constructor(fb, http, router, route, apiService, cookieService) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.fromTitleNameValue = '';
        this.serverUrlValue = '';
        this.message = '';
        this.addEndpointValue = '';
        this.logoValue = '';
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            this.accesscode = params['token'];
            console.log(this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
    }
    // public signUpRouteingUrlValue: any = '';
    /**
     * @param {?} fromTitleNameVal
     * @return {?}
     */
    set fromTitleName(fromTitleNameVal) {
        this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
        this.fromTitleNameValue = fromTitleNameVal;
        console.log(this.fromTitleNameValue);
    }
    /**
     * @param {?} serverUrlVal
     * @return {?}
     */
    set serverUrl(serverUrlVal) {
        this.serverUrlValue = (serverUrlVal) || '<no name set>';
        this.serverUrlValue = serverUrlVal;
        console.log(this.serverUrlValue);
    }
    /**
     * @param {?} addEndpointVal
     * @return {?}
     */
    set addEndpoint(addEndpointVal) {
        this.addEndpointValue = addEndpointVal;
    }
    /**
     * @param {?} logoVal
     * @return {?}
     */
    set logo(logoVal) {
        this.logoValue = logoVal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setServerUrl(this.serverUrlValue); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiService.setaddEndpoint(this.addEndpointValue.endpoint); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    }
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    machpassword(passwordkye, confirmpasswordkye) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            /** @type {?} */
            let passwordInput = group.controls[passwordkye];
            /** @type {?} */
            let confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        });
    }
    /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    resetPasswordSubmit() {
        //console.log(this.resetPasswordForm.value);
        /** @type {?} */
        let x;
        for (x in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[x].markAsTouched();
        }
        if (this.resetPasswordForm.valid) {
            /** @type {?} */
            let data1 = { "password": this.resetPasswordForm.value.password, "id": this.cookieService.get('user_id') };
            /** @type {?} */
            let data = {
                'data': data1,
                "source": this.addEndpointValue.source
            }
            // data.accesscode = this.accesscode;
            ;
            // data.accesscode = this.accesscode;
            this.apiService.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                /** @type {?} */
                let result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    this.formDirective.resetForm(); // Use for reset the form
                }
                else {
                    this.message = result.msg;
                }
            }));
        }
    }
    /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    inputUntouched(val) {
        this.resetPasswordForm.controls[val].markAsUntouched();
    }
}
ResetPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-reset-password',
                template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\r\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\">Reset Password</button>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
            }] }
];
/** @nocollapse */
ResetPasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: HttpClient },
    { type: Router },
    { type: ActivatedRoute },
    { type: ApiService },
    { type: CookieService }
];
ResetPasswordComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    fromTitleName: [{ type: Input }],
    serverUrl: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    logo: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ResetPasswordComponent.prototype.formDirective;
    /** @type {?} */
    ResetPasswordComponent.prototype.resetPasswordForm;
    /** @type {?} */
    ResetPasswordComponent.prototype.fromTitleNameValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.serverUrlValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.message;
    /** @type {?} */
    ResetPasswordComponent.prototype.addEndpointValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.logoValue;
    /** @type {?} */
    ResetPasswordComponent.prototype.accesscode;
    /** @type {?} */
    ResetPasswordComponent.prototype.fb;
    /** @type {?} */
    ResetPasswordComponent.prototype.http;
    /** @type {?} */
    ResetPasswordComponent.prototype.router;
    /** @type {?} */
    ResetPasswordComponent.prototype.route;
    /** @type {?} */
    ResetPasswordComponent.prototype.apiService;
    /** @type {?} */
    ResetPasswordComponent.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTSxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBU2hELE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7OztJQW1EakMsWUFBbUIsRUFBZSxFQUFTLElBQWdCLEVBQVMsTUFBYyxFQUFTLEtBQXFCLEVBQVMsVUFBc0IsRUFBUSxhQUE0QjtRQUFoSyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9DNUssdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUE0Q3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFD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UUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsd2xFQUE4Qzs7YUFFL0M7Ozs7WUFUUSxXQUFXO1lBQ1gsVUFBVTtZQUNWLE1BQU07WUFBRSxjQUFjO1lBQ3RCLFVBQVU7WUFDWixhQUFhOzs7NEJBV2pCLFNBQVMsU0FBQyxrQkFBa0I7NEJBVzVCLEtBQUs7d0JBU0wsS0FBSzswQkFRTCxLQUFLO21CQU1MLEtBQUs7Ozs7SUFsQ04sK0NBQWlFOztJQUNqRSxtREFBb0M7O0lBQ3BDLG9EQUFvQzs7SUFDcEMsZ0RBQWdDOztJQUNoQyx5Q0FBeUI7O0lBQ3pCLGtEQUFrQzs7SUFFbEMsMkNBQTJCOztJQXdDM0IsNENBQTBCOztJQUVkLG9DQUFzQjs7SUFBRSxzQ0FBdUI7O0lBQUUsd0NBQXFCOztJQUFFLHVDQUE0Qjs7SUFBRSw0Q0FBNkI7O0lBQUMsK0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnR7Q29va2llU2VydmljZX0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItcmVzZXQtcGFzc3dvcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyAgIEZvcm1Hcm91cERpcmVjdGl2ZTogSXQgaXMgYSBkaXJlY3RpdmUgdGhhdCBiaW5kcyBhbiBleGlzdGluZyBGb3JtR3JvdXAgdG8gYSBET00gZWxlbWVudC5cclxuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xyXG4gIHB1YmxpYyByZXNldFBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBmcm9tVGl0bGVOYW1lVmFsdWU6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZXJ2ZXJVcmxWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIG1lc3NhZ2U6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBhZGRFbmRwb2ludFZhbHVlOiBhbnkgPSAnJztcclxuXHJcbiAgcHVibGljIGxvZ29WYWx1ZTogYW55ID0gJyc7XHJcbiAgLy8gcHVibGljIHNpZ25VcFJvdXRlaW5nVXJsVmFsdWU6IGFueSA9ICcnO1xyXG5cclxuXHJcbiAgQElucHV0KCkgICAgICAgICAvLyBTZXQgdGhlIEZvcm0gbmFtZVxyXG4gIHNldCBmcm9tVGl0bGVOYW1lKGZyb21UaXRsZU5hbWVWYWw6IGFueSkge1xyXG4gICAgdGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUgPSAoZnJvbVRpdGxlTmFtZVZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUgPSBmcm9tVGl0bGVOYW1lVmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5mcm9tVGl0bGVOYW1lVmFsdWUpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcclxuICBzZXQgc2VydmVyVXJsKHNlcnZlclVybFZhbDogYW55KSB7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gKHNlcnZlclVybFZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5zZXJ2ZXJVcmxWYWx1ZSA9IHNlcnZlclVybFZhbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsVmFsdWUpO1xyXG5cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50IGFuZCBzb3VyY2VcclxuXHJcbiAgcHVibGljIHNldCBhZGRFbmRwb2ludChhZGRFbmRwb2ludFZhbDogYW55KSB7XHJcbiAgICB0aGlzLmFkZEVuZHBvaW50VmFsdWUgPSBhZGRFbmRwb2ludFZhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpICAgICAgLy8gc2V0IHRoZSBmcm9tIGxvZ29cclxuXHJcbnNldCBsb2dvKGxvZ29WYWwgOiBhbnkpIHtcclxuICB0aGlzLmxvZ29WYWx1ZSA9IGxvZ29WYWw7XHJcbn1cclxuXHJcblxyXG4gIC8vIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIG5hdmlnYXRlIEJ5IFNpZ24gVXAgVXJsIGZyb20gcHJvamVjdFxyXG4gIC8vIHNldCBzaWduVXBSb3V0ZWluZ1VybChyb3V0ZWluZ1VybHZhbDogYW55KSB7XHJcbiAgLy8gICB0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUgPSAocm91dGVpbmdVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcclxuICAvLyAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IHJvdXRlaW5nVXJsdmFsO1xyXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlKTtcclxuICAvLyB9XHJcbiAgcHVibGljIGFjY2Vzc2NvZGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGZiOiBGb3JtQnVpbGRlciwgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UscHVibGljIGNvb2tpZVNlcnZpY2UgOkNvb2tpZVNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHJcbiAgICAgIHRoaXMuYWNjZXNzY29kZSA9IHBhcmFtc1sndG9rZW4nXTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5hY2Nlc3Njb2RlKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvLyBwYXNzd29yZDogWycnLCAgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIH0sIHtcclxuICAgICAgdmFsaWRhdG9yOiB0aGlzLm1hY2hwYXNzd29yZCgncGFzc3dvcmQnLCAnY29uZmlybVBhc3N3b3JkJylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5jbGVhclNlcnZlclVybCgpOyAgICAgICAvLyBDbGVhciB0aGUgc2VydmVyIHVybFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRTZXJ2ZXJVcmwodGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7ICAgICAgIC8vIHNldCB0aGUgc2VydmVyIHVybCBcclxuICAgIH0sIDUwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVVJMKTtcclxuXHJcblxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyYWRkRW5kcG9pbnQoKTsgICAgICAgLy8gY2xlYXIgdGhlIGVuZHBvaW50IFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZXRhZGRFbmRwb2ludCh0aGlzLmFkZEVuZHBvaW50VmFsdWUuZW5kcG9pbnQpOyAgICAgICAvLyBzZXQgdGhlIGVuZHBvaW50XHJcbiAgICB9LCA1MCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFkZEVuZHBvaW50RGF0YS5lbmRwb2ludCk7XHJcblxyXG4gIH1cclxuICAvLyAgdGhpcyBmdW5jdGlvbiBpcyB1c2UgZm9yIG1hY2ggcGFzc3dvcmQgYW5kIGNvbmZpcm0gUGFzc3dvcmQgXHJcblxyXG4gIG1hY2hwYXNzd29yZChwYXNzd29yZGt5ZTogc3RyaW5nLCBjb25maXJtcGFzc3dvcmRreWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChncm91cDogRm9ybUdyb3VwKSA9PiB7XHJcbiAgICAgIGxldCBwYXNzd29yZElucHV0ID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRreWVdLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzd29yZElucHV0ID0gZ3JvdXAuY29udHJvbHNbY29uZmlybXBhc3N3b3Jka3llXTtcclxuICAgICAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgIT09IGNvbmZpcm1wYXNzd29yZElucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1wYXNzd29yZElucHV0LnNldEVycm9ycyh7IG5vdEVxdWl2YWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1wYXNzd29yZElucHV0LnNldEVycm9ycyhudWxsKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuXHJcbi8qKioqKioqKiogUmVzZXQgUGFzc3dvcmQgRm9ybSBTdWJtaXQgc3RhcnQgaGVyZSoqKioqKioqKi8gXHJcbiAgcmVzZXRQYXNzd29yZFN1Ym1pdCgpIHtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWx1ZSk7XHJcbiAgICBsZXQgeDogYW55O1xyXG4gICAgZm9yICh4IGluIHRoaXMucmVzZXRQYXNzd29yZEZvcm0uY29udHJvbHMpIHtcclxuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNldFBhc3N3b3JkRm9ybS52YWxpZCkge1xyXG4gICAgICBsZXQgZGF0YTE6IGFueSA9IHsgXCJwYXNzd29yZFwiOiB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlLnBhc3N3b3JkLCBcImlkXCI6IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3VzZXJfaWQnKSB9XHJcbiAgICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgJ2RhdGEnOiBkYXRhMSxcclxuICAgICAgICBcInNvdXJjZVwiOiB0aGlzLmFkZEVuZHBvaW50VmFsdWUuc291cmNlXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBkYXRhLmFjY2Vzc2NvZGUgPSB0aGlzLmFjY2Vzc2NvZGU7XHJcblxyXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuYWRkRGF0YShkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlc2V0Rm9ybSgpOyAgICAgICAvLyBVc2UgZm9yIHJlc2V0IHRoZSBmb3JtXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdC5tc2c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBlbmQgaGVyZSoqKioqKioqKi8gXHJcblxyXG5cclxuICBpbnB1dFVudG91Y2hlZCh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19