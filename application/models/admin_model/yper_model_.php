<?php

/*
 * This is frontend auth model page
 * Authour : Maneesh Tiwari | Shiv Tiwari
 */

Class yper_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }
    /*
     * @return all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getUserallListdata($pagination)
    {
      $this->db->select('*');
      $this->db->from('tbl_all_users');
      $this->db->where_not_in('user_type','chef');
      if(!empty($pagination['limit']) || $pagination['offset'])
      {
          $this->db->limit($pagination['limit'],$pagination['offset']);
      }
      if(!empty($pagination['table_search']))
      {
          $SEARCH=$pagination['table_search'];
       $this->db->where("CONCAT(email,fname,lname,phone) like '%$SEARCH%'");   
      }
       $this->db->order_by('id','desc');
      return $this->db->get()->result();
    }
    /*
     * @return all user count data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function countUserlistdata($tablesearch)
    {
      $this->db->select('count(id) as totalrow');
      $this->db->from('tbl_all_users');
       $this->db->where_not_in('user_type','chef');
       if(!empty($tablesearch))
      {
       $this->db->where("CONCAT(email,fname,lname,phone) like '%$tablesearch%'");   
      }
      return $this->db->get()->row();
    }
    /*
     * update  user status 
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function change_status($id,$data,$method)
    { 
        if(!empty($method) && ($method=="Chefdish"))
        {
        $this->db->where_in('id',$id)->update('tbl_chefadd_dish',$data);
        }
        else{
        $this->db->where_in('id',$id)->update('tbl_all_users',$data);
        }
        return true;
    }
    /*
     * delete user data 
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function deleteMultipleUser($id)
    {
        $this->db->where_in('id',$id)->delete('tbl_all_users');
        return true;
    }
    /*
     * delete chef data 
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function deleteMultipleChef($id)
    {
        $this->db->where_in('id',$id)->delete('tbl_all_users');
        if($this->db->affected_rows()>0)
        {
        $this->db->where_in('user_id',$id)->delete('tbl_chef_profile');
        }
        return true;
    }
     /*
     * return user deteail by id in row
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function UserDetailById($UserId)
    {
      return $this->db->select('*')->from('tbl_all_users')->where('id',$UserId)->get()->row();
    }
    /*
     * @return all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getChefallListdata($pagination)
    {
      $this->db->select('*');
      $this->db->from('tbl_all_users');
      $this->db->where_not_in('user_type','user');
      if(!empty($pagination['limit']) || $pagination['offset'])
      {
          $this->db->limit($pagination['limit'],$pagination['offset']);
      }
      if(!empty($pagination['table_search']))
      {
          $SEARCH=$pagination['table_search'];
       $this->db->where("CONCAT(email,fname,lname,phone) like '%$SEARCH%'");   
      }
          $this->db->order_by('id','desc');
      return $this->db->get()->result();
    }
    /*
     * @return all user count data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function countCheflistdata($tablesearch)
    {
      $this->db->select('count(id) as totalrow');
      $this->db->from('tbl_all_users');
       $this->db->where_not_in('user_type','user');
       if(!empty($tablesearch))
      {
       $this->db->where("CONCAT(email,fname,lname,phone) like '%$tablesearch%'");   
      }
      return $this->db->get()->row();
    }
     /*
     * return user deteail by id in row
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function ChefDetailById($ChefId)
    {
      return $this->db->select('*')->from('tbl_all_users')
              ->where('tbl_all_users.id',$ChefId)
              ->join('tbl_chef_profile','tbl_chef_profile.user_id=tbl_all_users.id','left')
              ->get()->row();
    }
    /*
     * @return all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getChefDishallListdata($pagination)
    {
      $this->db->select('tbl_chefadd_dish.*,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.id as chefid');
      $this->db->from('tbl_chefadd_dish');
      $this->db->join('tbl_all_users','tbl_all_users.id=tbl_chefadd_dish.user_id','left');
      if(!empty($pagination['limit']) || $pagination['offset'])
      {
          $this->db->limit($pagination['limit'],$pagination['offset']);
      }
      if(!empty($pagination['filterChef']))
      {
          $this->db->where_in("tbl_chefadd_dish.user_id",$pagination['filterChef']); 
      }
      if(!empty($pagination['table_search']))
      {
          $SEARCH=$pagination['table_search'];
       $this->db->where("CONCAT(name) like '%$SEARCH%'");   
      }
       $this->db->order_by('id','desc');
      return $this->db->get()->result();
    }
    /*
     * @return all user count data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function countDishlistdata($tablesearch)
    {
      $this->db->select('count(id) as totalrow');
      $this->db->from('tbl_chefadd_dish');
       if(!empty($tablesearch))
      {
       $this->db->where("CONCAT(name) like '%$tablesearch%'");   
      }
      if(!empty($pagination['filterChef']))
      {
          $this->db->where_in("tbl_chefadd_dish.user_id",$pagination['filterChef']); 
      }
      return $this->db->get()->row();
    }
     /*
     * @return all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getChefLisNametdata()
    {
      $this->db->select('tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.id as chefid');
      $this->db->from('tbl_all_users');
        $this->db->where_not_in('user_type','user');
      $this->db->order_by('id','desc');
      return $this->db->get()->result();
    }
     /*
     * Delete Chef Dish
     * @author Shiv Kumar Tiwari
     * @date 19 May 2018
     */
    public function deleteChefDish($deleteid)
    {
       $this->db->where_in('id',$deleteid)->delete('tbl_chefadd_dish'); 
       return true;
    }
}