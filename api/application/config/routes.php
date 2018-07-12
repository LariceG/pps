<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route["login"]          				= "WebServices/login";
$route["change-password"]          				= "WebServices/changePassword";
$route["addStoreUser"]   				= "WebServices/addStoreUser";
$route["updateStoreUserDetail"]   		= "WebServices/updateStoreUserDetail";
$route["activeUserStatus"]   			= "WebServices/activeUserStatus";
$route["storeUserListing/(:any)/(:any)/(:any)/(:any)/(:any)/(:any)"]   		= "WebServices/storeUserListing/$1/$2/$3/$4/$5/$6";
$route["storeDetails/(:any)/(:any)"] 	= "WebServices/storeDetails/$1/$2";
$route["logout/(:any)"]  				= "WebServices/logout/ApiKey/$1";

$route["insert"]   						= "WebServices/insert";
$route["delete/(:any)/(:any)/(:any)/(:any)"]   		= "WebServices/Delete/$1/$2/$3/$4";
$route["get/(:any)"]   					= "WebServices/getMethod/type/$1";
$route["get-where/(:any)/(:any)/(:any)/(:any)"]   					= "WebServices/getWhere/$1/$2/$3/$4";
$route["update"]   						= "WebServices/update";


$route["addApdmUser"]   				= "WebServices/addApdmUser";
$route["updateApdmUserDetail"]   		= "WebServices/updateApdmUserDetail";
$route["activeUserStatus"]   			= "WebServices/activeUserStatus";
$route["apdmUserListing"]   			= "WebServices/apdmUserListing";
$route["apdmUserListing/(:any)"]   		= "WebServices/apdmUserListing/page/$1";
$route["apdmUserListing/(:any)/(:any)/(:any)"] = "WebServices/apdmUserListing/page/$1/perpage/$2/type/$3";
$route["apdmUserListing/(:any)/(:any)/(:any)/(:any)"] = "WebServices/apdmUserListing/page/$1/perpage/$2/type/$3/text/$4";
$route["apdmDetails/(:any)"] 			= "WebServices/apdmDetails/apdmID/$1";
$route["exaplDetails/(:any)"] 			= "WebServices/exaplDetails/apdmID/$1";

$route["upload-image"]   				= "WebServices/uploadImage";
$route["submit-cat"]   					= "WebServices/submitCat";

$route["getCats/(:any)"]      = "WebServices/getCats/parentCat/$1";
$route["get-cat"]   					= "WebServices/getCatss";

$route["submit-product"]   				= "WebServices/saveProducts";

$route["addProductAddToCart"]   		= "WebServices/addProductAddToCart";
$route["updateAddToCartProductQty"]   	= "WebServices/updateAddToCartProductQty";
$route["productListing"]   				= "WebServices/productListing";
$route["productListingNew"]   			= "WebServices/productListingNew";
$route["getProductDetail/(:any)"]   			= "WebServices/getProductDetail/productId/$1";
$route["getAllProductFromAddToCart/(:num)"]		= "WebServices/GetAllProductFromAddToCart/userId/$1";
$route["deleteUserProductFromAddToCart/(:any)"] = "WebServices/DeleteUserProductFromAddToCart/bkId/$1";
$route["userStoreSaveMyOrders"] 				= "WebServices/userStoreSaveMyOrders";
$route["getUnAssignedStores/(:any)/(:any)"] 	= "WebServices/getUnAssignedStores/apdm/$1/key/$2";

$route["getUnAssignedStoresExApl/(:any)/(:any)"] 	= "WebServices/getUnAssignedStoresExApl/apdm/$1/key/$2";
$route["getAssignes/(:any)"]   					= "WebServices/getAssignes/apdm/$1";
$route["getExAplAssignes/(:any)"]   					= "WebServices/getExAplAssignes/apdm/$1";
$route["getadpmorders/(:any)"]   				= "WebServices/getadpmorders/apdm/$1";
$route["update-fun"]   							= "WebServices/updatefun";

$route["customer-orders/(:any)/(:any)/(:any)"]   				= "WebServices/customerOrders/cus/$1/page/$1/perpage/$1";
$route["order-details/(:any)"]   				= "WebServices/orderDetails/orderno/$1";
$route["getAdpmStores/(:any)/(:any)"]   				= "WebServices/getAdpmStores/apdm/$1/type/$2";

$route["addStoreUserRequest"]   				= "WebServices/requestStoreAccess";
$route["enableStoreUserRequest/(:num)/(:num)"]  = "WebServices/enableStoreUserRequest/storeID/$1/status/$2";
$route["sysAccessReq"]   		            	= "WebServices/sysAccessReq";

$route["addAdminData"]   		            	= "WebServices/addAdminData";
$route["updateAdminDetail"]   		   			= "WebServices/updateAdminDetail";

$route["adminUserListing"]   					= "WebServices/adminUserListing";
$route["adminUserListing/(:any)"]   			= "WebServices/adminUserListing/page/$1";
$route["adminUserListing/(:any)/(:any)"] 		= "WebServices/adminUserListing/page/$1/perpage/$2";
$route["getAdminDetails/(:any)"]   				= "WebServices/getAdminDetails/$1";

// $route["get-portal-orders/(:any)"] 				= "WebServices/getPortalOrders/type/$1/";
$route["get-portal-orders/(:any)/(:any)/(:any)/(:any)"] 		= "WebServices/getPortalOrders/page/$1/perpage/$2/type/$3/text/$4";
$route["get-portal-orders/(:any)/(:any)/(:any)/(:any)/(:any)"] 		= "WebServices/getPortalOrders/page/$1/perpage/$2/type/$3/apdm/$4/text/$5";

$route["download-order-pdf/(:any)"] 			= "WebServices/downloadOrderPdf/orderno/$1/";
$route["get-apdm-dashboard/(:any)"] 			= "WebServices/getApdmDashboardOrderDetails/userID/$1/";
$route["get-admin-dashboard/(:any)"] 			= "WebServices/getAdminDashboardOrderDetails/userID/$1/";

$route["getCatsdata"]      						= "WebServices/getCatsdata";
$route["get-limit"]      						= "WebServices/getLimit";

$route["updateInventory"]      						= "WebServices/updateInventory";
$route["storeImports"]      						= "WebServices/storeImports";
$route["aplAlter/(:any)/(:any)"]      						= "WebServices/aplAlter/user/$1/type/$2";
$route["upload-file"]      						= "WebServices/uploadFile";
$route["get-settings"]      						= "WebServices/getSettings";
