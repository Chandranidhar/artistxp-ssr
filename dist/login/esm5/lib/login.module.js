/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent, commonModalComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApiService } from './api.service';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent, commonModalComponent],
                    imports: [
                        DemoMaterialModule,
                        FormsModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        HttpClientModule
                    ],
                    exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent],
                    providers: [ApiService],
                    bootstrap: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    entryComponents: [commonModalComponent]
                },] }
    ];
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFnQjJCLENBQUM7O2dCQWhCM0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7b0JBQ3RILE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLFdBQVc7d0JBQ1YsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixDQUFDO29CQUMzRixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQzBCLGtCQUFDO0NBQUEsQUFoQjVCLElBZ0I0QjtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50LCBjb21tb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudCwgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsIFJlc2V0UGFzc3dvcmRDb21wb25lbnQsIGNvbW1vbk1vZGFsQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgIENvbW1vbk1vZHVsZSxcclxuICAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTG9naW5Db21wb25lbnQsIFNpZ25VcENvbXBvbmVudCwgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsIFJlc2V0UGFzc3dvcmRDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW10sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW2NvbW1vbk1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XHJcbiJdfQ==