webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__ = __webpack_require__("../../../../../src/app/shared/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__ = __webpack_require__("../../../../../src/app/superadmin/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontend_frontend_component__ = __webpack_require__("../../../../../src/app/frontend/frontend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__superadmin_superadmin_component__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__superadmin_adminpanel_adminpanel_component__ = __webpack_require__("../../../../../src/app/superadmin/adminpanel/adminpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__superadmin_addstore_addstore_component__ = __webpack_require__("../../../../../src/app/superadmin/addstore/addstore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__superadmin_lisstore_lisstore_component__ = __webpack_require__("../../../../../src/app/superadmin/lisstore/lisstore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__superadmin_spnotification_spnotification_component__ = __webpack_require__("../../../../../src/app/superadmin/spnotification/spnotification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__superadmin_storeaccessrequests_storeaccessrequests_component__ = __webpack_require__("../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superadmin_cats_cats_component__ = __webpack_require__("../../../../../src/app/superadmin/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__superadmin_addproduct_addproduct_component__ = __webpack_require__("../../../../../src/app/superadmin/addproduct/addproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__superadmin_listproduct_listproduct_component__ = __webpack_require__("../../../../../src/app/superadmin/listproduct/listproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__superadmin_addapdms_addapdms_component__ = __webpack_require__("../../../../../src/app/superadmin/addapdms/addapdms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__portal_pdashboard_pdashboard_component__ = __webpack_require__("../../../../../src/app/portal/pdashboard/pdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__portal_pcart_pcart_component__ = __webpack_require__("../../../../../src/app/portal/pcart/pcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__frontend_products_products_component__ = __webpack_require__("../../../../../src/app/frontend/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__frontend_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/frontend/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__frontend_cart_cart_component__ = __webpack_require__("../../../../../src/app/frontend/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__superadmin_listapdm_listapdm_component__ = __webpack_require__("../../../../../src/app/superadmin/listapdm/listapdm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__customer_customer_orders_customer_orders_component__ = __webpack_require__("../../../../../src/app/customer/customer-orders/customer-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__customer_customer_orderdetails_customer_orderdetails_component__ = __webpack_require__("../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__customer_customer_account_customer_account_component__ = __webpack_require__("../../../../../src/app/customer/customer-account/customer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__portal_porders_porders_component__ = __webpack_require__("../../../../../src/app/portal/porders/porders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__portal_mystores_mystores_component__ = __webpack_require__("../../../../../src/app/portal/mystores/mystores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__customer_customer_profile_customer_profile_component__ = __webpack_require__("../../../../../src/app/customer/customer-profile/customer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__superadmin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/superadmin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__superadmin_list_admins_list_admins_component__ = __webpack_require__("../../../../../src/app/superadmin/list-admins/list-admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__portal_portal_list_apdms_portal_list_apdms_component__ = __webpack_require__("../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__portal_porder_details_porder_details_component__ = __webpack_require__("../../../../../src/app/portal/porder-details/porder-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__superadmin_sporders_sporders_component__ = __webpack_require__("../../../../../src/app/superadmin/sporders/sporders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__superadmin_sporder_details_sporder_details_component__ = __webpack_require__("../../../../../src/app/superadmin/sporder-details/sporder-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__portal_paccount_settings_paccount_settings_component__ = __webpack_require__("../../../../../src/app/portal/paccount-settings/paccount-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__superadmin_spsettings_spsettings_component__ = __webpack_require__("../../../../../src/app/superadmin/spsettings/spsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__superadmin_reports_reports_component__ = __webpack_require__("../../../../../src/app/superadmin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__portal_preports_preports_component__ = __webpack_require__("../../../../../src/app/portal/preports/preports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__reset_account_password_reset_account_password_component__ = __webpack_require__("../../../../../src/app/reset-account-password/reset-account-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__log_status_log_status_component__ = __webpack_require__("../../../../../src/app/log-status/log-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__superadmin_faq_update_faq_update_component__ = __webpack_require__("../../../../../src/app/superadmin/faq-update/faq-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ins_sheets_ins_sheets_component__ = __webpack_require__("../../../../../src/app/ins-sheets/ins-sheets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__superadmin_admin_ins_sheets_admin_ins_sheets_component__ = __webpack_require__("../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__superadmin_region_list_region_list_region_component__ = __webpack_require__("../../../../../src/app/superadmin/region/list-region/list-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__superadmin_region_add_region_add_region_component__ = __webpack_require__("../../../../../src/app/superadmin/region/add-region/add-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__superadmin_export_reports_export_reports_component__ = __webpack_require__("../../../../../src/app/superadmin/export-reports/export-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__portal_pexport_report_pexport_report_component__ = __webpack_require__("../../../../../src/app/portal/pexport-report/pexport-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__frontend_frontend_component__["a" /* FrontendComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_18__frontend_products_products_component__["a" /* ProductsComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_39__test_test_component__["a" /* TestComponent */] },
    { path: 'product-details/:ProductId/:page', component: __WEBPACK_IMPORTED_MODULE_19__frontend_product_details_product_details_component__["a" /* ProductDetailsComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_43__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'instruction-sheets', component: __WEBPACK_IMPORTED_MODULE_45__ins_sheets_ins_sheets_component__["a" /* InsSheetsComponent */] },
    { path: 'customer-login', component: __WEBPACK_IMPORTED_MODULE_22__customer_customer_component__["a" /* CustomerComponent */] },
    { path: 'profile/orders', component: __WEBPACK_IMPORTED_MODULE_23__customer_customer_orders_customer_orders_component__["a" /* CustomerOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'profile/order-details/:orderid', component: __WEBPACK_IMPORTED_MODULE_24__customer_customer_orderdetails_customer_orderdetails_component__["a" /* CustomerOrderdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'profile/order-details/:orderid', component: __WEBPACK_IMPORTED_MODULE_24__customer_customer_orderdetails_customer_orderdetails_component__["a" /* CustomerOrderdetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'profile/cart', component: __WEBPACK_IMPORTED_MODULE_20__frontend_cart_cart_component__["a" /* CartComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_28__customer_customer_profile_customer_profile_component__["a" /* CustomerProfileComponent */] },
    { path: 'profile/settings', component: __WEBPACK_IMPORTED_MODULE_25__customer_customer_account_customer_account_component__["a" /* CustomerAccountComponent */] },
    { path: 'superadmin', component: __WEBPACK_IMPORTED_MODULE_6__superadmin_superadmin_component__["a" /* SuperadminComponent */] },
    { path: 'admin-panel', component: __WEBPACK_IMPORTED_MODULE_7__superadmin_adminpanel_adminpanel_component__["a" /* AdminpanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/add-store', component: __WEBPACK_IMPORTED_MODULE_8__superadmin_addstore_addstore_component__["a" /* AddstoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/export-reports', component: __WEBPACK_IMPORTED_MODULE_49__superadmin_export_reports_export_reports_component__["a" /* ExportReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-stores', component: __WEBPACK_IMPORTED_MODULE_9__superadmin_lisstore_lisstore_component__["a" /* LisstoreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-regions', component: __WEBPACK_IMPORTED_MODULE_47__superadmin_region_list_region_list_region_component__["a" /* ListRegionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/add-region', component: __WEBPACK_IMPORTED_MODULE_48__superadmin_region_add_region_add_region_component__["a" /* AddRegionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-notifications', component: __WEBPACK_IMPORTED_MODULE_10__superadmin_spnotification_spnotification_component__["a" /* SpnotificationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/new-stores-access-requests', component: __WEBPACK_IMPORTED_MODULE_11__superadmin_storeaccessrequests_storeaccessrequests_component__["a" /* StoreaccessrequestsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/categories', component: __WEBPACK_IMPORTED_MODULE_12__superadmin_cats_cats_component__["a" /* CatsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/add-product', component: __WEBPACK_IMPORTED_MODULE_13__superadmin_addproduct_addproduct_component__["a" /* AddproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-products', component: __WEBPACK_IMPORTED_MODULE_14__superadmin_listproduct_listproduct_component__["a" /* ListproductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/add-apls', component: __WEBPACK_IMPORTED_MODULE_15__superadmin_addapdms_addapdms_component__["a" /* AddapdmsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-apls', component: __WEBPACK_IMPORTED_MODULE_21__superadmin_listapdm_listapdm_component__["a" /* ListapdmComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-apls/:readonly', component: __WEBPACK_IMPORTED_MODULE_21__superadmin_listapdm_listapdm_component__["a" /* ListapdmComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/add-admin', component: __WEBPACK_IMPORTED_MODULE_29__superadmin_add_admin_add_admin_component__["a" /* AddAdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-admin', component: __WEBPACK_IMPORTED_MODULE_30__superadmin_list_admins_list_admins_component__["a" /* ListAdminsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/list-orders/:type', component: __WEBPACK_IMPORTED_MODULE_33__superadmin_sporders_sporders_component__["a" /* SpordersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/order-details/:orderid', component: __WEBPACK_IMPORTED_MODULE_34__superadmin_sporder_details_sporder_details_component__["a" /* SporderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/settings', component: __WEBPACK_IMPORTED_MODULE_36__superadmin_spsettings_spsettings_component__["a" /* SpsettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/reports/:type', component: __WEBPACK_IMPORTED_MODULE_37__superadmin_reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/log-status', component: __WEBPACK_IMPORTED_MODULE_42__log_status_log_status_component__["a" /* LogStatusComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/faq-update', component: __WEBPACK_IMPORTED_MODULE_44__superadmin_faq_update_faq_update_component__["a" /* FaqUpdateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'admin-panel/ins-sheets', component: __WEBPACK_IMPORTED_MODULE_46__superadmin_admin_ins_sheets_admin_ins_sheets_component__["a" /* AdminInsSheetsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]] },
    { path: 'portal', component: __WEBPACK_IMPORTED_MODULE_5__portal_portal_component__["a" /* PortalComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_40__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'reset-account-password/:token', component: __WEBPACK_IMPORTED_MODULE_41__reset_account_password_reset_account_password_component__["a" /* ResetAccountPasswordComponent */] },
    { path: 'dashboard/reports/:type', component: __WEBPACK_IMPORTED_MODULE_38__portal_preports_preports_component__["a" /* PreportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/export-reports', component: __WEBPACK_IMPORTED_MODULE_50__portal_pexport_report_pexport_report_component__["a" /* PexportReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__portal_pdashboard_pdashboard_component__["a" /* PdashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/orders/:type', component: __WEBPACK_IMPORTED_MODULE_26__portal_porders_porders_component__["a" /* PordersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/order-details/:orderid', component: __WEBPACK_IMPORTED_MODULE_32__portal_porder_details_porder_details_component__["a" /* PorderDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/my-stores', component: __WEBPACK_IMPORTED_MODULE_27__portal_mystores_mystores_component__["a" /* MystoresComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/list-apls', component: __WEBPACK_IMPORTED_MODULE_31__portal_portal_list_apdms_portal_list_apdms_component__["a" /* PortalListApdmsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard/cart', component: __WEBPACK_IMPORTED_MODULE_20__frontend_cart_cart_component__["a" /* CartComponent */] },
    { path: 'dashboard/account-settings', component: __WEBPACK_IMPORTED_MODULE_35__portal_paccount_settings_paccount_settings_component__["a" /* PaccountSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_17__portal_pcart_pcart_component__["a" /* PcartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authGuard_service__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_loaders_css__ = __webpack_require__("../../../../angular2-loaders-css/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_loaders_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_loaders_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_authGuard_service__ = __webpack_require__("../../../../../src/app/shared/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__superadmin_authGuard_service__ = __webpack_require__("../../../../../src/app/superadmin/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__frontend_frontend_component__ = __webpack_require__("../../../../../src/app/frontend/frontend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__frontend_header_header_component__ = __webpack_require__("../../../../../src/app/frontend/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__superadmin_superadmin_component__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__superadmin_adminpanel_adminpanel_component__ = __webpack_require__("../../../../../src/app/superadmin/adminpanel/adminpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__superadmin_spheader_spheader_component__ = __webpack_require__("../../../../../src/app/superadmin/spheader/spheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__superadmin_spsidebar_spsidebar_component__ = __webpack_require__("../../../../../src/app/superadmin/spsidebar/spsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__superadmin_addstore_addstore_component__ = __webpack_require__("../../../../../src/app/superadmin/addstore/addstore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__superadmin_lisstore_lisstore_component__ = __webpack_require__("../../../../../src/app/superadmin/lisstore/lisstore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__superadmin_storeaccessrequests_storeaccessrequests_component__ = __webpack_require__("../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__superadmin_update_stor_update_stor_component__ = __webpack_require__("../../../../../src/app/superadmin/update-stor/update-stor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__superadmin_cats_cats_component__ = __webpack_require__("../../../../../src/app/superadmin/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__superadmin_addproduct_addproduct_component__ = __webpack_require__("../../../../../src/app/superadmin/addproduct/addproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__superadmin_listproduct_listproduct_component__ = __webpack_require__("../../../../../src/app/superadmin/listproduct/listproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__superadmin_addapdms_addapdms_component__ = __webpack_require__("../../../../../src/app/superadmin/addapdms/addapdms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__portal_pheader_pheader_component__ = __webpack_require__("../../../../../src/app/portal/pheader/pheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__portal_psidebar_psidebar_component__ = __webpack_require__("../../../../../src/app/portal/psidebar/psidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__portal_pproducts_pproducts_component__ = __webpack_require__("../../../../../src/app/portal/pproducts/pproducts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__portal_pdashboard_pdashboard_component__ = __webpack_require__("../../../../../src/app/portal/pdashboard/pdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__portal_pcart_pcart_component__ = __webpack_require__("../../../../../src/app/portal/pcart/pcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__portal_pproductdetails_pproductdetails_component__ = __webpack_require__("../../../../../src/app/portal/pproductdetails/pproductdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__superadmin_catedit_catedit_component__ = __webpack_require__("../../../../../src/app/superadmin/catedit/catedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__superadmin_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/superadmin/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__frontend_products_products_component__ = __webpack_require__("../../../../../src/app/frontend/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__frontend_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/frontend/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__frontend_cart_cart_component__ = __webpack_require__("../../../../../src/app/frontend/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__superadmin_listapdm_listapdm_component__ = __webpack_require__("../../../../../src/app/superadmin/listapdm/listapdm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__superadmin_apdm_edit_apdm_edit_component__ = __webpack_require__("../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__superadmin_asign_apdm_asign_apdm_component__ = __webpack_require__("../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__portal_mystores_mystores_component__ = __webpack_require__("../../../../../src/app/portal/mystores/mystores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__portal_porders_porders_component__ = __webpack_require__("../../../../../src/app/portal/porders/porders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__customer_customer_orders_customer_orders_component__ = __webpack_require__("../../../../../src/app/customer/customer-orders/customer-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__customer_customer_orderdetails_customer_orderdetails_component__ = __webpack_require__("../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__customer_customer_profile_customer_profile_component__ = __webpack_require__("../../../../../src/app/customer/customer-profile/customer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__customer_customer_account_customer_account_component__ = __webpack_require__("../../../../../src/app/customer/customer-account/customer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__superadmin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/superadmin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__superadmin_list_admins_list_admins_component__ = __webpack_require__("../../../../../src/app/superadmin/list-admins/list-admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__superadmin_update_admin_update_admin_component__ = __webpack_require__("../../../../../src/app/superadmin/update-admin/update-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__portal_portal_list_apdms_portal_list_apdms_component__ = __webpack_require__("../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__portal_porder_details_porder_details_component__ = __webpack_require__("../../../../../src/app/portal/porder-details/porder-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__superadmin_sporders_sporders_component__ = __webpack_require__("../../../../../src/app/superadmin/sporders/sporders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__superadmin_sporder_details_sporder_details_component__ = __webpack_require__("../../../../../src/app/superadmin/sporder-details/sporder-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_57_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__portal_paccount_settings_paccount_settings_component__ = __webpack_require__("../../../../../src/app/portal/paccount-settings/paccount-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__superadmin_spsettings_spsettings_component__ = __webpack_require__("../../../../../src/app/superadmin/spsettings/spsettings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__superadmin_add_store_form_add_store_form_component__ = __webpack_require__("../../../../../src/app/superadmin/add-store-form/add-store-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__superadmin_asign_ex_apls_asign_ex_apls_component__ = __webpack_require__("../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__superadmin_spdashboard_spdashboard_component__ = __webpack_require__("../../../../../src/app/superadmin/spdashboard/spdashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__superadmin_reports_reports_component__ = __webpack_require__("../../../../../src/app/superadmin/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__portal_preports_preports_component__ = __webpack_require__("../../../../../src/app/portal/preports/preports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__reset_account_password_reset_account_password_component__ = __webpack_require__("../../../../../src/app/reset-account-password/reset-account-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__log_status_log_status_component__ = __webpack_require__("../../../../../src/app/log-status/log-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__superadmin_faq_update_faq_update_component__ = __webpack_require__("../../../../../src/app/superadmin/faq-update/faq-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73_ngx_img_zoom__ = __webpack_require__("../../../../ngx-img-zoom/fesm5/ngx-img-zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__portal_notification_notification_component__ = __webpack_require__("../../../../../src/app/portal/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__side_links_side_links_component__ = __webpack_require__("../../../../../src/app/side-links/side-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ins_sheets_ins_sheets_component__ = __webpack_require__("../../../../../src/app/ins-sheets/ins-sheets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__superadmin_admin_ins_sheets_admin_ins_sheets_component__ = __webpack_require__("../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__superadmin_spnotification_spnotification_component__ = __webpack_require__("../../../../../src/app/superadmin/spnotification/spnotification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__superadmin_region_list_region_list_region_component__ = __webpack_require__("../../../../../src/app/superadmin/region/list-region/list-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__superadmin_region_add_region_add_region_component__ = __webpack_require__("../../../../../src/app/superadmin/region/add-region/add-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__superadmin_region_edit_region_edit_region_component__ = __webpack_require__("../../../../../src/app/superadmin/region/edit-region/edit-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__superadmin_asign_region_asign_region_component__ = __webpack_require__("../../../../../src/app/superadmin/asign-region/asign-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__superadmin_asign_ex_region_asign_ex_region_component__ = __webpack_require__("../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__superadmin_region_asign_store_asign_store_component__ = __webpack_require__("../../../../../src/app/superadmin/region/asign-store/asign-store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__superadmin_export_reports_export_reports_component__ = __webpack_require__("../../../../../src/app/superadmin/export-reports/export-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__portal_pexport_report_pexport_report_component__ = __webpack_require__("../../../../../src/app/portal/pexport-report/pexport-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































































// import { Ng2CompleterModule } from "ng2-completer";
// import { NgxImageZoomModule } from 'ngx-image-zoom';
// import {ImageZoomModule} from 'angular2-image-zoom';














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_70__log_status_log_status_component__["a" /* LogStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__frontend_frontend_component__["a" /* FrontendComponent */],
                __WEBPACK_IMPORTED_MODULE_15__frontend_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__portal_portal_component__["a" /* PortalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__superadmin_superadmin_component__["a" /* SuperadminComponent */],
                __WEBPACK_IMPORTED_MODULE_18__superadmin_adminpanel_adminpanel_component__["a" /* AdminpanelComponent */],
                __WEBPACK_IMPORTED_MODULE_19__superadmin_spheader_spheader_component__["a" /* SpheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__superadmin_spsidebar_spsidebar_component__["a" /* SpsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__superadmin_addstore_addstore_component__["a" /* AddstoreComponent */],
                __WEBPACK_IMPORTED_MODULE_22__superadmin_lisstore_lisstore_component__["a" /* LisstoreComponent */],
                __WEBPACK_IMPORTED_MODULE_23__superadmin_storeaccessrequests_storeaccessrequests_component__["a" /* StoreaccessrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__superadmin_update_stor_update_stor_component__["a" /* UpdateStorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__superadmin_cats_cats_component__["a" /* CatsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__superadmin_addproduct_addproduct_component__["a" /* AddproductComponent */],
                __WEBPACK_IMPORTED_MODULE_27__superadmin_listproduct_listproduct_component__["a" /* ListproductComponent */],
                __WEBPACK_IMPORTED_MODULE_28__superadmin_addapdms_addapdms_component__["a" /* AddapdmsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__portal_pheader_pheader_component__["a" /* PheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__portal_psidebar_psidebar_component__["a" /* PsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_31__portal_pproducts_pproducts_component__["a" /* PproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__portal_pdashboard_pdashboard_component__["a" /* PdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_33__portal_pcart_pcart_component__["a" /* PcartComponent */],
                __WEBPACK_IMPORTED_MODULE_34__portal_pproductdetails_pproductdetails_component__["a" /* PproductdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__superadmin_catedit_catedit_component__["a" /* CateditComponent */],
                __WEBPACK_IMPORTED_MODULE_36__superadmin_product_edit_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_37__frontend_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__frontend_product_details_product_details_component__["a" /* ProductDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__frontend_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_40__superadmin_listapdm_listapdm_component__["a" /* ListapdmComponent */],
                __WEBPACK_IMPORTED_MODULE_41__superadmin_apdm_edit_apdm_edit_component__["a" /* ApdmEditComponent */],
                __WEBPACK_IMPORTED_MODULE_42__superadmin_asign_apdm_asign_apdm_component__["a" /* AsignApdmComponent */],
                __WEBPACK_IMPORTED_MODULE_43__customer_customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_44__portal_mystores_mystores_component__["a" /* MystoresComponent */],
                __WEBPACK_IMPORTED_MODULE_45__portal_porders_porders_component__["a" /* PordersComponent */],
                __WEBPACK_IMPORTED_MODULE_46__customer_customer_orders_customer_orders_component__["a" /* CustomerOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_47__customer_customer_orderdetails_customer_orderdetails_component__["a" /* CustomerOrderdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_48__customer_customer_profile_customer_profile_component__["a" /* CustomerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_50__superadmin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_51__superadmin_list_admins_list_admins_component__["a" /* ListAdminsComponent */],
                __WEBPACK_IMPORTED_MODULE_52__superadmin_update_admin_update_admin_component__["a" /* UpdateAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_53__portal_portal_list_apdms_portal_list_apdms_component__["a" /* PortalListApdmsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__portal_porder_details_porder_details_component__["a" /* PorderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_55__superadmin_sporders_sporders_component__["a" /* SpordersComponent */],
                __WEBPACK_IMPORTED_MODULE_56__superadmin_sporder_details_sporder_details_component__["a" /* SporderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__customer_customer_account_customer_account_component__["a" /* CustomerAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_58__portal_paccount_settings_paccount_settings_component__["a" /* PaccountSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_59__superadmin_spsettings_spsettings_component__["a" /* SpsettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_60__superadmin_add_store_form_add_store_form_component__["a" /* AddStoreFormComponent */],
                __WEBPACK_IMPORTED_MODULE_61__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_62__superadmin_asign_ex_apls_asign_ex_apls_component__["a" /* AsignExAplsComponent */],
                __WEBPACK_IMPORTED_MODULE_63__superadmin_spdashboard_spdashboard_component__["a" /* SpdashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_65__superadmin_reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_66__portal_preports_preports_component__["a" /* PreportsComponent */],
                __WEBPACK_IMPORTED_MODULE_67__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_68__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_69__reset_account_password_reset_account_password_component__["a" /* ResetAccountPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_71__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_72__superadmin_faq_update_faq_update_component__["a" /* FaqUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_74__portal_notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_75__side_links_side_links_component__["a" /* SideLinksComponent */],
                __WEBPACK_IMPORTED_MODULE_76__ins_sheets_ins_sheets_component__["a" /* InsSheetsComponent */],
                __WEBPACK_IMPORTED_MODULE_77__superadmin_admin_ins_sheets_admin_ins_sheets_component__["a" /* AdminInsSheetsComponent */],
                __WEBPACK_IMPORTED_MODULE_78__superadmin_spnotification_spnotification_component__["a" /* SpnotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_79__superadmin_region_list_region_list_region_component__["a" /* ListRegionComponent */],
                __WEBPACK_IMPORTED_MODULE_80__superadmin_region_add_region_add_region_component__["a" /* AddRegionComponent */],
                __WEBPACK_IMPORTED_MODULE_81__superadmin_region_edit_region_edit_region_component__["a" /* EditRegionComponent */],
                __WEBPACK_IMPORTED_MODULE_82__superadmin_asign_region_asign_region_component__["a" /* AsignRegionComponent */],
                __WEBPACK_IMPORTED_MODULE_83__superadmin_asign_ex_region_asign_ex_region_component__["a" /* AsignExRegionComponent */],
                __WEBPACK_IMPORTED_MODULE_84__superadmin_region_asign_store_asign_store_component__["a" /* AsignStoreComponent */],
                __WEBPACK_IMPORTED_MODULE_85__superadmin_export_reports_export_reports_component__["a" /* ExportReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_86__portal_pexport_report_pexport_report_component__["a" /* PexportReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_loaders_css__["LoadersCssModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_tree_component__["b" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_57_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_64_ng2_charts__["ChartsModule"],
                // ImageZoomModule
                __WEBPACK_IMPORTED_MODULE_73_ngx_img_zoom__["a" /* NgxImgZoomModule */]
                // NgxImageZoomModule.forRoot()
                // Ng2CompleterModule
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__shared_authGuard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_12__superadmin_authGuard_service__["a" /* AuthGuardSuperAdmin */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-account/customer-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-account/customer-account.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<header class=\"app-header navbar customer_portal navbar-light\">\n  \n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <ul class=\"nav navbar-nav ml-auto mr-3 mr-lg-0\">\n    <!-- <li class=\"nav-item dropdown\" style=\"margin-right: 20px !important\"> <a class=\"nav-link\" [attr.href]=\"InstructionSheet\" target=\"_blank\">Instruction Sheet</a> </li> -->\n    <li class=\"nav-item dropdown\">\n      <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </li>\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"img/avatars/6.jpg\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <li class=\"nav-item dropdown\">\n          <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </li>\n      </div>\n    </li> -->\n  </ul>\n  <button class=\"navbar-toggler mobile-sidebar-toggler aside-menu-toggler visible-xs d-lg-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n\n\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar\" style=\"height:600px;\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/orders\"><i class=\"icon-speedometer\"></i> Orders</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/cart\"><i class=\"icon-speedometer\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/settings\"><i class=\"icon-user\"></i> Account settings</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/profile/orders\">Profile</a></li>\n      <li class=\"breadcrumb-item active\">Settings</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  Change password\n                </div>\n                <div class=\"card-body\">\n                  <form class=\"m-t\" [formGroup]=\"account\" (ngSubmit)=\"onSubmit(account.value,account)\">\n                    <div>\n                      <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['current_password'].valid && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched}\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" formControlName=\"current_password\">\n                        <!-- <div class=\"input-group col-md-12 password-watch\">\n                            <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                              Show\n                            </span>\n                          </div> -->\n                           <span *ngIf=\"account.controls['current_password'].hasError('required') && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched\">Old Password is required.</span>\n                          <span *ngIf=\"account.controls['current_password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                       </div>\n                     <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['password'].valid && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched}\">\n                       <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"password\">\n                       <!-- <div class=\"input-group col-md-12 password-watch\">\n                         <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                           Show\n                         </span>\n                       </div> -->\n                          <span *ngIf=\"account.controls['password'].hasError('required') && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched\">New Password is required.</span>\n                          <span *ngIf=\"account.controls['password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                      </div>\n                      <div class=\"form-group\" [ngClass]=\"{ 'has-error':!account.controls['user_password_rpt'].valid   && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched}\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"user_password_rpt\">\n                        <!-- <div class=\"input-group col-md-12 password-watch\">\n                          <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                            Show\n                          </span>\n                        </div> -->\n                          <span *ngIf=\"account.controls['user_password_rpt'].hasError('required') && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched\">Confirm Password is required.</span>\n                          <!-- <span *ngIf=\"!account.controls['user_password_rpt'].hasError('required') && !account.controls['user_password_rpt'].hasError('minlength')  && !account.controls.valid && submitAttempt\">Password not matched.</span> -->\n                          <span *ngIf=\"!account.controls['password'].hasError('required') && !account.controls['user_password_rpt'].hasError('required') && !account.controls['password'].hasError('minlength')   && !account.controls['user_password_rpt'].hasError('minlength') && !account.valid && submitAttempt\">Password not matched.</span>\n                      </div>\n                      <div>\n                        <button class=\"btn btn-primary\">Change Password</button>\n                      </div>\n                </div>\n              </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-account/customer-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function passwordMatcher(c) {
    console.log(c.get('password').value);
    return c.get('password').value === c.get('user_password_rpt').value
        ? null : { 'nomatch': true };
}
var CustomerAccountComponent = (function () {
    function CustomerAccountComponent(_front, fb, router, toasterService, _service) {
        this._front = _front;
        this.fb = fb;
        this.router = router;
        this._service = _service;
        this.submitAttempt = false;
        this.settings = {};
        this.InstructionSheet = '';
        this.toasterService = toasterService;
        this.account = this.fb.group({
            current_password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
            user_password_rpt: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
        }, { validator: passwordMatcher });
    }
    CustomerAccountComponent.prototype.ngOnInit = function () {
    };
    CustomerAccountComponent.prototype.showPassword = function (ele) {
        var type = jQuery(ele).prev('input').attr('type');
        if (type == 'password') {
            jQuery(ele).html('Hide');
            jQuery(ele).prev('input').attr('type', 'text');
        }
        else {
            jQuery(ele).html('Show');
            jQuery(ele).prev('input').attr('type', 'password');
        }
    };
    CustomerAccountComponent.prototype.onSubmit = function (value, account) {
        var _this = this;
        this.submitAttempt = true;
        console.log(this.account);
        if (!this.account.valid)
            return false;
        var tkn = localStorage.getItem('ppsPortalToken');
        var token = JSON.parse(tkn);
        value['userId'] = token['userId'];
        this._service.chnagePassword(value).subscribe(function (data) {
            _this.submitAttempt = false;
            if (data.success) {
                _this.toasterService.pop('success', data.success_msg + '');
                _this.account.reset();
            }
            if (data.success == false) {
                _this.toasterService.pop('error', data.error_msg + '');
            }
        });
    };
    CustomerAccountComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    CustomerAccountComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['InstructionSheet']);
                _this.InstructionSheet = _this.settings['InstructionSheet'];
            }
        }, function (err) { return console.log(err); });
    };
    CustomerAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-account',
            template: __webpack_require__("../../../../../src/app/customer/customer-account/customer-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-account/customer-account.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_5__frontend_frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__frontend_frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]])
    ], CustomerAccountComponent);
    return CustomerAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderst\n{\n  color: #b7b7b7 !important;\n  text-align: center;\n}\n\n.orderst i\n{\n  font-size: 43px;\n}\n\n.orderst.active\n{\n  color: #03a900 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar customer_portal navbar-light\">\n\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <ul class=\"nav navbar-nav ml-auto mr-3 mr-lg-0\">\n    <!-- <li class=\"nav-item dropdown\" style=\"margin-right: 20px !important\"> <a class=\"nav-link\" [attr.href]=\"InstructionSheet\" target=\"_blank\">Instruction Sheet</a> </li> -->\n    <li class=\"nav-item dropdown\">\n      <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </li>\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"img/avatars/6.jpg\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <li class=\"nav-item dropdown\">\n          <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </li>\n      </div>\n    </li> -->\n  </ul>\n  <button class=\"navbar-toggler mobile-sidebar-toggler aside-menu-toggler visible-xs d-lg-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar\" style=\"height:600px;\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/orders\"><i class=\"icon-speedometer\"></i> Orders</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/cart\"><i class=\"icon-basket\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/settings\"><i class=\"icon-user\"></i> Account settings</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <!-- {{Orderdetails | json }} -->\n              <h2>\n                <i *ngIf=\"Orderdetails.orderStatus == 1\" class=\"icon-check\"></i>\n                <i *ngIf=\"Orderdetails.orderStatus == 2\" class=\"icon-ban\"></i>\n                <i *ngIf=\"Orderdetails.orderStatus == 0\" class=\"icon-clock\"></i>\n                <span *ngIf=\"Orderdetails.orderStatus == 0\">Pending</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 2\">Denied</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 0\">Approved</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 1\">Shipped</span>\n              </h2>\n              <p style=\"margin-bottom: 4px;\">Total Amount - ${{Orderdetails.orderTotal | number : '1.2-2' }}</p>\n              <p style=\"margin-bottom: 4px;\">Order number - {{Orderdetails.orderNumber}}</p>\n              <p style=\"margin-bottom: 4px;\">Date Placed - {{Orderdetails.orderAddedOn | date : 'short' }}</p>\n              <!-- <p style=\"margin-bottom: 4px;\">Store number - {{Orderdetails.storeId}}</p> -->\n              <p style=\"margin-bottom: 4px;\">Store Number - {{Orderdetails.storeName}}</p>\n              <p style=\"margin-bottom: 4px;\">Store address - {{Orderdetails.storeAddress}}</p>\n              <p style=\"margin-bottom: 4px;\">Shipping Tracking Number - {{Orderdetails.orderTrackNumber}}</p>\n              <br>\n              <div *ngIf=\"(Orderdetails | json) != '{}'\">\n                <div class=\"\" *ngIf=\"Orderdetails.Shipped == 0\">\n                  Fedex Tracking number is not updated\n                </div>\n                <div>\n                  <div class=\"row\">\n                    <div class=\"col-md-4 orderst active\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Received</h3>\n                    </div>\n                    <div class=\"col-md-4 orderst\" [class.active]=\"Orderdetails.orderStatus == 11 || Orderdetails.orderStatus == 12\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Processed</h3>\n                    </div>\n                    <div class=\"col-md-4 orderst\" [class.active]=\"Orderdetails.orderStatus == 12\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Shipped</h3>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n              <br>\n              <table class=\"table table-responsive\">\n                <thead>\n                  <tr>\n                    <th>Item name</th>\n                    <th>Item Id</th>\n                    <th>Item quantity</th>\n                    <th>Item Price</th>\n                    <th>Total Price</th>\n                    <th>Note</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of Orderdetails.items\">\n                    <!-- <td>{{item.orderproductName}}</td>\n                    <td>{{item?.productVarItemId}}</td> -->\n                    <td *ngIf=\"item.productVarDesc != ''\">{{item.productVarDesc}}</td>\n                    <td *ngIf=\"item.productVarDesc == ''\">{{item.productVarDesc_safe}}</td>\n\n                    <td *ngIf=\"item.productVarItemId != ''\">{{item?.productVarItemId}}</td>\n                    <td *ngIf=\"item.productVarItemId == ''\">{{item?.productVarItemId_safe}}</td>\n                    <td>{{item.orderItemQty}}</td>\n                    <td>${{ (item.orderItemPrice / item.orderItemQty) | number : '1.2-2'}}</td>\n                    <td>${{item.orderItemPrice | number : '1.2-2' }}</td>\n                    <td>{{item.note }}</td>\n                    <td style=\"color:red;\" *ngIf=\"item.isBackItem == 'yes'\">Back Order</td>\n                    <td  *ngIf=\"item.isBackItem == 'no'\"></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrderdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerOrderdetailsComponent = (function () {
    function CustomerOrderdetailsComponent(activatedRoute, fb, _http, _service, router, toasterService) {
        this.activatedRoute = activatedRoute;
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.Orderdetails = {};
        this.InstructionSheet = '';
        var params = this.activatedRoute.snapshot.params;
        this.orderid = params.orderid;
        this.toasterService = toasterService;
    }
    CustomerOrderdetailsComponent.prototype.ngOnInit = function () {
        this.myOrders();
        var set = localStorage.getItem('ppsSettings');
        var sett = JSON.parse(set);
        // console.log(this.InstructionSheet = sett.setValue);
        this.InstructionSheet = sett.setValue;
    };
    CustomerOrderdetailsComponent.prototype.myOrders = function () {
        var _this = this;
        var tkn = localStorage.getItem('ppsPortalToken');
        var tknn = JSON.parse(tkn);
        this._service.orderDetails(this.orderid).subscribe(function (data) {
            if (data.status == 200) {
                _this.Orderdetails = data.data;
            }
        }, function (err) {
        });
    };
    CustomerOrderdetailsComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    CustomerOrderdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-orderdetails',
            template: __webpack_require__("../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-orderdetails/customer-orderdetails.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], CustomerOrderdetailsComponent);
    return CustomerOrderdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-orders/customer-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-orders/customer-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar customer_portal navbar-light\">\n  \n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <ul class=\"nav navbar-nav ml-auto mr-3 mr-lg-0\">\n    <!-- <li class=\"nav-item dropdown\" style=\"margin-right: 20px !important\"> <a class=\"nav-link\" [attr.href]=\"InstructionSheet\" target=\"_blank\">Instruction Sheet</a> </li> -->\n    <li class=\"nav-item dropdown\">\n      <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </li>\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"img/avatars/6.jpg\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <li class=\"nav-item dropdown\">\n          <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </li>\n      </div>\n    </li> -->\n  </ul>\n  <button class=\"navbar-toggler mobile-sidebar-toggler aside-menu-toggler visible-xs d-lg-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar\" style=\"height:600px;\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/orders\"><i class=\"icon-speedometer\"></i> Orders</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/cart\"><i class=\"icon-basket\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/settings\"><i class=\"icon-user\"></i> Account settings</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"> <a routerLink=\"/profile\">Profile</a></li>\n      <li class=\"breadcrumb-item active\">Orders</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\" *ngIf=\"Orders.length == 0 && orderLoading\">\n            <div class=\"loader\">\n              <div class=\"loader-inner ball-pulse\">\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"Orders.length != 0 && !orderLoading\">\n            <div class=\"col-lg-9\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  Orders\n                </div>\n                <div class=\"card-body\">\n                  <table class=\"table table-bordered table-responsive\">\n                    <thead>\n                      <tr>\n                        <th>Order Number</th>\n                        <th>Order Date</th>\n                        <th>Order Status</th>\n                        <th>Total amount</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let order of Orders | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: TotalOrders }\">\n                        <td>\n                          <a [routerLink]=\"['/profile/order-details',order.orderNumber]\">{{order.orderNumber}}\n                          </a>\n                        </td>\n                        <td>{{order.orderAddedOn}}</td>\n                        <td>\n                          <span *ngIf=\"order.orderStatus == 0 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Pending</span>\n                          <span *ngIf=\"order.orderStatus == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Accepted</span>\n                          <span *ngIf=\"order.orderStatus == 2 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Rejected</span>\n\n                          <span *ngIf=\"order.orderStatus == 1 && order.orderTrackNumber != '' &&  order.Shipped == 1\">Shipped</span>\n                        </td>\n                        <td>${{order.orderTotal | number : '1.2-2' }}</td>\n                        <!-- <td>\n                          <a *ngIf=\"order.orderStatus != 1\" (click)=\"UpdateOrderStatus(1,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Accept</a>\n                          <a *ngIf=\"order.orderStatus != 1\" (click)=\"UpdateOrderStatus(2,order.orderNumber)\" class=\"btn btn-xs btn-warning\"> Reject</a>\n                        </td> -->\n                      </tr>\n                    </tbody>\n                  </table>\n                  <pagination-controls (pageChange)=\"page = myOrders($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                  </pagination-controls>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"Orders.length == 0 && !orderLoading\">\n           <div class=\"col-12\">\n              No Orders\n           </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-orders/customer-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerOrdersComponent = (function () {
    function CustomerOrdersComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.loginsubmitted = false;
        this.Orders = [];
        this.orderLoading = true;
        this.page = 1;
        this.TotalOrders = 0;
        this.perpage = 10;
        this.InstructionSheet = '';
        this.toasterService = toasterService;
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        this.myOrders(this.page);
        var set = localStorage.getItem('ppsSettings');
        var sett = JSON.parse(set);
        // console.log(this.InstructionSheet = sett.setValue);
        this.InstructionSheet = sett.setValue;
    };
    CustomerOrdersComponent.prototype.myOrders = function (e) {
        var _this = this;
        this.orderLoading = true;
        var tkn = localStorage.getItem('ppsPortalToken');
        var tknn = JSON.parse(tkn);
        this._service.myOrders(tknn['userId'], e, this.perpage).subscribe(function (data) {
            _this.orderLoading = false;
            if (data.status == 200) {
                _this.Orders = data.data.data;
                _this.TotalOrders = data.data.total;
            }
        }, function (err) {
            _this.orderLoading = false;
        });
        return e;
    };
    CustomerOrdersComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    CustomerOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-orders',
            template: __webpack_require__("../../../../../src/app/customer/customer-orders/customer-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-orders/customer-orders.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-profile/customer-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-profile/customer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar customer_portal navbar-light\">\n  \n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <ul class=\"nav navbar-nav ml-auto mr-3 mr-lg-0\">\n    <!-- <li class=\"nav-item dropdown\" style=\"margin-right: 20px !important\"> <a class=\"nav-link\" [attr.href]=\"InstructionSheet\" target=\"_blank\">Instruction Sheet</a> </li> -->\n    <li class=\"nav-item dropdown\">\n      <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </li>\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"img/avatars/6.jpg\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <li class=\"nav-item dropdown\">\n          <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </li>\n      </div>\n    </li> -->\n  </ul>\n  <button class=\"navbar-toggler mobile-sidebar-toggler aside-menu-toggler visible-xs d-lg-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</header>\n\n\n\n<div class=\"app-body\">\n  <div class=\"sidebar\" style=\"height:600px;\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/orders\"><i class=\"icon-speedometer\"></i> Orders</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/cart\"><i class=\"icon-speedometer\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile/settings\"><i class=\"icon-user\"></i> Account settings</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\">Profile</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </main>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-profile/customer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerProfileComponent = (function () {
    function CustomerProfileComponent(activatedRoute, fb, _http, _service, router, toasterService) {
        this.activatedRoute = activatedRoute;
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.InstructionSheet = '';
    }
    CustomerProfileComponent.prototype.ngOnInit = function () {
        var set = localStorage.getItem('ppsSettings');
        var sett = JSON.parse(set);
        // console.log(this.InstructionSheet = sett.setValue);
        this.InstructionSheet = sett.setValue;
    };
    CustomerProfileComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    CustomerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-profile',
            template: __webpack_require__("../../../../../src/app/customer/customer-profile/customer-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-profile/customer-profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], CustomerProfileComponent);
    return CustomerProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<toaster-container></toaster-container>\n\n<div class=\"container\" style=\"padding-top:100px\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <a routerLink=\"/\">\n          <img src=\"assets/img/PPS-Logo-1.png\"/>\n        </a>\n      </div>\n      <br>\n      <div class=\"card-group\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <p class=\"text-muted\">Sign In to your account</p>\n            <form [formGroup]=\"login\" (ngSubmit)=\"submitForm(login.value)\">\n              <div class=\"input-group flex-wrap mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\"  [formControl]=\"login.controls['username']\" [ngClass]=\"{'has-error':!login.controls['username'].valid   && loginsubmitted}\" >\n                <br>\n                <div class=\"invalid-feedback  w-100\" *ngIf=\"login.controls['username'].hasError('required')    && loginsubmitted\">You must include a Username.</div>\n              </div>\n              <div class=\"input-group flex-wrap mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  [formControl]=\"login.controls['password']\" [ngClass]=\"{'has-error':!login.controls['password'].valid   && loginsubmitted}\">\n                <br>\n                <div class=\"invalid-feedback w-100\"  *ngIf=\"login.controls['password'].hasError('required')    && loginsubmitted\">You must include a Password.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12 col-md-12 d-flex flex-wrap justify-content-center justify-content-md-between login_btn_out align-items-md-center\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block-xs-only px-4\">Login</button>\n                  <br>\n                  <a hand data-toggle=\"modal\" data-target=\"#eRequest\">Submit e-Request for system access</a>\n                </div>\n                <!-- <div class=\"col-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div> -->\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n          <div class=\"card-body text-center\">\n            <div>\n              <h2>Sign up</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n              <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"eRequest\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"eRequest\" (ngSubmit)=\"submiteRequest(eRequest.value)\">\n        <div class=\"modal-header\">\n          e-Request for system access\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_name'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Name and Title</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_name']\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_name'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Company  Name</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_companyName']\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_bussAddress'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Business Address</label>\n                <textarea name=\"name\" rows=\"2\" cols=\"80\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_bussAddress']\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_city'].valid   && eRequestsubmitted}\">\n                <label for=\"\">City</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_city']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_state'].valid   && eRequestsubmitted}\">\n                <label for=\"\">State/Province</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_state']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_zip'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Zip</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_zip']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_country'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Country</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_country']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"type\" value=\"Corporation\" [(ngModel)]=\"sys_typeOfBuss\" [ngModelOptions]=\"{standalone: true}\">\n                Corporation</label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"type\" value=\"LLC/LLP\" [(ngModel)]=\"sys_typeOfBuss\" [ngModelOptions]=\"{standalone: true}\">\n                LLC/LLP</label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"type\" value=\"Sole Proprietorship\" [(ngModel)]=\"sys_typeOfBuss\" [ngModelOptions]=\"{standalone: true}\">\n                Sole Proprietorship</label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"checkbox\" class=\"form-control\">\n                  <input type=\"radio\" name=\"type\" value=\"Corporation\" [(ngModel)]=\"sys_typeOfBuss\" [ngModelOptions]=\"{standalone: true}\">\n                <input type=\"text\" class=\"form-control\">\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"\">FEIN or Other Identifying Number</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_ideNumber']\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"\">Mailing Address (if different than above):</label>\n                <textarea rows=\"2\" cols=\"80\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailAddress']\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">City</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailCity']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">State/Province</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailState']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">Zip</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailZip']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">Phone Number</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailPhone']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">ext.</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailExt']\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!eRequest.controls['sys_mailEmail'].valid   && eRequestsubmitted}\">\n                <label for=\"\">Email Address of Primary Contact:</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_mailEmail']\">\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"\">Number of Locations</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"eRequest.controls['sys_numberOfLoc']\">\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <label for=\"\"> Any International? </label>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"int\" class=\"form-control\" value=\"yes\" [(ngModel)]=\"sys_anyInternational\" [ngModelOptions]=\"{standalone: true}\">\n                  Yes\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"int\" class=\"form-control\" value=\"no\" [(ngModel)]=\"sys_anyInternational\" [ngModelOptions]=\"{standalone: true}\">\n                  No\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <label for=\"\">Annual Spend EAS/LP Products (optional)</label>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"anual\" class=\"form-control\" value=\"$0-10,000\" [(ngModel)]=\"sys_annualSpendEas\" [ngModelOptions]=\"{standalone: true}\">\n                  $0-10,000\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"anual\" class=\"form-control\" value=\"$10,000-50,000\" [(ngModel)]=\"sys_annualSpendEas\" [ngModelOptions]=\"{standalone: true}\">\n                  $10,000-50,000\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"anual\" class=\"form-control\" value=\"$50,000-100,000\" [(ngModel)]=\"sys_annualSpendEas\" [ngModelOptions]=\"{standalone: true}\">\n                  $50,000-100,000\n              </label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"checkbox\">\n                <label for=\"\">\n                  <input type=\"radio\" name=\"anual\" class=\"form-control\" value=\"$100,000+\" [(ngModel)]=\"sys_annualSpendEas\" [ngModelOptions]=\"{standalone: true}\">\n                  $100,000+\n              </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" name=\"button\" class=\"btn btn-primary\">Send</button>\n          <button type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerComponent = (function () {
    function CustomerComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.loginsubmitted = false;
        this.eRequestsubmitted = false;
        this.sys_anyInternational = 'yes';
        this.sys_annualSpendEas = '$0-10,000';
        this.sys_typeOfBuss = 'Corporation';
        this.responseStatus = [];
        this.toasterService = toasterService;
        this.http = _http;
        this.login = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.eRequest = fb.group({
            'sys_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'sys_companyName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'sys_bussAddress': [''],
            'sys_city': [''],
            'sys_state': [''],
            'sys_zip': [''],
            'sys_country': [''],
            'sys_ideNumber': [''],
            'sys_mailAddress': [''],
            'sys_mailCity': [''],
            'sys_mailState': [''],
            'sys_mailZip': [''],
            'sys_mailCountry': [''],
            'sys_mailPhone': [''],
            'sys_mailEmail': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'sys_mailExt': [''],
            'sys_numberOfLoc': ['']
        });
    }
    CustomerComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.loginsubmitted = true;
        if (!this.login.valid) {
            return false;
        }
        this.toasterService.pop('info', ' Loading...', '');
        this._service.login(value).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                _this.loginsubmitted = false;
                _this.toasterService.clear();
                _this.toasterService.pop('success', 'Login Successful,' + ' Redirecting...', '');
                var tkn = JSON.stringify(data.data);
                localStorage.setItem('ppsPortalToken', tkn);
                localStorage.setItem('ppsSettings', JSON.stringify(data.settings));
                setTimeout(function (router) {
                    _this.router.navigate(['/profile/orders']);
                }, 1000);
            }
            else {
                _this.toasterService.clear();
                _this.toasterService.pop('error', data.data, '');
            }
        }, function (err) {
            _this.toasterService.clear();
            if (err.status == 409)
                _this.toasterService.pop('error', 'Invalid Login Details', '');
            else
                _this.toasterService.pop('error', 'Something wro ng,try again', '');
        });
    };
    CustomerComponent.prototype.submiteRequest = function (value) {
        var _this = this;
        this.eRequestsubmitted = true;
        if (!this.eRequest.valid) {
            return false;
        }
        value['sys_annualSpendEas'] = this.sys_annualSpendEas;
        value['sys_anyInternational'] = this.sys_anyInternational;
        this._service.submiteRequest(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#eRequest').modal('hide');
                _this.toasterService.pop('success', data.data, '');
            }
        }, function (err) {
        });
    };
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
        var tkn = localStorage.getItem('ppsPortalToken');
        this.token = JSON.parse(tkn);
    }
    CustomerService.prototype.login = function (value) {
        var form = {
            'useremail': value.username,
            'password': value.password,
            'deviceId': value.password,
            'registerId': value.password,
            'usertype': 2
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/login/', form, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    CustomerService.prototype.myOrders = function (v, page, perpage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/customer-orders/' + v + '/' + page + '/' + perpage, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    CustomerService.prototype.orderDetails = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/order-details/' + v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    CustomerService.prototype.submiteRequest = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addStoreUserRequest/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    CustomerService.prototype.chnagePassword = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/change-password/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" [innerHtml]=\"faq | safeHtml\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = (function () {
    function FaqComponent(_front) {
        this._front = _front;
        this.faq = '';
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    FaqComponent.prototype.getFaq = function () {
        var _this = this;
        this._front.getWhere(4, 'faq').subscribe(function (data) {
            if (data.success) {
                _this.faq = data.data['setValue'];
            }
        }, function (err) { return console.log(err); });
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group.has-error + .alr\n{\n  color: #a94442;\n  text-align: left;\n}\n.form-group\n{\n  text-align: left;;\n}\n\n.form-group.has-error span\n{\n  color: #a94442;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<toaster-container></toaster-container>\n\n<div class=\"container\" style=\"padding-top:100px\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <a routerLink=\"/\">\n          <img src=\"assets/img/PPS-Logo-1.png\"/>\n        </a>\n      </div>\n      <br>\n      <div class=\"card-group\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <p class=\"text-muted\">Generate Password Reset Link</p>\n            <form class=\"m-t\" role=\"form\" [formGroup]=\"forgot\" (ngSubmit)=\"forgotpassword(forgot.value,forgot)\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!forgot.controls['com_email'].valid && submitAttempt || forgot.controls['com_email'].hasError('required') && forgot.controls['com_email'].touched}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Please enter your Email\" formControlName=\"com_email\">\n                    <span *ngIf=\"forgot.controls['com_email'].hasError('required') && submitAttempt || forgot.controls['com_email'].hasError('required') && forgot.controls['com_email'].touched\"> Email is required.</span>\n                    <span *ngIf=\" !forgot.controls['com_email'].hasError('required') && forgot.controls['com_email'].hasError('email') && submitAttempt\">Email is invalid.</span>\n                </div>\n                <br>\n                <button type=\"submit\" class=\"btn btn-primary btn-block\"   [disabled]=\"!forgot.valid\"  routerLinkActive=\"active\">Reset Password</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_service__ = __webpack_require__("../../../../../src/app/forgot-password/forgot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, _http, router, toasterService, _forgotservice) {
        this.fb = fb;
        this._http = _http;
        this.router = router;
        this._forgotservice = _forgotservice;
        this.submitted = false;
        this.submitAttempt = false;
        this.color = {};
        this.responseStatus = [];
        this.toasterService = toasterService;
        this.http = _http;
        this.forgot = this.fb.group({
            'com_email': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]]
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotpassword = function (value, forgot) {
        var _this = this;
        this._forgotservice.forgot(value).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                _this.toasterService.pop('success', 'Password reset link sent on your email' + '');
            }
        });
        this.forgot.reset();
    };
    ForgotPasswordComponent.prototype.hidemsg = function (event) {
        this.responseStatus = [];
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__forgot_service__["a" /* ForgotPasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3__forgot_service__["a" /* ForgotPasswordService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordService = (function () {
    function ForgotPasswordService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
    }
    ForgotPasswordService.prototype.forgot = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/forgot-password-link/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    ForgotPasswordService.prototype.passwordChange = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/change-password-link/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    ForgotPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<toaster-container></toaster-container>\n\n<!--<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> --\n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\">\n      <a hand class=\"nav-link\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n    </li>\n    <!-- <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"img/avatars/6.jpg\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li> --\n  </ul>\n  <button class=\"navbar-toggler aside-menu-toggler\" type=\"button\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> --\n  </button>\n</header>-->\n\n<div class=\"app-body\">\n\n  <div class=\"sidebar\" style=\"height:600px;\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\"><i class=\"icon-speedometer\"></i> Dashboard</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 2\">\n          <a class=\"nav-link\" routerLink=\"/profile/orders\"><i class=\"icon-speedometer\"></i> Orders</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/my-stores\"><i class=\"icon-speedometer\"></i> My Stores</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/orders/my\"><i class=\"icon-speedometer\"></i> My Orders</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/orders/stores\"><i class=\"icon-speedometer\"></i> Orders by\n            stores</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 2\">\n          <a class=\"nav-link\" routerLink=\"/profile/cart\"><i class=\"icon-basket\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/cart\"><i class=\"icon-basket\"></i> Cart</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 2\">\n          <a class=\"nav-link\" routerLink=\"/profile/settings\"><i class=\"icon-speedometer\"></i> Account settings </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n          <a class=\"nav-link\" routerLink=\"/dashboard/account-settings\"><i class=\"icon-speedometer\"></i> Account settings\n          </a>\n        </li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\"><i class=\"icon-speedometer\"></i> PPS Newsletter</a> </li>\n      <li class=\"nav-item\"><a  class=\"nav-link\" routerLink=\"/instruction-sheets\"><i class=\"icon-speedometer\"></i> Instruction Sheets and Resource Material</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/faq\"><i class=\"icon-speedometer\"></i> FAQ</a></li>\n      </ul>\n    </nav>\n  </div>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\" *ngIf=\"token.userType == 2\"> <a routerLink=\"/profile\">Profile</a></li>\n      <li class=\"breadcrumb-item\" *ngIf=\"token.userType == 3\"> <a routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Cart</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div *ngIf=\"ProductLoading\">\n              <div class=\"loader\">\n                <div class=\"loader-inner ball-pulse\">\n                  <div class=\"my-loader\"></div>\n                  <div class=\"my-loader\"></div>\n                  <div class=\"my-loader\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\" style=\"background-color:#fff;\">\n              <div>\n                <div class=\"col-md-3\"\n                  *ngIf=\"( token.userType == 3 || token.userType == 9 )&& !ProductLoading && (cartData | json) != '{}' \">\n                  <select class=\"form-control whichStore\" [(ngModel)]=\"whichStore\">\n                    <option value=\"\">Select #Store</option>\n                    <option *ngFor=\"let str of Stores\" [value]=\"str.storeUserId\">{{ str.storeName }}</option>\n                  </select>\n                  <br>\n                </div>\n                <div class=\"col-md-3\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n                  <ng2-completer inputClass=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchOdr\"\n                    [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"OdrSelected($event)\"\n                    [clearSelected]=\"true\" placeholder=\"Search Order numbers\"></ng2-completer>\n                  <br>\n                </div>\n                <div class=\" d-none d-md-block\">\n                  <table id=\"cart\" class=\"table table-hover table-condensed table-responsive\"\n                    *ngIf=\"!ProductLoading && (cartData | json) != '{}' \">\n                    <thead>\n                      <tr>\n                        <th style=\"width:50%\">Product</th>\n                        <th style=\"width:10%\">Price</th>\n                        <th style=\"width:8%\">Quantity</th>\n                        <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n                        <th style=\"width:10%\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let pro of cartData.data; let i = index\">\n                        <td data-th=\"Product\">\n                          <div class=\"row\">\n                            <div class=\"col-sm-2 hidden-xs\">\n                              <img\n                                [src]=\"pro.productImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+pro.productImage : 'assets/img/demo.png'\"\n                                alt=\"\" class=\"img-responsive\" style=\"width:80px\" />\n                            </div>\n                            <div class=\"col-sm-10\">\n                              <h4 class=\"nomargin\">{{ pro.productVarDesc }}</h4>\n                              <!-- <p>{{ pro.productDescription }}</p> -->\n                            </div>\n                          </div>\n                        </td>\n                        <td data-th=\"Price\">${{ pro.productPrice }}</td>\n                        <td data-th=\"Quantity\">\n                          <input type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"pro.quantity\"\n                            (change)=\"doSum(i)\" min=\"1\">\n                        </td>\n                        <td data-th=\"Subtotal\" class=\"text-center\">${{ pro.orderProductPrice | number : '1.2-2'}}</td>\n                        <td class=\"actions\" data-th=\"\">\n                          <button class=\"btn btn-danger btn-sm\" (click)=\"delete(pro.bkId,'cartItem')\"><i\n                              class=\"fa fa-trash-o\"></i></button>\n                        </td>\n                      </tr>\n                    </tbody>\n                    <tfoot>\n                      <tr>\n                        <td><a routerLink=\"/products\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue\n                            Shopping</a></td>\n                        <td colspan=\"2\" class=\"hidden-xs\"></td>\n                        <td class=\"hidden-xs text-center\"><strong>\n                            Total ${{ cartData.totalItemPrice | number : '1.2-2'}}\n                          </strong></td>\n                        <td><a (click)=\"SaveMyOrders()\" class=\"btn btn-success btn-block\">Place Order <i\n                              class=\"fa fa-angle-right\"></i></a></td>\n                      </tr>\n                    </tfoot>\n                  </table>\n\n\n\n                </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                <div *ngIf=\"!ProductLoading && (cartData | json) != '{}' \" class=\"d-block d-md-none\">\n                  <div class=\"card\">\n                    <div class=\"card-header d-flex justify-content-between\">\n                      <a class=\"btn btn-outline-primary btn-sm\" routerlink=\"/products\"\n                        ng-reflect-router-link=\"/products\" href=\"#/products\"><i class=\"fa fa-angle-left\"></i> Continue\n                        Shopping</a>\n\n                    </div>\n\n                    <div class=\"card-body cart_itm_wrapper px-0\">\n                      <!--bindings={\n    \"ng-reflect-ng-for-of\": \"[object Object],[object Object\"\n  }-->\n                      <div class=\"cart_item px-3 pb-3 mb-4 border-bottom\" *ngFor=\"let pro of cartData.data; let i = index\">\n\n                        <div class=\"row\">\n                          <div class=\"col-3 col-sm-4\">\n                            <img alt=\"\" width=\"100%\"\n                            [src]=\"pro.productImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+pro.productImage : 'assets/img/demo.png'\">\n                          </div>\n                          <div class=\"col-9 col-sm-8\">\n                            <div class=\"product-name\">\n                              <h5 class=\"mb-2\">{{ pro.productVarDesc }}</h5>\n                            </div>\n                            <div class=\"row no-gutters mb-2\">\n                              <div class=\"col-6  \">\n                                <small class=\"text-muted\">Price:</small> <span class=\"fw-600\"> ${{ pro.productPrice }}</span>\n                              </div>\n                              <div class=\"col-6 text-right\">\n                                <small class=\"text-muted\">Sub-total:</small> <span class=\"fw-600\"> ${{ pro.orderProductPrice | number : '1.2-2'}}</span>\n                              </div>\n                            </div>\n                            <div class=\"row no-gutters\">\n                              <div class=\"col-6\">\n                                <small class=\"text-muted\">Qty:</small> <input\n                                  class=\"mobile_cart_qty text-center ng-untouched ng-pristine ng-valid\"\n                                  type=\"number\" [(ngModel)]=\"pro.quantity\"\n                                  (change)=\"doSum(i)\" min=\"1\">\n                              </div>\n                              <div class=\"col-6 text-right\">\n                                <button class=\"btn btn-sm btn-outline-danger\" (click)=\"delete(pro.bkId,'cartItem')\" type=\"button\">Delete</button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n\n\n                    </div>\n                    <div class=\"card-footer d-flex justify-content-between align-items-center\">\n                      <h5 class=\"mb-0\"><small> Total Price:</small> ${{ cartData.totalItemPrice | number : '1.2-2'}}</h5>\n                      <a class=\"btn btn-success \" (click)=\"SaveMyOrders()\"\n                       > Place Order <i\n                          class=\"fa fa-angle-right\"></i></a>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              </div>\n              <div *ngIf=\"!ProductLoading && (cartData | json) == '{}' \" class=\"text-center\" style=\"padding:30px\">\n                <i class=\"fa fa-shopping-cart fa-4x\"></i>\n                <br>\n                <h1> Cart is Empty</h1>\n                <a routerLink=\"/products\">Shop Now</a>\n              </div>\n\n              <div class=\"clearfix\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portal_portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartComponent = (function () {
    function CartComponent(completerService, _service, activatedRoute, fb, router, _front, toasterService) {
        this.completerService = completerService;
        this._service = _service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this._front = _front;
        this.ProductDetails = {};
        this.ProductLoading = true;
        this.ProductId = '';
        this.productImagePath = '';
        this.ChoosedVariation = '';
        this.ChoosedVariationname = '';
        this.quantity = 1;
        this.LoggedIn = false;
        this.cartData = {};
        this.settings = {};
        this.InstructionSheet = '';
        this.catalogue = '';
        this.whichStore = '';
        this.Stores = [];
        this.limit250 = true;
        this.searchOdr = '';
        var params = this.activatedRoute.snapshot.params;
        this.ProductId = params.ProductId;
        this.toasterService = toasterService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getSettings();
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
            this.LoggedIn = true;
            this.getCartDetails(this.token['userId']);
            if (this.token.userType == 3 || this.token.userType == 9) {
                // console.log('this.token.apdm.apdmID');
                // console.log(this.token.apdm.apdmUserId);
                this.getStores(this.token.apdm.apdmID, this.token['userType']);
                this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/search-orders/' + this.token.apdm.apdmUserId + '/', 'orderNumber,', 'orderNumber');
            }
        }
        var whichStore = localStorage.getItem('whichStore');
        if (whichStore) {
            this.whichStore = whichStore;
        }
    };
    CartComponent.prototype.OdrSelected = function (e) {
        var _this = this;
        if (e) {
            this._service.orderToCart(e.originalObject.orderNumber).subscribe(function (data) {
                if (data.success) {
                    _this.getCartDetails(_this.token['userId']);
                    _this.toasterService.pop('success', data.success, '');
                }
            }, function (err) {
            });
        }
    };
    CartComponent.prototype.getStores = function (apdm, type) {
        var _this = this;
        this._service.getAdpmStores(apdm, type).subscribe(function (data) {
            if (data.status == 200) {
                _this.Stores = data.data;
            }
        });
    };
    CartComponent.prototype.getCartDetails = function (id) {
        var _this = this;
        this.ProductLoading = true;
        this._front.getCartDetails(id).subscribe(function (data) {
            _this.cartData = data;
            _this.ProductLoading = false;
        }, function (err) {
            _this.ProductLoading = false;
            if (err.status == 409) {
                _this.cartData = {};
            }
        });
    };
    CartComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['InstructionSheet']);
                _this.InstructionSheet = _this.settings['InstructionSheet'];
                _this.catalogue = _this.settings['catalogue'];
            }
        }, function (err) { return console.log(err); });
    };
    CartComponent.prototype.doSum = function (i) {
        var _this = this;
        var row = this.cartData['data'][i];
        console.log(row);
        var v = {};
        v['userId'] = this.token['userId'];
        v['productId'] = row['productId'];
        v['quantity'] = row['quantity'];
        v['bkId'] = row['bkId'];
        this._front.updateCart(v).subscribe(function (data) {
            if (data.success) {
                for (var data_1 in _this.cartData) {
                    var Total = 0;
                    for (var row_1 in _this.cartData[data_1]) {
                        var Row = _this.cartData[data_1][row_1];
                        var Pprice = Row.productPrice * Row.quantity;
                        Row.orderProductPrice = Pprice;
                        Total += Row.orderProductPrice;
                    }
                    _this.cartData['totalItemPrice'] = Total;
                }
            }
        }, function (err) { return console.log(err); });
    };
    CartComponent.prototype.SaveMyOrders = function () {
        var _this = this;
        var tkn = localStorage.getItem('ppsPortalToken');
        var token = JSON.parse(tkn);
        var v = {};
        if (token.userType == 3 || token.userType == 9) {
            if (this.whichStore == '') {
                this.toasterService.pop('error', 'Please select store for which you are placing order', '');
                return false;
            }
            v['userId'] = this.token['userId'];
            v['orderForStore'] = this.whichStore;
        }
        else {
            v['orderLevel'] = 2;
            v['userId'] = this.token['userId'];
        }
        if (token.userType == 9)
            v['orderLevel'] = 3;
        else if (token.userType == 3)
            v['orderLevel'] = 1;
        v['total'] = this.cartData['totalItemPrice'];
        v['userType'] = token.userType;
        if (v['total'] < 20) {
            this.toasterService.pop('error', 'Minimum Order Amount is $20', '');
            return false;
        }
        // this.getlimit();
        //
        //   console.log(this.limit250);
        //   if(this.limit250 == true)
        //   {
        //     console.log(this.limit250);
        //     if(this.cartData['totalItemPrice'] > 250)
        //       this.toasterService.pop('error','You have exceeded your limit of $250','');
        //     {
        //       return false;
        //     }
        //   }
        //   console.log("okok  "+this.limit250);
        this._front.SaveMyOrders(v).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Order has been Placed', '');
                _this.getCartDetails(_this.token['userId']);
            }
            else if (data.error) {
                if (data.products)
                    _this.toasterService.pop('error', data.data, data.products);
                else
                    _this.toasterService.pop('error', data.data);
            }
        }, function (err) { return console.log(err); });
    };
    CartComponent.prototype.delete = function (id, type) {
        var _this = this;
        this._front.delete(id, type).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Product has been removed', '');
                _this.getCartDetails(_this.token['userId']);
            }
        }, function (err) { return console.log(err); });
    };
    CartComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        if (this.token.userType == 3 || this.token.userType == 9)
            this.router.navigate(['/portal']);
        else
            this.router.navigate(['/customer-login']);
    };
    CartComponent.prototype.getlimit = function () {
        var _this = this;
        console.log('in get limit');
        this._service.getlimit().subscribe(function (data) {
            if (data.success) {
                console.log('get limit sucess');
                _this.limit250 = data.limit;
            }
        }, function (err) { return console.log(err); });
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/frontend/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/cart/cart.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_6__portal_portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_6__portal_portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/frontend.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  /*padding-top: 20px;*/\n  padding-bottom: 20px;\n}\n\n.navbar {\n  margin-bottom: 20px;\n}\n\n\n@charset \"utf-8\";\n/* CSS Document */\n.navbar-brand {\n  display: block;\n  float: left;\n  padding: 20px 0;\n}\na:hover {\n  text-decoration: none;\n}\n.nav-item a {\n  color: black !important;\n}\n.nav-item a {\n  padding: 10px 20px !important;\n}\n.nav-item.cont a {\n  background: #cce890 linear-gradient(to top, #aad75b, #cce890) repeat scroll 0 0;\n  border-color: #577810;\n  border-radius: 0;\n  border-style: solid;\n  border-width: 0;\n  color: #577810;\n  display: block;\n  letter-spacing: 1px;\n  overflow: hidden;\n  padding: 10px 40px !important;\n  text-transform: uppercase;\n  transition: all 0.2s ease 0s;\n}\n.button-flat.button-1 {\n  background-color: #333333;\n  color: white;\n  margin: 20px !important;\n  overflow: hidden;\n  padding: 10px;\n}\n.button-flat.button-2 {\nbackground-image: linear-gradient( to top, #aad75b, #cce890 );\n  padding: 10px 60px;\n  color: white;\n}\n.button-flat .button-2:hover,.button-2:focus,.fusion-button.button-2:active{background: #333;}.fusion-button.button-2{width:auto;}\n\n.Guaranteed {\n  background-color: #29a148;\n  display: block;\n  overflow: hidden;\n  padding: 50px 0 80px;\n}\n.owl-carousel-fullwidth .item .fh5co-owl-text {\n  display: table-cell;\n  position: relative;\n  vertical-align: middle;\n  z-index: 10;\n}\n.fh5co-owl-text.text-center.to-animate {\n  display: block;\n  min-height: 550px;\n  overflow: hidden;\n  text-align: center !important;\n}\n.fh5co-lead {\n  color: white;\n  display: block;\n  font-weight: bold;\n  overflow: hidden;\n  padding: 180px 0 0;\n  text-align: center;\n}\n.fh5co-sub-lead {\n  color: #fed03d;\n  margin-bottom: 30px;\n}\n.owl-controls {\n  display: none;\n}\n.text-center .col-md-8 {\n  margin: 0 auto;\n  text-align: center;\n}\n.fh5co-section-lead {\n  color: #333333;\n}\n.abt {\n  margin-top: 18px;\n  padding-top: 3%;\n}\n.fusion-sep-clear {\n  clear: both;\n  display: block;\n  font-size: 0;\n  height: 1px;\n  line-height: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.abt .sep-single {\n  border-bottom-style: solid;\n  border-color: #29a148;\n  border-left-style: solid;\n  border-right-style: solid;\n  margin: 15px auto 30px;\n  max-width: 206px;\n  width: 100%;\n}\n.value .content-box-heading {\n  padding: 20px 0 10px;\n}\n\n.abt ul {\n  text-align: left;\n}\n\n\n\n\n\n\n\n.card-container {\n    display: inline-block;\n    margin: 0 auto;\n    padding: 0 12px;\n    -webkit-perspective: 900px;\n            perspective: 900px;\n    text-align: center;\n}\n\n.card {\n  height: 250px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: all 0.6s ease 0s;\n  width: 100%;\n  border: none;\n}\n.flip-box-circle i {\n  background-color: black;\n  border-radius: 30px;\n  border-right: 30px none;\n  font-size: 30px;\n  height: 62px;\n  padding: 14px 0;\n  width: 60px;\n}\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background: #f5f5f5 none repeat scroll 0 0;\n  border-radius: 5px;\n  color: white;\n  height: 250px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.front > span {\n  color: black;\n}\n.flip-box-grafix.flip-box-circle {\n  padding: 40px 0;\n}\n\n.back {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #9db668;\n  display: block;\n  font-size: 18px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.card-container:hover .card {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n\n.fusion-button-wrapper.fusion-aligncenter {\n  display: block;\n  text-align: center;\n}\n.back h3 {\n  display: block;\n  font-size: 24px;\n  overflow: hidden;\n  padding: 70px 0 10px;\n  text-align: center;\n}\n/*.fusion-button-text {\nbackground: #aad75b;\nbackground-image: -webkit-gradient( linear, left bottom, left top, from( #cce890 ), to( #aad75b ) );\nbackground-image: -webkit-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image:   -moz-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image:     -o-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image: linear-gradient( to top, #cce890, #aad75b );\n}*/\n.back .fusion-button.button-3 {\n  display: block;\n  overflow: hidden;\n  width: 80%;\n  margin: 0 auto;\n}\n/*.fusion-button-text {\n  background: #aad75b linear-gradient(to top, #cce890, #aad75b) repeat scroll 0 0;\n  display: block;\n  overflow: hidden;\n  padding: 10px 40px;\n}*/\n\n.bg-parallax-parent{\nbackground-color: rgba(255, 255, 255, 0);\nbackground-image: none;\nbackground-position: center center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nborder-bottom: 0 solid #eae9e9;\nborder-color: #eae9e9;\nborder-top: 0 solid #eae9e9;\noverflow: hidden;\npadding: 0 30px;\nposition: relative;\nz-index: 1;\nmargin-top:50px;\n}\n.parallax-inner{\nbackground-image: url(\"http://www.productprotectionsolutions.com/wp-content/uploads/2017/07/wine-front-page-bg-1.jpg\");\nbackground-position: center center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nheight: 475.8px;\nleft: 0;\nmin-height: 150px;\nopacity: 1;\npointer-events: none;\nposition: absolute;\ntop: 0;\n-webkit-transform: translate3d(0px, -26.4638px, 0px);\n        transform: translate3d(0px, -26.4638px, 0px);\nwidth: 1349px;\nz-index: -1;\n}\n.fusion-column-wrapper{\nbackground-color: rgba(109, 109, 109, 0);\nbackground-position: left top;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n\n}\n.fusion-section-separator.section-separator.fusion-section-separator-with-offset {\nmargin-left: calc((100vw - 100%) / -2);\nmargin-right: calc((100vw - 100%) / -2);\npadding: 0;\n}\n\n.value .icon {\n  text-align: center;\n}\n.value .sep-single {\n  border-bottom-style: solid;\n  border-color: #fed03d;\n  border-left-style: solid;\n  border-right-style: solid;\n  margin: 12px auto 30px;\n  max-width: 206px;\n  width: 100%;\n}\n.value .content-box-heading {\n  text-align: center;\n}\n\n.value {\n  background-color: #f5f5f5;\n  padding-bottom: 90px;\n  padding-top: 90px;\n}\n.value .row.text-center {\n  margin-bottom: 60px;\n}\n\n.heading-with-icon .fontawesome-icon::after, .heading-with-icon .fontawesome-icon::after {\n  -webkit-animation: 1.3s ease-out 75ms normal none 1 running fusionSonarEffect;\n          animation: 1.3s ease-out 75ms normal none 1 running fusionSonarEffect;\n  display: inline-block;\n}\n#demos .owl-carousel .item {\n  background: #4dc7a0 none repeat scroll 0 0;\n  height: 10rem;\n  padding: 1rem;\n}\n.wine {\n  background: rgba(0, 0, 0, 0) url(" + __webpack_require__("../../../../../src/assets/img/wine.jpg") + ") no-repeat scroll 0 0;\n  display: block;\n  overflow: hidden;\n  padding: 80px 0;\n}\n.wine .sep-single {\n  border-bottom-style: solid;\n  border-color: #fed03d;\n  border-left-style: solid;\n  border-right-style: solid;\n  left: 20px;\n  margin: 12px auto 30px;\n  max-width: 206px;\n  position: absolute;\n  text-align: left;\n  width: 100%;\n}\n.wine .fusion-button-text {\n  background: #aad75b linear-gradient(to top, #cce890, #aad75b) repeat scroll 0 0;\n  color: #577810;\n  display: block;\n  max-width: 250px;\n  overflow: hidden;\n  padding: 10px 0 12px;\n  text-align: center;\n}\n.fusion-column-content > h3 {\n  padding-top: 40px;\n}\nfooter h4 {\n  color: #fed03d;\n}\n.fusion-footer {\n  background-color: #1e1e1e;\n  border-top: 15px solid;\n}\nfooter {\n  display: block;\n  overflow: hidden;\n  padding: 60px 0;\n}\nfooter h4 {\n  color: #fed03d;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.fusion-checklist {\n  list-style: outside none none;\n  padding: 0;\n}\n.icon-wrapper.circle-no {\n  display: block;\n  float: left;\n  overflow: hidden;\n}\n.textwidget p, .textwidget a, .fusion-li-item-content {\n  color: #747474;\n}\n.fusion-li-item {\n  margin-bottom: 10px;\n}\n.soci {\n  list-style: outside none none;\n  padding: 0;\n}\n.soci > li {\n  color: #747474;\n  display: inline-block;\n  font-size: 22px;\n  padding-right: 17px;\n}\n#footer {\n  background-color: #111111;\n  padding: 20px 0;\n}\n.social {\n  float: right;\n  list-style: outside none none;\n  padding: 0;\n}\n.social > li {\n  color: #545454;\n  display: inline-block;\n  padding-left: 20px;\n}\n#footer {\n  background-color: #111111;\n  padding: 20px 0 0;\n}\n#footer .col-md-6 > span {\n  color: #545454;\n}\n\n.abt .back span {\n  background: #ffe07b none repeat scroll 0 0;\n  display: block;\n  margin-top: 10px;\n  overflow: hidden;\n  padding: 6px 20px;\n  color: #577810;\n}\n\n.abt .back  .fusion-button.button-4{\nwidth:auto;\n display: block;\n  overflow: hidden;\n  padding: 10px 40px;\n}\n.log > a {\n  background: #cce890 linear-gradient(to top, #aad75b, #cce890) repeat scroll 0 0;\n  border-color: #577810;\n  border-radius: 0;\n  border-style: solid;\n  border-width: 0;\n  color: #577810;\n  display: block;\n  float: left;\n  font-size: 10px;\n  letter-spacing: 1px;\n  margin-right: 7px;\n  overflow: hidden;\n  padding: 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.2s ease 0s;\n  width: 140px;\n}\n.log {\n  display: block;\n  overflow: hidden;\n  padding: 40px 0;\n}\n@media screen and (min-width: 780px) {\n.bg-inverse {\n  background-color: white !important;\n  float: right;\n  padding: 30px 0;\n}}\n\n@media screen and (max-width: 640px) {\n.bg-inverse {\n  padding: 10px 0 50px;\n  right: 0;\n  top: 0;\n}\n.fh5co-lead {\n  padding: 50px 0 0;\n  text-align: center;\n}\n.button-flat.button-1 {\n  display: block;\n  overflow: hidden;\n  padding: 10px 13px;\n  margin: 0!important;\n}\n.button-flat.button-2 {\n  display: block;\n  margin-top: 20px;\n\n}\n.log {\n  display: block;\n  margin-bottom: 20px;\n  margin-left: 5%;\n  margin-right: auto;\n  margin-top: 0;\n  overflow: hidden;\n  padding: 0;\n  text-align: center;\n}\n.navbar-brand {\n  display: block;\n  float: none;\n  padding: 20px 0;\n  text-align: center;\n  width: 100%;\n}\n.log > a {\n  width: 46%;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/frontend.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"item\" style=\"background-image:url(assets/img/front-page-image-v2.jpg)\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-md-offset-2\">\n        <div class=\"fh5co-owl-text-wrap\">\n          <div class=\"fh5co-owl-text text-center to-animate\">\n            <h1 class=\"fh5co-lead\">PROTECT. PREVENT. SECURE</h1>\n            <h2 class=\"fh5co-sub-lead\">Protect Products. Prevent Loss. Secure Your Bottom Line.</h2>\n            <a class=\"fusion-button button-flat fusion-button-square button-xlarge button-custom button-1\" target=\"_self\" routerLink=\"/products\"><span class=\"fusion-button-text\">Find out about the Keepsafe Advantage. </span></a><a class=\"fusion-button button-flat fusion-button-square button-xlarge button-custom button-2\" target=\"_self\" href=\"http://www.productprotectionsolutions.com/contact-us\"><span class=\"fusion-button-text\">CONTACT US TODAY</span></a> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"Guaranteed\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12 col-md-offset-2\">\n      <h2 style=\"font-weight: 300; text-align: center;\" data-fontsize=\"32\" data-lineheight=\"41\"><span style=\"color: #ffffff;\">Driven to Find Your Best Product Protection Solutions. Guaranteed.</span></h2>\n    </div>\n  </div>\n</div>\n<div class=\"container abt\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-8 col-md-offset-2\">.\n      <h2 style=\"text-align: center;\" data-fontsize=\"32\" data-lineheight=\"41\">Products Proven to Secure Any Product.<br/>\n        Guaranteed.</h2>\n      <div class=\"fusion-sep-clear\"></div>\n      <div class=\"fusion-separator sep-single sep-solid\"> </div>\n      <p>PPS is focused on providing both consultative and physical loss prevention solutions that include AM, RF and RFID enabled products. We want to work with our customers to find the best solutions to fit their needs.</p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"card-container col-md-3\">\n        <div class=\"card\">\n          <div class=\"front\">\n            <div class=\"flip-box-grafix flip-box-circle\"><i class=\"fa fa-suitcase\" style=\"color:#55a045;\"></i></div>\n            <h2 class=\"flip-box-heading\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"32\" data-lineheight=\"41\">Safers</h2>\n            <span>KEEPSAFE SERIES</span> </div>\n          <div class=\"back\">\n            <h3 class=\"flip-box-heading-back\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"18\" data-lineheight=\"27\">Safers</h3>\n            <a class=\"fusion-button button-flat fusion-button-square button-large button-custom button-3\" target=\"_self\" href=\"http://www.productprotectionsolutions.com/safers\"><span class=\"fusion-button-text\">View Product</span></a></div>\n        </div>\n      </div>\n      <div class=\"card-container col-md-3\">\n        <div class=\"card\">\n          <div class=\"front\">\n            <div class=\"flip-box-grafix flip-box-circle\"><i class=\"fa fa-beer\" style=\"color:#55a045;\"></i></div>\n            <h2 class=\"flip-box-heading\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"32\" data-lineheight=\"41\">Beverages</h2>\n            <span>KEEPSAFE SERIES</span> </div>\n          <div class=\"back\">\n            <h3 class=\"flip-box-heading-back\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"18\" data-lineheight=\"27\">Bottle Protecton</h3>\n            <a class=\"fusion-button button-flat fusion-button-square button-large button-custom button-3\" target=\"_self\" href=\"http://www.productprotectionsolutions.com/safers\"><span class=\"fusion-button-text\">View Product</span></a></div>\n        </div>\n      </div>\n      <div class=\"card-container col-md-3\">\n        <div class=\"card\">\n          <div class=\"front\">\n            <div class=\"flip-box-grafix flip-box-circle\"><i class=\"fa fa-black-tie\" style=\"color:#55a045;\"></i></div>\n            <h2 class=\"flip-box-heading\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"32\" data-lineheight=\"41\">H-Tags</h2>\n            <span>KEEPSAFE SERIES</span> </div>\n          <div class=\"back\">\n            <h3 class=\"flip-box-heading-back\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"18\" data-lineheight=\"27\">Titan H-Tags & Detachers</h3>\n            <a class=\"fusion-button button-flat fusion-button-square button-large button-custom button-3\" target=\"_self\" href=\"http://www.productprotectionsolutions.com/safers\"><span class=\"fusion-button-text\">View Product</span></a></div>\n        </div>\n      </div>\n      <div class=\"card-container col-md-3\">\n        <div class=\"card\">\n          <div class=\"front\">\n            <div class=\"flip-box-grafix flip-box-circle\"><i class=\"fa fa-dropbox\" style=\"color:#55a045;\"></i></div>\n            <h2 class=\"flip-box-heading\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"32\" data-lineheight=\"41\">Alarms</h2>\n            <span>KEEPSAFE SERIES</span> </div>\n          <div class=\"back\">\n            <h3 class=\"flip-box-heading-back\" style=\"color: rgb(51, 51, 51);\" data-fontsize=\"18\" data-lineheight=\"27\">Alarm Series</h3>\n            <a class=\"fusion-button button-flat fusion-button-square button-large button-custom button-3\" target=\"_self\" href=\"http://www.productprotectionsolutions.com/safers\"><span class=\"fusion-button-text\">View Product</span></a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"fusion-fullwidth fullwidth-box fusion-blend-mode fusion-parallax-up nonhundred-percent-fullwidth bg-parallax-parent\" >\n  <div class=\"parallax-inner\" ></div>\n  <div class=\"fusion-builder-row fusion-row \">\n    <div class=\"fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last 1_1\" style=\"margin-top:0px;margin-bottom:0px;\">\n      <div class=\"fusion-column-wrapper\">\n        <div class=\"fusion-section-separator section-separator fusion-section-separator-with-offset\" style=\"padding:0;margin-left:calc( (100vw - 100% ) / -2  );margin-right:calc( (100vw - 100% ) / -2   );\">\n          <svg id=\"bigHalfCircleCandy\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" style=\"fill:#ffffff;padding:0;\">\n            <path d=\"M0 0 C55 180 100 0 100 0 Z\"/>\n          </svg>\n        </div>\n        <div class=\"fusion-clearfix\"></div>\n      </div>\n    </div>\n    <div class=\"fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last fusion-column-no-min-height 1_1\" style=\"margin-top:100px;margin-bottom:55px;\">\n      <div class=\"fusion-column-wrapper\" >\n        <div class=\"fusion-clearfix\"></div>\n      </div>\n    </div>\n    <div class=\"fusion-layout-column fusion_builder_column fusion_builder_column_1_1  fusion-one-full fusion-column-first fusion-column-last 1_1\" style=\"margin-top:0px;margin-bottom:0px;\">\n      <div class=\"fusion-column-wrapper\" >\n        <div class=\"fusion-section-separator section-separator fusion-section-separator-with-offset\" style=\"padding:0;margin-left:calc( (100vw - 100% ) / -2  );margin-right:calc( (100vw - 100% ) / -2   );\">\n          <svg id=\"bigHalfCircleCandy\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" style=\"fill:#ffffff;padding:0;\">\n            <path d=\"M0 100 C40 0 60 0 100 100 Z\"/>\n          </svg>\n        </div>\n        <div class=\"fusion-clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"value\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <h2 style=\"text-align: center;\" data-fontsize=\"32\" data-lineheight=\"41\">Our Core Values</h2>\n      </div>\n      <div class=\"fusion-sep-clear\"></div>\n      <div class=\"fusion-separator sep-single sep-solid\"> </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4 fusion-content-box-hover\">\n        <div class=\"col content-wrapper link-area-link-icon icon-hover-animation-pulsate\" style=\"background-color:rgba(255,255,255,0);\" data-animationoffset=\"100%\">\n          <div class=\"heading heading-with-icon icon-left\">\n            <div class=\"icon\"><i style=\"border-color:#333333;border-width:0px;background-color:#4ea4a5;height:120px;width:120px;line-height:120px;border-radius:50%;color:#ffffff;font-size:60px;\" class=\"fa fontawesome-icon fa-home circle-yes\"></i></div>\n            <h2 class=\"content-box-heading\" style=\"font-size:16px;line-height:21px;\" data-inline-fontsize=\"true\" data-inline-lineheight=\"true\" data-fontsize=\"16\" data-lineheight=\"21\">Building Relationships</h2>\n          </div>\n          <div class=\"fusion-clearfix\"></div>\n          <div class=\"content-container\" style=\"color:#747474;\">\n            <div class=\"fusion-sep-clear\"></div>\n            <div class=\"fusion-separator sep-single sep-solid\" style=\"border-color:#8f8f8f;border-top-width:2px;margin-left: auto;margin-right: auto;margin-top:0px;margin-bottom:20px;width:100%;max-width:20px;\"></div>\n            We value our customers and want to work together to find the LP or EAS solution that provides the best protection for your greatest assets. Our success is built upon your successes.</div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 fusion-content-box-hover \">\n        <div class=\"col content-wrapper link-area-link-icon icon-hover-animation-pulsate\" style=\"background-color:rgba(255,255,255,0);\" data-animationoffset=\"100%\">\n          <div class=\"heading heading-with-icon icon-left\">\n            <div class=\"icon\"><i style=\"border-color:#333333;border-width:0px;background-color:#a7cf47;height:120px;width:120px;line-height:120px;border-radius:50%;color:#ffffff;font-size:60px;\" class=\"fa fontawesome-icon fa-lightbulb-o circle-yes\"></i></div>\n            <h2 class=\"content-box-heading\" style=\"font-size:16px;line-height:21px;\" data-inline-fontsize=\"true\" data-inline-lineheight=\"true\" data-fontsize=\"16\" data-lineheight=\"21\">Creative Solutions</h2>\n          </div>\n          <div class=\"fusion-clearfix\"></div>\n          <div class=\"content-container\" style=\"color:#747474;\">\n            <div class=\"fusion-sep-clear\"></div>\n            <div class=\"fusion-separator sep-single sep-solid\" style=\"border-color:#8f8f8f;border-top-width:2px;margin-left: auto;margin-right: auto;margin-top:0px;margin-bottom:20px;width:100%;max-width:20px;\"></div>\n            We are the little guys with big ideas. We work to find creative ways to solve your LP problems, even where no solution currently exists.</div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-4 fusion-content-box-hover  content-box-column-last\">\n        <div class=\"col content-wrapper link-area-link-icon icon-hover-animation-pulsate\" style=\"background-color:rgba(255,255,255,0);\" data-animationoffset=\"100%\">\n          <div class=\"heading heading-with-icon icon-left\">\n            <div class=\"icon\"><i style=\"border-color:#333333;border-width:0px;background-color:#4e6da5;height:120px;width:120px;line-height:120px;border-radius:50%;color:#ffffff;font-size:60px;\" class=\"fa fontawesome-icon fa-sun-o circle-yes\"></i></div>\n            <h2 class=\"content-box-heading\" style=\"font-size:16px;line-height:21px;\" data-inline-fontsize=\"true\" data-inline-lineheight=\"true\" data-fontsize=\"16\" data-lineheight=\"21\">Preventing Loss</h2>\n          </div>\n          <div class=\"fusion-clearfix\"></div>\n          <div class=\"content-container\" style=\"color:#747474;\">\n            <div class=\"fusion-sep-clear\"></div>\n            <div class=\"fusion-separator sep-single sep-solid\" style=\"border-color:#8f8f8f;border-top-width:2px;margin-left: auto;margin-right: auto;margin-top:0px;margin-bottom:20px;width:100%;max-width:20px;\"></div>\n            Preventing loss so that you can realize greater profitability is our primary mission. We want products to be available for your customers to purchase, without diminishing their overall experience.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"wine\">\n<div class=\"container\">\n  <div class=\"row\"> <div class=\"col-md-8\">\n      <div class=\"fusion-column-content\">\n        <h1 style=\"font-weight: 300;\" data-fontsize=\"34\" data-lineheight=\"47\"><span style=\"color: #ffffff;\">Building&nbsp;Partnerships</span></h1>\n        <div class=\"fusion-sep-clear\"></div>\n      <div class=\"fusion-separator sep-single sep-solid\"> </div>\n        <h3 data-fontsize=\"20\" data-lineheight=\"29\"><span style=\"color: #ffffff;\">At PPS, we strive to build long-lasting partnerships with our customers by listening to their needs and finding strategic solutions that work.</span></h3>\n      </div>\n    </div>\n<div class=\"col-md-4\">\n  <div class=\"fusion-column-wrapper\">\n      <div class=\"fusion-column-content\">\n        <div class=\"fusion-button-wrapper fusion-alignleft\">\n           <a class=\"fusion-button button-flat fusion-button-square button-xlarge button-default button-7\" target=\"_self\" title=\"Contact Us\" href=\"http://www.productprotectionsolutions.com/#\"><span class=\"fusion-button-text\">CONTACT US TODAY</span></a></div>\n        <div class=\"fusion-sep-clear\"></div>\n        <div class=\"fusion-separator fusion-full-width-sep sep-none\" style=\"margin-left: auto;margin-right: auto;margin-top:10px;\"></div>\n        <p style=\"text-align: left;\"><span style=\"color: #ffffff;\">Only takes a few seconds!</span></p>\n      </div>\n</div></div>\n</div>\n</div>\n</div>\n<div class=\"fusion-footer\">\n  <footer role=\"contentinfo\" class=\"fusion-footer-widget-area fusion-widget-area\">\n  <div class=\"container\">\n  <div class=\"row\">\n  \t<div class=\"col-md-3\"> <h4 class=\"widget-title\" data-fontsize=\"15\" data-lineheight=\"22\">The ‘Keepsafe&trade; Advantage’</h4>\n            <div class=\"textwidget\">\n              <p>Learn more about the Keepsafe&trade; Advantage and reduce shrink in your retail location.</p>\n\n            </div></div><div class=\"col-md-3\"> <h4 class=\"widget-title\" data-fontsize=\"15\" data-lineheight=\"22\">Social Media</h4>\n            <ul class=\"soci\"><li><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li><li><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></li></ul>\n            </div><div class=\"col-md-3\"><h4 class=\"widget-title\" data-fontsize=\"15\" data-lineheight=\"22\">CONTACT US TODAY</h4>\n            <div class=\"textwidget\">\n              <ul class=\"fusion-checklist fusion-checklist-1\" style=\"font-size:14px;line-height:23.8px;\">\n                <li class=\"fusion-li-item\"><span style=\"height:23.8px;width:23.8px;margin-right:9.8px;\" class=\"icon-wrapper circle-no\"><i class=\"fusion-li-icon fa fa-globe\" style=\"color:#717171;\"></i></span>\n                  <div class=\"fusion-li-item-content\" style=\"margin-left:33.6px;\">\n                    <p></p>\n                    <p>Corporate Location<br>\n                      129 Seth Thomas Lane<br>\n                      Suite #2<br>\n                      Swansboro, North Carolina 28584</p>\n                    <p></p>\n                  </div>\n                </li>\n                <li class=\"fusion-li-item\"><span style=\"height:23.8px;width:23.8px;margin-right:9.8px;\" class=\"icon-wrapper circle-no\"><i class=\"fusion-li-icon fa fa-envelope-o\" style=\"color:#717171;\"></i></span>\n                  <div class=\"fusion-li-item-content\" style=\"margin-left:33.6px;\"><a style=\"padding: 0; border-bottom: none;\" href=\"mailto:info@productprotectionsolutions.com\">info@productprotectionsolutions.com</a></div>\n                </li>\n                <li class=\"fusion-li-item\"><span style=\"height:23.8px;width:23.8px;margin-right:9.8px;\" class=\"icon-wrapper circle-no\"><i class=\"fusion-li-icon fa fa-phone\" style=\"color:#717171;\"></i></span>\n                  <div class=\"fusion-li-item-content\" style=\"margin-left:33.6px;\"><a style=\"padding: 0; border-bottom: none;\" href=\"tel:+12522269843\">(252) 226 &ndash; 9843</a></div>\n                </li>\n                <li class=\"fusion-li-item\"><span style=\"height:23.8px;width:23.8px;margin-right:9.8px;\" class=\"icon-wrapper circle-no\"><i class=\"fusion-li-icon fa fa-clock-o\" style=\"color:#717171;\"></i></span>\n                  <div class=\"fusion-li-item-content\" style=\"margin-left:33.6px;\">Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM EST</div>\n                </li>\n                <li class=\"fusion-li-item\"><span style=\"height:23.8px;width:23.8px;margin-right:9.8px;\" class=\"icon-wrapper circle-no\"><i class=\"fusion-li-icon fa fa-clock-o\" style=\"color:#717171;\"></i></span>\n                  <div class=\"fusion-li-item-content\" style=\"margin-left:33.6px;\">Saturday &ndash; Sunday: CLOSED</div>\n                </li>\n              </ul>\n            </div></div><div class=\"col-md-3\"><h4 class=\"widget-title\" data-fontsize=\"15\" data-lineheight=\"22\">FIND US</h4>\n            <div class=\"textwidget\">\n              <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544.7738940443502!2d-77.15677506285691!3d34.70934342152222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a8e2d318f3c50b%3A0x9e2234a3a6e22e67!2s129+Seth+Thomas+Ln%2C+Swansboro%2C+NC+28584!5e0!3m2!1sen!2sus!4v1495500903707\" style=\"border:0\" allowfullscreen=\"\" width=\"300\" height=\"300\" frameborder=\"0\"></iframe>\n            </div></div>\n  </div>\n  </div>\n  </footer>\n</div>\n<div id=\"footer\" class=\"fusion-footer-copyright-area\">\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-6\">\n<span>COPYRIGHT 2017 Product Protection Solutions &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ALL RIGHTS RESERVED&nbsp;&nbsp;\t</span></div>\n<div class=\"col-md-6\">\n<div class=\"fusion-social-networks\">\n<ul class=\"social\"><li><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\n<li><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li>\n<li><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></li>\n<li><i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i></li>\n<li><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></li>\n</ul>\n</div> <!-- fusion-row -->\n</div>\n</div>\n</div></div>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/frontend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrontendComponent = (function () {
    function FrontendComponent(_front) {
        this._front = _front;
        this.settings = {};
    }
    FrontendComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    FrontendComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings);
            }
        }, function (err) { return console.log(err); });
    };
    FrontendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-frontend',
            template: __webpack_require__("../../../../../src/app/frontend/frontend.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/frontend.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */]])
    ], FrontendComponent);
    return FrontendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/frontend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FrontendService = (function () {
    function FrontendService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
    }
    FrontendService.prototype.getSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-settings/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.getCats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-cat/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.getCatsData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getCatsdata/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.getWhere = function (id, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-where/id/' + id + '/type/' + type, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.getProducts = function (v) {
        // console.log(v);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('ApiKey','w8844ssw4sgo8oogkscw0csws4cwo8cs004ock0s');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/productListing/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.addToCart = function (v) {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
        }
        // console.log(v);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addProductAddToCart/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.productDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('ApiKey','w8844ssw4sgo8oogkscw0csws4cwo8cs004ock0s');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getProductDetail/' + id, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.getCartDetails = function (uid) {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getAllProductFromAddToCart/' + uid, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.updateCart = function (v) {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
        }
        // console.log(v);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateAddToCartProductQty/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.SaveMyOrders = function (v) {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
        }
        // console.log(v);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/userStoreSaveMyOrders/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    FrontendService.prototype.delete = function (id, type) {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('ApiKey', this.token['apiKey']);
            return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/delete/id/' + id + '/type/' + type, { headers: headers }).map(function (res) { return res.json() || {}; });
        }
    };
    FrontendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FrontendService);
    return FrontendService;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  /*padding-top: 20px;*/\n  padding-bottom: 20px;\n}\n\n.navbar {\n  margin-bottom: 20px;\n}\n\n\n\n/* CSS Document */\n.navbar-brand {\n  display: block;\n  float: left;\n  padding: 20px 0;\n}\na:hover {\n  text-decoration: none;\n}\n.nav-item a {\n  color: black ;\n}\n.nav-item a {\n  padding: 10px 10px !important;\n}\n.nav-item.cont a {\n  background: #cce890 linear-gradient(to top, #aad75b, #cce890) repeat scroll 0 0;\n  border-color: #577810;\n  border-radius: 0;\n  border-style: solid;\n  border-width: 0;\n  color: #577810;\n  display: block;\n  letter-spacing: 1px;\n  overflow: hidden;\n  padding: 10px 40px !important;\n  text-transform: uppercase;\n  transition: all 0.2s ease 0s;\n}\n.button-flat.button-1 {\n  background-color: #333333;\n  color: white;\n  margin: 20px !important;\n  overflow: hidden;\n  padding: 10px;\n}\n.button-flat.button-2 {\nbackground-image: linear-gradient( to top, #aad75b, #cce890 );\n  padding: 10px 60px;\n  color: white;\n}\n.button-flat .button-2:hover,.button-2:focus,.fusion-button.button-2:active{background: #333;}.fusion-button.button-2{width:auto;}\n\n.Guaranteed {\n  background-color: #29a148;\n  display: block;\n  overflow: hidden;\n  padding: 50px 0 80px;\n}\n.owl-carousel-fullwidth .item .fh5co-owl-text {\n  display: table-cell;\n  position: relative;\n  vertical-align: middle;\n  z-index: 10;\n}\n.fh5co-owl-text.text-center.to-animate {\n  display: block;\n  min-height: 550px;\n  overflow: hidden;\n  text-align: center !important;\n}\n.fh5co-lead {\n  color: white;\n  display: block;\n  font-weight: bold;\n  overflow: hidden;\n  padding: 180px 0 0;\n  text-align: center;\n}\n.fh5co-sub-lead {\n  color: #fed03d;\n  margin-bottom: 30px;\n}\n.owl-controls {\n  display: none;\n}\n.text-center .col-md-8 {\n  margin: 0 auto;\n  text-align: center;\n}\n.fh5co-section-lead {\n  color: #333333;\n}\n.abt {\n  margin-top: 18px;\n  padding-top: 3%;\n}\n.fusion-sep-clear {\n  clear: both;\n  display: block;\n  font-size: 0;\n  height: 1px;\n  line-height: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.abt .sep-single {\n  border-bottom-style: solid;\n  border-color: #29a148;\n  border-left-style: solid;\n  border-right-style: solid;\n  margin: 15px auto 30px;\n  max-width: 206px;\n  width: 100%;\n}\n.value .content-box-heading {\n  padding: 20px 0 10px;\n}\n\n.abt ul {\n  text-align: left;\n}\n\n\n\n\n\n\n\n.card-container {\n    display: inline-block;\n    margin: 0 auto;\n    padding: 0 12px;\n    -webkit-perspective: 900px;\n            perspective: 900px;\n    text-align: center;\n}\n\n.card {\n  height: 250px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: all 0.6s ease 0s;\n  width: 100%;\n  border: none;\n}\n.flip-box-circle i {\n  background-color: black;\n  border-radius: 30px;\n  border-right: 30px none;\n  font-size: 30px;\n  height: 62px;\n  padding: 14px 0;\n  width: 60px;\n}\n\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background: #f5f5f5 none repeat scroll 0 0;\n  border-radius: 5px;\n  color: white;\n  height: 250px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.front > span {\n  color: black;\n}\n.flip-box-grafix.flip-box-circle {\n  padding: 40px 0;\n}\n\n.back {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #9db668;\n  display: block;\n  font-size: 18px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.card-container:hover .card {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n\n.fusion-button-wrapper.fusion-aligncenter {\n  display: block;\n  text-align: center;\n}\n.back h3 {\n  display: block;\n  font-size: 24px;\n  overflow: hidden;\n  padding: 70px 0 10px;\n  text-align: center;\n}\n/*.fusion-button-text {\nbackground: #aad75b;\nbackground-image: -webkit-gradient( linear, left bottom, left top, from( #cce890 ), to( #aad75b ) );\nbackground-image: -webkit-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image:   -moz-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image:     -o-linear-gradient( bottom, #cce890, #aad75b );\nbackground-image: linear-gradient( to top, #cce890, #aad75b );\n}*/\n.back .fusion-button.button-3 {\n  display: block;\n  overflow: hidden;\n  width: 80%;\n  margin: 0 auto;\n}\n/*.fusion-button-text {\n  background: #aad75b linear-gradient(to top, #cce890, #aad75b) repeat scroll 0 0;\n  display: block;\n  overflow: hidden;\n  padding: 10px 40px;\n}*/\n\n.bg-parallax-parent{\nbackground-color: rgba(255, 255, 255, 0);\nbackground-image: none;\nbackground-position: center center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nborder-bottom: 0 solid #eae9e9;\nborder-color: #eae9e9;\nborder-top: 0 solid #eae9e9;\noverflow: hidden;\npadding: 0 30px;\nposition: relative;\nz-index: 1;\nmargin-top:50px;\n}\n.parallax-inner{\nbackground-image: url(\"http://www.productprotectionsolutions.com/wp-content/uploads/2017/07/wine-front-page-bg-1.jpg\");\nbackground-position: center center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nheight: 475.8px;\nleft: 0;\nmin-height: 150px;\nopacity: 1;\npointer-events: none;\nposition: absolute;\ntop: 0;\n-webkit-transform: translate3d(0px, -26.4638px, 0px);\n        transform: translate3d(0px, -26.4638px, 0px);\nwidth: 1349px;\nz-index: -1;\n}\n.fusion-column-wrapper{\nbackground-color: rgba(109, 109, 109, 0);\nbackground-position: left top;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n\n}\n.fusion-section-separator.section-separator.fusion-section-separator-with-offset {\nmargin-left: calc((100vw - 100%) / -2);\nmargin-right: calc((100vw - 100%) / -2);\npadding: 0;\n}\n\n.value .icon {\n  text-align: center;\n}\n.value .sep-single {\n  border-bottom-style: solid;\n  border-color: #fed03d;\n  border-left-style: solid;\n  border-right-style: solid;\n  margin: 12px auto 30px;\n  max-width: 206px;\n  width: 100%;\n}\n.value .content-box-heading {\n  text-align: center;\n}\n\n.value {\n  background-color: #f5f5f5;\n  padding-bottom: 90px;\n  padding-top: 90px;\n}\n.value .row.text-center {\n  margin-bottom: 60px;\n}\n\n.heading-with-icon .fontawesome-icon::after, .heading-with-icon .fontawesome-icon::after {\n  -webkit-animation: 1.3s ease-out 75ms normal none 1 running fusionSonarEffect;\n          animation: 1.3s ease-out 75ms normal none 1 running fusionSonarEffect;\n  display: inline-block;\n}\n#demos .owl-carousel .item {\n  background: #4dc7a0 none repeat scroll 0 0;\n  height: 10rem;\n  padding: 1rem;\n}\n.wine {\n  background: rgba(0, 0, 0, 0) url(" + __webpack_require__("../../../../../src/assets/img/wine.jpg") + ") no-repeat scroll 0 0;\n  display: block;\n  overflow: hidden;\n  padding: 80px 0;\n}\n.wine .sep-single {\n  border-bottom-style: solid;\n  border-color: #fed03d;\n  border-left-style: solid;\n  border-right-style: solid;\n  left: 20px;\n  margin: 12px auto 30px;\n  max-width: 206px;\n  position: absolute;\n  text-align: left;\n  width: 100%;\n}\n.wine .fusion-button-text {\n  background: #aad75b linear-gradient(to top, #cce890, #aad75b) repeat scroll 0 0;\n  color: #577810;\n  display: block;\n  max-width: 250px;\n  overflow: hidden;\n  padding: 10px 0 12px;\n  text-align: center;\n}\n.fusion-column-content > h3 {\n  padding-top: 40px;\n}\nfooter h4 {\n  color: #fed03d;\n}\n.fusion-footer {\n  background-color: #1e1e1e;\n  border-top: 15px solid;\n}\nfooter {\n  display: block;\n  overflow: hidden;\n  padding: 60px 0;\n}\nfooter h4 {\n  color: #fed03d;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.fusion-checklist {\n  list-style: outside none none;\n  padding: 0;\n}\n.icon-wrapper.circle-no {\n  display: block;\n  float: left;\n  overflow: hidden;\n}\n.textwidget p, .textwidget a, .fusion-li-item-content {\n  color: #747474;\n}\n.fusion-li-item {\n  margin-bottom: 10px;\n}\n.soci {\n  list-style: outside none none;\n  padding: 0;\n}\n.soci > li {\n  color: #747474;\n  display: inline-block;\n  font-size: 22px;\n  padding-right: 17px;\n}\n#footer {\n  background-color: #111111;\n  padding: 20px 0;\n}\n.social {\n  float: right;\n  list-style: outside none none;\n  padding: 0;\n}\n.social > li {\n  color: #545454;\n  display: inline-block;\n  padding-left: 20px;\n}\n#footer {\n  background-color: #111111;\n  padding: 20px 0 0;\n}\n#footer .col-md-6 > span {\n  color: #545454;\n}\n\n.abt .back span {\n  background: #ffe07b none repeat scroll 0 0;\n  display: block;\n  margin-top: 10px;\n  overflow: hidden;\n  padding: 6px 20px;\n  color: #577810;\n}\n\n.abt .back  .fusion-button.button-4{\nwidth:auto;\n display: block;\n  overflow: hidden;\n  padding: 10px 40px;\n}\n.log > a {\n  background: #cce890 linear-gradient(to top, #aad75b, #cce890) repeat scroll 0 0;\n  border-color: #577810;\n  border-radius: 0;\n  border-style: solid;\n  border-width: 0;\n  color: #577810;\n  display: block;\n  float: left;\n  font-size: 10px;\n  letter-spacing: 1px;\n  margin-right: 7px;\n  overflow: hidden;\n  padding: 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.2s ease 0s;\n  width: 140px;\n}\n.log {\n  display: block;\n  overflow: hidden;\n  padding: 40px 0;\n}\n@media screen and (min-width: 780px) {\n.bg-inverse {\n  background-color: white !important;\n  float: right;\n  padding: 30px 0;\n}}\n\n@media screen and (max-width: 640px) {\n.bg-inverse {\n  padding: 10px 0 50px;\n  right: 0;\n  top: 0;\n}\n.fh5co-lead {\n  padding: 50px 0 0;\n  text-align: center;\n}\n.button-flat.button-1 {\n  display: block;\n  overflow: hidden;\n  padding: 10px 13px;\n  margin: 0!important;\n}\n.button-flat.button-2 {\n  display: block;\n  margin-top: 20px;\n\n}\n.log {\n  display: block;\n  margin-bottom: 20px;\n  margin-left: 5%;\n  margin-right: auto;\n  margin-top: 0;\n  overflow: hidden;\n  padding: 0;\n  text-align: center;\n}\n.navbar-brand {\n  display: block;\n  float: none;\n  padding: 20px 0;\n  text-align: center;\n  width: 100%;\n}\n.log > a {\n  width: 46%;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"background-color:#fff\">\n  <a class=\"navbar-brand\" href=\"#\">\n<img src=\"assets/img/PPS-Logo-1.png\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cart\">Cart</a>\n      </li>\n    </ul>\n  </div>\n\n</nav> -->\n<div class=\"item\" style=\"background-image:url(assets/img/Banner.png);\nheight: 178px;\nbackground-size: 100% 100%;\nbackground-repeat: no-repeat; display:none\"></div>\n<div class=\"navbar-outer\" >\n  <div class=\"container\">\n    <div class=\"row align-items-md-center\">\n      <div class=\"col-md-8 col-lg-6 \"> <a class=\"navbar-brand\" routerLink=\"/\">\n        <img src=\"assets/img/PPS-Logo-1.png\"/></a>\n         <div class=\"log\">\n        <a *ngIf=\"!LoggedIn\" class=\"ppd\" routerLink=\"/portal\" style=\"width:125px\">PPD Portal</a>\n        <a *ngIf=\"!LoggedIn\" class=\"ppd\" routerLink=\"/customer-login\" style=\"width:137px\">Customer Login </a>\n      </div></div>\n      <div class=\"col-lg-6 col-md-4\" >\n        <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n           \n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> <span class=\"navbar-toggler-icon\"></span> </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"!LoggedIn\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\">Newsletter</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/faq\">FAQ</a> </li>\n              <li class=\"nav-item active\"> <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\">About</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link \" href=\"#\">News</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\">Product</a> </li>\n              <li class=\"nav-item cont\"> <a class=\"nav-link \" href=\"#\">Contact</a> </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"LoggedIn && token.userType == 2\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\">Newsletter</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/faq\">FAQ</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/profile/orders\">Home</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\">Products</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/profile/cart\">My Cart <i class=\"fa fa-shopping-cart\"></i></a> </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"LoggedIn && token.userType == 3\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\">Newsletter</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/faq\">FAQ</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/dashboard\">Home</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\">Products</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/dashboard/cart\">My Cart <i class=\"fa fa-shopping-cart\"></i></a> </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"LoggedIn && token.userType == 9\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\">Newsletter</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/faq\">FAQ</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/dashboard\">Home</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/products\">Products</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/dashboard/cart\">My Cart <i class=\"fa fa-shopping-cart\"></i></a> </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"LoggedIn && token.userType == 4\">\n              <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\">Newsletter</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/faq\">FAQ</a> </li>\n              <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/dashboard\">Home</a> </li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(activatedRoute, fb, router, _front, toasterService) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this._front = _front;
        this.ProductDetails = {};
        this.settings = {};
        this.ProductLoading = false;
        this.catalogue = '';
        this.ProductId = '';
        this.productImagePath = '';
        this.ChoosedVariation = '';
        this.ChoosedVariationname = '';
        this.quantity = 1;
        this.LoggedIn = false;
        this.toasterService = toasterService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
            console.log(tkn);
            console.log(this.token);
            this.LoggedIn = true;
        }
        this.getSettings();
    };
    HeaderComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['catalogue']);
                _this.catalogue = _this.settings['catalogue'];
            }
        }, function (err) { return console.log(err); });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/frontend/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/header/header.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/product-details/product-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-to-cart\n{\n  border-radius: 3px !important;\n}\n\nul.attachments\n{\n  list-style: none;\n  padding-left: 0px;\n  margin-top: 20px;\n}\n\nul.attachments li\n{\n  font-size: 14px;\n  border: 1px #ddd solid;\n  margin-bottom: 9px;\n  position: relative;\n  margin-right: 10px;\n  display: inline-block;\n}\n\nul.attachments li img\n{\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<toaster-container></toaster-container>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"(ProductDetails | json) == '{}'\">\n      <div class=\"loader\">\n        <div class=\"loader-inner ball-pulse\">\n          <div class=\"my-loader\"></div>\n          <div class=\"my-loader\"></div>\n          <div class=\"my-loader\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"(ProductDetails | json) != '{}'\">\n    <div class=\"preview col-md-4\">\n\n      <div class=\"preview-pic tab-content\" style=\"border:none\">\n        <div class=\"tab-pane active\" id=\"pic-1\">\n          <ngx-img-zoom\n              [imgSrc]=\"productImagePath\" [lensStyle]=\"'width:70px; height:70px'\"\n          ></ngx-img-zoom>\n          <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"details col-md-6\">\n      <!-- {{ token | json }} -->\n      <!--div class=\"col-md-6\" *ngIf=\"LoggedIn && ( token.userType == 3 || token.userType == 9 ) \">\n        <select class=\"form-control whichStore\" [(ngModel)]=\"whichStore\" (click)=\"strChng()\">\n          <option value=\"\">Select Store</option>\n          <option *ngFor=\"let str of Stores; let i = index\" [value]=\"str.storeUserId\">{{ str.storeName }}</option>\n        </select>\n        <span class=\"text-danger\" *ngIf=\"whichStore == '' && NoStore\">Please Select Store</span>\n        <br>\n      </div-->\n      <h3 class=\"product-title\">{{ ProductDetails.productName }}</h3>\n      <!-- <div class=\"rating\">\n        <div class=\"stars\">\n          <span class=\"fa fa-star checked\"></span>\n          <span class=\"fa fa-star checked\"></span>\n          <span class=\"fa fa-star checked\"></span>\n          <span class=\"fa fa-star\"></span>\n          <span class=\"fa fa-star\"></span>\n        </div>\n        <span class=\"review-no\">41 reviews</span>\n      </div> -->\n      <p class=\"product-description\" [innerHtml]=\" ProductDetails.productDescription | safeHtml \">\n        <!-- <div >\n        </div> -->\n      </p>\n      <h4 class=\"price\" *ngIf=\"LoggedIn\">Current price: <span>$ {{ ProductDetails.productPrice }} </span></h4>\n      <p class=\"vote\" *ngIf=\"ProductDetails.productVariations\">This product has <strong>{{variationCount}}</strong> Variations</p>\n      <p class=\"vote\"><strong>{{ChoosedVariationQuantity}}</strong> Items in Stock</p>\n      <div class=\"action\">\n        <p style=\"font-size:20px; \" class=\"text-danger\" *ngIf=\"NotavailableError\">\n          This Product is not available for Selected Store\n        </p>\n        <div class=\"btn-group dropdown\">\n          <div class=\"dropdown\" style=\"margin-right:10px\" *ngIf=\"ProductDetails.productVariations\">\n            <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ ChoosedVariationname }}\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" [class.active]=\"ChoosedVariation == varr.productVarID\" *ngFor=\"let varr of ProductDetails.productVariations; let i = index ;\" (click)=\"choooseVariation(varr.productVarID,varr.productVarItemId,i)\" >{{ varr.productVarItemId }}</a>\n            </div>\n          </div>\n          <br>\n          <input *ngIf=\"LoggedIn\" type=\"number\" class=\"form-control\" style=\"margin-right: 10px; width: 66px\" [(ngModel)]=\"quantity\" min=\"1\">\n          <button *ngIf=\"LoggedIn && (ProductDetails.IsAvailable == 0 && ChoosedVariationQuantity != 0)\" class=\"add-to-cart btn btn-primary\" (click)=\"addToCart(ProductDetails.productID)\" type=\"button\">add to cart</button>\n          <a *ngIf=\" ProductDetails.IsAvailable == 1 || ChoosedVariationQuantity == 0\" style=\"font-size: 18px; color: red; padding-top: 6px;\">Out of stock</a>\n        </div>\n        <div class=\"clearfix\">\n          &nbsp;\n        </div>\n        <p class=\"vote\" *ngIf=\"ProductDetails.instructionFile != '' && ProductDetails.instructionFile != null\"><a  target=\"_blank\" [href]=\"ProductDetails.instructionFile\">Download Instruction Files</a></p>\n      </div>\n      <div class=\"clearfix\">\n        &nbsp;\n      </div>\n      <div *ngIf=\"ProductDetails.productVariations\">\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Item ID</th>\n            <th>Description</th>\n            <th>Price</th>\n          </tr>\n          <tr *ngFor=\"let varr of ProductDetails.productVariations; let i = index ;\">\n            <td>{{varr.productVarItemId}}</td>\n            <td>{{varr.productVarDesc}}</td>\n            <td>${{varr.productVarPrice}}</td>\n          </tr>\n        </table>\n\n      </div>\n      <ul  class=\"attachments\">\n        <li *ngFor=\"let img of images\" (click)=\"showimg(img.path)\">\n          <img [src]=\"img.path\" alt=\"\">\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal\" id=\"img\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <span class=\"close\" data-dismiss=\"modal\">&times;</span>\n      </div>\n      <div class=\"modal-body\">\n        <img [src]=\"imgPath\" style=\"width:100%\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portal_portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_service, activatedRoute, fb, router, _front, toasterService) {
        this._service = _service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this._front = _front;
        this.ProductDetails = {};
        this.ProductLoading = false;
        this.ProductId = '';
        this.page = 1;
        this.productImagePath = '';
        this.ChoosedVariation = '';
        this.ChoosedVariationname = '';
        this.quantity = 1;
        this.LoggedIn = false;
        this.ChoosedVariationQuantity = 0;
        this.Stores = [];
        this.images = [];
        this.imgPath = '';
        this.whichStore = '';
        this.NoStore = false;
        this.NotavailableforStore = true;
        this.NotavailableError = false;
        var params = this.activatedRoute.snapshot.params;
        this.ProductId = params.ProductId;
        this.page = params.page;
        localStorage.setItem("ppsProductPage", JSON.stringify({ page: this.page }));
        this.toasterService = toasterService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        if (this.ProductId != '')
            this.getProductDetails(this.ProductId);
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
            this.LoggedIn = true;
        }
        if (this.LoggedIn && (this.token.userType == 3 || this.token.userType == 9)) {
            // console.log('this.token.apdm.apdmID');
            // console.log(this.token.apdm.apdmUserId);
            this.getStores(this.token.apdm.apdmID, this.token['userType']);
        }
        var whichStore = localStorage.getItem('whichStore');
        if (whichStore) {
            this.whichStore = whichStore;
        }
    };
    ProductDetailsComponent.prototype.strChng = function () {
        localStorage.setItem('whichStore', this.whichStore);
    };
    ProductDetailsComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this._front.productDetails(id).subscribe(function (data) {
            if (data.data['images'])
                _this.images = JSON.parse(data.data['images']);
            _this.ProductDetails = data.data;
            if (data.data.productVariations) {
                _this.variationCount = data.data.productVariations.length;
                if (_this.variationCount != 0) {
                    _this.ProductDetails['productPrice'] = data.data.productVariations[0].productVarPrice;
                    _this.ChoosedVariation = data.data.productVariations[0].productVarID;
                    _this.ChoosedVariationname = data.data.productVariations[0].productVarItemId;
                    _this.ChoosedVariationQuantity = data.data.productVariations[0].productVarItemQuantity;
                }
            }
            if (data.data.productImage != '')
                _this.productImagePath = __WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/assets/uploads/catPics/' + data.data.productImage;
            else
                _this.productImagePath = 'assets/img/demo.png';
        }, function (err) { return console.log(err); });
    };
    ProductDetailsComponent.prototype.addToCart = function (p) {
        //  if(this.token.userType == 3 || this.token.userType == 9)
        //  {
        //    if (this.whichStore == '')
        //    {
        //      this.NoStore = true;
        //      return false;
        //    }
        // }
        var _this = this;
        // if(this.token.userType == 3 || this.token.userType == 9)
        // {
        // for (let i in this.Stores)
        // {
        //   if(this.Stores[i]['storeUserId'] == this.whichStore)
        //   {
        //     var classs = this.Stores[i]['storeClass'];
        //   }
        // }
        //  for(let ii in this.ProductDetails['classes'])
        //  {
        //    if(this.ProductDetails['classes'][ii]['productClass'] == classs)
        //    this.NotavailableforStore = false;
        //  }
        //
        //  if(this.NotavailableforStore)
        //  {
        //    this.NotavailableError = true;
        //    return false;
        //  }
        //  else
        //  this.NotavailableError = false;
        // }
        this.NotavailableError = false;
        var v = {};
        v['userId'] = this.token['userId'];
        v['productId'] = this.ProductId;
        v['quantity'] = this.quantity;
        if (this.ChoosedVariation != '')
            v['variationid'] = this.ChoosedVariation;
        else
            v['variationid'] = '';
        v['userType'] = this.token['userType'];
        this._front.addToCart(v).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
            }
        }, function (err) { return console.log(err); });
    };
    ProductDetailsComponent.prototype.choooseVariation = function (varID, VarName, i) {
        this.ChoosedVariationQuantity = this.ProductDetails['productVariations'][i]['productVarItemQuantity'];
        this.ProductDetails['productPrice'] = this.ProductDetails['productVariations'][i]['productVarPrice'];
        this.ChoosedVariation = varID;
        this.ChoosedVariationname = VarName;
    };
    ProductDetailsComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    ProductDetailsComponent.prototype.showimg = function (imgPath) {
        this.imgPath = imgPath;
        jQuery('#img').modal('show');
    };
    ProductDetailsComponent.prototype.getStores = function (apdm, type) {
        var _this = this;
        this._service.getAdpmStores(apdm, type).subscribe(function (data) {
            if (data.status == 200) {
                _this.Stores = data.data;
            }
        });
    };
    ProductDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__("../../../../../src/app/frontend/product-details/product-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/product-details/product-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_6__portal_portal_service__["a" /* PortalService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__portal_portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-body p , .card-body h4\n{\n  margin-bottom: 7px !important;\n}\n\n.card , .list-group-item\n{\n  cursor: pointer;\n}\n\n@charset \"utf-8\";\n/* CSS Document */\n.card .card-body {\n  text-align: center;\n}\n.card-body h4 {\n  font-size: 21px;\n  height: 49px\n}\n.card-body .btn {\n  padding: 8px 70px;\n}\n.card .card-body {\n  background-color: rgba(0, 0, 0, 0.04);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  margin-top: 20px;\n  padding: 17px 0;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"Products.length == 0 && ProductLoading\">\n      <div class=\"loader\">\n        <div class=\"loader-inner ball-pulse\">\n          <div class=\"my-loader\"></div>\n          <div class=\"my-loader\"></div>\n          <div class=\"my-loader\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <tree-root [nodes]=\"nodes\" #tree  (stateChange)=\"setState($event)\" ></tree-root>\n      <!-- <ol class=\"list-group\">\n        <li class=\"list-group-item\" (click)=\"getCatTable('all','parentCats')\">All Categories</li>\n        <li class=\"list-group-item\" (click)=\"openMore(cat.hasChild,cat.catId)\" *ngFor=\"let cat of ParentCats\">{{ cat.catName }}</li>\n      </ol> -->\n    </div>\n    <div class=\"col-md-9\">\n      <div style=\"margin-bottom:10px\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for products\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n        </div>\n      </div>\n      <!-- <div class=\"row\" *ngIf=\"Show == 'cats'\">\n        <div class=\"col-md-3\" *ngFor=\"let cat of ParentCats\">\n          <div class=\"card\" (click)=\"openMore(cat.hasChild,cat.catId)\">\n            <img class=\"card-img-top\" [src]=\"cat.catImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+cat.catImage : 'assets/img/demo.png'\">\n            <div class=\"card-body\">\n              <h3 class=\"card-title\">{{cat.catName}}</h3>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"row\" *ngIf=\"Products.length == 0 && !ProductLoading\">\n        No products found\n      </div>\n      <div class=\"row\" *ngIf=\" Products.length != 0\">\n        <div class=\"col-md-4\" *ngFor=\"let pro of Products | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n            <div class=\"card\">\n              <a [routerLink]=\"['/product-details',pro.productID]\">\n                <img style=\"height: 192px;\" class=\"card-img-top\" [src]=\"pro.productImage == '' ? 'assets/img/demo.png' : 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+pro.productImage\" alt=\"\">\n              </a>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{pro.productName}}</h5>\n                <p class=\"card-text\">{{pro.catName}}</p>\n                <p class=\"card-text\" *ngIf=\"LoggedIn\">${{pro.productPrice}}</p>\n                <a [routerLink]=\"['/product-details',pro.productID,page]\" class=\"btn btn-primary\">View</a>\n                <p class=\"p_clss\" *ngIf=\"pro.classes != '' && pro.classes != null\">Classes - <span *ngFor=\"let cls of pro.classes\">{{ cls.productClass }}</span> </p>\n                <!-- <a (click)=\"addToCart(pro.productID)\" class=\"btn btn-primary\">Add to cart</a> -->\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\" Products.length != 0\">\n        <div class=\"col-md-12\">\n          <pagination-controls #pagi (pageChange)=\"page = getProducts($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsComponent = (function () {
    // nodes = [
    //   {
    //     id: 11,
    //     name: 'root1',
    //   },
    //   {
    //     id: 1,
    //     name: 'root1',
    //     children: [
    //       { id: 2, name: 'child1' },
    //       { id: 3, name: 'child2' }
    //     ]
    //   },
    //   {
    //     id: 4,
    //     name: 'root2',
    //     children: [
    //       { id: 5, name: 'child2.1' },
    //       {
    //         id: 6,
    //         name: 'child2.2',
    //         children: [
    //           { id: 7, name: 'subsub' }
    //         ]
    //       }
    //     ]
    //   }
    // ];
    function ProductsComponent(fb, router, _front, toasterService) {
        this.fb = fb;
        this.router = router;
        this._front = _front;
        this.Products = [];
        this.ProductLoading = true;
        this.CatList = [];
        this.perpage = 9;
        this.page = 1;
        this.catID = 1;
        this.FilterCats = [];
        this.ProductToDelete = '';
        this.ProductToEdit = '';
        this.ProductEdit = false;
        this.LoggedIn = false;
        this.StoreLoggedIn = 'all';
        this.ParentCats = [];
        this.Show = 'products';
        this.nodes = [];
        this.searchText = '';
        this.toasterService = toasterService;
        // let tkn = localStorage.getItem('ppsPortalToken');
        // this.token = JSON.parse(tkn);
        if (localStorage.getItem("ppsProductPage") !== null) {
            var tkn2 = localStorage.getItem('ppsProductPage');
            var tkn22 = JSON.parse(tkn2);
            this.page = tkn22.page;
            this.getProducts(tkn22.page);
        }
    }
    ProductsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("ppsPortalToken") !== null) {
            var tkn = localStorage.getItem('ppsPortalToken');
            this.token = JSON.parse(tkn);
            this.LoggedIn = true;
            console.log(this.token);
            if (this.token['userType'] == 2)
                this.StoreLoggedIn = this.token['userId'];
        }
        this.getCatsData();
        this.getCatTable('all', 'parentCats');
    };
    ProductsComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.ProductEdit = false;
        });
        var treeModel = this.treeComponent.treeModel;
        var firstNode = treeModel.getFirstRoot();
        if (firstNode)
            firstNode.setActiveAndVisible();
        if (localStorage.getItem("ppsProductPage") !== null) {
            var tkn2 = localStorage.getItem('ppsProductPage');
            var tkn22 = JSON.parse(tkn2);
            this.page = tkn22.page;
        }
        console.log(this.pagi);
    };
    ProductsComponent.prototype.getCats = function () {
        var _this = this;
        this._front.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    ProductsComponent.prototype.getCatTable = function (id, type) {
        var _this = this;
        this._front.getWhere(id, type).subscribe(function (data) {
            if (data.success) {
                _this.ParentCats = data.data;
            }
        }, function (err) { return console.log(err); });
    };
    ProductsComponent.prototype.Search = function () {
        this.getProducts(1);
    };
    ProductsComponent.prototype.getProducts = function (e) {
        var _this = this;
        this.page = e;
        this.ProductLoading = true;
        this.Products = [];
        var v = {};
        v['perpage'] = this.perpage;
        v['page'] = e;
        v['cats'] = this.FilterCats;
        v['cat'] = this.catt;
        v['store'] = true;
        v['text'] = this.searchText;
        v['StoreLoggedIn'] = this.StoreLoggedIn;
        this._front.getProducts(v).subscribe(function (data) {
            if (data.success) {
                _this.ProductLoading = false;
                _this.Products = data.data.result;
                _this.totalItem = data.data.total_rows;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.ProductLoading = false;
                _this.Products = [];
            }
        });
        return e;
    };
    ProductsComponent.prototype.getCatsData = function () {
        var _this = this;
        this._front.getCatsData().subscribe(function (data) {
            _this.nodes = data.data;
            _this.nodes.unshift({ id: 'all', name: 'ALL CATEGORIES' });
            if (_this.nodes.length != 0) {
                var thiss = _this;
                setTimeout(function () {
                    var treeModel = thiss.treeComponent.treeModel;
                    var firstNode = treeModel.getFirstRoot();
                    firstNode.setActiveAndVisible();
                }, 300);
            }
        }, function (err) { return console.log(err); });
    };
    ProductsComponent.prototype.PushFilterCats = function (cat) {
        this.FilterCats.push(cat);
    };
    ProductsComponent.prototype.PopFilterCats = function (cat) {
        var index = this.FilterCats.indexOf(cat);
        if (index > -1) {
            this.FilterCats.splice(index, 1);
        }
    };
    ProductsComponent.prototype.ProductDeleteConfirm = function (pid) {
        this.ProductToDelete = pid;
        jQuery('#deleteModal').modal('show');
    };
    ProductsComponent.prototype.openMore = function (e, cat) {
        if (e) {
            this.getCatTable(cat, 'parentCats');
        }
        else {
            this.Show = 'products';
            this.FilterCats = [cat];
            this.getProducts(1);
        }
    };
    ProductsComponent.prototype.onEvent = function (e) {
        console.log(e);
    };
    ProductsComponent.prototype.setState = function (e) {
        console.log(e);
        this.catt = e.focusedNodeId;
        // if (localStorage.getItem("ppsProductPage") !== null)
        // {
        //   console.log('yes');
        //   var tkn2 = localStorage.getItem('ppsProductPage');
        //   console.log(tkn2 )
        //   var tkn22 = JSON.parse(tkn2);
        //   console.log(tkn22.page);
        //   this.page = tkn22.page;
        //   this.getProducts(tkn22.page);
        //   this.page = tkn22.page;
        // }
        // else
        this.getProducts(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tree'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TreeComponent */])
    ], ProductsComponent.prototype, "treeComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pagi'),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "pagi", void 0);
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/frontend/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/products/products.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ins-sheets/ins-sheets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ins-sheets/ins-sheets.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <tr>\n          <!-- <th>Sr. No.</th> -->\n          <th>Instruction Sheet</th>\n          <!-- <th>Upload Date</th> -->\n        </tr>\n        <tr *ngFor=\"let sheet of sheets; let i = index\">\n          <!-- <td>{{ i + 1 }} </td> -->\n          <td><a [href]=\"sheet.setValue['val']\">{{ sheet.setValue['name'] }} </a></td>\n          <!-- <td><a [href]=\"sheet.setValue\">{{ sheet.setValue }} </a></td> -->\n          <!-- <td>{{ sheet.date }}</td> -->\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ins-sheets/ins-sheets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsSheetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsSheetsComponent = (function () {
    function InsSheetsComponent(_front) {
        this._front = _front;
        this.sheets = [];
    }
    InsSheetsComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    InsSheetsComponent.prototype.jsonparse = function (val) {
        val = JSON.parse(val);
        return val;
    };
    InsSheetsComponent.prototype.getFaq = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var variable = _a[_i];
                    if (variable['setName'] == 'InstructionSheet') {
                        variable['setValue'] = JSON.parse(variable['setValue']);
                        _this.sheets.push(variable);
                        // console.log(this.sheets);
                    }
                }
                // this.faq = data.data['setValue'];
            }
        }, function (err) { return console.log(err); });
    };
    InsSheetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ins-sheets',
            template: __webpack_require__("../../../../../src/app/ins-sheets/ins-sheets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ins-sheets/ins-sheets.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]])
    ], InsSheetsComponent);
    return InsSheetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/log-status/log-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-status/log-status.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Application Status</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n\n\n\n          <div class=\"col-lg-4\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    Add System Status\n                  </div>\n                  <div class=\"card-body\">\n                      <form action=\"\" method=\"post\" [formGroup]=\"login\" (ngSubmit)=\"submitform(login.value)\">\n                        <div class=\"form-group has-feedback col-xs-12\">\n                          <textarea class=\"form-control\" placeholder=\"Enter Update\" [formControl]=\"login.controls['logText']\"></textarea>\n                        </div>\n                        <div>\n                          <div class=\"button_panel\">\n                            <div class=\"col-xs-12\">\n                              <button type=\"submit\" class=\"btn btn-primary btn-flat\" >Submit</button>\n                            </div>\n                          </div>\n\n                          <!-- /.col -->\n                        </div>\n                    </form>\n                  </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n              <table class=\"table table-bordered\">\n                <tr>\n                <th>PPS Updates</th>\n                <th style=\"min-width:100px\" width=\"150px\">Added on</th>\n                <!-- <th>Edit</th> -->\n                <th>Delete</th>\n              </tr>\n              <tr *ngFor=\"let data of arraydata\">\n              <td>\n                 {{data.logText}}\n               </td>\n               <td>\n                  {{ data.logDate | date : 'longDate' }}\n                </td>\n              <td>\n                <a href=\"javascript:void(0)\" (click)=\"confirmationcheck('confirm',data.logId)\" class=\"danger buttons btn btn-xs btn-default\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </a>\n              </td>\n\n            </tr>\n            </table>\n\n            </div>\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteModal2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"confirmationcheck('do',logd)\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/log-status/log-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_status_service__ = __webpack_require__("../../../../../src/app/log-status/log-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogStatusComponent = (function () {
    function LogStatusComponent(toasterService, fb, _http, router, LogStatusService) {
        this._http = _http;
        this.router = router;
        this.LogStatusService = LogStatusService;
        this.responseStatus = [];
        this.arraydata = [];
        this.logd = '';
        this.toasterService = toasterService;
        this.http = _http;
        this.login = fb.group({
            'logText': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LogStatusComponent.prototype.ngOnInit = function () {
        this.getStatus();
    };
    LogStatusComponent.prototype.getStatus = function () {
        var _this = this;
        this.LogStatusService.getStatus().subscribe(function (data) {
            console.log(data);
            if (data.success)
                _this.arraydata = data.data;
        });
    };
    LogStatusComponent.prototype.submitform = function (value) {
        var _this = this;
        this.LogStatusService.submitform(value).subscribe(function (data) {
            if (data.success) {
                _this.login.reset();
                _this.getStatus();
                _this.toasterService.pop('success', data.data + '');
            }
        });
    };
    LogStatusComponent.prototype.editPlan = function (id) {
    };
    LogStatusComponent.prototype.confirmationcheck = function (type, id) {
        var _this = this;
        this.logd = id;
        if (type == 'confirm') {
            jQuery('#deleteModal2').modal('show');
            return false;
        }
        var value = {};
        value['id'] = id;
        value['type'] = 'logStatus';
        this.LogStatusService.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#deleteModal2').modal('hide');
                _this.logd = '';
                _this.getStatus();
            }
        });
    };
    LogStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log-status',
            template: __webpack_require__("../../../../../src/app/log-status/log-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-status/log-status.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__log_status_service__["a" /* LogStatusService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__log_status_service__["a" /* LogStatusService */]])
    ], LogStatusComponent);
    return LogStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/log-status/log-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogStatusService = (function () {
    function LogStatusService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        this.token = JSON.parse(tkn);
    }
    LogStatusService.prototype.submitform = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://productprotectionsolutions.com/order/api/add-log-status', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    LogStatusService.prototype.getStatus = function () {
        return this.http.get('https://productprotectionsolutions.com/order/api/log-status').map(function (res) { return res.json() || {}; });
    };
    LogStatusService.prototype.delete = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/delete/id/' + value['id'] + '/type/' + value['type'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    LogStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LogStatusService);
    return LogStatusService;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value, args) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/portal/mystores/mystores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/mystores/mystores.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/my-stores\"></a>Dashboard</li>\n      <li class=\"breadcrumb-item active\">My stores</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <app-notification></app-notification>\n        </div>\n      </div>\n      <div class=\"\">\n        <div class=\"\">\n          <table class=\"table  table-responsive\">\n            <tr>\n              <th>Store Id</th>\n              <th>Store name</th>\n              <th>Store email</th>\n              <th>Store Mobile</th>\n              <th>Store city</th>\n            </tr>\n            <tr *ngFor=\"let str of Stores\">\n              <td>{{str.storeId}}</td>\n              <td>{{str.storeName}}</td>\n              <td>{{str.storeEmail}}</td>\n              <td>{{str.storeMobile}}</td>\n              <td>{{str.storeCity}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/mystores/mystores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MystoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MystoresComponent = (function () {
    function MystoresComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.token = {};
        this.Orders = [];
        this.Stores = [];
    }
    MystoresComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        if (this.token['apdm'].apdmID)
            this.getStores(this.token['apdm'].apdmID, this.token['userType']);
    };
    MystoresComponent.prototype.getStores = function (apdm, type) {
        var _this = this;
        this._service.getAdpmStores(apdm, type).subscribe(function (data) {
            if (data.status == 200) {
                _this.Stores = data.data;
            }
        });
    };
    MystoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mystores',
            template: __webpack_require__("../../../../../src/app/portal/mystores/mystores.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/mystores/mystores.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], MystoresComponent);
    return MystoresComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"this.token.totalOrder && this.token.totalOrder > 3000\">\nYou have exceeded your annual budget of $3,000 in purchases this year. Corporate approval is pending\n</h3>\n"

/***/ }),

/***/ "../../../../../src/app/portal/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
        this.token = {};
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        // console.log(this.token)
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/portal/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/paccount-settings/paccount-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/paccount-settings/paccount-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/my-stores\"></a>Dashboard</li>\n      <li class=\"breadcrumb-item active\">My stores</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <app-notification></app-notification>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Change password\n          </div>\n          <div class=\"card-body\">\n            <form class=\"m-t\" [formGroup]=\"account\" (ngSubmit)=\"onSubmit(account.value,account)\">\n              <div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['current_password'].valid && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched}\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" formControlName=\"current_password\">\n                  <!-- <div class=\"input-group col-md-12 password-watch\">\n                      <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                        Show\n                      </span>\n                    </div> -->\n                     <span *ngIf=\"account.controls['current_password'].hasError('required') && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched\">Old Password is required.</span>\n                    <span *ngIf=\"account.controls['current_password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                 </div>\n               <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['password'].valid && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched}\">\n                 <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"password\">\n                 <!-- <div class=\"input-group col-md-12 password-watch\">\n                   <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                     Show\n                   </span>\n                 </div> -->\n                    <span *ngIf=\"account.controls['password'].hasError('required') && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched\">New Password is required.</span>\n                    <span *ngIf=\"account.controls['password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error':!account.controls['user_password_rpt'].valid   && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched}\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"user_password_rpt\">\n                  <!-- <div class=\"input-group col-md-12 password-watch\">\n                    <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                      Show\n                    </span>\n                  </div> -->\n                    <span *ngIf=\"account.controls['user_password_rpt'].hasError('required') && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched\">Confirm Password is required.</span>\n                    <!-- <span *ngIf=\"!account.controls['user_password_rpt'].hasError('required') && !account.controls['user_password_rpt'].hasError('minlength')  && !account.controls.valid && submitAttempt\">Password not matched.</span> -->\n                    <span *ngIf=\"!account.controls['password'].hasError('required') && !account.controls['user_password_rpt'].hasError('required') && !account.controls['password'].hasError('minlength')   && !account.controls['user_password_rpt'].hasError('minlength') && !account.valid && submitAttempt\">Password not matched.</span>\n                </div>\n                <div>\n                  <button class=\"btn btn-primary\">Change Password</button>\n                </div>\n          </div>\n        </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/paccount-settings/paccount-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaccountSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function passwordMatcher(c) {
    console.log(c.get('password').value);
    return c.get('password').value === c.get('user_password_rpt').value
        ? null : { 'nomatch': true };
}
var PaccountSettingsComponent = (function () {
    function PaccountSettingsComponent(fb, router, toasterService, _service) {
        this.fb = fb;
        this.router = router;
        this._service = _service;
        this.submitAttempt = false;
        this.token = {};
        this.toasterService = toasterService;
        this.account = this.fb.group({
            current_password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
            user_password_rpt: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]],
        }, { validator: passwordMatcher });
    }
    PaccountSettingsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
    };
    PaccountSettingsComponent.prototype.showPassword = function (ele) {
        var type = jQuery(ele).prev('input').attr('type');
        if (type == 'password') {
            jQuery(ele).html('Hide');
            jQuery(ele).prev('input').attr('type', 'text');
        }
        else {
            jQuery(ele).html('Show');
            jQuery(ele).prev('input').attr('type', 'password');
        }
    };
    PaccountSettingsComponent.prototype.onSubmit = function (value, account) {
        var _this = this;
        this.submitAttempt = true;
        console.log(this.account);
        if (!this.account.valid)
            return false;
        var tkn = localStorage.getItem('ppsPortalToken');
        var token = JSON.parse(tkn);
        value['userId'] = token['userId'];
        this._service.chnagePassword(value).subscribe(function (data) {
            _this.submitAttempt = false;
            if (data.success) {
                _this.toasterService.pop('success', data.success_msg + '');
                _this.account.reset();
            }
            if (data.success == false) {
                _this.toasterService.pop('error', data.error_msg + '');
            }
        });
    };
    PaccountSettingsComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        this.router.navigate(['/customer-login']);
    };
    PaccountSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paccount-settings',
            template: __webpack_require__("../../../../../src/app/portal/paccount-settings/paccount-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/paccount-settings/paccount-settings.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]])
    ], PaccountSettingsComponent);
    return PaccountSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pcart/pcart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pcart/pcart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pcart works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pcart/pcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PcartComponent = (function () {
    function PcartComponent() {
    }
    PcartComponent.prototype.ngOnInit = function () {
    };
    PcartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pcart',
            template: __webpack_require__("../../../../../src/app/portal/pcart/pcart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pcart/pcart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PcartComponent);
    return PcartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pdashboard/pdashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pdashboard/pdashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-notification></app-notification>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4\" *ngIf=\"token.userType == 4\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4 hand\" hand (click)=\"export('total')\" style=\"font-size: 21px;\">\n                    <i class=\"icon-doc\"></i>\n                    <span style=\"width:15px\">Export</span>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.totalapproved}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">Total Approved orders</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\" *ngIf=\"token.userType == 4\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4\" style=\"margin-bottom:3px !important\">\n                    <i class=\"icon-basket\"></i>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.totalOrders}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">Total Orders</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3\" *ngIf=\"token.userType == 3\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4\">\n                    <i class=\"icon-basket\"></i>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.totalOrderStore}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">Total Orders received from stores</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3\" *ngIf=\"token.userType == 3\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4\">\n                    <i class=\"icon-basket\"></i>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.todayOrderStore}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">Today Orders received from stores</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3\" *ngIf=\"token.userType == 3\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4\">\n                    <i class=\"icon-basket\"></i>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.totalOrderMy}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">My total Orders</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" *ngIf=\"token.userType == 3\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"h1 text-muted text-right mb-4\">\n                    <i class=\"icon-basket\"></i>\n                  </div>\n                  <div class=\"h4 mb-0\">{{dashboardInfo.todaysOrdersMy}}</div>\n                  <small class=\"text-muted text-uppercase font-weight-bold\">My today Orders</small>\n                  <div class=\"progress progress-xs mt-3 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <table class=\"table table-bordered\">\n                <tr>\n                <th>PPS Updates</th>\n                <th style=\"min-width:100px\" width=\"150px\">Added on</th>\n                <!-- <th>Edit</th> -->\n                <!-- <th>Delete</th> -->\n              </tr>\n              <tr *ngFor=\"let data of arraydata\">\n              <td>\n                 {{data.logText}}\n               </td>\n               <td>\n                  {{ data.logDate | date : 'longDate' }}\n                </td>\n              <!-- <td>\n                <a href=\"javascript:void(0)\" (click)=\"confirmationcheck(data.userId)\" class=\"danger buttons btn btn-xs btn-default\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                </a>\n              </td> -->\n\n            </tr>\n            </table>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pdashboard/pdashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__superadmin_superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_status_log_status_service__ = __webpack_require__("../../../../../src/app/log-status/log-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PdashboardComponent = (function () {
    function PdashboardComponent(logst, _sp, route, fb, _http, _service, router, toasterService) {
        this.logst = logst;
        this._sp = _sp;
        this.route = route;
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.token = {};
        this.dashboardInfo = {};
        this.dashboardInfo2 = {};
        this.arraydata = [];
    }
    PdashboardComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.getdashboard();
        this.dashboardInfoFun();
        this.getStatus();
    };
    PdashboardComponent.prototype.getStatus = function () {
        var _this = this;
        this.logst.getStatus().subscribe(function (data) {
            console.log(data);
            if (data.success)
                _this.arraydata = data.data;
        });
    };
    PdashboardComponent.prototype.dashboardInfoFun = function () {
        var _this = this;
        this._sp.dashboardInfo(' ').subscribe(function (data) {
            if (data.success) {
                _this.dashboardInfo2 = data.data;
            }
            else {
                _this.dashboardInfo2 = {};
            }
        }, function (err) {
            _this.dashboardInfo2 = {};
        });
    };
    PdashboardComponent.prototype.getdashboard = function () {
        var _this = this;
        if (this.token['userType'] == 3) {
            var url = 'get-apdm-dashboard';
            var id = parseInt(this.token['apdm'].apdmID);
        }
        else {
            var url = 'get-admin-dashboard';
            var id = 5;
        }
        this._service.getdashboard(url, id).subscribe(function (data) {
            if (data.success) {
                _this.dashboardInfo = data.data;
            }
        });
    };
    PdashboardComponent.prototype.export = function (type) {
        console.log(type);
        if (this.dashboardInfo2[type].length != 0) {
            var orders = [];
            for (var i = 0; i < this.dashboardInfo2[type].length; i++) {
                var order = {};
                order['storeName'] = this.dashboardInfo2[type][i]['storeName'];
                // order['orderId'] = this.dashboardInfo2[type][i]['orderId'];
                order['orderNumber'] = this.dashboardInfo2[type][i]['orderNumber'];
                order['orderAddedOn'] = this.dashboardInfo2[type][i]['orderAddedOn'];
                if (this.dashboardInfo2[type][i]['printed'] == 0 && this.dashboardInfo2[type][i]['orderStatus'] == 0 && (this.dashboardInfo2[type][i]['orderTrackNumber'] == '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo2[type][i]['orderStatus'] = 'Pending';
                else if (this.dashboardInfo2[type][i]['printed'] == 0 && this.dashboardInfo2[type][i]['orderStatus'] == 1 && (this.dashboardInfo2[type][i]['orderTrackNumber'] != '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo2[type][i]['orderStatus'] = 'Accepted';
                else if (this.dashboardInfo2[type][i]['printed'] == 0 && this.dashboardInfo2[type][i]['orderStatus'] == 2 && (this.dashboardInfo2[type][i]['orderTrackNumber'] == '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo2[type][i]['orderStatus'] = 'Rejected';
                else if (this.dashboardInfo2[type][i]['printed'] == 1 && (this.dashboardInfo2[type][i]['orderTrackNumber'] != '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == '' || this.dashboardInfo2[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo2[type][i]['orderStatus'] = 'Printed';
                else if (this.dashboardInfo2[type][i]['orderStatus'] == 1 && this.dashboardInfo2[type][i]['orderTrackNumber'] != '' && this.dashboardInfo2[type][i]['Shipped'] == 1)
                    this.dashboardInfo2[type][i]['orderStatus'] = 'Shipped';
                // order['storeId'] = this.dashboardInfo2[type][i]['storeId'];
                order['orderStatus'] = this.dashboardInfo2[type][i]['orderStatus'];
                order['orderTotal'] = this.dashboardInfo2[type][i]['orderTotal'];
                if (this.dashboardInfo2[type][i]['orderLevel'] == 2)
                    order['Placed by'] = 'Store';
                else if (this.dashboardInfo2[type][i]['orderLevel'] == 1 || this.dashboardInfo2[type][i]['orderLevel'] == 3)
                    order['Placed by'] = this.dashboardInfo2[type][i]['apdmFirstName'] + ' ' + this.dashboardInfo2[type][i]['apdmLastName'];
                orders.push(order);
            }
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                headers: Object.keys(orders[0]),
                showTitle: false,
                useBom: true,
                removeNewLines: false
            };
            console.log(Object.keys(orders[0]));
            new __WEBPACK_IMPORTED_MODULE_7_angular2_csv_Angular2_csv__["Angular2Csv"](orders, 'PPs Orders', options);
        }
    };
    PdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pdashboard',
            template: __webpack_require__("../../../../../src/app/portal/pdashboard/pdashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pdashboard/pdashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_5__superadmin_superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_8__log_status_log_status_service__["a" /* LogStatusService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__log_status_log_status_service__["a" /* LogStatusService */], __WEBPACK_IMPORTED_MODULE_5__superadmin_superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */]])
    ], PdashboardComponent);
    return PdashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pexport-report/pexport-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pexport-report/pexport-report.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item \"><a routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\"><a>Export-Reports</a></li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-notification></app-notification>\n            </div>\n          </div>\n          <div class=\"row\" style=\"padding-top:20px\">\n            <div class=\"card\" style=\"width:100%\">\n              <div class=\"card-header\">\n                <span class=\"pull-left\">Export Reports</span>\n\n              </div>\n              <div class=\"card-body\">\n                <div class=\"loader\" *ngIf=\"stores.length == 0\">\n                  <div class=\"loader-inner ball-pulse\">\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"stores.length != 0\">\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">From Date</label>\n                      <input type=\"date\" name=\"from_date\" class=\"form-control\" placeholder=\"From Date\" [(ngModel)]=\"model.from_date\" #from_date=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">To Date</label>\n                      <input type=\"date\" name=\"to_date\" class=\"form-control\" placeholder=\"To Date\" [(ngModel)]=\"model.to_date\" #to_date=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">Apls</label>\n                    <select class=\"form-control\" [value]=\"\" name=\"apl\" [(ngModel)]=\"model.apl\" #apl=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">All</option>\n                    <option *ngFor=\"let apl of apls\" value=\"{{apl.apdmUserId}}\">{{apl.apdmFirstName}} {{apl.apdmLastName}}</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">Stores</label>\n                    <select class=\"form-control\" [value]=\"\" name=\"store_id\" [(ngModel)]=\"model.store_id\" #store_id=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                   <option value=\"\">All</option>\n                   <option *ngFor=\"let store of stores\" value=\"{{store.storeUserId}}\">{{store.storeName}}</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <input type=\"button\" (click)=\"export();\" value=\"Export\" class=\"btn btn-primary\" style=\"margin-top: 30px;\">\n                    </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pexport-report/pexport-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PexportReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__ = __webpack_require__("../../../../ngx-csv/ngx-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PexportReportComponent = (function () {
    function PexportReportComponent(router, _service, toasterService) {
        this.router = router;
        this._service = _service;
        this.token = {};
        this.stores = [];
        this.model = {};
        this.apls = [];
        this.storeLoading = false;
        this.isSubmit = false;
        this.fromDateError = false;
        this.toDateError = false;
        this.model.from_date = '';
        this.model.to_date = '';
        this.model.apl = '';
        this.model.store_id = '';
        this.toasterService = toasterService;
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
    }
    PexportReportComponent.prototype.export = function () {
        var _this = this;
        this.isSubmit = true;
        if (this.model.from_date == '' && this.model.to_date != '') {
            this.toasterService.pop('error', 'Please select from date', '');
            return false;
        }
        else if (this.model.from_date != '' && this.model.to_date == '') {
            this.toasterService.pop('error', 'Please select to date', '');
            return false;
        }
        else {
            console.log(this.model);
            this._service.exportReports(this.model).subscribe(function (data) {
                //  console.log(data.data);return false;
                // var orders = [];
                // for (let i = 0; i < data.data.length; i++)
                // {
                //   var order = {};
                //   order['category'] = data.data[i].catName;
                //   //order['products'] = data.data[i].catName;
                //   for(let j = 0; j < data.data[i].products; i++)
                //   {
                //     var product = {};
                //     product['product_name'] = data.data[i].products[j].productCode+'-'+data.data[i].products[j].productName;
                //     product['product_qty'] = data.data[i].products[j].qty;
                //     product['product_price'] = data.data[i].products[j].price;
                //     product['apdl'] = data.data[i].products[j].apdmFirstName+' '+data.data[i].products[j].apdmLastName;
                //     order['products'] = product;
                //   }
                //   order['total_qty'] = data.data[i].total_qty;
                //   order['total_amount'] = data.data[i].total_amount;
                //   orders.push(order);
                // }
                //console.log(data.data);
                var hds = ['Order Number', 'Apdl', 'Store', 'Product', 'Quantity', 'Amount'];
                var options = {
                    fieldSeparator: ',',
                    quoteStrings: '"',
                    decimalseparator: '.',
                    headers: hds,
                    showTitle: false,
                    useBom: true,
                    removeNewLines: false,
                };
                var name = 'PPS_Order_reports';
                new __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__["ngxCsv"](data.data, name, options);
            }, function (err) {
                if (err.status == 409) {
                    _this.stores = [];
                    _this.apls = [];
                    _this.storeLoading = false;
                }
            });
        }
    };
    PexportReportComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.getData();
    };
    PexportReportComponent.prototype.getData = function () {
        var _this = this;
        this.storeLoading = true;
        this._service.getexportReportData().subscribe(function (data) {
            console.log(data);
            _this.stores = data.stores;
            _this.apls = data.apls;
        }, function (err) {
            if (err.status == 409) {
                _this.stores = [];
                _this.apls = [];
                _this.storeLoading = false;
            }
        });
    };
    PexportReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pexport-report',
            template: __webpack_require__("../../../../../src/app/portal/pexport-report/pexport-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pexport-report/pexport-report.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]])
    ], PexportReportComponent);
    return PexportReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pheader/pheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pheader/pheader.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <!-- <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n\n  <!-- <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Users</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </li>\n  </ul> -->\n  <ul class=\"nav navbar-nav ml-auto\">\n    <!-- <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n    </li> -->\n    <!-- <li class=\"nav-item\"> <a class=\"nav-link\" [attr.href]=\"InstructionSheet\" target=\"_blank\">Instruction Sheet</a> </li> -->\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"assets/img/avatars/avatar.png\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <!-- <div class=\"dropdown-header text-center\">\n          <strong>Account</strong>\n        </div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comments<span class=\"badge badge-warning\">42</span></a>\n        <div class=\"dropdown-header text-center\">\n          <strong>Settings</strong>\n        </div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Settings</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-secondary\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock Account</a> -->\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n  <button class=\"navbar-toggler aside-menu-toggler\" type=\"button\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n  </button>\n  <i class=\"fa fa-navicon visible-xs\" style=\"position: absolute; right: 14px;\"></i>\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pheader/pheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PheaderComponent = (function () {
    function PheaderComponent(_front, router) {
        this._front = _front;
        this.router = router;
        this.settings = {};
        this.InstructionSheet = '';
    }
    PheaderComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    PheaderComponent.prototype.logout = function () {
        localStorage.removeItem("ppsPortalToken");
        //  this.router.navigate(['/portal']);
        window.location.href = 'https://www.productprotectionsolutions.com/login.php';
    };
    PheaderComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['InstructionSheet']);
                _this.InstructionSheet = _this.settings['InstructionSheet'];
            }
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PheaderComponent.prototype, "token", void 0);
    PheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pheader',
            template: __webpack_require__("../../../../../src/app/portal/pheader/pheader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pheader/pheader.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__frontend_frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__frontend_frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PheaderComponent);
    return PheaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/porder-details/porder-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderst\n{\n  color: #b7b7b7 !important;\n  text-align: center;\n}\n\n.orderst i\n{\n  font-size: 43px;\n}\n\n.orderst.active\n{\n  color: #03a900 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/porder-details/porder-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item \"><a routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\"><a>Order details</a></li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-notification></app-notification>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <!-- {{Orderdetails | json }} -->\n              <h2>\n                <i *ngIf=\"Orderdetails.orderStatus == 1\" class=\"icon-check\"></i>\n                <i *ngIf=\"Orderdetails.orderStatus == 2\" class=\"icon-ban\"></i>\n                <i *ngIf=\"Orderdetails.orderStatus == 0\" class=\"icon-clock\"></i>\n                <span *ngIf=\"Orderdetails.orderStatus == 0\">Pending</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 2\">Denied</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 0\">Approved</span>\n                <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 1\">Shipped</span>\n              </h2>\n              <p>Total Amount - ${{Orderdetails.orderTotal | number : '1.2-2'}}</p>\n              <p style=\"margin-bottom: 4px;\">Order number - {{Orderdetails.orderNumber}}</p>\n              <p style=\"margin-bottom: 4px;\">Date Placed - {{Orderdetails.orderAddedOn | date : 'short' }}</p>\n              <!-- <p style=\"margin-bottom: 4px;\">Store number - {{Orderdetails.storeId}}</p> -->\n              <p style=\"margin-bottom: 4px;\">Store Number - {{Orderdetails.storeName}}</p>\n              <p style=\"margin-bottom: 4px;\">Store address - {{Orderdetails.storeAddress}}</p>\n              <p style=\"margin-bottom: 4px;\">Shipping Tracking Number - {{Orderdetails.orderTrackNumber}}</p>\n              <br>\n              <div *ngIf=\"(Orderdetails | json) != '{}'\">\n                <div class=\"\" *ngIf=\"Orderdetails.Shipped == 0\">\n                  Fedex Tracking number is not updated\n                </div>\n                <div>\n                  <div class=\"row\">\n                    <div class=\"col-md-4 col-4  orderst active\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Received</h3>\n                    </div>\n                    <div class=\"col-md-4 col-4 orderst\" [class.active]=\"Orderdetails.orderStatus == 11 || Orderdetails.orderStatus == 12\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Processed</h3>\n                    </div>\n                    <div class=\"col-md-4 col-4  orderst\" [class.active]=\"Orderdetails.orderStatus == 12\">\n                      <i class=\"fa fa-check-circle\"></i>\n                      <h3>Shipped</h3>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n              <br>\n              <table class=\"table table-responsive\">\n                <thead>\n                  <tr>\n                    <th>Item name</th>\n                    <th>Item Id</th>\n                    <th>Item quantity</th>\n                    <th>Item Price</th>\n                    <th>Total Price</th>\n                    <th>Note</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of Orderdetails.items\">\n                    <!-- <td>{{item.orderproductName}}</td>\n                    <td>{{item?.productVarItemId}}</td> -->\n\n\n                    <td *ngIf=\"item.productVarDesc && item.productVarDesc != ''\">{{item.productVarDesc}}</td>\n                    <td *ngIf=\"!item.productVarDesc\">{{item.productVarDesc_safe}}</td>\n\n                    <td *ngIf=\"item.productVarItemId && item.productVarItemId != ''\">{{item?.productVarItemId}}</td>\n                    <td *ngIf=\"!item.productVarItemId\">{{item?.productVarItemId_safe}}</td>\n                    <td>{{item.orderItemQty}}</td>\n                    <td>${{item.orderItemPrice / item.orderItemQty | number : '1.2-2'}}</td>\n                      <td>${{item.orderItemPrice | number : '1.2-2' }}</td>\n                      <td>{{item.note }}</td>\n                      <td style=\"color:red;\" *ngIf=\"item.isBackItem == 'yes'\">Back Order</td>\n                      <td  *ngIf=\"item.isBackItem == 'no'\"></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/porder-details/porder-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PorderDetailsComponent = (function () {
    function PorderDetailsComponent(route, fb, _http, _service, router, toasterService) {
        this.route = route;
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.token = {};
        this.Orderdetails = {};
        this.storeLoading = false;
        var params = this.route.snapshot.params;
        this.orderid = params.orderid;
    }
    PorderDetailsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.myOrders();
    };
    PorderDetailsComponent.prototype.myOrders = function () {
        var _this = this;
        var tkn = localStorage.getItem('ppsPortalToken');
        var tknn = JSON.parse(tkn);
        this._service.orderDetails(this.orderid).subscribe(function (data) {
            if (data.status == 200) {
                _this.Orderdetails = data.data;
            }
        }, function (err) {
        });
    };
    PorderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-porder-details',
            template: __webpack_require__("../../../../../src/app/portal/porder-details/porder-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/porder-details/porder-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], PorderDetailsComponent);
    return PorderDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/porders/porders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/porders/porders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item \"><a routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\"><a>Orders</a></li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-notification></app-notification>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-11\">\n\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <label for=\"\">Search</label>\n                  <div class=\"input-group\">\n                    <!-- <input type=\"text\"  #searchbox (keyup)=\"Search()\"> -->\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Type keywords\" [(ngModel)]=\"searchText\" (keyup)=\"fetchOrders(event)\">\n                  </div>\n                </div>\n                <!-- <div class=\"col-md-3\">\n                  <label for=\"\">Filter Orders</label>\n                  <div class=\"dropdown\">\n                    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Showing Approved\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                      <a class=\"dropdown-item\" href=\"#\">Show Approved</a>\n                      <a class=\"dropdown-item\" href=\"#\">Show Pending</a>\n                    </div>\n                  </div>\n                </div> -->\n                <div class=\"clearfix\">\n                </div>\n              </div>\n              <div class=\"clearfix\">\n                <br>\n              </div>\n\n\n\n                  <div class=\"loader\" *ngIf=\"storeLoading\">\n                    <div class=\"loader-inner ball-pulse\">\n                      <div class=\"my-loader\"></div>\n                      <div class=\"my-loader\"></div>\n                      <div class=\"my-loader\"></div>\n                    </div>\n                  </div>\n\n                  <div class=\"card\" *ngIf=\"!storeLoading\">\n                    <div class=\"card-header\">\n                      Orders\n                      <!-- <div class=\"dropdow pull-right\">\n                        <button data-toggle='dropdown' type=\"button\" name=\"button\" class=\"btn btn-primary btn-sm\">Per page</button>\n                        <span class=\"caret\"></span>\n                        <ul class=\"dropdown-menu\">\n                          <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">5</a></li>\n                          <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">10</a></li>\n                          <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(20)\">20</a></li>\n                          <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(30)\">30</a></li>\n                        </ul>\n                      </div> -->\n                    </div>\n\n\n                    <div class=\"card-body\" >\n                      <div *ngIf=\"Orders.length == 0\">\n                        No Orders found\n                      </div>\n                      <table class=\"table table-bordered table-responsive\" *ngIf=\"Orders.length != 0\">\n                        <thead>\n                          <tr>\n                            <!-- <th>Store Id</th> -->\n                            <th>Store Name</th>\n                            <th>Order Number</th>\n                            <th>Order Date</th>\n                            <th>Order Status</th>\n                            <th>Total amount</th>\n                            <th>\n                              <span *ngIf=\"typee != 'apdm'\">Placed by</span>\n                              <span *ngIf=\"typee == 'apdm'\">Placed by apdm</span>\n                            </th>\n                            <th>Actions</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let order of Orders  | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: TotalOrders }\">\n                            <!-- <td> {{ order.storeId }} </td> -->\n                            <td> {{ order.storeName }} </td>\n                            <td><a [routerLink]=\"['/dashboard/order-details',order.orderNumber]\">{{order.orderNumber}}</a></td>\n                            <td> {{ order.orderAddedOn | date : 'short' }} </td>\n                            <td>\n                              <!-- <span *ngIf=\"order.orderStatus == 0 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Pending</span>\n                              <span *ngIf=\"order.orderStatus == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Accepted</span>\n                              <span *ngIf=\"order.orderStatus == 2 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Rejected</span>\n                              <span *ngIf=\"order.orderStatus == 1 && order.orderTrackNumber != '' &&  order.Shipped == 1\">Shipped</span> -->\n                              <span *ngIf=\"order.orderStatus == 0\">Pending</span>\n                              <span *ngIf=\"order.orderStatus == 1\">Accepted</span>\n                              <span *ngIf=\"order.orderStatus == 9\">Back Order</span>\n                              <span *ngIf=\"order.orderStatus == 10\">Canceled</span>\n                              <span *ngIf=\"order.orderStatus == 11\">Printed</span>\n                              <span *ngIf=\"order.orderStatus == 12\">Shipped</span>\n                            </td>\n                            <td>${{order.orderTotal | number : '1.2-2' }}</td>\n                            <td>\n                              <span *ngIf=\"order.orderLevel == 2 && typee != 'apdm'\">Store</span>\n                              <!-- <span *ngIf=\"order.orderLevel == 1 && typee != 'apdm'\">Apdm</span> -->\n                              <span *ngIf=\"order.orderLevel == 1\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                              <span *ngIf=\"order.orderLevel == 3\">{{order.apdmFirstName2}} {{order.apdmLastName2}}</span>\n                            </td>\n                            <td width=\"390px\">\n                              <a *ngIf=\"order.orderLevel == 2 && order.orderStatus == 0 && token.userType == 3\" (click)=\"UpdateOrderStatus(1,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Approve</a>\n                              <a *ngIf=\"order.orderLevel == 2 && order.orderStatus == 0 && token.userType == 3\" (click)=\"UpdateOrderStatus(2,order.orderNumber)\" class=\"btn btn-xs btn-warning\"> Deny</a>\n\n                              <a *ngIf=\"order.orderLevel == 1 && order.orderStatus == 0 && token.userType == 4\" (click)=\"UpdateOrderStatus(1,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Approve</a>\n\n                              <a *ngIf=\"order.orderLevel == 1 && order.orderStatus == 0 && token.userType == 4\" (click)=\"UpdateOrderStatus(2,order.orderNumber)\" class=\"btn btn-xs btn-warning\"> Deny</a>\n\n                              <a *ngIf=\"order.orderLevel == 3 && order.orderStatus == 0 && token.userType == 4\" (click)=\"UpdateOrderStatus(1,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Approve</a>\n                              <a *ngIf=\"order.orderLevel == 3 && order.orderStatus == 0 && token.userType == 4\" (click)=\"UpdateOrderStatus(00,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Approve w/o FM</a>\n                              <a *ngIf=\"order.orderLevel == 3 && order.orderStatus == 0 && token.userType == 4\" (click)=\"UpdateOrderStatus(2,order.orderNumber)\" class=\"btn btn-xs btn-warning\"> Deny</a>\n\n                              <!-- <a (click)=\"deleteStoreConfirm(store.storeUserId)\" class=\"fa fa-remove icon-btn\"></a>\n                              <a (click)=\"editStore(store.storeId)\" class=\"fa fa-edit icon-btn\"></a> -->\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <pagination-controls *ngIf=\"!storeLoading && Orders.length != 0\" (pageChange)=\"page = fetchOrders($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                      </pagination-controls>\n                      <!-- <pagination-controls (pageChange)=\"page = listStores($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                      </pagination-controls> -->\n                    </div>\n                  </div>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/porders/porders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PordersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PordersComponent = (function () {
    function PordersComponent(route, fb, _http, _service, router, toasterService) {
        this.route = route;
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.token = {};
        this.Orders = [];
        this.TotalOrders = 0;
        this.storeLoading = false;
        this.searchText = '';
        this.perpage = 10;
        this.limit250 = 1;
        this.event = 1;
    }
    PordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.route.params.subscribe(function (routeParams) {
            _this.typee = routeParams['type'];
            var type = routeParams['type'];
            console.log(type);
            if (type == 'apl')
                _this.getPortalOrders(_this.event, 'admin-apdm', '');
            else if (type == 'approved')
                _this.getPortalOrders(_this.event, 'admin-approved', '');
            else if (type == 'pending')
                _this.getPortalOrders(_this.event, 'admin-pending', '');
            else if (type == 'my') {
                if (_this.token['userType'] == 9)
                    _this.getPortalOrders(_this.event, 'exapl-my', _this.token['apdm'].apdmID);
                else
                    _this.getPortalOrders(_this.event, 'apdm-my', _this.token['apdm'].apdmID);
            }
            else if (type == 'stores') {
                if (_this.token['userType'] == 9)
                    _this.getPortalOrders(_this.event, 'exapl-stores', _this.token['apdm'].apdmID);
                else
                    _this.getPortalOrders(_this.event, 'apdm-stores', _this.token['apdm'].apdmID);
            }
        });
        // if(this.token['apdm'].apdmID)
        // this.getOrders()
    };
    PordersComponent.prototype.getOrders = function () {
        var _this = this;
        // this.storeLoading = true;
        this._service.getAdpmOrders(this.token['apdm'].apdmID).subscribe(function (data) {
            if (data.status == 200) {
                _this.storeLoading = false;
                _this.Orders = data.data;
            }
        });
    };
    PordersComponent.prototype.fetchOrders = function (page) {
        console.log('here');
        var params = this.route.snapshot.params;
        var type = params['type'];
        if (type == 'apl')
            this.getPortalOrders(page, 'admin-apdm', '');
        else if (type == 'approved')
            this.getPortalOrders(page, 'admin-approved', '');
        else if (type == 'pending')
            this.getPortalOrders(page, 'admin-pending', '');
        else if (type == 'my')
            this.getPortalOrders(page, 'apdm-my', this.token['apdm'].apdmID);
        else if (type == 'stores')
            this.getPortalOrders(page, 'apdm-stores', this.token['apdm'].apdmID);
        return page;
    };
    PordersComponent.prototype.getPortalOrders = function (page, type, id) {
        var _this = this;
        this.event = page;
        if (this.searchText == '')
            var text = 'all';
        else
            var text = this.searchText;
        this.storeLoading = true;
        this._service.getPortalOrders(type, id, text, page, this.perpage).subscribe(function (data) {
            if (data.status == 200) {
                _this.storeLoading = false;
                _this.Orders = data.data.data;
                _this.TotalOrders = data.data.total;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.storeLoading = false;
                _this.Orders = [];
            }
        });
        return this.event;
    };
    PordersComponent.prototype.UpdateOrderStatus = function (st, order) {
        var _this = this;
        var value = {};
        value['data'] = {};
        value['data']['orderStatus'] = st;
        value['ref'] = order;
        value['type'] = 'orderStatus';
        this._service.updatepost(value).subscribe(function (data) {
            console.log(data);
            if (data.status == '200') {
                console.log('okk');
                _this.fetchOrders(_this.event);
            }
        });
    };
    PordersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-porders',
            template: __webpack_require__("../../../../../src/app/portal/porders/porders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/porders/porders.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], PordersComponent);
    return PordersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item \"><a routerLink=\"/dashboard\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\"><a>List apls</a></li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div *ngIf=\"apdmLoading\">\n            <div class=\"loader\">\n              <div class=\"loader-inner ball-pulse\">\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\" *ngIf=\"!apdmLoading\">\n            <div class=\"card-header\">\n              Apls\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\" *ngIf=\"!apdmLoading && (apdmList | json ) != '[]'\">\n                <table class=\"table table-bordered\">\n                  <tr>\n                    <th>Apl Id</th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>City</th>\n                    <!-- <th>Action</th> -->\n                  </tr>\n                  <tr *ngFor=\"let apdm of apdmList | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                    <td>{{ apdm.apdmID}} </td>\n                    <td>{{ apdm.apdmFirstName}} {{ apdm.apdmLastName}} </td>\n                    <td>{{ apdm.apdmEmail}} </td>\n                    <td>{{ apdm.apdmCity}} </td>\n                    <!-- <td>\n                      <a (click)=\"DeleteConfirm(apdm.apdmID)\" class=\"fa fa-remove icon-btn\"></a>\n                      <a (click)=\"editProduct(apdm.apdmID)\" class=\"fa fa-edit icon-btn\"></a>\n                      <a (click)=\"assignStore(apdm.apdmID)\" class=\"fa fa-plus icon-btn\"></a>\n                    </td> -->\n                  </tr>\n                </table>\n              </div>\n                <div *ngIf=\"!apdmLoading && (apdmList | json ) == '[]'\">\n                  No Records\n                </div>\n              </div>\n            </div>\n          </div>\n            <pagination-controls *ngIf=\"!apdmLoading\" (pageChange)=\"page = getapdms($event,3)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n\n        </div>\n    </div>\n  </main>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalListApdmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortalListApdmsComponent = (function () {
    function PortalListApdmsComponent(route, fb, router, _p, toasterService) {
        this.route = route;
        this.fb = fb;
        this.router = router;
        this._p = _p;
        this.apdmList = [];
        this.apdmLoading = false;
        this.perpage = 10;
        this.token = {};
        this.type = 9;
        this.toasterService = toasterService;
    }
    PortalListApdmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.route.params.subscribe(function (routeParams) {
            var type = routeParams['readonly'];
            console.log('type');
            console.log(type);
            console.log('type');
            if (type && type == 'readonly') {
                _this.type = 9;
                _this.getapdms(1, 9); // 9 is the userType for ex apl
            }
            else {
                _this.type = 3;
                _this.getapdms(1, 3); // 3 is the userType for apl
            }
        });
    };
    PortalListApdmsComponent.prototype.getapdms = function (e, type) {
        var _this = this;
        this.apdmLoading = true;
        this._p.apdmUserListing(e, type, this.perpage).subscribe(function (data) {
            _this.apdmLoading = false;
            _this.apdmList = data.data.result;
            _this.totalItem = data.data.total_rows;
        }, function (err) { return console.log(err); });
        return e;
    };
    PortalListApdmsComponent.prototype.DeleteConfirm = function (apdmid) {
        this.ApdmToDelete = apdmid;
        jQuery('#deleteModal').modal('show');
    };
    PortalListApdmsComponent.prototype.deleteApdm = function () {
        var _this = this;
        var value = {};
        value['id'] = this.ApdmToDelete;
        value['type'] = 'apdm';
        this._p.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#deleteModal').modal('hide');
                _this.ApdmToDelete = '';
                _this.getapdms(1, _this.type);
            }
        }, function (err) { return console.log(err); });
    };
    PortalListApdmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portal-list-apdms',
            template: __webpack_require__("../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/portal-list-apdms/portal-list-apdms.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]])
    ], PortalListApdmsComponent);
    return PortalListApdmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.html":
/***/ (function(module, exports) {

module.exports = "\n<toaster-container></toaster-container>\n\n<div class=\"container\" style=\"padding-top:100px\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <a routerLink=\"/\">\n          <img src=\"assets/img/PPS-Logo-1.png\"/>\n        </a>\n      </div>\n      <br>\n      <div class=\"card-group\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <p class=\"text-muted\">Sign In to your account</p>\n            <form [formGroup]=\"login\" (ngSubmit)=\"submitForm(login.value)\">\n              <div class=\"input-group flex-wrap  mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\"  [formControl]=\"login.controls['username']\" [ngClass]=\"{'is-invalid':!login.controls['username'].valid   && loginsubmitted}\" >\n                <br>\n                <div class=\"invalid-feedback w-100\" *ngIf=\"login.controls['username'].hasError('required')    && loginsubmitted\">You must include a Username.</div>\n              </div>\n              <div class=\"input-group flex-wrap mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  [formControl]=\"login.controls['password']\" [ngClass]=\"{'is-invalid':!login.controls['password'].valid   && loginsubmitted}\">\n                <br>\n                <div class=\"invalid-feedback  w-100\"  *ngIf=\"login.controls['password'].hasError('required')    && loginsubmitted\">You must include a Password.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12 col-md-12 d-flex flex-wrap justify-content-center justify-content-md-between login_btn_out align-items-md-center\">\n                  <button type=\"submit\" class=\"btn btn-primary px-4 btn-block-xs-only\">Login</button>\n                  <a routerLink=\"/forgot-password\"> Forgot Password</a>\n                </div>\n                <!-- <div class=\"col-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div> -->\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n          <div class=\"card-body text-center\">\n            <div>\n              <h2>Sign up</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n              <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortalComponent = (function () {
    function PortalComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.loginsubmitted = false;
        this.responseStatus = [];
        this.toasterService = toasterService;
        this.http = _http;
        this.login = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    PortalComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.loginsubmitted = true;
        if (!this.login.valid) {
            return false;
        }
        this.toasterService.pop('info', ' Loading...', '');
        this._service.login(value).subscribe(function (data) {
            console.log(data);
            if (data.status == 200) {
                localStorage.removeItem('whichStore');
                _this.loginsubmitted = false;
                _this.toasterService.clear();
                _this.toasterService.pop('success', 'Login Successful,' + ' Redirecting...', '');
                var tkn = JSON.stringify(data.data);
                localStorage.setItem('ppsPortalToken', tkn);
                setTimeout(function (router) {
                    _this.router.navigate(['/dashboard']);
                }, 1000);
            }
            else {
                _this.toasterService.clear();
                _this.toasterService.pop('error', data.data, '');
            }
        }, function (err) {
            _this.toasterService.clear();
            if (err.status == 409)
                _this.toasterService.pop('error', 'Invalid Login Details', '');
            else
                _this.toasterService.pop('error', 'Something wro ng,try again', '');
        });
    };
    PortalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = window.location.href;
        var vars = {};
        if (url.length !== 0)
            url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                key = decodeURIComponent(key);
                if (typeof vars[key] === "undefined") {
                    vars[key] = decodeURIComponent(value);
                }
                else {
                    vars[key] = [].concat(vars[key], decodeURIComponent(value));
                }
            });
        if (vars['username'] != undefined) {
            this._service.login(vars).subscribe(function (data) {
                console.log(data);
                if (data.status == 200) {
                    localStorage.removeItem('whichStore');
                    _this.loginsubmitted = false;
                    _this.toasterService.clear();
                    _this.toasterService.pop('success', 'Login Successful,' + ' Redirecting...', '');
                    var tkn = JSON.stringify(data.data);
                    localStorage.setItem('ppsPortalToken', tkn);
                    setTimeout(function (router) {
                        _this.router.navigate(['/dashboard']);
                    }, 1000);
                }
                else {
                    _this.toasterService.clear();
                    _this.toasterService.pop('error', data.data, '');
                }
            }, function (err) {
                _this.toasterService.clear();
                if (err.status == 409)
                    _this.toasterService.pop('error', 'Invalid Login Details', '');
                else
                    _this.toasterService.pop('error', 'Something wro ng,try again', '');
            });
        }
        else {
            console.log(1);
        }
    };
    PortalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__("../../../../../src/app/portal/portal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/portal.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortalService = (function () {
    function PortalService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
        var tkn = localStorage.getItem('ppsPortalToken');
        this.token = JSON.parse(tkn);
    }
    PortalService.prototype.getSettings = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-settings/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.login = function (value) {
        var form = {
            'useremail': value.username,
            'password': value.password,
            'deviceId': value.password,
            'registerId': value.password,
            'usertype': 34
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/login/', form, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.addStore = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addStoreUser/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.listStores = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeUserListing/page/' + value['page'] + '/perpage/' + value['perpage'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.storeDetail = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeDetails/storeid/' + value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.updateStore = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateStoreUserDetail/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.update = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/update/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.updatepost = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/update-fun/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.deleteStore = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/activeUserStatus/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.insert = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/insert/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.delete = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/delete/id/' + value['id'] + '/type/' + value['type'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.get = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get/' + value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        input.append("file", fileToUpload);
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/upload-image/', input, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.submitCat = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/submit-cat/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getAdpmOrders = function (adpm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getadpmorders/' + adpm, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getPortalOrders = function (type, id, text, page, perpage) {
        if (id == '')
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-portal-orders/' + page + '/' + perpage + '/' + type + '/' + text;
        else
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-portal-orders/' + page + '/' + perpage + '/' + type + '/' + id + '/' + text;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getAdpmStores = function (apdm, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getAdpmStores/' + apdm + '/' + type, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.apdmUserListing = function (page, type, perpage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/apdmUserListing/' + page + '/' + perpage + '/' + type, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getdashboard = function (url, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/' + url + '/' + id, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getexportReportData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getexportReportData', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.exportReports = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/exportReports', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.orderDetails = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/order-details/' + v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.chnagePassword = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/change-password/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.getlimit = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-limit/').map(function (res) { return res.json() || {}; });
    };
    PortalService.prototype.orderToCart = function (o) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/order-to-cart/' + o).map(function (res) { return res.json() || {}; });
    };
    PortalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PortalService);
    return PortalService;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pproductdetails/pproductdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pproductdetails/pproductdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pproductdetails works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pproductdetails/pproductdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PproductdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PproductdetailsComponent = (function () {
    function PproductdetailsComponent() {
    }
    PproductdetailsComponent.prototype.ngOnInit = function () {
    };
    PproductdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pproductdetails',
            template: __webpack_require__("../../../../../src/app/portal/pproductdetails/pproductdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pproductdetails/pproductdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PproductdetailsComponent);
    return PproductdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/pproducts/pproducts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/pproducts/pproducts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pproducts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/portal/pproducts/pproducts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PproductsComponent = (function () {
    function PproductsComponent() {
        this.token = {};
    }
    PproductsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        console.log(tokenn);
        this.token = JSON.parse(tokenn);
    };
    PproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pproducts',
            template: __webpack_require__("../../../../../src/app/portal/pproducts/pproducts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/pproducts/pproducts.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [])
    ], PproductsComponent);
    return PproductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/preports/preports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/preports/preports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-pheader></app-pheader>\n<div class=\"app-body\">\n  <app-psidebar *ngIf=\"token\" [token]=\"token\"></app-psidebar>\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"ui-view\">\n        <div class=\"animated fadeIn\" style=\"padding-top:20px\">\n          <div class=\"row\" *ngIf=\"type == 'day-wise'\">\n            <div class=\"btn-group\">\n              <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"show == 'today'\" (click)=\"fetch('today')\">Today</button>\n              <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"show == 'week'\" (click)=\"fetch('week')\">Week</button>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'stores'\">\n            <ng2-completer (selected)=\"tagselected($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr\" [datasource]=\"dataService\" [minSearchLength]=\"0\" placeholder=\"Seach Stores\"></ng2-completer>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'product'\">\n            <ng2-completer (selected)=\"tagselected2($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr2\" [datasource]=\"dataService2\" [minSearchLength]=\"0\" placeholder=\"Seach Products\"></ng2-completer>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'apls'\">\n            <ng2-completer (selected)=\"tagselected3($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr3\" [datasource]=\"dataService3\" [minSearchLength]=\"0\" placeholder=\"Seach Apls\"></ng2-completer>\n          </div>\n          <div class=\"row tag-list\">\n            <a *ngFor=\"let tag of SearchTags; let i = index\">\n              {{ tag.storeName }}\n              <span (click)=\"SearchTags.splice(i,1); dashboardInfoFun()\"> &times; </span>\n            </a>\n            <a *ngFor=\"let tag of SearchTags2; let i = index\">\n              {{ tag.productName }}\n              <span (click)=\"SearchTags2.splice(i,1); dashboardInfoFun()\"> &times; </span>\n            </a>\n            <!-- {{ SearchTags3 | json }} -->\n            <a *ngFor=\"let tag of SearchTags3; let i = index\">\n              {{ tag.apdmName }}\n              <span (click)=\"SearchTags3.splice(i,1); dashboardInfoFun()\"> &times; </span>\n            </a>\n          </div>\n\n          <div class=\"row\" style=\"padding-top:20px\">\n            <div class=\"card\" *ngIf=\"!storeLoading\" style=\"width:100%\">\n              <div class=\"card-header\">\n                <span class=\"pull-left\">Orders</span>\n                <a hand (click)=\"export(show)\" class=\"btn btn-primary btn-xs pull-right\" style=\"color:#fff\">Export</a>\n              </div>\n              <div class=\"card-body\">\n                <div *ngIf=\"shown.length == 0\">\n                  No Orders found\n                </div>\n                <table class=\"table table-bordered\" *ngIf=\"shown.length != 0\">\n                  <thead>\n                    <tr>\n                      <th>Store Number</th>\n                      <th>Store Name</th>\n                      <th>Order Number</th>\n                      <th>Order Date</th>\n                      <th>Order Status</th>\n                      <th>Total amount</th>\n                      <th>Placed by</th>\n                      <!-- <th>Apdm name</th> -->\n                      <!-- <th>Actions</th> -->\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <!-- <tr *ngFor=\"let order of Orders | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: TotalOrders }\"> -->\n                    <tr *ngFor=\"let order of shown\">\n                      <td>{{order.storeId}}</td>\n                      <td>{{order.storeName}}</td>\n                      <td><a [routerLink]=\"['/admin-panel/order-details',order.orderNumber]\">{{order.orderNumber}}</a></td>\n                      <td>{{order.orderAddedOn | date : 'short' }}</td>\n                      <td>\n                        <span *ngIf=\"order.orderStatus == 0\">Pending</span>\n                        <span *ngIf=\"order.orderStatus == 1\">Accepted</span>\n                        <span *ngIf=\"order.orderStatus == 9\">Back Order</span>\n                        <span *ngIf=\"order.orderStatus == 10\">Canceled</span>\n                        <span *ngIf=\"order.orderStatus == 11\">Printed</span>\n                        <span *ngIf=\"order.orderStatus == 12\">Shipped</span>\n                        <span *ngIf=\"order.orderStatus == 2\">Rejected</span>\n                        <!-- <span *ngIf=\"order.printed == 0 && order.orderStatus == 0 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Pending</span>\n                        <span *ngIf=\"order.printed == 0 && order.orderStatus == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Accepted</span>\n                        <span *ngIf=\"order.printed == 0 && order.orderStatus == 2 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Rejected</span>\n                        <span *ngIf=\"order.printed == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Printed</span>\n\n                        <span *ngIf=\"order.orderStatus == 1 && order.orderTrackNumber != '' &&  order.Shipped == 1\">Shipped</span> -->\n                      </td>\n                      <td>${{order.orderTotal | number : '1.2-2' }}</td>\n                      <td>\n                        <span *ngIf=\"order.orderLevel == 2\">Store</span>\n                        <!-- <span *ngIf=\"order.orderLevel == 1 && typee != 'apdm'\">Apdm</span> -->\n                        <span *ngIf=\"order.orderLevel == 1 || order.orderLevel == 3\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                      </td>\n                      <!-- <td>\n                        <span *ngIf=\"order.orderLevel == 1\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                      </td> -->\n                    </tr>\n                  </tbody>\n                </table>\n                <!-- <pagination-controls (pageChange)=\"page = Search($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n                      <!-- <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-primary\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('today')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.today.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Today Orders</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-info\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('week')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.week.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This week</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-warning\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('month')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.month.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This month</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-danger\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('total')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.total.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Total orders</p>\n                          </div>\n                        </div>\n                      </div> -->\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <div style=\"display: block;\" *ngIf=\"lineChartData.length != 0\">\n                        <!-- <canvas baseChart width=\"400\" height=\"400\"\n                                    [datasets]=\"lineChartData\"\n                                    [labels]=\"lineChartLabels\"\n                                    [options]=\"lineChartOptions\"\n                                    [colors]=\"lineChartColors\"\n                                    [legend]=\"lineChartLegend\"\n                                    [chartType]=\"lineChartType\"\n                                    (chartHover)=\"chartHovered($event)\"\n                                    (chartClick)=\"chartClicked($event)\"></canvas> -->\n                        </div>\n                      </div>\n                    </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n<app-side-links></app-side-links>\n"

/***/ }),

/***/ "../../../../../src/app/portal/preports/preports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__ = __webpack_require__("../../../../ngx-csv/ngx-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreportsComponent = (function () {
    function PreportsComponent(route, fb, router, _sp, toasterService, completerService) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.completerService = completerService;
        this.Products = [];
        this.dashboardInfo = {};
        this.show = 'today';
        this.shown = [];
        this.SearchTags = [];
        this.SearchTags2 = [];
        this.SearchTags3 = [];
        this.type = '';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */];
        this.token = {};
        // public lineChartData:Array<any> = [
        //   {data: [59, 80, 81, 56, 55, 40], label: 'Sale'},
        // ];
        this.lineChartData = [];
        this.lineChartLabels = ['August', 'September', 'October', 'November', 'December', 'January'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.toasterService = toasterService;
        this.route.params.subscribe(function (routeParams) {
            _this.shown = [];
            // this.clref = routeParams.clref;
            _this.type = routeParams.type;
            if (_this.type == 'stores')
                _this.show = 'total-stores';
            else if (_this.type == 'product')
                _this.show = 'total-products';
            else if (_this.type == 'apls')
                _this.show = 'total-apls';
            else
                _this.show = 'today';
            _this.dashboardInfoFun();
        });
        // let params: any = this.route.snapshot.params;
        // this.type = params.type;
        // if(this.type == 'stores')
        // this.show = 'total';
        this.dataService = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-stores/', 'storeName', 'storeName');
        this.dataService2 = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-products/', 'productName', 'productName');
        this.dataService3 = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-apls/', 'apdmFirstName,apdmLastName', 'apdmFirstName,apdmLastName');
    }
    PreportsComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        // for (let i = 0; i < this.lineChartData.length; i++) {
        //   _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        //   }
        // }
        this.lineChartData = _lineChartData;
    };
    // events
    PreportsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PreportsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PreportsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        console.log(tokenn);
        this.token = JSON.parse(tokenn);
        this.dashboardInfoFun();
    };
    PreportsComponent.prototype.dashboardInfoFun = function () {
        var _this = this;
        var obj = {};
        obj['show'] = this.show;
        var str = [];
        if (obj['show'] == 'total-products') {
            for (var i = 0; i < this.SearchTags2.length; i++) {
                str.push(this.SearchTags2[i]['productID']);
            }
        }
        else if (obj['show'] == 'total-apls') {
            for (var i = 0; i < this.SearchTags3.length; i++) {
                str.push(this.SearchTags3[i]['apdmUserId']);
            }
        }
        else {
            for (var i = 0; i < this.SearchTags.length; i++) {
                str.push(this.SearchTags[i]['storeUserId']);
            }
        }
        // obj['stores'] = str.join('_');
        if (obj['show'] == 'total-products')
            obj['products'] = str;
        else if (obj['show'] == 'total-apls')
            obj['apls'] = str;
        else
            obj['stores'] = str;
        var aa = JSON.stringify(obj);
        this._sp.dashboardInfo(encodeURIComponent(btoa(aa))).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                var sale = [];
                for (var i in data.data['sale2']) {
                    sale.push(data.data['sale2'][i]['total']);
                }
                _this.lineChartData.push({ data: sale, label: 'Sale' });
                _this.dashboardInfo = data.data;
                // this.fetch('today');
                console.log(data.data['total']);
                console.log(_this.show);
                if (_this.show == 'total-stores' || _this.show == 'total-products' || _this.show == 'total-apls')
                    _this.shown = data.data['total'];
            }
            else {
                _this.dashboardInfo = {};
            }
        }, function (err) {
            _this.dashboardInfo = {};
        });
    };
    PreportsComponent.prototype.export = function (type) {
        console.log(type);
        if (type == 'total-stores' || type == 'total-apls' || type == 'total-products') {
            type = 'total';
        }
        if (this.dashboardInfo[type].length != 0) {
            var orders = [];
            for (var i = 0; i < this.dashboardInfo[type].length; i++) {
                var order = {};
                order['storeName'] = this.dashboardInfo[type][i]['storeName'];
                // order['orderId'] = this.dashboardInfo[type][i]['orderId'];
                order['orderNumber'] = this.dashboardInfo[type][i]['orderNumber'].toString();
                order['orderAddedOn'] = this.dashboardInfo[type][i]['orderAddedOn'];
                // if(this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 0 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                // this.dashboardInfo[type][i]['orderStatus'] = 'Pending';
                //
                // else if(this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 1 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                // this.dashboardInfo[type][i]['orderStatus'] = 'Accepted';
                //
                // else if(this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 2 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                // this.dashboardInfo[type][i]['orderStatus'] = 'Rejected';
                //
                // else if(this.dashboardInfo[type][i]['printed'] == 1 && (this.dashboardInfo[type][i]['orderTrackNumber'] != '' || this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                // this.dashboardInfo[type][i]['orderStatus'] = 'Printed';
                //
                // else if(this.dashboardInfo[type][i]['orderStatus'] == 1 && this.dashboardInfo[type][i]['orderTrackNumber'] != '' && this.dashboardInfo[type][i]['Shipped'] == 1)
                // this.dashboardInfo[type][i]['orderStatus'] = 'Shipped';
                if (this.dashboardInfo[type][i]['orderStatus'] == 0)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Pending';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 1)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Accepted';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 9)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Back Order';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 10)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Canceled';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 11)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Printed';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 12)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Shipped';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 2)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Rejected';
                // order['storeId'] = this.dashboardInfo[type][i]['storeId'];
                order['orderStatus'] = this.dashboardInfo[type][i]['orderStatus'];
                // order['orderTotal'] = parseFloat(Math.round(this.dashboardInfo[type][i]['orderTotal'] * 100) / 100).toFixed(2);
                order['orderTotal'] = Number(this.dashboardInfo[type][i]['orderTotal']).toFixed(2);
                if (this.dashboardInfo[type][i]['orderLevel'] == 2)
                    order['Placed by'] = 'Store';
                else if (this.dashboardInfo[type][i]['orderLevel'] == 1 || this.dashboardInfo[type][i]['orderLevel'] == 3)
                    order['Placed by'] = this.dashboardInfo[type][i]['apdmFirstName'] + ' ' + this.dashboardInfo[type][i]['apdmLastName'];
                orders.push(order);
            }
            var hds = Object.keys(orders[0]);
            console.log(hds);
            // for(var i = 0 ; i < hds.length ; i++){
            //     hds[i] = '<b>'+hds[i].charAt(0).toUpperCase() + hds[i].substr(1)+'</b>';
            // }
            console.log(hds);
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                headers: hds,
                showTitle: false,
                useBom: true,
                removeNewLines: false,
            };
            // console.log(Object.keys(orders[0]));
            if (this.type == 'stores')
                var name = 'PPS_Orders_ByStores';
            else if (this.type == 'product')
                var name = 'PPS_Orders_ByProducts';
            else if (this.type == 'apls')
                var name = 'PPS_Orders_ByApls';
            else {
                if (this.show == 'today')
                    var name = 'PPS_Orders_ByToday';
                else
                    var name = 'PPS_Orders_Byweek';
            }
            new __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__["ngxCsv"](orders, name, options);
        }
    };
    PreportsComponent.prototype.fetch = function (show) {
        this.show = show;
        if (this.dashboardInfo[show]) {
            this.shown = this.dashboardInfo[show];
            // console.log(this.shown);
        }
    };
    PreportsComponent.prototype.tagselected = function (event) {
        this.show = 'total-stores';
        if (event) {
            if (this.SearchTags.length == 0) {
                this.SearchTags.push({ 'storeName': event.originalObject.storeName, 'storeUserId': event.originalObject.storeUserId });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags.length; i++) {
                    if (event.originalObject.storeId == this.SearchTags[i]['storeId']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags.push({ 'storeName': event.originalObject.storeName, 'storeUserId': event.originalObject.storeUserId });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    PreportsComponent.prototype.tagselected2 = function (event) {
        this.show = 'total-products';
        if (event) {
            console.log(event);
            if (this.SearchTags2.length == 0) {
                this.SearchTags2.push({ 'productName': event.originalObject.productName, 'productID': event.originalObject.productID });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags2.length; i++) {
                    if (event.originalObject.productID == this.SearchTags2[i]['productID']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags2.push({ 'productName': event.originalObject.productName, 'productID': event.originalObject.productID });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    PreportsComponent.prototype.tagselected3 = function (event) {
        this.show = 'total-apls';
        if (event) {
            console.log(event);
            if (this.SearchTags3.length == 0) {
                this.SearchTags3.push({ 'apdmName': event.originalObject.apdmFirstName + ' ' + event.originalObject.apdmLastName, 'apdmUserId': event.originalObject.apdmUserId });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags3.length; i++) {
                    if (event.originalObject.apdmUserId == this.SearchTags3[i]['apdmUserId']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags3.push({ 'apdmName': event.originalObject.apdmFirstName + ' ' + event.originalObject.apdmLastName, 'apdmUserId': event.originalObject.apdmUserId });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    PreportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preports',
            template: __webpack_require__("../../../../../src/app/portal/preports/preports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/preports/preports.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_6_ng2_completer__["a" /* CompleterService */]])
    ], PreportsComponent);
    return PreportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/psidebar/psidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/psidebar/psidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div class=\"sidebar\" style=\"height:600px;\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 4 || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\"><i class=\"icon-speedometer\"></i> Dashboard</a>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\"  *ngIf=\"token.userType == 4\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Reports </a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/reports/day-wise\"><i class=\"icon-star\"></i> By Day</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/reports/stores\"><i class=\"icon-star\"></i> By Stores</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/reports/product\"><i class=\"icon-star\"></i> By Product</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/reports/apls\"><i class=\"icon-star\"></i> By Apls</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/export-reports\"><i class=\"icon-star\"></i> Export Reports</a>\n          </li>\n        </ul>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Products</a>\n      </li> -->\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/products\"><i class=\"icon-speedometer\"></i> Shop</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3  || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/my-stores\"><i class=\"icon-speedometer\"></i> My Stores</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/orders/my\"><i class=\"icon-speedometer\"></i> My Orders</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3  || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/orders/stores\"><i class=\"icon-speedometer\"></i> Orders Placed by stores</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 3 || token.userType == 9\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/cart\"><i class=\"icon-basket\"></i> Cart</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"token.userType == 4\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/list-apls\"><i class=\"icon-speedometer\"></i> List APLS </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 4\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/orders/apl\"><i class=\"icon-speedometer\"></i> Orders by APLS </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 4\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/orders/approved\"><i class=\"icon-speedometer\"></i> Approved Orders </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"token.userType == 4\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/orders/pending\"><i class=\"icon-speedometer\"></i> Pending Orders </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/account-settings\"><i class=\"icon-speedometer\"></i> Account settings </a>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [attr.href]=\"catalogue\" target=\"_blank\"><i class=\"icon-speedometer\"></i> PPS Newsletter</a> </li>\n      <li class=\"nav-item\"><a  class=\"nav-link\" routerLink=\"/instruction-sheets\"><i class=\"icon-speedometer\"></i> Instruction Sheets and Resource Material</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/faq\"><i class=\"icon-speedometer\"></i> FAQ</a></li>\n\n      <!-- <li class=\"nav-title\">\n        UI Elements\n      </li> -->\n      <!-- <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-puzzle\"></i> Products</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/categories\"><i class=\"icon-star\"></i> Categories</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-product\"><i class=\"icon-star\"></i> Add Product</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-products\"><i class=\"icon-star\"></i> List Products</a>\n          </li>\n        </ul>\n      </li> -->\n      <!-- <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Stores</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-stores\"><i class=\"icon-star\"></i> List Stores</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-store\"><i class=\"icon-star\"></i> Add a new store</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/new-stores-access-requests\"><i class=\"icon-star\"></i> New store requests</a>\n          </li>\n        </ul>\n      </li> -->\n      <!-- <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> APDMS</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-apdms\"><i class=\"icon-star\"></i> Add APDMS</a>\n          </li>\n        </ul>\n      </li> -->\n    </ul>\n  </nav>\n  <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\"></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/psidebar/psidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_service__ = __webpack_require__("../../../../../src/app/portal/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PsidebarComponent = (function () {
    function PsidebarComponent(_service, router) {
        this._service = _service;
        this.router = router;
        this.settings = {};
        this.InstructionSheet = '';
        this.catalogue = '';
    }
    PsidebarComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    PsidebarComponent.prototype.ngAfterViewInit = function () {
        console.log(jQuery);
        jQuery('[data-play="dropdown"]').click(function () {
            jQuery(this).parent('.nav-dropdown').toggleClass('open');
        });
    };
    PsidebarComponent.prototype.getSettings = function () {
        var _this = this;
        this._service.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['InstructionSheet']);
                _this.InstructionSheet = _this.settings['InstructionSheet'];
                _this.catalogue = _this.settings['catalogue'];
            }
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PsidebarComponent.prototype, "token", void 0);
    PsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-psidebar',
            template: __webpack_require__("../../../../../src/app/portal/psidebar/psidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/psidebar/psidebar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__portal_service__["a" /* PortalService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__portal_service__["a" /* PortalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PsidebarComponent);
    return PsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reset-account-password/reset-account-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reset-account-password/reset-account-password.component.html":
/***/ (function(module, exports) {

module.exports = "\n<toaster-container></toaster-container>\n\n<div class=\"container\" style=\"padding-top:100px\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <a routerLink=\"/\">\n          <img src=\"assets/img/PPS-Logo-1.png\"/>\n        </a>\n      </div>\n      <br>\n      <div class=\"card-group\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <p class=\"text-muted\">Reset Password</p>\n            <form class=\"m-t\" role=\"form\" [formGroup]=\"login\" (ngSubmit)=\"submitForm(login.value)\" >\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!login.controls['password'].valid  && submit }\">\n                  <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n                </div>\n                <div *ngIf=\"login.controls['password'].hasError('required') && submit\" class=\"alr\">Password is required</div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!login.controls['passwordr'].valid  && submit }\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\"  formControlName=\"passwordr\">\n                </div>\n                <div *ngIf=\"login.controls['passwordr'].hasError('required') && submit\" class=\"alr\">Confirm Password is required</div>\n                <div *ngIf=\"login.errors && login.errors['passwordUnMatch'] && submit\" class=\"alr\">Password not matched.</div>\n                <button type=\"submit\" class=\"btn btn-primary btn-block \"> Change Password</button>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reset-account-password/reset-account-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetAccountPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_service__ = __webpack_require__("../../../../../src/app/forgot-password/forgot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function passwordMatcher(c) {
    return c.get('password').value === c.get('passwordr').value
        ? null : { 'passwordUnMatch': true };
}
var ResetAccountPasswordComponent = (function () {
    function ResetAccountPasswordComponent(route, fb, _http, _forgot, router, toasterService) {
        this._http = _http;
        this._forgot = _forgot;
        this.router = router;
        this.submit = false;
        this.passwordStrength = '';
        this.passwordStrengthColor = '';
        this.passwordStrengthClass = '';
        this.passwordOk = false;
        this.color = {};
        this.toasterService = toasterService;
        this.http = _http;
        this.login = fb.group({
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'passwordr': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        }, { validator: passwordMatcher });
        var params = route.snapshot.params;
        this.userref = params.token;
    }
    ResetAccountPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetAccountPasswordComponent.prototype.submitForm = function (v) {
        var _this = this;
        this.submit = true;
        if (!this.login.valid)
            return false;
        v['userref'] = this.userref;
        this._forgot.passwordChange(v).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.success_msg, '');
                _this.login.reset();
                _this.submit = false;
                setTimeout(function (router) {
                    _this.router.navigate(['/portal']);
                }, 1000); //5s
            }
            else {
                _this.toasterService.pop('error', data.error_msg, '');
            }
        }, function (err) { return console.log(err); });
    };
    ResetAccountPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-account-password',
            template: __webpack_require__("../../../../../src/app/reset-account-password/reset-account-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reset-account-password/reset-account-password.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_service__["a" /* ForgotPasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_service__["a" /* ForgotPasswordService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], ResetAccountPasswordComponent);
    return ResetAccountPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem("ppsPortalToken") === null) {
            this.router.navigate(['/portal']);
        }
        else {
            return true;
        }
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
//
// ===== File globals.ts
//

// export const baseUrl: string = "http://smartzminds.com/pps/";
var baseUrl = "https://productprotectionsolutions.com/order/";


/***/ }),

/***/ "../../../../../src/app/side-links/side-links.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul li\n{\n  list-style: none;\n  width: 200px;\n  background-color: #4abd4a;\n  padding: 12px;\n  border-radius: 5px;\n  text-align: center;\n}\n\nul li + li\n{\n  margin-top: 20px;\n}\n\nul li a\n{\n  color: #fff;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-links/side-links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-none d-sm-block\" style=\"position: fixed; right: 20px; bottom: 0px;\">\n  <ul>\n    <li><a [attr.href]=\"catalogue\" target=\"_blank\">PPS Newsletter</a> </li>\n    <li><a routerLink=\"/instruction-sheets\">Instruction Sheets and Resource Material</a></li>\n    <li><a routerLink=\"/faq\">FAQ</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/side-links/side-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideLinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideLinksComponent = (function () {
    function SideLinksComponent(_front) {
        this._front = _front;
        this.settings = {};
        this.catalogue = '';
    }
    SideLinksComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    SideLinksComponent.prototype.getSettings = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < data.data.length; i++) {
                    _this.settings[data.data[i]['setName']] = data.data[i]['setValue'];
                }
                console.log(_this.settings['catalogue']);
                _this.catalogue = _this.settings['catalogue'];
            }
        }, function (err) { return console.log(err); });
    };
    SideLinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-links',
            template: __webpack_require__("../../../../../src/app/side-links/side-links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-links/side-links.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */]])
    ], SideLinksComponent);
    return SideLinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Add admin</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <form [formGroup]=\"addAdmin\" (ngSubmit)=\"submitAdmin(addAdmin.value)\">\n            <div class=\"row\">\n              <div class=\"col-lg-5\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                  Add Admin\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminName'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin name</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin Name\" formControlName=\"adminName\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminEmail'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin email</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin email\" formControlName=\"adminEmail\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminMobile'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin mobile</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin mobile\" formControlName=\"adminMobile\">\n                          <span *ngIf=\"addAdmin.controls['adminMobile'].hasError('pattern') && adminSubmission\">Enter Valid Price</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminAddress'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin Address</label>\n                          <textarea class=\"form-control\" rows=\"4\" cols=\"80\" formControlName=\"adminAddress\" placeholder=\"Address\"></textarea>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminCity'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin City</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin city\" formControlName=\"adminCity\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminState'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin State</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin state\" formControlName=\"adminState\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminZip'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin Zip</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin zip\" formControlName=\"adminZip\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminCountry'].valid   && adminSubmission}\">\n                          <label for=\"\">Admin Country</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Admin country\" formControlName=\"adminCountry\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-7\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    Admin credentials\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['userEmail'].valid   && adminSubmission}\">\n                        <label for=\"\">User email</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Admin account email\" formControlName=\"userEmail\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['userName'].valid   && adminSubmission}\">\n                        <label for=\"\">User name</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"User name\" formControlName=\"userName\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['userPassword'].valid   && adminSubmission}\">\n                        <label for=\"\">Password</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"userPassword\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row pull-right mb-5\">\n              <div class=\"col-md-12\">\n                <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary pull-right\">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAdminComponent = (function () {
    function AddAdminComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.adminSubmission = false;
        this.CatList = [];
        this.CatListFull = [];
        this.catLoading = false;
        this.subCatLoading = false;
        this.productImage = '';
        this.productImagePath = '';
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.catSubmission = true;
        this.catEdit = false;
        this.toasterService = toasterService;
        this.addAdmin = this.fb.group({
            adminName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminEmail: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminMobile: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*')]],
            adminAddress: [''],
            adminCity: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminState: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminZip: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminCountry: [''],
            userName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            userEmail: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            userPassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    }
    AddAdminComponent.prototype.ngOnInit = function () {
    };
    AddAdminComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.catEdit = false;
        });
    };
    AddAdminComponent.prototype.submitAdmin = function (v) {
        var _this = this;
        this.adminSubmission = true;
        if (!this.addAdmin.valid) {
            return false;
        }
        v['userType'] = 4;
        v['userStatus'] = 1;
        this._sp.submitAdmin(v).subscribe(function (response) {
            if (response.success) {
                _this.toasterService.pop('success', response.data, '');
                _this.adminSubmission = false;
                _this.addAdmin.reset();
            }
            else {
            }
        }, function (err) {
            console.log(err);
            if (err.status == 409) {
                _this.toasterService.pop('error', JSON.parse(err._body).data, '');
            }
            else
                _this.toasterService.pop('error', 'Something wrong,try again', '');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddAdminComponent.prototype, "fileInput", void 0);
    AddAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__("../../../../../src/app/superadmin/add-admin/add-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/add-admin/add-admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/add-store-form/add-store-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/add-store-form/add-store-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addStore\" (ngSubmit)=\"submitStoreForm(addStore.value)\">\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!addStore.controls['storeName'].valid   && storeAddTrue}\">\n    <label for=\"company\">Store name</label>\n    <input class=\"form-control\" id=\"company\" placeholder=\"Enter Store name\" type=\"text\" formControlName=\"storeName\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['storeEmail'].valid   && storeAddTrue}\">\n      <label for=\"vat\">Store email</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store email\" type=\"text\" formControlName=\"storeEmail\">\n      <span *ngIf=\"addStore.controls['storeEmail'].hasError('email') && storeAddTrue\">Enter Valid Email</span>\n    </div>\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['storeMobile'].valid   && storeAddTrue}\">\n      <label for=\"vat\">Store Mobile</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store Mobile\" type=\"text\" formControlName=\"storeMobile\">\n    </div>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!addStore.controls['storeAddress'].valid   && storeAddTrue}\">\n    <label for=\"street\">Store address</label>\n    <textarea class=\"form-control\" placeholder=\"Enter Store address\" formControlName=\"storeAddress\" rows=\"2\" cols=\"80\"></textarea>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-sm-12\" [ngClass]=\"{'has-error':!addStore.controls['storeCity'].valid   && storeAddTrue}\">\n      <label for=\"city\">Store city</label>\n      <input class=\"form-control\" id=\"city\" placeholder=\"Enter store city\" type=\"text\" formControlName=\"storeCity\">\n    </div>\n  </div>\n<!--/.row-->\n<div class=\"row\">\n  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!addStore.controls['storeState'].valid   && storeAddTrue}\">\n    <label for=\"city\">Store State</label>\n    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store State\" type=\"text\" formControlName=\"storeState\">\n  </div>\n  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!addStore.controls['storeZip'].valid   && storeAddTrue}\">\n    <label for=\"city\">Store Zip</label>\n    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store Zip\" type=\"text\" formControlName=\"storeZip\">\n  </div>\n</div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-md-12\">\n      <input type=\"checkbox\" (change)=\"asignCrendialsFun()\">\n      <span> Assign credentials</span>\n    </div>\n    <div class=\"clearfix\">\n    </div>\n  </div>\n  <div *ngIf=\"asignCrendials\" class=\"row\">\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['userName'].valid   && storeAddTrue}\">\n      <label for=\"country\">User name</label>\n      <input class=\"form-control\" id=\"country\" placeholder=\"Enter Username\" type=\"text\" formControlName=\"userName\">\n    </div>\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['userEmail'].valid   && storeAddTrue}\">\n      <label for=\"country\">User Email</label>\n      <input class=\"form-control\" id=\"country\" placeholder=\"Enter email\" type=\"text\" formControlName=\"userEmail\">\n      <span *ngIf=\"addStore.controls['userEmail'].hasError('email') && storeAddTrue\">Enter Valid Email</span>\n    </div>\n    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!addStore.controls['userPassword'].valid   && storeAddTrue}\">\n      <label for=\"country\">Password</label>\n      <input class=\"form-control\" id=\"country\" placeholder=\"Enter password\" type=\"password\" formControlName=\"userPassword\">\n      <span *ngIf=\"addStore.controls['userPassword'].hasError('min') && storeAddTrue\">Enter Valid Email</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-12\">\n      <input type=\"submit\" value=\"Add Store\" class=\"btn btn-primary\" [attr.disabled]=\"storeAdding == true ? true : null\">\n      {{ storeAdding }}\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/add-store-form/add-store-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoreFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddStoreFormComponent = (function () {
    function AddStoreFormComponent() {
    }
    AddStoreFormComponent.prototype.ngOnInit = function () {
    };
    AddStoreFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-store-form',
            template: __webpack_require__("../../../../../src/app/superadmin/add-store-form/add-store-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/add-store-form/add-store-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddStoreFormComponent);
    return AddStoreFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/addapdms/addapdms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label\n{\n  text-transform: capitalize;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/addapdms/addapdms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Add apls</li>\n    </ol>\n\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn col-md-8\">\n          <form [formGroup]=\"apdmForm\" (ngSubmit)=\"submitapdmForm(apdmForm.value)\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmFirstName'].valid   && apdmSubmission}\">\n                <label for=\"company\">apl First name</label>\n                <input class=\"form-control\" id=\"company\" placeholder=\"Enter apl name\" type=\"text\" formControlName=\"apdmFirstName\">\n              </div>\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmLastName'].valid   && apdmSubmission}\">\n                <label for=\"company\">apl Last name</label>\n                <input class=\"form-control\" id=\"company\" placeholder=\"Enter apl name\" type=\"text\" formControlName=\"apdmLastName\">\n              </div>\n\n            </div>\n\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmEmail'].valid   && apdmSubmission}\">\n                <label for=\"vat\">apl email</label>\n                <input class=\"form-control\" id=\"vat\" placeholder=\"Enter apl email\" type=\"text\" formControlName=\"apdmEmail\">\n                <span class=\"text-danger\" *ngIf=\"apdmForm.controls['apdmEmail'].hasError('email') && apdmSubmission\">Enter Valid Email</span>\n              </div>\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmMobileNo'].valid   && apdmSubmission}\">\n                <label for=\"vat\">apl Mobile</label>\n                <input class=\"form-control\" id=\"vat\" placeholder=\"Enter apl Mobile\" type=\"text\" formControlName=\"apdmMobileNo\">\n                <span  class=\"text-danger\" *ngIf=\"apdmForm.controls['userPassword'].hasError('pattern') && apdmSubmission\">Enter Valid mobile number</span>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmAddress'].valid   && apdmSubmission}\">\n              <label for=\"street\">apl address</label>\n              <textarea class=\"form-control\" placeholder=\"Enter apl address\" formControlName=\"apdmAddress\" rows=\"2\" cols=\"80\"></textarea>\n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"form-group col-sm-12\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmCity'].valid   && apdmSubmission}\">\n                <label for=\"city\">apl city</label>\n                <input class=\"form-control\" id=\"city\" placeholder=\"Enter apl city\" type=\"text\" formControlName=\"apdmCity\">\n              </div>\n\n            </div>\n          <!--/.row-->\n\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['userName'].valid   && apdmSubmission}\">\n                <label for=\"country\">User name</label>\n                <input class=\"form-control\" id=\"country\" placeholder=\"Enter Username\" type=\"text\" formControlName=\"userName\">\n              </div>\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['userPassword'].valid   && apdmSubmission}\">\n                <label for=\"country\">Password</label>\n                <input class=\"form-control\" id=\"country\" placeholder=\"Enter Password\" type=\"password\" formControlName=\"userPassword\">\n                <span  class=\"text-danger\" *ngIf=\"apdmForm.controls['userPassword'].hasError('min') && apdmSubmission\">Password length must be 6</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-6\">\n                <input type=\"checkbox\" [(ngModel)]=\"readOnly\" [ngModelOptions]=\"{standalone: true}\"> Read only iser\n              </label>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"submit\" value=\"Add apl\" class=\"btn btn-primary\">\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/addapdms/addapdms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddapdmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddapdmsComponent = (function () {
    function AddapdmsComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.apdmSubmission = false;
        this.CatList = [];
        this.CatListFull = [];
        this.catLoading = false;
        this.subCatLoading = false;
        this.productImage = '';
        this.productImagePath = '';
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.catSubmission = true;
        this.catEdit = false;
        this.readOnly = false;
        this.toasterService = toasterService;
        this.apdmForm = this.fb.group({
            apdmFirstName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            apdmLastName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            apdmCity: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            apdmEmail: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email]],
            apdmMobileNo: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*')]],
            apdmAddress: [''],
            userName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            userPassword: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].min(6)]],
        });
    }
    AddapdmsComponent.prototype.ngOnInit = function () {
        this.getCats();
    };
    AddapdmsComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.catEdit = false;
        });
    };
    // addCat()
    // {
    //   if(this.catName == '')
    //   return false;
    //       var value         = {};
    //       value['data']     = { 'CategoryName' : this.catName };
    //       value['type']     = 'mainCat';
    //       this._sp.insert(value).subscribe(
    //         data => {
    //           this.CatList.push(this.catName);
    //           this.catName = '';
    //         },
    //         err => console.log(err)
    //      );
    // }
    AddapdmsComponent.prototype.removeCat = function (index, cat) {
        var _this = this;
        var value = {};
        value['id'] = cat;
        value['type'] = 'mainCat';
        this._sp.delete(value).subscribe(function (data) {
            _this.CatList.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    AddapdmsComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    AddapdmsComponent.prototype.deleteStore = function () {
        var value = {};
        // value['userId']       = this.storeToDelete;
        value['caseStatment'] = 'usersTable';
        value['userStatus'] = 0;
        this._sp.deleteStore(value).subscribe(function (data) {
            if (data.success) {
            }
        }, function (err) { return console.log(err); });
    };
    AddapdmsComponent.prototype.uploadproductImage = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.showImageUploading = true;
            this.showhidemsg2 = true;
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.responseStatus2['error_msg'] = 'Only images are allowed.';
                this.showImageUploading = false;
                this.showhidemsg2 = false;
            }
            this._sp.upload(fileToUpload).subscribe(function (response) {
                setTimeout(function () {
                    this.showhidemsg2 = false;
                }.bind(_this), 3000);
                _this.showImageUploading = false;
                if (response.success) {
                    _this.productImage = response.fileName;
                    _this.productImagePath = response.filePath;
                }
                else {
                    _this.responseStatus2['error_msg'] = response.error_msg;
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
                _this.showImageUploading = false;
            });
        }
    };
    AddapdmsComponent.prototype.submitapdmForm = function (value) {
        var _this = this;
        this.apdmSubmission = true;
        if (!this.apdmForm.valid) {
            return false;
        }
        value['userStatus'] = 1;
        value['userType'] = 3;
        value['userEmail'] = value['apdmEmail'];
        value['readOnly'] = (this.readOnly ? 1 : 0);
        this._sp.submitapdmForm(value).subscribe(function (data) {
            if (data.success) {
                _this.apdmSubmission = false;
                _this.toasterService.pop('success', data.data, '');
                _this.apdmForm.reset();
            }
        }, function (err) { return console.log(err); });
    };
    AddapdmsComponent.prototype.editCat = function (catId) {
        this.catToEdit = catId;
        jQuery('#updateModal').modal('show');
        this.catEdit = true;
    };
    AddapdmsComponent.prototype.deleteCatConfirm = function (cat) {
        this.catToDelete = cat;
        jQuery('#deleteModal').modal('show');
    };
    AddapdmsComponent.prototype.deleteCat = function () {
        var _this = this;
        var value = {};
        value['userId'] = this.catToDelete;
        value['caseStatment'] = 'usersTable';
        value['userStatus'] = 0;
        this._sp.deleteStore(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#deleteModal').modal('hide');
                _this.catToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    AddapdmsComponent.prototype.handleCatUpdate = function (e) {
        if (e.success) {
            this.toasterService.pop('success', e.data, '');
            this.getCats();
            jQuery('#updateModal').modal('hide');
            this.catToEdit = '';
            this.catEdit = false;
        }
    };
    AddapdmsComponent.prototype.initVariation = function () {
        return this.fb.group({
            'productVarItemId': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'productVarPrice': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*')]],
            'productVarDesc': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
        });
    };
    AddapdmsComponent.prototype.addVariation = function () {
        var control = this.apdmForm.controls['productVariation'];
        control.push(this.initVariation());
    };
    AddapdmsComponent.prototype.removeVariation = function (i) {
        var control = this.apdmForm.controls['productVariation'];
        control.removeAt(i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddapdmsComponent.prototype, "fileInput", void 0);
    AddapdmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addapdms',
            template: __webpack_require__("../../../../../src/app/superadmin/addapdms/addapdms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/addapdms/addapdms.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], AddapdmsComponent);
    return AddapdmsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/addproduct/addproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img_brow {\n    position: relative;\n    border: transparent;\n    padding: 0;\n    width: 116px;\n}\n.img_brow .img-thumbnail {\n    width: 100%;\n    height: 121px;\n    margin: 0 0 -3px;\n}\n\n.img_brow:hover .fafa_icon {\n    opacity: 1;\n}\n\n.fafa_icon {\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tbackground: #0006;\n\tborder-radius: 4px;\n\topacity: 0;\n\ttransition: all 0.3s ease-in-out 0s;\n\ttop: 0;\n\tposition: absolute;\n}\n\n.img_brow .fa.fa-camera {\n\tcolor: #fff;\n\tfont-size: 25px;\n\tposition: absolute;\n\tbottom: 7px;\n\tright: 10px;\n}\n.img_brow input {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\topacity: 0;\n}\n\nul.attachments\n{\n  list-style: none;\n  padding-left: 0px;\n}\n\nul.attachments li\n{\n  font-size: 14px;\n  border: 1px #ddd solid;\n  margin-bottom: 9px;\n  padding-left: 10px;\n  position: relative;\n}\n\nul.attachments li i.fa-times\n{\n  position: absolute;\n  right: 5px;\n  top: 4px;\n}\n\n.progress.my\n{\n  width: 84px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  height: 11px;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/addproduct/addproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Add Product</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <form [formGroup]=\"ProducForm\" (ngSubmit)=\"submitProduct(ProducForm.value)\">\n            <div class=\"row\">\n              <div class=\"col-lg-5\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                  Add Products\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!ProducForm.controls['productName'].valid   && productSubmission}\">\n                          <label for=\"\">Product name</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Product Name\" formControlName=\"productName\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!ProducForm.controls['productCode'].valid   && productSubmission}\">\n                          <label for=\"\">Product Code</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Product Name\" formControlName=\"productCode\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"form-group col-md-12\">\n                        <label for=\"company\">Store class</label>\n                        <br>\n                        <label class=\"checkbox-inline\">\n                          <input type=\"checkbox\"   [value]=\"1\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\"/>\n                          Class 1\n                        </label>\n                        <label class=\"checkbox-inline\">\n                          <input type=\"checkbox\"   [value]=\"2\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\"/>\n                          Class 2\n                        </label>\n                        <label class=\"checkbox-inline\">\n                          <input type=\"checkbox\"   [value]=\"3\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\"/>\n                          Class 3\n                        </label>\n                        <label class=\"checkbox-inline\">\n                          <input type=\"checkbox\"   [value]=\"4\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\"/>\n                          Class 4\n                        </label>\n                        <label class=\"checkbox-inline\">\n                          <input type=\"checkbox\"   [value]=\"5\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\"/>\n                          Class 5\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!ProducForm.controls['productCategory'].valid   && productSubmission}\">\n                          <label for=\"\">Product Category</label>\n                          <select class=\"form-control\" formControlName=\"productCategory\">\n                            <option [selected]=\"true\" value=\"\">Select Category</option>\n                            <option [ngClass]=\"'lev'+cat.catLevel\" *ngFor=\"let cat of CatList\" [value]=\"cat.catId\">\n                              <span *ngIf=\"cat.catLevel == 1\"> &nbsp;&nbsp; </span>\n                              <span *ngIf=\"cat.catLevel == 2\"> &nbsp;&nbsp;&nbsp; </span>\n                              <span *ngIf=\"cat.catLevel == 3\"> &nbsp;&nbsp;&nbsp;&nbsp; </span>\n                              {{ cat.catName }}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\" [ngClass]=\"{'has-error':!ProducForm.controls['productPrice'].valid   && productSubmission}\">\n                          <label for=\"\">Product Price</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Product Price\" formControlName=\"productPrice\">\n                          <span *ngIf=\"ProducForm.controls['productPrice'].hasError('pattern') && productSubmission\">Enter Valid Price</span>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"\">Description</label>\n                          <ckeditor\n                            [(ngModel)]=\"productDescription\"\n                            debounce=\"500\" [ngModelOptions]=\"{standalone: true}\">\n                          </ckeditor>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                          <label for=\"\">Product Image</label>\n                          <div class=\"img_brow img-thumbnail\" *ngIf=\"!showImageUploading\">\n                            <img [src]=\"productImagePath != '' ? productImagePath : 'assets/img/demo.png'\" alt=\"\" class=\"img-thumbnail\">\n                            <div class=\"fafa_icon\">\n                              <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                              <input #fileInput type=\"file\" (change)=\"uploadproductImage($event)\" accept=\"image/*\"  title=\" \"/>\n                            </div>\n                          </div>\n                          <div class=\"img_brow img-thumbnail imageuploadingLoader\" *ngIf=\"showImageUploading\">\n                            <img src=\"assets/img/loading.gif\" alt=\"\" class=\"img-thumbnail\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <div *ngIf=\"!showImageUploading\">\n                            <button type=\"button\" name=\"button\" class=\"btn btn-default\">\n                              Additional Images <i class=\"fa fa-add\"></i>\n                            </button>\n                            <div class=\"fafa_icon\">\n                              <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                              <input #fileInput2 type=\"file\" (change)=\"uploadproductImage2($event)\" accept=\"image/*\"  title=\" \"/>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <ul *ngIf=\"images.length > 0\" class=\"attachments\">\n                          <li *ngFor=\"let img of images; let i = index\" style=\"width:120px; padding-left:0px; display:inline-block; height:120px; overflow-y:hidden; margin-right:10px\">\n                            <img [src]=\"img.path\" alt=\"\" style=\"width:100%\">\n                            <i (click)=\"images.splice(i,1)\" class=\"fa fa-trash\" style=\"position:  absolute;right: 6px; top: 6px;\"></i>\n                          </li>\n                        </ul>\n                        <br>\n                        <button class=\"btn btn-default\" type=\"button\" name=\"button\" id=\"pick\">Upload Instruction File</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-7\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    Product Variations\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table table-bordered table-responsive\" formArrayName=\"productVariation\">\n                        <tr>\n                          <th style=\"width: 60px\">Item Id</th>\n                          <th>Item Description</th>\n                          <th style=\"width: 80px\">Item Price</th>\n                          <th style=\"width: 80px\">Item Quantity</th>\n                          <th style=\"width: 20px\"></th>\n                        </tr>\n                        <tbody *ngFor=\"let prod of ProducForm.controls.productVariation.controls; let i=index\">\n                          <tr  [formGroupName]=\"i\">\n                            <td>\n                              <input  type=\"text\" formControlName=\"productVarItemId\" [ngClass]=\"{'is-invalid':!ProducForm.controls.productVariation.controls[i].controls.productVarItemId.valid   && productSubmission}\" style=\"width:60px\" class=\"form-control\">\n                            </td>\n                            <td>\n                              <input type=\"text\" formControlName=\"productVarDesc\" [ngClass]=\"{'is-invalid':!ProducForm.controls.productVariation.controls[i].controls.productVarDesc.valid   && productSubmission}\" class=\"form-control\">\n                              <span *ngIf=\"ProducForm.controls['productPrice'].hasError('pattern') && productSubmission\">Enter Valid Price</span>\n                            </td>\n                            <td>\n                              <input type=\"text\" formControlName=\"productVarPrice\" [ngClass]=\"{'is-invalid':!ProducForm.controls.productVariation.controls[i].controls.productVarPrice.valid   && productSubmission}\" style=\"width:80px\" class=\"form-control\">\n                            </td>\n                            <td>\n                              <input type=\"text\" formControlName=\"productVarItemQuantity\" [ngClass]=\"{'is-invalid':!ProducForm.controls.productVariation.controls[i].controls.productVarItemQuantity.valid   && productSubmission}\" style=\"width:80px\" class=\"form-control\">\n                            </td>\n                            <td>\n                              <a  (click)=\"removeVariation(i)\" class=\"fa fa-trash\"></a>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <button (click)=\"addVariation()\" type=\"button\" class=\"btn btn-primary add_field_button\" style=\"margin-bottom:20px;\">Add variation </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row pull-right mb-5\">\n              <div class=\"col-md-12\">\n                <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary pull-right\">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/addproduct/addproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/add/operator/debounceTime';

var AddproductComponent = (function () {
    function AddproductComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.productSubmission = false;
        this.CatList = [];
        this.CatListFull = [];
        this.catLoading = false;
        this.subCatLoading = false;
        this.productImage = '';
        this.productImagePath = '';
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.catSubmission = true;
        this.catEdit = false;
        this.productClasses = {};
        this.fileList = [];
        this.isPluploadReady = false;
        this.UploadPending = false;
        this.Archived = 0;
        this.browse = 0;
        this.browsei = 0;
        this.firstName = 'Name';
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.pickk = 'pickk';
        this.fileNameIns = '';
        this.images = [];
        this.toasterService = toasterService;
        this.ProducForm = this.fb.group({
            productName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            productCode: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            productCategory: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            productPrice: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]+([\.,][0-9]+)?')]],
            productVariation: this.fb.array([this.initVariation()]),
        });
    }
    AddproductComponent.prototype.ngOnInit = function () {
        this.subscription = this.addPlupload();
        this.getCats();
    };
    AddproductComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.catEdit = false;
        });
    };
    // addCat()
    // {
    //   if(this.catName == '')
    //   return false;
    //       var value         = {};
    //       value['data']     = { 'CategoryName' : this.catName };
    //       value['type']     = 'mainCat';
    //       this._sp.insert(value).subscribe(
    //         data => {
    //           this.CatList.push(this.catName);
    //           this.catName = '';
    //         },
    //         err => console.log(err)
    //      );
    // }
    AddproductComponent.prototype.removeCat = function (index, cat) {
        var _this = this;
        var value = {};
        value['id'] = cat;
        value['type'] = 'mainCat';
        this._sp.delete(value).subscribe(function (data) {
            _this.CatList.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    AddproductComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    AddproductComponent.prototype.deleteStore = function () {
        var value = {};
        // value['userId']       = this.storeToDelete;
        value['caseStatment'] = 'usersTable';
        value['userStatus'] = 0;
        this._sp.deleteStore(value).subscribe(function (data) {
            if (data.success) {
            }
        }, function (err) { return console.log(err); });
    };
    AddproductComponent.prototype.uploadproductImage = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.showImageUploading = true;
            this.showhidemsg2 = true;
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.responseStatus2['error_msg'] = 'Only images are allowed.';
                this.showImageUploading = false;
                this.showhidemsg2 = false;
            }
            this._sp.upload(fileToUpload).subscribe(function (response) {
                setTimeout(function () {
                    this.showhidemsg2 = false;
                }.bind(_this), 3000);
                _this.showImageUploading = false;
                if (response.success) {
                    _this.productImage = response.fileName;
                    _this.productImagePath = response.filePath;
                }
                else {
                    _this.responseStatus2['error_msg'] = response.error_msg;
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
                _this.showImageUploading = false;
            });
        }
    };
    AddproductComponent.prototype.uploadproductImage2 = function () {
        var _this = this;
        var fi = this.fileInput2.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.toasterService.pop('success', 'Only images are allowed.', '');
            }
            var l = this.images.push({ path: 'assets/img/loading.gif' });
            this._sp.upload(fileToUpload).subscribe(function (response) {
                if (response.success) {
                    _this.images[l - 1]['path'] = response.filePath;
                    _this.images[l - 1]['name'] = response.fileName;
                    // this.toasterService.pop('success','','' );
                }
                else {
                    _this.toasterService.pop('success', 'Something happens wrong. Please try again.', '');
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
            });
        }
    };
    AddproductComponent.prototype.submitProduct = function (value) {
        var _this = this;
        this.productSubmission = true;
        if (!this.ProducForm.valid) {
            return false;
        }
        value['productImage'] = this.productImage;
        value['productDescription'] = this.productDescription;
        console.log(this.fileNameIns);
        value['instructionFile'] = this.fileNameIns;
        value['images'] = JSON.stringify(this.images);
        console.log(value);
        var keys = Object.keys(this.productClasses);
        var thiss = this;
        var filtered = keys.filter(function (key) {
            return thiss.productClasses[key];
        });
        console.log(filtered);
        value['productClasses'] = filtered;
        this._sp.submitProduct(value).subscribe(function (data) {
            if (data.success) {
                _this.productSubmission = false;
                _this.toasterService.pop('success', data.data, '');
                _this.ProducForm.reset({ productCategory: '' });
                _this.productClasses = {};
            }
        }, function (err) { return console.log(err); });
    };
    AddproductComponent.prototype.editCat = function (catId) {
        this.catToEdit = catId;
        jQuery('#updateModal').modal('show');
        this.catEdit = true;
    };
    AddproductComponent.prototype.deleteCatConfirm = function (cat) {
        this.catToDelete = cat;
        jQuery('#deleteModal').modal('show');
    };
    AddproductComponent.prototype.deleteCat = function () {
        var _this = this;
        var value = {};
        value['userId'] = this.catToDelete;
        value['caseStatment'] = 'usersTable';
        value['userStatus'] = 0;
        this._sp.deleteStore(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#deleteModal').modal('hide');
                _this.catToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    AddproductComponent.prototype.handleCatUpdate = function (e) {
        if (e.success) {
            this.toasterService.pop('success', e.data, '');
            this.getCats();
            jQuery('#updateModal').modal('hide');
            this.catToEdit = '';
            this.catEdit = false;
        }
    };
    AddproductComponent.prototype.initVariation = function () {
        return this.fb.group({
            'productVarItemId': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'productVarPrice': ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]+([\.,][0-9]+)?')]],
            'productVarDesc': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            'productVarItemQuantity': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
        });
    };
    AddproductComponent.prototype.addVariation = function () {
        var control = this.ProducForm.controls['productVariation'];
        control.push(this.initVariation());
    };
    AddproductComponent.prototype.removeVariation = function (i) {
        var control = this.ProducForm.controls['productVariation'];
        control.removeAt(i);
    };
    AddproductComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    AddproductComponent.prototype.addPlupload = function () {
        var _this = this;
        console.log('addupload');
        return this.addPluploadScript()
            .subscribe(function () {
            _this.isPluploadReady = true;
            _this.initPlupload();
        });
    };
    AddproductComponent.prototype.addPluploadScript = function () {
        var id = 'plupload-sdk';
        // Return immediately if the script tag is already here.
        if (document.getElementById(id)) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of(true);
        }
        var js, fjs = document.getElementsByTagName('script')[0];
        js = document.createElement('script');
        js.id = id;
        js.src = "//unpkg.com/plupload@2.3.2/js/plupload.full.min.js";
        fjs.parentNode.insertBefore(js, fjs);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].timer(1000).take(1); // @TODO: Replace this with more robust code
    };
    // Configure and initialize Plupload.
    AddproductComponent.prototype.initPlupload = function () {
        var _this = this;
        var thiss = this;
        //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);
        this.uploader = new plupload.Uploader({
            runtimes: 'html5,html4',
            browse_button: 'pick',
            url: 'https://productprotectionsolutions.com/order/api/upload-file',
            chunk_size: '5000kb',
            multi_selection: false,
            max_retries: 3,
            filters: {
                max_file_size: '1000mb',
            },
            multipart_params: {
                "type": "record_attachment",
                "id": this.browse
            },
            init: {
                PostInit: function () {
                    _this.fileList = [];
                },
                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        _this.fileList.push({
                            id: file.id,
                            name: file.name,
                            size: plupload.formatSize(file.size),
                            percent: 0
                        });
                    }, _this.uploader.start());
                },
                FileUploaded: function (up, file, result) {
                    var json = JSON.parse(result.response);
                    console.log(json.url);
                    thiss.fileNameIns = json.url;
                    console.log(thiss.fileNameIns);
                },
                // Update the upload progress in the list of files displayed in the template.
                UploadProgress: function (up, file) {
                    var index = _this.fileList.findIndex(function (f) { return f.id == file.id; });
                    _this.fileList[index].percent = file.percent;
                },
                Error: function (up, err) {
                    console.error(err);
                }
            }
        });
        this.uploader.init();
    };
    AddproductComponent.prototype.checkAttachmentProgress = function () {
        this.UploadPending = false;
        for (var i in this.fileList) {
            if (this.fileList[i]['percent'] != 100)
                this.UploadPending = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddproductComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddproductComponent.prototype, "fileInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pickfiles'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddproductComponent.prototype, "pickfiles", void 0);
    AddproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addproduct',
            template: __webpack_require__("../../../../../src/app/superadmin/addproduct/addproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/addproduct/addproduct.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], AddproductComponent);
    return AddproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/addstore/addstore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/addstore/addstore.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<toaster-container></toaster-container>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Add Store</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>Add Store</strong>\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"addStore\" (ngSubmit)=\"submitStoreForm(addStore.value)\">\n                  <!-- <div class=\"form-group\" [ngClass]=\"{'has-error':!addStore.controls['region_id'].valid   && storeAddTrue}\">\n                    <label for=\"company\">Select region</label>\n                  <select class=\"form-control\" formControlName=\"region_id\" name=\"\" required>\n                    <option value=\"\">Select region</option>\n                  <<option *ngFor=\"let region of regions\" value=\"{{region.id}}\">{{region.regionName}}</option>\n                  </select>\n                  </div> -->\n                  <div class=\"form-group\" [ngClass]=\"{'has-error':!addStore.controls['storeName'].valid   && storeAddTrue}\">\n                    <label for=\"company\">Store name</label>\n                    <input class=\"form-control\" id=\"company\" placeholder=\"Enter Store name\" type=\"text\" formControlName=\"storeName\">\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-12\">\n                      <label for=\"company\">Store class</label>\n                      <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 1\" (click)=\"selectStoreClass(1)\">Class 1</button>\n                        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 2\" (click)=\"selectStoreClass(2)\">Class 2</button>\n                        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 3\" (click)=\"selectStoreClass(3)\">Class 3</button>\n                        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 4\" (click)=\"selectStoreClass(4)\">Class 4</button>\n                        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 5\" (click)=\"selectStoreClass(5)\">Class 5</button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['storeEmail'].valid   && storeAddTrue}\">\n                      <label for=\"vat\">Store email</label>\n                      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store email\" type=\"text\" formControlName=\"storeEmail\">\n                      <span *ngIf=\"addStore.controls['storeEmail'].hasError('email') && storeAddTrue\">Enter Valid Email</span>\n                    </div>\n                    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['storeMobile'].valid   && storeAddTrue}\">\n                      <label for=\"vat\">Store Mobile</label>\n                      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store Mobile\" type=\"text\" formControlName=\"storeMobile\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\" [ngClass]=\"{'has-error':!addStore.controls['storeAddress'].valid   && storeAddTrue}\">\n                    <label for=\"street\">Store address</label>\n                    <textarea class=\"form-control\" placeholder=\"Enter Store address\" formControlName=\"storeAddress\" rows=\"2\" cols=\"80\"></textarea>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"form-group col-sm-12\" [ngClass]=\"{'has-error':!addStore.controls['storeCity'].valid   && storeAddTrue}\">\n                      <label for=\"city\">Store city</label>\n                      <input class=\"form-control\" id=\"city\" placeholder=\"Enter store city\" type=\"text\" formControlName=\"storeCity\">\n                    </div>\n                  </div>\n                <!--/.row-->\n                <div class=\"row\">\n                  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!addStore.controls['storeState'].valid   && storeAddTrue}\">\n                    <label for=\"city\">Store State</label>\n                    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store State\" type=\"text\" formControlName=\"storeState\">\n                  </div>\n                  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!addStore.controls['storeZip'].valid   && storeAddTrue}\">\n                    <label for=\"city\">Store Zip</label>\n                    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store Zip\" type=\"text\" formControlName=\"storeZip\">\n                  </div>\n                </div>\n\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-12\">\n                      <input type=\"checkbox\" (change)=\"asignCrendialsFun()\">\n                      <span> Assign credentials</span>\n                    </div>\n                    <div class=\"clearfix\">\n                    </div>\n                  </div>\n                  <div *ngIf=\"asignCrendials\" class=\"row\">\n                    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['userName'].valid   && storeAddTrue}\">\n                      <label for=\"country\">User name</label>\n                      <input class=\"form-control\" id=\"country\" placeholder=\"Enter Username\" type=\"text\" formControlName=\"userName\">\n                    </div>\n                    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!addStore.controls['userEmail'].valid   && storeAddTrue}\">\n                      <label for=\"country\">User Email</label>\n                      <input class=\"form-control\" id=\"country\" placeholder=\"Enter email\" type=\"text\" formControlName=\"userEmail\">\n                      <span *ngIf=\"addStore.controls['userEmail'].hasError('email') && storeAddTrue\">Enter Valid Email</span>\n                    </div>\n                    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!addStore.controls['userPassword'].valid   && storeAddTrue}\">\n                      <label for=\"country\">Password</label>\n                      <input class=\"form-control\" id=\"country\" placeholder=\"Enter password\" type=\"password\" formControlName=\"userPassword\">\n                      <span *ngIf=\"addStore.controls['userPassword'].hasError('min') && storeAddTrue\">Enter Valid Email</span>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-12\">\n                      <input type=\"submit\" value=\"Add Store\" class=\"btn btn-primary\" [attr.disabled]=\"storeAdding == true ? true : null\">\n                    </div>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/addstore/addstore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddstoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailOrEmpty(control) {
    return control.value === '' ? null : __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email(control);
}
var AddstoreComponent = (function () {
    function AddstoreComponent(router, _sp, toasterService, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.storeAddTrue = false;
        this.asignCrendials = false;
        this.regions = [];
        this.storeAdding = false;
        this.storeClass = 1;
        this.toasterService = toasterService;
        this.addStore = fb.group({
            'storeName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'storeEmail': ['', emailOrEmpty],
            'storeMobile': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')]],
            'storeAddress': [''],
            //  'region_id'  : [''],
            'storeCity': [''],
            'storeState': [''],
            'storeZip': [''],
            'userName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'userEmail': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email],
            'userPassword': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(6)]],
        });
    }
    AddstoreComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(tknn);
        //  this.listregions(1);
        this.addStore.controls['userName'].disable();
        this.addStore.controls['userEmail'].disable();
        this.addStore.controls['userPassword'].disable();
    };
    //
    // listregions(e)
    // {
    //   var value = {};
    //   value['perpage'] = 100000000000000000000;
    //   value['page'] = e;
    //   value['text'] = '';
    //
    //     this._sp.listregions(value).subscribe(
    //       data => {
    //         var thiss = this;
    //          setTimeout(function(){
    //            thiss.regions = data.data.result;
    //          }, 500);
    //       },
    //       err => {
    //         if(err.status == 409)
    //         {
    //           this.regions = [];
    //         }
    //       }
    //    );
    //    return e;
    // }
    AddstoreComponent.prototype.storeFormReset = function () {
    };
    AddstoreComponent.prototype.submitStoreForm = function (value) {
        var _this = this;
        console.log('in Contr');
        this.storeAddTrue = true;
        if (!this.addStore.valid) {
            return false;
        }
        this.storeAdding = true;
        value['userType'] = 2;
        value['userStatus'] = 1;
        value['storeClass'] = this.storeClass;
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this._sp.addStore(value).subscribe(function (data) {
            if (data.success) {
                _this.storeAddTrue = false;
                _this.addStore.reset({
                    storeName: '',
                    storeEmail: '',
                    storeMobile: '',
                    storeAddress: '',
                    storeCity: '',
                    storeState: '',
                    storeZip: '',
                    userName: '',
                    userEmail: '',
                    userPassword: '',
                });
                _this.addStore.controls['userName'].disable();
                _this.addStore.controls['userEmail'].disable();
                _this.addStore.controls['userPassword'].disable();
                _this.asignCrendials = false;
                _this.toasterService.pop('success', data.data, '');
                _this.storeAdding = false;
            }
        }, function (err) { return console.log(err); });
    };
    AddstoreComponent.prototype.asignCrendialsFun = function () {
        this.asignCrendials == true ? this.asignCrendials = false : this.asignCrendials = true;
        if (this.asignCrendials == true) {
            this.addStore.controls['userName'].enable();
            this.addStore.controls['userEmail'].enable();
            this.addStore.controls['userPassword'].enable();
        }
        else {
            this.addStore.controls['userName'].disable();
            this.addStore.controls['userEmail'].disable();
            this.addStore.controls['userPassword'].disable();
        }
    };
    AddstoreComponent.prototype.selectStoreClass = function (c) {
        this.storeClass = c;
    };
    AddstoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addstore',
            template: __webpack_require__("../../../../../src/app/superadmin/addstore/addstore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/addstore/addstore.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AddstoreComponent);
    return AddstoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Account settings</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-8\">\n            <div class=\"card\" *ngIf=\"!storeLoading\">\n              <div class=\"card-header\">\n                Instruction Sheets\n              </div>\n              <div class=\"card-body\" >\n                <table class=\"table table-bordered\">\n                  <tr>\n                    <th>Sr. No.</th>\n                    <th>Sheet Name</th>\n                    <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"let sheet of sheets; let i = index\">\n                    <td>{{ i + 1 }} </td>\n                    <td><a [href]=\"sheet.setValue['val']\">{{ sheet.setValue['name'] }} </a></td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteSheet(i)\" name=\"button\">Delete</button>\n                    </td>\n                    <!-- <td>{{ sheet.date }}</td> -->\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteSheetConfirm(i)\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminInsSheetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__ = __webpack_require__("../../../../../src/app/frontend/frontend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminInsSheetsComponent = (function () {
    function AdminInsSheetsComponent(_front, _sp) {
        this._front = _front;
        this._sp = _sp;
        this.sheets = [];
        this.sheetToDelete = 0;
    }
    AdminInsSheetsComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    AdminInsSheetsComponent.prototype.jsonparse = function (val) {
        val = JSON.parse(val);
        return val;
    };
    AdminInsSheetsComponent.prototype.getFaq = function () {
        var _this = this;
        this._front.getSettings().subscribe(function (data) {
            if (data.success) {
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var variable = _a[_i];
                    if (variable['setName'] == 'InstructionSheet') {
                        variable['setValue'] = JSON.parse(variable['setValue']);
                        _this.sheets.push(variable);
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    AdminInsSheetsComponent.prototype.deleteSheet = function (pid) {
        this.sheetToDelete = pid;
        jQuery('#deleteModal').modal('show');
    };
    AdminInsSheetsComponent.prototype.deleteSheetConfirm = function () {
        var _this = this;
        // console.log(this.sheets[this.sheetToDelete]['setId']);
        var value = {};
        value['id'] = this.sheets[this.sheetToDelete]['setId'];
        value['type'] = 'inssheet';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.sheets.splice(_this.sheetToDelete, 1);
                jQuery('#deleteModal').modal('hide');
                _this.sheetToDelete = 0;
                _this.getFaq();
            }
        }, function (err) { return console.log(err); });
    };
    AdminInsSheetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ins-sheets',
            template: __webpack_require__("../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/admin-ins-sheets/admin-ins-sheets.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__frontend_frontend_service__["a" /* FrontendService */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]])
    ], AdminInsSheetsComponent);
    return AdminInsSheetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/adminpanel/adminpanel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/adminpanel/adminpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"ui-view\">\n        <div class=\"animated fadeIn\" style=\"padding-top:20px\">\n          <div class=\"row\">\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-primary\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('today')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <!-- <div class=\"btn-group float-right\">\n                              <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"icon-settings\"></i>\n                              </button>\n                              <div class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                              </div>\n                            </div> -->\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.today.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Today Orders</p>\n                          </div>\n                        </div>\n                      </div>\n                      <!--/.col-->\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-info\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('week')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.week.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This week</p>\n                          </div>\n                          <!-- <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\n                            <canvas id=\"card-chart2\" class=\"chart\" height=\"70\"></canvas>\n                          </div> -->\n                        </div>\n                      </div>\n                      <!--/.col-->\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-warning\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('month')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <!-- <div class=\"btn-group float-right\">\n                              <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"icon-settings\"></i>\n                              </button>\n                              <div class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                              </div>\n                            </div> -->\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.month.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This month</p>\n                          </div>\n                          <!-- <div class=\"chart-wrapper\" style=\"height:70px;\">\n                            <canvas id=\"card-chart3\" class=\"chart\" height=\"70\"></canvas>\n                          </div> -->\n                        </div>\n                      </div>\n                      <!--/.col-->\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-danger\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('total')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <!-- <div class=\"btn-group float-right\">\n                              <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"icon-settings\"></i>\n                              </button>\n                              <div class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                              </div>\n                            </div> -->\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.total.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Total orders</p>\n                          </div>\n                          <!-- <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\n                            <canvas id=\"card-chart4\" class=\"chart\" height=\"70\"></canvas>\n                          </div> -->\n                        </div>\n                      </div>\n                      <!--/.col-->\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <div style=\"display: block;\">\n                        <canvas baseChart width=\"400\" height=\"400\"\n                                    [datasets]=\"linePortalChartData\" \n                                    [labels]=\"lineChartLabels\"\n                                    [options]=\"lineChartOptions\"\n                                    [colors]=\"lineChartColors\"\n                                    [legend]=\"lineChartLegend\"\n                                    [chartType]=\"lineChartType\"\n                                    (chartHover)=\"chartHovered($event)\"\n                                    (chartClick)=\"chartClicked($event)\"></canvas>\n                        </div>\n                      </div>\n                    </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/adminpanel/adminpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminpanelComponent = (function () {
    function AdminpanelComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.Products = [];
        this.dashboardInfo = {};
        // public lineChartData:Array<any> = [
        //   {data: [59, 80, 81, 56, 55, 40], label: 'Sale'},
        // ];
        this.lineChartData = [];
        this.lineChartLabels = ['April', 'May', 'Jun', 'July', 'August', 'September'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.toasterService = toasterService;
    }
    AdminpanelComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        // for (let i = 0; i < this.lineChartData.length; i++) {
        //   _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        //   }
        // }
        this.lineChartData = _lineChartData;
    };
    // events
    AdminpanelComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AdminpanelComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AdminpanelComponent.prototype.ngOnInit = function () {
        this.dashboardInfoFun();
    };
    AdminpanelComponent.prototype.dashboardInfoFun = function () {
        var _this = this;
        this._sp.dashboardInfo(' ').subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                var sale = [];
                for (var i in data.data['sale2']) {
                    sale.push(data.data['sale2'][i]['total']);
                }
                _this.lineChartData.push({ data: sale, label: 'Sale' });
                _this.dashboardInfo = data.data;
            }
            else {
                _this.dashboardInfo = {};
            }
        }, function (err) {
            _this.dashboardInfo = {};
        });
    };
    AdminpanelComponent.prototype.export = function (type) {
        console.log(type);
        if (this.dashboardInfo[type].length != 0) {
            var orders = [];
            for (var i = 0; i < this.dashboardInfo[type].length; i++) {
                var order = {};
                order['storeName'] = this.dashboardInfo[type][i]['storeName'];
                // order['orderId'] = this.dashboardInfo[type][i]['orderId'];
                order['orderNumber'] = this.dashboardInfo[type][i]['orderNumber'];
                order['orderAddedOn'] = this.dashboardInfo[type][i]['orderAddedOn'];
                if (this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 0 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo[type][i]['orderStatus'] = 'Pending';
                else if (this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 1 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo[type][i]['orderStatus'] = 'Accepted';
                else if (this.dashboardInfo[type][i]['printed'] == 0 && this.dashboardInfo[type][i]['orderStatus'] == 2 && (this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo[type][i]['orderStatus'] = 'Rejected';
                else if (this.dashboardInfo[type][i]['printed'] == 1 && (this.dashboardInfo[type][i]['orderTrackNumber'] != '' || this.dashboardInfo[type][i]['orderTrackNumber'] == '' || this.dashboardInfo[type][i]['orderTrackNumber'] == null))
                    this.dashboardInfo[type][i]['orderStatus'] = 'Printed';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 1 && this.dashboardInfo[type][i]['orderTrackNumber'] != '' && this.dashboardInfo[type][i]['Shipped'] == 1)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Shipped';
                // order['storeId'] = this.dashboardInfo[type][i]['storeId'];
                order['orderStatus'] = this.dashboardInfo[type][i]['orderStatus'];
                order['orderTotal'] = this.dashboardInfo[type][i]['orderTotal'];
                if (this.dashboardInfo[type][i]['orderLevel'] == 2)
                    order['Placed by'] = 'Store';
                else if (this.dashboardInfo[type][i]['orderLevel'] == 1 || this.dashboardInfo[type][i]['orderLevel'] == 3)
                    order['Placed by'] = this.dashboardInfo[type][i]['apdmFirstName'] + ' ' + this.dashboardInfo[type][i]['apdmLastName'];
                orders.push(order);
            }
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                headers: Object.keys(orders[0]),
                showTitle: false,
                useBom: true,
                removeNewLines: false
            };
            if (type == 'today')
                var name = 'PPS_Orders_ByToday';
            else if (type == 'week')
                var name = 'PPS_Orders_ByWeek';
            else if (type == 'total')
                var name = 'PPS_Orders_ByTotal';
            else
                var name = 'PPS_Orders_ByMonth';
            console.log(Object.keys(orders[0]));
            new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](orders, name, options);
        }
    };
    AdminpanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminpanel',
            template: __webpack_require__("../../../../../src/app/superadmin/adminpanel/adminpanel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/adminpanel/adminpanel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], AdminpanelComponent);
    return AdminpanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label\n{\n  text-transform: capitalize;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <form [formGroup]=\"apdmForm\" (ngSubmit)=\"updateAdpm(apdmForm.value)\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmFirstName'].valid   && apdmSubmission}\">\n                <label for=\"company\">apl First name</label>\n                <input class=\"form-control\" id=\"company\" placeholder=\"Enter apl first name\" type=\"text\" formControlName=\"apdmFirstName\" [(ngModel)]=\"apdmDetails.apdmFirstName\">\n              </div>\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmLastName'].valid   && apdmSubmission}\">\n                <label for=\"company\">apl Last name</label>\n                <input class=\"form-control\" id=\"company\" placeholder=\"Enter apl first name\" type=\"text\" formControlName=\"apdmLastName\" [(ngModel)]=\"apdmDetails.apdmLastName\">\n              </div>\n\n            </div>\n\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmEmail'].valid   && apdmSubmission}\">\n                <label for=\"vat\">apl email</label>\n                <input class=\"form-control\" id=\"vat\" placeholder=\"Enter apl email\" type=\"text\" formControlName=\"apdmEmail\" [(ngModel)]=\"apdmDetails.apdmEmail\">\n                <span class=\"text-danger\" *ngIf=\"apdmForm.controls['apdmEmail'].hasError('email') && apdmSubmission\">Enter Valid Email</span>\n              </div>\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmMobileNo'].valid   && apdmSubmission}\">\n                <label for=\"vat\">apl Mobile</label>\n                <input class=\"form-control\" id=\"vat\" placeholder=\"Enter apl Mobile\" type=\"text\" formControlName=\"apdmMobileNo\" [(ngModel)]=\"apdmDetails.apdmMobileNo\">\n                <span  class=\"text-danger\" *ngIf=\"apdmForm.controls['userPassword'].hasError('pattern') && apdmSubmission\">Enter Valid mobile number</span>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmAddress'].valid   && apdmSubmission}\">\n              <label for=\"street\">apl address</label>\n              <textarea class=\"form-control\" placeholder=\"Enter apl address\" formControlName=\"apdmAddress\" rows=\"2\" cols=\"80\" [(ngModel)]=\"apdmDetails.apdmAddress\"></textarea>\n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"form-group col-sm-12\" [ngClass]=\"{'has-error':!apdmForm.controls['apdmCity'].valid   && apdmSubmission}\">\n                <label for=\"city\">apl city</label>\n                <input class=\"form-control\" id=\"city\" placeholder=\"Enter apl city\" type=\"text\" formControlName=\"apdmCity\" [(ngModel)]=\"apdmDetails.apdmCity\">\n              </div>\n\n            </div>\n          <!--/.row-->\n\n          <div class=\"\">\n            <label for=\"\">\n              <input (change)=\"ShowCredendtials()\" type=\"checkbox\" name=\"\" value=\"\">\n              <b style=\"vertical-align: super\">Credentials</b>\n            </label>\n          </div>\n\n            <div class=\"row\" *ngIf=\"isCredentials\">\n              <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!apdmForm.controls['userPassword'].valid   && apdmSubmission}\">\n                <label for=\"country\">Password</label>\n                <input class=\"form-control\" id=\"country\" placeholder=\"Enter password\" type=\"text\" formControlName=\"userPassword\">\n                <span  class=\"text-danger\" *ngIf=\"apdmForm.controls['userPassword'].hasError('min') && apdmSubmission\">Password length must be 6</span>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input type=\"submit\" value=\"Update apl\" class=\"btn btn-primary\">\n            </div>\n          </form>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApdmEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApdmEditComponent = (function () {
    function ApdmEditComponent(router, _sp, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.apdmSubmission = false;
        this.apdmDetails = {};
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCredentials = false;
        this.apdmForm = this.fb.group({
            apdmFirstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            apdmLastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            apdmCity: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            apdmEmail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            apdmMobileNo: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')]],
            apdmAddress: [''],
            userPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(6)]],
        });
    }
    ApdmEditComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this.getapdmDetails(this.ApdmToEdit);
        this.apdmForm.controls['userPassword'].disable();
    };
    ApdmEditComponent.prototype.getapdmDetails = function (id) {
        var _this = this;
        this._sp.apdmDetails(id, this.ApdmType).subscribe(function (data) {
            _this.apdmDetails = data.data;
        }, function (err) { return console.log(err); });
    };
    ApdmEditComponent.prototype.ShowCredendtials = function () {
        this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
        if (this.isCredentials)
            this.apdmForm.controls['userPassword'].enable();
        else
            this.apdmForm.controls['userPassword'].disable();
    };
    ApdmEditComponent.prototype.updateAdpm = function (value) {
        var _this = this;
        this.apdmSubmission = true;
        if (!this.apdmForm.valid) {
            return false;
        }
        value['userId'] = this.apdmDetails['apdmUserId'];
        value['ApdmType'] = this.ApdmType;
        this._sp.updateApdmUserDetail(value).subscribe(function (data) {
            if (data.success) {
                _this.apdmSubmission = false;
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ApdmEditComponent.prototype, "ApdmToEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ApdmEditComponent.prototype, "ApdmType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ApdmEditComponent.prototype, "onSuccess", void 0);
    ApdmEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-apdm-edit',
            template: __webpack_require__("../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/apdm-edit/apdm-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ApdmEditComponent);
    return ApdmEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <ng2-completer inputClass=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchContact\" [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"StrSelected($event)\" [clearSelected]=\"true\" placeholder=\"Search store names\"></ng2-completer> -->\n<br><br><br>\n\n<label for=\"\"><b>Assigned Stores</b></label>\n<div class=\"tag-list\">\n  <a *ngFor=\"let asgn of AssignedStores\">{{ asgn.storeName }} <span *ngIf=\"asgn.isRegion == false\" (click)=\"removeAsignStore(asgn.id)\"> &times; </span></a>\n\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignApdmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignApdmComponent = (function () {
    function AsignApdmComponent(toasterService, completerService, router, _sp, fb) {
        this.completerService = completerService;
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.clickedObj = {};
        this.AssignedStores = [];
        this.toasterService = toasterService;
    }
    AsignApdmComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(this.Apdm);
        this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/getUnAssignedStores/' + this.Apdm + '/', 'storeName,', 'storeName');
        this.getAssignes();
    };
    AsignApdmComponent.prototype.StrSelected = function (e) {
        var _this = this;
        if (e) {
            this.clickedObj = e.originalObject;
            var isConfirmed = confirm("Assign this store?");
            if (isConfirmed) {
                var value = {};
                // value['data']['apdmID']    = this.Apdm;
                // value['data']['storeIinsed']   = e.originalObject.storeId;
                value['data'] = {};
                value['data']['apdmID'] = this.Apdm;
                value['data']['storeId'] = e.originalObject.storeId;
                value['type'] = 'adpmassign';
                this._sp.insert(value).subscribe(function (data) {
                    if (data.success) {
                        _this.getAssignes();
                    }
                }, function (err) { return console.log(err); });
            }
        }
    };
    AsignApdmComponent.prototype.getAssignes = function () {
        var _this = this;
        console.log('hello');
        this._sp.getAssignes(this.Apdm).subscribe(function (data) {
            if (data.success) {
                _this.AssignedStores = data.data;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.AssignedStores = [];
            }
        });
    };
    AsignApdmComponent.prototype.removeAsignStoreConfirm = function (asignId) {
        this.AsignIdtoRemove = asignId;
        jQuery('#delete').modal('show');
    };
    AsignApdmComponent.prototype.removeAsignStore = function (asignId) {
        var _this = this;
        var v = {};
        v['id'] = asignId;
        v['type'] = 'removeAsignStore';
        var isConfirmed = confirm("Delete this store?");
        if (isConfirmed) {
            this._sp.delete(v).subscribe(function (data) {
                if (data.success) {
                    // jQuery('#delete').modal('hide');
                    _this.toasterService.pop('success', 'Store removed', '');
                    _this.getAssignes();
                }
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AsignApdmComponent.prototype, "Apdm", void 0);
    AsignApdmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asign-apdm',
            template: __webpack_require__("../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/asign-apdm/asign-apdm.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AsignApdmComponent);
    return AsignApdmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <ng2-completer inputClass=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchContact\" [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"StrSelected($event)\" [clearSelected]=\"true\" placeholder=\"Search store names\"></ng2-completer> -->\n<br><br><br>\n\n<label for=\"\"><b>Assigned Stores</b></label>\n<div class=\"tag-list\">\n  <a *ngFor=\"let asgn of AssignedStores; let i=index\">{{ asgn.storeName }} <span (click)=\"removeAsignStore(asgn.asgnId)\"> &times; </span></a>\n\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignExAplsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignExAplsComponent = (function () {
    function AsignExAplsComponent(toasterService, completerService, router, _sp, fb) {
        this.completerService = completerService;
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.clickedObj = {};
        this.AssignedStores = [];
        this.toasterService = toasterService;
    }
    AsignExAplsComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(this.Apdm);
        this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/getUnAssignedStoresExApl/' + this.Apdm + '/', 'storeName,', 'storeName');
        this.getAssignes();
    };
    AsignExAplsComponent.prototype.StrSelected = function (e) {
        var _this = this;
        if (e) {
            this.clickedObj = e.originalObject;
            var isConfirmed = confirm("Assign this store?");
            if (isConfirmed) {
                var value = {};
                // value['data']['apdmID']    = this.Apdm;
                // value['data']['storeIinsed']   = e.originalObject.storeId;
                value['data'] = {};
                value['data']['apdmID'] = this.Apdm;
                value['data']['storeId'] = e.originalObject.storeId;
                value['type'] = 'exaplassign';
                this._sp.insert(value).subscribe(function (data) {
                    if (data.success) {
                        _this.getAssignes();
                    }
                }, function (err) { return console.log(err); });
            }
        }
    };
    AsignExAplsComponent.prototype.getAssignes = function () {
        var _this = this;
        this._sp.getExAplAssignes(this.Apdm).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                _this.AssignedStores = data.data;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.AssignedStores = [];
            }
        });
    };
    AsignExAplsComponent.prototype.removeAsignStoreConfirm = function (asignId) {
        this.AsignIdtoRemove = asignId;
        jQuery('#delete').modal('show');
    };
    AsignExAplsComponent.prototype.removeAsignStore = function (asignId) {
        var _this = this;
        var v = {};
        v['id'] = asignId;
        v['type'] = 'removeAsignStoreExapl';
        var isConfirmed = confirm("Delete this store?");
        if (isConfirmed) {
            this._sp.delete(v).subscribe(function (data) {
                if (data.success) {
                    // jQuery('#delete').modal('hide');
                    _this.toasterService.pop('success', 'Store removed', '');
                    _this.getAssignes();
                }
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AsignExAplsComponent.prototype, "Apdm", void 0);
    AsignExAplsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asign-ex-apls',
            template: __webpack_require__("../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/asign-ex-apls/asign-ex-apls.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AsignExAplsComponent);
    return AsignExAplsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-completer inputClass=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchContact\" [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"regionSelected($event)\" [clearSelected]=\"true\" placeholder=\"Search region names\"></ng2-completer>\n<br><br><br>\n\n<label for=\"\"><b>Assigned Regions</b></label> <!-- *ngIf=\"asgn.isRegion == false\" -->\n<div class=\"tag-list\">\n  <a *ngFor=\"let asgn of AssignedRegions\">{{ asgn.regionName }} <span   (click)=\"removeAsignRegion(asgn.id)\"> &times; </span></a>\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Region Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Region Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignExRegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignExRegionComponent = (function () {
    function AsignExRegionComponent(toasterService, completerService, router, _sp, fb) {
        this.completerService = completerService;
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.clickedObj = {};
        this.AssignedRegions = [];
        this.toasterService = toasterService;
    }
    AsignExRegionComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(this.Apdm);
        //this.dataService  = this.completerService.remote(myGlobals.baseUrl+'api/getUnAssignedStores/'+this.Apdm+'/', 'storeName,', 'storeName');
        this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/getUnAssignedExRegions/' + this.Apdm + '/', 'storeName,', 'storeName');
        this.getAssignes();
    };
    AsignExRegionComponent.prototype.regionSelected = function (e) {
        var _this = this;
        if (e) {
            this.clickedObj = e.originalObject;
            var isConfirmed = confirm("Assign this region?");
            if (isConfirmed) {
                var value = {};
                // value['data']['apdmID']    = this.Apdm;
                // value['data']['storeIinsed']   = e.originalObject.storeId;
                value['data'] = {};
                value['data']['apdm_id'] = this.Apdm;
                value['data']['region_id'] = e.originalObject.id;
                value['type'] = 'exregionassign';
                this._sp.insert(value).subscribe(function (data) {
                    if (data.success) {
                        _this.getAssignes();
                    }
                }, function (err) { return console.log(err); });
            }
        }
    };
    AsignExRegionComponent.prototype.getAssignes = function () {
        var _this = this;
        this._sp.getExRegionsAssignes(this.Apdm).subscribe(function (data) {
            if (data.success) {
                _this.AssignedRegions = data.data;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.AssignedRegions = [];
            }
        });
    };
    AsignExRegionComponent.prototype.removeAsignRegionConfirm = function (asignId) {
        this.AsignIdtoRemove = asignId;
        jQuery('#delete').modal('show');
    };
    AsignExRegionComponent.prototype.removeAsignRegion = function (asignId) {
        var _this = this;
        var v = {};
        v['id'] = asignId;
        v['type'] = 'removeAsignExRegion';
        var isConfirmed = confirm("Delete this region?");
        if (isConfirmed) {
            this._sp.delete(v).subscribe(function (data) {
                if (data.success) {
                    // jQuery('#delete').modal('hide');
                    _this.toasterService.pop('success', 'Region removed', '');
                    _this.getAssignes();
                }
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AsignExRegionComponent.prototype, "Apdm", void 0);
    AsignExRegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asign-ex-region',
            template: __webpack_require__("../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/asign-ex-region/asign-ex-region.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AsignExRegionComponent);
    return AsignExRegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/asign-region/asign-region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-region/asign-region.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-completer inputClass=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchContact\" [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"regionSelected($event)\" [clearSelected]=\"true\" placeholder=\"Search region names\"></ng2-completer>\n<br><br><br>\n\n<label for=\"\"><b>Assigned Regions</b></label>\n<div class=\"tag-list\">\n  <a *ngFor=\"let asgn of AssignedRegions\">{{ asgn.regionName }} <span  (click)=\"removeAsignRegion(asgn.id)\"> &times; </span></a>\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Region Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Region Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/asign-region/asign-region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignRegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignRegionComponent = (function () {
    function AsignRegionComponent(toasterService, completerService, router, _sp, fb) {
        this.completerService = completerService;
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.clickedObj = {};
        this.AssignedRegions = [];
        this.toasterService = toasterService;
    }
    AsignRegionComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(this.Apdm);
        //this.dataService  = this.completerService.remote(myGlobals.baseUrl+'api/getUnAssignedStores/'+this.Apdm+'/', 'storeName,', 'storeName');
        this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/getUnAssignedRegions/' + this.Apdm + '/', 'storeName,', 'storeName');
        this.getAssignes();
    };
    AsignRegionComponent.prototype.regionSelected = function (e) {
        var _this = this;
        if (e) {
            this.clickedObj = e.originalObject;
            var isConfirmed = confirm("Assign this region?");
            if (isConfirmed) {
                var value = {};
                // value['data']['apdmID']    = this.Apdm;
                // value['data']['storeIinsed']   = e.originalObject.storeId;
                value['data'] = {};
                value['data']['apdm_id'] = this.Apdm;
                value['data']['region_id'] = e.originalObject.id;
                value['type'] = 'regionassign';
                this._sp.insert(value).subscribe(function (data) {
                    if (data.success) {
                        _this.getAssignes();
                    }
                }, function (err) { return console.log(err); });
            }
        }
    };
    AsignRegionComponent.prototype.getAssignes = function () {
        var _this = this;
        this._sp.getRegionsAssignes(this.Apdm).subscribe(function (data) {
            if (data.success) {
                _this.AssignedRegions = data.data;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.AssignedRegions = [];
            }
        });
    };
    AsignRegionComponent.prototype.removeAsignRegionConfirm = function (asignId) {
        this.AsignIdtoRemove = asignId;
        jQuery('#delete').modal('show');
    };
    AsignRegionComponent.prototype.removeAsignRegion = function (asignId) {
        var _this = this;
        var v = {};
        v['id'] = asignId;
        v['type'] = 'removeAsignRegion';
        var isConfirmed = confirm("Delete this region?");
        if (isConfirmed) {
            this._sp.delete(v).subscribe(function (data) {
                if (data.success) {
                    // jQuery('#delete').modal('hide');
                    _this.toasterService.pop('success', 'Region removed', '');
                    _this.getAssignes();
                }
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AsignRegionComponent.prototype, "Apdm", void 0);
    AsignRegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asign-region',
            template: __webpack_require__("../../../../../src/app/superadmin/asign-region/asign-region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/asign-region/asign-region.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AsignRegionComponent);
    return AsignRegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/authGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardSuperAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardSuperAdmin = (function () {
    function AuthGuardSuperAdmin(router) {
        this.router = router;
    }
    AuthGuardSuperAdmin.prototype.canActivate = function () {
        if (localStorage.getItem("ppsSuperAdminToken") === null) {
            this.router.navigate(['/superadmin']);
        }
        else {
            return true;
        }
    };
    AuthGuardSuperAdmin.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    AuthGuardSuperAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardSuperAdmin);
    return AuthGuardSuperAdmin;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/catedit/catedit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img_brow {\n    position: relative;\n    border: transparent;\n    padding: 0;\n    width: 116px;\n}\n.img_brow .img-thumbnail {\n    width: 100%;\n    height: 121px;\n    margin: 0 0 -3px;\n}\n\n.img_brow:hover .fafa_icon {\n    opacity: 1;\n}\n\n.fafa_icon {\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tbackground: #0006;\n\tborder-radius: 4px;\n\topacity: 0;\n\ttransition: all 0.3s ease-in-out 0s;\n\ttop: 0;\n\tposition: absolute;\n}\n\n.img_brow .fa.fa-camera {\n\tcolor: #fff;\n\tfont-size: 25px;\n\tposition: absolute;\n\tbottom: 7px;\n\tright: 10px;\n}\n.img_brow input {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\topacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/catedit/catedit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"updateCat\" (ngSubmit)=\"submitCat(updateCat.value)\" *ngIf=\"catDetails != '{}'\">\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateCat.controls['catName'].valid   && catSubmission}\">\n    <label for=\"\">Category name</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" formControlName=\"catName\" [(ngModel)]=\"catDetails.catName\">\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateCat.controls['catParent'].valid   && catSubmission}\">\n    <label for=\"\">Parent category</label>\n    <select class=\"form-control\" formControlName=\"catParent\" [(ngModel)]=\"catDetails.catParent\">\n      <option [selected]=\"true\" value=\"0\">None</option>\n      <option [ngClass]=\"'lev'+cat.catLevel\" *ngFor=\"let cat of CatList\" [value]=\"cat.catId\">\n        <span *ngIf=\"cat.catLevel == 1\"> &nbsp;&nbsp; </span>\n        <span *ngIf=\"cat.catLevel == 2\"> &nbsp;&nbsp;&nbsp; </span>\n        <span *ngIf=\"cat.catLevel == 3\"> &nbsp;&nbsp;&nbsp;&nbsp; </span>\n        {{ cat.catName }}\n      </option>\n    </select>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateCat.controls['catDescription'].valid   && catSubmission}\">\n    <label for=\"\">Description</label>\n    <textarea class=\"form-control\" rows=\"2\" cols=\"80\" formControlName=\"catDescription\" [(ngModel)]=\"catDetails.catDescription\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Category Image</label>\n    <div class=\"img_brow img-thumbnail\" *ngIf=\"!showImageUploading\">\n      <img [src]=\"catDetails.catImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+catDetails.catImage : 'assets/img/demo.png'\" alt=\"\" class=\"img-thumbnail\">\n      <div class=\"fafa_icon\">\n        <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n        <input #fileInput type=\"file\" (change)=\"uploadCatImage($event)\" accept=\"image/*\"  title=\" \"/>\n      </div>\n    </div>\n    <div class=\"img_brow img-thumbnail imageuploadingLoader\" *ngIf=\"showImageUploading\">\n      <img src=\"assets/img/loading.gif\" alt=\"\" class=\"img-thumbnail\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"submit\" value=\"Submit\">\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/catedit/catedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CateditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CateditComponent = (function () {
    function CateditComponent(router, _sp, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.catUpdateTrue = false;
        this.catDetails = {};
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCredentials = false;
        this.CatList = [];
        this.catSubmission = false;
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.updateCat = fb.group({
            catName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            catParent: ['0'],
            catDescription: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    }
    CateditComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this.get('cat', this.catToEdit);
        this.getCats();
    };
    CateditComponent.prototype.get = function (type, id) {
        var _this = this;
        this._sp.getWhere(type, id).subscribe(function (data) {
            if (type == 'cat')
                _this.catDetails = data.data[0];
        }, function (err) { return console.log(err); });
    };
    CateditComponent.prototype.submitStoreForm = function (value) {
        var _this = this;
        this.catUpdateTrue = true;
        if (!this.updateCat.valid) {
            return false;
        }
        value['userId'] = this.catDetails['storeUserId'];
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this._sp.updateStore(value).subscribe(function (data) {
            if (data.success) {
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    CateditComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    CateditComponent.prototype.uploadCatImage = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.showImageUploading = true;
            this.showhidemsg2 = true;
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.responseStatus2['error_msg'] = 'Only images are allowed.';
                this.showImageUploading = false;
                this.showhidemsg2 = false;
            }
            this._sp.upload(fileToUpload).subscribe(function (response) {
                setTimeout(function () {
                    this.showhidemsg2 = false;
                }.bind(_this), 3000);
                _this.showImageUploading = false;
                if (response.success) {
                    _this.catDetails['catImage'] = response.fileName;
                }
                else {
                    _this.responseStatus2['error_msg'] = response.error_msg;
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
                _this.showImageUploading = false;
            });
        }
    };
    CateditComponent.prototype.submitCat = function (value) {
        var _this = this;
        this.catSubmission = true;
        if (!this.updateCat.valid) {
            return false;
        }
        value['catId'] = this.catToEdit;
        value['type'] = 'cat';
        value['catImage'] = this.catDetails['catImage'];
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CateditComponent.prototype, "catToEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CateditComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CateditComponent.prototype, "fileInput", void 0);
    CateditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-catedit',
            template: __webpack_require__("../../../../../src/app/superadmin/catedit/catedit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/catedit/catedit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], CateditComponent);
    return CateditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/cats/cats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img_brow {\n    position: relative;\n    border: transparent;\n    padding: 0;\n    width: 116px;\n}\n.img_brow .img-thumbnail {\n    width: 100%;\n    height: 121px;\n    margin: 0 0 -3px;\n}\n\n.img_brow:hover .fafa_icon {\n    opacity: 1;\n}\n\n.fafa_icon {\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tbackground: #0006;\n\tborder-radius: 4px;\n\topacity: 0;\n\ttransition: all 0.3s ease-in-out 0s;\n\ttop: 0;\n\tposition: absolute;\n}\n\n.img_brow .fa.fa-camera {\n\tcolor: #fff;\n\tfont-size: 25px;\n\tposition: absolute;\n\tbottom: 7px;\n\tright: 10px;\n}\n.img_brow input {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\topacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Categories</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n            <div class=\"col-lg-12\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                Categories\n                </div>\n                <div class=\"card-body\">\n                  <table class=\"table table-bordered table-responsive\">\n                    <tr>\n                      <th>Image</th>\n                      <th>Name</th>\n                      <th>Parent</th>\n                      <th>Description</th>\n                      <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let cat of CatList\">\n                      <td>\n                        <img [src]=\"cat.catImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+cat.catImage : 'assets/img/demo.png'\" alt=\"\" style=\"width:56px\">\n                      </td>\n                      <td [ngClass]=\"'lev'+cat.catLevel\">\n                        <span  *ngIf=\"cat.catLevel == 1\">&nbsp;&nbsp;&nbsp;-</span>\n                        <span  *ngIf=\"cat.catLevel == 2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>\n                        <span  *ngIf=\"cat.catLevel == 3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</span>\n                        {{cat.catName}}\n                      </td>\n                      <td>\n                      <span *ngIf=\"cat.parentname != null\">{{cat.parentname}}</span>\n                      <!-- <span *ngIf=\"cat.parentname == null\">None</span> -->\n                      </td>\n                      <td>{{cat.catDescription}}</td>\n                      <td>\n                        <a (click)=\"editCat(cat.catId)\" class=\"fa fa-edit icon-btn\"></a>\n                      </td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Update Category\n      </div>\n      <div class=\"modal-body\">\n        <app-catedit (onSuccess)=\"handleCatUpdate($event)\" *ngIf=\"catEdit\" [catToEdit]=\"catToEdit\"></app-catedit>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteCat()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatsComponent = (function () {
    function CatsComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.CatList = [];
        this.CatListFull = [];
        this.catLoading = false;
        this.subCatLoading = false;
        this.catImage = '';
        this.catImagePath = '';
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.catSubmission = true;
        this.catEdit = false;
        this.toasterService = toasterService;
        this.catForm = this.fb.group({
            catName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            catParent: ['0'],
            catDescription: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]]
        });
    }
    CatsComponent.prototype.ngOnInit = function () {
        // this.listStores(1);
        // this.get('mainCat');
        this.getCats();
    };
    CatsComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.catEdit = false;
        });
    };
    // addCat()
    // {
    //   if(this.catName == '')
    //   return false;
    //       var value         = {};
    //       value['data']     = { 'CategoryName' : this.catName };
    //       value['type']     = 'mainCat';
    //       this._sp.insert(value).subscribe(
    //         data => {
    //           this.CatList.push(this.catName);
    //           this.catName = '';
    //         },
    //         err => console.log(err)
    //      );
    // }
    CatsComponent.prototype.removeCat = function (index, cat) {
        var _this = this;
        var value = {};
        value['id'] = cat;
        value['type'] = 'mainCat';
        this._sp.delete(value).subscribe(function (data) {
            _this.CatList.splice(index, 1);
        }, function (err) { return console.log(err); });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    CatsComponent.prototype.deleteStore = function () {
        var value = {};
        // value['userId']       = this.storeToDelete;
        value['caseStatment'] = 'usersTable';
        value['userStatus'] = 0;
        this._sp.deleteStore(value).subscribe(function (data) {
            if (data.success) {
            }
        }, function (err) { return console.log(err); });
    };
    CatsComponent.prototype.uploadCatImage = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.showImageUploading = true;
            this.showhidemsg2 = true;
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.responseStatus2['error_msg'] = 'Only images are allowed.';
                this.showImageUploading = false;
                this.showhidemsg2 = false;
            }
            this._sp.upload(fileToUpload).subscribe(function (response) {
                setTimeout(function () {
                    this.showhidemsg2 = false;
                }.bind(_this), 3000);
                _this.showImageUploading = false;
                if (response.success) {
                    _this.catImage = response.fileName;
                    _this.catImagePath = response.filePath;
                }
                else {
                    _this.responseStatus2['error_msg'] = response.error_msg;
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
                _this.showImageUploading = false;
            });
        }
    };
    CatsComponent.prototype.submitCat = function (value) {
        var _this = this;
        this.catSubmission = true;
        if (!this.catForm.valid) {
            return false;
        }
        value['catImage'] = this.catImage;
        this._sp.submitCat(value).subscribe(function (data) {
            if (data.success) {
                //this.catForm.reset();
                _this.catForm.reset({ catParent: 0 });
                _this.catImage = '';
                _this.catImagePath = '';
                _this.getCats();
            }
        }, function (err) { return console.log(err); });
    };
    CatsComponent.prototype.editCat = function (catId) {
        this.catToEdit = catId;
        jQuery('#updateModal').modal('show');
        this.catEdit = true;
    };
    CatsComponent.prototype.deleteCatConfirm = function (cat) {
        this.catToDelete = cat;
        jQuery('#deleteModal').modal('show');
    };
    CatsComponent.prototype.deleteCat = function () {
        var _this = this;
        var value = {};
        value['id'] = this.catToDelete;
        value['type'] = 'cats';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#deleteModal').modal('hide');
                _this.catToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    CatsComponent.prototype.handleCatUpdate = function (e) {
        if (e.success) {
            this.toasterService.pop('success', e.data, '');
            this.getCats();
            jQuery('#updateModal').modal('hide');
            this.catToEdit = '';
            this.catEdit = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CatsComponent.prototype, "fileInput", void 0);
    CatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cats',
            template: __webpack_require__("../../../../../src/app/superadmin/cats/cats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/cats/cats.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], CatsComponent);
    return CatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/export-reports/export-reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/export-reports/export-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"ui-view\">\n        <div class=\"col-12 animated fadeIn\" style=\"padding-top:20px\">\n          <div class=\"row\" style=\"padding-top:20px\">\n            <div class=\"card\" style=\"width:100%\">\n              <div class=\"card-header\">\n                <span class=\"pull-left\">Export Reports</span>\n\n              </div>\n              <div class=\"card-body\">\n                <div class=\"loader\" *ngIf=\"stores.length == 0\">\n                  <div class=\"loader-inner ball-pulse\">\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"stores.length != 0\">\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">From Date</label>\n                      <input type=\"date\" name=\"from_date\" class=\"form-control\" placeholder=\"From Date\" [(ngModel)]=\"model.from_date\" #from_date=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">To Date</label>\n                      <input type=\"date\" name=\"to_date\" class=\"form-control\" placeholder=\"To Date\" [(ngModel)]=\"model.to_date\" #to_date=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"/>                    \n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">Apls</label>\n                    <select class=\"form-control\" [value]=\"\" name=\"apl\" [(ngModel)]=\"model.apl\" #apl=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                      <option value=\"\">All</option>\n                    <option *ngFor=\"let apl of apls\" value=\"{{apl.apdmUserId}}\">{{apl.apdmFirstName}} {{apl.apdmLastName}}</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"\">Stores</label>\n                    <select class=\"form-control\" [value]=\"\" name=\"store_id\" [(ngModel)]=\"model.store_id\" #store_id=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">\n                   <option value=\"\">All</option>\n                   <option *ngFor=\"let store of stores\" value=\"{{store.storeUserId}}\">{{store.storeName}}</option>\n                    </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <input type=\"button\" (click)=\"export();\" value=\"Export\" class=\"btn btn-primary\" style=\"margin-top: 30px;\">\n                    </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/export-reports/export-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__ = __webpack_require__("../../../../ngx-csv/ngx-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExportReportsComponent = (function () {
    function ExportReportsComponent(router, _sp, toasterService) {
        this.router = router;
        this._sp = _sp;
        this.stores = [];
        this.model = {};
        this.apls = [];
        this.storeLoading = false;
        this.isSubmit = false;
        this.fromDateError = false;
        this.toDateError = false;
        this.model.from_date = '';
        this.model.to_date = '';
        this.model.apl = '';
        this.model.store_id = '';
        this.toasterService = toasterService;
    }
    ExportReportsComponent.prototype.export = function () {
        var _this = this;
        this.isSubmit = true;
        if (this.model.from_date == '' && this.model.to_date != '') {
            this.toasterService.pop('error', 'Please select from date', '');
            return false;
        }
        else if (this.model.from_date != '' && this.model.to_date == '') {
            this.toasterService.pop('error', 'Please select to date', '');
            return false;
        }
        else {
            console.log(this.model);
            this._sp.exportReports(this.model).subscribe(function (data) {
                //  console.log(data.data);return false;
                // var orders = [];
                // for (let i = 0; i < data.data.length; i++)
                // {
                //   var order = {};
                //   order['category'] = data.data[i].catName;
                //   //order['products'] = data.data[i].catName;
                //   for(let j = 0; j < data.data[i].products; i++)
                //   {
                //     var product = {};
                //     product['product_name'] = data.data[i].products[j].productCode+'-'+data.data[i].products[j].productName;
                //     product['product_qty'] = data.data[i].products[j].qty;
                //     product['product_price'] = data.data[i].products[j].price;
                //     product['apdl'] = data.data[i].products[j].apdmFirstName+' '+data.data[i].products[j].apdmLastName;
                //     order['products'] = product;
                //   }
                //   order['total_qty'] = data.data[i].total_qty;
                //   order['total_amount'] = data.data[i].total_amount;
                //   orders.push(order);
                // }
                //console.log(data.data);
                var hds = ['Order Number', 'Apdl', 'Store', 'Product', 'Quantity', 'Amount'];
                var options = {
                    fieldSeparator: ',',
                    quoteStrings: '"',
                    decimalseparator: '.',
                    headers: hds,
                    showTitle: false,
                    useBom: true,
                    removeNewLines: false,
                };
                var name = 'PPS_Order_reports';
                new __WEBPACK_IMPORTED_MODULE_2_ngx_csv_ngx_csv__["ngxCsv"](data.data, name, options);
            }, function (err) {
                if (err.status == 409) {
                    _this.stores = [];
                    _this.apls = [];
                    _this.storeLoading = false;
                }
            });
        }
    };
    ExportReportsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ExportReportsComponent.prototype.getData = function () {
        var _this = this;
        this.storeLoading = true;
        this._sp.getexportReportData().subscribe(function (data) {
            console.log(data);
            _this.stores = data.stores;
            _this.apls = data.apls;
        }, function (err) {
            if (err.status == 409) {
                _this.stores = [];
                _this.apls = [];
                _this.storeLoading = false;
            }
        });
    };
    ExportReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-export-reports',
            template: __webpack_require__("../../../../../src/app/superadmin/export-reports/export-reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/export-reports/export-reports.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */]])
    ], ExportReportsComponent);
    return ExportReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/faq-update/faq-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/faq-update/faq-update.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Application Status</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-10\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    FAQ\n                  </div>\n                  <div class=\"card-body\">\n                    <div class=\"form-group has-feedback col-xs-12\">\n                      <ckeditor\n                        [(ngModel)]=\"faq\"\n                        debounce=\"500\" [ngModelOptions]=\"{standalone: true}\">\n                      </ckeditor>\n\n                      <!-- <textarea class=\"form-control\" placeholder=\"FAQ\" [(ngModel)]=\"faq\"></textarea> -->\n                      <!-- {{ faq }} -->\n                    </div>\n                    <div>\n                      <div class=\"button_panel\">\n                        <div class=\"col-xs-12\">\n                          <button type=\"submit\" class=\"btn btn-primary btn-flat\" (click)=\"faqUpdate()\">Submit</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/faq-update/faq-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqUpdateComponent = (function () {
    function FaqUpdateComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.faq = '';
        this.toasterService = toasterService;
    }
    FaqUpdateComponent.prototype.ngOnInit = function () {
        this.getFaq();
    };
    FaqUpdateComponent.prototype.getFaq = function () {
        var _this = this;
        this._sp.getWhere('faq', 4).subscribe(function (data) {
            if (data.success) {
                _this.faq = data.data['setValue'];
            }
        }, function (err) { return console.log(err); });
    };
    FaqUpdateComponent.prototype.faqUpdate = function () {
        var _this = this;
        var value = {};
        value['type'] = 'faq';
        value['setValue'] = this.faq;
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
            }
        }, function (err) { return console.log(err); });
    };
    FaqUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq-update',
            template: __webpack_require__("../../../../../src/app/superadmin/faq-update/faq-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/faq-update/faq-update.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], FaqUpdateComponent);
    return FaqUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/lisstore/lisstore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/lisstore/lisstore.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Stores</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n\n\n\n          <div class=\"col-lg-9\">\n\n                <div class=\"loader\" *ngIf=\"storeLoading\">\n                  <div class=\"loader-inner ball-pulse\">\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                  </div>\n                </div>\n\n                <div class=\"\">\n                  <div style=\"margin-bottom:10px\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search for stores\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"card\" *ngIf=\"!storeLoading\">\n                  <div class=\"card-header\">\n                    Stores\n                    <div class=\"dropdow pull-right\">\n                      <button type=\"button\" name=\"button\" (click)=\"deleteee()\"  class=\"btn btn-primary btn-sm\">Delete</button>\n                      <button data-toggle='dropdown' type=\"button\" name=\"button\" class=\"btn btn-primary btn-sm\">Per page</button>\n                      <span class=\"caret\"></span>\n                      <!-- <i class=\"fa fa-arrow-down\"></i> -->\n                      <ul class=\"dropdown-menu\">\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">5</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">10</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(20)\">20</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(30)\">30</a></li>\n                      </ul>\n                    </div>\n                  </div>\n\n\n                  <div class=\"card-body\" >\n                    <div *ngIf=\"!storeLoading && stores.length == 0\">\n                      No Store found\n                    </div>\n                    <table class=\"table table-bordered table-responsive\"  *ngIf=\"!storeLoading && stores.length != 0\">\n                      <thead>\n                        <tr>\n                          <th><input type=\"checkbox\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"> </th>\n                          <th>Store Name</th>\n                          <th>Store City</th>\n                          <th>Store email</th>\n                          <!-- <th>Status</th> -->\n                          <th>Actions</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let store of stores | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                          <td><input class=\"storeChecks\" [attr.dd]=\"store.storeUserId\" type=\"checkbox\" value=\"{{store.id}}\" [(ngModel)]=\"store.state\"></td>\n                          <td>{{store.storeName}}</td>\n                          <td>{{store.storeCity}}</td>\n                          <td>{{store.storeEmail}}</td>\n                          <!-- <td>\n                            <span *ngIf=\"store.storeStatus == 1\" class=\"badge badge-success\">Active</span>\n                            <span *ngIf=\"store.storeStatus == 2\" class=\"badge badge-warning\">InActive</span>\n                          </td> -->\n                          <td>\n                            <a (click)=\"deleteStoreConfirm(store.storeUserId)\" class=\"fa fa-remove icon-btn\"></a>\n                            <a (click)=\"editStore(store.storeId)\" class=\"fa fa-edit icon-btn\"></a>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"page = listStores($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n\n\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Update Store\n      </div>\n      <div class=\"modal-body\" style=\"min-height:100px\">\n        <app-update-stor (onSuccess)=\"handleStoreUpdate($event)\" *ngIf=\"storeEdit\" [storeToEdit]=\"storeToEdit\"></app-update-stor>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteStore()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"bulkDelete()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/lisstore/lisstore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LisstoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LisstoreComponent = (function () {
    function LisstoreComponent(router, _sp, toasterService) {
        this.router = router;
        this._sp = _sp;
        this.stores = [];
        this.storeEdit = false;
        this.perpage = 5;
        this.page = 1;
        this.storeLoading = false;
        this.searchText = '';
        this.storeListevent = 1;
        this.storesBulk = [];
        this.toasterService = toasterService;
    }
    LisstoreComponent.prototype.ngOnInit = function () {
        this.listStores(1);
    };
    LisstoreComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.storeEdit = false;
        });
    };
    LisstoreComponent.prototype.listStores = function (e) {
        var _this = this;
        this.storeListevent = e;
        this.storeLoading = true;
        var value = {};
        value['perpage'] = this.perpage;
        value['page'] = e;
        value['text'] = this.searchText;
        this._sp.listStores(value).subscribe(function (data) {
            var thiss = _this;
            setTimeout(function () {
                thiss.stores = data.data.result;
                thiss.totalItem = data.data.total_rows;
                thiss.storeLoading = false;
            }, 500);
        }, function (err) {
            if (err.status == 409) {
                _this.stores = [];
                _this.totalItem = 0;
                _this.storeLoading = false;
            }
        });
        return e;
    };
    LisstoreComponent.prototype.editStore = function (storeId) {
        this.storeToEdit = storeId;
        jQuery('#updateModal').modal('show');
        this.storeEdit = true;
    };
    LisstoreComponent.prototype.handleStoreUpdate = function (event) {
        if (event.success) {
            this.storeToEdit = '';
            this.toasterService.pop('success', event.data, '');
            jQuery('#updateModal').modal('hide');
            this.listStores(1);
            this.storeEdit = false;
        }
    };
    LisstoreComponent.prototype.updaetPerPage = function (a) {
        this.perpage = a;
        this.listStores(1);
    };
    LisstoreComponent.prototype.deleteStoreConfirm = function (store) {
        this.storeToDelete = store;
        jQuery('#deleteModal').modal('show');
    };
    LisstoreComponent.prototype.deleteStore = function () {
        var _this = this;
        var value = {};
        value['id'] = this.storeToDelete;
        value['type'] = 'store';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listStores(1);
                jQuery('#deleteModal').modal('hide');
                _this.storeToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    LisstoreComponent.prototype.deleteStore2 = function () {
        var _this = this;
        var value = {};
        value['id'] = this.storeToDelete;
        value['type'] = 'store';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listStores(1);
                jQuery('#deleteModal').modal('hide');
                _this.storeToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    LisstoreComponent.prototype.Search = function () {
        this.listStores(1);
    };
    LisstoreComponent.prototype.deleteee = function () {
        var thiss = this;
        jQuery('input:checkbox.storeChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.storesBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.storesBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.storesBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.storesBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 store', '');
        }
        else {
            jQuery('#deleteModal2').modal('show');
        }
    };
    LisstoreComponent.prototype.bulkDelete = function () {
        var _this = this;
        var thiss = this;
        jQuery('input:checkbox.storeChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.storesBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.storesBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.storesBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.storesBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 store', '');
        }
        var value = {};
        var searchValue = this.storesBulk.join('_');
        value['id'] = searchValue;
        value['type'] = 'bulkStores';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listStores(1);
                jQuery('#deleteModal2').modal('hide');
                _this.storesBulk = [];
            }
        }, function (err) { return console.log(err); });
    };
    LisstoreComponent.prototype.isAllChecked = function () {
        return this.stores.every(function (_) { return _.state; });
    };
    LisstoreComponent.prototype.checkAll = function (ev) {
        this.stores.forEach(function (x) { return x.state = ev.target.checked; });
        // var objj = jQuery('.storeChecks');
        // console.log(objj);
    };
    LisstoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lisstore',
            template: __webpack_require__("../../../../../src/app/superadmin/lisstore/lisstore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/lisstore/lisstore.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], LisstoreComponent);
    return LisstoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/list-admins/list-admins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/list-admins/list-admins.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Admins</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" *ngIf=\"Loading\">\n              <div class=\"loader\">\n                <div class=\"loader-inner ball-pulse\">\n                  <div class=\"my-loader\"></div>\n                  <div class=\"my-loader\"></div>\n                  <div class=\"my-loader\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\" *ngIf=\"!Loading\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <tr>\n                    <th>Admin name</th>\n                    <th>Admin email</th>\n                    <th>Admin mobile</th>\n                    <th>Admin city</th>\n                    <th>Actions</th>\n                  </tr>\n                  <tr *ngFor=\"let admin of AdminList; let i = index\">\n                    <td>{{ admin.adminName }}</td>\n                    <td>{{ admin.adminEmail }}</td>\n                    <td>{{ admin.adminMobile }}</td>\n                    <td>{{ admin.adminCity }}</td>\n                    <td>\n                      <i class=\"fa fa-edit icon-btn\" (click)=\"editAdmin(admin.adminUserId)\"></i>\n                      <i class=\"fa fa-trash icon-btn\" (click)=\"deleteAdminConfirm(admin.adminId)\"></i>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </main>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteAdmin()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog modal-lg\" style=\"max-width:80%\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <app-update-admin [admin]=\"adminToEdit\" (onSuccess)=\"handleUpdate($event)\" *ngIf=\"adminEdit\"></app-update-admin>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/list-admins/list-admins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAdminsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListAdminsComponent = (function () {
    function ListAdminsComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.AdminList = [];
        this.Loading = false;
        this.adminEdit = false;
        this.page = 1;
        this.perpage = 10;
        this.toasterService = toasterService;
    }
    ListAdminsComponent.prototype.ngOnInit = function () {
        this.ListAdmin(1);
    };
    ListAdminsComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.adminEdit = false;
        });
    };
    ListAdminsComponent.prototype.ListAdmin = function (e) {
        var _this = this;
        this.Loading = true;
        this._sp.ListAdmin(e, this.perpage).subscribe(function (data) {
            _this.Loading = false;
            _this.AdminList = data.data.result;
            _this.total_rows = data.data.total_rows;
        }, function (err) {
            _this.Loading = false;
        });
        return e;
    };
    ListAdminsComponent.prototype.editAdmin = function (admin) {
        this.adminToEdit = admin;
        this.adminEdit = true;
        jQuery('#updateModal').modal('show');
    };
    ListAdminsComponent.prototype.deleteAdminConfirm = function (i) {
        this.AdminToDelete = i;
        jQuery('#deleteModal').modal('show');
    };
    ListAdminsComponent.prototype.deleteAdmin = function () {
        var _this = this;
        var value = {};
        value['id'] = this.AdminToDelete;
        value['type'] = 'admin';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#deleteModal').modal('hide');
                _this.AdminToDelete = '';
                _this.ListAdmin(1);
            }
        }, function (err) { return console.log(err); });
    };
    ListAdminsComponent.prototype.handleUpdate = function (e) {
        if (e.success) {
            this.ListAdmin(1);
            this.adminToEdit = '';
            this.adminEdit = false;
            this.toasterService.pop('success', e.data, '');
            jQuery('#updateModal').modal('hide');
        }
    };
    ListAdminsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-admins',
            template: __webpack_require__("../../../../../src/app/superadmin/list-admins/list-admins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/list-admins/list-admins.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], ListAdminsComponent);
    return ListAdminsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/listapdm/listapdm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnxs\n{\n  padding: 3px 11px;\nfont-size: 12px;\nmargin-left: 14px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/listapdm/listapdm.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Apls</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div *ngIf=\"apdmLoading\">\n            <div class=\"loader\">\n              <div class=\"loader-inner ball-pulse\">\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"\">\n            <div style=\"margin-bottom:10px\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for Apls\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"card\" *ngIf=\"!apdmLoading\">\n            <div class=\"card-header\">\n              Apls\n              <div class=\"dropdow pull-right\">\n                <button type=\"button\" name=\"button\" (click)=\"deleteee()\"  class=\"btn btn-primary btn-sm\">Delete</button>\n                <span class=\"caret\"></span>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\" *ngIf=\"!apdmLoading && (apdmList | json ) != '[]'\">\n                <table class=\"table table-bordered table-responsive\">\n                  <tr>\n                    <th><input type=\"checkbox\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"> </th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>City</th>\n                    <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"let apdm of apdmList | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                    <td><input class=\"storeChecks\" [attr.dd]=\"apdm.apdmUserId\" type=\"checkbox\" value=\"{{apdm.apdmID}}\" [(ngModel)]=\"apdm.state\"></td>\n                    <td>{{ apdm.apdmFirstName}} {{ apdm.apdmLastName}}</td>\n                    <td>{{ apdm.apdmEmail}}</td>\n                    <td>{{ apdm.apdmCity}}</td>\n                    <td align=\"center\" valign=\"center\">\n                      <a (click)=\"DeleteConfirm(apdm.apdmID)\" class=\"fa fa-remove icon-btn\"></a>\n                      <a (click)=\"editProduct(apdm.apdmID)\" class=\"fa fa-edit icon-btn\"></a>\n                      <a (click)=\"assignStore(apdm.apdmID,apdm.userType)\" class=\"fa fa-plus icon-btn\"></a>\n\n                      <a (click)=\"assignRegion(apdm.apdmID,apdm.userType)\" class=\"btnxs btn btn-primary mt-2 mt-sm-0\" style=\"color:#fff !important;\">Asign Region</a>\n                      <a *ngIf=\"type == 3\" (click)=\"convert(apdm.apdmUserId,'apltoex')\" class=\"btnxs btn btn-primary mt-2 mt-sm-0\" style=\"color:#fff !important;\">Convert to Read only Apl</a>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n                <div *ngIf=\"!apdmLoading && (apdmList | json ) == '[]'\">\n                  No Records\n                </div>\n              </div>\n            </div>\n          </div>\n            <pagination-controls *ngIf=\"!apdmLoading\" (pageChange)=\"page = getapdms($event,type)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n\n        </div>\n      </div>\n  </main>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteApdm()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Update apl\n      </div>\n      <div class=\"modal-body\">\n        <app-apdm-edit (onSuccess)=\"handleApdmUpdate($event)\" *ngIf=\"ApdmEdit\" [ApdmToEdit]=\"ApdmToEdit\"  [ApdmType]=\"type\"></app-apdm-edit>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Assign Stores\n      </div>\n      <div class=\"modal-body\">\n        <app-asign-apdm (onSuccess)=\"handleApdmUpdate($event)\" *ngIf=\"Assignment\" [Apdm]=\"Apdm\"></app-asign-apdm>\n        <app-asign-ex-apls (onSuccess)=\"handleApdmUpdate($event)\" *ngIf=\"ExAplAssignment\" [Apdm]=\"Apdm\"></app-asign-ex-apls>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"assignmentRegion\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Assign Regions\n      </div>\n      <div class=\"modal-body\">\n        <app-asign-region (onSuccess)=\"handleApdmUpdate($event)\" *ngIf=\"Assignment\" [Apdm]=\"Apdm\"></app-asign-region>\n        <app-asign-ex-region (onSuccess)=\"handleApdmUpdate($event)\" *ngIf=\"ExAplAssignment\" [Apdm]=\"Apdm\"></app-asign-ex-region>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"deleteModal2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"bulkDelete()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/listapdm/listapdm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListapdmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListapdmComponent = (function () {
    function ListapdmComponent(route, fb, router, _sp, toasterService) {
        this.route = route;
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.apdmList = [];
        this.apdmLoading = false;
        this.ApdmToDelete = '';
        this.ApdmToEdit = '';
        this.ApdmEdit = false;
        this.Assignment = false;
        this.ExAplAssignment = false;
        this.CatList = [];
        this.perpage = 10;
        this.catID = 1;
        this.FilterCats = [];
        this.ProductToDelete = '';
        this.ProductToEdit = '';
        this.ProductEdit = false;
        this.type = 9;
        this.searchText = '';
        this.storesBulk = [];
        this.toasterService = toasterService;
    }
    ListapdmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            var type = routeParams['readonly'];
            console.log('type');
            console.log(type);
            console.log('type');
            if (type && type == 'readonly') {
                _this.type = 9;
                _this.getapdms(1, 9); // 9 is the userType for ex apl
            }
            else {
                _this.type = 3;
                _this.getapdms(1, 3); // 3 is the userType for apl
            }
        });
    };
    ListapdmComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.ApdmEdit = false;
        });
        jQuery('#assignment').on('hidden.bs.modal', function () {
            thiss.Assignment = false;
            thiss.ExAplAssignment = false;
        });
        jQuery('#assignmentRegion').on('hidden.bs.modal', function () {
            thiss.Assignment = false;
            thiss.ExAplAssignment = false;
        });
    };
    ListapdmComponent.prototype.getapdms = function (e, type) {
        var _this = this;
        this.apdmLoading = true;
        this._sp.apdmUserListing(e, type, this.perpage, this.searchText).subscribe(function (data) {
            _this.apdmLoading = false;
            _this.apdmList = data.data.result;
            _this.totalItem = data.data.total_rows;
        }, function (err) {
            if (err.status == 409) {
                _this.apdmList = [];
                _this.totalItem = 0;
                _this.apdmLoading = false;
            }
        });
        return e;
    };
    ListapdmComponent.prototype.PushFilterCats = function (cat) {
        this.FilterCats.push(cat);
    };
    ListapdmComponent.prototype.PopFilterCats = function (cat) {
        var index = this.FilterCats.indexOf(cat);
        if (index > -1) {
            this.FilterCats.splice(index, 1);
        }
    };
    ListapdmComponent.prototype.DeleteConfirm = function (apdmid) {
        this.ApdmToDelete = apdmid;
        jQuery('#deleteModal').modal('show');
    };
    ListapdmComponent.prototype.deleteApdm = function () {
        var _this = this;
        var value = {};
        value['id'] = this.ApdmToDelete;
        if (this.type == 9)
            value['type'] = 'exapl';
        else
            value['type'] = 'apdm';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#deleteModal').modal('hide');
                _this.ApdmToDelete = '';
                _this.getapdms(1, _this.type);
            }
        }, function (err) { return console.log(err); });
    };
    ListapdmComponent.prototype.editProduct = function (aid) {
        this.ApdmToEdit = aid;
        jQuery('#updateModal').modal('show');
        this.ApdmEdit = true;
    };
    ListapdmComponent.prototype.handleApdmUpdate = function (e) {
        if (e.success) {
            this.toasterService.pop('success', e.data, '');
            // this.getCats();
            jQuery('#updateModal').modal('hide');
            this.ApdmToEdit = '';
            this.ApdmEdit = false;
            this.getapdms(1, this.type);
        }
    };
    ListapdmComponent.prototype.assignStore = function (apdm, type) {
        this.Apdm = apdm;
        if (type == 9)
            this.ExAplAssignment = true;
        else
            this.Assignment = true;
        jQuery('#assignment').modal('show');
    };
    ListapdmComponent.prototype.assignRegion = function (apdm, type) {
        this.Apdm = apdm;
        if (type == 9)
            this.ExAplAssignment = true;
        else
            this.Assignment = true;
        jQuery('#assignmentRegion').modal('show');
    };
    ListapdmComponent.prototype.Search = function () {
        this.getapdms(1, this.type);
    };
    ListapdmComponent.prototype.convert = function (id, type) {
        var _this = this;
        var con = confirm('Are you sure');
        if (con == false) {
            return false;
        }
        // if(action == 'confirmation')
        // {
        //   jQuery('#convert').modal('show');
        //   return false;
        // }
        this.toasterService.pop('info', 'Preparing Conversion', '');
        this._sp.convert(id, type).subscribe(function (data) {
            if (data.success) {
                jQuery('#convert').modal('hide');
                _this.toasterService.pop('success', data.data, '');
                _this.getapdms(1, _this.type);
            }
        }, function (err) { return console.log(err); });
    };
    ListapdmComponent.prototype.deleteee = function () {
        var thiss = this;
        jQuery('input:checkbox.storeChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.storesBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.storesBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.storesBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.storesBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 store', '');
        }
        else {
            jQuery('#deleteModal2').modal('show');
        }
    };
    ListapdmComponent.prototype.bulkDelete = function () {
        var _this = this;
        var thiss = this;
        jQuery('input:checkbox.storeChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.storesBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.storesBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.storesBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.storesBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 store', '');
        }
        var value = {};
        var searchValue = this.storesBulk.join('_');
        value['id'] = searchValue;
        if (this.type == 9)
            value['type'] = 'bulkExApls';
        else
            value['type'] = 'bulkApls';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.getapdms(1, _this.type);
                jQuery('#deleteModal2').modal('hide');
                _this.storesBulk = [];
            }
        }, function (err) { return console.log(err); });
    };
    ListapdmComponent.prototype.isAllChecked = function () {
        return this.apdmList.every(function (_) { return _.state; });
    };
    ListapdmComponent.prototype.checkAll = function (ev) {
        this.apdmList.forEach(function (x) { return x.state = ev.target.checked; });
        // var objj = jQuery('.storeChecks');
        // console.log(objj);
    };
    ListapdmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listapdm',
            template: __webpack_require__("../../../../../src/app/superadmin/listapdm/listapdm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/listapdm/listapdm.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], ListapdmComponent);
    return ListapdmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/listproduct/listproduct.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-lg\n{\n\tmax-width: 1200px;\n}\n\n.btn-xs\n{\n\tborder: 1px #e4e4e4 solid;\n\tpadding: 1px 9px;\n}\n\n.btn-xs:hover\n{\n\tbox-shadow: 0px 0px 0px 2px #f5f5f5;\n}\n\n.sel\n{\n\tpadding: 2px 6px;\n\twidth: 146px;\n\tdisplay: inline-block;\n\theight: 25px !important;\n\tfont-size: 14px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/listproduct/listproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <toaster-container></toaster-container>\n\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Products</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"\">\n            <div style=\"margin-bottom:10px\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for products\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\">\n              Products\n              <div  class=\"dropdow pull-right\">\n                      <button class=\"btn btn-primary btn-sm\" (click)=\"exportProduct();\" name=\"button\" type=\"button\">Export</button>\n\n                    </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <tr>\n                    <th>Image</th>\n                    <th>Product Name</th>\n                    <th>Category</th>\n                    <th>Price</th>\n                    <th colspan=\"2\">Action</th>\n                  </tr>\n                  <tr *ngFor=\"let pro of Products | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                    <td>\n                      <img style=\"width:100px\" [src]=\"pro.productImage == '' ? 'assets/img/demo.png' : 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+pro.productImage\" alt=\"\">\n                    </td>\n                    <td>{{ pro.productName}}</td>\n                    <td>{{ pro.catName}}</td>\n                    <td>{{ pro.productPrice}}</td>\n                    <td align=\"center\" class=\"text-center\" valign=\"center\">\n                      <a (click)=\"inventory(pro.productID)\" class=\"fa fa-building icon-btn\"></a>\n\n                      <a (click)=\"editProduct(pro.productID)\" class=\"fa fa-edit icon-btn\"></a>\n                      <select class=\"icon-btn form-control sel mt-2 mt-sm-0\" [(ngModel)]=\"pro.IsAvailable\" (change)=\"productStatus(pro.productID,pro.IsAvailable,'productStockStatus','IsAvailable')\">\n                        <option value=\"1\">Out of Stock</option>\n                        <option value=\"0\">Available</option>\n                      </select>\n                      <button type=\"button\" name=\"button\" class=\"btn btn-primary mt-3 mt-sm-0\" *ngIf=\"pro.IsActive == 1\" (click)=\"productStatus(pro.productID,0,'ProductIsAactive','IsActive')\">Active</button>\n                      <button type=\"button\" name=\"button\" class=\"btn btn-default mt-3 mt-sm-0\" *ngIf=\"pro.IsActive == 0\" (click)=\"productStatus(pro.productID,1,'ProductIsAactive','IsActive')\">Inactive</button>\n                    </td>\n\n                    <!-- <td>\n                    </td> -->\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>\n          <pagination-controls (pageChange)=\"page = getProducts($event)\" maxSize=\"5\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n\n        </div>\n      </div>\n    </div>\n\n  </main>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteProduct()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Update Category\n      </div>\n      <div class=\"modal-body\">\n        <app-product-edit (onSuccess)=\"handleProductUpdate($event)\" *ngIf=\"ProductEdit\" [ProductToEdit]=\"ProductToEdit\"></app-product-edit>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"invModal\">\n  <div class=\"modal-dialog\" style=\"max-width: 650px;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Product Quantities\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table\">\n          <tr>\n            <th >Item Id</th>\n            <th>Item Description</th>\n            <th>Item Price</th>\n            <th style=\"width:80px\">Quantity</th>\n          </tr>\n          <tr *ngFor=\"let inv of selectedProdForInv.productVariations\">\n            <td>{{ inv.productVarItemId }}</td>\n            <td>{{ inv.productVarDesc }}</td>\n            <td>{{ inv.productVarPrice }}</td>\n            <td>\n              <input type=\"text\" [(ngModel)]=\"inv.productVarItemQuantity\" class=\"form-control\">\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateInventory()\">Update</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/listproduct/listproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__ = __webpack_require__("../../../../ngx-csv/ngx-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListproductComponent = (function () {
    function ListproductComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.Products = [];
        this.ProductLoading = false;
        this.CatList = [];
        this.perpage = 4;
        this.catID = 1;
        this.FilterCats = [];
        this.ProductToDelete = '';
        this.ProductToEdit = '';
        this.ProductEdit = false;
        this.searchText = '';
        this.ProductPaginationEvent = 1;
        this.selectedProdForInv = {};
        this.toasterService = toasterService;
    }
    ListproductComponent.prototype.ngOnInit = function () {
        this.getProducts(1);
    };
    ListproductComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.ProductEdit = false;
        });
    };
    ListproductComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    ListproductComponent.prototype.Search = function () {
        this.getProducts(this.ProductPaginationEvent);
    };
    ListproductComponent.prototype.exportProduct = function () {
        this._sp.exportproducts().subscribe(function (data) {
            var hds = ['Product Name', 'Product Description', 'Upc'];
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                headers: hds,
                showTitle: false,
                useBom: true,
                removeNewLines: false,
            };
            var name = 'PPS_products';
            new __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__["ngxCsv"](data.data, name, options);
        }, function (err) {
            if (err.status == 409) {
                //  this.storeLoading = false;
            }
        });
    };
    ListproductComponent.prototype.getProducts = function (e) {
        var _this = this;
        this.ProductPaginationEvent = e;
        var v = {};
        v['perpage'] = this.perpage;
        v['page'] = e;
        this.page = e;
        v['cats'] = this.FilterCats;
        v['text'] = this.searchText;
        this._sp.getProducts(v).subscribe(function (data) {
            if (data.success) {
                _this.Products = data.data.result;
                _this.totalItem = data.data.total_rows;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.Products = [];
                _this.totalItem = 0;
            }
        });
        return e;
    };
    ListproductComponent.prototype.PushFilterCats = function (cat) {
        this.FilterCats.push(cat);
    };
    ListproductComponent.prototype.PopFilterCats = function (cat) {
        var index = this.FilterCats.indexOf(cat);
        if (index > -1) {
            this.FilterCats.splice(index, 1);
        }
    };
    ListproductComponent.prototype.ProductDeleteConfirm = function (pid) {
        this.ProductToDelete = pid;
        jQuery('#deleteModal').modal('show');
    };
    ListproductComponent.prototype.deleteProduct = function () {
        var _this = this;
        var value = {};
        value['id'] = this.ProductToDelete;
        value['type'] = 'product';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#deleteModal').modal('hide');
                _this.ProductToDelete = '';
                _this.getProducts(_this.ProductPaginationEvent);
            }
        }, function (err) { return console.log(err); });
    };
    ListproductComponent.prototype.editProduct = function (pid) {
        console.log(pid);
        console.log(this.ProductToEdit);
        this.ProductToEdit = pid;
        jQuery('#updateModal').modal('show');
        this.ProductEdit = true;
    };
    ListproductComponent.prototype.handleProductUpdate = function (e) {
        if (e.success) {
            this.toasterService.pop('success', e.data, '');
            this.getCats();
            jQuery('#updateModal').modal('hide');
            this.ProductToEdit = '';
            this.ProductEdit = false;
            this.getProducts(this.ProductPaginationEvent);
        }
    };
    ListproductComponent.prototype.productStatus = function (id, status, type, field) {
        var _this = this;
        var value = {};
        value['id'] = id;
        value[field] = status;
        value['type'] = type;
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.getProducts(_this.ProductPaginationEvent);
            }
        }, function (err) { return console.log(err); });
    };
    ListproductComponent.prototype.inventory = function (id) {
        var _this = this;
        this._sp.productDetails(id).subscribe(function (data) {
            if (data.status == 200) {
                //invModal
                _this.selectedProdForInv = data.data;
                jQuery('#invModal').modal('show');
            }
        }, function (err) { return console.log(err); });
    };
    ListproductComponent.prototype.updateInventory = function () {
        var _this = this;
        var obj = {};
        obj['productVariations'] = this.selectedProdForInv['productVariations'];
        this._sp.updateInventory(obj).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', 'Updated Successfully', '');
                jQuery('#invModal').modal('hide');
            }
        }, function (err) { return console.log(err); });
    };
    ListproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listproduct',
            template: __webpack_require__("../../../../../src/app/superadmin/listproduct/listproduct.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/listproduct/listproduct.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], ListproductComponent);
    return ListproductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/product-edit/product-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img_brow {\n    position: relative;\n    border: transparent;\n    padding: 0;\n    width: 116px;\n}\n.img_brow .img-thumbnail {\n    width: 100%;\n    height: 121px;\n    margin: 0 0 -3px;\n}\n\n.img_brow:hover .fafa_icon {\n    opacity: 1;\n}\n\n.fafa_icon {\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tbackground: #0006;\n\tborder-radius: 4px;\n\topacity: 0;\n\ttransition: all 0.3s ease-in-out 0s;\n\ttop: 0;\n\tposition: absolute;\n}\n\n.img_brow .fa.fa-camera {\n\tcolor: #fff;\n\tfont-size: 25px;\n\tposition: absolute;\n\tbottom: 7px;\n\tright: 10px;\n}\n.img_brow input {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n\topacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"updateProduct\" (ngSubmit)=\"submitProduct(updateProduct.value)\">\n  <div class=\"row\">\n    <div class=\"col-lg-5\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n        Add Products\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!updateProduct.controls['productName'].valid   && productSubmission}\">\n                <label for=\"\">Product name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Product Name\" formControlName=\"productName\" [(ngModel)]=\"productDetails.productName\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!updateProduct.controls['productCode'].valid   && productSubmission}\">\n                <label for=\"\">Product Code</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Product Name\" formControlName=\"productCode\" [(ngModel)]=\"productDetails.productCode\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"company\">Store class</label>\n              <br>\n              <!-- {{productClasses | json }} -->\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\"   [value]=\"1\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\" [attr.checked]=\"productClasses[1]\"/>\n                Class 1\n              </label>\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\"   [value]=\"2\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\" [attr.checked]=\"productClasses[2]\"/>\n                Class 2\n              </label>\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\"   [value]=\"3\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\" [attr.checked]=\"productClasses[3]\"/>\n                Class 3\n              </label>\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\"   [value]=\"4\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\" [attr.checked]=\"productClasses[4]\"/>\n                  Class 4\n              </label>\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\"   [value]=\"5\" (change)=\"productClasses[$event.target.getAttribute('value')]=$event.target.checked\" [attr.checked]=\"productClasses[5]\"/>\n                Class 5\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!updateProduct.controls['productCategory'].valid   && productSubmission}\">\n                <label for=\"\">Product Category</label>\n                <select class=\"form-control\" formControlName=\"productCategory\" [(ngModel)]=\"productDetails.productCategory\">\n                  <option [selected]=\"true\" value=\"\">Select Category</option>\n                  <option [ngClass]=\"'lev'+cat.catLevel\" *ngFor=\"let cat of CatList\" [value]=\"cat.catId\">\n                    <span *ngIf=\"cat.catLevel == 1\"> &nbsp;&nbsp; </span>\n                    <span *ngIf=\"cat.catLevel == 2\"> &nbsp;&nbsp;&nbsp; </span>\n                    <span *ngIf=\"cat.catLevel == 3\"> &nbsp;&nbsp;&nbsp;&nbsp; </span>\n                    {{ cat.catName }}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error':!updateProduct.controls['productPrice'].valid   && productSubmission}\">\n                <label for=\"\">Product Price</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Product Price\" formControlName=\"productPrice\"  [(ngModel)]=\"productDetails.productPrice\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"\">Description</label>\n                <ckeditor\n                  [(ngModel)]=\"productDetails.productDescription\"\n                  debounce=\"500\" [ngModelOptions]=\"{standalone: true}\">\n                </ckeditor>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"\">Product Image</label>\n                <div class=\"img_brow img-thumbnail\" *ngIf=\"!showImageUploading\">\n                  <img [src]=\"productImage != '' ? 'https://productprotectionsolutions.com/order/api/assets/uploads/catPics/'+productImage : 'assets/img/demo.png'\" alt=\"\" class=\"img-thumbnail\">\n                  <div class=\"fafa_icon\">\n                    <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                    <input #fileInput type=\"file\" (change)=\"uploadproductImage($event)\" accept=\"image/*\"  title=\" \"/>\n                  </div>\n                </div>\n                <div class=\"img_brow img-thumbnail imageuploadingLoader\" *ngIf=\"showImageUploading\">\n                  <img src=\"assets/img/loading.gif\" alt=\"\" class=\"img-thumbnail\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <ul *ngIf=\"fileList.length > 0\" class=\"attachments\">\n                <li *ngFor=\"let file of fileList; let i = index\" [class.text-success]=\"file.percent == 100\">\n                  {{ (file.name.length>30)? (file.name | slice:0:30)+'..':(file.name) }}\n                  <!-- <span *ngIf=\"file.percent != 100\">{{ file.percent }}%</span> -->\n                  <!-- <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i> -->\n                  <div class=\"progress my\" *ngIf=\"file.percent != 100\">\n                    <div class=\"progress-bar\" [ngStyle]=\"{'width': file.percent+'%'}\">\n                    </div>\n                  </div>\n                  <i (click)=\"removeMailAttachment(i)\" *ngIf=\"file.percent != 100\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                  <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i>\n                  <!-- <i class=\"fa fa-circle-o-notch fa-spin fa-fw\" *ngIf=\"file.percent != 100\"></i> -->\n                </li>\n              </ul>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <div *ngIf=\"!showImageUploading\">\n                  <button type=\"button\" name=\"button\" class=\"btn btn-default\">\n                    Additional Images <i class=\"fa fa-add\"></i>\n                  </button>\n                  <div class=\"fafa_icon\">\n                    <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                    <input #fileInput2 type=\"file\" (change)=\"uploadproductImage2($event)\" accept=\"image/*\"  title=\" \"/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <ul *ngIf=\"images.length > 0\" class=\"attachments\" style=\"padding-left:0px\">\n                <li *ngFor=\"let img of images; let i = index\" style=\"width:120px; padding-left:0px; display:inline-block; height:120px; overflow-y:hidden; margin-right:10px\">\n                  <i (click)=\"images.splice(i,1)\" class=\"fa fa-trash\" style=\"position:  absolute;right: 6px; top: 6px;\"></i>\n                  <img [src]=\"img.path\" alt=\"\" style=\"width:100%\">\n                </li>\n              </ul>\n            </div>\n\n            <div class=\"col-md-12\">\n              <button class=\"btn btn-default\" type=\"button\" name=\"button\" id=\"pick\">Upload Instruction File</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-7\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Product Variations\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <!-- {{ productVariation | json }} -->\n            <table class=\"table table-bordered\">\n              <tr>\n                <th style=\"width: 60px\">Item Id</th>\n                <th>Item Description</th>\n                <th style=\"width: 80px\">Item Price</th>\n                <th style=\"width: 40px\">Item Quantity</th>\n                <th style=\"width: 20px\"></th>\n              </tr>\n              <tbody *ngFor=\"let prod of productVariation; let i=index\" id=\"pvar\">\n                <tr>\n                  <td>\n                    <input  type=\"text\" style=\"width:60px\" class=\"form-control required\" [(ngModel)]=\"prod.productVarItemId\" [ngModelOptions]=\"{standalone: true}\">\n                  </td>\n                  <td>\n                    <input  type=\"text\" class=\"form-control required\" [(ngModel)]=\"prod.productVarDesc\" [ngModelOptions]=\"{standalone: true}\">\n                  </td>\n                  <td>\n                    <input  type=\"text\" style=\"width:80px\" class=\"form-control required\" [(ngModel)]=\"prod.productVarPrice\" [ngModelOptions]=\"{standalone: true}\">\n                  </td>\n                  <td>\n                    <input  type=\"text\" style=\"width:80px\" class=\"form-control required\" [(ngModel)]=\"prod.productVarItemQuantity\" [ngModelOptions]=\"{standalone: true}\">\n                  </td>\n                  <td>\n                    <a  (click)=\"removeVariation(i)\" class=\"fa fa-trash\"></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <!-- <table class=\"table table-bordered\" formArrayName=\"productVariation\">\n              <tr>\n                <th style=\"width: 60px\">Item Id</th>\n                <th>Item Description</th>\n                <th style=\"width: 80px\">Item Price</th>\n                <th style=\"width: 40px\">Item Quantity</th>\n                <th style=\"width: 20px\"></th>\n              </tr>\n              <tbody *ngFor=\"let prod of updateProduct.controls.productVariation.controls; let i=index\">\n                <tr  [formGroupName]=\"i\">\n                  <td>\n                    <input  type=\"text\" formControlName=\"productVarItemId\" [ngClass]=\"{'is-invalid':!updateProduct.controls.productVariation.controls[i].controls.productVarItemId.valid   && productSubmission}\" style=\"width:60px\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" formControlName=\"productVarDesc\" [ngClass]=\"{'is-invalid':!updateProduct.controls.productVariation.controls[i].controls.productVarDesc.valid   && productSubmission}\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" formControlName=\"productVarPrice\" [ngClass]=\"{'is-invalid':!updateProduct.controls.productVariation.controls[i].controls.productVarPrice.valid   && productSubmission}\" style=\"width:80px\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <input type=\"text\" formControlName=\"productVarItemQuantity\" [ngClass]=\"{'is-invalid':!updateProduct.controls.productVariation.controls[i].controls.productVarItemQuantity.valid   && productSubmission}\" style=\"width:80px\" class=\"form-control\">\n                  </td>\n                  <td>\n                    <a  (click)=\"removeVariation(i)\" class=\"fa fa-trash\"></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table> -->\n          </div>\n          <button (click)=\"addVariation()\" type=\"button\" class=\"btn btn-primary add_field_button\" style=\"margin-bottom:20px;\">Add variation </button>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Product UPCs\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <!-- {{ productVariation | json }} -->\n            <table class=\"table table-bordered\">\n              <tbody *ngFor=\"let upc of productUpc; let i=index\" id=\"pvar\">\n                <tr>\n                  <td>\n                    {{ i + 1 }}\n                  </td>\n                  <td>\n                    <input  type=\"text\" class=\"form-control required\" [(ngModel)]=\"upc.upc\" [ngModelOptions]=\"{standalone: true}\">\n                  </td>\n                  <td>\n                    <a  (click)=\"removeUpc(i)\" class=\"fa fa-trash\"></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <button (click)=\"addUpc()\" type=\"button\" class=\"btn btn-primary add_field_button\" style=\"margin-bottom:20px;\">Add UPC </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row pull-right\">\n    <div class=\"col-md-12\">\n      <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary pull-right\">\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/add/operator/debounceTime';

var ProductEditComponent = (function () {
    function ProductEditComponent(router, _sp, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.productUpdateTrue = false;
        this.productDetails = {};
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.CatList = [];
        this.productSubmission = false;
        this.productImage = '';
        this.productImagePath = '';
        this.showImageUploading = false;
        this.responseStatus2 = [];
        this.showhidemsg2 = false;
        this.productClasses = {};
        this.fileList = [];
        this.isPluploadReady = false;
        this.UploadPending = false;
        this.Archived = 0;
        this.browse = 0;
        this.browsei = 0;
        this.firstName = 'Name';
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.pickk = 'pickk';
        this.fileNameIns = '';
        this.images = [];
        this.productVariation = [];
        this.productUpc = [];
        this.updateProduct = fb.group({
            productName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            productCode: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            productCategory: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            productDescription: [''],
            productPrice: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        // this.get('cat',this.catToEdit);
        this.getCats();
        this.productDetailsFun(this.ProductToEdit);
        this.subscription = this.addPlupload();
    };
    ProductEditComponent.prototype.removeUpc = function (i) {
        this.productUpc.splice(i, 1);
    };
    ProductEditComponent.prototype.addUpc = function () {
        this.productUpc.push({ upc: '' });
    };
    ProductEditComponent.prototype.productDetailsFun = function (id) {
        var _this = this;
        this._sp.productDetails(id).subscribe(function (data) {
            // console.log(data.data);
            // console.log(data.data['images']);
            if (data.data['images'] != '')
                _this.images = JSON.parse(data.data['images']);
            delete data.data['images'];
            _this.productDetails = data.data;
            if (data.data['instructionFile'] != '' && data.data['instructionFile'] != null)
                _this.fileList.push({ name: data.data['instructionFile'], percent: 100 });
            for (var i = 0; i < _this.productDetails['classes'].length; i++) {
                _this.productClasses[_this.productDetails['classes'][i]['productClass']] = true;
            }
            _this.productImage = data.data.productImage;
            if (data.data['productVariations'].length != 0) {
                for (var i = 0; i < data.data['productVariations'].length; i++) {
                    delete data.data['productVariations'][i]['productVarID'];
                    delete data.data['productVariations'][i]['productID'];
                    delete data.data['productVariations'][i]['productVarStatus'];
                }
                _this.productVariation = data.data.productVariations;
                _this.productUpc = data.data.productUpc;
                // this.setProdVars(data.data.productVariations)
            }
        }, function (err) { return console.log(err); });
    };
    ProductEditComponent.prototype.uploadproductImage = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.showImageUploading = true;
            this.showhidemsg2 = true;
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.responseStatus2['error_msg'] = 'Only images are allowed.';
                this.showImageUploading = false;
                this.showhidemsg2 = false;
            }
            this._sp.upload(fileToUpload).subscribe(function (response) {
                setTimeout(function () {
                    this.showhidemsg2 = false;
                }.bind(_this), 3000);
                _this.showImageUploading = false;
                if (response.success) {
                    _this.productImage = response.fileName;
                    _this.productImagePath = response.filePath;
                }
                else {
                    _this.responseStatus2['error_msg'] = response.error_msg;
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
                _this.showImageUploading = false;
            });
        }
    };
    ProductEditComponent.prototype.uploadproductImage2 = function () {
        var _this = this;
        var fi = this.fileInput2.nativeElement;
        if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            if (fileToUpload.type.indexOf('image') === -1) {
                this.toasterService.pop('success', 'Only images are allowed.', '');
            }
            console.log(this.images);
            var l = this.images.push({ path: 'assets/img/loading.gif' });
            this._sp.upload(fileToUpload).subscribe(function (response) {
                if (response.success) {
                    _this.images[l - 1]['path'] = response.filePath;
                    _this.images[l - 1]['name'] = response.fileName;
                    // this.toasterService.pop('success','','' );
                }
                else {
                    _this.toasterService.pop('success', 'Something happens wrong. Please try again.', '');
                }
            }, function (err) {
                _this.responseStatus2['error_msg'] = 'Something happens wrong. Please try again.';
            });
        }
    };
    ProductEditComponent.prototype.submitProduct = function (value) {
        var _this = this;
        this.productSubmission = true;
        // var mmy = 'aa';
        // if(!mmy)
        // {
        //   console.log(this.updateProduct);
        //   return false;
        // }
        if (!this.updateProduct.valid) {
            error = true;
        }
        var inputs = jQuery('#pvar').find('input.required');
        var error = false;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.value == '') {
                error = true;
                jQuery(input).addClass('is-invalid');
            }
            else {
                jQuery(input).removeClass('is-invalid');
            }
        }
        console.log(error);
        if (error)
            return false;
        value['productImage'] = this.productImage;
        value['productID'] = this.ProductToEdit;
        value['productDescription'] = this.productDetails['productDescription'];
        value['instructionFile'] = this.fileNameIns;
        value['productVariation'] = this.productVariation;
        value['productUpc'] = this.productUpc;
        value['images'] = JSON.stringify(this.images);
        var keys = Object.keys(this.productClasses);
        var thiss = this;
        var filtered = keys.filter(function (key) {
            return thiss.productClasses[key];
        });
        console.log(filtered);
        value['productClasses'] = filtered;
        this._sp.submitProduct(value).subscribe(function (data) {
            if (data.success) {
                console.log('filtered');
                _this.productSubmission = false;
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    ProductEditComponent.prototype.getCats = function () {
        var _this = this;
        this._sp.getCats().subscribe(function (data) {
            if (data.success)
                _this.CatList = data.data;
        }, function (err) { return console.log(err); });
    };
    ProductEditComponent.prototype.initVariation = function () {
        return this.fb.group({
            'productVarItemId': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'productVarPrice': [''],
            'productVarItemQuantity': [''],
            'productVarDesc': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    ProductEditComponent.prototype.addVariation = function () {
        var obj = {};
        obj['productVarItemId'] = '';
        obj['productVarPrice'] = '';
        obj['productVarItemQuantity'] = '';
        obj['productVarDesc'] = '';
        this.productVariation.push(obj);
        // const control = <FormArray>this.updateProduct.controls['productVariation'];
        // control.push(this.initVariation());
    };
    ProductEditComponent.prototype.removeVariation = function (i) {
        this.productVariation.splice(i, 1);
        // const control = <FormArray>this.updateProduct.controls['productVariation'];
        // console.log(control);
        // console.log(i);
        // control.removeAt(i);
    };
    ProductEditComponent.prototype.setProdVars = function (addresses) {
        var _this = this;
        var addressFGs = addresses.map(function (productVariationModel) { return _this.fb.group(productVariationModel); });
        var addressFormArray = this.fb.array(addressFGs);
        this.updateProduct.setControl('productVariation', addressFormArray);
        console.log(this.updateProduct.controls['productVariation']);
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    ProductEditComponent.prototype.addPlupload = function () {
        var _this = this;
        console.log('addupload');
        return this.addPluploadScript()
            .subscribe(function () {
            _this.isPluploadReady = true;
            _this.initPlupload();
        });
    };
    ProductEditComponent.prototype.addPluploadScript = function () {
        var id = 'plupload-sdk';
        // Return immediately if the script tag is already here.
        if (document.getElementById(id)) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(true);
        }
        var js, fjs = document.getElementsByTagName('script')[0];
        js = document.createElement('script');
        js.id = id;
        js.src = "//unpkg.com/plupload@2.3.2/js/plupload.full.min.js";
        fjs.parentNode.insertBefore(js, fjs);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].timer(1000).take(1); // @TODO: Replace this with more robust code
    };
    // Configure and initialize Plupload.
    ProductEditComponent.prototype.initPlupload = function () {
        var _this = this;
        var thiss = this;
        //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);
        this.uploader = new plupload.Uploader({
            runtimes: 'html5,html4',
            browse_button: 'pick',
            url: 'https://productprotectionsolutions.com/order/api/upload-file',
            chunk_size: '5000kb',
            multi_selection: false,
            max_retries: 3,
            filters: {
                max_file_size: '1000mb',
            },
            multipart_params: {
                "type": "record_attachment",
                "id": this.browse
            },
            init: {
                PostInit: function () {
                    _this.fileList = [];
                },
                FilesAdded: function (up, files) {
                    _this.fileList = [];
                    plupload.each(files, function (file) {
                        _this.fileList.push({
                            id: file.id,
                            name: file.name,
                            size: plupload.formatSize(file.size),
                            percent: 0
                        });
                    }, _this.uploader.start());
                },
                FileUploaded: function (up, file, result) {
                    var json = JSON.parse(result.response);
                    console.log(json.url);
                    thiss.fileNameIns = json.url;
                    console.log(thiss.fileNameIns);
                },
                // Update the upload progress in the list of files displayed in the template.
                UploadProgress: function (up, file) {
                    var index = _this.fileList.findIndex(function (f) { return f.id == file.id; });
                    _this.fileList[index].percent = file.percent;
                },
                Error: function (up, err) {
                    console.error(err);
                }
            }
        });
        this.uploader.init();
    };
    ProductEditComponent.prototype.checkAttachmentProgress = function () {
        this.UploadPending = false;
        for (var i in this.fileList) {
            if (this.fileList[i]['percent'] != 100)
                this.UploadPending = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProductEditComponent.prototype, "ProductToEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductEditComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductEditComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pickfiles'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductEditComponent.prototype, "pickfiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductEditComponent.prototype, "fileInput2", void 0);
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__("../../../../../src/app/superadmin/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/product-edit/product-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/region/add-region/add-region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/region/add-region/add-region.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<toaster-container></toaster-container>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Add Region</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <strong>Add Region</strong>\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"addRegion\" (ngSubmit)=\"submitRegionForm(addRegion.value)\">\n                  <div class=\"form-group\" [ngClass]=\"{'has-error':!addRegion.controls['regionName'].valid   && regionAddTrue}\">\n                    <label for=\"company\">Region name</label>\n                    <input class=\"form-control\" id=\"company\" placeholder=\"Enter Region name\" type=\"text\" formControlName=\"regionName\">\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!addRegion.controls['regionEmail'].valid   && regionAddTrue}\">\n                      <label for=\"vat\">Region email</label>\n                      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Region email\" type=\"text\" formControlName=\"regionEmail\">\n                      <span *ngIf=\"addRegion.controls['regionEmail'].hasError('email') && regionAddTrue\">Enter Valid Email</span>\n                    </div>\n                    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!addRegion.controls['regionPhone'].valid   && regionAddTrue}\">\n                      <label for=\"vat\">Region Mobile</label> \n                      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Region Mobile\" type=\"text\" formControlName=\"regionPhone\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"form-group col-md-12\">\n                      <input type=\"submit\" value=\"Add Region\" class=\"btn btn-primary\" [attr.disabled]=\"regionAdding == true ? true : null\">\n                    </div>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/region/add-region/add-region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailOrEmpty(control) {
    return control.value === '' ? null : __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email(control);
}
var AddRegionComponent = (function () {
    function AddRegionComponent(router, _sp, toasterService, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.regionAddTrue = false;
        this.asignCrendials = false;
        this.regionAdding = false;
        this.toasterService = toasterService;
        this.addRegion = fb.group({
            'regionName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'regionEmail': ['', emailOrEmpty],
            'regionPhone': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')]],
        });
    }
    AddRegionComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(tknn);
    };
    AddRegionComponent.prototype.submitRegionForm = function (value) {
        var _this = this;
        console.log('in Contr');
        this.regionAddTrue = true;
        if (!this.addRegion.valid) {
            return false;
        }
        this.regionAdding = true;
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this._sp.addRegion(value).subscribe(function (data) {
            if (data.success) {
                _this.regionAddTrue = false;
                _this.addRegion.reset({
                    regionName: '',
                    regionEmail: '',
                    regionPhone: '',
                });
                _this.toasterService.pop('success', data.data, '');
                _this.regionAdding = false;
            }
        }, function (err) { return console.log(err); });
    };
    AddRegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-region',
            template: __webpack_require__("../../../../../src/app/superadmin/region/add-region/add-region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/region/add-region/add-region.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AddRegionComponent);
    return AddRegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/region/asign-store/asign-store.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/region/asign-store/asign-store.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng2-completer inputClass=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"searchContact\" [datasource]=\"dataService\" [minSearchLength]=\"0\" (selected)=\"StrSelected($event)\" [clearSelected]=\"true\" placeholder=\"Search store names\"></ng2-completer>\n<br><br><br>\n\n<label for=\"\"><b>Assigned Stores</b></label>\n<div class=\"tag-list\">\n  <a *ngFor=\"let asgn of AssignedStores\">{{ asgn.storeName }} <span (click)=\"removeAsignStore(asgn.id)\"> &times; </span></a>\n</div>\n\n<div class=\"modal fade\" id=\"assignment\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <h1> Store Assign Confirmation</h1>\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/region/asign-store/asign-store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignStoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsignStoreComponent = (function () {
    function AsignStoreComponent(toasterService, completerService, router, _sp, fb) {
        this.completerService = completerService;
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.clickedObj = {};
        this.AssignedStores = [];
        this.getAssignes();
        this.toasterService = toasterService;
    }
    AsignStoreComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        console.log(this.region);
        this.dataService = this.completerService.remote(__WEBPACK_IMPORTED_MODULE_5__shared_globals__["a" /* baseUrl */] + 'api/getUnAssignedRegionStores/' + this.region + '/', 'storeName,', 'storeName');
        this.getAssignes();
    };
    AsignStoreComponent.prototype.StrSelected = function (e) {
        var _this = this;
        if (e) {
            this.clickedObj = e.originalObject;
            var isConfirmed = confirm("Assign this store?");
            if (isConfirmed) {
                var value = {};
                // value['data']['apdmID']    = this.Apdm;
                // value['data']['storeIinsed']   = e.originalObject.storeId;
                value['data'] = {};
                value['data']['region_id'] = this.region;
                value['data']['store_id'] = e.originalObject.storeId;
                value['type'] = 'storeassign';
                this._sp.insert(value).subscribe(function (data) {
                    if (data.success) {
                        _this.getAssignes();
                    }
                }, function (err) { return console.log(err); });
            }
        }
    };
    AsignStoreComponent.prototype.getAssignes = function () {
        var _this = this;
        console.log('hi');
        this._sp.getAssignesRegionStore(this.region).subscribe(function (data) {
            if (data.success) {
                _this.AssignedStores = data.data;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.AssignedStores = [];
            }
        });
    };
    AsignStoreComponent.prototype.removeAsignStoreConfirm = function (asignId) {
        this.AsignIdtoRemove = asignId;
        jQuery('#delete').modal('show');
    };
    AsignStoreComponent.prototype.removeAsignStore = function (asignId) {
        var _this = this;
        var v = {};
        v['id'] = asignId;
        v['type'] = 'removeAsignRegionStore';
        var isConfirmed = confirm("Delete this store?");
        if (isConfirmed) {
            this._sp.delete(v).subscribe(function (data) {
                if (data.success) {
                    // jQuery('#delete').modal('hide');
                    _this.toasterService.pop('success', 'Store removed', '');
                    _this.getAssignes();
                }
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AsignStoreComponent.prototype, "region", void 0);
    AsignStoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asign-store',
            template: __webpack_require__("../../../../../src/app/superadmin/region/asign-store/asign-store.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/region/asign-store/asign-store.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4_ng2_completer__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AsignStoreComponent);
    return AsignStoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/region/edit-region/edit-region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/region/edit-region/edit-region.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!regionDetailsLoading\" [formGroup]=\"updateRegion\" (ngSubmit)=\"submitregionForm(updateRegion.value)\">\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateRegion.controls['regionName'].valid   && regionUpdateTrue}\">\n    <label for=\"company\">Region name</label>\n    <input class=\"form-control\" id=\"company\" placeholder=\"Enter Region name\" type=\"text\" formControlName=\"regionName\" [(ngModel)]=\"regionDetails.regionName\">\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!updateRegion.controls['regionEmail'].valid   && regionUpdateTrue}\">\n      <label for=\"vat\">Region email</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Region email\" type=\"text\" formControlName=\"regionEmail\"  [(ngModel)]=\"regionDetails.regionEmail\">\n    </div>\n    <div class=\"form-group col-md-12\" [ngClass]=\"{'has-error':!updateRegion.controls['regionPhone'].valid   && regionUpdateTrue}\">\n      <label for=\"vat\">Region Mobile</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Region Mobile\" type=\"text\" formControlName=\"regionPhone\"  [(ngModel)]=\"regionDetails.regionPhone\">\n    </div>\n  </div>\n\n<!--/.row-->\n\n\n  <div class=\"form-group\">\n    <input type=\"submit\" value=\"Update Region\" class=\"btn btn-primary\">\n  </div>\n</form>\n\n<div class=\"loader\" *ngIf=\"regionDetailsLoading\" style=\"padding-top:100px\">\n  <div class=\"loader-inner ball-pulse\">\n    <div class=\"my-loader\"></div>\n    <div class=\"my-loader\"></div>\n    <div class=\"my-loader\"></div>\n  </div>\n</div>\n\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/region/edit-region/edit-region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailOrEmpty(control) {
    return control.value === '' ? null : __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email(control);
}
var EditRegionComponent = (function () {
    function EditRegionComponent(router, _sp, toasterService, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.regionUpdateTrue = false;
        this.regionDetails = {};
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCredentials = false;
        this.regionDetailsLoading = true;
        this.regionClass = 1;
        this.toasterService = toasterService;
        this.updateRegion = fb.group({
            'regionName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'regionEmail': ['', emailOrEmpty],
            'regionPhone': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')]],
        });
    }
    EditRegionComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this.regionDetail();
    };
    EditRegionComponent.prototype.regionDetail = function () {
        var _this = this;
        this._sp.regionDetail(this.regionToEdit).subscribe(function (data) {
            _this.regionDetails = data.data;
            _this.regionDetailsLoading = false;
        }, function (err) { return console.log(err); });
    };
    EditRegionComponent.prototype.submitregionForm = function (value) {
        var _this = this;
        this.regionUpdateTrue = true;
        if (!this.updateRegion.valid) {
            return false;
        }
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        value.id = this.regionDetails.id;
        this._sp.updateRegion(value).subscribe(function (data) {
            if (data.success) {
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EditRegionComponent.prototype, "regionToEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EditRegionComponent.prototype, "onSuccess", void 0);
    EditRegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-region',
            template: __webpack_require__("../../../../../src/app/superadmin/region/edit-region/edit-region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/region/edit-region/edit-region.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], EditRegionComponent);
    return EditRegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/region/list-region/list-region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/region/list-region/list-region.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Regions</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n\n\n\n          <div class=\"col-lg-9\">\n\n                <div class=\"loader\" *ngIf=\"regionLoading\">\n                  <div class=\"loader-inner ball-pulse\">\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                  </div>\n                </div>\n\n                <div class=\"\">\n                  <div style=\"margin-bottom:10px\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search for regions\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"card\" *ngIf=\"!regionLoading\">\n                  <div class=\"card-header\">\n                    Regions\n                    <div class=\"dropdow pull-right\">\n                      <button type=\"button\" name=\"button\" (click)=\"deleteee()\"  class=\"btn btn-primary btn-sm\">Delete</button>\n                      <button data-toggle='dropdown' type=\"button\" name=\"button\" class=\"btn btn-primary btn-sm\">Per page</button>\n                      <span class=\"caret\"></span>\n                      <!-- <i class=\"fa fa-arrow-down\"></i> -->\n                      <ul class=\"dropdown-menu\">\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">5</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">10</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(20)\">20</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(30)\">30</a></li>\n                      </ul>\n                    </div>\n                  </div>\n\n\n                  <div class=\"card-body\" >\n                    <div *ngIf=\"!regionLoading && regions.length == 0\">\n                      No Region found\n                    </div>\n                    <table class=\"table table-bordered table-responsive\"  *ngIf=\"!regionLoading && regions.length != 0\">\n                      <thead>\n                        <tr>\n                          <th><input type=\"checkbox\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"> </th>\n                          <th>Region ID</th>\n                          <th>Region Name</th>\n                          <th>Region Email</th>\n                          <th>Region Mobile</th>\n                          <!-- <th>Status</th> -->\n                          <th>Actions</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let region of regions | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                          <td><input class=\"regionChecks\" [attr.dd]=\"region.id\" type=\"checkbox\" value=\"{{region.id}}\" [(ngModel)]=\"region.email\"></td>\n                          <td>{{region.id}}</td>\n                          <td>{{region.regionName}}</td>\n                          <td>{{region.regionEmail}}</td>\n                          <td>{{region.regionPhone}}</td>\n                          <!-- <td>\n                            <span *ngIf=\"store.storeStatus == 1\" class=\"badge badge-success\">Active</span>\n                            <span *ngIf=\"store.storeStatus == 2\" class=\"badge badge-warning\">InActive</span>\n                          </td> -->\n                          <td>\n                            <a (click)=\"assignStore(region.id)\" class=\"fa fa-plus icon-btn\"></a>\n                            <a (click)=\"deleteRegionConfirm(region.id)\" class=\"fa fa-remove icon-btn\"></a>\n                            <a (click)=\"editRegion(region.id)\" class=\"fa fa-edit icon-btn\"></a>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"page = listregions($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal fade\" id=\"assignment\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      Assign Stores\n                    </div>\n                    <div class=\"modal-body\">\n                      <app-asign-store (onSuccess)=\"handleRegionUpdate($event)\" *ngIf=\"Assignment\" [region]=\"region\"></app-asign-store>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n<div class=\"modal fade\" id=\"updateModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Update Region\n      </div>\n      <div class=\"modal-body\" style=\"min-height:100px\">\n        <app-edit-region (onSuccess)=\"handleRegionUpdate($event)\" *ngIf=\"regionEdit\" [regionToEdit]=\"regionToEdit\"></app-edit-region>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteRegion()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"bulkDelete()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/region/list-region/list-region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListRegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListRegionComponent = (function () {
    function ListRegionComponent(router, _sp, toasterService) {
        this.router = router;
        this._sp = _sp;
        this.regions = [];
        this.regionEdit = false;
        this.perpage = 5;
        this.page = 1;
        this.region = '';
        this.Assignment = false;
        this.regionLoading = false;
        this.searchText = '';
        this.regionListevent = 1;
        this.regionsBulk = [];
        this.toasterService = toasterService;
    }
    ListRegionComponent.prototype.ngOnInit = function () {
        this.listregions(1);
    };
    ListRegionComponent.prototype.ngAfterViewInit = function () {
        var thiss = this;
        jQuery('#updateModal').on('hidden.bs.modal', function () {
            thiss.regionEdit = false;
        });
        jQuery('#assignment').on('hidden.bs.modal', function () {
            thiss.Assignment = false;
        });
    };
    ListRegionComponent.prototype.listregions = function (e) {
        var _this = this;
        this.regionListevent = e;
        this.regionLoading = true;
        var value = {};
        value['perpage'] = this.perpage;
        value['page'] = e;
        value['text'] = this.searchText;
        this._sp.listregions(value).subscribe(function (data) {
            var thiss = _this;
            setTimeout(function () {
                thiss.regions = data.data.result;
                thiss.totalItem = data.data.total_rows;
                thiss.regionLoading = false;
            }, 500);
        }, function (err) {
            if (err.status == 409) {
                _this.regions = [];
                _this.totalItem = 0;
                _this.regionLoading = false;
            }
        });
        return e;
    };
    ListRegionComponent.prototype.editRegion = function (regionId) {
        console.log(regionId);
        this.regionToEdit = regionId;
        jQuery('#updateModal').modal('show');
        this.regionEdit = true;
    };
    ListRegionComponent.prototype.handleRegionUpdate = function (event) {
        if (event.success) {
            this.regionToEdit = '';
            this.toasterService.pop('success', event.data, '');
            jQuery('#updateModal').modal('hide');
            this.listregions(1);
            this.regionEdit = false;
        }
    };
    ListRegionComponent.prototype.updaetPerPage = function (a) {
        this.perpage = a;
        this.listregions(1);
    };
    ListRegionComponent.prototype.deleteRegionConfirm = function (region) {
        this.regionToDelete = region;
        jQuery('#deleteModal').modal('show');
    };
    ListRegionComponent.prototype.deleteRegion = function () {
        var _this = this;
        var value = {};
        value['id'] = this.regionToDelete;
        value['type'] = 'region';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listregions(1);
                jQuery('#deleteModal').modal('hide');
                _this.regionToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    ListRegionComponent.prototype.deleteregion2 = function () {
        var _this = this;
        var value = {};
        value['id'] = this.regionToDelete;
        value['type'] = 'region';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listregions(1);
                jQuery('#deleteModal').modal('hide');
                _this.regionToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    ListRegionComponent.prototype.Search = function () {
        this.listregions(1);
    };
    ListRegionComponent.prototype.assignStore = function (region) {
        this.region = region;
        this.Assignment = true;
        //console.log(this.region);
        jQuery('#assignment').modal('show');
    };
    ListRegionComponent.prototype.deleteee = function () {
        var thiss = this;
        jQuery('input:checkbox.regionChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.regionsBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.regionsBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.regionsBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.regionsBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 region', '');
        }
        else {
            jQuery('#deleteModal2').modal('show');
        }
    };
    ListRegionComponent.prototype.bulkDelete = function () {
        var _this = this;
        var thiss = this;
        jQuery('input:checkbox.regionChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.regionsBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.regionsBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.regionsBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.regionsBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 region', '');
        }
        var value = {};
        var searchValue = this.regionsBulk.join('_');
        value['id'] = searchValue;
        value['type'] = 'bulkregions';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listregions(1);
                jQuery('#deleteModal2').modal('hide');
                _this.regionsBulk = [];
            }
        }, function (err) { return console.log(err); });
    };
    ListRegionComponent.prototype.isAllChecked = function () {
        return this.regions.every(function (_) { return _.state; });
    };
    ListRegionComponent.prototype.checkAll = function (ev) {
        this.regions.forEach(function (x) { return x.email = ev.target.checked; });
        // var objj = jQuery('.regionChecks');
        // console.log(objj);
    };
    ListRegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-region',
            template: __webpack_require__("../../../../../src/app/superadmin/region/list-region/list-region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/region/list-region/list-region.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], ListRegionComponent);
    return ListRegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tag-list.selected   a.active\n{\n  background-color: #01A8FE;\n  color: #fff;\n  border: 1px #01A8FE solid;\n}\n\n.tag-list a span\n{\n  margin-left: 8px;\n  padding: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <div class=\"ui-view\">\n        <div class=\"col-12 animated fadeIn\" style=\"padding-top:20px\">\n          <div class=\"row\" *ngIf=\"type == 'day-wise'\">\n            <div class=\"\">\n              <div class=\"btn-group\">\n                <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"show == 'today'\" (click)=\"fetch('today')\">Today</button>\n                <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"show == 'week'\" (click)=\"fetch('week')\">Week</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'stores'\">\n            <ng2-completer (selected)=\"tagselected($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr\" [datasource]=\"dataService\" [minSearchLength]=\"0\" placeholder=\"Search Stores\"></ng2-completer>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'product'\">\n            <ng2-completer (selected)=\"tagselected2($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr2\" [datasource]=\"dataService2\" [minSearchLength]=\"0\" placeholder=\"Search Products\"></ng2-completer>\n          </div>\n          <div class=\"row\" *ngIf=\"type == 'apls'\">\n            <ng2-completer (selected)=\"tagselected3($event)\" [clearSelected]=\"true\" inputClass=\"form-control\" [(ngModel)]=\"searchStr3\" [datasource]=\"dataService3\" [minSearchLength]=\"0\" placeholder=\"Search Apls\"></ng2-completer>\n          </div>\n          <div class=\"row tag-list\">\n            <div class=\"col-12\">\n              <a *ngFor=\"let tag of SearchTags; let i = index\">\n                {{ tag.storeName }}\n                <span (click)=\"SearchTags.splice(i,1); dashboardInfoFun()\"> &times; </span>\n              </a>\n              <a *ngFor=\"let tag of SearchTags2; let i = index\">\n                {{ tag.productName }}\n                <span (click)=\"SearchTags2.splice(i,1); dashboardInfoFun()\"> &times; </span>\n              </a>\n              <!-- {{ SearchTags3 | json }} -->\n              <a *ngFor=\"let tag of SearchTags3; let i = index\">\n                {{ tag.apdmName }}\n                <span (click)=\"SearchTags3.splice(i,1); dashboardInfoFun()\"> &times; </span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-top:20px\">\n            <div class=\"card\" *ngIf=\"!storeLoading\" style=\"width:100%\">\n              <div class=\"card-header\">\n                <span class=\"pull-left\">Orders</span>\n                <a hand (click)=\"export(show)\" class=\"btn btn-primary btn-xs pull-right\" style=\"color:#fff\">Export</a>\n              </div>\n              <div class=\"card-body\">\n                <div *ngIf=\"shown.length == 0\">\n                  No Orders found\n                </div>\n                <table class=\"table table-bordered table-responsive\" *ngIf=\"shown.length != 0\">\n                  <thead>\n                    <tr>\n                      <th>Store Number</th>\n                      <th>Store Name</th>\n                      <th>Order Number</th>\n                      <th>Order Date</th>\n                      <th>Order Status</th>\n                      <th>Total amount</th>\n                      <th>Placed by</th>\n                      <!-- <th>Apdm name</th> -->\n                      <!-- <th>Actions</th> -->\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <!-- <tr *ngFor=\"let order of Orders | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: TotalOrders }\"> -->\n                    <tr *ngFor=\"let order of shown\">\n                      <td>{{order.storeId}}</td>\n                      <td>{{order.storeName}}</td>\n                      <td><a [routerLink]=\"['/admin-panel/order-details',order.orderNumber]\">{{order.orderNumber}}</a></td>\n                      <td>{{order.orderAddedOn | date : 'short' }}</td>\n                      <td>\n                        <span *ngIf=\"order.orderStatus == 0\">Pending</span>\n                        <span *ngIf=\"order.orderStatus == 1\">Accepted</span>\n                        <span *ngIf=\"order.orderStatus == 9\">Back Order</span>\n                        <span *ngIf=\"order.orderStatus == 10\">Canceled</span>\n                        <span *ngIf=\"order.orderStatus == 11\">Printed</span>\n                        <span *ngIf=\"order.orderStatus == 12\">Shipped</span>\n                        <span *ngIf=\"order.orderStatus == 2\">Rejected</span>\n                        <!-- <span *ngIf=\"order.printed == 0 && order.orderStatus == 0 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Pending</span>\n                        <span *ngIf=\"order.printed == 0 && order.orderStatus == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Accepted</span>\n                        <span *ngIf=\"order.printed == 0 && order.orderStatus == 2 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Rejected</span>\n                        <span *ngIf=\"order.printed == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Printed</span>\n\n                        <span *ngIf=\"order.orderStatus == 1 && order.orderTrackNumber != '' &&  order.Shipped == 1\">Shipped</span> -->\n                      </td>\n                      <td>${{order.orderTotal | number : '1.2-2' }}</td>\n                      <td>\n                        <span *ngIf=\"order.orderLevel == 2\">Store</span>\n                        <!-- <span *ngIf=\"order.orderLevel == 1 && typee != 'apdm'\">Apdm</span> -->\n                        <span *ngIf=\"order.orderLevel == 1 || order.orderLevel == 3\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                      </td>\n                      <!-- <td>\n                        <span *ngIf=\"order.orderLevel == 1\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                      </td> -->\n                    </tr>\n                  </tbody>\n                </table>\n                <!-- <pagination-controls (pageChange)=\"page = Search($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n                      <!-- <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-primary\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('today')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.today.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Today Orders</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-info\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('week')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.week.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This week</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-warning\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('month')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.month.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>This month</p>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"col-sm-6 col-lg-3\">\n                        <div class=\"card text-white bg-danger\">\n                          <div class=\"card-body pb-0\">\n                            <button type=\"button\" class=\"btn btn-transparent p-0 float-right\" (click)=\"export('total')\">\n                              <i class=\"icon-doc\"></i> Export\n                            </button>\n                            <h4 class=\"mb-0\">\n                              <span *ngIf=\"(dashboardInfo | json) != '{}' \"> {{dashboardInfo.total.length}}</span>\n                              <span *ngIf=\"(dashboardInfo | json) == '{}' \"> Loading...</span>\n                            </h4>\n                            <p>Total orders</p>\n                          </div>\n                        </div>\n                      </div> -->\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <div style=\"display: block;\" *ngIf=\"lineChartData.length != 0\">\n                        <!-- <canvas baseChart width=\"400\" height=\"400\"\n                                    [datasets]=\"lineChartData\"\n                                    [labels]=\"lineChartLabels\"\n                                    [options]=\"lineChartOptions\"\n                                    [colors]=\"lineChartColors\"\n                                    [legend]=\"lineChartLegend\"\n                                    [chartType]=\"lineChartType\"\n                                    (chartHover)=\"chartHovered($event)\"\n                                    (chartClick)=\"chartClicked($event)\"></canvas> -->\n                        </div>\n                      </div>\n                    </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__ = __webpack_require__("../../../../ngx-csv/ngx-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_completer__ = __webpack_require__("../../../../ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportsComponent = (function () {
    function ReportsComponent(route, fb, router, _sp, toasterService, completerService) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.completerService = completerService;
        this.Products = [];
        this.dashboardInfo = {};
        this.show = 'today';
        this.shown = [];
        this.SearchTags = [];
        this.SearchTags2 = [];
        this.SearchTags3 = [];
        this.type = '';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */];
        // public lineChartData:Array<any> = [
        //   {data: [59, 80, 81, 56, 55, 40], label: 'Sale'},
        // ];
        this.lineChartData = [];
        this.lineChartLabels = ['August', 'September', 'October', 'November', 'December', 'January'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.toasterService = toasterService;
        this.route.params.subscribe(function (routeParams) {
            _this.shown = [];
            // this.clref = routeParams.clref;
            _this.type = routeParams.type;
            if (_this.type == 'stores')
                _this.show = 'total-stores';
            else if (_this.type == 'product')
                _this.show = 'total-products';
            else if (_this.type == 'apls')
                _this.show = 'total-apls';
            else
                _this.show = 'today';
            _this.dashboardInfoFun();
        });
        // let params: any = this.route.snapshot.params;
        // this.type = params.type;
        // if(this.type == 'stores')
        // this.show = 'total';
        this.dataService = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-stores/', 'storeName', 'storeName');
        this.dataService2 = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-products/', 'productName', 'productName');
        this.dataService3 = completerService.remote(__WEBPACK_IMPORTED_MODULE_7__shared_globals__["a" /* baseUrl */] + 'api/search-apls/', 'apdmFirstName,apdmLastName', 'apdmFirstName,apdmLastName');
    }
    ReportsComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        // for (let i = 0; i < this.lineChartData.length; i++) {
        //   _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
        //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        //   }
        // }
        this.lineChartData = _lineChartData;
    };
    // events
    ReportsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.ngOnInit = function () {
        this.dashboardInfoFun();
    };
    ReportsComponent.prototype.dashboardInfoFun = function () {
        var _this = this;
        var obj = {};
        obj['show'] = this.show;
        var str = [];
        if (obj['show'] == 'total-products') {
            for (var i = 0; i < this.SearchTags2.length; i++) {
                str.push(this.SearchTags2[i]['productID']);
            }
        }
        else if (obj['show'] == 'total-apls') {
            for (var i = 0; i < this.SearchTags3.length; i++) {
                str.push(this.SearchTags3[i]['apdmUserId']);
            }
        }
        else {
            for (var i = 0; i < this.SearchTags.length; i++) {
                str.push(this.SearchTags[i]['storeUserId']);
            }
        }
        // obj['stores'] = str.join('_');
        if (obj['show'] == 'total-products')
            obj['products'] = str;
        else if (obj['show'] == 'total-apls')
            obj['apls'] = str;
        else
            obj['stores'] = str;
        var aa = JSON.stringify(obj);
        this._sp.dashboardInfo(encodeURIComponent(btoa(aa))).subscribe(function (data) {
            if (data.success) {
                console.log(data.data);
                var sale = [];
                for (var i in data.data['sale2']) {
                    sale.push(data.data['sale2'][i]['total']);
                }
                _this.lineChartData.push({ data: sale, label: 'Sale' });
                _this.dashboardInfo = data.data;
                // this.fetch('today');
                console.log(data.data['total']);
                console.log(_this.show);
                if (_this.show == 'total-stores' || _this.show == 'total-products' || _this.show == 'total-apls')
                    _this.shown = data.data['total'];
            }
            else {
                _this.dashboardInfo = {};
            }
        }, function (err) {
            _this.dashboardInfo = {};
        });
    };
    ReportsComponent.prototype.export = function (type) {
        console.log(type);
        if (type == 'total-stores' || type == 'total-apls' || type == 'total-products') {
            type = 'total';
        }
        if (this.dashboardInfo[type].length != 0) {
            var orders = [];
            for (var i = 0; i < this.dashboardInfo[type].length; i++) {
                var order = {};
                order['storeName'] = this.dashboardInfo[type][i]['storeName'];
                // order['orderId'] = this.dashboardInfo[type][i]['orderId'];
                order['orderNumber'] = this.dashboardInfo[type][i]['orderNumber'].toString();
                order['orderAddedOn'] = this.dashboardInfo[type][i]['orderAddedOn'];
                if (this.dashboardInfo[type][i]['orderStatus'] == 0)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Pending';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 1)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Accepted';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 9)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Back Order';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 10)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Canceled';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 11)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Printed';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 12)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Shipped';
                else if (this.dashboardInfo[type][i]['orderStatus'] == 2)
                    this.dashboardInfo[type][i]['orderStatus'] = 'Rejected';
                // order['storeId'] = this.dashboardInfo[type][i]['storeId'];
                order['orderStatus'] = this.dashboardInfo[type][i]['orderStatus'];
                // order['orderTotal'] = parseFloat(Math.round(this.dashboardInfo[type][i]['orderTotal'] * 100) / 100).toFixed(2);
                order['orderTotal'] = Number(this.dashboardInfo[type][i]['orderTotal']).toFixed(2);
                if (this.dashboardInfo[type][i]['orderLevel'] == 2)
                    order['Placed by'] = 'Store';
                else if (this.dashboardInfo[type][i]['orderLevel'] == 1 || this.dashboardInfo[type][i]['orderLevel'] == 3)
                    order['Placed by'] = this.dashboardInfo[type][i]['apdmFirstName'] + ' ' + this.dashboardInfo[type][i]['apdmLastName'];
                orders.push(order);
            }
            var hds = Object.keys(orders[0]);
            console.log(hds);
            // for(var i = 0 ; i < hds.length ; i++){
            //     hds[i] = '<b>'+hds[i].charAt(0).toUpperCase() + hds[i].substr(1)+'</b>';
            // }
            console.log(hds);
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                headers: hds,
                showTitle: false,
                useBom: true,
                removeNewLines: false,
            };
            // console.log(Object.keys(orders[0]));
            if (this.type == 'stores')
                var name = 'PPS_Orders_ByStores';
            else if (this.type == 'product')
                var name = 'PPS_Orders_ByProducts';
            else if (this.type == 'apls')
                var name = 'PPS_Orders_ByApls';
            else {
                if (this.show == 'today')
                    var name = 'PPS_Orders_ByToday';
                else
                    var name = 'PPS_Orders_Byweek';
            }
            new __WEBPACK_IMPORTED_MODULE_5_ngx_csv_ngx_csv__["ngxCsv"](orders, name, options);
        }
    };
    ReportsComponent.prototype.fetch = function (show) {
        this.show = show;
        if (this.dashboardInfo[show]) {
            this.shown = this.dashboardInfo[show];
            // console.log(this.shown);
        }
    };
    ReportsComponent.prototype.tagselected = function (event) {
        this.show = 'total-stores';
        if (event) {
            if (this.SearchTags.length == 0) {
                this.SearchTags.push({ 'storeName': event.originalObject.storeName, 'storeUserId': event.originalObject.storeUserId });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags.length; i++) {
                    if (event.originalObject.storeId == this.SearchTags[i]['storeId']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags.push({ 'storeName': event.originalObject.storeName, 'storeUserId': event.originalObject.storeUserId });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    ReportsComponent.prototype.tagselected2 = function (event) {
        this.show = 'total-products';
        if (event) {
            console.log(event);
            if (this.SearchTags2.length == 0) {
                this.SearchTags2.push({ 'productName': event.originalObject.productName, 'productID': event.originalObject.productID });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags2.length; i++) {
                    if (event.originalObject.productID == this.SearchTags2[i]['productID']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags2.push({ 'productName': event.originalObject.productName, 'productID': event.originalObject.productID });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    ReportsComponent.prototype.tagselected3 = function (event) {
        this.show = 'total-apls';
        if (event) {
            console.log(event);
            if (this.SearchTags3.length == 0) {
                this.SearchTags3.push({ 'apdmName': event.originalObject.apdmFirstName + ' ' + event.originalObject.apdmLastName, 'apdmUserId': event.originalObject.apdmUserId });
                this.dashboardInfoFun();
            }
            else {
                var match = false;
                for (var i = 0; i < this.SearchTags3.length; i++) {
                    if (event.originalObject.apdmUserId == this.SearchTags3[i]['apdmUserId']) {
                        match = true;
                    }
                }
                if (!match) {
                    this.SearchTags3.push({ 'apdmName': event.originalObject.apdmFirstName + ' ' + event.originalObject.apdmLastName, 'apdmUserId': event.originalObject.apdmUserId });
                    this.dashboardInfoFun();
                }
            }
        }
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/superadmin/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/reports/reports.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_6_ng2_completer__["a" /* CompleterService */]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/spdashboard/spdashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/spdashboard/spdashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  spdashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/spdashboard/spdashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpdashboardComponent = (function () {
    function SpdashboardComponent() {
    }
    SpdashboardComponent.prototype.ngOnInit = function () {
    };
    SpdashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spdashboard',
            template: __webpack_require__("../../../../../src/app/superadmin/spdashboard/spdashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/spdashboard/spdashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpdashboardComponent);
    return SpdashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/spheader/spheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/spheader/spheader.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <!-- <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <!-- <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n\n  <!-- <ul class=\"nav navbar-nav d-md-down-none\">\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Users</a>\n    </li>\n    <li class=\"nav-item px-3\">\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </li>\n  </ul> -->\n  <ul class=\"nav navbar-nav ml-auto\">\n    <!-- <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n    </li>\n    <li class=\"nav-item d-md-down-none\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n    </li> -->\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"assets/img/avatars/avatar.png\" class=\"img-avatar\" alt=\"Admin\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <!-- <div class=\"dropdown-header text-center\">\n          <strong>Account</strong>\n        </div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comments<span class=\"badge badge-warning\">42</span></a>\n        <div class=\"dropdown-header text-center\">\n          <strong>Settings</strong>\n        </div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Settings</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-secondary\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock Account</a> -->\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n  <button class=\"navbar-toggler aside-menu-toggler\" type=\"button\">\n    <!-- <span class=\"navbar-toggler-icon\"></span> -->\n  </button>\n\n<i class=\"fa fa-navicon visible-xs\" style=\"position: absolute; right: 14px;\"></i>\n\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/spheader/spheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpheaderComponent = (function () {
    function SpheaderComponent(router) {
        this.router = router;
    }
    SpheaderComponent.prototype.ngOnInit = function () {
    };
    SpheaderComponent.prototype.logout = function () {
        localStorage.removeItem("ppsSuperAdminToken");
        this.router.navigate(['/superadmin']);
    };
    SpheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spheader',
            template: __webpack_require__("../../../../../src/app/superadmin/spheader/spheader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/spheader/spheader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SpheaderComponent);
    return SpheaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/spnotification/spnotification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/spnotification/spnotification.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Notifiations</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n\n\n\n          <div class=\"col-lg-9\">\n\n                <div class=\"loader\" *ngIf=\"storeLoading\">\n                  <div class=\"loader-inner ball-pulse\">\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                    <div class=\"my-loader\"></div>\n                  </div>\n                </div>\n\n                <!--div class=\"\">\n                  <div style=\"margin-bottom:10px\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search for stores\" [(ngModel)]=\"searchText\" (keyup)=\"Search()\">\n                    </div>\n                  </div>\n                </div-->\n\n                <div class=\"card\" *ngIf=\"!storeLoading\">\n                  <div class=\"card-header\">\n                    Notifiations\n                    <div class=\"dropdow pull-right\">\n                      <button type=\"button\" name=\"button\" (click)=\"deleteee()\"  class=\"btn btn-primary btn-sm\">Delete</button>\n                      <button data-toggle='dropdown' type=\"button\" name=\"button\" class=\"btn btn-primary btn-sm\">Per page</button>\n                      <span class=\"caret\"></span>\n                      <!-- <i class=\"fa fa-arrow-down\"></i> -->\n                      <ul class=\"dropdown-menu\">\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">5</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(10)\">10</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(20)\">20</a></li>\n                        <li><a class=\"dropdown-item\" (click)=\"updaetPerPage(30)\">30</a></li>\n                      </ul>\n                    </div>\n                  </div>\n\n\n                  <div class=\"card-body\" >\n                    <div *ngIf=\"!notificationLoading && notifications.length == 0\">\n                      No Notifiation found\n                    </div>\n                    <table class=\"table table-bordered\"  *ngIf=\"!notificationLoading && notifications.length != 0\">\n                      <thead>\n                        <tr>\n                          <th><input type=\"checkbox\" [checked]=\"isAllChecked()\" (change)=\"checkAll($event)\"> </th>\n                          <th>Notifiation</th>\n                          <th>DateTime</th>\n\n                          <th>Actions</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let notification of notifications | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: totalItem }\">\n                          <td><input class=\"notificationChecks\" [attr.dd]=\"notification.id\" type=\"checkbox\" value=\"{{notification.id}}\" [(ngModel)]=\"notification.state\"></td>\n                          <td>{{notification.message}}</td>\n                          <td>{{notification.created_at}}</td>\n\n                          <!-- <td>\n                            <span *ngIf=\"store.storeStatus == 1\" class=\"badge badge-success\">Active</span>\n                            <span *ngIf=\"store.storeStatus == 2\" class=\"badge badge-warning\">InActive</span>\n                          </td> -->\n                          <td>\n                            <a (click)=\"deleteNotificationConfirm(notification.id)\" class=\"fa fa-remove icon-btn\"></a>\n\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"page = listNotifications($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                    </pagination-controls>\n\n\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteNotification()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteModal2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"bulkDelete()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/spnotification/spnotification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpnotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpnotificationComponent = (function () {
    function SpnotificationComponent(router, _sp, toasterService) {
        this.router = router;
        this._sp = _sp;
        this.notifications = [];
        this.perpage = 5;
        this.page = 1;
        this.notificationLoading = false;
        this.notificationListevent = 1;
        this.notificationsBulk = [];
        this.toasterService = toasterService;
    }
    SpnotificationComponent.prototype.ngOnInit = function () {
        this.listNotifications(1);
    };
    SpnotificationComponent.prototype.listNotifications = function (e) {
        var _this = this;
        this.notificationListevent = e;
        this.notificationLoading = true;
        var value = {};
        value['perpage'] = this.perpage;
        value['page'] = e;
        this._sp.listNotifications(value).subscribe(function (data) {
            var thiss = _this;
            setTimeout(function () {
                thiss.notifications = data.data.result;
                thiss.totalItem = data.data.total_rows;
                thiss.notificationLoading = false;
            }, 500);
        }, function (err) {
            if (err.status == 409) {
                _this.notifications = [];
                _this.totalItem = 0;
                _this.notificationLoading = false;
            }
        });
        return e;
    };
    SpnotificationComponent.prototype.updaetPerPage = function (a) {
        this.perpage = a;
        this.listNotifications(1);
    };
    SpnotificationComponent.prototype.deleteNotificationConfirm = function (store) {
        this.notificationToDelete = store;
        jQuery('#deleteModal').modal('show');
    };
    SpnotificationComponent.prototype.deleteNotification = function () {
        var _this = this;
        var value = {};
        value['id'] = this.notificationToDelete;
        value['type'] = 'notification';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listNotifications(1);
                jQuery('#deleteModal').modal('hide');
                _this.notificationToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    SpnotificationComponent.prototype.deleteNotification2 = function () {
        var _this = this;
        var value = {};
        value['id'] = this.notificationToDelete;
        value['type'] = 'notification';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listNotifications(1);
                jQuery('#deleteModal').modal('hide');
                _this.notificationToDelete = '';
            }
        }, function (err) { return console.log(err); });
    };
    SpnotificationComponent.prototype.deleteee = function () {
        var thiss = this;
        jQuery('input:checkbox.notificationChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.notificationsBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.notificationsBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.notificationsBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.notificationsBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 notification', '');
        }
        else {
            jQuery('#deleteModal2').modal('show');
        }
    };
    SpnotificationComponent.prototype.bulkDelete = function () {
        var _this = this;
        var thiss = this;
        jQuery('input:checkbox.notificationChecks').each(function () {
            if (this.checked) {
                var atr = jQuery(this).attr('dd');
                if (atr)
                    thiss.notificationsBulk.push(atr);
            }
            else {
                console.log('here');
                var atr = jQuery(this).attr('dd');
                if (atr) {
                    var idx = thiss.notificationsBulk.indexOf(atr);
                    if (idx != -1) {
                        thiss.notificationsBulk.splice(idx, 1);
                    }
                }
            }
        });
        if (thiss.notificationsBulk.length == 0) {
            thiss.toasterService.pop('error', 'Please select atleast 1 notification', '');
        }
        var value = {};
        var searchValue = this.notificationsBulk.join('_');
        value['id'] = searchValue;
        value['type'] = 'bulkNotifications';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.listNotifications(1);
                jQuery('#deleteModal2').modal('hide');
                _this.notificationsBulk = [];
            }
        }, function (err) { return console.log(err); });
    };
    SpnotificationComponent.prototype.isAllChecked = function () {
        return this.notifications.every(function (_) { return _.state; });
    };
    SpnotificationComponent.prototype.checkAll = function (ev) {
        this.notifications.forEach(function (x) { return x.state = ev.target.checked; });
        // var objj = jQuery('.storeChecks');
        // console.log(objj);
    };
    SpnotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spnotification',
            template: __webpack_require__("../../../../../src/app/superadmin/spnotification/spnotification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/spnotification/spnotification.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], SpnotificationComponent);
    return SpnotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/sporder-details/sporder-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderst\n{\n  color: #b7b7b7 !important;\n  text-align: center;\n}\n\n.orderst i\n{\n  font-size: 43px;\n}\n\n.orderst.active\n{\n  color: #03a900 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/sporder-details/sporder-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-9\">\n            <!-- {{Orderdetails | json }} -->\n            <h2>\n              <i *ngIf=\"Orderdetails.orderStatus == 1\" class=\"icon-check\"></i>\n              <i *ngIf=\"Orderdetails.orderStatus == 2\" class=\"icon-ban\"></i>\n              <i *ngIf=\"Orderdetails.orderStatus == 0\" class=\"icon-clock\"></i>\n              <span *ngIf=\"Orderdetails.orderStatus == 0\">Pending</span>\n              <span *ngIf=\"Orderdetails.orderStatus == 2\">Denied</span>\n              <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 0\">Approved</span>\n              <span *ngIf=\"Orderdetails.orderStatus == 1 && Orderdetails.Shipped == 1\">Shipped</span>\n            </h2>\n            <p>Total Amount - ${{Orderdetails.orderTotal | number : '1.2-2' }}</p>\n            <p style=\"margin-bottom: 4px;\">Order number - {{Orderdetails.orderNumber}}</p>\n            <p style=\"margin-bottom: 4px;\">Date Placed - {{Orderdetails.orderAddedOn | date : 'short' }}</p>\n            <p style=\"margin-bottom: 4px;\">Store Number - {{Orderdetails.storeName}}</p>\n            <p style=\"margin-bottom: 4px;\">Store address - {{Orderdetails.storeAddress}}</p>\n            <p style=\"margin-bottom: 4px;\">Shipping Tracking Number - {{Orderdetails.orderTrackNumber}}</p>\n            <br>\n\n            <!-- {{ Orderdetails.TrackDetails | json }} -->\n            <div *ngIf=\"(Orderdetails | json) != '{}'\">\n\n              <div class=\"\" *ngIf=\"Orderdetails.Shipped == 0\">\n                Fedex Tracking number is not updated\n              </div>\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 col-4 orderst active\">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Received</h3>\n                  </div>\n                  <div class=\"col-md-4 col-4 orderst\" [class.active]=\"Orderdetails.orderStatus == 11 || Orderdetails.orderStatus == 12\">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Processed</h3>\n                  </div>\n                  <div class=\"col-md-4 col-4 orderst\" [class.active]=\"Orderdetails.orderStatus == 12\">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Shipped</h3>\n                  </div>\n                </div>\n              </div>\n\n\n              <!-- <div class=\"\" *ngIf=\"Orderdetails.TrackDetails.error\">\n                {{ Orderdetails.TrackDetails.error }}\n              </div>\n              <div class=\"\" *ngIf=\"Orderdetails.TrackDetails.success\">\n                <div class=\"row\" *ngIf=\"Orderdetails.TrackDetails.data.event\">\n                  <div class=\"col-md-4 orderst\" [class.active]=\"Orderdetails.TrackDetails.data.event.EventType == 'OC' || Orderdetails.TrackDetails.data.event.EventType == 'IP'  || Orderdetails.TrackDetails.data.event.EventType == 'PU' || Orderdetails.TrackDetails.data.event.EventType == 'MN' || Orderdetails.TrackDetails.data.event.EventType == 'FL' || Orderdetails.TrackDetails.data.event.EventType == 'DL' \">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Processed</h3>\n                  </div>\n                  <div class=\"col-md-4 orderst\" [class.active]=\"Orderdetails.TrackDetails.data.event.EventType == 'DP'  || Orderdetails.TrackDetails.data.event.EventType == 'FL'  || Orderdetails.TrackDetails.data.event.EventType == 'DL' \">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Dispatched</h3>\n                  </div>\n                  <div class=\"col-md-4 orderst\" [class.active]=\"Orderdetails.TrackDetails.data.event.EventType == 'DL'\">\n                    <i class=\"fa fa-check-circle\"></i>\n                    <h3>Delivered</h3>\n                  </div>\n                </div>\n              </div> -->\n\n            </div>\n\n            <br>\n\n            <table class=\"table table-responsive\">\n              <thead>\n                <tr>\n                  <th>Item name</th>\n                  <th>Item Id</th>\n                  <th>Item quantity</th>\n                  <th>Item Price</th>\n                  <th>Total Price</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of Orderdetails.items\">\n                  <td *ngIf=\"item.productVarDesc && item.productVarDesc != ''\">{{item.productVarDesc}}</td>\n                  <td *ngIf=\"!item.productVarDesc\">{{item.productVarDesc_safe}}</td>\n\n                  <td *ngIf=\"item.productVarItemId && item.productVarItemId != ''\">{{item?.productVarItemId}}</td>\n                  <td *ngIf=\"!item.productVarItemId\">{{item?.productVarItemId_safe}}</td>\n                  <td>{{item.orderItemQty}}</td>\n                  <td>${{ (item.orderItemPrice / item.orderItemQty) | number : '1.2-2'}}</td>\n                  <td>${{item.orderItemPrice | number : '1.2-2' }}</td>\n                  <td style=\"color:red;\" *ngIf=\"item.isBackItem == 'yes'\">Back Order</td>\n                  <td *ngIf=\"item.isBackItem == 'no'\"><i class=\"fa fa-history icon-btn\" (click)=\"orderStatus('confirm',i,Orderdetails.orderNumber,item.orderItemId,item?.productVarDesc || item?.productVarDesc_safe)\"></i></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n    <div class=\"modal fade\" id=\"statusModal\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body text-center\">\n            <h2>Are you sure?</h2>\n            <br><br>\n            <button (click)=\"orderStatus('action',ii,orderNumber,itemId)\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n            <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/sporder-details/sporder-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SporderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SporderDetailsComponent = (function () {
    function SporderDetailsComponent(route, router, _sp, toasterService) {
        this.route = route;
        this.router = router;
        this._sp = _sp;
        this.Orderdetails = {};
        this.token = {};
        this.storeLoading = false;
        this.ii = 0;
        this.orderNumber = 0;
        this.orderItemName = '';
        this.orderItemId = 0;
        this.toasterService = toasterService;
        var params = this.route.snapshot.params;
        this.orderid = params.orderid;
    }
    SporderDetailsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
        this.myOrders();
    };
    SporderDetailsComponent.prototype.myOrders = function () {
        var _this = this;
        var tkn = localStorage.getItem('ppsPortalToken');
        var tknn = JSON.parse(tkn);
        this._sp.orderDetails(this.orderid).subscribe(function (data) {
            if (data.status == 200) {
                _this.Orderdetails = data.data;
                console.log(_this.Orderdetails);
            }
        }, function (err) {
        });
    };
    SporderDetailsComponent.prototype.orderStatus = function (type, i, orderNumber, orderItemId, orderItemName) {
        var _this = this;
        if (type == 'confirm') {
            this.ii = i;
            this.orderItemId = orderItemId;
            this.orderItemName = orderItemName;
            this.orderNumber = orderNumber;
            jQuery('#statusModal').modal('show');
            return false;
        }
        var value = {};
        value['orderItemId'] = this.orderItemId;
        value['orderNumber'] = this.orderNumber;
        value['orderItemName'] = this.orderItemName;
        //console.log(value);
        this._sp.updateOrderDetails(value).subscribe(function (data) {
            if (data.success) {
                jQuery('#statusModal').modal('hide');
                _this.myOrders();
            }
        }, function (err) { return console.log(err); });
        // ii = 0;
        // orderNumber = 0;
        // statusReq   = 0;
    };
    SporderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sporder-details',
            template: __webpack_require__("../../../../../src/app/superadmin/sporder-details/sporder-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/sporder-details/sporder-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], SporderDetailsComponent);
    return SporderDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/sporders/sporders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/sporders/sporders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">List Orders</li>\n      </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-9\">\n            <div class=\"loader\" *ngIf=\"storeLoading\">\n              <div class=\"loader-inner ball-pulse\">\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <label for=\"\">Search</label>\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Type keywords\" [(ngModel)]=\"searchText\" (keyup)=\"Search(page)\">\n                  <!-- <span class=\"input-group-btn\">\n                    <button type=\"button\" name=\"button\" class=\"btn btn-default\">Search</button>\n                  </span> -->\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <label for=\"\">Filter Orders</label>\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-secondary dropdown-toggle text-capitalize\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Showing {{orderFilter}}\n                  </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                    <a class=\"dropdown-item\" (click)=\"filter('accepted')\">Show Accepted</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('approved')\">Show Approved</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('printed')\">Show Printed</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('shipped')\">Show Shipped</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('pending')\">Show Pending</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('back')\">Show Back Order</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('cancel')\">Show Canceled</a>\n                    <a class=\"dropdown-item\" (click)=\"filter('denied')\">Show Denied</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <label for=\"\"> $250 Limit </label>\n                <br>\n                <div class=\"btn-group\">\n                  <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"limit250 == 1\" (click)=\"updateLimitStatus(1)\">On</button>\n                  <button type=\"button\" name=\"button\" class=\"btn\" [class.btn-primary]=\"limit250 == 0\" (click)=\"updateLimitStatus(0)\">Off</button>\n                </div>\n              </div>\n              <div class=\"clearfix\">\n              </div>\n            </div>\n            <div class=\"clearfix\">\n              <br>\n            </div>\n\n            <!-- <div class=\"card\">\n              <div class=\"card-body\">\n              </div>\n            </div> -->\n            <div class=\"card\" *ngIf=\"!storeLoading\">\n              <div class=\"card-header\">\n                Orders\n              </div>\n              <div class=\"card-body\">\n                <div *ngIf=\"Orders.length == 0\">\n                  No Orders found\n                </div>\n                <table class=\"table table-bordered table-responsive\" *ngIf=\"Orders.length != 0\">\n                  <thead>\n                    <tr>\n                      <th>Store Number</th>\n                      <th>Store Name</th>\n                      <th>Order Number</th>\n                      <th>Order Date</th>\n                      <th>\n                        <span *ngIf=\"orderFilter != 'denied'\">Order Approved Date</span>\n                        <span *ngIf=\"orderFilter == 'denied'\">Order Denied Date</span>\n                      </th>\n                      <th>Order Status</th>\n                      <th>Total amount</th>\n                      <th>Placed by</th>\n                      <th>Order type</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let order of Orders | paginate: { itemsPerPage: perpage, currentPage: page, totalItems: TotalOrders }; let i = index\">\n                      <td>{{order.storeId}}</td>\n                      <td>{{order.storeName}}</td>\n                      <td><a [routerLink]=\"['/admin-panel/order-details',order.orderNumber]\">{{order.orderNumber}}</a></td>\n                      <td>{{order.orderAddedOn | date : 'short' }}</td>\n                      <td> <span *ngIf=\"order.orderApprovedOn && order.orderApprovedOn != ''\">{{order.orderApprovedOn | date : 'short' }}</span></td>\n                      <td>\n                        <!-- <p *ngIf=\"orderFilter == 'printed'\">\n                          <span> Printed </span>\n                        </p>\n                        <p *ngIf=\"orderFilter == 'accepted'\">\n                          Accepted\n                        </p>\n                        <p *ngIf=\"orderFilter == 'shipped'\">\n                          Shipped\n                        </p>\n                        <p *ngIf=\"orderFilter == 'back'\">\n                          Back Ordered\n                        </p> -->\n                        <!-- <p *ngIf=\"orderFilter == 'approved'\">\n                          Approved\n                        </p> -->\n                        <p>\n                          <!-- <span *ngIf=\"order.printed == 0 && order.orderStatus == 0 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Pending</span>\n                          <span *ngIf=\"order.printed == 0 && order.orderStatus == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Accepted</span>\n                          <span *ngIf=\"order.printed == 0 && order.orderStatus == 2 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Rejected</span>\n                          <span *ngIf=\"order.orderStatus != 9 && order.orderStatus != 10 && order.printed == 1 && (order.orderTrackNumber == '' || order.orderTrackNumber == null)\">Printed</span> -->\n                          <span *ngIf=\"order.orderStatus == 0\">Pending</span>\n                          <span *ngIf=\"order.orderStatus == 1\">Accepted</span>\n                          <span *ngIf=\"order.orderStatus == 2\">Denied</span>\n                          <span *ngIf=\"order.orderStatus == 9\">Back Order</span>\n                          <span *ngIf=\"order.orderStatus == 10\">Canceled</span>\n                          <span *ngIf=\"order.orderStatus == 11\">Printed</span>\n                          <span *ngIf=\"order.orderStatus == 12\">Shipped</span>\n\n                          <!-- <span *ngIf=\"order.orderStatus == 1 && order.orderTrackNumber != '' &&  order.Shipped == 1\">Shipped</span> -->\n                        </p>\n                      </td>\n                      <td>${{order.orderTotal | number : '1.2-2' }}</td>\n                      <td>\n                        <span *ngIf=\"order.orderLevel == 2\">Store</span>\n                        <!-- <span *ngIf=\"order.orderLevel == 1 && typee != 'apdm'\">Apdm</span> -->\n                        <span *ngIf=\"order.orderLevel == 1\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                        <span *ngIf=\"order.orderLevel == 3\">{{order.apdmFirstName2}} {{order.apdmLastName2}}</span>\n                      </td>\n                        <td>{{order.order_type}}</td>\n                      <!-- <td>\n                        <span *ngIf=\"order.orderLevel == 1\">{{order.apdmFirstName}} {{order.apdmLastName}}</span>\n                      </td> -->\n                      <td class=\"text-center list_order_td\">\n                        <!-- <a *ngIf=\"order.orderLevel == 2 && order.orderStatus == 0\" (click)=\"UpdateOrderStatus(1,order.orderNumber)\" class=\"btn btn-xs btn-primary\"> Approve</a>\n                        <a *ngIf=\"order.orderLevel == 2 && order.orderStatus == 0\" (click)=\"UpdateOrderStatus(2,order.orderNumber)\" class=\"btn btn-xs btn-warning\"> Deny</a> -->\n                        <a hand (click)=\"downloadPdf(order.orderNumber); filter(orderFilter)\" class=\"icon-btn\">\n                          <i class=\"fa fa-print \"></i>\n                        </a>\n                        <i class=\"fa fa-trash icon-btn\" (click)=\"deleteConfirm(order.orderNumber)\"></i>\n                        <i class=\"fa fa-truck icon-btn\" (click)=\"ship(order.orderNumber,order.orderTrackNumber)\"></i>\n                        <i class=\"fa fa-history icon-btn\" (click)=\"orderStatus('confirm',i,order.orderNumber,9)\"></i>\n                        <i class=\"fa fa-ban icon-btn\" (click)=\"orderStatus('confirm',i,order.orderNumber,10)\"></i>\n\n                        <!-- <a (click)=\"deleteStoreConfirm(store.storeUserId)\" class=\"fa fa-remove icon-btn\"></a>\n                        <a (click)=\"editStore(store.storeId)\" class=\"fa fa-edit icon-btn\"></a> -->\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <pagination-controls (pageChange)=\"page = Search($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n                </pagination-controls>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"deleteOrder()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"statusModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        <h2>Are you sure?</h2>\n        <br><br>\n        <button (click)=\"orderStatus('action',ii,orderNumber,statusReq)\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"shipModal\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <label for=\"\" class=\"modal-title\">Update Tracking number</label>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"TrackNumber\">\n        </div>\n        <button (click)=\"updateTrackNumber()\" type=\"button\" name=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button data-dismiss=\"modal\" type=\"button\" name=\"button\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/sporders/sporders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpordersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpordersComponent = (function () {
    function SpordersComponent(route, router, _sp, toasterService) {
        this.route = route;
        this.router = router;
        this._sp = _sp;
        this.Orders = [];
        this.storeEdit = false;
        this.perpage = 10;
        this.page = 1;
        this.TotalOrders = 1;
        this.storeLoading = false;
        this.searchText = '';
        this.limit250 = 1;
        this.orderFilter = 'approved';
        this.TrackNumber = '';
        this.orderToShip = '';
        this.type = '';
        this.ii = 0;
        this.orderNumber = 0;
        this.statusReq = 0;
        this.toasterService = toasterService;
    }
    SpordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getlimit();
        this.route.params.subscribe(function (routeParams) {
            var type = routeParams['type'];
            _this.type = routeParams['type'];
            console.log(type);
            if (type == 'approved')
                _this.getPortalOrders(_this.page, 'admin-approved', '');
            else if (type == 'pending')
                _this.getPortalOrders(_this.page, 'admin-pending', '');
        });
    };
    SpordersComponent.prototype.filter = function (type) {
        if (type == 'approved') {
            this.orderFilter = 'approved';
            this.getPortalOrders(this.page, 'admin-approved', '');
        }
        else if (type == 'accepted') {
            this.orderFilter = 'accepted';
            this.getPortalOrders(this.page, 'admin-accepted', '');
        }
        else if (type == 'printed') {
            this.orderFilter = 'printed';
            this.getPortalOrders(this.page, 'admin-printed', '');
        }
        else if (type == 'shipped') {
            this.orderFilter = 'shipped';
            this.getPortalOrders(this.page, 'admin-shipped', '');
        }
        else if (type == 'pending') {
            this.orderFilter = 'pending';
            this.getPortalOrders(this.page, 'admin-pending', '');
        }
        else if (type == 'back') {
            this.orderFilter = 'back';
            this.getPortalOrders(this.page, 'admin-back', '');
        }
        else if (type == 'cancel') {
            this.orderFilter = 'cancel';
            this.getPortalOrders(this.page, 'admin-cancel', '');
        }
        else if (type == 'denied') {
            this.orderFilter = 'denied';
            this.getPortalOrders(this.page, 'admin-denied', '');
        }
    };
    SpordersComponent.prototype.getPortalOrders = function (page, type, id) {
        var _this = this;
        if (this.searchText == '')
            var text = 'all';
        else
            var text = this.searchText;
        this.storeLoading = true;
        this._sp.getPortalOrders(type, id, text, page, this.perpage).subscribe(function (data) {
            if (data.status == 200) {
                _this.storeLoading = false;
                _this.Orders = data.data.data;
                _this.TotalOrders = data.data.total;
            }
        }, function (err) {
            if (err.status == 409) {
                _this.storeLoading = false;
                _this.Orders = [];
            }
        });
    };
    SpordersComponent.prototype.downloadPdf = function (orderNo) {
        var thiss = this;
        setTimeout(function () {
            thiss.filter(thiss.orderFilter);
        }, 1000);
        window.location.href = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/download-order-pdf/' + orderNo;
    };
    SpordersComponent.prototype.deleteConfirm = function (i) {
        this.storeToDelete = i;
        jQuery('#deleteModal').modal('show');
    };
    SpordersComponent.prototype.ship = function (i, orderTrackNumber) {
        if (orderTrackNumber != '') {
            this.TrackNumber = orderTrackNumber;
        }
        this.orderToShip = i;
        jQuery('#shipModal').modal('show');
    };
    SpordersComponent.prototype.updateTrackNumber = function (i) {
        var _this = this;
        var value = {};
        value['orderNumber'] = this.orderToShip;
        value['orderTrackNumber'] = this.TrackNumber;
        value['type'] = 'orderTrackNumber';
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#shipModal').modal('hide');
                _this.orderToShip = '';
                // this.getPortalOrders(this.page,'admin-approved','');
                _this.filter(_this.orderFilter);
            }
        }, function (err) { return console.log(err); });
    };
    SpordersComponent.prototype.deleteOrder = function () {
        var _this = this;
        var value = {};
        value['id'] = this.storeToDelete;
        value['type'] = 'order';
        this._sp.delete(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                jQuery('#deleteModal').modal('hide');
                _this.storeToDelete = '';
                // this.getPortalOrders(this.page,'admin-approved','');
                _this.filter(_this.orderFilter);
            }
        }, function (err) { return console.log(err); });
    };
    SpordersComponent.prototype.Search = function (page) {
        console.log('here');
        this.page = page;
        this.filter(this.orderFilter);
        // if(this.orderFilter == 'approved')
        // {
        //   this.getPortalOrders(page,'admin-approved','');
        // }
        // else if(this.orderFilter == 'pending')
        // {
        //   this.getPortalOrders(page,'admin-pending','');
        // }
        return page;
    };
    SpordersComponent.prototype.getlimit = function () {
        var _this = this;
        this._sp.getlimit().subscribe(function (data) {
            if (data.success) {
                _this.limit250 = data.limit;
            }
        }, function (err) { return console.log(err); });
    };
    SpordersComponent.prototype.updateLimitStatus = function (val) {
        var _this = this;
        if (this.limit250 == val)
            return false;
        // this.limit250 = (this.limit250 == 1 ? 0 : 1);
        var value = {};
        value['type'] = 'PriceLimit';
        value['setStatus'] = val;
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.toasterService.pop('success', data.data, '');
                _this.limit250 = val;
            }
        }, function (err) { return console.log(err); });
    };
    SpordersComponent.prototype.orderStatus = function (type, i, orderNumber, status) {
        var _this = this;
        if (type == 'confirm') {
            this.ii = i;
            this.statusReq = status;
            this.orderNumber = orderNumber;
            jQuery('#statusModal').modal('show');
            return false;
        }
        var value = {};
        value['type'] = 'orderStatus';
        value['data'] = { orderStatus: status };
        value['where'] = { orderNumber: orderNumber };
        this._sp.update(value).subscribe(function (data) {
            if (data.success) {
                _this.Orders[i]['orderStatus'] = status;
                _this.toasterService.pop('success', data.data, '');
                jQuery('#statusModal').modal('hide');
                _this.filter(_this.orderFilter);
                // this.getPortalOrders(this.page,'admin-approved','');
            }
        }, function (err) { return console.log(err); });
        // ii = 0;
        // orderNumber = 0;
        // statusReq   = 0;
    };
    SpordersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sporders',
            template: __webpack_require__("../../../../../src/app/superadmin/sporders/sporders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/sporders/sporders.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], SpordersComponent);
    return SpordersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/spsettings/spsettings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/spsettings/spsettings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <toaster-container></toaster-container>\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">Account settings</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\"><div class=\"animated fadeIn\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-6\">\n            <div class=\"card\" *ngIf=\"!storeLoading\">\n              <div class=\"card-header\">\n                Change password\n              </div>\n              <div class=\"card-body\" >\n                <form class=\"m-t\" [formGroup]=\"account\" (ngSubmit)=\"onSubmit(account.value,account)\">\n                  <div>\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['current_password'].valid && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched}\">\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" formControlName=\"current_password\">\n                      <!-- <div class=\"input-group col-md-12 password-watch\">\n                          <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                            Show\n                          </span>\n                        </div> -->\n                         <span *ngIf=\"account.controls['current_password'].hasError('required') && submitAttempt || account.controls['current_password'].hasError('required') && account.controls['current_password'].touched\">Old Password is required.</span>\n                        <span *ngIf=\"account.controls['current_password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                     </div>\n                   <div class=\"form-group\" [ngClass]=\"{'has-error':!account.controls['password'].valid && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched}\">\n                     <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"password\">\n                     <!-- <div class=\"input-group col-md-12 password-watch\">\n                       <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                         Show\n                       </span>\n                     </div> -->\n                        <span *ngIf=\"account.controls['password'].hasError('required') && submitAttempt || account.controls['password'].hasError('required') && account.controls['password'].touched\">New Password is required.</span>\n                        <span *ngIf=\"account.controls['password'].hasError('minlength') && submitAttempt\">Minimum 6 characters required.</span>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error':!account.controls['user_password_rpt'].valid   && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched}\">\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"user_password_rpt\">\n                      <!-- <div class=\"input-group col-md-12 password-watch\">\n                        <span class=\"input-group-addon\" (click)=\"showPassword($event.target)\">\n                          Show\n                        </span>\n                      </div> -->\n                        <span *ngIf=\"account.controls['user_password_rpt'].hasError('required') && submitAttempt || account.controls['user_password_rpt'].hasError('required') && account.controls['user_password_rpt'].touched\">Confirm Password is required.</span>\n                        <!-- <span *ngIf=\"!account.controls['user_password_rpt'].hasError('required') && !account.controls['user_password_rpt'].hasError('minlength')  && !account.controls.valid && submitAttempt\">Password not matched.</span> -->\n                        <span *ngIf=\"!account.controls['password'].hasError('required') && !account.controls['user_password_rpt'].hasError('required') && !account.controls['password'].hasError('minlength')   && !account.controls['user_password_rpt'].hasError('minlength') && !account.valid && submitAttempt\">Password not matched.</span>\n                    </div>\n                    <div>\n                      <button class=\"btn btn-primary\">Change Password</button>\n                    </div>\n              </div>\n            </form>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    </div>\n\n\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/spsettings/spsettings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpsettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function passwordMatcher(c) {
    console.log(c.get('password').value);
    return c.get('password').value === c.get('user_password_rpt').value
        ? null : { 'nomatch': true };
}
var SpsettingsComponent = (function () {
    function SpsettingsComponent(fb, router, toasterService, _service) {
        this.fb = fb;
        this.router = router;
        this._service = _service;
        this.submitAttempt = false;
        this.token = {};
        this.toasterService = toasterService;
        this.account = this.fb.group({
            current_password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)]],
            user_password_rpt: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)]],
        }, { validator: passwordMatcher });
    }
    SpsettingsComponent.prototype.ngOnInit = function () {
        var tokenn = localStorage.getItem("ppsPortalToken");
        this.token = JSON.parse(tokenn);
    };
    SpsettingsComponent.prototype.onSubmit = function (value, account) {
        var _this = this;
        this.submitAttempt = true;
        console.log(this.account);
        if (!this.account.valid)
            return false;
        var tkn = localStorage.getItem('ppsPortalToken');
        var token = JSON.parse(tkn);
        value['userId'] = token['userId'];
        this._service.chnagePassword(value).subscribe(function (data) {
            _this.submitAttempt = false;
            if (data.success) {
                _this.toasterService.pop('success', data.success_msg + '');
                _this.account.reset();
            }
            if (data.success == false) {
                _this.toasterService.pop('error', data.error_msg + '');
            }
        });
    };
    SpsettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spsettings',
            template: __webpack_require__("../../../../../src/app/superadmin/spsettings/spsettings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/spsettings/spsettings.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]])
    ], SpsettingsComponent);
    return SpsettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/spsidebar/spsidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-play=\"dropdown\"]\n{\n  cursor: pointer;\n}\n\ntr.ok input\n{\n  border-color: #5cb85c !important;\n}\n\ntr.ok td i.ok\n{\n  display: block !important;\n}\n\ntr.already input , input.input-error\n{\n  border-color: #f0ad4e !important;\n}\n\ntr.already td i.already\n{\n  display: block !important;\n}\n\ntr.error input\n{\n  border-color: #d9534f !important;\n}\n\ntr.error td i.error\n{\n  display: block !important;\n}\n\nul.attachments\n{\n  list-style: none;\n  padding-left: 0px;\n}\n\nul.attachments li\n{\n  font-size: 14px;\n  border: 1px #ddd solid;\n  margin-bottom: 9px;\n  padding-left: 10px;\n  position: relative;\n}\n\nul.attachments li i.fa-times\n{\n  position: absolute;\n  right: 5px;\n  top: 4px;\n}\n\n.progress.my\n{\n  width: 84px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  height: 11px;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/spsidebar/spsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<div class=\"sidebar\" style=\"height:600px;\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-panel']\"><i class=\"icon-speedometer\"></i> Dashboard</a>\n      </li>\n\n      <!-- <li class=\"nav-title\">\n        UI Elements\n      </li> -->\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-puzzle\"></i> Products</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/categories\"><i class=\"icon-star\"></i> Categories</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-products\"><i class=\"icon-star\"></i> List Products</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Regions</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-regions\"><i class=\"icon-star\"></i> List regions</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-region\"><i class=\"icon-star\"></i> Add a new region</a>\n          </li>\n        </ul>\n        </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Stores</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-stores\"><i class=\"icon-star\"></i> List Stores</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-store\"><i class=\"icon-star\"></i> Add a new store</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/new-stores-access-requests\"><i class=\"icon-star\"></i> New store requests</a>\n          </li>\n          <li class=\"nav-item hide\" hand>\n            <a class=\"nav-link\" (click)=\"importStores('openfile')\"><i class=\"icon-star\"></i> Import Stores</a>\n          </li>\n          <li class=\"nav-item hide\" hand>\n            <a class=\"nav-link\" (click)=\"Sample()\"><i class=\"icon-download\"></i> Sample Excel File</a>\n          </li>\n          <input type=\"file\" id=\"excelfile\" style=\"display:none\" (change)=\"importStores('handlefile',$event)\">\n        </ul>\n        </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> APLS</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-apls\"><i class=\"icon-star\"></i> Add APLS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-apls\"><i class=\"icon-star\"></i> List APLS</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/admin-panel/list-apls','readonly']\"><i class=\"icon-star\"></i> List APLS Readonly</a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"icons-simple-line-icons.html\"><i class=\"icon-star\"></i> Simple Line Icons</a>\n          </li> -->\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Admin</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/add-admin\"><i class=\"icon-star\"></i> Add Admin</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/list-admin\"><i class=\"icon-star\"></i> List Admins</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Reports </a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/reports/day-wise\"><i class=\"icon-star\"></i>By Day</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/reports/stores\"><i class=\"icon-star\"></i> By Stores</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/reports/product\"><i class=\"icon-star\"></i> By Product</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/reports/apls\"><i class=\"icon-star\"></i> By Apls</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/admin-panel/export-reports\"><i class=\"icon-star\"></i> Export Reports</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-panel/list-orders/','approved']\"><i class=\"icon-speedometer\"></i> Orders</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin-panel/list-notifications']\" (click)=\"getNotificationCounts();\"><i class=\"icon-speedometer\"></i> notifications  <span class=\"badge badge-warning float-right mr-2\">{{totalItem}}</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin-panel/settings\"><i class=\"icon-speedometer\"></i> Account settings</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" hand (click)=\"chngBrowsw('Newsletter')\"><i class=\"icon-speedometer\"></i> Upload Newsletter</a>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" data-play=\"dropdown\"><i class=\"icon-star\"></i> Instruction Sheets </a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"  routerLink=\"/admin-panel/ins-sheets\" ><i class=\"icon-speedometer\"></i> List Sheets</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" hand data-toggle=\"modal\" data-target=\"#mm\"><i class=\"icon-speedometer\"></i> Upload New</a>\n            <button style=\"display:none\" type=\"button\" id=\"pickk\" #pickk>Pickk</button>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/admin-panel/log-status\" ><i class=\"icon-speedometer\"></i> PPS Status</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLink=\"/admin-panel/faq-update\" ><i class=\"icon-speedometer\"></i> FAQ </a>\n      </li>\n\n\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"widgets.html\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-primary\">NEW</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"charts.html\"><i class=\"icon-pie-chart\"></i> Charts</a>\n      </li>\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        Extras\n      </li>\n      <li class=\"nav-item nav-dropdown\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"pages-login.html\" target=\"_top\"><i class=\"icon-star\"></i> Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"pages-register.html\" target=\"_top\"><i class=\"icon-star\"></i> Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"pages-404.html\" target=\"_top\"><i class=\"icon-star\"></i> Error 404</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"pages-500.html\" target=\"_top\"><i class=\"icon-star\"></i> Error 500</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item mt-auto\">\n        <a class=\"nav-link nav-link-success\" href=\"http://coreui.io/\" target=\"_top\"><i class=\"icon-cloud-download\"></i> Download CoreUI</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-link-danger\" href=\"http://coreui.io/pro/\" target=\"_top\"><i class=\"icon-layers\"></i> Try CoreUI <strong>PRO</strong></a>\n      </li> -->\n\n    </ul>\n  </nav>\n  <button class=\"sidebar-minimizer brand-minimizer\" type=\"button\"></button>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"importStores\">\n  <div class=\"modal-dialog\" style=\"max-width:92%\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Import Stores</h5>\n        <i class=\"close\"> &times; </i>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive\">\n          <table>\n            <tr>\n              <th>Store Name</th>\n              <th>Store Class</th>\n              <th>Store Email</th>\n              <th>Store Mobile</th>\n              <th>Store Address</th>\n              <th>Store City</th>\n              <th>Store State</th>\n              <th>Store Zip</th>\n              <th>User Name</th>\n              <th>User Email</th>\n              <th>User Password</th>\n              <th>Action</th>\n            </tr>\n            <tbody *ngFor=\"let str of StoreImports; let i = index\">\n              <tr [class.ok]=\"ConSheetErrors[i] == 0\" [class.error]=\"ConSheetErrors[i] == 1\" [class.already]=\"ConSheetErrors[i] == 2\">\n                <td>\n                  <!-- <i class=\"fa fa-check ok\" style=\"color:#5cb85c; display:none\"></i>\n                  <i class=\"fa fa-check already\" style=\"color:#f0ad4e; display:none\"></i>\n                  <i class=\"fa fa-check error\" style=\"color:#d9534f;  display:none\"></i> -->\n                  <input class=\"form-control required\" type=\"text\" [(ngModel)]=\"str.storeName\" style=\"width:150px\">\n                </td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeClass\" style=\"width:150px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeEmail\" style=\"width:150px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeMobile\" style=\"width:150px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeAddress\" style=\"width:150px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeCity\" style=\"width:100px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeState\" style=\"width:100px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.storeZip\" style=\"width:100px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.userName\" style=\"width:100px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.userEmail\" style=\"width:100px\"></td>\n                <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"str.userPassword\" style=\"width:150px\"></td>\n                <td class=\"text-center\"><i class=\"fa fa-trash\" (click)=\"removeStoreImport()\"></i></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"importStores('importFile')\">Import</button>\n        <button type=\"button\" name=\"button\" class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Upload Files\n        <span class=\"close\" (click)=\"hideModal()\"> &times; </span>\n      </div>\n      <div class=\"modal-body\">\n\n        <ul *ngIf=\"fileList.length > 0\" class=\"attachments\">\n          <li *ngFor=\"let file of fileList; let i = index\" [class.text-success]=\"file.percent == 100\">\n            {{ (file.name.length>30)? (file.name | slice:0:30)+'..':(file.name) }} ({{ file.size }})\n            <!-- <span *ngIf=\"file.percent != 100\">{{ file.percent }}%</span> -->\n            <!-- <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i> -->\n            <div class=\"progress my\" *ngIf=\"file.percent != 100\">\n              <div class=\"progress-bar\" [ngStyle]=\"{'width': file.percent+'%'}\">\n              </div>\n            </div>\n            <i (click)=\"removeMailAttachment(i)\" *ngIf=\"file.percent != 100\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i>\n            <!-- <i class=\"fa fa-circle-o-notch fa-spin fa-fw\" *ngIf=\"file.percent != 100\"></i> -->\n          </li>\n        </ul>\n\n\n      </div>\n      <div class=\"modal-footer\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"mm\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Upload Instruction Sheet\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sheetName\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"text-danger\" *ngIf=\"browseClicked && sheetName == ''\">Please add Sheet Title</span>\n        </div>\n        <div class=\"form-group\">\n          <button (click)=\"chngBrowsw('InstructionSheet')\" type=\"button\" name=\"button\" class=\"btn btn-default\">Attach Sheet & Upload <i class=\"fa fa-paperclip\"></i></button>\n        </div>\n        <div class=\"form-group\">\n          <ul *ngIf=\"fileList.length > 0\" class=\"attachments\">\n            <li *ngFor=\"let file of fileList; let i = index\" [class.text-success]=\"file.percent == 100\">\n              {{ (file.name.length>30)? (file.name | slice:0:30)+'..':(file.name) }} ({{ file.size }})\n              <!-- <span *ngIf=\"file.percent != 100\">{{ file.percent }}%</span> -->\n              <!-- <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i> -->\n              <div class=\"progress my\" *ngIf=\"file.percent != 100\">\n                <div class=\"progress-bar\" [ngStyle]=\"{'width': file.percent+'%'}\">\n                </div>\n              </div>\n              <i (click)=\"removeMailAttachment(i)\" *ngIf=\"file.percent != 100\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-check\" *ngIf=\"file.percent == 100\"></i>\n              <!-- <i class=\"fa fa-circle-o-notch fa-spin fa-fw\" *ngIf=\"file.percent != 100\"></i> -->\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\">Upload</button>\n      </div> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/spsidebar/spsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xlsx_to_json_service__ = __webpack_require__("../../../../../src/app/superadmin/xlsx-to-json-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SpsidebarComponent = (function () {
    function SpsidebarComponent(toasterService, _sp) {
        this._sp = _sp;
        this.StoreImports = [];
        this.xlsxToJsonService = new __WEBPACK_IMPORTED_MODULE_2__xlsx_to_json_service__["a" /* XlsxToJsonService */]();
        this.ConSheetChunks = [];
        this.ConSheetErrors = [];
        this.conImportStarted = false;
        this.fileList = [];
        this.isPluploadReady = false;
        this.browseClicked = false;
        // @ViewChild('pickfiles') pickfiles: ElementRef;
        this.pickk = 'pickk';
        this.uploadType = '';
        this.sheetName = '';
        this.toasterService = toasterService;
        this.getNotificationCounts();
    }
    SpsidebarComponent.prototype.hideModal = function () {
        this.fileList = [];
        jQuery('#modal').modal('hide');
    };
    SpsidebarComponent.prototype.ngOnInit = function () {
        this.subscription = this.addPlupload();
    };
    SpsidebarComponent.prototype.getNotificationCounts = function () {
        var _this = this;
        this._sp.NotificationCount().subscribe(function (data) {
            var thiss = _this;
            setTimeout(function () {
                thiss.totalItem = data.data.total_rows;
            }, 500);
        }, function (err) {
            if (err.status == 409) {
                _this.totalItem = 0;
            }
        });
    };
    SpsidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SpsidebarComponent.prototype.addPlupload = function () {
        var _this = this;
        return this.addPluploadScript()
            .subscribe(function () {
            _this.isPluploadReady = true;
            _this.initPlupload();
        });
    };
    SpsidebarComponent.prototype.addPluploadScript = function () {
        var id = 'plupload-sdk';
        // Return immediately if the script tag is already here.
        if (document.getElementById(id)) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(true);
        }
        var js, fjs = document.getElementsByTagName('script')[0];
        js = document.createElement('script');
        js.id = id;
        js.src = "//unpkg.com/plupload@2.3.2/js/plupload.full.min.js";
        fjs.parentNode.insertBefore(js, fjs);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].timer(1000).take(1); // @TODO: Replace this with more robust code
    };
    SpsidebarComponent.prototype.showmodal = function () {
        if (this.uploadType != 'InstructionSheet')
            jQuery('#modal').modal('show');
    };
    // Configure and initialize Plupload.
    SpsidebarComponent.prototype.initPlupload = function () {
        var _this = this;
        var thiss = this;
        //console.log('initPlupload -- this.pickfiles.nativeElement', this.pickfiles.nativeElement);
        this.uploader = new plupload.Uploader({
            runtimes: 'html5,html4',
            browse_button: this.pickk,
            url: 'https://www.productprotectionsolutions.com/order/api/upload-file',
            // url : 'http://localhost/dibcase/api/upload-file',
            // url : 'https://httpbin.org/post',
            chunk_size: '5000kb',
            multi_selection: false,
            max_retries: 3,
            filters: {
                max_file_size: '1000mb',
            },
            multipart_params: {
                "type": this.uploadType
            },
            init: {
                PostInit: function () {
                    _this.fileList = [];
                },
                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        _this.fileList.push({
                            id: file.id,
                            name: file.name,
                            size: plupload.formatSize(file.size),
                            percent: 0
                        });
                    }, _this.showmodal(), _this.uploader.start());
                },
                FileUploaded: function (up, file, result) {
                    // console.error(file);
                    var json = JSON.parse(result.response);
                    // console.error(json);
                    // console.error(thiss);
                    for (var i in thiss.fileList) {
                        // console.log(i);
                        // console.log(file.id);
                        // console.log(thiss.fileList[i]['id']);
                        if (file.id == thiss.fileList[i]['id'])
                            thiss.fileList[i]['link'] = json.url;
                        thiss.browseClicked = false;
                        thiss.toasterService.pop('success', 'Successfully uploaded');
                        setTimeout(function () {
                            jQuery('#mm').modal('hide');
                            jQuery('#modal').modal('hide');
                            thiss.fileList = [];
                        }, 1000);
                    }
                },
                // Update the upload progress in the list of files displayed in the template.
                UploadProgress: function (up, file) {
                    var index = _this.fileList.findIndex(function (f) { return f.id == file.id; });
                    _this.fileList[index].percent = file.percent;
                },
                Error: function (up, err) {
                    console.error(err);
                }
            }
        });
        this.uploader.init();
    };
    SpsidebarComponent.prototype.removeMailAttachment = function (i) {
        this.uploader.removeFile(this.fileList[i]['id']);
        this.fileList.splice(i, 1);
    };
    SpsidebarComponent.prototype.ngAfterViewInit = function () {
        // console.log(jQuery);
        jQuery('[data-play="dropdown"]').click(function () {
            jQuery(this).parent('.nav-dropdown').toggleClass('open');
        });
    };
    SpsidebarComponent.prototype.importStores = function (action, event) {
        var _this = this;
        if (event === void 0) { event = null; }
        this.ConSheetErrors = [];
        if (action == 'openfile')
            jQuery('#excelfile').click();
        else if (action == 'handlefile') {
            this.StoreImports = [];
            var file = event.target.files[0];
            event.target.value = '';
            var error = false;
            var arr = ["storeName", "storeClass", "storeEmail", "storeMobile", "storeAddress", "storeCity", "storeState", "storeZip", "userName", "userEmail", "userPassword"];
            if ((file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xls') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xlsx') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'csv')) {
                this.toasterService.pop('error', 'Please select valid excel file');
            }
            else {
                // console.log('fdsfs')
                this.xlsxToJsonService.processFileToJson({}, file).subscribe(function (data) {
                    _this.StoreImports = [];
                    var keys = Object.keys(data['sheets']);
                    // console.log(data);
                    // console.log(keys);
                    for (var i_1 = 0; i_1 < keys.length; i_1++) {
                        var sheet = data['sheets'][keys[i_1]];
                        for (var j_1 = 0; j_1 < sheet.length; j_1++) {
                            var row = sheet[j_1];
                            var keys2 = Object.keys(row);
                            for (var k = 0; k < keys2.length; k++) {
                                if (arr.indexOf(keys2[k]) == -1) {
                                    delete row[keys2[k]];
                                }
                            }
                            _this.StoreImports.push(row);
                        }
                    }
                    //  console.log(this.StoreImports);
                    jQuery('#importStores').modal('show');
                });
            }
            jQuery('#importStores').modal('show');
        }
        else if (action == 'importFile') {
            var inputs = jQuery('#importStores').find('input.required');
            var error = false;
            for (var i_2 = 0; i_2 < inputs.length; i_2++) {
                var input = inputs[i_2];
                if (input.value == '') {
                    error = true;
                    jQuery(input).addClass('input-error');
                }
                else {
                    jQuery(input).removeClass('input-error');
                }
            }
            // console.log(error);
            if (error)
                return false;
            this.conImportStarted = true;
            var toast = {
                type: 'info',
                title: 'Importing...',
                timeout: 0
            };
            this.toasterService.clear();
            this.toasterService.pop(toast);
            var i, j, temparray, chunk = 2;
            this.ConSheetChunks = [];
            for (i = 0, j = this.StoreImports.length; i < j; i += chunk) {
                this.ConSheetChunks.push(this.StoreImports.slice(i, i + chunk));
            }
            this.chunkUpload();
        }
    };
    SpsidebarComponent.prototype.chunkUpload = function () {
        var _this = this;
        var loop = function (index, array) {
            var data = {};
            data['data'] = array;
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var variable = array_1[_i];
                var keys = Object.keys(variable);
                for (var i = 0; i < keys.length; i++) {
                    // variable[keys[i]]
                    if (variable[keys[i]].indexOf('&') > -1) {
                        var searchStr = "&";
                        var replaceStr = "%26";
                        var re = new RegExp(searchStr, "g");
                        var resultnew = variable[keys[i]].replace(re, replaceStr);
                    }
                    else {
                        var resultnew = variable[keys[i]];
                    }
                    variable[keys[i]] = resultnew;
                }
            }
            _this._sp.StoreImports(data)
                .subscribe(function (result) {
                var ok = 0;
                var notok = 0;
                var already = 0;
                var msg = '';
                console.log(result);
                _this.ConSheetErrors = _this.ConSheetErrors.concat(result.response);
                var idd = index + 1;
                if (_this.ConSheetChunks[idd] !== void 0)
                    loop(idd, _this.ConSheetChunks[idd]);
                if (idd == (_this.ConSheetChunks.length - 1)) {
                    for (var i = 0; i < _this.ConSheetErrors.length; i++) {
                        if (_this.ConSheetErrors[i] == 0)
                            ok++;
                        else if (_this.ConSheetErrors[i] == 1)
                            notok++;
                        else if (_this.ConSheetErrors[i] == 2)
                            already++;
                    }
                    if (notok != 0 || already != 0) {
                        msg = ok + ' imported, ' + notok + ' Failed, ' + already + ' Already Imported';
                    }
                    _this.ConSheetChunks = [];
                    _this.toasterService.clear();
                    _this.toasterService.pop('success', 'Contacts Import Completed,' + msg);
                    //  jQuery('#import-contacts').modal('hide');
                    _this.conImportStarted = false;
                }
            });
        };
        loop(0, this.ConSheetChunks[0]);
    };
    SpsidebarComponent.prototype.removeStoreImport = function (index) {
        this.StoreImports.splice(index, 1);
    };
    SpsidebarComponent.prototype.Sample = function () {
        window.location.href = 'http://productprotectionsolutions.com/order/store.xlsx';
    };
    SpsidebarComponent.prototype.uploadCatalog = function () {
    };
    SpsidebarComponent.prototype.chngBrowsw = function (type) {
        this.browseClicked = true;
        if (type == 'InstructionSheet' && this.sheetName == '') {
            return false;
        }
        this.uploadType = type;
        this.uploader.setOption('multipart_params', {
            "type": this.uploadType,
            "sheetName": this.sheetName,
        });
        jQuery('#pickk').trigger('click');
    };
    SpsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spsidebar',
            template: __webpack_require__("../../../../../src/app/superadmin/spsidebar/spsidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/spsidebar/spsidebar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3__superadmin_service__["a" /* SuperadminService */]])
    ], SpsidebarComponent);
    return SpsidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body label\n{\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spheader></app-spheader>\n<div class=\"app-body\">\n  <app-spsidebar></app-spsidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/admin-panel/list-orders/','approved']\">Dashboard</a></li>\n      <li class=\"breadcrumb-item active\">New store requests</li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\" style=\"opacity: 1;\">\n        <div class=\"animated fadeIn\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              System access requests\n            </div>\n            <div class=\"card-body\">\n              <div *ngIf=\"Stores.length == 0\">\n                No new Requests found\n              </div>\n              <div class=\"table-responsive\" *ngIf=\"Stores.length != 0\">\n                <table class=\"table table-bordered table-responsive\">\n                  <tr>\n                    <th>Store name</th>\n                    <th>Store email</th>\n                    <th>Store Mobile</th>\n                    <th>Store City</th>\n                    <th>Store Address</th>\n                    <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"let str of Stores; let i = index\">\n                    <td><a (click)=\"openStore(i)\">{{ str.sys_name }}</a></td>\n                    <td>{{ str.sys_mailEmail }}</td>\n                    <td>{{ str.sys_mailPhone }}</td>\n                    <td>{{ str.sys_city }}</td>\n                    <td>{{ str.sys_bussAddress }}</td>\n                    <td align=\"center\" valign=\"center\">\n                      <button (click)=\"req(1,str.sys_Id)\" type=\"button\" class=\"btn btn-primary\">Approve</button>\n                      <button (click)=\"req(2,str.sys_Id)\" type=\"button\" class=\"btn btn-default mt-2 mt-sm-0\">Deny</button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </main>\n</div>\n\n<div class=\"modal\" id=\"modal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        Store Details\n        <span class=\"close\" data-dismiss=\"modal\"> &times; </span>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Name and Title</label><br>\n              {{ StoreExpanded.sys_name}}\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Company  Name</label><br>\n              {{ StoreExpanded.sys_companyName}}\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"\">Business Address</label><br>\n              {{ StoreExpanded.sys_bussAddress}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">City</label><br>\n              {{ StoreExpanded.sys_city}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">State/Province</label><br>\n              {{ StoreExpanded.sys_state}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">Zip</label><br>\n              {{ StoreExpanded.sys_zip}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">Country</label><br>\n              {{ StoreExpanded.sys_country}}\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            {{ StoreExpanded.StoreExpanded}}\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"\">FEIN or Other Identifying Number</label><br>\n              {{ StoreExpanded.sys_ideNumber}}\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"\">Mailing Address:</label><br>\n              {{ StoreExpanded.sys_mailAddress}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">City</label><br>\n              {{ StoreExpanded.sys_mailCity}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">State/Province</label><br>\n              {{ StoreExpanded.sys_mailState}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">Zip</label><br>\n              {{ StoreExpanded.sys_mailZip}}\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label for=\"\">Phone Number</label><br>\n              {{ StoreExpanded.sys_mailPhone}} ext. {{ StoreExpanded.sys_mailExt}}\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Email Address of Primary Contact:</label><br>\n              {{ StoreExpanded.sys_mailEmail}}\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"\">Number of Locations</label><br>\n              {{ StoreExpanded.sys_numberOfLoc}}\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"\"> Any International? </label><br>\n            {{ StoreExpanded.sys_anyInternational}}\n          </div>\n\n          <div class=\"col-md-6\">\n            <label for=\"\">Annual Spend EAS/LP Products (optional)</label><br>\n            {{StoreExpanded.sys_annualSpendEas}}\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreaccessrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoreaccessrequestsComponent = (function () {
    function StoreaccessrequestsComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.loginsubmitted = false;
        this.Stores = [];
        this.orderLoading = true;
        this.StoreExpanded = {};
        this.toasterService = toasterService;
    }
    StoreaccessrequestsComponent.prototype.ngOnInit = function () {
        this.sysAccessReq();
    };
    StoreaccessrequestsComponent.prototype.sysAccessReq = function () {
        var _this = this;
        this.orderLoading = true;
        this._service.sysAccessReq().subscribe(function (data) {
            _this.orderLoading = false;
            if (data.success) {
                _this.Stores = data.data;
            }
        }, function (err) {
            _this.orderLoading = false;
            _this.Stores = [];
        });
    };
    StoreaccessrequestsComponent.prototype.req = function (st, id) {
        var _this = this;
        this._service.enableStoreUserRequest(st, id).subscribe(function (data) {
            _this.orderLoading = false;
            if (data.success) {
                _this.sysAccessReq();
            }
        }, function (err) {
            _this.orderLoading = false;
        });
    };
    StoreaccessrequestsComponent.prototype.openStore = function (i) {
        this.StoreExpanded = this.Stores[i];
        jQuery('#modal').modal('show');
    };
    StoreaccessrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storeaccessrequests',
            template: __webpack_require__("../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/storeaccessrequests/storeaccessrequests.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]])
    ], StoreaccessrequestsComponent);
    return StoreaccessrequestsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/superadmin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/superadmin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<toaster-container></toaster-container>\n\n<div class=\"container\" style=\"padding-top:100px\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"text-center\">\n        <a routerLink=\"/\">\n          <img src=\"assets/img/PPS-Logo-1.png\"/>\n        </a>\n      </div>\n      <br>\n      <div class=\"card-group\">\n        <div class=\"card p-4\">\n          <div class=\"card-body\">\n            <p class=\"text-muted\">Sign In to your account</p>\n            <form [formGroup]=\"login\" (ngSubmit)=\"submitForm(login.value)\">\n              <div class=\"input-group flex-wrap mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\"  [formControl]=\"login.controls['username']\" [ngClass]=\"{'is-invalid':!login.controls['username'].valid   && loginsubmitted}\" >\n                <br>\n                <div class=\"invalid-feedback w-100\" *ngIf=\"login.controls['username'].hasError('required')    && loginsubmitted\">You must include a Username.</div>\n              </div>\n              <div class=\"input-group flex-wrap mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  [formControl]=\"login.controls['password']\" [ngClass]=\"{'is-invalid':!login.controls['password'].valid   && loginsubmitted}\">\n                <br>\n                <div class=\"invalid-feedback w-100\"  *ngIf=\"login.controls['password'].hasError('required')    && loginsubmitted\">You must include a Password.</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-12 col-md-12 d-flex flex-wrap justify-content-center justify-content-md-between login_btn_out align-items-md-center\">\n                  <button type=\"submit\" class=\"btn btn-primary px-4 btn-block-xs-only   \">Login</button>\n                </div>\n                <!-- <div class=\"col-6 text-right\">\n                  <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div> -->\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n          <div class=\"card-body text-center\">\n            <div>\n              <h2>Sign up</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n              <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/superadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuperadminComponent = (function () {
    function SuperadminComponent(fb, _http, _service, router, toasterService) {
        this._http = _http;
        this._service = _service;
        this.router = router;
        this.loginsubmitted = false;
        this.responseStatus = [];
        this.toasterService = toasterService;
        this.http = _http;
        this.login = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    SuperadminComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.loginsubmitted = true;
        if (!this.login.valid) {
            return false;
        }
        this.toasterService.pop('info', ' Loading...', '');
        localStorage.removeItem('dbcse_reminders');
        this._service.login(value).subscribe(function (data) {
            if (data.status == 200) {
                _this.loginsubmitted = false;
                _this.toasterService.clear();
                _this.toasterService.pop('success', 'Login Successful,' + ' Redirecting...', '');
                var tkn = JSON.stringify(data.data);
                localStorage.setItem('ppsSuperAdminToken', tkn);
                setTimeout(function (router) {
                    _this.router.navigate(['/admin-panel']);
                }, 1000);
            }
            else {
                _this.toasterService.clear();
                _this.toasterService.pop('error', 'Something Wrong', '');
            }
        }, function (err) {
            _this.toasterService.clear();
            if (err.status == 409)
                _this.toasterService.pop('error', 'Invalid Login Details', '');
            else
                _this.toasterService.pop('error', 'Something wro ng,try again', '');
        });
    };
    SuperadminComponent.prototype.ngOnInit = function () {
    };
    SuperadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-superadmin',
            template: __webpack_require__("../../../../../src/app/superadmin/superadmin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/superadmin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]])
    ], SuperadminComponent);
    return SuperadminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/superadmin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperadminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_globals__ = __webpack_require__("../../../../../src/app/shared/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuperadminService = (function () {
    function SuperadminService(_http) {
        this._http = _http;
        this.returnCommentStatus = [];
        this.http = _http;
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        this.token = JSON.parse(tkn);
    }
    SuperadminService.prototype.login = function (value) {
        var form = {
            'useremail': value.username,
            'password': value.password,
            'deviceId': value.password,
            'registerId': value.password,
            'usertype': 1,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/login/', form, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.addStore = function (value) {
        console.log('in serv');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addStoreUser/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.addRegion = function (value) {
        console.log('in serv');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addRegion/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.listStores = function (value) {
        if (value['text'] == '') {
            value['text'] = 'all';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeUserListing/page/' + value['page'] + '/perpage/' + value['perpage'] + '/text/' + value['text'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.listregions = function (value) {
        if (value['text'] == '') {
            value['text'] = 'all';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/regionListing/page/' + value['page'] + '/perpage/' + value['perpage'] + '/text/' + value['text'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getexportReportData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getexportReportData', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.exportReports = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/exportReports', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.exportproducts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/exportProducts', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.listNotifications = function (value) {
        if (value['text'] == '') {
            value['text'] = 'all';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeNotificationListing/page/' + value['page'] + '/perpage/' + value['perpage'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.NotificationCount = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/NotificationCount', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.storeDetail = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeDetails/storeid/' + value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.regionDetail = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/regionDetails/regionid/' + value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateStore = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateStoreUserDetail/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateRegion = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateRegion/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.deleteStore = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/activeUserStatus/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.deleteNotification = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/deleteNotification/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.insert = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/insert/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.delete = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/delete/id/' + value['id'] + '/type/' + value['type'], { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.update = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/update/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateOrderDetails = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateOrderDetails/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getWhere = function (type, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-where/type/' + type + '/id/' + id, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.upload = function (fileToUpload) {
        var input = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        input.append("file", fileToUpload);
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/upload-image/', input, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.submitCat = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/submit-cat/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getCats = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-cat/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.submitProduct = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/submit-product/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getProducts = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/productListing/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.productDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getProductDetail/' + id, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.submitapdmForm = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addApdmUser/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.apdmUserListing = function (page, type, perpage, searchText) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/apdmUserListing/' + page + '/' + perpage + '/' + type + '/' + searchText, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.apdmDetails = function (id, ApdmType) {
        if (ApdmType == 9)
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/exaplDetails/';
        else
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/apdmDetails/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(url + id, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateApdmUserDetail = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateApdmUserDetail/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getAssignes = function (apdm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getAssignes/' + apdm, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getAssignesRegionStore = function (apdm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getAssignesRegionStore/' + apdm, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getRegionsAssignes = function (apdm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getRegionsAssignes/' + apdm, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getExRegionsAssignes = function (apdm) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getExRegionsAssignes/' + apdm, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getExAplAssignes = function (apl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getExAplAssignes/' + apl, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.sysAccessReq = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/sysAccessReq/', { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.enableStoreUserRequest = function (st, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/enableStoreUserRequest/' + id + '/' + st, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.submitAdmin = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/addAdminData/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.ListAdmin = function (page, perpage) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/adminUserListing/' + page + '/' + perpage, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getAdminDetails = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/getAdminDetails/' + admin, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateAdmin = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateAdminDetail/', value, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getPortalOrders = function (type, id, text, page, perpage) {
        if (id == '')
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-portal-orders/' + page + '/' + perpage + '/' + type + '/' + text;
        else
            var url = __WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-portal-orders/' + page + '/' + perpage + '/' + type + '/' + id + '/' + text;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.orderDetails = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/order-details/' + v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.chnagePassword = function (v) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/change-password/', v, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.getlimit = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-limit/').map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.inventory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/get-inventory/' + id).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.updateInventory = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/updateInventory/', data, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.StoreImports = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ApiKey', this.token['apiKey']);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/storeImports/', data, { headers: headers }).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.convert = function (id, type) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/aplAlter/' + id + '/' + type).map(function (res) { return res.json() || {}; });
    };
    SuperadminService.prototype.dashboardInfo = function (a) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_globals__["a" /* baseUrl */] + 'api/dashboard-info/' + a).map(function (res) { return res.json() || {}; });
    };
    SuperadminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SuperadminService);
    return SuperadminService;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/update-admin/update-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/update-admin/update-admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <form *ngIf=\"!Loading\" [formGroup]=\"addAdmin\" (ngSubmit)=\"submitAdmin(addAdmin.value)\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminName'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin name</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin Name\" formControlName=\"adminName\" [(ngModel)]=\"adminDetails.adminName\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminEmail'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin email</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin email\" formControlName=\"adminEmail\"  [(ngModel)]=\"adminDetails.adminEmail\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminMobile'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin mobile</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin mobile\" formControlName=\"adminMobile\"  [(ngModel)]=\"adminDetails.adminMobile\">\n                      <span *ngIf=\"addAdmin.controls['adminMobile'].hasError('pattern') && adminSubmission\">Enter Valid Price</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminAddress'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin Address</label>\n                      <textarea class=\"form-control\" rows=\"4\" cols=\"80\" formControlName=\"adminAddress\" placeholder=\"Address\"  [(ngModel)]=\"adminDetails.adminAddress\"></textarea>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminCity'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin City</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin city\" formControlName=\"adminCity\"  [(ngModel)]=\"adminDetails.adminCity\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminState'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin State</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin state\" formControlName=\"adminState\"  [(ngModel)]=\"adminDetails.adminState\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminZip'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin Zip</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin zip\" formControlName=\"adminZip\"  [(ngModel)]=\"adminDetails.adminZip\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['adminCountry'].valid   && adminSubmission}\">\n                      <label for=\"\">Admin Country</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Admin country\" formControlName=\"adminCountry\"  [(ngModel)]=\"adminDetails.adminCountry\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <label for=\"\"><input type=\"checkbox\" (change)=\"ShowCredendtials()\">Edit Credentials</label>\n                  </div>\n                  <div class=\"col-md-4\" *ngIf='isCredentials'>\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!addAdmin.controls['userPassword'].valid   && adminSubmission}\">\n                      <label for=\"\">Password</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"userPassword\">\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n            <div class=\"row pull-right\">\n              <div class=\"col-md-12\">\n                <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary pull-right\">\n              </div>\n            </div>\n          </form>\n          <div class=\"col-md-12\" *ngIf=\"Loading\" style=\"height:200px\">\n            <div class=\"loader\">\n              <div class=\"loader-inner ball-pulse\">\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n                <div class=\"my-loader\"></div>\n              </div>\n            </div>\n          </div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/update-admin/update-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateAdminComponent = (function () {
    function UpdateAdminComponent(fb, router, _sp, toasterService) {
        this.fb = fb;
        this.router = router;
        this._sp = _sp;
        this.adminSubmission = false;
        this.Loading = false;
        this.isCredentials = false;
        this.adminDetails = {};
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toasterService = toasterService;
        this.addAdmin = this.fb.group({
            adminName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminEmail: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminMobile: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[0-9]*')]],
            adminAddress: [''],
            adminCity: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminState: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminZip: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            adminCountry: [''],
            userPassword: [''],
        });
    }
    UpdateAdminComponent.prototype.ngOnInit = function () {
        this.getAdmin(this.admin);
    };
    UpdateAdminComponent.prototype.ngAfterViewInit = function () {
    };
    UpdateAdminComponent.prototype.getAdmin = function (admin) {
        var _this = this;
        this.Loading = true;
        this._sp.getAdminDetails(admin).subscribe(function (data) {
            _this.Loading = false;
            _this.adminDetails = data.data;
        }, function (err) { return console.log(err); });
    };
    UpdateAdminComponent.prototype.submitAdmin = function (v) {
        var _this = this;
        this.adminSubmission = true;
        if (!this.addAdmin.valid) {
            return false;
        }
        v['userId'] = this.admin;
        this._sp.updateAdmin(v).subscribe(function (response) {
            if (response.success) {
                _this.onSuccess.emit(response);
            }
            else {
            }
        }, function (err) {
        });
    };
    UpdateAdminComponent.prototype.ShowCredendtials = function () {
        this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
        if (this.isCredentials)
            this.addAdmin.controls['userPassword'].enable();
        else
            this.addAdmin.controls['userPassword'].disable();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UpdateAdminComponent.prototype, "admin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UpdateAdminComponent.prototype, "onSuccess", void 0);
    UpdateAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-admin',
            template: __webpack_require__("../../../../../src/app/superadmin/update-admin/update-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/update-admin/update-admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */]])
    ], UpdateAdminComponent);
    return UpdateAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/update-stor/update-stor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/superadmin/update-stor/update-stor.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!storeDetailsLoading\" [formGroup]=\"updateStore\" (ngSubmit)=\"submitStoreForm(updateStore.value)\">\n  <!-- <div class=\"form-group\" [ngClass]=\"{'has-error':!updateStore.controls['region_id'].valid   && storeAddTrue}\">\n    <label for=\"company\">Select region</label>\n  <select class=\"form-control\" [(ngModel)]=\"storeDetails.region_id\" formControlName=\"region_id\" name=\"\" required>\n    <option value=\"\">Select region</option>\n  <<option *ngFor=\"let region of regions\" value=\"{{region.id}}\">{{region.regionName}}</option>\n  </select>\n  </div> -->\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateStore.controls['storeName'].valid   && storeUpdateTrue}\">\n    <label for=\"company\">Store name</label>\n    <input class=\"form-control\" id=\"company\" placeholder=\"Enter Store name\" type=\"text\" formControlName=\"storeName\" [(ngModel)]=\"storeDetails.storeName\">\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-12\">\n      <label for=\"company\">Store class</label>\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 1\" (click)=\"selectStoreClass(1)\">Class 1</button>\n        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 2\" (click)=\"selectStoreClass(2)\">Class 2</button>\n        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 3\" (click)=\"selectStoreClass(3)\">Class 3</button>\n        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 4\" (click)=\"selectStoreClass(4)\">Class 4</button>\n        <button type=\"button\" class=\"btn btn-primary\" [class.activee]=\"storeClass == 5\" (click)=\"selectStoreClass(5)\">Class 5</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!updateStore.controls['storeEmail'].valid   && storeUpdateTrue}\">\n      <label for=\"vat\">Store email</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store email\" type=\"text\" formControlName=\"storeEmail\"  [(ngModel)]=\"storeDetails.storeEmail\">\n    </div>\n    <div class=\"form-group col-md-6\" [ngClass]=\"{'has-error':!updateStore.controls['storeMobile'].valid   && storeUpdateTrue}\">\n      <label for=\"vat\">Store Mobile</label>\n      <input class=\"form-control\" id=\"vat\" placeholder=\"Enter Store Mobile\" type=\"text\" formControlName=\"storeMobile\"  [(ngModel)]=\"storeDetails.storeMobile\">\n    </div>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!updateStore.controls['storeAddress'].valid   && storeUpdateTrue}\">\n    <label for=\"street\">Store address</label>\n    <textarea class=\"form-control\" placeholder=\"Enter Store address\" formControlName=\"storeAddress\" rows=\"2\" cols=\"80\" [(ngModel)]=\"storeDetails.storeAddress\"></textarea>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-sm-12\" [ngClass]=\"{'has-error':!updateStore.controls['storeCity'].valid   && storeUpdateTrue}\">\n      <label for=\"city\">Store city</label>\n      <input class=\"form-control\" id=\"city\" placeholder=\"Enter store city\" type=\"text\" formControlName=\"storeCity\" [(ngModel)]=\"storeDetails.storeCity\">\n    </div>\n  </div>\n<!--/.row-->\n<div class=\"row\">\n  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!updateStore.controls['storeState'].valid   && storeUpdateTrue}\">\n    <label for=\"city\">Store State</label>\n    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store State\" type=\"text\" formControlName=\"storeState\" [(ngModel)]=\"storeDetails.storeState\">\n  </div>\n  <div class=\"form-group col-sm-6\" [ngClass]=\"{'has-error':!updateStore.controls['storeZip'].valid   && storeUpdateTrue}\">\n    <label for=\"city\">Store Zip</label>\n    <input class=\"form-control\" id=\"city\" placeholder=\"Enter store Zip\" type=\"text\" formControlName=\"storeZip\" [(ngModel)]=\"storeDetails.storeZip\">\n  </div>\n</div>\n\n\n<div class=\"\">\n  <label for=\"\">\n    <input (change)=\"ShowCredendtials()\" type=\"checkbox\" name=\"\" value=\"\">\n    <b style=\"vertical-align: super\">Credentials</b>\n  </label>\n</div>\n  <div *ngIf=\"isCredentials\" class=\"form-group\" [ngClass]=\"{'has-error':!updateStore.controls['userPassword'].valid   && storeUpdateTrue}\">\n    <label for=\"country\">Password</label>\n    <input class=\"form-control\" id=\"country\" placeholder=\"Enter password\" type=\"text\" formControlName=\"userPassword\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"submit\" value=\"Update Store\" class=\"btn btn-primary\">\n  </div>\n</form>\n\n<div class=\"loader\" *ngIf=\"storeDetailsLoading\" style=\"padding-top:100px\">\n  <div class=\"loader-inner ball-pulse\">\n    <div class=\"my-loader\"></div>\n    <div class=\"my-loader\"></div>\n    <div class=\"my-loader\"></div>\n  </div>\n</div>\n\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/superadmin/update-stor/update-stor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateStorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_service__ = __webpack_require__("../../../../../src/app/superadmin/superadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailOrEmpty(control) {
    return control.value === '' ? null : __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email(control);
}
var UpdateStorComponent = (function () {
    function UpdateStorComponent(router, _sp, toasterService, fb) {
        this.router = router;
        this._sp = _sp;
        this.fb = fb;
        this.storeUpdateTrue = false;
        this.storeDetails = {};
        this.regions = [];
        this.onSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCredentials = false;
        this.storeDetailsLoading = true;
        this.storeClass = 1;
        this.toasterService = toasterService;
        this.updateStore = fb.group({
            'storeName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'storeEmail': ['', emailOrEmpty],
            'storeMobile': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')]],
            'storeAddress': [''],
            'storeCity': [''],
            //'region_id'     : [''],
            'storeState': [''],
            'storeZip': [''],
            'userPassword': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(6)]],
        });
    }
    UpdateStorComponent.prototype.ngOnInit = function () {
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this.storeDetail();
        //  this.listregions(1);
        this.updateStore.controls['userPassword'].disable();
    };
    UpdateStorComponent.prototype.storeDetail = function () {
        var _this = this;
        this._sp.storeDetail(this.storeToEdit).subscribe(function (data) {
            _this.storeDetails = data.data;
            if (_this.storeDetails['storeClass'] == 0)
                _this.storeClass = 1;
            else
                _this.storeClass = _this.storeDetails['storeClass'];
            console.log(_this.storeClass);
            _this.storeDetailsLoading = false;
        }, function (err) { return console.log(err); });
    };
    // listregions(e)
    // {
    //   var value = {};
    //   value['perpage'] = 100000000000000000000;
    //   value['page'] = e;
    //   value['text'] = '';
    //
    //     this._sp.listregions(value).subscribe(
    //       data => {
    //         var thiss = this;
    //          setTimeout(function(){
    //            thiss.regions = data.data.result;
    //
    //          }, 500);
    //       },
    //       err => {
    //         if(err.status == 409)
    //         {
    //           this.regions = [];
    //
    //         }
    //       }
    //    );
    //    return e;
    // }
    UpdateStorComponent.prototype.submitStoreForm = function (value) {
        var _this = this;
        this.storeUpdateTrue = true;
        if (!this.updateStore.valid) {
            return false;
        }
        value['userId'] = this.storeDetails['storeUserId'];
        value['storeClass'] = this.storeClass;
        var tkn = localStorage.getItem('ppsSuperAdminToken');
        var tknn = JSON.parse(tkn);
        this._sp.updateStore(value).subscribe(function (data) {
            if (data.success) {
                _this.onSuccess.emit(data);
            }
        }, function (err) { return console.log(err); });
    };
    UpdateStorComponent.prototype.ShowCredendtials = function () {
        this.isCredentials == true ? this.isCredentials = false : this.isCredentials = true;
        if (this.isCredentials)
            this.updateStore.controls['userPassword'].enable();
        else
            this.updateStore.controls['userPassword'].disable();
    };
    UpdateStorComponent.prototype.selectStoreClass = function (c) {
        this.storeClass = c;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UpdateStorComponent.prototype, "storeToEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UpdateStorComponent.prototype, "onSuccess", void 0);
    UpdateStorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-stor',
            template: __webpack_require__("../../../../../src/app/superadmin/update-stor/update-stor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/superadmin/update-stor/update-stor.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__superadmin_service__["a" /* SuperadminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], UpdateStorComponent);
    return UpdateStorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/superadmin/xlsx-to-json-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XlsxToJsonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__ = __webpack_require__("../../../../ts-xlsx/lib/main.browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * This is use to conver excel sheet into json object
 */
var XlsxToJsonService = (function () {
    function XlsxToJsonService() {
    }
    XlsxToJsonService.prototype.processFileToJson = function (object, file) {
        var reader = new FileReader();
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            reader.onload = function (e) {
                var data = e.target['result'];
                var workbook = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["read"](data, {
                    type: 'binary'
                });
                object.sheets = _this.parseWorksheet(workbook, true, true);
                observer.next(object);
                observer.complete();
            };
            reader.readAsBinaryString(file);
        });
    };
    XlsxToJsonService.prototype.parseWorksheet = function (workbook, readCells, toJSON) {
        if (toJSON === true) {
            return this.to_json(workbook);
        }
        var sheets = {};
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEachRight"](workbook.SheetNames, function (sheetName) {
            var sheet = workbook.Sheets[sheetName];
            sheets[sheetName] = this.parseSheet(sheet, readCells);
        });
        return sheets;
    };
    XlsxToJsonService.prototype.parseSheet = function (sheet, readCells) {
        var range = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].decode_range(sheet['!ref']);
        var sheetData = [];
        if (readCells === true) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forEachRight"](__WEBPACK_IMPORTED_MODULE_2_lodash__["range"](range.s.r, range.e.r + 1), function (row) {
                var rowData = [];
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEachRight"](__WEBPACK_IMPORTED_MODULE_2_lodash__["range"](range.s.c, range.e.c + 1), function (column) {
                    var cellIndex = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].encode_cell({
                        'c': column,
                        'r': row
                    });
                    var cell = sheet[cellIndex];
                    rowData[column] = cell ? cell.v : undefined;
                });
                sheetData[row] = rowData;
            });
        }
        return {
            'sheet': sheetData,
            'name': sheet.name,
            'col_size': range.e.c + 1,
            'row_size': range.e.r + 1
        };
    };
    XlsxToJsonService.prototype.to_json = function (workbook) {
        var result = {};
        workbook.SheetNames.forEach(function (sheetName) {
            var roa = __WEBPACK_IMPORTED_MODULE_3_ts_xlsx__["utils"].sheet_to_json(workbook.Sheets[sheetName]);
            if (roa.length > 0) {
                result[sheetName] = roa;
            }
        });
        return result;
    };
    XlsxToJsonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], XlsxToJsonService);
    return XlsxToJsonService;
}());



/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n\n<p>\n\n<input type=\"file\" #pickfiles (change)=\"importStores('handlefile',$event)\">\n\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__superadmin_xlsx_to_json_service__ = __webpack_require__("../../../../../src/app/superadmin/xlsx-to-json-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TestComponent = (function () {
    function TestComponent(toasterService) {
        this.StoreImports = [];
        this.xlsxToJsonService = new __WEBPACK_IMPORTED_MODULE_2__superadmin_xlsx_to_json_service__["a" /* XlsxToJsonService */]();
        this.ConSheetChunks = [];
        this.ConSheetErrors = [];
        this.conImportStarted = false;
        this.fileList = [];
        this.isPluploadReady = false;
        this.toasterService = toasterService;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.ngAfterViewInit = function () {
        console.log(jQuery);
        jQuery('[data-play="dropdown"]').click(function () {
            jQuery(this).parent('.nav-dropdown').toggleClass('open');
        });
    };
    TestComponent.prototype.importStores = function (action, event) {
        var _this = this;
        if (event === void 0) { event = null; }
        this.ConSheetErrors = [];
        if (action == 'openfile')
            jQuery('#excelfile').click();
        else if (action == 'handlefile') {
            this.StoreImports = [];
            var file = event.target.files[0];
            event.target.value = '';
            var error = false;
            var arr = ["storeName", "storeClass", "storeEmail", "storeMobile", "storeAddress", "storeCity", "storeState", "storeZip", "userName", "userEmail", "userPassword"];
            if ((file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xls') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'xlsx') && (file['name'].substring(file['name'].lastIndexOf('.') + 1) != 'csv')) {
                this.toasterService.pop('error', 'Please select valid excel file');
            }
            else {
                console.log('fdsfs');
                this.xlsxToJsonService.processFileToJson({}, file).subscribe(function (data) {
                    _this.StoreImports = [];
                    var keys = Object.keys(data['sheets']);
                    console.log(data);
                    console.log(keys);
                    var Emails = [];
                    for (var i_1 = 0; i_1 < keys.length; i_1++) {
                        var sheet = data['sheets'][keys[i_1]];
                        for (var j_1 = 0; j_1 < sheet.length; j_1++) {
                            var row = sheet[j_1];
                            if (keys[i_1] == 'Sheet1') {
                                // console.log(row[93]);
                                Emails.push(row[93]);
                            }
                            // var keys2 = Object.keys(row);
                            // for (let k = 0; k < keys2.length; k++)
                            // {
                            //   if(arr.indexOf(keys2[k]) == -1)
                            //   {
                            //     delete row[keys2[k]];
                            //   }
                            // }
                            // this.StoreImports.push(row);
                        }
                    }
                    console.log(Emails.join(','));
                });
            }
            jQuery('#importStores').modal('show');
        }
        else if (action == 'importFile') {
            var inputs = jQuery('#importStores').find('input.required');
            var error = false;
            for (var i_2 = 0; i_2 < inputs.length; i_2++) {
                var input = inputs[i_2];
                if (input.value == '') {
                    error = true;
                    jQuery(input).addClass('input-error');
                }
                else {
                    jQuery(input).removeClass('input-error');
                }
            }
            console.log(error);
            if (error)
                return false;
            this.conImportStarted = true;
            var toast = {
                type: 'info',
                title: 'Importing...',
                timeout: 0
            };
            this.toasterService.clear();
            this.toasterService.pop(toast);
            var i, j, temparray, chunk = 2;
            this.ConSheetChunks = [];
            for (i = 0, j = this.StoreImports.length; i < j; i += chunk) {
                this.ConSheetChunks.push(this.StoreImports.slice(i, i + chunk));
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pickfiles'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TestComponent.prototype, "pickfiles", void 0);
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/wine.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wine.78c09e94286502983fcb.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map