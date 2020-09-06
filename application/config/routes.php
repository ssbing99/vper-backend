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
$route['login'] = 'api/login';
$route['forgetpassword/(.*)'] = 'api/forgetpassword/$1';
$route['verify/(.*)'] = 'api/verify/$1';
$route['authenticate'] = 'admin/auth/authenticate_login';
$route['cronCommonTips'] = 'api/cronForInsertDatainWallet';
//$route['/'] = 'auth/login';
$route['admin'] = 'admin/auth/login';
$route['admin/login'] = 'admin/auth/login';
$route['admin/dashboard'] = 'admin/auth/dashboard';
$route['admin/logout']='admin/auth/logout';

//admin profile
$route['admin/profile']='admin/auth/profile';
//admin settings
$route['admin/view-user']='admin/yper/getUserallListdata';
$route['admin/change_status']='admin/yper/change_status';
$route['admin/deleteUser']='admin/yper/deleteUser';
$route['admin/user-detail/(.*)']='admin/yper/UserDetailById/$1';
$route['admin/view-chef']='admin/yper/getChefallListdata';
$route['admin/chef-detail/(.*)']='admin/yper/ChefDetailById/$1';
$route['admin/view-chefdish']='admin/yper/getChefDishallListdata';
$route['admin/deleteChefDish']='admin/yper/deleteChefDish';
$route['admin/view-review']='admin/yper/getreviewdata';
$route['admin/deleteChefReview']='admin/yper/deleteChefReview';
$route['admin/review-detail/(.*)']='admin/yper/reviewDetailById/$1';
$route['admin/chefchat-detail/(.*)']='admin/yper/chefchat_detailuser/$1';
$route['admin/chefchat-list']='admin/yper/chefchat_list';
$route['admin/add-ammount']='admin/yper/add_perpersonammount';
$route['admin/booking']='admin/yper/viewUerbookingList';
$route['admin/order-detail/(.*)']='admin/yper/orderDetailByOrderId/$1';
$route['admin/wallet']='admin/yper/getWalletdata';


