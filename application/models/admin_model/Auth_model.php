<?php

/*
 * This is frontend auth model page
 * Authour : Maneesh Tiwari | Shiv Tiwari
 */

Class Auth_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function authenticate($data) {

        return $this->db->select('*')->from('tbl_yper_admin')->where(array('email' => $data['email'], 'password' => $data['password']))->get()->row();
    }

    //
    public function updateadminprofile($id, $updata) {

        $this->db->where('id', $id)->update('tbl_yper_admin', $updata);
        if ($this->db->affected_rows() > 0) {
            return $this->db->select('*')->from('tbl_yper_admin')->where('id', $id)->get()->row();
        }
    }



 

 




}
