<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Auth_model extends CI_Model {
    /*
     * validates whether the access token is of auth user or not
     * @param $varUserId,$varAccessToken
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function validateAccessToken($varUserId, $varAccessToken) {
        $objData = $this->db->select('id')->from("tbl_users")->where("id='{$varUserId}' AND access_tocken='{$varAccessToken}'")->get()->row();
        if (!empty($objData)) {
            return true;
        }
        return false;
    }

    /*
     * update the access token after signup or login
     * @param $varUserId,$varAccessToken
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function updateAccessToken($varUserId, $varAccessToken) {
        $this->db->set(array('access_tocken' => $varAccessToken));
        $this->db->where('id', $varUserId);
        $this->db->update("tbl_users");
    }

    /*
     * check whether email exists or not
     * @param $varEmail
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function isEmailAlready($varEmail) {
        $queryCheck = $this->db->query("SELECT id FROM tbl_all_users WHERE LOWER(email)= '{$varEmail}'");
        return ($queryCheck->num_rows() > 0) ? true : false;
    }

    public function checkReferal($varRef) {
        $queryCheck = $this->db->query("SELECT id FROM tbl_all_users WHERE user_referal_code= '{$varRef}'");
        return ($queryCheck->num_rows() > 0) ? true : false;
    }

    /*
     * signup user
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function isUser($varEmail, $varPass) {
        $queryCheck = $this->db->query("SELECT id,push_notification_settings,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,date_created 
         FROM tbl_all_users 
        WHERE LOWER(email)= '{$varEmail}' 
        AND pass = '{$varPass}'");
        // var_dump($queryCheck->row());exit;
        return $queryCheck->row();
    }

    /*
     * insert device id after login
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    public function insertDeviceid($deviceid, $userId) {
        $this->db->where('id', $userId)->update('tbl_all_users', $deviceid);
        return true;
    }

    /*
     * signup user
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function registerChef($argData, $varMyref) {
        $arrData = array('fname' => $argData['fname'],
            'lname' => $argData['lname'],
            'email' => $argData['email'],
            'pass' => md5(trim($argData['password'])),
            'phone' => $argData['phone'],
            'user_referal_code' => $varMyref,
            'latitude' => !empty($argData['latitude']) ? $argData['latitude'] : '',
            'longitude' => !empty($argData['longitude']) ? $argData['longitude'] : '',
            'register_referal_code' => $argData['refral_code'],
            'verification_code' => $argData['verification_code'],
            "user_type" => "chef", 'status' => '1');
        $varIsInsert = $this->db->insert('tbl_all_users', $arrData);
        if ($varIsInsert) {
            $varUserId = $this->db->insert_id();
            $arrProfileData = array('user_id' => $varUserId, 'address' => !empty($argData['address']) ? $argData['address'] : '', 'city' => "");
            $this->db->insert('tbl_chef_profile', $arrProfileData);
            return true;
        } else {
            return false;
        }
    }

    /*
     * update chef pofile
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function updateChefProfile($argData) {
        // var_dump($argData);
        $arrData = array('fname' => !empty($argData['fname']) ? $argData['fname'] : '',
            'lname' => !empty($argData['lname']) ? $argData['lname'] : '',
            'phone' => !empty($argData['phone']) ? $argData['phone'] : '',
            'latitude' => !empty($argData['latitude']) ? $argData['latitude'] : '',
            'longitude' => !empty($argData['longitude']) ? $argData['longitude'] : ''
        );
        if (!empty($argData['user_image'])) {
            $arrData['user_image'] = $argData['user_image'];
        }
        $this->db->set($arrData);
        $this->db->where('id', $argData['userId']);
        $isUpdated = $this->db->update("tbl_all_users");
        $arrDataP = array(
            'user_id' => !empty($argData['userId']) ? $argData['userId'] : '',
            'address' => !empty($argData['address']) ? $argData['address'] : '',
            'city' => !empty($argData['city']) ? $argData['city'] : '',
            'country' => !empty($argData['country']) ? $argData['country'] : '',
            'about_me' => !empty($argData['about_me']) ? $argData['about_me'] : ''
        );
        $getChefProfileDetail = $this->getChefProfileDetail($argData['userId']);
        $this->db->set($arrDataP);
        $this->db->where('user_id', $argData['userId']);
        $isUpdated = !empty($getChefProfileDetail->user_id) ? $this->db->update("tbl_chef_profile") : $this->db->insert("tbl_chef_profile", $arrDataP);
        // var_dump($getChefProfileDetail);exit;
        return array('isupdated' => $isUpdated, 'getChefProfileDetail' => $getChefProfileDetail);
    }

    /*
     * update chef pofile
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function updateProfile($argArrData) {
        $arrData = array('first_name' => $argArrData['fname'],
            'last_name' => $argArrData['lname'],
            'dob' => $argArrData['dob'],
            'email' => $argArrData['email'],
            'phone' => 'phone', 'gender' => $argArrData['gender']);
        $this->db->set($arrData);
        $this->db->where('id', $argArrData['userId']);
        $isUpdated = $this->db->update("tbl_users");
        return $isUpdated;
    }

    /*
     * update change password 
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function changePassword($argArrData) {
        $objData = $this->db->select('pass')->from("tbl_all_users")->where("id='{$argArrData['user_id']}'")->get()->row();
        //var_dump($objData);exit;
        if (!empty($objData) && $objData->pass == md5(trim($argArrData['old_pass'])) && ($argArrData['new_pass'] == $argArrData['confirm_pass'])) {
            $arrData = array('pass' => md5(trim($argArrData['new_pass'])));
            $this->db->set($arrData);
            $this->db->where('id', $argArrData['user_id']);
            $isUpdated = $this->db->update("tbl_all_users");
            return $msg = "success";
        } elseif (!empty($objData) && ($objData->pass == md5(trim($argArrData['old_pass']))) && ($argArrData['new_pass'] != $argArrData['confirm_pass'])) {
            return $msg = "error";
        } else {
            return false;
        }
    }

    /*
     * signup user
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function getChefProfileDetail($varuserId) {
        $queryCheck = $this->db->query("SELECT u.id,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,register_type,cp.user_id,cp.about_me,date_created,cp.about_me,cp.address,cp.city,cp.country,stripe_id 
         FROM tbl_all_users u left join tbl_chef_profile cp ON cp.user_id = u.id
        WHERE u.id = '{$varuserId}'");
        return $queryCheck->row();
    }

    /*
     * request data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 14 May 2018
     */

    public function insertMobilParamData($jsonStr) {
        $this->db->insert('tbl_request_data', $jsonStr);
    }

    /*
     * addChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 14 May 2018
     */

    public function addChefDishData($jsonStr) {
        $this->db->insert('tbl_Chefadd_dish', $jsonStr);
        return $this->db->insert_id();
    }

    /*
     * countChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 14 May 2018
     */

    public function countChefDishData($varUserid) {
        return $this->db->select('(count(user_id)) as count')
            ->from('tbl_Chefadd_dish')
            ->where('user_id', $varUserid)->get()->row();
    }

    /*
     * getChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 May 2018
     */

    public function getChefDishdata($varid, $varPerPage) {
        $this->db->select('*');
        $this->db->from('tbl_Chefadd_dish');
        $this->db->where('user_id', $varid);
        $this->db->order_by('id', 'desc');
        $this->db->limit('10', $varPerPage);
        return $this->db->get()->result();
    }

    /*
     * countChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 May 2018
     */

    public function countgetChefDishdata($varid) {
        $this->db->select('count(id) AS totalcount');
        $this->db->from('tbl_Chefadd_dish');
        $this->db->where('user_id', $varid);
        return $this->db->get()->row();
    }

    /*
     * getChefdish data detail
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function getDishDetail($varid, $dishid) {
        $this->db->select('*');
        $this->db->from('tbl_Chefadd_dish');
        $this->db->where('user_id', $varid);
        $this->db->where('id', $dishid);
        return $this->db->get()->row();
    }

    /*
     * updateChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function updateChefDishdata($chefdata, $chefid) {
        $this->db->where('id', $chefid)->update('tbl_Chefadd_dish', $chefdata);
        return true;
    }

    /*
     * ChefProfileDishdataUpdate status allow maximum 4 data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    public function updateChefProfileDishStatus($chefdata, $chefid, $userId) {
        $varWhereclause = array('user_id' => $userId, 'status' => '1');
        $countUserstatus = $this->db->select('count(tbl_Chefadd_dish.id) as totalcount')->from('tbl_Chefadd_dish')->where($varWhereclause)->get()->row();
        $isUpdated = (($countUserstatus->totalcount) <= 4 || ($chefdata['status'] == '0')) ? $this->db->where('id', $chefid)->update('tbl_Chefadd_dish', $chefdata) : false;
        return ($isUpdated == true) ? "Success" : "Error";
    }

    /*
     * ChefProfileDishdataadd status allow maximum 4 data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */

    public function addChefProfileCount($userId) {
        $varWhereclause = array('user_id' => $userId, 'status' => '1');
        $countUserstatus = $this->db->select('count(tbl_Chefadd_dish.id) as totalcount')->from('tbl_Chefadd_dish')->where($varWhereclause)->get()->row();
        $msg = ($countUserstatus->totalcount < 4) ? "Success" : "Error";
        return array('msg' => $msg, 'countUserstatus' => $countUserstatus);
    }

    /*
     * deleteChefdish data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function deleteChefDishdata($id) {
        $this->db->where('id', $id)->delete('tbl_Chefadd_dish');
        if ($this->db->affected_rows() > 0) {
            return true;
        }
    }

    /*
     * get all country data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function getAllcountryList() {
        return $this->db->select('*')->from('countries')->get()->result();
    }

    /*
     * signupasuser data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function registerUser($argData) {
        $arrData = array('fname' => $argData['fname'],
            'lname' => $argData['lname'],
            'email' => $argData['email'],
            'pass' => md5(trim($argData['password'])),
            'phone' => $argData['phone'],
            'latitude' => !empty($argData['latitude']) ? $argData['latitude'] : '',
            'longitude' => !empty($argData['longitude']) ? $argData['longitude'] : '',
            //  'register_referal_code' => $argData['refral_code'],
            'verification_code' => $argData['verification_code'],
            "user_type" => "user", 'status' => '0');
        $varIsInsert = $this->db->insert('tbl_all_users', $arrData);
        if ($varIsInsert) {
            $varUserId = $this->db->insert_id();
            $arrProfileData = array('user_id' => $varUserId, 'address' => !empty($argData['address']) ? $argData['address'] : '', 'city' => "");
            $this->db->insert('tbl_chef_profile', $arrProfileData);
            return true;
        } else {
            return false;
        }
    }

    /*
     * Update user data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function updateuserProfile($argData) {
        // var_dump($argData);
        $arrData = array('fname' => !empty($argData['fname']) ? $argData['fname'] : '',
            'lname' => !empty($argData['lname']) ? $argData['lname'] : '',
            'phone' => !empty($argData['phone']) ? $argData['phone'] : '',
        );
        if (!empty($argData['user_image'])) {
            $arrData['user_image'] = $argData['user_image'];
        }
        $this->db->where('id', $argData['userId']);
        $this->db->update("tbl_all_users", $arrData);
        $getUserProfileDetail = $this->getUserProfileDetail($argData['userId']);
        return array('isupdated' => true, 'getUserProfileDetail' => $getUserProfileDetail);
    }

    /*
     * get signup user data
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function getUserProfileDetail($varuserId) {
        return $this->db->select('*')->from('tbl_all_users')
            ->join('tbl_chef_profile', 'tbl_chef_profile.user_id=tbl_all_users.id', 'left')
            ->where('tbl_all_users.id', $varuserId)->
            get()->row();
    }

    /*
     * get chef detail use lat,long
     * @param $arrData
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */

    public function getCheflocation($data, $varPerPage) {
        $latitude = $data['latitude'];
        $longitude = $data['longitude'];
        $query = "SELECT tbl_all_users.*,AVG(tbl_chef_reviews.ratings) as review,tbl_chef_profile.user_id,tbl_chef_profile.address,
                tbl_chef_profile.city,tbl_chef_profile.about_me,countries.name,
                (3959  * acos( cos( radians($latitude) ) * cos( radians( `latitude` ) ) * cos( radians( `longitude` ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( `latitude` ) ) ) ) as distance 
                FROM `tbl_all_users` left join tbl_chef_profile on tbl_chef_profile.user_id=tbl_all_users.id 
                left join countries on countries.id=tbl_chef_profile.country 
                left join tbl_chef_reviews on tbl_chef_reviews.chef_id=tbl_all_users.id  
                left join tbl_Chefadd_dish on tbl_Chefadd_dish.user_id=tbl_all_users.id 
                where tbl_all_users.user_type='chef' 
                and tbl_all_users.member_upgrade=1 group by id order by distance  asc";
        return $this->db->query($query)->result();
    }

    /*
     * get chef detail use lat,long with pagination
     * @param $arrData
     * @param $page, $pageCount
     * @author Soon Lai
     * @date 01 August 2020
     */

    public function getCheflocationWithPagination($data, $page, $pageCount) {
        $latitude = $data['latitude'];
        $longitude = $data['longitude'];
        $name = '';

        if (isset($data['name'])) {
            $name = $data['name'];
        }

        $query = "SELECT * FROM (SELECT tbl_all_users.*,AVG(tbl_chef_reviews.ratings) as review,tbl_chef_profile.user_id,tbl_chef_profile.address,
                tbl_chef_profile.city,tbl_chef_profile.about_me,countries.name,
                (3959  * acos( cos( radians($latitude) ) * cos( radians( `latitude` ) ) * cos( radians( `longitude` ) - radians($longitude) ) + sin( radians($latitude) ) * sin( radians( `latitude` ) ) ) ) as distance 
                FROM `tbl_all_users` left join tbl_chef_profile on tbl_chef_profile.user_id=tbl_all_users.id 
                left join countries on countries.id=tbl_chef_profile.country 
                left join tbl_chef_reviews on tbl_chef_reviews.chef_id=tbl_all_users.id  
                left join tbl_Chefadd_dish on tbl_Chefadd_dish.user_id=tbl_all_users.id 
                where tbl_all_users.user_type='chef' 
                and (tbl_all_users.fname like '%$name%' or tbl_all_users.lname like '%$name%')
                and tbl_all_users.member_upgrade=1 group by id order by distance  asc) tb LIMIT $page, $pageCount";
        return $this->db->query($query)->result();
    }

    /*
     * get chef name by keyword
     * @param $keyword
     * @author Soon Lai
     * @date 01 September 2020
     */

    public function getChefByKeyword($keyword) {
        $query = "SELECT fname, lname FROM tbl_all_users
                where tbl_all_users.user_type='chef' 
                and tbl_all_users.fname like '%$keyword%' or tbl_all_users.lname like '%$keyword%'
                and tbl_all_users.member_upgrade=1";
        return $this->db->query($query)->result();
    }

    /*
     * count allchef rows
     * @param $arrData
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */

    public function countChefRows() {
        return $this->db->select('count(id) as totalcount')->from('tbl_all_users')->where('user_type', 'chef')->get()->row();
    }

    /*
     * count active chef count
     * @author Soon Lai
     * @date 01 Aug 2020
     */

    public function countTotalChefRows() {
        return $this->db->select('count(id) as totalcount')->from('tbl_all_users')
            ->where('user_type', 'chef')
            ->where('member_upgrade', 1)
            ->get()->row();
    }

    /*
     * verify user verification code
     * @param $arrData
     * @author Shiv Kumar Tiwari
     * @date 18 May 2018
     */

    public function VerifyUserCodeCheck($argData) {
        $where = array('email' => $argData['email'], 'verification_code' => $argData['verification_code']);
        $this->db->select('*')->from('tbl_all_users')->where($where);
        $query = $this->db->get();
        return ($query->num_rows() > 0) ? true : false;
    }

    /*
     * Update user status after verify code
     * @param $arrData
     * @author Shiv Kumar Tiwari
     * @date 18 May 2018
     */

    public function UpdateStatusUser($argData, $ChangeStatus) {
        $where = array('email' => $argData['email']);
        $this->db->where($where)->update('tbl_all_users', $ChangeStatus);
        return true;
    }

    /*
     * get chef profile
     * @param $arrData
     * @author Shiv Kumar Tiwari
     * @date 18 May 2018
     */

    public function getChefProfiledata($varuserId) {
        $queryCheck = $this->db->query("SELECT u.id,email,fname,lname,latitude,longitude,register_type,
            user_image,cp.about_me,cp.address,cp.city,countries.name as country 
         FROM tbl_all_users u left join tbl_chef_profile cp ON cp.user_id = u.id
          left join countries on countries.id=cp.country
        WHERE u.id = '{$varuserId}'");
        return $queryCheck->row();
    }

    /*
     * get Chefdish data by user id
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 May 2018
     */

    public function getChefDishbyUserid($varid) {
        $this->db->select('tbl_Chefadd_dish.grocery,tbl_Chefadd_dish.id,tbl_Chefadd_dish.name,tbl_Chefadd_dish.image');
        $this->db->from('tbl_Chefadd_dish');
        $this->db->where('user_id', $varid);
        $this->db->where('status', 1);
        $this->db->order_by('id', 'desc');
        return $this->db->get()->result();
    }

    /*
     * get Chef review
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 May 2018
     */

    public function getChefallReview($varid) {
        $this->db->select('tbl_chef_reviews.*,tbl_all_users.fname,tbl_all_users.user_image,tbl_all_users.register_type');
        $this->db->from('tbl_chef_reviews');
        $this->db->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_reviews.user_id', 'inner');
        $this->db->where('tbl_chef_reviews.chef_id', $varid);
        $this->db->where('tbl_chef_reviews.status', '1');
        $this->db->order_by('tbl_chef_reviews.id', 'desc');
        return $this->db->get()->result();
    }

    /*
     * get device id chat time
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 24 May 2018
     */

    public function getDeviceidChat($userId) {
        return $this->db->where('id', $userId)->select('tbl_all_users.device_id')->from('tbl_all_users')->get()->row();
    }

    /*
     * save user chat data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 24 May 2018
     */

    public function UserChatSaveDate($SaveData) {
        $this->db->insert('tbl_chef_user_chat', $SaveData);
        return $this->db->insert_id();
    }

    /*
     * save user chat start data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 24 May 2018
     */

    public function StartChatSaveData($SaveData) {
        $where = array(
            'chat_start_from' => $SaveData['chat_start_from'],
            'chat_start_to' => $SaveData['chat_start_to'],
            'hire_status'=> 0,
            'chat_delete_status' => 0
        );
        $getid = $this->db->select('*')->from('tbl_start_chat')->where($where)->get()->row();
        // var_dump($getid->hire_status);exit;
        if(empty($getid)) {
            $this->db->insert('tbl_start_chat', $SaveData);
        } elseif (!empty($getid)) {
            $upTime = array('last_chattime' => date('Y/m/d H:i:s'));
            $this->db->where('id', $getid->id)->update('tbl_start_chat', $upTime);
        }
        return $this->db->insert_id();
    }

    /*
     * get  device id chat data for send push notification user
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */

    public function getDeviceid($user_id) {
        $where = array('id' => $user_id, 'push_notification_settings' => 1);
        return $this->db->select('tbl_all_users.device_id, tbl_all_users.device_platform' )->from('tbl_all_users')->where($where)->get()->row();
    }

    /*
     * get user chat data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */

    public function UserChatGetDate($VarData, $varPerPage) {
        $wherequery = "((user_id_from={$VarData['user_id_from']} AND user_id_to={$VarData['user_id_to']}) OR (user_id_from={$VarData['user_id_to']} AND user_id_to={$VarData['user_id_from']})) and order_id is NULL";
        return $this->db->select('tbl_chef_user_chat.date_created as date,tbl_chef_user_chat.id,tbl_chef_user_chat.user_id_from,tbl_chef_user_chat.user_id_to,tbl_chef_user_chat.message')->from('tbl_chef_user_chat')->where($wherequery)->
        order_by('id', 'desc')->limit('10', $varPerPage)->get()->result();
    }

    /*
     * count send push notification user
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */

    public function countSendnotifydata($VarData) {
        $where = array('user_id_from' => $VarData['user_id_from'], 'user_id_to' => $VarData['user_id_to']);
        return $this->db->select('(count(id)) as count')->from('tbl_chef_user_chat')->where($where)->get()->row();
    }

    /*
     *  get user chat profile data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 24 May 2018
     */

    public function GetChatProfileUser($SaveData) {
        //$where=array('chat_start_to'=>$SaveData['chat_start_to']);
        return $this->db->select('tbl_start_chat.id as chatId,tbl_all_users.id,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image,tbl_all_users.register_type')->
        from('tbl_start_chat')
            ->where('tbl_start_chat.chat_start_to', $SaveData['chat_start_to'])
            ->where('hire_status',0)
            ->where('tbl_start_chat.chat_delete_status',0)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_start_chat.chat_start_from', 'left')
            ->group_by('tbl_start_chat.chat_start_from')
            ->get()->
            result();
    }

    /*
     * change user chat status 
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */

    public function chStatusreadybyuser($where, $data) {
        $where['read_by_user'] = 1;
        $wherequery = "((id > {$where['id']} AND user_id_from={$where['user_id_from']} AND user_id_to={$where['user_id_to']}) OR (id > {$where['id']} AND user_id_from={$where['user_id_to']} AND user_id_to={$where['user_id_from']})) and order_id is NULL";
        $Upwhere = array('user_id_from' => $where['user_id_to'], 'user_id_to' => $where['user_id_from'], 'read_by_user' => '0');
        $unReadquery = $this->db->select('*')->from('tbl_chef_user_chat')->where($wherequery)->order_by('id', 'desc')->get()->result();
        $this->db->where($Upwhere)->update('tbl_chef_user_chat', $data);
        return $unReadquery;
    }

    /*
     * get person day vise ammount
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 1 june 2018
     */

    public function GetPersonDayviseAmnt($varPerson) {
        return $this->db->select('tbl_per_person_vise_ammount.per_person_ammount as total,tbl_per_person_vise_ammount.per_per_show_chef as show_total')->from('tbl_per_person_vise_ammount')->where('person', $varPerson)->get()->result();
    }

    /*
     * get state by country id
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 1 june 2018
     */

    public function GetStateby_Cid($varCountryid) {
        return $this->db->select('*')->from('states')->where('country_id', $varCountryid)->get()->result();
    }

    /*
     * get state by country id
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 1 june 2018
     */

    public function GetCityby_Sid($varStateid) {
        return $this->db->select('*')->from('cities')->where('state_id', $varStateid)->get()->result();
    }

    /*
     * get last  recent order id
     * @param void
     * @return json string
     * @author Shiv Kumar Tiwari
     * @date 1 june 2018
     */

    public function GetlastOrderId() {
        return $this->db->select('id')->from('tbl_chef_booking')->order_by('id', 'desc')->limit(1)->get()->row();
    }

    /*
     * chef booking save data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    public function saveBookrequest($saveBookData, $allData) {
        $this->db->insert('tbl_chef_booking', $saveBookData['chef_booking_detail']);
        $VarlastID = $this->db->insert_id();
        if (!empty($VarlastID)) {
            $data = array('booking_id' => $VarlastID, 'booking_detail' => $allData);
            $this->db->insert('tbl_chef_booking_detail', $data);
        }
        return $VarlastID;
    }

    /*
     * chef booking dish save data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    public function saveDishrequest($saveBookData) {
        $this->db->insert('tbl_chef_booking_dish', $saveBookData['chef_booking_dish']);
    }

    /*
     *  get current  booking by user id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 May 2018
     */

    public function GetCurrentbooking($user_id, $date) {
        // $today=date('Y-m-d');
        $where = "tbl_chef_booking.user_id=$user_id
        and tbl_chef_booking.expire_date >= '$date' 
        and tbl_chef_booking.payment_status=1";
        return $this->db->select('tbl_chef_booking.id,tbl_chef_booking.expire_date,tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,tbl_chef_booking.chef_id,tbl_chef_booking.book_date, tbl_chef_booking.book_time,tbl_chef_booking.total_price, tbl_chef_booking.discount_ammount')->from('tbl_chef_booking')
            ->where($where)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.chef_id', 'left')
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->result();
    }

    /*
     *  get Past  booking by user id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 May 2018
     */

    public function GetPastbooking($user_id, $date) {
        $where = "tbl_chef_booking.user_id=$user_id 
        and tbl_chef_booking.expire_date < '$date' 
        and tbl_chef_booking.payment_status=1";
        return $this->db->select('tbl_all_users.fname,tbl_all_users.register_type,tbl_all_users.lname,tbl_all_users.user_image ,tbl_chef_booking.chef_id,tbl_chef_booking.book_date, tbl_chef_booking.book_time,tbl_chef_booking.total_price,tbl_chef_booking.id, tbl_chef_booking.discount_ammount')->from('tbl_chef_booking')
            ->where($where)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.chef_id', 'left')
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->result();
    }

    /*
     * get current  booking by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 May 2018
     */

    public function GetChefCurrentbooking($user_id, $date) {
        // $today=date('Y-m-d');
        $where = "tbl_chef_booking.chef_id=$user_id 
        and tbl_chef_booking.expire_date >= '$date'
        and tbl_chef_booking.payment_status=1";
        return $this->db->select('tbl_chef_booking.user_id,tbl_chef_booking.expire_date,tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,tbl_chef_booking.id,tbl_chef_booking.chef_id,tbl_chef_booking.book_date, tbl_chef_booking.book_time,tbl_chef_booking.total_price_show as total_price, tbl_chef_booking.discount_ammount')->from('tbl_chef_booking')
            ->where($where)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.user_id', 'left')
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->result();
    }

    /*
     * get past  booking by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function GetChefPastbooking($user_id, $date) {
        $where = "tbl_chef_booking.chef_id=$user_id 
        and tbl_chef_booking.expire_date < '$date' 
        and tbl_chef_booking.payment_status=1";
        return $this->db->select('tbl_chef_booking.user_id,tbl_chef_booking.expire_date,tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,tbl_chef_booking.chef_id,tbl_chef_booking.book_date, tbl_chef_booking.book_time,tbl_chef_booking.total_price_show  as total_price,tbl_chef_booking.id,tbl_chef_booking.order_number as order_id, tbl_chef_booking.discount_ammount')->from('tbl_chef_booking')
            ->where($where)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.user_id', 'left')
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->result();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function CountChefAllbooking($chef_id) {
        return $this->db->select('count(tbl_chef_booking.id) as total_booking,sum(tbl_chef_booking.total_price_show) as total_income')
            ->from('tbl_chef_booking')
            ->where('tbl_chef_booking.chef_id', $chef_id)
            ->where('tbl_chef_booking.payment_status', 1)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.chef_id', 'left')
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->row();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function GetChefAllbooking($chef_id, $varPage) {
        return $this->db->select('tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,tbl_chef_booking.user_id,tbl_chef_booking.book_date,tbl_chef_booking.total_price_show as ammount,tbl_chef_booking.id,tbl_chef_booking.order_number as order_id,tbl_chef_booking.expire_date as type')
            ->from('tbl_chef_booking')
            ->where('tbl_chef_booking.chef_id', $chef_id)
            ->where('tbl_chef_booking.payment_status', 1)
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_booking.user_id', 'left')
            ->limit('10', $varPage)
            ->order_by('tbl_chef_booking.id', 'desc')
            ->get()->result();
    }

    /*
     * get chef all  register_referal_code user
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function GetChefReferalData($referal_code) {
        return $this->db->select('tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.email,tbl_all_users.status,tbl_all_users.user_referal_code')
            ->from('tbl_all_users')
            ->where('register_referal_code', $referal_code)
            ->get()->result();
    }

    /*
     * get chef all  register_referal_code user
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function GetReviewBy_Chefid($arrData) {
        return $this->db->select('tbl_all_users.register_type,tbl_all_users.user_image,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.email,tbl_chef_reviews.name,tbl_chef_reviews.image,tbl_chef_reviews.review_text,tbl_chef_reviews.ratings')
            ->from('tbl_chef_reviews')
            ->where('tbl_chef_reviews.id', $arrData['chef_id'])
            ->where('tbl_chef_reviews.user_id', $arrData['user_id'])
            ->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_reviews.user_id', 'left')
            ->get()->row();
    }

    /*
     * save review data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function SaveReviewData($arrData) {
        $this->db->insert('tbl_chef_reviews', $arrData);
        return $this->db->insert_id();
    }

    /*
     * handel stripe payment gateway get data id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    public function returnPaymentData($orderId) {
        return $this->db->select('*')->from('tbl_chef_booking')->where('order_number', $orderId)->get()->row();
    }

    /*
     * insert  stripe payment gateway data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    public function insertPaymentDataInPaymentTable($data = array(),$user_id='') {
        if(!empty($data->source)){
            $arrDataInsert = array(
                'customer_id'=>$data->customer,
                'user_id'=>$user_id,
                'card_last4_degit'=>$data->last4,
                'exp_month'=>$data->exp_month,
                'exp_year'=>$data->exp_year,
                'card_id'=>$data->id,
                'card_brand'=>$data->brand
            );
            $dataCheck = $this->db->select('*')->from('tbl_customer_cards')->where('user_id', $user_id)->where('card_last4_degit', $data->last4)->get()->row();
            if(empty($dataCheck)){
                $this->db->insert('tbl_customer_cards', $arrDataInsert);
            }
        }
        return $this->db->insert('payment', $data);
    }

    /*
     * update chef order id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    public function updateOrderIdchatTable($userId, $chefId, $orderId) {
        $wherequery = "(user_id_from={$chefId} AND user_id_to={$userId}) OR (user_id_from={$userId} AND user_id_to={$chefId})";
        $this->db->where($wherequery)->update('tbl_chef_user_chat', array('order_id' => $orderId));
    }

    /*
     * update payment status
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    public function updatePaymentStatusInOrderTable($order_no, $pay_status) {
        $this->db->where('order_number', $order_no);
        $this->db->update('tbl_chef_booking', array('payment_status' => $pay_status));
    }

    /*
     * insert stripe payment for member wallet
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 12 june 2018
     */

    public function StripePaymentHandlerForMember($data = array()) {
        return $this->db->insert('user_wallet', $data);
    }

    /*
     * getRefrelCode for stripe payment for member wallet
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */

    public function getRefrelCode($user_id) {
        $IsplanAmmount = $this->getPlanAmmount();
        $VarRefrelCode = $this->db->select('tbl_all_users.register_referal_code,tbl_all_users.id')->from('tbl_all_users')->where('id', $user_id)->get()->row();
        log_message("error", json_encode($VarRefrelCode));
        if(!empty($VarRefrelCode)){
            $varID = $this->db->select('tbl_all_users.id')
                ->from('tbl_all_users')
                ->where('user_referal_code', $VarRefrelCode->register_referal_code)
                ->get()->row();
            log_message("error", json_encode($varID));
            if(!empty($varID)){
                $VarInsertWalletData = array('user_id' => $varID->id,
                    'user_id_from' => $user_id,
                    "type" => "memberupgrade",
                    'ammount' => $IsplanAmmount->reffral_ammount
                );
                $this->StripePaymentHandlerForMember($VarInsertWalletData);
                return $varID->id;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /*
     * update upgrade memeber in tb_user
     * @bool
     * @author Shiv Kumar Tiwari
     * @date 12 june 2018
     */

    public function UpgradeMember($User_id, $data) {
        $this->db->where('id', $User_id)->update('tbl_all_users', $data);
    }

    /*
     * get plan ammount for wallet
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 12 june 2018
     */

    public function getPlanAmmount() {
        return $this->db->select('*')->from('tbl_membership')->where('id', 1)->get()->row();
    }

    /*
     * get data how many chef use single chef refrel code
     * @array
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    public function GetWalletDetailUser($VarId) {
        return $this->db->select('tbl_all_users.email,user_wallet.created_date,user_wallet.ammount,tbl_all_users.fname,tbl_all_users.lname')
            ->from('user_wallet')
            ->where('user_wallet.user_id', $VarId)
            ->where('tbl_all_users.member_upgrade', 1)
            ->join('tbl_all_users', 'tbl_all_users.id=user_wallet.user_id_from', 'left')
            ->get()
            ->result();
    }

    /*
     * get total how many chef use single chef refrel code
     * @array
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    public function GetWalletTotalAmmount($VarId) {
        return $this->db->select('tbl_all_users.email,user_wallet.ammount,user_wallet.created_date as date')
            ->from('user_wallet')
            ->where('user_wallet.user_id_from', $VarId)
            ->where('tbl_all_users.member_upgrade', 1)
            ->join('tbl_all_users', 'tbl_all_users.id=user_wallet.user_id', 'left')
            ->get()
            ->result();
    }

    /*
     * get total how many chef use single chef refrel code
     * @array
     * @author Shiv Kumar Tiwari
     * @date 13 june 2018
     */

    public function GetWalletTotalAmmountTwoWeek($VarId) {
        $query = "SELECT inTable.total, date_format(cp_date, '%d/%m/%y') as cp_date, date_format(startDate, '%d/%m/%y') as startDate, date_format(startDate + INTERVAL 13 DAY, '%d/%m/%y') as endDate
                from (
                SELECT SUM(tbl_chef_booking.total_price_show) AS total,
                    CAST(tbl_chef_booking.created_date as DATE) as cp_date, 
                    FROM_DAYS(14 * FLOOR((TO_DAYS(created_date) - TO_DAYS('2020-03-09')) / 14) + TO_DAYS('2020-03-09')) as startDate 
                FROM `tbl_chef_booking` LEFT JOIN `tbl_all_users` ON `tbl_all_users`.`id`=`tbl_chef_booking`.`chef_id` 
                WHERE `tbl_chef_booking`.`chef_id` = $VarId 
                AND `tbl_all_users`.`member_upgrade` = 1 
                AND date(`tbl_chef_booking`.`created_date`) >= '2020-03-09' 
                AND `tbl_chef_booking`.`payment_status`=1 
                GROUP BY FROM_DAYS(TO_DAYS(created_date))) as inTable";
        return $this->db->query($query)->result();
    }

    /*
     * update push notification
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 june 2018
     */

    public function UpdateNotificationSetting($VarUserId, $Updata) {
        $this->db->where('id', $VarUserId)->update('tbl_all_users', $Updata);
        return true;
    }

    /*
     * get chef booking detail by order id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 19 june 2018
     */

    public function getChefOrderdetail($arrData) {
        $varJointableUsertype = "";
        if ($arrData['user_type'] == "user") {
            $varJointableUsertype = "left join tbl_all_users on tbl_all_users.id=tbl_chef_booking.user_id left join tbl_chef_booking_detail on tbl_chef_booking.id=tbl_chef_booking_detail.booking_id";
        } else {
            $varJointableUsertype = "left join tbl_all_users on tbl_all_users.id=tbl_chef_booking.user_id left join tbl_chef_booking_detail on tbl_chef_booking.id=tbl_chef_booking_detail.booking_id";
        }
        $varWhere = "where tbl_chef_booking.id=$arrData[id]";
        $sql = "select tbl_chef_booking.*,tbl_chef_booking_detail.booking_detail as booking_detail,cities.name as cityname, countries.name as country_name,states.name as state_name,tbl_all_users.email, tbl_all_users.fname as fname,tbl_all_users.lname as lname from tbl_chef_booking {$varJointableUsertype} left join countries on countries.id=tbl_chef_booking.country left join states on states.id=tbl_chef_booking.state left join cities on cities.id=tbl_chef_booking.city $varWhere";
        log_message("error", $sql);
        return $this->db->query($sql)->row();
    }

    /*
     * get chef dish  booking  by order id
     * @param void
     * return array data
     * @author Shiv Kumar Tiwari
     * @date 16 May 2018
     */

    public function orderChefDishDetailByOrderId($arrData) {
        $varWhere = "WHERE booking_id=$arrData[id]";
        $sql = "SELECT tbl_chef_booking_dish.dish_id,tbl_Chefadd_dish.name,tbl_Chefadd_dish.image FROM tbl_chef_booking_dish left join tbl_Chefadd_dish on tbl_Chefadd_dish.id=tbl_chef_booking_dish.dish_id $varWhere";
        return $this->db->query($sql)->result();
    }

    public function checkReviewed($order_id, $user_id) {
        return $this->db->select('*')
            ->from('tbl_chef_reviews')
            ->where('user_id', $user_id)
            ->where('order_id', $order_id)
            ->get()->row();
    }

    /*
     * get Chef review by chefid with pagination
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 15 May 2018
     */

    public function getChefReview($arrData = array()) {
        $this->db->select('tbl_chef_reviews.*,tbl_all_users.fname,tbl_all_users.user_image,tbl_all_users.register_type');
        $this->db->from('tbl_chef_reviews');
        $this->db->join('tbl_all_users', 'tbl_all_users.id=tbl_chef_reviews.user_id', 'inner');
        $this->db->where('tbl_chef_reviews.chef_id', $arrData['chef_id']);
        $this->db->where('tbl_chef_reviews.status', '1');
        $this->db->order_by('tbl_chef_reviews.id', 'desc');
        return $this->db->limit('10', $arrData['offset'])->get()->result();
        ;
    }

    /*
     * get chef common tips price 
     * @param $arrData
     * @return obj
     * @author Shiv Kumar Tiwari
     * @date 22 june 2018
     */

    public function getCommontipsprice() {
        return $this->db->select('tbl_commontips_setting.settings_value')->from('tbl_commontips_setting')->where('id', 1)->get()->row();
    }

    /*
     * insert chef common tips price data
     * @param $arrData
     * @return obj
     * @author Shiv Kumar Tiwari
     * @date 22 june 2018
     */

    public function insertCommontipsData($arrChefCommonPrice) {
        $this->db->insert('tbl_chef_commontips',$arrChefCommonPrice);
        return $this->db->insert_id();
    }

    /*
     * google save data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    public function googleLogin($saveBookData) {
        $arrReturnData = array();
        $query = $this->db->select('*')->from('tbl_all_users')->where('email', $saveBookData['email']);
        $varEmail = $saveBookData['email'];
        $query = $query->get()->row();
        if (!empty($query)) {
            $checkexits = $this->updategooglelogin($saveBookData['userId']);
            $varDeviceid = array(
                'device_id' => !empty($saveBookData['device_id']) ? trim($saveBookData['device_id'], '"') : '',
                'device_platform' => !empty($saveBookData['device_platform']) ? $saveBookData['device_platform'] : ''
            );
            if (!empty($checkexits) && $saveBookData['device_id'] != '-') { // Filter web device id
                $this->db->where('id', $checkexits->id)->update('tbl_all_users', $varDeviceid);
            }
            if ($query->user_type == 'chef') {
                $arrReturnData['status'] = 201;
                $arrReturnData['message'] = 'You are already register as a chef';
            } else {
                $queryCheck = $this->db->query("SELECT register_type,id,push_notification_settings,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,date_created 
         FROM tbl_all_users 
        WHERE LOWER(email)= '{$varEmail}'");
                $rowData = $queryCheck->row();
                if ($rowData->register_type !== 'google') {
                    $rowData->user_image = !empty($rowData->user_image) ? base_url() . '/' . $rowData->user_image : '';
                }
                $arrReturnData['data'] = $rowData;
                $arrReturnData['status'] = 200;
                return json_encode($arrReturnData);
            }
        } else {
            $arrInsert = array(
                'email' => $saveBookData['email'],
                'google_id' => $saveBookData['userId'],
                'user_type' => 'user',
                'fname' => $saveBookData['givenName'],
                'lname' => $saveBookData['familyName'],
                'user_image' => $saveBookData['imageUrl'],
                'register_type' => 'google',
                'status' => '1',
                'device_id' => !empty($saveBookData['device_id']) && $saveBookData['device_id'] != '-' ? trim($saveBookData['device_id'], '"') : '',
                'device_platform' => !empty($saveBookData['device_platform']) ? $saveBookData['device_platform'] : ''
            );
            $this->db->insert('tbl_all_users', $arrInsert);
            $queryCheck = $this->db->query("SELECT register_type,id,push_notification_settings,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,date_created 
         FROM tbl_all_users 
        WHERE LOWER(email)= '{$varEmail}'");
            $rowData = $queryCheck->row();
            if ($rowData->register_type !== 'google') {
                $rowData->user_image = !empty($rowData->user_image) ? base_url() . '/' . $rowData->user_image : '';
            }
            $arrReturnData['data'] = $rowData;
            $arrReturnData['status'] = 200;
            return json_encode($arrReturnData);
        }
    }

    /*
     * login via facebook
     * @date 3 july
     */

    public function fbLogin($saveBookData) {

        $arrReturnData = array();
        $query = $this->db->select('*')->from('tbl_all_users')->where('email', $saveBookData['email']);
        $varEmail = $saveBookData['email'];
        $query = $query->get()->row();

        if (!empty($query)) {
            $checkexits = $this->updatefblogin($saveBookData['id']);
            $varDeviceid = array(
                'device_id' => !empty($saveBookData['device_id']) ? trim($saveBookData['device_id'], '"') : '',
                'device_platform' => !empty($saveBookData['device_platform']) ? $saveBookData['device_platform'] : ''
            );
            //var_dump($query->user_type);exit;
            if (!empty($checkexits) && $varDeviceid['device_id'] != '-') { // Filter by web platform
                $this->db->where('id', $checkexits->id)->update('tbl_all_users', $varDeviceid);
            }
            if ($query->user_type == 'chef') {
                $arrReturnData['status'] = 201;
                $arrReturnData['message'] = 'You are already register as a chef';
            } else {
                $queryCheck = $this->db->query("SELECT register_type,id,push_notification_settings,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,date_created 
         FROM tbl_all_users 
        WHERE LOWER(email)= '{$varEmail}'");
                $rowData = $queryCheck->row();
                if ($rowData->register_type !== 'google' && $rowData->register_type !== 'fb') {
                    $rowData->user_image = !empty($rowData->user_image) ? base_url() . '/' . $rowData->user_image : '';
                }
                $arrReturnData['data'] = $rowData;
                $arrReturnData['status'] = 200;

            }
            return json_encode($arrReturnData);
        } else {
            $arrInsert = array(
                'email' => $saveBookData['email'],
                'fb_id' => $saveBookData['id'],
                'user_type' => 'user',
                'fname' => $saveBookData['name'],
                'user_image' => !empty($saveBookData['image']) ? $saveBookData['image'] : '',
                'register_type' => 'fb',
                'status' => '1',
                'device_id' => !empty($saveBookData['device_id']) && $saveBookData['device_id'] != '-' ? trim($saveBookData['device_id'], '"') : '',
                'device_platform' => !empty($saveBookData['device_platform']) ? $saveBookData['device_platform'] : ''
            );
            $this->db->insert('tbl_all_users', $arrInsert);
            $queryCheck = $this->db->query("SELECT register_type,id,push_notification_settings,user_type,email,member_upgrade,fname,lname,phone,latitude,longitude,
            user_image,status,account_active_by_user,user_referal_code,date_created 
         FROM tbl_all_users 
        WHERE LOWER(email)= '{$varEmail}'");
            $rowData = $queryCheck->row();
            if ($rowData->register_type !== 'google' && $rowData->register_type !== 'fb') {
                $rowData->user_image = !empty($rowData->user_image) ? base_url() . '/' . $rowData->user_image : '';
            }

            $arrReturnData['data'] = $rowData;
            $arrReturnData['status'] = 200;
            $msg = "First line of ".json_encode($arrReturnData);;

            // send email
            mail("maneeshtiwari007@@gmail.com","My subject",$msg);
            return json_encode($arrReturnData);
        }
    }

    /*
     * 
     * 
     */

    public function updategooglelogin($vargoogleid) {
        return $this->db->select('*')
            ->from('tbl_all_users')
            ->where('google_id', $vargoogleid)->get()->row();
    }

    public function updatefblogin($vargoogleid) {
        return $this->db->select('*')
            ->from('tbl_all_users')
            ->where('fb_id', $vargoogleid)->get()->row();
    }

    /*
     * google save data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    public function sumCommonTipsPrice($startdate, $enddate) {
        $where = "where created_date>='$startdate' and created_date<='$enddate'";
        $query = "select sum(intable.total) as totalcommontips,count(intable.totalchef) as totalcommonchef from(SELECT sum(common_tips) as total,count(chef_id) as totalchef FROM `tbl_chef_commontips` $where group by chef_id) as intable";
        $queryGetAllChefgroupby = "SELECT * FROM `tbl_chef_commontips`  $where group by chef_id";
        $totalTips = $this->db->query($query)->row();
        $allChefList = $this->db->query($queryGetAllChefgroupby)->result();
        return array('totalTips' => $totalTips, 'allChefList' => $allChefList);
    }

    /*
     * getCommonTipsPriceData wallet table by chef id
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 2 May 2018
     */

    public function getCommonTipsPriceData($varChefId) {
        $where = "where user_id=$varChefId  and type='commontips'";
        $query = "select intable.*,intable.startdate + INTERVAL 30 DAY as endDate from(SELECT sum(ammount) as ammount,commontips_addeddate as startdate FROM `user_wallet` $where group by month(commontips_addeddate))as intable";
        return $this->db->query($query)->result();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function CountChefAllWallet($chef_id) {
        return $this->db->select('count(user_wallet.id) as total_booking,sum(user_wallet.ammount) as total_income')
            ->from('user_wallet')
            ->where('user_wallet.user_id', $chef_id)
            ->where('user_wallet.type', "memberupgrade")
            ->join('tbl_all_users', 'tbl_all_users.id=user_wallet.user_id_from', 'left')
            ->order_by('user_wallet.id', 'desc')
            ->get()->row();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function GetChefAllWallet($chef_id, $varPage) {
        return $this->db->select('tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,user_wallet.*,user_wallet.created_date as book_date')
            ->from('user_wallet')
            ->where('user_wallet.user_id', $chef_id)
            ->where('user_wallet.type', "memberupgrade")
            ->join('tbl_all_users', 'tbl_all_users.id=user_wallet.user_id_from', 'left')
            ->limit('10', $varPage)
            ->order_by('user_wallet.id', 'desc')
            ->get()->result();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 4 june 2018
     */

    public function CountChefAllWalletCommontips($chef_id) {
        return $this->db->select('count(user_wallet.id) as total_booking,sum(user_wallet.ammount) as total_income')
            ->from('user_wallet')
            ->where('user_wallet.user_id', $chef_id)
            ->where('user_wallet.type', "commontips")
            ->join('tbl_all_users', 'tbl_all_users.id=user_wallet.user_id', 'left')
            ->order_by('user_wallet.id', 'desc')
            ->get()->row();
    }

    /*
     * get chef all  booking data
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    public function GetChefAllCommonTips($chef_id, $varPage) {
        $varPage= (!empty($varPage))?$varPage:0;
        $where = "where user_id=$chef_id  and type='commontips'";
        $query = "select tbl_all_users.register_type,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image ,intable.*,intable.startdate as commontips_addeddate,intable.startdate as book_date from(SELECT sum(ammount) as ammount,commontips_addeddate as startdate FROM `user_wallet` $where group by month(commontips_addeddate)) as intable left join tbl_all_users on tbl_all_users.id=$chef_id LIMIT $varPage,10";
        return $this->db->query($query)->result();
    }

    /*
     * update forget token
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    public function NullForgetToken($segment, $varForgetToken) {
        $objData = $this->db->select('id')->from("tbl_all_users")->where("forget_token='{$segment}'")->get()->row();
        $this->db->where('forget_token', $segment)->update('tbl_all_users', $varForgetToken);
        return $objData;
    }

    /*
     * update forget token
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    public function updateForgetToken($varEmail, $varForgetToken) {
        $this->db->where('email', $varEmail)->update('tbl_all_users', $varForgetToken);
        return true;
//    $objCheckToken=$this->db->select('forget_token')->from('tbl_all_users')->where('email',$varEmail)->get()->row();    
//     if(!empty($objCheckToken->forget_token))
//   {
//    $this->db->where('email',$varEmail)->update('tbl_all_users',$varForgetToken);  
//    return true;
//   }
//   else{
//       return false;
//   }
    }

    /*
     * reset  forget  password 
     * @param $arrData
     * @return bool
     * @author Shiv Kumar Tiwari
     * @date 08 May 2018
     */

    public function ResetPassword($segment, $argArrData) {
        $objData = $this->db->select('pass')->from("tbl_all_users")->where("forget_token='{$segment}'")->get()->row();
        if (!empty($objData) && ($argArrData['new_pass'] == $argArrData['confirm_pass'])) {
            $arrData = array('pass' => md5(trim($argArrData['new_pass'])));
            $this->db->set($arrData);
            $this->db->where('forget_token', $segment);
            $isUpdated = $this->db->update("tbl_all_users");
            return $isUpdated;
        } else {
            return false;
        }
    }

    public function test($data) {
        $this->db->insert('test', $data);
    }

    /*
     * get user chat data by order id
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */

    public function UserChatGetDataByorderId($VarData) {
        $order_number = '1000' . $VarData['order_id'];
        // var_dump($order_number);exit;
        $wherequery = "((user_id_from={$VarData['user_id_from']} AND user_id_to={$VarData['user_id_to']}) OR (user_id_from={$VarData['user_id_to']} AND user_id_to={$VarData['user_id_from']})) and order_id={$order_number}";
        return $this->db->select('tbl_chef_user_chat.date_created as date,tbl_chef_user_chat.id,tbl_chef_user_chat.user_id_from,tbl_chef_user_chat.user_id_to,tbl_chef_user_chat.message')->from('tbl_chef_user_chat')->where($wherequery)->
        order_by('id', 'asc')->get()->result();
    }

    /*
     * save user chat temp data
     * @param void
     * return bool
     * @author Shiv Kumar Tiwari
     * @date 17 july 2018
     */

    public function UserChatTempSaveDate($SaveData) {
        $this->db->insert('tbl_chat_tempdata', $SaveData);
        return $this->db->insert_id();
    }
    /*
     * update start chef hirestatus
     * @param void
     * @author Shiv Kumar Tiwari
     * @date 6 june 2018
     */

    public function updatehirestatus($userId, $chefId) {
        $wherequery = "(chat_start_from={$userId} AND chat_start_to ={$chefId})";
        $this->db->where($wherequery)->update('tbl_start_chat', array('hire_status' =>1));
    }
    /*
     * get start chat all data
     */
    public function GetStartChatData()
    {
        return $this->db->select('*')->from('tbl_start_chat')->where('hire_status',0)->get()->result();
    }
    public function chkExitSlug($slug){
        return $this->db->select('*')->from(' tbl_all_users')->where('verification_code',$slug)->get()->row();

    }
    public function update_users_status($userId,$arrUpdate){
        $this->db->where('id', $userId)->update('tbl_all_users', $arrUpdate);
        return true;
    }
    public function app_share_url($get) {
        $objData = $this->db->select('*')->from("tbl_commontips_setting")->where("settings_key='app_share_url'")->where("type='{$get}'")->get()->row();
        return $objData;
    }
    /*
 * change user chat status
 * @param void
 * return bool
 * @author Shiv Kumar Tiwari
 * @date 30 May 2018
 */

    public function changeChatListStatus($id) {
        $wherequery = "id = ".$id;
        $data=array('chat_delete_status'=>1);
        $unReadquery = $this->db->where($wherequery)->update('tbl_start_chat', $data);
        return $unReadquery;
    }

    /*
     * update Customer Stripe Info
     * @param $argData
     * @return bool
     * @author Soon Lai
     * @date 03 April 2020
     */

    public function updateCustomerStripeInfo($argData) {
        $arrData = array('stripe_id' => $argData['id']);
        $isUpdated = $this->db->where('id', $argData['userId'])->update("tbl_all_users", $arrData);
        return array('isupdated' => $isUpdated);
    }

    /*
     * update Customer Card
     * @param $data
     * @author Soon Lai
     * @date 04 April 2020
     */
    public function saveUserCards($data)
    {
        $arrDataInsert = array(
            'customer_id'=> $data['customer'],
            'user_id'=> $data['user_id'],
            'card_last4_degit'=> $data['last4'],
            'exp_month'=> $data['exp_month'],
            'exp_year'=> $data['exp_year'],
            'card_id'=> $data['card_id'],
            'card_brand'=> $data['card_brand']
        );

        $dataCheck = $this->db->select('*')->from('tbl_customer_cards')
            ->where('user_id', $data['user_id'])
            ->get()->row();
        if (!empty($dataCheck)) {
            $this->db->where('user_id', $data['user_id'])->update("tbl_customer_cards", $arrDataInsert);
        } else {
            $this->db->insert('tbl_customer_cards', $arrDataInsert);
        }
    }

    /*
     * get Customer Card
     * @param $userId
     * @return object
     * @author Soon Lai
     * @date 04 April 2020
     */
    public function getUserCard($userId)
    {
        return $this->db->select('*')->from('tbl_customer_cards')
            ->where('user_id', $userId)
            ->get()->row();
    }

    /*
     * save Device Data
     * @param object
     * @author Soon Lai
     * @date 6 April 2020
     */

    public function updateDeviceInfo($data) {
        $varDeviceid = array(
            'device_id' => trim($data['device_id'], '"'),
            'device_platform' => !empty($data['device_platform']) ? $data['device_platform'] : ''
        );
        $this->db->where('id', $data['id'])->update('tbl_all_users', $varDeviceid);
    }

    public function get24hBooking() {
        $today = gmdate("Y-m-d H:i:59");
        $last24h = gmdate("Y-m-d H:i:00");
        $query = $this->db->query("SELECT tbl_chef_booking.*, tbl_all_users.fname, tbl_all_users.lname 
            FROM tbl_chef_booking INNER JOIN tbl_all_users ON tbl_chef_booking.user_id = tbl_all_users.id
            WHERE DATE_SUB(CAST(CONCAT(book_date, ' ', book_time) as datetime), INTERVAL 1 DAY) >= '{$last24h}' AND 
            DATE_SUB(CAST(CONCAT(book_date, ' ', book_time) as datetime), INTERVAL 1 DAY) <= '{$today}'
            AND payment_status = 1");

        return $query->result();
    }

    public function getLastHourBooking() {
        $today = gmdate("Y-m-d H:i:59");
        $lasth = gmdate("Y-m-d H:i:00");
        $query = $this->db->query("SELECT tbl_chef_booking.*, tbl_all_users.fname, tbl_all_users.lname 
            FROM tbl_chef_booking INNER JOIN tbl_all_users ON tbl_chef_booking.user_id = tbl_all_users.id
            WHERE DATE_SUB(CAST(CONCAT(book_date, ' ', book_time) as datetime), INTERVAL 1 HOUR) >= '{$lasth}' AND 
            DATE_SUB(CAST(CONCAT(book_date, ' ', book_time) as datetime), INTERVAL 1 HOUR) <= '{$today}'
            AND payment_status = 1");

        return $query->result();
    }
}
