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
    function (group) {
        /** @type {?} */
        var password = group.controls[passwordKey];
        /** @type {?} */
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9faGVscGVycy9tdXN0LW1hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxrQkFBMEI7SUFDN0U7Ozs7SUFBTyxVQUFDLEtBQVU7O1lBR1YsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDOztZQUN0QyxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztRQUV4RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFBRTtZQUMxQyxPQUFPO2dCQUNILG1CQUFtQixFQUFFLElBQUk7YUFDNUIsQ0FBQztTQUNMO0lBQ0wsQ0FBQyxFQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hpbmdQYXNzd29yZHMocGFzc3dvcmRLZXk6IHN0cmluZywgY29uZmlybVBhc3N3b3JkS2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoZ3JvdXA6IGFueSk6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnlcclxuICAgIH0gPT4ge1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGdyb3VwLmNvbnRyb2xzW3Bhc3N3b3JkS2V5XTtcclxuICAgICAgICBsZXQgY29uZmlybVBhc3N3b3JkID0gZ3JvdXAuY29udHJvbHNbY29uZmlybVBhc3N3b3JkS2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc21hdGNoZWRQYXNzd29yZHM6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=