<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Layout {

    private $data = array();

    public function view($path, $content_data = NULL, $arrJs = array()) {
        $CI = & get_instance();
      //  $this->data['userdata'] = $CI->adminauth->formatted_userdata('user_admin');
        if ($content_data == NULL) {
            $this->data["content"] = $CI->load->view($path, "", TRUE);
        } else {
            $this->data["content"] = $CI->load->view($path, $content_data, TRUE);
        }
        $this->data["arrJs"] = $arrJs;

        return $CI->load->view("admin/_layout/_layout", $this->data);
    }

    public function view_front($path, $content_data = NULL, $arrJs = array()) {
        $CI = & get_instance();
        //$this->data['userdata'] = $CI->auth->formatted_userdata('users');
        if ($content_data == NULL) {
            $this->data["content"] = $CI->load->view($path, "", TRUE);
        } else {
            $this->data["content"] = $CI->load->view($path, $content_data, TRUE);
        }
        $this->data["arrJs"] = $arrJs;
        return $CI->load->view("_layout/_layout", $this->data);
    }
    //Hemant Mandeliya Home View
    public function view_home($path, $content_data = NULL, $arrJs = array()) {
        $CI = & get_instance();
        //$this->data['userdata'] = $CI->auth->formatted_userdata('users');
        if ($content_data == NULL) {
            $this->data["content"] = $CI->load->view($path, "", TRUE);
        } else {
            $this->data["content"] = $CI->load->view($path, $content_data, TRUE);
        }
        $this->data["arrJs"] = $arrJs;

        return $CI->load->view("_layout/_home/_layout", $this->data);
    }
    
   

}

?>
