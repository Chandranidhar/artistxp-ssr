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
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, http, router, route, apiService, cookieService) {
        var _this = this;
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
        function (params) {
            _this.accesscode = params['token'];
            console.log(_this.accesscode);
        }));
        this.resetPasswordForm = this.fb.group({
            // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {
            validator: this.machpassword('password', 'confirmPassword')
        });
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "fromTitleName", {
        // public signUpRouteingUrlValue: any = '';
        set: 
        // public signUpRouteingUrlValue: any = '';
        /**
         * @param {?} fromTitleNameVal
         * @return {?}
         */
        function (fromTitleNameVal) {
            this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
            this.fromTitleNameValue = fromTitleNameVal;
            console.log(this.fromTitleNameValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "serverUrl", {
        set: /**
         * @param {?} serverUrlVal
         * @return {?}
         */
        function (serverUrlVal) {
            this.serverUrlValue = (serverUrlVal) || '<no name set>';
            this.serverUrlValue = serverUrlVal;
            console.log(this.serverUrlValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "addEndpoint", {
        set: /**
         * @param {?} addEndpointVal
         * @return {?}
         */
        function (addEndpointVal) {
            this.addEndpointValue = addEndpointVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "logo", {
        set: /**
         * @param {?} logoVal
         * @return {?}
         */
        function (logoVal) {
            this.logoValue = logoVal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResetPasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.apiService.clearServerUrl(); // Clear the server url
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setServerUrl(_this.serverUrlValue); // set the server url 
        }), 50);
        // console.log(this.serverURL);
        this.apiService.clearaddEndpoint(); // clear the endpoint 
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); // set the endpoint
        }), 50);
        // console.log(this.addEndpointData.endpoint);
    };
    //  this function is use for mach password and confirm Password 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    ResetPasswordComponent.prototype.machpassword = 
    //  this function is use for mach password and confirm Password 
    /**
     * @param {?} passwordkye
     * @param {?} confirmpasswordkye
     * @return {?}
     */
    function (passwordkye, confirmpasswordkye) {
        return (/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            /** @type {?} */
            var passwordInput = group.controls[passwordkye];
            /** @type {?} */
            var confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        });
    };
    /********* Reset Password Form Submit start here*********/
    /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    ResetPasswordComponent.prototype.resetPasswordSubmit = /**
     * ****** Reset Password Form Submit start here********
     * @return {?}
     */
    function () {
        var _this = this;
        //console.log(this.resetPasswordForm.value);
        /** @type {?} */
        var x;
        for (x in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[x].markAsTouched();
        }
        if (this.resetPasswordForm.valid) {
            /** @type {?} */
            var data1 = { "password": this.resetPasswordForm.value.password, "id": this.cookieService.get('user_id') };
            /** @type {?} */
            var data = {
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
            function (response) {
                /** @type {?} */
                var result = {};
                result = response;
                console.log(result);
                if (result.status == "success") {
                    _this.formDirective.resetForm(); // Use for reset the form
                }
                else {
                    _this.message = result.msg;
                }
            }));
        }
    };
    /********* Reset Password Form Submit end here*********/
    /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    ResetPasswordComponent.prototype.inputUntouched = /**
     * ****** Reset Password Form Submit end here********
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.resetPasswordForm.controls[val].markAsUntouched();
    };
    ResetPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-reset-password',
                    template: "<div class=\"main-div\">\r\n\r\n  <mat-card class=\"from\">\r\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\r\n          <img  [src]=\"logoValue\">\r\n      </span>\r\n\r\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\r\n\r\n\r\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\r\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\r\n          Password field can not be blank</mat-error>\r\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Confirm Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\r\n        <mat-error\r\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\r\n          Confirm Password field can not be blank</mat-error>\r\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\r\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\">Reset Password</button>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                    styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router },
        { type: ActivatedRoute },
        { type: ApiService },
        { type: CookieService }
    ]; };
    ResetPasswordComponent.propDecorators = {
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        fromTitleName: [{ type: Input }],
        serverUrl: [{ type: Input }],
        addEndpoint: [{ type: Input }],
        logo: [{ type: Input }]
    };
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTSxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2hEO0lBMkRFLGdDQUFtQixFQUFlLEVBQVMsSUFBZ0IsRUFBUyxNQUFjLEVBQVMsS0FBcUIsRUFBUyxVQUFzQixFQUFRLGFBQTRCO1FBQW5MLGlCQWVDO1FBZmtCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFRLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBL0M1Syx1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQTRDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFD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SUFBZCxVQUFlLEdBQVE7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkFqSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHdsRUFBOEM7O2lCQUUvQzs7OztnQkFUUSxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsTUFBTTtnQkFBRSxjQUFjO2dCQUN0QixVQUFVO2dCQUNaLGFBQWE7OztnQ0FXakIsU0FBUyxTQUFDLGtCQUFrQjtnQ0FXNUIsS0FBSzs0QkFTTCxLQUFLOzhCQVFMLEtBQUs7dUJBTUwsS0FBSzs7SUEwR1IsNkJBQUM7Q0FBQSxBQXRKRCxJQXNKQztTQTlJWSxzQkFBc0I7OztJQUVqQywrQ0FBaUU7O0lBQ2pFLG1EQUFvQzs7SUFDcEMsb0RBQW9DOztJQUNwQyxnREFBZ0M7O0lBQ2hDLHlDQUF5Qjs7SUFDekIsa0RBQWtDOztJQUVsQywyQ0FBMkI7O0lBd0MzQiw0Q0FBMEI7O0lBRWQsb0NBQXNCOztJQUFFLHNDQUF1Qjs7SUFBRSx3Q0FBcUI7O0lBQUUsdUNBQTRCOztJQUFFLDRDQUE2Qjs7SUFBQywrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XHJcbmltcG9ydHtDb29raWVTZXJ2aWNlfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1yZXNldC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vICAgRm9ybUdyb3VwRGlyZWN0aXZlOiBJdCBpcyBhIGRpcmVjdGl2ZSB0aGF0IGJpbmRzIGFuIGV4aXN0aW5nIEZvcm1Hcm91cCB0byBhIERPTSBlbGVtZW50LlxyXG4gIEBWaWV3Q2hpbGQoRm9ybUdyb3VwRGlyZWN0aXZlKSBmb3JtRGlyZWN0aXZlOiBGb3JtR3JvdXBEaXJlY3RpdmU7XHJcbiAgcHVibGljIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIGZyb21UaXRsZU5hbWVWYWx1ZTogYW55ID0gJyc7XHJcbiAgcHVibGljIHNlcnZlclVybFZhbHVlOiBhbnkgPSAnJztcclxuICBwdWJsaWMgbWVzc2FnZTogYW55ID0gJyc7XHJcbiAgcHVibGljIGFkZEVuZHBvaW50VmFsdWU6IGFueSA9ICcnO1xyXG5cclxuICBwdWJsaWMgbG9nb1ZhbHVlOiBhbnkgPSAnJztcclxuICAvLyBwdWJsaWMgc2lnblVwUm91dGVpbmdVcmxWYWx1ZTogYW55ID0gJyc7XHJcblxyXG5cclxuICBASW5wdXQoKSAgICAgICAgIC8vIFNldCB0aGUgRm9ybSBuYW1lXHJcbiAgc2V0IGZyb21UaXRsZU5hbWUoZnJvbVRpdGxlTmFtZVZhbDogYW55KSB7XHJcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IChmcm9tVGl0bGVOYW1lVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSA9IGZyb21UaXRsZU5hbWVWYWw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZyb21UaXRsZU5hbWVWYWx1ZSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAvLyBzZXR0aW5nIHRoZSBzZXJ2ZXIgdXJsIGZyb20gcHJvamVjdFxyXG4gIHNldCBzZXJ2ZXJVcmwoc2VydmVyVXJsVmFsOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmVyVXJsVmFsdWUgPSAoc2VydmVyVXJsVmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XHJcbiAgICB0aGlzLnNlcnZlclVybFZhbHVlID0gc2VydmVyVXJsVmFsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmxWYWx1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnQgYW5kIHNvdXJjZVxyXG5cclxuICBwdWJsaWMgc2V0IGFkZEVuZHBvaW50KGFkZEVuZHBvaW50VmFsOiBhbnkpIHtcclxuICAgIHRoaXMuYWRkRW5kcG9pbnRWYWx1ZSA9IGFkZEVuZHBvaW50VmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgICAgICAvLyBzZXQgdGhlIGZyb20gbG9nb1xyXG5cclxuc2V0IGxvZ28obG9nb1ZhbCA6IGFueSkge1xyXG4gIHRoaXMubG9nb1ZhbHVlID0gbG9nb1ZhbDtcclxufVxyXG5cclxuXHJcbiAgLy8gQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmF2aWdhdGUgQnkgU2lnbiBVcCBVcmwgZnJvbSBwcm9qZWN0XHJcbiAgLy8gc2V0IHNpZ25VcFJvdXRlaW5nVXJsKHJvdXRlaW5nVXJsdmFsOiBhbnkpIHtcclxuICAvLyAgIHRoaXMuc2lnblVwUm91dGVpbmdVcmxWYWx1ZSA9IChyb3V0ZWluZ1VybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gIC8vICAgdGhpcy5zaWduVXBSb3V0ZWluZ1VybFZhbHVlID0gcm91dGVpbmdVcmx2YWw7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNpZ25VcFJvdXRlaW5nVXJsVmFsdWUpO1xyXG4gIC8vIH1cclxuICBwdWJsaWMgYWNjZXNzY29kZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxwdWJsaWMgY29va2llU2VydmljZSA6Q29va2llU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cclxuICAgICAgdGhpcy5hY2Nlc3Njb2RlID0gcGFyYW1zWyd0b2tlbiddO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFjY2Vzc2NvZGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIC8vIHBhc3N3b3JkOiBbJycsICBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSldLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29uZmlybVBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgfSwge1xyXG4gICAgICB2YWxpZGF0b3I6IHRoaXMubWFjaHBhc3N3b3JkKCdwYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7ICAgICAgIC8vIENsZWFyIHRoZSBzZXJ2ZXIgdXJsXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldFNlcnZlclVybCh0aGlzLnNlcnZlclVybFZhbHVlKTsgICAgICAgLy8gc2V0IHRoZSBzZXJ2ZXIgdXJsIFxyXG4gICAgfSwgNTApO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVUkwpO1xyXG5cclxuXHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpOyAgICAgICAvLyBjbGVhciB0aGUgZW5kcG9pbnQgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5lbmRwb2ludCk7ICAgICAgIC8vIHNldCB0aGUgZW5kcG9pbnRcclxuICAgIH0sIDUwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkRW5kcG9pbnREYXRhLmVuZHBvaW50KTtcclxuXHJcbiAgfVxyXG4gIC8vICB0aGlzIGZ1bmN0aW9uIGlzIHVzZSBmb3IgbWFjaCBwYXNzd29yZCBhbmQgY29uZmlybSBQYXNzd29yZCBcclxuXHJcbiAgbWFjaHBhc3N3b3JkKHBhc3N3b3Jka3llOiBzdHJpbmcsIGNvbmZpcm1wYXNzd29yZGt5ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGdyb3VwOiBGb3JtR3JvdXApID0+IHtcclxuICAgICAgbGV0IHBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1twYXNzd29yZGt5ZV0sXHJcbiAgICAgICAgY29uZmlybXBhc3N3b3JkSW5wdXQgPSBncm91cC5jb250cm9sc1tjb25maXJtcGFzc3dvcmRreWVdO1xyXG4gICAgICBpZiAocGFzc3dvcmRJbnB1dC52YWx1ZSAhPT0gY29uZmlybXBhc3N3b3JkSW5wdXQudmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybXBhc3N3b3JkSW5wdXQuc2V0RXJyb3JzKHsgbm90RXF1aXZhbGVudDogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybXBhc3N3b3JkSW5wdXQuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG5cclxuLyoqKioqKioqKiBSZXNldCBQYXNzd29yZCBGb3JtIFN1Ym1pdCBzdGFydCBoZXJlKioqKioqKioqLyBcclxuICByZXNldFBhc3N3b3JkU3VibWl0KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbHVlKTtcclxuICAgIGxldCB4OiBhbnk7XHJcbiAgICBmb3IgKHggaW4gdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9scykge1xyXG4gICAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGxldCBkYXRhMTogYW55ID0geyBcInBhc3N3b3JkXCI6IHRoaXMucmVzZXRQYXNzd29yZEZvcm0udmFsdWUucGFzc3dvcmQsIFwiaWRcIjogdGhpcy5jb29raWVTZXJ2aWNlLmdldCgndXNlcl9pZCcpIH1cclxuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcclxuICAgICAgICAnZGF0YSc6IGRhdGExLFxyXG4gICAgICAgIFwic291cmNlXCI6IHRoaXMuYWRkRW5kcG9pbnRWYWx1ZS5zb3VyY2VcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIGRhdGEuYWNjZXNzY29kZSA9IHRoaXMuYWNjZXNzY29kZTtcclxuXHJcbiAgICAgIHRoaXMuYXBpU2VydmljZS5hZGREYXRhKGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcclxuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7ICAgICAgIC8vIFVzZSBmb3IgcmVzZXQgdGhlIGZvcm1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0Lm1zZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4vKioqKioqKioqIFJlc2V0IFBhc3N3b3JkIEZvcm0gU3VibWl0IGVuZCBoZXJlKioqKioqKioqLyBcclxuXHJcblxyXG4gIGlucHV0VW50b3VjaGVkKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=