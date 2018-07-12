import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { LoadersCssModule } from 'angular2-loaders-css';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2CompleterModule } from "ng2-completer";
import { TreeModule } from 'angular-tree-component';
import { AppRoutingModule }     from './app-routing.module';
import { AuthGuard } from './shared/authGuard.service';
import { AuthGuardSuperAdmin } from './superadmin/authGuard.service';


import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HeaderComponent } from './frontend/header/header.component';
import { PortalComponent } from './portal/portal.component';

import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminpanelComponent } from './superadmin/adminpanel/adminpanel.component';
import { SpheaderComponent } from './superadmin/spheader/spheader.component';
import { SpsidebarComponent } from './superadmin/spsidebar/spsidebar.component';
import { AddstoreComponent } from './superadmin/addstore/addstore.component';
import { LisstoreComponent } from './superadmin/lisstore/lisstore.component';
import { StoreaccessrequestsComponent } from './superadmin/storeaccessrequests/storeaccessrequests.component';
import { UpdateStorComponent } from './superadmin/update-stor/update-stor.component';
import { CatsComponent } from './superadmin/cats/cats.component';
import { AddproductComponent } from './superadmin/addproduct/addproduct.component';
import { ListproductComponent } from './superadmin/listproduct/listproduct.component';
import { AddapdmsComponent } from './superadmin/addapdms/addapdms.component';
import { PheaderComponent } from './portal/pheader/pheader.component';
import { PsidebarComponent } from './portal/psidebar/psidebar.component';
import { PproductsComponent } from './portal/pproducts/pproducts.component';
import { PdashboardComponent } from './portal/pdashboard/pdashboard.component';
import { PcartComponent } from './portal/pcart/pcart.component';
import { PproductdetailsComponent } from './portal/pproductdetails/pproductdetails.component';
import { CateditComponent } from './superadmin/catedit/catedit.component';
import { ProductEditComponent } from './superadmin/product-edit/product-edit.component';
import { ProductsComponent } from './frontend/products/products.component';
import { ProductDetailsComponent } from './frontend/product-details/product-details.component';
import { CartComponent } from './frontend/cart/cart.component';
import { ListapdmComponent } from './superadmin/listapdm/listapdm.component';
import { ApdmEditComponent } from './superadmin/apdm-edit/apdm-edit.component';
import { AsignApdmComponent } from './superadmin/asign-apdm/asign-apdm.component';
import { CustomerComponent } from './customer/customer.component';
import { MystoresComponent } from './portal/mystores/mystores.component';
import { PordersComponent } from './portal/porders/porders.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { CustomerOrderdetailsComponent } from './customer/customer-orderdetails/customer-orderdetails.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerAccountComponent } from './customer/customer-account/customer-account.component';
import { AddAdminComponent } from './superadmin/add-admin/add-admin.component';
import { ListAdminsComponent } from './superadmin/list-admins/list-admins.component';
import { UpdateAdminComponent } from './superadmin/update-admin/update-admin.component';
import { PortalListApdmsComponent } from './portal/portal-list-apdms/portal-list-apdms.component';
import { PorderDetailsComponent } from './portal/porder-details/porder-details.component';
import { SpordersComponent } from './superadmin/sporders/sporders.component';
import { SporderDetailsComponent } from './superadmin/sporder-details/sporder-details.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { PaccountSettingsComponent } from './portal/paccount-settings/paccount-settings.component';
import { SpsettingsComponent } from './superadmin/spsettings/spsettings.component';
import { AddStoreFormComponent } from './superadmin/add-store-form/add-store-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    HeaderComponent,
    PortalComponent,
    SuperadminComponent,
    AdminpanelComponent,
    SpheaderComponent,
    SpsidebarComponent,
    AddstoreComponent,
    LisstoreComponent,
    StoreaccessrequestsComponent,
    UpdateStorComponent,
    CatsComponent,
    AddproductComponent,
    ListproductComponent,
    AddapdmsComponent,
    PheaderComponent,
    PsidebarComponent,
    PproductsComponent,
    PdashboardComponent,
    PcartComponent,
    PproductdetailsComponent,
    CateditComponent,
    ProductEditComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    ListapdmComponent,
    ApdmEditComponent,
    AsignApdmComponent,
    CustomerComponent,
    MystoresComponent,
    PordersComponent,
    CustomerOrdersComponent,
    CustomerOrderdetailsComponent,
    CustomerProfileComponent,
    AddAdminComponent,
    ListAdminsComponent,
    UpdateAdminComponent,
    PortalListApdmsComponent,
    PorderDetailsComponent,
    SpordersComponent,
    SporderDetailsComponent,
    CustomerAccountComponent,
    PaccountSettingsComponent,
    SpsettingsComponent,
    AddStoreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToasterModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, ToasterModule,
    NgxPaginationModule,
    LoadersCssModule,
    Ng2CompleterModule,
    TreeModule,
    CKEditorModule
  ],
  providers: [AuthGuard,AuthGuardSuperAdmin],
  bootstrap: [AppComponent]
})
export class AppModule { }
