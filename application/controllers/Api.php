<?php

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: *');
defined('BASEPATH') OR exit('No direct script access allowed');

/*
 * Handle all the api calls through the REST api's
 * @author Shiv Kumar Tiwari
 * @Date 08 May 2018
 */

Class Api extends CI_controller
{

    const DATA_LIMIT = 10;

    private $varFullUrlImage = "http://localhost/yper-app/";
    private $arrParamData;
    private $varUserImageBaseUrl;

    // calling cunstructor of the class
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->library('Common');
        $this->load->model('Auth_model');
        $this->load->library('Emails');
        $this->arrParamData = array();
        $this->varUserImageBaseUrl = base_url() . "uploads/users/";
        $this->load->library('email');
    }

    /*
     * Handles all authentication related api call
     * @param json as post
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function auth()
    {
        $this->load->model('Auth_model');
        $jsonStr = @file_get_contents("php://input");
        $this->callRelatedFunction($jsonStr, false);
    }

    /*
     * Handles all result related api call
     * @param json as post
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function results()
    {
        $jsonStr = @file_get_contents("php://input");
        $this->callRelatedFunction($jsonStr, false);
    }

    /*
     * Handles all insert and update data in the api call
     * @param json as post
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function saveData()
    {
        $jsonStr = @file_get_contents("php://input");
        $this->callRelatedFunction($jsonStr, false);
    }

    /*
     * Handles all result related api call
     * @param json string
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function callRelatedFunction($jsonStr, $varIsAccessTockenReq = false)
    {
        if ($jsonStr != '') {
            $this->insertMobilParamData($jsonStr);
            $this->arrParamData = $arrData = json_decode(urldecode($jsonStr), true);
            if (isset($arrData['method']) && method_exists($this, $arrData['method'])) {
                echo call_user_func(array($this, $arrData['method']));
            } else {
                echo json_encode(array('status' => 202, 'message' => METHOD_NOT_EXIST));
            }
        } else {
            echo json_encode(array('status' => 202, 'message' => METHOD_NOT_EXIST));
        }
    }

    private function insertMobilParamData($jsonStr)
    {
        if (!empty($jsonStr)) {
            $insertdata = array('request_data' => $jsonStr);
            $this->Auth_model->insertMobilParamData($insertdata);
        }
    }

    /*
     * validates whether the access token is of auth user or not
     * @param $varUserId,$varAccessToken
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function validateAccessToken($varUserId, $varAccessToken)
    {
        return $this->Auth_model->validateAccessToken($varUserId, $varAccessToken);
    }

    /* ======================== User Auth and profiles Api's for Chef Start From here  ==================== */

    /*
     * check whether the user exists or not for login
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function login()
    {
        $objUser = $this->Auth_model->isUser($this->arrParamData['email'], md5($this->arrParamData['password']));
        $arrReturnData = array('status' => 201, 'message' => 'Wrong credentials please try again');
        if (!empty($objUser)) {
            if ($objUser->status == 0) {
                $arrReturnData = array('status' => 201, 'message' => 'Please verify your account or contact to our Administrator');
            } else {
                $ip = $this->input->ip_address();
                $device_id = !empty($this->arrParamData['device_id']) ? trim($this->arrParamData['device_id'], '"') : '';
                $updateData = array();
                if ($device_id == '-') { // For web login
                    $updateData = array(
                        'login_ip' => $ip,
                        'last_login' => date('Y-m-d H:i:s')
                    );
                } else {
                    $updateData = array(
                        'device_id' => $device_id,
                        'device_platform' => !empty($this->arrParamData['device_platform']) ? $this->arrParamData['device_platform'] : '',
                        'login_ip' => $ip,
                        'last_login' => date('Y-m-d H:i:s')
                    );
                }

                $isInsert = $this->Auth_model->insertDeviceid($updateData, $objUser->id);
                $objUser->user_image = !empty($objUser->user_image) ? base_url() . '/' . $objUser->user_image : '';
                $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $objUser);
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * register a user if he is not already registered and gives error if he is already 
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function signupAsChef()
    {
        $varIsAlreadyUser = $this->Auth_model->isEmailAlready($this->arrParamData['email']);
        $arrReturnData = array('status' => 201, 'message' => 'Email Already Registered! please try with diffrent one');
        if (!$varIsAlreadyUser) {
            $varIsCorrectRef = $this->Auth_model->checkReferal($this->arrParamData['refral_code']);
            if ($varIsCorrectRef) {
                $this->load->helper('string');
                $varMyref = random_string('alnum', 6);
                $varMycode = random_string('alnum', strlen($this->arrParamData['email']));
                $this->arrParamData['verification_code'] = $varMycode;
                $objUser = $this->Auth_model->registerChef($this->arrParamData, $varMyref); //random_string('alnum',5);
                $this->sendMailToNewChecf($this->arrParamData['email']);
                if (!empty($objUser)) {
                    $arrReturnData = array('status' => 200, 'message' => 'You have been registered successfully', 'data' => $objUser);
                } else {
                    $arrReturnData = array('status' => 201, 'message' => OOPS);
                }
            } else {
                $arrReturnData = array('status' => 201, 'message' => "Referal code is not correct.");
            }
        } else {
            $arrReturnData = array('status' => 201, 'message' => "email already exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * update users profile 
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function changePass()
    {
        $arrReturnData = array('status' => 200, 'message' => OOPS);
        $isupdated = $this->Auth_model->changePassword($this->arrParamData);
        if ($isupdated) {
            $arrReturnData = array('status' => 200, 'message' => 'Password changed successfully.');
        } else {
            $arrReturnData = array('status' => 200, 'message' => 'Old Password Does not match!');
        }
        return json_encode($arrReturnData);
    }

    /*
     * update users profile 
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    private function updateChefProfile()
    {
        $arrReturnData = array('status' => 201, 'message' => OOPS);
        if (!empty($this->arrParamData['user_image'])) {
            $base64image = $this->common->commonbase64decode(UPLOAD_DIR, $this->arrParamData['user_image']);
            $this->arrParamData['user_image'] = $base64image;
        }
        $isupdated = $this->Auth_model->updateChefProfile($this->arrParamData);
        $isupdated['getChefProfileDetail']->user_image = !empty($isupdated['getChefProfileDetail']->user_image) ? base_url() . '/' . $isupdated['getChefProfileDetail']->user_image : '';
        if ($isupdated["isupdated"]) {
            $arrReturnData = array('status' => 200, 'message' => 'Profile updated successfully.', 'data' => $isupdated['getChefProfileDetail']);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef profile details
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 11 May 2018
     */

    private function getChefProfileDetail()
    {
        $objUser = $this->Auth_model->getChefProfileDetail($this->arrParamData['userId']);
        $arrReturnData = array('status' => 200, 'message' => OOPS);
        if (!empty($objUser)) {
            if (strpos($objUser->user_image, "https://") !== false || strpos($objUser->user_image, "http://") !== false) {
                $objUser->user_image = $objUser->user_image;
            } else {
                $objUser->user_image = !empty($objUser->user_image) ? base_url() . '/' . $objUser->user_image : '';
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $objUser);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * chef dish
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 14 May 2018
     */

    public function dish()
    {
        $this->load->model('Auth_model');
        $jsonStr = @file_get_contents("php://input");
        $this->callRelatedFunction($jsonStr, false);
    }

    /*
     * add chef dish data
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function addChefDish()
    {
        $base64image = '';
        if (!empty($this->arrParamData['image'])) {
            $base64image = $this->common->commonbase64decode(Chefdish_DIR, $this->arrParamData['image']);
        }
        $countstatus = $this->Auth_model->addChefProfileCount($this->arrParamData['user_id']);
        $this->arrParamData['image'] = $base64image;
        log_message("error", $base64image);
        $arrParams = array(
            'name' => $this->arrParamData['name'],
            'image' => $base64image,
            'grocery' => (!empty($this->arrParamData['grocery'])) ? $this->arrParamData['grocery'] : '',
            'user_id' => $this->arrParamData['user_id'],
            'status' => ($countstatus['countUserstatus']->totalcount < 4) ? $this->arrParamData['status'] : 0
        );
        $countChefdish = $this->Auth_model->countChefDishData($arrParams['user_id']);
        $isInsert = ($countChefdish->count < 6) ? $this->Auth_model->addChefDishData($arrParams) : '';
        //var_dump($isInsert);exit;
        if (!empty($isInsert)) {
            $arrReturnData = array('status' => 200, 'message' => 'Successfully Insert', 'ProfileStatus' => $countstatus['msg']);
        } else {
            $arrReturnData = array('status' => 201, 'message' => "Add Only 6 max dish");
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef dish data
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function getChefDishdata()
    {
        $varPerPage = ($this->arrParamData['page'] > 1) ? ($this->arrParamData['page'] - 1) * 10 : 0;
        $countvarChefDishdata = $this->Auth_model->countgetChefDishdata($this->arrParamData['user_id']);
        $totalcountpage = ceil($countvarChefDishdata->totalcount / 10);
        $varChefDishdata = $this->Auth_model->getChefDishdata($this->arrParamData['user_id'], $varPerPage);
        if (!empty($varChefDishdata)) {
            foreach ($varChefDishdata as $varChefDishdataobj) {
                $varChefDishdataobj->image = !empty($varChefDishdataobj->image) ? base_url() . '/' . $varChefDishdataobj->image : '';
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $varChefDishdata, 'totalcountpage' => $totalcountpage);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * update chef dish data
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function updateChefDishdata()
    {

        $chefid = $this->arrParamData['id'];
        $userId = $this->arrParamData['user_id'];
        $countstatus = $this->Auth_model->addChefProfileCount($userId);
        $upDatedata = array('name' => $this->arrParamData['name'], 'grocery' => $this->arrParamData['grocery'],
            'status' => ($countstatus['countUserstatus']->totalcount < 4) ? $this->arrParamData['status'] : 0
        );
        if (!empty($this->arrParamData['image'])) {
            $base64image = $this->common->commonbase64decode(Chefdish_DIR, $this->arrParamData['image']);
            $this->arrParamData['image'] = $base64image;
            $upDatedata['image'] = $base64image;
        }
        $isupdated = $this->Auth_model->updateChefDishdata($upDatedata, $chefid);
        $isupdateStatus = $this->Auth_model->updateChefProfileDishStatus(array('status' => $this->arrParamData['status']), $chefid, $userId);
        if ($isupdated) {
            $arrReturnData = array('status' => 200, 'message' => 'Successfully Update', 'ProfileStatus' => $isupdateStatus);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "Oops.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * delete chef dish data
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function deleteChefDishdata()
    {
        $isdelete = $this->Auth_model->deleteChefDishdata($this->arrParamData['id']);
        if ($isdelete) {
            $arrReturnData = array('status' => 200, 'message' => 'Successfully Delete');
        } else {
            $arrReturnData = array('status' => 200, 'message' => "Oops.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef dish signledata by user_id
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function getDishDetail()
    {
        $varChefDishdata = $this->Auth_model->getDishDetail($this->arrParamData['user_id'], $this->arrParamData['dishId']);
        if (!empty($varChefDishdata)) {
            $varChefDishdata->image = !empty($varChefDishdata->image) ? base_url() . '/' . $varChefDishdata->image : '';
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $varChefDishdata);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * get all country list
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function getAllcountryList()
    {
        $varcountrylist = $this->Auth_model->getAllcountryList();
        if (!empty($varcountrylist)) {

            $arrReturnData = array('status' => 200, 'data' => $varcountrylist);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * signup as user
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function signupAsUser()
    {
        $varIsAlreadyUser = $this->Auth_model->isEmailAlready($this->arrParamData['email']);
        if (!$varIsAlreadyUser) {
            $this->load->helper('string');
            $varMycode = random_string('alnum', strlen($this->arrParamData['email']));
            $this->arrParamData['verification_code'] = $varMycode;
            $objUser = $this->Auth_model->registerUser($this->arrParamData); //random_string('alnum',5);
            $msg = $this->load->view('mail/new_user', array('link' => "http://yperkokk.com/yper-app/verify/" . $varMycode), true);
            if (!empty($objUser)) {
                $arrEmaildata = array(
                    'to' => $this->arrParamData['email'],
                    "subject" => "Verify your account",
                    'msg' => $msg//"Hi <br/><br/>Thanks for signup on Yper. Please click  the below link to activate your account or  you can copy paste link in your browser<br/><br/> <a href='http://yperkokk.com/yper-app/verify/".$varMycode."'>http://yperkokk.com/yper-app/verify/".$varMycode."</a><br/><br/>Thanks,<br/><br/>Team Yper"
                );
                $this->sendEmail($arrEmaildata);
                $arrReturnData = array('status' => 200, 'message' => 'Please check your mail and activate your account', 'data' => $objUser);
            } else {
                $arrReturnData = array('status' => 201, 'message' => 'OOPS');
            }
        } else {
            $arrReturnData = array('status' => 202, 'message' => "email already exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * User Update profile
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    private function updateuserProfile()
    {
        $arrReturnData = array('status' => 200, 'message' => 'OOPS');
        if (!empty($this->arrParamData['user_image'])) {
            $base64image = $this->common->commonbase64decode(UPLOAD_DIR, $this->arrParamData['user_image']);
            $this->arrParamData['user_image'] = $base64image;
            log_message("error", $base64image);
        }
        $isupdated = $this->Auth_model->updateChefProfile($this->arrParamData);
        $isupdated['getChefProfileDetail']->user_image = !empty($isupdated['getChefProfileDetail']->user_image) ? base_url() . '/' . $isupdated['getChefProfileDetail']->user_image : '';
        if ($isupdated["isupdated"]) {
            $arrReturnData = array('status' => 200, 'message' => 'Profile updated successfully.', 'data' => $isupdated['getChefProfileDetail']);
        } else {
            $arrReturnData = array('status' => 200, 'message' => 'OOPS');
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef detail use lat,long
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 18 May 2018
     */

    private function getCheflocation()
    {
        $varPerPage = ($this->arrParamData['page'] > 1) ? ($this->arrParamData['page'] - 1) * 10 : 0;
        $CountPage = $this->Auth_model->countChefRows();
        $getData = $this->Auth_model->getCheflocation($this->arrParamData, $varPerPage);
        $totalcountpage = ceil($CountPage->totalcount / 10);
        if (!empty($getData)) {
            foreach ($getData as $getDataobj) {
                $getDataobj->distance = round($getDataobj->distance, 2);
                $getDataobj->review = round($getDataobj->review);
                $getDataobj->about_me = (!empty($getDataobj->about_me)) ? substr($getDataobj->about_me, 0, 75) : '  ';
                if (strpos($getDataobj->user_image, "https://") !== false || strpos($getDataobj->user_image, "http://") !== false) {
                    $getDataobj->user_image = $getDataobj->user_image;
                } else {
                    $getDataobj->user_image = !empty($getDataobj->user_image) ? base_url() . '/' . $getDataobj->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $getData, 'totalcountpage' => $totalcountpage);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
    * get chef detail use lat,long
    * @param void
    * @author Soon Lai
    * @date 18 May 2018
    */

    private function getCheflocationWithDetails()
    {
        $varPerPage = empty($this->arrParamData['page']) ? 0 : $this->arrParamData['page'];
        $pageCount = empty($this->arrParamData['pageCount']) ? 0 : $this->arrParamData['pageCount'];
        $CountPage = $this->Auth_model->countTotalChefRows();
        $getData = $this->Auth_model->getCheflocationWithPagination($this->arrParamData, $varPerPage * $pageCount, $pageCount);
        $totalcountpage = $CountPage->totalcount;
        if (!empty($getData)) {
            foreach ($getData as $getDataobj) {
                $getDataobj->distance = round($getDataobj->distance, 2);
                $getDataobj->review = round($getDataobj->review);
                $getDataobj->about_me = (!empty($getDataobj->about_me)) ? substr($getDataobj->about_me, 0, 75) : '  ';
                if (strpos($getDataobj->user_image, "https://") !== false || strpos($getDataobj->user_image, "http://") !== false) {
                    $getDataobj->user_image = $getDataobj->user_image;
                } else {
                    $getDataobj->user_image = !empty($getDataobj->user_image) ? base_url() . '/' . $getDataobj->user_image : '';
                }

                // Dish and Reviews
                $getDataobj->dish = $this->Auth_model->getChefDishbyUserid($getDataobj->id);
                $getDataobj->feedbacks = $this->Auth_model->getChefallReview($getDataobj->id);

                foreach ($getDataobj->feedbacks as $datarevobj) {
                    $datarevobj->created_date = !empty($datarevobj->created_date) ? date('d M Y', strtotime($datarevobj->created_date)) : '';
                    if (strpos($datarevobj->user_image, "https://") !== false || strpos($datarevobj->user_image, "http://") !== false) {
                        $datarevobj->user_image = $datarevobj->user_image;
                    } else {
                        $datarevobj->user_image = !empty($datarevobj->user_image) ? base_url() . '/' . $datarevobj->user_image : '';
                    }
                }
                foreach ($getDataobj->dish as $dataobj) {
                    $dataobj->image = !empty($dataobj->image) ? base_url() . '/' . $dataobj->image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $getData, 'totalcountpage' => $totalcountpage);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No user exists!.");
        }
        return json_encode($arrReturnData);
    }

    /*
    * get chef detail by keyword
    * @param void
    * @author Soon Lai
    * @date 01 September 2020
    */

    private function getChefsByKeywords() {
        if (!empty($this->arrParamData['keywords'])) {
            $getData = $this->Auth_model->getChefByKeyword($this->arrParamData['keywords']);
        }

        if (!empty($getData)) {
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $getData);
        } else {
            $arrReturnData = array('status' => 200, 'message' => "No keywords provided!");
        }
        return json_encode($arrReturnData);
    }

    /*
     * verify user verification code
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 18 May 2018
     */

    private function VerifyUserCode()
    {
        $varIsAlreadyUser = $this->Auth_model->VerifyUsercCodeCheck($this->arrParamData);
        if ($varIsAlreadyUser) {
            $ChangeStatus = array('status' => '1');
            $objUser = $this->Auth_model->UpdateStatusUser($this->arrParamData, $ChangeStatus);
            if ($objUser) {
                $arrReturnData = array('status' => 200, 'message' => 'Status Change successfully');
            }
        } else {
            $arrReturnData = array('status' => 200, 'message' => "Something Went Wrong!.");
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef profile,dish,review data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 21 May 2018
     */

    private function getChefProfiledata()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Oops!');
        $varUserid = $this->arrParamData['userId'];
        if (!empty($varUserid)) {
            $data = array();
            $data['profile'] = $this->Auth_model->getChefProfiledata($varUserid);
            if (strpos($data['profile']->user_image, "https://") !== false || strpos($data['profile']->user_image, "http://") !== false) {
                $data['profile']->user_image = $data['profile']->user_image;
            } else {
                $data['profile']->user_image = !empty($data['profile']->user_image) ? base_url() . '/' . $data['profile']->user_image : '';
            }
            $data['dish'] = $this->Auth_model->getChefDishbyUserid($varUserid);
            $data['review'] = $this->Auth_model->getChefallReview($varUserid);
            foreach ($data['review'] as $datarevobj) {
                $datarevobj->created_date = !empty($datarevobj->created_date) ? date('d M Y', strtotime($datarevobj->created_date)) : '';
                if (strpos($datarevobj->user_image, "https://") !== false || strpos($datarevobj->user_image, "http://") !== false) {
                    $datarevobj->user_image = $datarevobj->user_image;
                } else {
                    $datarevobj->user_image = !empty($datarevobj->user_image) ? base_url() . '/' . $datarevobj->user_image : '';
                }
            }
            foreach ($data['dish'] as $dataobj) {
                $dataobj->image = !empty($dataobj->image) ? base_url() . '/' . $dataobj->image : '';
            }
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $data);
        }

        return json_encode($arrReturnData);
    }

    /*
     * empty deviceid after logout
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    private function nullDevliceId()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Oops!');
        $varUserid = $this->arrParamData['userId'];
        if (!empty($varUserid)) {
            $isInsert = $this->Auth_model->insertDeviceid(array(
                'device_id' => '',
                'device_platform' => ''
            ), $varUserid);
            $arrReturnData = array('status' => 200, 'message' => 'Success');
        }
        return json_encode($arrReturnData);
    }

    /*
     * save user chat data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

//    private function UserChatSaveDate() {
//        $arrReturnData = array('status' => 201, 'message' => 'Oops!');
//        $VarData = $this->arrParamData;
//        $device_id = $this->Auth_model->getDeviceidChat($VarData['user_id_to']);
//        if (!empty($VarData)) {
//            $SaveData = array('user_id_from' => $VarData['user_id_from'], 'user_id_to' => $VarData['user_id_to'],
//                'message' => $VarData['message'], 'device_id_to' => $device_id->device_id, 'read_by_user' => 0);
//            $SaveDataChattbl = array('chat_start_from' => $VarData['user_id_from'], 'chat_start_to' => $VarData['user_id_to'],
//                'hire_status' => 0);
//            $ChatType = !empty($VarData['type']) ? $VarData['type'] : '';
//            $isInsert = $this->Auth_model->UserChatSaveDate($SaveData);
//            $this->Auth_model->StartChatSaveDate($SaveDataChattbl, $ChatType);
//            $this->push_Notification($VarData['user_id_to'], $VarData['message'],$VarData['user_id_from']);
//            $arrReturnData = array('status' => 200, 'message' => 'Success','dataid'=>$isInsert);
//        }
//        return json_encode($arrReturnData);
//    }

    /*
     * send push notification  data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    private function push_Notification($user_id, $message, $from, $type, $title)
    {
        $device = $this->Auth_model->getDeviceid($user_id);
        if (!empty($device->device_id) && !empty($device->device_platform)) {
            $headers = array('Authorization: key=' . API_ACCESS_KEY, 'Content-Type: application/json');
            if ($device->device_platform == 'android') {
                $this->sendAndroidNotification($user_id, $message, $from, $type, $device->device_id, $headers, $title);
            } else if ($device->device_platform == 'ios') {
                $this->sendiOSNotification($user_id, $message, $from, $type, $device->device_id, $headers, $title);
            }
        }
    }

    private function sendiOSNotification($user_id, $message, $from, $type, $device_id, $headers, $title)
    {
        $msg = array('body' => $message, 'title' => $title,
            'icon' => 'myicon',
            'sound' => 'mySound',
            'custom_data' => array('user_id_to' => $user_id,
                'user_id_from' => $from,
                'type' => $type));
        $fields = array(
            'to' => $device_id,
            'notification' => $msg,
            "time_to_live"	=> 10,
            "content_available" => true
        );
        $curl = $this->common->sendGCMCurl($fields, $headers);
    }

    private function sendAndroidNotification($user_id, $message, $from, $type, $device_id, $headers, $title)
    {
        $msg = array('body' => $message, 'title' => $title,
            'icon' => 'ic_notification',
            "priority" => 2, // prevent missing
            "force-start" => 1, // force start when app is killed/closed
            "content-available" => "1", // android background to get data
            'soundname' => 'default',
            "android_channel_id" => "channelNotification", // for android notification sound

            // Stack in group
            "notId" => time(), // generate notification id for grouping, prevent notification replaced
            "style" => 'inbox',
            "summaryText" => 'There are %n% notifications',
            'custom_data' => array('user_id_to' => $user_id,
                'user_id_from' => $from,
                'type' => $type));
        $fields = array('to' => $device_id,
            "time_to_live"	=> 10,
            'data' => $msg
        );
        $curl = $this->common->sendGCMCurl($fields, $headers);
    }

    /*
     * send push notification  data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    private function sendpush_notification()
    {
        $VarData = $this->arrParamData;
        if (!empty($VarData)) {
            $this->push_Notification($VarData['user_id_to'], $VarData['message'], $VarData['user_id_from'], "chat", "Message");
        }
    }

    /*
     * get push notification  user data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    private function UserChatGetDate()
    {
        $varPerPage = (!empty($this->arrParamData['page']) && $this->arrParamData['page'] > 1) ? ($this->arrParamData['page'] - 1) * 10 : 0;
        $VarData = $this->arrParamData;
        $CountPage = $this->Auth_model->countSendnotifydata($VarData);
        $totalcountpage = ceil($CountPage->count / 10);
        $from_user_image = $this->Auth_model->getUserProfileDetail($VarData['user_id_from']);
        $to_user_image = $this->Auth_model->getUserProfileDetail($VarData['user_id_to']);
        $getData = $this->Auth_model->UserChatGetDate($VarData, $varPerPage);
        //  var_dump($getData);exit;
        if (!empty($getData)) {
            foreach ($getData as $getDataobj) {
                $getDataobj->user_id_to = $getDataobj->user_id_to;
                $getDataobj->message = $getDataobj->message;
                $getDataobj->user_id_from = $getDataobj->user_id_from;
                //$getDataobj->from_user_image=$getDataobj->from_user_image;
                // $getDataobj->to_user_image = $getDataobj->to_user_image;
            }
            //var_dump(array_reverse($getData));exit;
            if (!empty($from_user_image->user_image)) {
                if (strpos($from_user_image->user_image, "http") !== false) {
                    $from_user_image->user_image = $from_user_image->user_image;
                } else {
                    $from_user_image->user_image = !empty($from_user_image->user_image) ? base_url() . '/' . $from_user_image->user_image : '';
                }
            }
            if (!empty($to_user_image->user_image)) {
                if (strpos($to_user_image->user_image, "http") !== false) {
                    $to_user_image->user_image = $to_user_image->user_image;
                } else {
                    $to_user_image->user_image = !empty($to_user_image->user_image) ? base_url() . '/' . $to_user_image->user_image : '';
                }
            }

            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => array_reverse($getData), 'totalcountpage' => $totalcountpage, 'from_user_image' => $from_user_image->user_image, 'to_user_image' => $to_user_image->user_image);
            if ($this->arrParamData['page'] == 1 || $this->arrParamData['page'] == 0) {
                $arrReturnData['last_id'] = $getData[0]->id;
            }
        } else {
            $arrReturnData = array('status' => 200, 'message' => 'OOPs!');
        }
        return json_encode($arrReturnData);
    }

    private function getchefchatList()
    {
        $SaveDataChattbl = array('chat_start_to' => $this->arrParamData['user_id_to']);
        $getdata = $this->Auth_model->GetChatProfileUser($SaveDataChattbl);
        foreach ($getdata as $getdataobj) {
            $getdataobj->id = $getdataobj->id;
            $getdataobj->fname . " " . $getdataobj->lname = $getdataobj->fname . " " . $getdataobj->lname;
            if (strpos($getdataobj->user_image, "https://") !== false || strpos($getdataobj->user_image, "http://") !== false) {
                $getdataobj->user_image = $getdataobj->user_image;
            } else {
                $getdataobj->user_image = !empty($getdataobj->user_image) ? base_url() . '/' . $getdataobj->user_image : '';
            }
        }
        $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $getdata);
        return json_encode($arrReturnData);
    }

    /*
     * change all read meassge status
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */

    private function chStatusreadybyuser()
    {
        $varUserid = array('id' => $this->arrParamData['chat_last_id'], 'user_id_from' => $this->arrParamData['user_id_from'], 'user_id_to' => $this->arrParamData['user_id_to']);
        if (!empty($varUserid)) {
            $updata = array('read_by_user' => '1');
            $isUpdate = $this->Auth_model->chStatusreadybyuser($varUserid, $updata);
            if (!empty($isUpdate)) {
                $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isUpdate, 'last_id' => $isUpdate[0]->id);
            } else {
                $arrReturnData = array('status' => 200, 'message' => 'error');
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * get person day vise ammount
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 1 june 2018
     */

    private function GetPersonDayviseAmnt()
    {
        $arrReturnData = array('status' => 200, 'message' => 'error');
        $varPerson = $this->arrParamData['person'];
        $max_person = max($this->arrParamData['person']);
        $varTotalDays = $this->arrParamData['totaldays'];
        $Pricesum = $this->Auth_model->GetPersonDayviseAmnt($max_person);
        $Pricetotal = $Pricesum[0]->total;
//        $sum = 0;
//        // var_dump($varTotalDays);exit;
//        if (!empty($varTotalDays)) {
//            for ($i = 0; $i < $varTotalDays; $i++) {
//                $data = $this->Auth_model->GetPersonDayviseAmnt($varPerson[$i]);
//                $sum+= $data[0]->total;
//            }
        $Price = $Pricetotal;
        $arrReturnData = array('status' => 200, 'message' => 'OK', 'price' => $Price);
        return json_encode($arrReturnData);
    }

    /*
     * get all state name by country id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 june 2018
     */

    private function GetStateby_Cid()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $varCountryid = $this->arrParamData['Countryid'];
        if (!empty($varCountryid)) {
            $isGet = $this->Auth_model->GetStateby_Cid($varCountryid);
            if (!empty($isGet)) {
                $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * get all city name by state id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    private function GetCityby_Sid()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $varStateid = $this->arrParamData['Stateid'];
        if (!empty($varStateid)) {
            $isGet = $this->Auth_model->GetCityby_Sid($varStateid);
            if (!empty($isGet)) {
                $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * chef booking
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 june 2018
     */

    // private function handelBookrequest() {
    //     $arrReturnData = array('status' => 200, 'message' => 'Error');
    //     $bookdata = array();
    //     $Lastid = $this->Auth_model->GetlastOrderId();
    //     $order_number = '';
    //     if (!empty($Lastid)) {
    //         $order_number = (int) $Lastid->id + 1;
    //         $order_number = '1000' . $order_number;
    //     } else {
    //         $order_number.=10001;
    //     }
    //     $max_person = max($this->arrParamData['total_person']);
    //     $varTotalPerson = $this->arrParamData['total_person'];
    //     $Pricesum = $this->Auth_model->GetPersonDayviseAmnt($max_person);
    //     $Pricetotal = $Pricesum[0]->total;
    //     $PricetotalShow = $Pricesum[0]->show_total;
    //     // var_dump($Pricesum);exit;
    //     //$Pricesum = 0;
    //     if (!empty($varTotalPerson)) {
    //         /* sum total person
    //          *  foreach($varTotalPerson as $key=>$value)
    //           {
    //           $data = $this->Auth_model->GetPersonDayviseAmnt($value);
    //           $Pricesum+= $data[0]->total;
    //           }
    //          * */

    //         $expiry = $this->arrParamData['total_days'];
    //         $bookdata['chef_booking_detail'] = array('chef_id' => $this->arrParamData['chef_id'],
    //             'user_id' => $this->arrParamData['user_id'],
    //             'order_number' => $order_number,
    //             'book_date' => $this->arrParamData['book_date'],
    //             'book_time' => $this->arrParamData['book_time'],
    //             'expire_date' => $this->arrParamData['book_date'],
    //             // 'expire_date'=>date('Y-m-d', strtotime($this->arrParamData['book_date']. " + $expiry day")),
    //             'booking_type' => $this->arrParamData['booking_type'],
    //             'total_days' => $this->arrParamData['total_days'],
    //             'total_person' => !empty($varTotalPerson) ? array_sum($varTotalPerson) : '',
    //             'total_price' => $Pricetotal,
    //             'total_price_show' => $PricetotalShow,
    //             'address' => $this->arrParamData['address']['address'],
    //             'country' => $this->arrParamData['address']['country'],
    //             'state' => $this->arrParamData['address']['state'],
    //             'city' => $this->arrParamData['address']['city'],
    //             'phone' => $this->arrParamData['address']['phone'],
    //             'email' => $this->arrParamData['address']['email'],
    //             'pincode' => $this->arrParamData['address']['postal_code']);
    //             $bookdata['chef_booking_detail']['alergies'] = !empty($this->arrParamData['alergies']) ? $this->arrParamData['alergies'] : '';
    //         if ($this->arrParamData['booking_type'] == 1) {
    //             $bookdata['chef_booking_detail']['alergies'] = !empty($this->arrParamData['alergies']) ? $this->arrParamData['alergies'] : '';
    //         } elseif ($this->arrParamData['booking_type'] == 2) {
    //             $bookdata['chef_booking_detail']['foodbox_menu'] = !empty($this->arrParamData['foodbox_menu']) ? $this->arrParamData['foodbox_menu'] : '';
    //             $bookdata['chef_booking_detail']['foodbox_menu_company'] = !empty($this->arrParamData['foodbox_menu_company']) ? $this->arrParamData['foodbox_menu_company'] : '';
    //         } elseif ($this->arrParamData['booking_type'] == 3) {
    //             $bookdata['chef_booking_detail']['other'] = !empty($this->arrParamData['other']) ? $this->arrParamData['other'] : '';
    //         }

    //         $lastidBookid = $this->Auth_model->saveBookrequest($bookdata, json_encode($this->arrParamData));
    //         $arrDishID = $this->arrParamData['dish_id'];
    //         if (!empty($arrDishID) && !empty($lastidBookid)) {
    //             foreach ($arrDishID as $key => $value) {
    //                 $bookdata['chef_booking_dish'] = array('booking_id' => $lastidBookid,
    //                     'dish_id' => $value);
    //                 $this->Auth_model->saveDishrequest($bookdata);
    //             }
    //         }
    //         if (!empty($lastidBookid)) {
    //             $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $order_number);
    //         }
    //     }
    //     return json_encode($arrReturnData);
    // }

    private function handelBookrequest()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $bookdata = array();
        $couponData = (!empty($this->arrParamData['couponData'])) ? $this->arrParamData['couponData'] : "";
        $Lastid = $this->Auth_model->GetlastOrderId();
        $order_number = '';
        if (!empty($Lastid)) {
            $order_number = (int)$Lastid->id + 1;
            $order_number = '1000' . $order_number;
        } else {
            $order_number .= 10001;
        }
        $max_person = max($this->arrParamData['total_person']);
        $varTotalPerson = $this->arrParamData['total_person'];
        $Pricesum = $this->Auth_model->GetPersonDayviseAmnt($max_person);

        $Pricetotal = $Pricesum[0]->total;
        $PricetotalShow = $Pricesum[0]->show_total;

        $discountAmmount = '';
        if (!empty($couponData['amount_off'])) {
            $discountAmmount = (float)$Pricetotal - $couponData['amount_off'];
        }
        // var_dump($Pricesum);exit;
        //$Pricesum = 0;
        if (!empty($varTotalPerson)) {
            /* sum total person
             *  foreach($varTotalPerson as $key=>$value)
              {
              $data = $this->Auth_model->GetPersonDayviseAmnt($value);
              $Pricesum+= $data[0]->total;
              }
             * */
            $userCard = $this->Auth_model->getUserCard($this->arrParamData['user_id']);

            $expiry = $this->arrParamData['total_days'];

            $bookdata['chef_booking_detail'] = array('chef_id' => $this->arrParamData['chef_id'],
                'user_id' => $this->arrParamData['user_id'],
                'order_number' => $order_number,
                'book_date' => gmdate('Y-m-d', $this->arrParamData['book_datetime']),
                'book_time' => gmdate('H:i:s', $this->arrParamData['book_datetime']),
                'expire_date' => gmdate('Y-m-d H:i:s', $this->arrParamData['book_datetime']),
                // 'expire_date'=>date('Y-m-d', strtotime($this->arrParamData['book_date']. " + $expiry day")),
                'booking_type' => $this->arrParamData['booking_type'],
                'total_days' => $this->arrParamData['total_days'],
                'total_person' => !empty($varTotalPerson) ? array_sum($varTotalPerson) : '',
                'total_price' => $Pricetotal,
                'total_price_show' => $PricetotalShow,
                'coupon_code' => !empty($this->arrParamData['couponCode']) ? $this->arrParamData['couponCode'] : '',
                'coupon_ammount' => (!empty($couponData['amount_off'])) ? $couponData['amount_off'] : "",
                'discount_ammount' => $discountAmmount,
                'address' => $this->arrParamData['address']['address'],
                'country' => $this->arrParamData['address']['country'],
                'state' => $this->arrParamData['address']['state'],
                'city' => $this->arrParamData['address']['city'],
                'phone' => $this->arrParamData['address']['phone'],
                'email' => $this->arrParamData['address']['email'],
                'pincode' => $this->arrParamData['address']['postal_code']);
            $bookdata['chef_booking_detail']['alergies'] = !empty($this->arrParamData['alergies']) ? $this->arrParamData['alergies'] : '';
            if ($this->arrParamData['booking_type'] == 1) {
                $bookdata['chef_booking_detail']['alergies'] = !empty($this->arrParamData['alergies']) ? $this->arrParamData['alergies'] : '';
            } elseif ($this->arrParamData['booking_type'] == 2) {
                $bookdata['chef_booking_detail']['foodbox_menu'] = !empty($this->arrParamData['foodbox_menu']) ? $this->arrParamData['foodbox_menu'] : '';
                $bookdata['chef_booking_detail']['foodbox_menu_company'] = !empty($this->arrParamData['foodbox_menu_company']) ? $this->arrParamData['foodbox_menu_company'] : '';
            } elseif ($this->arrParamData['booking_type'] == 3) {
                $bookdata['chef_booking_detail']['other'] = !empty($this->arrParamData['other']) ? $this->arrParamData['other'] : '';
            }

            $lastidBookid = $this->Auth_model->saveBookrequest($bookdata, json_encode($this->arrParamData));
            $arrDishID = $this->arrParamData['dish_id'];
            if (!empty($arrDishID) && !empty($lastidBookid)) {
                foreach ($arrDishID as $key => $value) {
                    $bookdata['chef_booking_dish'] = array('booking_id' => $lastidBookid,
                        'dish_id' => $value);
                    $this->Auth_model->saveDishrequest($bookdata);
                }
            }

            if (!empty($lastidBookid)) {
                $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $order_number, 'cardInfo' => $userCard);
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * get current  booking by user id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetCurrentbooking()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $date = gmdate('Y-m-d H:i:s', strtotime('yesterday 12:00'));
        $isGet = $this->Auth_model->GetCurrentbooking($this->arrParamData['user_id'], $date);
        if (!empty($isGet)) {
            foreach ($isGet as $isGetobj) {
                if (strpos($isGetobj->user_image, "https://") !== false || strpos($isGetobj->user_image, "http://") !== false) {
                    $isGetobj->user_image = $isGetobj->user_image;
                } else {
                    $isGetobj->user_image = !empty($isGetobj->user_image) ? base_url() . '/' . $isGetobj->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get Past  booking by user id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetPastbooking()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $date = gmdate('Y-m-d H:i:s', strtotime('yesterday 12:00'));
        $isGet = $this->Auth_model->GetPastbooking($this->arrParamData['user_id'], $date);
        if (!empty($isGet)) {
            foreach ($isGet as $isGetobj) {
                $reviewed = $this->Auth_model->checkReviewed($isGetobj->id, $this->arrParamData['user_id']);
                if (strpos($isGetobj->user_image, "https://") !== false || strpos($isGetobj->user_image, "http://") !== false) {
                    $isGetobj->user_image = $isGetobj->user_image;
                } else {
                    $isGetobj->user_image = !empty($isGetobj->user_image) ? base_url() . '/' . $isGetobj->user_image : '';
                }
                $isGetobj->isReviewed = (!empty($reviewed)) ? true : false;
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get current  booking by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetChefCurrentbooking()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $date = gmdate('Y-m-d H:i:s', strtotime('yesterday 12:00'));
        $isGet = $this->Auth_model->GetChefCurrentbooking($this->arrParamData['chef_id'], $date);
        if (!empty($isGet)) {
            foreach ($isGet as $isGetobj) {
                if (strpos($isGetobj->user_image, "https://") !== false || strpos($isGetobj->user_image, "http://") !== false) {
                    $isGetobj->user_image = $isGetobj->user_image;
                } else {
                    $isGetobj->user_image = !empty($isGetobj->user_image) ? base_url() . '/' . $isGetobj->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get Past  booking by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetChefPastbooking()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $date = gmdate('Y-m-d H:i:s', strtotime('yesterday 12:00'));
        $isGet = $this->Auth_model->GetChefPastbooking($this->arrParamData['chef_id'], $date);
        if (!empty($isGet)) {
            foreach ($isGet as $isGetobj) {
                if (strpos($isGetobj->user_image, "https://") !== false || strpos($isGetobj->user_image, "http://") !== false) {
                    $isGetobj->user_image = $isGetobj->user_image;
                } else {
                    $isGetobj->user_image = !empty($isGetobj->user_image) ? base_url() . '/' . $isGetobj->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    function date_sort($a, $b)
    {
        var_dump("ghh");
        exit;
        return strtotime($a) - strtotime($b);
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetChefAllbooking()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $varPage = !empty($this->arrParamData['page']) ? ($this->arrParamData['page'] > 1) ? ($this->arrParamData['page'] - 1) * 10 : '' : '';
        $chef_id = $this->arrParamData['chef_id'];
        $isCount = $this->Auth_model->CountChefAllbooking($chef_id);
        $isCountWallet = $this->Auth_model->CountChefAllWallet($chef_id);
        $isCountCommonTips = $this->Auth_model->CountChefAllWalletCommontips($chef_id);
        $arrTotalBooking = array_sum(array($isCount->total_booking, $isCountWallet->total_booking, $isCountCommonTips->total_booking));
        $arrTotalIncome = array_sum(array($isCount->total_income, $isCountWallet->total_income, $isCountCommonTips->total_income));
        $bookDataArr = array($arrTotalBooking, $arrTotalIncome);
        $isGet = $this->Auth_model->GetChefAllbooking($chef_id, $varPage);
        $isWallet = $this->Auth_model->GetChefAllWallet($chef_id, $varPage);
        $isCommonTips = $this->Auth_model->GetChefAllCommonTips($chef_id, $varPage);

        $totalcountpage = ceil($isCount->total_booking / 10);
        $arrCommonTip = $this->Auth_model->getCommontipsprice();
        $persentageCmTip = (!empty($arrCommonTip)) ? $arrCommonTip->settings_value : 0;
        $totalcountpageWallet = ceil($isCountWallet->total_booking / 10);
        $totalcountpageCommonTips = ceil($isCountCommonTips->total_booking / 10);
        $GreaterCountPage = max($totalcountpage, $totalcountpageWallet, $totalcountpageCommonTips);
        if (!empty($isGet) || !empty($isWallet)) {
            foreach ($isGet as $isGetobj) {
                $isGetobj->type = "order";
                if (!empty($persentageCmTip)) {
                    //$minusAmount=($isGetobj->ammount*$persentageCmTip)/100;
                    //$isGetobj->ammount=$isGetobj->ammount-$minusAmount;
                }
                if (strpos($isGetobj->user_image, "https://") !== false || strpos($isGetobj->user_image, "http://") !== false)  {
                    $isGetobj->user_image = $isGetobj->user_image;
                } else {
                    $isGetobj->user_image = !empty($isGetobj->user_image) ? base_url() . '/' . $isGetobj->user_image : '';
                }
            }
            foreach ($isWallet as $isWalletobj) {
                if (strpos($isWalletobj->user_image, "https://") !== false || strpos($isWalletobj->user_image, "http://") !== false) {
                    $isWalletobj->user_image = $isWalletobj->user_image;
                } else {
                    $isWalletobj->user_image = !empty($isWalletobj->user_image) ? base_url() . '/' . $isWalletobj->user_image : '';
                }//  $isWalletobj->book_date=date('d M y',strtotime($isWalletobj->book_date));
                $isWalletobj->commontips_addeddate = date('d M y', strtotime($isWalletobj->commontips_addeddate));
            }
            foreach ($isCommonTips as $isCommonTipsobj) {
                $isCommonTipsobj->type = 'commontips';
                if (strpos($isCommonTipsobj->user_image, "https://") !== false || strpos($isCommonTipsobj->user_image, "http://") !== false) {
                    $isCommonTipsobj->user_image = $isCommonTipsobj->user_image;
                } else {
                    $isCommonTipsobj->user_image = !empty($isCommonTipsobj->user_image) ? base_url() . '/' . $isCommonTipsobj->user_image : '';
                } //  $isWalletobj->book_date=date('d M y',strtotime($isWalletobj->book_date));
                //  var_dump($isCommonTipsobj);exit;
                $isCommonTipsobj->commontips_addeddate = date('d M y', strtotime($isCommonTipsobj->commontips_addeddate));
            }
            $total = array_merge($isGet, $isWallet, $isCommonTips);
            //var_dump($total);exit;
            foreach ($total as $key => $part) {
                $sort[$key] = strtotime($part->book_date);
                $part->book_date = date('d M y', strtotime($part->book_date));
            }
            array_multisort($sort, SORT_DESC, $total);
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $total, 'bookdata' => array('TotalOrder' => $arrTotalBooking, 'TotalIncome' => round($arrTotalIncome, 2)), 'totalpage' => $GreaterCountPage);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef all  register_referal_code user
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetChefReferalData()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $referal_code = !empty($this->arrParamData['referal_code']) ? $this->arrParamData['referal_code'] : '';
        $isGet = $this->Auth_model->GetChefReferalData($referal_code);
        $arrData = array();
        $i = 0;
        if (!empty($isGet)) {
            foreach ($isGet as $key => $value) {

                //$arrData['status']=0;
                $arrData[$i]['fname'] = (!empty($value->fname)) ? $value->fname : '';
                $arrData[$i]['lname'] = (!empty($value->lname)) ? $value->lname : '';
                $arrData[$i]['status'] = 0;
                (!empty($value->status)) ? 0 : 1;
                $arrData[$i]['user_referal_code'] = (!empty($value->user_referal_code)) ? $value->user_referal_code : '';
                $i = $i + 1;
            }
        }
        if (!empty($isGet)) {
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $arrData);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get review  based on chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function GetReviewBy_Chefid()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $arrData = array();
        $arrData['user_id'] = !empty($this->arrParamData['user_id']) ? $this->arrParamData['user_id'] : '';
        $arrData['chef_id'] = !empty($this->arrParamData['chef_id']) ? $this->arrParamData['chef_id'] : '';
        $isGet = $this->Auth_model->GetReviewBy_Chefid($arrData);
        if (strpos($isGet->user_image, "https://") !== false || strpos($isGet->user_image, "http://") !== false) {
            $isGet->user_image = $isGet->user_image;
        } else {
            $isGet->user_image = !empty($isGet->user_image) ? base_url() . '/' . $isGet->user_image : '';
        }
        $isGet->image = !empty($isGet->image) ? base_url() . '/' . $isGet->image : '';
        if (!empty($isGet)) {
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    /*
     * save chef review data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    private function SaveReviewData()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $arrData = array();
        $arrData = array('user_id' => !empty($this->arrParamData['user_id']) ? $this->arrParamData['user_id'] : '',
            'name' => !empty($this->arrParamData['name']) ? $this->arrParamData['name'] : '',
            'ratings' => !empty($this->arrParamData['ratings']) ? $this->arrParamData['ratings'] : '',
            'review_text' => !empty($this->arrParamData['review_text']) ? $this->arrParamData['review_text'] : '',
            'chef_id' => !empty($this->arrParamData['chef_id']) ? $this->arrParamData['chef_id'] : '',
            'order_id' => !empty($this->arrParamData['order_id']) ? $this->arrParamData['order_id'] : ''
        );
        if (!empty($this->arrParamData['user_image'])) {
            $base64image = $this->common->commonbase64decode(UPLOAD_DIR, $this->arrParamData['user_image']);
            $arrData['image'] = $base64image;
        }
        $isGet = $this->Auth_model->SaveReviewData($arrData);
        if (!empty($isGet)) {
            $arrReturnData = array('status' => 200, 'message' => 'OK', 'data' => $isGet);
        }
        return json_encode($arrReturnData);
    }

    /*
     * handel stripe payment gateway based on token id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    private function StripePaymentHandler()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error!', 'type' => "error");
        $orderId = $this->arrParamData['order_id'];
        $isGet = $this->Auth_model->returnPaymentData($orderId);
        $objUser = $this->Auth_model->getChefProfileDetail($this->arrParamData['user_id']);

        if (!empty($isGet)) {
            try {
                require_once(APPPATH . 'libraries/Stripe/init.php');
                \Stripe\Stripe::setApiKey(STRIPE_SECRET_KEY);
                \Stripe\Stripe::setApiVersion(STRIPE_VERSION);

                if (!empty($this->arrParamData['payment_method_id'])) {
                    if (!empty($this->arrParamData['existCard'])) { // Using saved card to make payment
                        $intent = \Stripe\PaymentIntent::create(array(
                            "amount" => ($isGet->total_price - $isGet->coupon_ammount) * 100,
                            "currency" => "nok",
                            "confirmation_method" => "manual",
                            "confirm" => true,
                            "customer" => $objUser->stripe_id,
                            "setup_future_usage" => 'off_session',
                            "payment_method" => $this->arrParamData['payment_method_id'],
                            "metadata" => array('orderId' => $orderId,
                                'user_type' => "customer")
                        ));
                    } else {
                        $intent = \Stripe\PaymentIntent::create(array(
                            "amount" => ($isGet->total_price - $isGet->coupon_ammount) * 100,
                            "currency" => "nok",
                            "confirmation_method" => "manual",
                            "confirm" => true,
                            "setup_future_usage" => 'off_session',
                            "payment_method" => $this->arrParamData['payment_method_id'],
                            "metadata" => array('orderId' => $orderId,
                                'user_type' => "customer")
                        ));
                    }
                }

                if (!empty($this->arrParamData['payment_intent_id'])) {
                    $intent = \Stripe\PaymentIntent::retrieve(
                        $this->arrParamData['payment_intent_id']
                    );
                    $intent->confirm();
                }

                if (!empty($intent)) {
                    if ($intent->status == 'requires_action' &&
                        $intent->next_action->type == 'use_stripe_sdk') {
                        # Tell the client to handle the action
                        $arrReturnData = array('status' => 200, "requires_action" => true, "payment_intent_client_secret" => $intent->client_secret);
                    } else if ($intent->status == 'succeeded') {
                        # The payment didn’t need any additional actions and completed!
                        # Handle post-payment fulfillment
                        $orderId = $this->arrParamData['order_id'];
                        $userType = $intent->metadata->user_type;
                        $info_array = array(
                            "order_number" => $orderId,
                            "gross_amt" => $intent->amount / 100,
                            'currency' => $intent->currency,
                            'email' => $isGet->email,
                            'payment_status' => "completed",
                            "all_details" => serialize($intent)
                        );

                        if (!empty($this->arrParamData['savedCard']) && $this->arrParamData['savedCard']) {
                            if (!empty($objUser->stripe_id)) {
                                $objCustomer = \Stripe\Customer::update($objUser->stripe_id);

                                // Attach New Payment Method
                                $payment_method = \Stripe\PaymentMethod::retrieve(
                                    $intent->charges->data[0]->payment_method
                                );
                                $payment_method->attach(array(
                                    'customer' => $objUser->stripe_id,
                                ));
                            }

                            // Create new Stripe Customer if no exist
                            if (empty($objCustomer)) {
                                $objCustomer = \Stripe\Customer::create(array(
                                    "description" => $objUser->user_type,
                                    "email" => $objUser->email,
                                    "phone" => $objUser->phone,
                                    "payment_method" => $intent->payment_method
                                ));

                                $this->Auth_model->updateCustomerStripeInfo(array(
                                    "id" => $objCustomer->id,
                                    "userId" => $objUser->id
                                ));
                            }

                            $cardInfo = array(
                                'customer' => $isGet->user_id,
                                'user_id' => $userType == 'customer' ? $isGet->user_id : $isGet->chef_id,
                                'last4' => $intent->charges->data[0]->payment_method_details->card->last4,
                                'exp_month' => $intent->charges->data[0]->payment_method_details->card->exp_month,
                                'exp_year' => $intent->charges->data[0]->payment_method_details->card->exp_year,
                                'card_id' => $intent->charges->data[0]->payment_method,
                                'card_brand' => $intent->charges->data[0]->payment_method_details->card->brand
                            );

                            $this->Auth_model->saveUserCards($cardInfo);
                        }

                        $this->Auth_model->insertPaymentDataInPaymentTable($info_array);
                        $UpdateOrderId = $this->Auth_model->updatePaymentStatusInOrderTable($orderId, "1");
                        $this->getFirebasedata($isGet->user_id, $isGet->chef_id, $orderId);
//                        $UpdateChefChatTable = $this->Auth_model->updateOrderIdchatTable($isGet->user_id, $isGet->chef_id, $orderId);
                        $upHirestatus = $this->Auth_model->updatehirestatus($isGet->user_id, $isGet->chef_id);
                        $objCommonTipsprice = $this->Auth_model->getCommontipsprice();
                        $varCommonTipsPrice = ($isGet->total_price * $objCommonTipsprice->settings_value) / 100;
                        $arrChefCommonPriceData = array('order_id' => $orderId,
                            'chef_id' => $isGet->chef_id, 'common_tips' => $varCommonTipsPrice);
                        $objLastID = $this->Auth_model->insertCommontipsData($arrChefCommonPriceData);

                        // Send Push notification
                        $this->push_Notification($isGet->user_id, "You have a booking is made successfully. ", $isGet->chef_id, "booking", "Message");
                        $this->push_Notification($isGet->chef_id, "You received a new booking. ", $isGet->user_id, "booking", "Message");
                        $arrReturnData = array('status' => 200, 'message' => "Payment is made successful!");
                    }
                }
            } catch (Exception $e) {
                $arrReturnData = array('status' => 200, 'message' => $e->getMessage(), 'type' => "error");
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * handel stripe payment for member wallet
     * @param void
     * @author Shiv Kumar TiwariStripePaymentHandlerForMember
     * @date 12 june 2018
     */

    private function StripePaymentHandlerForMember()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error!', 'type' => "error");
        $VarUserId = $this->arrParamData['user_id'];
        if (!empty($VarUserId)) {
            try {
                $isGet = $this->Auth_model->getPlanAmmount();

                require_once(APPPATH . 'libraries/Stripe/init.php');
                \Stripe\Stripe::setApiKey(STRIPE_SECRET_KEY);
                \Stripe\Stripe::setApiVersion(STRIPE_VERSION);

                if (!empty($this->arrParamData['payment_method_id'])) {
                    $intent = \Stripe\PaymentIntent::create(array(
                        "amount" =>  $isGet->plan_amount * 100,
                        "currency" => "nok",
                        "description" => "Payment",
                        "confirmation_method" => "manual",
                        "confirm" => true,
                        "payment_method" => $this->arrParamData['payment_method_id'],
                        "metadata" => array('user_type' => "chef")
                    ));
                }

                if (!empty($this->arrParamData['payment_intent_id'])) {
                    $intent = \Stripe\PaymentIntent::retrieve(
                        $this->arrParamData['payment_intent_id']
                    );
                    $intent->confirm();
                }

                if (!empty($intent)) {
                    if ($intent->status == 'requires_action' &&
                        $intent->next_action->type == 'use_stripe_sdk') {
                        # Tell the client to handle the action
                        $arrReturnData = array('status' => 200, "requires_action" => true, "payment_intent_client_secret" => $intent->client_secret);
                    } else if ($intent->status == 'succeeded') {
                        # The payment didn’t need any additional actions and completed!
                        # Handle post-payment fulfillment

                        $fromPushNotify = $this->Auth_model->getRefrelCode($VarUserId);
                        if ($fromPushNotify !== false) {
                            $data = array('member_upgrade' => 1);
                            $this->Auth_model->UpgradeMember($VarUserId, $data);
                            $this->push_Notification($fromPushNotify, "Congratulation You have won " . $isGet->reffral_ammount . " KR", $VarUserId, "quick-pay", "Message");
                            $arrReturnData = array('status' => 200, 'message' => 'Ok', 'type' => "success");
                        } else {
                            $arrReturnData = array('status' => 200, 'message' => 'Payment successful but referral code user does not exists. Pease contact to admin@yperkokk.com.', 'type' => "error");
                        }
                    }
                }
            } catch (Exception $e) {
                $arrReturnData = array('status' => 200, 'message' => $e->getMessage(), 'type' => "error");
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * get data how many chef use single chef refrel code
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    private function GetWalletTotalAmmountTwoWeek()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $VarUserId = $this->arrParamData['user_id'];
        $IsTotal = $this->Auth_model->GetWalletTotalAmmountTwoWeek($VarUserId);
        if (!empty($IsTotal)) {
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $IsTotal);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get data how many chef use single chef refrel code
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    private function GetWalletDetailUser()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $VarUserId = $this->arrParamData['user_id'];
        $IsDetail = $this->Auth_model->GetWalletDetailUser($VarUserId);
        //$IsTotal=$this->Auth_model->GetWalletTotalAmmount($VarUserId);
        foreach ($IsDetail as $IsDetailobj) {
            $IsDetailobj->created_date = date('d M Y', strtotime($IsDetailobj->created_date));
        }
        if (!empty($IsDetail)) {
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $IsDetail);
        }
        return json_encode($arrReturnData);
    }

    private function getStartAndEndDate($week, $year)
    {
        $time = strtotime("1 January $year", time());
        $day = date('w', $time);
        $time += ((7 * $week) + 1 - $day) * 24 * 3600;
        $return[0] = date('Y-n-j', $time);
        $time += 6 * 24 * 3600;
        $return[1] = date('Y-n-j', $time);
        return $return;
    }

    /*
     * Update push notification by user id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    private function UpdateNotificationSetting()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $VarUserId = $this->arrParamData['user_id'];
        $updata = array('push_notification_settings' => $this->arrParamData['push_notification_settings']);
        $ISupdate = $this->Auth_model->UpdateNotificationSetting($VarUserId, $updata);
        if ($ISupdate) {
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $ISupdate);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef booking detail by order id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 19 june 2018
     */

    private function getChefOrderdetail()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error');
        $arrData = array('user_type' => $this->arrParamData['user_type'], 'id' => $this->arrParamData['id'], 'order_number' => (!empty($this->arrParamData['order_id'])) ? $this->arrParamData['order_id'] : '', 'chef_id' => $this->arrParamData['chef_id']);
        $IsOrder = $this->Auth_model->getChefOrderdetail($arrData);
        $IsChefDish = $this->Auth_model->orderChefDishDetailByOrderId($arrData);
        $user = array('email' => $IsOrder->email, 'fname' => $IsOrder->fname, 'lname' => $IsOrder->lname);
        $orderData = array('order' => $IsOrder, 'dish' => $IsChefDish, 'user' => $user);
        if (!empty($orderData)) {
            foreach ($IsChefDish as $IsChefDishobj) {
                $IsChefDishobj->image = !empty($IsChefDishobj->image) ? base_url() . '/' . $IsChefDishobj->image : '';
            }
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $orderData);
        }
        return json_encode($arrReturnData);
    }

    /*
     * get chef review data by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 june 2018
     */

    private function getChefReview()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Oops!');
        $varUserid = $this->arrParamData['chef_id'];
        if (!empty($varUserid)) {
            $data = array();
            $this->arrParamData['offset'] = (!empty($this->arrParamData['page']) && $this->arrParamData['page'] > 1) ? ($this->arrParamData['page'] - 1) * 10 : 0;
            $data['review'] = $this->Auth_model->getChefReview($this->arrParamData);
            foreach ($data['review'] as $datarevobj) {
                $datarevobj->created_date = !empty($datarevobj->created_date) ? date('d M Y', strtotime($datarevobj->created_date)) : '';
                if (strpos($datarevobj->user_image, "https://") !== false || strpos($datarevobj->user_image, "http://") !== false) {
                    $datarevobj->user_image = $datarevobj->user_image;
                } else {
                    $datarevobj->user_image = !empty($datarevobj->user_image) ? base_url() . '/' . $datarevobj->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $data);
        }

        return json_encode($arrReturnData);
    }

    /*
     * cron for insert data in wallet table
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 june 2018
     */

    public function cronForInsertDatainWallet()
    {
        log_message('error', 'Execute cronForInsertDatainWallet');
        $arrReturnData = array('status' => 200, 'message' => 'Oops!');
        // $varChefId = $this->arrParamData['chef_id'];
        $dynamicmonth = date('1 F Y');
        $intMonth = date('m', strtotime($dynamicmonth));
        $intYear = date('Y', strtotime($dynamicmonth));
        $date = cal_days_in_month(CAL_GREGORIAN, $intMonth, $intYear);
        $startdate = date('Y-m-d');
        $enddate = date("Y-m-$date");
        $sumprice = $this->Auth_model->sumCommonTipsPrice($startdate, $enddate);
        if ($sumprice['totalTips']->totalcommontips != 0) {
            $vardivideprice = $sumprice['totalTips']->totalcommontips / $sumprice['totalTips']->totalcommonchef;
            //var_dump($vardivideprice);exit;
            foreach ($sumprice['allChefList'] as $key => $value) {
                $ammount = $vardivideprice;//+ $value->common_tips;
                $arrayInsertdata = array('user_id' => $value->chef_id, 'ammount' => $ammount,
                    'type' => 'commontips', 'commontips_addeddate' => date('Y-m-d H:i:s'));
                $this->Auth_model->StripePaymentHandlerForMember($arrayInsertdata);
            }
        }
    }

    /*
     * get getCommonPricetoal by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 22 june 2018
     */

    private function getchefCommontips()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Oops!');
        $varChefId = $this->arrParamData['chef_id'];
        $data = $this->Auth_model->getCommonTipsPriceData($varChefId);
        if (!empty($data)) {
            foreach ($data as $datarevobj) {
                $intMonth = date('m', strtotime($datarevobj->startdate));
                $intYear = date('Y', strtotime($datarevobj->startdate));
                $startDate = date('1 M Y', strtotime($datarevobj->startdate));
                $date = cal_days_in_month(CAL_GREGORIAN, $intMonth, $intYear);
                $enddate = date("$date M Y", strtotime($datarevobj->startdate));
                $datarevobj->startdate = $startDate;
                $datarevobj->endDate = $enddate;
                $datarevobj->ammount = round($datarevobj->ammount, 2);
            }
            $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $data);
        }
        return json_encode($arrReturnData);
    }

    /*
     * update Device Info
     * @date 6 April
     */

    public function updateDeviceInfo()
    {
        return $this->Auth_model->updateDeviceInfo($this->arrParamData);
    }

    /*
     * login via google
     * @date 3 july
     */

    public function googleLogin()
    {
        return $this->Auth_model->googleLogin($this->arrParamData);
    }

    /*
     * login via facebook
     * @date 3 july
     */

    public function fbLogin()
    {
        return $this->Auth_model->fbLogin($this->arrParamData);
    }

    /*
     * Change password
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    private function changePassword()
    {
        $arrReturnData = array('status' => 201, 'message' => OOPS);
        $isupdated = $this->Auth_model->changePassword($this->arrParamData);
        if ($isupdated == "success") {
            $arrReturnData = array('status' => 200, 'message' => 'Password changed successfully.');
        } elseif ($isupdated == "error") {
            $arrReturnData = array('status' => 201, 'message' => 'Both password not match.');
        } else {
            $arrReturnData = array('status' => 201, 'message' => 'Old Password Does not match!');
        }
        return json_encode($arrReturnData);
    }

    /*
     * forget password send user email link
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    private function forget_password()
    {
        $arrReturnData = array('status' => 201, 'message' => 'Oops!');
        $varEmail = $this->arrParamData['email'];
        $isExits = $this->Auth_model->isEmailAlready($varEmail);
        if ($isExits) {
            $this->load->helper('string');
            $varForgetToken = array('forget_token' => random_string('alnum', 6));
            $isUpdate = $this->Auth_model->updateForgetToken($varEmail, $varForgetToken);
            if ($isUpdate) {
                $linkurl = $varForgetToken['forget_token'];
                // $linkurl="http://localhost/yper-web/forgetpassword/".$varForgetToken['forget_token'];
                // $linkurl="http://yperkokk.com/yper-app/forgetpassword/".$varForgetToken['forget_token'];
                $body = $this->emails->SendForgetEmail($linkurl);
                //$this->emails->sendMailViaGrid(array('to' => $varEmail, "subject" => "Forget Password", 'name' => "Sales Team - Yper", "body" => $body));
                $arrEmaildata = array(
                    'to' => $varEmail,
                    "subject" => "Reset Password",
                    'msg' => "Hi <br/><br/>.Please use the below code to reset your password in yper app<br/><br/><strong>" . $linkurl . "</strong><br/><br/>Thanks,<br/><br/>Team Yper"
                );
                $this->sendEmail($arrEmaildata);
                $arrReturnData = array('status' => 200, 'message' => 'Your Forget Email Link send on your email');
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * update user reset password
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    public function Resetpassword()
    {
        $arrReturnData = array('status' => 201, 'message' => 'Oops!');
        $forget_token = $this->arrParamData['forget_token'];
        if (!empty($forget_token)) {
            $data = array('new_pass' => $this->arrParamData['new_pass'], 'confirm_pass' => $this->arrParamData['confirm_pass']);
            $isUpdate = $this->Auth_model->ResetPassword($forget_token, $data);
            if ($isUpdate) {
                $varForgetToken = array('forget_token' => '');
                $objData = $this->Auth_model->NullForgetToken($forget_token, $varForgetToken);
                $arrReturnData = array('status' => 200, 'message' => $objData);
            }
        }
        return json_encode($arrReturnData);
    }

    /*
     * firebase function get data and delete
     */

    public function getFirebasedata($user_idfromdata, $user_idtodata, $orderId)
    {
        require_once(FCPATH . '/vendor/autoload.php');
        // require '/vendor/autoload.php';
        $user_idfrom = $user_idfromdata;
        $user_idto = $user_idtodata;
// This assumes that you have placed the Firebase credentials in the same directory
// as this PHP file.
        $serviceAccount = ServiceAccount::fromJsonFile('adproject-1098-36a5a166e46c.json');
        $firebase = (new Factory)
            ->withServiceAccount($serviceAccount)
            // The following line is optional if the project id in your credentials file
            // is identical to the subdomain of your Firebase project. If you need it,
            // make sure to replace the URL with the URL of your project.
            ->withDatabaseUri('https://adproject-1098.firebaseio.com/')
            ->create();
        $database = $firebase->getDatabase();
        $newPost = $database
            ->getReference('buddychats/' . $user_idfrom . '/' . $user_idto . '');
        $newPostchild = $database
            ->getReference('buddychats/' . $user_idto . '/' . $user_idfrom . '');
        $getuserdata = $newPostchild->getSnapshot();
        $value = $getuserdata->getValue();

        if (!empty($value)) {
            foreach ($value as $keyObj => $valObj) {
                $user_id_from = ($valObj['sentby'] == $user_idfrom) ? $user_idfrom : $user_idto;
                $user_id_to = ($valObj['sentby'] == $user_idfrom) ? $user_idto : $user_idfrom;
                $time = date("Y-m-d h:i:s", $valObj['timestamp'] / 1000);
                $data = array(
                    'order_id' => $orderId,
                    'user_id_from' => $user_id_from,
                    'user_id_to' => $user_id_to,
                    'message' => $valObj['message'],
                    'date_created' => $time
                );
                $insertchatadata = $this->Auth_model->UserChatSaveDate($data);
                $insertchatatempdata = $this->Auth_model->UserChatTempSaveDate($data);
            }
            $newPost->remove();
            $newPostchild->remove();
        }
    }

    /*
     * get chef chat by order id
     */

    private function UserChatGetDataByorderId()
    {
        $arrReturnData = array('status' => 201, 'message' => 'Oops!');
        $VarData = $this->arrParamData;
        $from_user_image = $this->Auth_model->getUserProfileDetail($VarData['user_id_from']);
        $to_user_image = $this->Auth_model->getUserProfileDetail($VarData['user_id_to']);
        $getData = $this->Auth_model->UserChatGetDataByorderId($VarData);
        if (!empty($getData)) {
            if (!empty($from_user_image->user_image)) {
                if (strpos($from_user_image->user_image, "http") !== false) {
                    $from_user_image->user_image = $from_user_image->user_image;
                } else {
                    $from_user_image->user_image = !empty($from_user_image->user_image) ? base_url() . '/' . $from_user_image->user_image : '';
                }
            }
            if (!empty($to_user_image->user_image)) {
                if (strpos($to_user_image->user_image, "http") !== false) {
                    $to_user_image->user_image = $to_user_image->user_image;
                } else {
                    $to_user_image->user_image = !empty($to_user_image->user_image) ? base_url() . '/' . $to_user_image->user_image : '';
                }
            }
            $arrReturnData = array('status' => 200, 'data' => $getData, 'fromImage' => $from_user_image->user_image, 'toImage' => $to_user_image->user_image);
        }
        return json_encode($arrReturnData);
    }

    /*
     * save user chat start data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 17 july 2018
     */

    private function UserChatSaveData()
    {
        $arrReturnData = array('status' => 201, 'message' => 'Oops!');
        $VarData = $this->arrParamData;
        if (!empty($VarData)) {
            $SaveDataChattbl = array('chat_start_from' => $VarData['user_id_from'], 'chat_start_to' => $VarData['user_id_to'], 'hire_status' => 0);
            $this->Auth_model->StartChatSaveData($SaveDataChattbl);
            $arrReturnData = array('status' => 200, 'message' => 'Success');
        }
        return json_encode($arrReturnData);
    }

    public function sendEmail($data)
    {

        $this->load->library('email');
        $config = array(
            'charset' => 'utf-8',
            'wordwrap' => TRUE,
            'mailtype' => 'html'
        );
        $this->email->initialize($config);
        $this->email->from('contact@yperkokk.com', 'Yper Contact');
        $this->email->to($data['to']);
        $this->email->subject($data['subject']);
        $this->email->message($data['msg']);
        $this->email->set_mailtype('html');
        $this->email->send();
    }

    public function verify($slug)
    {
        if (!empty($slug)) {
            $chkExitSlug = $this->Auth_model->chkExitSlug($slug);
            //var_dump($chkExitSlug->id);exit;
            if (!empty($chkExitSlug)) {
                $userId = $chkExitSlug->id;
                $arrUpdate = array('verification_code' => '', 'status' => 1);
                $updateuserId = $this->Auth_model->update_users_status($userId, $arrUpdate);
                $this->load->view('thankyou');
            } else {
                $this->load->view('error');
            }
        }

    }

    public function app_share_url()
    {
        $get = (!empty($_GET['type'])) ? $_GET['type'] : '';
        $data = $this->Auth_model->app_share_url($get);
        echo json_encode(array('status' => 200, 'data' => array('url' => $data->settings_value)));
    }

    private function StripeCouponOff()
    {
        $arrReturnData = array('status' => 200, 'message' => 'Error!', 'type' => "error");
        $couponId = $this->arrParamData['coupon_id'];
        $amount = $this->arrParamData['amount'];
        $data = array();
        if (!empty($amount)) {

            require_once(APPPATH . 'libraries/Stripe/init.php');
            \Stripe\Stripe::setApiKey(STRIPE_SECRET_KEY);
            try {
                $couponData = \Stripe\Coupon::retrieve($couponId);
                if (!empty($couponData['id'])) {
                    if ($couponData['valid'] == true) {
                        if (!empty($couponData['amount_off'])) {
                            $round_off = $couponData['amount_off'] / 100; // convert unit sen to amount
                            $data['ammount'] = $amount;
                            $data['amount_off'] = $round_off;
                            $data['totalammount'] = $amount - $round_off;
                            $data['valid'] = $couponData['valid'];
                        } else {
                            $percentage = $couponData['percent_off_precise'];
                            $totalWidth = $amount;
                            $new_width = ($percentage / 100) * (float)$totalWidth;
                            $data['ammount'] = $amount;
                            $data['percentage'] = $percentage;
                            $data['amount_off'] = round($new_width, 2);
                            $data['totalammount'] = round(($amount) - ($new_width), 2);
                            $data['valid'] = $couponData['valid'];
                        }
                        $arrReturnData = array('status' => 200, 'message' => 'Success', 'data' => $data);
                    } else {
                        $arrReturnData = array('status' => 200, 'message' => array("message" => "Coupon code is expire or invalid"), 'type' => "error");
                    }
                }

            } catch (\Stripe\Exception\ApiErrorException $e) {
                $arrReturnData = array('status' => 200, 'message' => $e->getMessage(), 'type' => "error");
            }
        }
        return json_encode($arrReturnData);
    }


    /*
     * remove chat meassge
     * @param void
     * @author Manish Kumar Tiwari
     * @date 18 March 2020
     */
    private function removeChecfChatList()
    {
        $getdata = $this->Auth_model->changeChatListStatus($this->arrParamData['chatId']);
        $arrReturnData = array('status' => 200, 'message' => 'OK');
        return json_encode($arrReturnData);
    }

    public function sendMailToNewChecf($email)
    {
        $mesg = $this->load->view('mail/new_chef', '', true);
        $config = array(
            'charset' => 'utf-8',
            'wordwrap' => TRUE,
            'mailtype' => 'html'
        );

        $this->email->initialize($config);
        $this->email->from('uberkokk2017@outlook.com', 'Yper');
        $this->email->to($email);
        $this->email->subject('Welcom to Yper');
        $this->email->message($mesg);
        $this->email->send();
    }

    public function sendBookingReminders()
    {
        $dayReminders = $this->Auth_model->get24hBooking();
        $hourReminders = $this->Auth_model->getLastHourBooking();

        log_message("error", "Scheduled Booking Reminders - 24 Hours: ". count($dayReminders));
        log_message("error", "Scheduled Booking Reminders - 1 Hour: ". count($hourReminders));

        foreach ($dayReminders as $row) {
            $this->push_Notification($row->chef_id, "Booking with ".$row->fname. " " .$row->lname. " in 24 hours later. ", "", "reminder", "Reminder");
        }

        foreach ($hourReminders as $row) {
            $this->push_Notification($row->chef_id, "Booking with ".$row->fname. " " .$row->lname. " in an hour later. ", "", "reminder", "Reminder");
        }
    }
}
