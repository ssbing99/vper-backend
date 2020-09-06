<?php

/*
 * This is frontend auth model page
 * Authour : Maneesh Tiwari | Shiv Tiwari
 */

Class Yper_model extends CI_Model {

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
            $this->db->where_in('id',$id)->update('tbl_Chefadd_dish',$data);
        }
        elseif(!empty($method) && ($method=="Chefreview")){
            $this->db->where_in('id',$id)->update('tbl_chef_reviews',$data);
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
        $this->db->select('tbl_Chefadd_dish.*,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.id as chefid');
        $this->db->from('tbl_Chefadd_dish');
        $this->db->join('tbl_all_users','tbl_all_users.id=tbl_Chefadd_dish.user_id','left');
        if(!empty($pagination['limit']) || $pagination['offset'])
        {
            $this->db->limit($pagination['limit'],$pagination['offset']);
        }
        if(!empty($pagination['filterChef']))
        {
            $this->db->where_in("tbl_Chefadd_dish.user_id",$pagination['filterChef']);
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
        $this->db->from('tbl_Chefadd_dish');
        if(!empty($tablesearch))
        {
            $this->db->where("CONCAT(name) like '%$tablesearch%'");
        }
        if(!empty($_GET['chef']))
        {
            $this->db->where_in("tbl_Chefadd_dish.user_id",$_GET['chef']);
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
        $this->db->where_in('id',$deleteid)->delete('tbl_Chefadd_dish');
        return true;
    }
    /*
    * getreview data
    * @author Shiv Kumar Tiwari
    * @date 19 May 2018
    */
    public function getreviewdata($pagination)
    {
        $this->db->select('tbl_chef_reviews.*,tbl_all_users.id as uid,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_type');
        $this->db->from('tbl_chef_reviews');
        $this->db->join('tbl_all_users','tbl_all_users.id=tbl_chef_reviews.user_id','left');
        if(!empty($pagination['limit']) || $pagination['offset'])
        {
            $this->db->limit($pagination['limit'],$pagination['offset']);
        }
        if(!empty($pagination['table_search']))
        {
            $SEARCH=$pagination['table_search'];
            $this->db->where("CONCAT(name,review_text) like '%$SEARCH%'");
        }
        if(!empty($pagination['filterUser']))
        {
            $this->db->where_in("tbl_chef_reviews.user_id",$pagination['filterUser']);
        }
        $this->db->order_by('id','desc');
        return $this->db->get()->result();
    }
    /*
     * @return all user count data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function countReviewlistdata($tablesearch)
    {
        $this->db->select('count(id) as totalrow');
        $this->db->from('tbl_chef_reviews');
        if(!empty($tablesearch))
        {
            $this->db->where("CONCAT(name,review_text) like '%$tablesearch%'");
        }
        if(!empty($_GET['user']))
        {
            $this->db->where_in("tbl_chef_reviews.user_id",$_GET['user']);
        }
        return $this->db->get()->row();
    }
    /*
     * Delete Chef Review
     * @author Shiv Kumar Tiwari
     * @date 19 May 2018
     */
    public function deleteChefReview($deleteid)
    {
        $this->db->where_in('id',$deleteid)->delete('tbl_chef_reviews');
        return true;
    }
    /*
     * get all user 
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */
    public function getAllUserlist()
    {
        return $this->db->select('tbl_all_users.id,tbl_all_users.fname,tbl_all_users.lname')->from('tbl_all_users')->order_by('id','desc')->get()->result();
    }
    /*
     * getreview detail by id
     * @author Shiv Kumar Tiwari
     * @date 22 May 2018
     */
    public function getreviewDetailbyid($varId)
    {
        $this->db->select('tbl_chef_reviews.*,tbl_all_users.id as uid,tbl_all_users.fname,tbl_all_users.lname');
        $this->db->from('tbl_chef_reviews');
        $this->db->where('tbl_chef_reviews.id',$varId);
        $this->db->join('tbl_all_users','tbl_all_users.id=tbl_chef_reviews.user_id','left');
        return $this->db->get()->row();
    }
    /*
     * getCOUNTRY NAME by id
     * @author Shiv Kumar Tiwari
     * @date 23 May 2018
     */
    public function getCountryName($cId)
    {
        return $this->db->select('tbl_countries.name')->from('tbl_countries')->where('id',$cId)->get()->row();
    }
    /*
     * getrecent chat dashboard
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */
    public function getRecentlyChat($arrData)
    {
        $where="SELECT max(id) as maxId FROM `tbl_chef_user_chat` group by user_id_from";
        $result=$this->db->query($where)->result();
        $data=array();
        foreach($result as $value)
        {
            $value->maxId=$value->maxId;
            $where="tbl_chef_user_chat.id=$value->maxId";
            $this->db->or_where($where);
        }
        if(!empty($arrData['dashboardlimit']))
        {
            $this->db->limit('5');
        }
        if(!empty($arrData['limit']) or !empty($arrData['offset']))
        {
            $this->db->limit($arrData['limit'],$arrData['offset']);
        }
        return $this->db->select('tbl_chef_user_chat.*,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image')
            ->from('tbl_chef_user_chat')
            ->join('tbl_all_users','tbl_all_users.id=tbl_chef_user_chat.user_id_from','left')
            ->order_by('id','desc')
            ->get()
            ->result();
    }
    /*
     * count chat for pagination
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */
    public function countChatlistUser()
    {
        $sql  = 'select count(intable.totalgroupby) as totalrow from (SELECT count(id) as totalgroupby FROM `tbl_chef_user_chat` group by user_id_from) as intable';
        return $this->db->query($sql)->row();
    }
    /*
     * getalluser chat list
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */
    public function getUserlistBychefid($varId)
    {
        return $this->db->select('tbl_chef_user_chat.*,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image')
            ->from('tbl_chef_user_chat')
            ->join('tbl_all_users','tbl_all_users.id=tbl_chef_user_chat.user_id_to','left')
            ->where('tbl_chef_user_chat.user_id_from',$varId)
            ->order_by('id','desc')
            ->group_by('user_id_to')
            ->get()
            ->result();
    }


    /*
     *get user chat data
     * @param void
      * return bool
    * @author Shiv Kumar Tiwari
     * @date 28 May 2018
     */
    public function UserChatGetDate($VarData)
    {
        $wherequery="(user_id_from={$VarData['user_id_from']} AND user_id_to={$VarData['user_id_to']}) OR (user_id_from={$VarData['user_id_to']} AND user_id_to={$VarData['user_id_from']})";
        return $this->db->select('tbl_chef_user_chat.user_id_from,tbl_chef_user_chat.user_id_to,tbl_chef_user_chat.message,tbl_chef_user_chat.date_created')->from('tbl_chef_user_chat')->where($wherequery)->
        order_by('id','ASC')->get()->result();
    }
    /*
     * get user chat profile data
     * @param void
      * return bool
    * @author Shiv Kumar Tiwari
     * @date 24 May 2018
     */
    public function GetChatProfileUser($data)
    {
        // var_dump($data);exit;
        //'tbl_all_users.id',$SaveData['chat_start_to']
        $where="(tbl_all_users.id={$data['user_id_from']})";
        return $this->db->select('tbl_all_users.id,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image,tbl_all_users.phone,tbl_all_users.email')->
        from('tbl_all_users')
            ->where($where)->
            order_by('id','desc')
            ->get()->
            row();

    }
    /*
    * get user chat profile data
    * @param void
     * return bool
   * @author Shiv Kumar Tiwari
    * @date 24 May 2018
    */
    public function GetChatProfileTodata($data)
    {
        // var_dump($data);exit;
        //'tbl_all_users.id',$SaveData['chat_start_to']
        $where="(tbl_all_users.id={$data['user_id_to']})";
        return $this->db->select('tbl_all_users.id,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_image,tbl_all_users.phone,tbl_all_users.email')->
        from('tbl_all_users')
            ->where($where)->
            order_by('id','desc')
            ->get()->
            row();

    }
    /*
    * insert per person ammount
    * @param void
     * return bool
   * @author Shiv Kumar Tiwari
    * @date 24 May 2018
    */
    public function insertPrsonViseAmmount($data)
    {
        $this->db->insert('tbl_per_person_vise_ammount',$data);
        return $this->db->insert_id();
    }
    /*
    * delete per person ammount
    * @param void
     * return bool
   * @author Shiv Kumar Tiwari
    * @date 24 May 2018
    */
    public function deletePrsonViseAmmount($id)
    {
        $this->db->where('person',$id)->delete('tbl_per_person_vise_ammount');
    }
    /*
   * select per person ammount
   * @param void
    * return bool
  * @author Shiv Kumar Tiwari
   * @date 24 May 2018
   */
    public function getPerammount()
    {
        return $this->db->select('*')->from('tbl_per_person_vise_ammount')->get()->result();
    }
    /*
   * count total booking
   * @param void
    * return bool
  * @author Shiv Kumar Tiwari
   * @date 24 May 2018
   */
    public function CounttotalBooking()
    {
        return $this->db->select('count(tbl_chef_booking.id) as total')->from('tbl_chef_booking')->where('payment_status','1')->get()->row();
    }
    /*
    * all user booking list
    * @param void
     * return array data
   * @author Shiv Kumar Tiwari
    * @date 16 May 2018
    */
    public function viewUerbookingList($arrData)
    {
        $varLimit="";
        $varWhere="where intable.payment_status=1";
        if(!empty($arrData['dashboardlimit']))
        {
            $varLimit="order by intable.id desc limit $arrData[dashboardlimit]";
        }
        if(!empty($arrData['search']))
        {
            $varSearch=$arrData['search'];
            $varWhere.=" and intable.order_number like '%$varSearch%'";
        }
        if(!empty($arrData['limit']) or !empty($arrData['offset']))
        {
            $varLimit="order by intable.id desc limit $arrData[offset],$arrData[limit]";
        }
        $sql  = "select tbl_all_users.user_image as customer_image,tbl_all_users.fname as ufname,tbl_all_users.lname as ulname,intable.* from(select tbl_chef_booking.*,tbl_all_users.fname as cfname,tbl_all_users.lname as clname, tbl_chef_booking_detail.booking_detail as booking_details from tbl_chef_booking left join tbl_all_users on tbl_all_users.id=tbl_chef_booking.chef_id left join tbl_chef_booking_detail on tbl_chef_booking.id=tbl_chef_booking_detail.booking_id) as intable left join tbl_all_users on tbl_all_users.id=intable.user_id  $varWhere $varLimit";
        return $this->db->query($sql)->result();
    }
    /*
   * all user booking list
   * @param void
    * return array data
  * @author Shiv Kumar Tiwari
   * @date 16 May 2018
   */
    public function CountUerbookingList($arrData)
    {
        $varWhere="";
        if(!empty($arrData['search']))
        {
            $this->db->like('order_number',$arrData['search']);
        }
        return $this->db->select('count(tbl_chef_booking.id) as totalrow')
            ->from('tbl_chef_booking')
            ->where('payment_status',1)
            ->get()
            ->row();
    }
    /*
   * get user booking order detail by order id
   * @param void
    * return object data
  * @author Shiv Kumar Tiwari
   * @date 16 May 2018
   */
    public function orderDetailByOrderId($varOrderId)
    {
        $varWhere="";
        if(!empty($varOrderId))
        {
            $varWhere="where intable.id=$varOrderId";
        }
        $sql  = "select tbl_all_users.fname as ufname,tbl_all_users.lname as ulname,intable.* from(select tbl_chef_booking.*,cities.name as cityname,countries.name as cname,states.name as sname,tbl_all_users.fname as cfname,tbl_all_users.lname as clname from tbl_chef_booking left join tbl_all_users on tbl_all_users.id=tbl_chef_booking.chef_id left join countries on countries.id=tbl_chef_booking.country left join states on states.id=tbl_chef_booking.state left join cities on cities.id=tbl_chef_booking.city) as intable left join tbl_all_users on tbl_all_users.id=intable.user_id  $varWhere";
        return $this->db->query($sql)->row();
    }
    /*
    * get chef dish  booking  by order id
    * @param void
     * return array data
   * @author Shiv Kumar Tiwari
    * @date 16 May 2018
    */
    public function orderChefDishDetailByOrderId($varOrderId)
    {
        $varWhere="";
        if(!empty($varOrderId))
        {
            $varWhere="WHERE booking_id=$varOrderId";
        }
        $sql  ="SELECT tbl_chef_booking_dish.dish_id,tbl_Chefadd_dish.name FROM tbl_chef_booking_dish left join tbl_Chefadd_dish on tbl_Chefadd_dish.id=tbl_chef_booking_dish.dish_id $varWhere";
        return $this->db->query($sql)->result();
    }
    /*
   * get user wallet data
     * return array data
   * @author Shiv Kumar Tiwari
   * @date 18 june 2018
   */
    public function getWalletdata($arrPagination)
    {
        $varLimit='';
        if(!empty($arrPagination['dashboardlimit']))
        {
            $varLimit="limit $arrPagination[dashboardlimit]";
        }
        if(!empty($arrPagination['limit']) or !empty($arrPagination['offset']))
        {
            $varLimit="limit $arrPagination[offset],$arrPagination[limit]";
        }
        $sql  = "select intable.*,tbl_all_users.user_type as from_type,tbl_all_users.fname as from_fname,tbl_all_users.lname as from_lname from(SELECT user_wallet.*,tbl_all_users.fname as to_fname,tbl_all_users.lname as to_lname,tbl_all_users.user_image as to_image,tbl_all_users.user_type as to_type FROM user_wallet left join tbl_all_users on tbl_all_users.id=user_wallet.user_id) as intable left join tbl_all_users on tbl_all_users.id=intable.user_id_from order by intable.id desc  $varLimit";
        return $this->db->query($sql)->result();
    }
    /*
    * count user wallet data
      * return obj
    * @author Shiv Kumar Tiwari
    * @date 18 june 2018
    */
    public function countWalletdata()
    {
        $sql  = 'select count(intable.id) as totalrow from(SELECT user_wallet.* FROM user_wallet left join tbl_all_users on tbl_all_users.id=user_wallet.user_id) as intable left join tbl_all_users on tbl_all_users.id=intable.user_id_from order by intable.id desc';
        return $this->db->query($sql)->result();
    }
    /*
     * getreview to  detail
     * @author Shiv Kumar Tiwari
     * @date 19 May 2018
     */
    public function reviewername($id)
    {
        return $this->db->select('tbl_all_users.id as uid,tbl_all_users.fname,tbl_all_users.lname,tbl_all_users.user_type')
            ->from('tbl_all_users')
            ->where('id',$id)
            ->get()
            ->row();
    }
}
