/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} passwordKey
 * @param {?} confirmPasswordKey
 * @return {?}
 */
export function matchingPasswords(passwordKey, confirmPasswordKey) {
    return (/**
     * @param {?} group
     * @return {?}
     */
    (group) => {
        /** @type {?} */
        let password = group.controls[passwordKey];
        /** @type {?} */
        let confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9faGVscGVycy9tdXN0LW1hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxrQkFBMEI7SUFDN0U7Ozs7SUFBTyxDQUFDLEtBQVUsRUFFaEIsRUFBRTs7WUFDSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7O1lBQ3RDLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1FBRXhELElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzFDLE9BQU87Z0JBQ0gsbUJBQW1CLEVBQUUsSUFBSTthQUM1QixDQUFDO1NBQ0w7SUFDTCxDQUFDLEVBQUE7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGluZ1Bhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChncm91cDogYW55KToge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueVxyXG4gICAgfSA9PiB7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICAgIGxldCBjb25maXJtUGFzc3dvcmQgPSBncm91cC5jb250cm9sc1tjb25maXJtUGFzc3dvcmRLZXldO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWlzbWF0Y2hlZFBhc3N3b3JkczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==