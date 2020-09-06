<?php
/* 
 * This is Auth library page
 * Description : getting all data related user
 * Authour: Hemanat Mandeliya 
 */

class Adminauth{
    private $CI;
    public function __construct() {
        $this->CI = &get_instance();
       // $this->CI->load->model('admin/Admin_Model');
    }
    
    public function isLogin($dataCheck){
        //echo "<pre>";print_r($this->CI->custom_session);exit;
        $userData = $this->CI->custom_session->custom_userdata($dataCheck);
        return (!empty($userData))?true:false;
    }
    
    
    
    public function isLoginCheck($type='',$dataCheck){
       // var_dump($dataCheck);exit;
        $check =  $this->isLogin($dataCheck);
         //var_dump($dataCheck);exit;
        if($type=='login'){
            if($check){
               // var_dump($type);exit;
                redirect(base_url('admin/dashboard'));
            }
        } else {
            if(!$check){
                redirect(base_url('admin/login'));
            }
        }
    }
    public function isLoginCheckFront($type='',$dataCheck){
        
        $check =  $this->isLogin($dataCheck);
        $this->CI->custom_session->custom_unset_userdata('reffer_url');
        if($type=='login'){
            if($check){
                redirect_to(base_url('account'));
            }
        } else {
            if(!$check){
                $currentUrl = (!empty(custom_current_url()))?'?url='.custom_current_url():'';
                redirect_to(base_url('auth/login'.$currentUrl));
            }
        }
    }
    
    
    function logout($field){
        //var_dump($url);exit;
	$this->CI->custom_session->custom_unset_userdata($field);
        //redirect_to($url);
    }
    
    function formatted_userdata($field){
        $userData = $this->CI->custom_session->custom_userdata($field);
        $arrUser = array();
        if(count($userData) > 0){
             $arrUser = $this->CI->Admin_Model->getUserDetail($userData['id']);
             if(count($arrUser)){
                 $arrUser = $arrUser[0];
             }
        }
        return $arrUser;
    }
    
    public function encode_json($data){
        if(!empty($data)){
          return  json_encode($data);
        } 
    }
}

