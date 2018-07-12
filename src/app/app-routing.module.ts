import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/authGuard.service';
import { AuthGuardSuperAdmin } from './superadmin/authGuard.service';

import { FrontendComponent } from './frontend/frontend.component';
import { HeaderComponent } from './frontend/header/header.component';
import { PortalComponent } from './portal/portal.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminpanelComponent } from './superadmin/adminpanel/adminpanel.component';
import { AddstoreComponent } from './superadmin/addstore/addstore.component';
import { LisstoreComponent } from './superadmin/lisstore/lisstore.component';
import { StoreaccessrequestsComponent } from './superadmin/storeaccessrequests/storeaccessrequests.component';
import { CatsComponent } from './superadmin/cats/cats.component';
import { AddproductComponent } from './superadmin/addproduct/addproduct.component';
import { ListproductComponent } from './superadmin/listproduct/listproduct.component';
import { AddapdmsComponent } from './superadmin/addapdms/addapdms.component';
import { CateditComponent } from './superadmin/catedit/catedit.component';

import { PproductsComponent } from './portal/pproducts/pproducts.component';
import { PdashboardComponent } from './portal/pdashboard/pdashboard.component';
import { PcartComponent } from './portal/pcart/pcart.component';
import { PproductdetailsComponent } from './portal/pproductdetails/pproductdetails.component';
import { ProductsComponent } from './frontend/products/products.component';
import { ProductDetailsComponent } from './frontend/product-details/product-details.component';
import { CartComponent } from './frontend/cart/cart.component';

import { ListapdmComponent } from './superadmin/listapdm/listapdm.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { CustomerOrderdetailsComponent } from './customer/customer-orderdetails/customer-orderdetails.component';
import { CustomerAccountComponent } from './customer/customer-account/customer-account.component';


import { PordersComponent } from './portal/porders/porders.component';
import { MystoresComponent } from './portal/mystores/mystores.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AddAdminComponent } from './superadmin/add-admin/add-admin.component';
import { ListAdminsComponent } from './superadmin/list-admins/list-admins.component';
import { PortalListApdmsComponent } from './portal/portal-list-apdms/portal-list-apdms.component';
import { PorderDetailsComponent } from './portal/porder-details/porder-details.component';
import { SpordersComponent } from './superadmin/sporders/sporders.component';
import { SporderDetailsComponent } from './superadmin/sporder-details/sporder-details.component';
import { PaccountSettingsComponent } from './portal/paccount-settings/paccount-settings.component';
import { SpsettingsComponent } from './superadmin/spsettings/spsettings.component';

const routes: Routes = [
  { path: '', component: FrontendComponent },
  { path: 'products',  component: ProductsComponent },
  { path: 'product-details/:ProductId/:page', component: ProductDetailsComponent},

  { path: 'customer-login',  component: CustomerComponent },
  { path: 'profile/orders',  component: CustomerOrdersComponent ,canActivate: [AuthGuard]},
  { path: 'profile/order-details/:orderid',  component: CustomerOrderdetailsComponent ,canActivate: [AuthGuard]},
  { path: 'profile/order-details/:orderid',  component: CustomerOrderdetailsComponent ,canActivate: [AuthGuard]},
  { path: 'profile/cart',  component: CartComponent },
  { path: 'profile',  component: CustomerProfileComponent },
  { path: 'profile/settings',  component: CustomerAccountComponent },

  { path: 'superadmin', component: SuperadminComponent  },
  { path: 'admin-panel', component: AdminpanelComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/add-store', component: AddstoreComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-stores', component: LisstoreComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/new-stores-access-requests', component: StoreaccessrequestsComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/categories', component: CatsComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/add-product', component: AddproductComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-products', component: ListproductComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/add-apls', component: AddapdmsComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-apls', component: ListapdmComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-apls/:readonly', component: ListapdmComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/add-admin', component: AddAdminComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-admin', component: ListAdminsComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/list-orders/:type', component: SpordersComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/order-details/:orderid', component: SporderDetailsComponent ,canActivate: [AuthGuardSuperAdmin]},
  { path: 'admin-panel/settings', component: SpsettingsComponent ,canActivate: [AuthGuardSuperAdmin]},

  { path: 'portal',    component: PortalComponent },
  { path: 'dashboard', component: PdashboardComponent ,canActivate: [AuthGuard]},
  { path: 'dashboard/orders/:type', component: PordersComponent ,canActivate: [AuthGuard]},
  { path: 'dashboard/order-details/:orderid', component: PorderDetailsComponent ,canActivate: [AuthGuard]},

  { path: 'dashboard/my-stores', component: MystoresComponent ,canActivate: [AuthGuard]},
  { path: 'dashboard/list-apls', component: PortalListApdmsComponent ,canActivate: [AuthGuard]},
  { path: 'dashboard/cart',  component: CartComponent },
  { path: 'dashboard/account-settings',  component: PaccountSettingsComponent  ,canActivate: [AuthGuard]},

  { path: 'cart', component: PcartComponent ,canActivate: [AuthGuard]},
  // { path: 'product-details', component: ProductsComponent,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [ 	  RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
