<?php

/*
 * Custom Session Library
 * description : set and get all data from session
 * Authour : Maneesh Tiwari || Shiv Tiwari
 * 
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

Class Custom_Session
{

    private $CI;

    function __construct() {
        $this->CI = &get_instance();
        $this->CI->load->library('session');
         
    }

    function custom_set_userdata($data) {
       
        if (!empty($data)) {
            $site_session = $this->CI->session->userdata(SITE_SESSION_NAME);
          if (!empty($site_session)) {
                $data = array_merge($data, $site_session);
            }
           // var_dump($site_session);exit;
            $this->CI->session->set_userdata(SITE_SESSION_NAME, $data);
        }
    }


    function custom_userdata($field) {
     //   var_dump($field);exit;
       //var_dump($this->CI->session->userdata(SITE_SESSION_NAME));exit;
        $site_session = $this->CI->session->userdata(SITE_SESSION_NAME);
     return (!empty($site_session) && array_key_exists($field, $site_session)) ? $site_session[$field] : array();
    }

    function custom_unset_userdata($field) {
        $is_unset = false;
        $site_session = $this->CI->session->userdata(SITE_SESSION_NAME);
        if (!empty($site_session) && array_key_exists($field, $site_session)) {
            unset($site_session[$field]);
            $this->CI->session->set_userdata(SITE_SESSION_NAME, $site_session);
            $is_unset = true;
        }
        return $is_unset;
    }

    function custom_set_flashdata($data,$name) {
      if (!empty($data) && !empty($name)) {
            $this->CI->session->set_flashdata($data, $name);
        }
    }

    function custom_flashdata($name) {
if (!empty($name)) {
            return $this->CI->session->flashdata($name);
        }
    }


    function loadMsg($name, $type) {
        $msg = '';
        if (!empty($name) && !empty($type)) {
            $data = $this->custom_flashdata($name);
            if (!empty($data)) {
                if ($type == "error") {
                    $msg = "<p class=''>{$data}.</p>";
                } else if ($type == "success") {
                    $msg = "<p class=''>{$data}.</p>";
                }
            }
        }
        return $msg;
    }

    function loadMsg_front($name, $type) {
        $msg = '';
        if (!empty($name) && !empty($type)) {
            $data = $this->custom_flashdata($name);
            if (!empty($data)) {
                if ($type == "error") {
                    $msg = "<div class='notification notification-danger'>
                                <a class='close-notification no-smoothState'><i class='ion-android-close'></i></a>
                                <p>Error</p>
                                <span class='small'>{$data}</span>
                          </div>";
                } else if ($type == "success") {
                    $msg = "<div class='notification notification-success'>
                                <a class='close-notification no-smoothState'><i class='ion-android-close'></i></a>
                                <p>Success</p>
                                <span class='small'>{$data}</span>
                          </div>";
                }
            }
        }
        return $msg;
    }

    public function randomNumber() {
        return mt_rand(100000, 999999);
    }

    public function randomGuid($length = 20) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

   
    public function getAdminFormatedData($user_id = '') {
        $user_id = $this->custom_userdata('user_admin');
        $userDetail = $this->CI->Admin_Model->getUserDetail($user_id['id']);
        return (!empty($userDetail[0])) ? $userDetail[0] : '';
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
    public function getTime($ptime) {

        $etime = time() - strtotime($ptime);

        if ($etime < 1) {
            return '0 seconds';
        }

        $a = array(365 * 24 * 60 * 60 => 'year',
            30 * 24 * 60 * 60 => 'month',
            24 * 60 * 60 => 'day',
            60 * 60 => 'hour',
            60 => 'minute',
            1 => 'second'
        );
        $a_plural = array('year' => 'years',
            'month' => 'months',
            'day' => 'days',
            'hour' => 'hours',
            'minute' => 'minutes',
            'second' => 'seconds'
        );

        foreach ($a as $secs => $str) {
            $d = $etime / $secs;
            if ($d >= 1) {
                $r = round($d);
                return $r . ' ' . ($r > 1 ? $a_plural[$str] : $str) . ' ago';
            }
        }
    }

    public function format_number($number) {
        if ($number >= 1000) {
            return $number / 1000 . "k";   // NB: you will want to round this
        } else {
            return $number;
        }
    }
}

?>