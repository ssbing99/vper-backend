<?php

/*
 * 
 * This is Admin Home Controller Class
 * Shiv kumar Tiwari
 * 
 */
defined('BASEPATH') OR exit('No direct script access allowed');

Class yper extends CI_Controller {

    public $status;

    public function __construct() {
        parent::__construct();
        $this->load->model('admin_model/yper_model');
      $this->load->library('layout'); 
    }
    /*
     * get all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getUserallListdata()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $get=$this->input->get();
        $tablesearch=!empty($get['table_search'])?$get['table_search']:'';
        $config=array();
        $data = array();
        $countPage=$this->yper_model->countUserlistdata($tablesearch);
        $config['baseurl']=base_url('admin/view-user');
        $config['total_rows']=$countPage->totalrow;
        $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
        $this->load->library('Paging_config');
        $data['page_links']=$this->paging_config->get_config($config);
        $pagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset,'table_search'=>$tablesearch);
        $data['arrview'] = $this->yper_model->getUserallListdata($pagination);
        $arrExtraContent = array();
        $this->layout->view('admin/user-list',$data); 
    }
     /*
     * change user status
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function change_status()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
      $post=$this->input->post();
      $get=$this->input->get();
      if(!empty($post) || !empty($get))
      {
          $method=!empty($get['method'])?$get['method']:'';
          $id=$post['statuschangeid'];
          $data=array('status'=>$post['statuschange']);
          $isupdate=$this->yper_model->change_status($id,$data,$method);
          if($isupdate)
          {
          $this->session->set_flashdata('success','Status Change Successfully');
         echo json_encode(array('status'=>200));     
      }
    }
    }
     /*
     * delete user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function deleteUser()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $post=$this->input->post();
        $get=$this->input->get();
        if(!empty($post))
        {
        $countDeleteId=count($post['deleteid']);
        $isDelete=($get['method']=="view-chef")?$this->yper_model->deleteMultipleChef($post['deleteid']):$this->yper_model->deleteMultipleUser($post['deleteid']);
        if($isDelete)
        {
        $this->session->set_flashdata('success',"Well Done! Record Delete Successfully");   
        echo json_encode(array('status'=>200));   
        }
        }
        else{
            $CountgetDeleteid=count($get['deleteid']);
          $isDelete= $this->yper_model->deleteMultipleUser($get['deleteid']);
          if($isDelete)
          {
         $this->session->set_flashdata('success',"Well Done! Record Delete Successfully");
         (!empty($get['method']) && $get['method']=="admin/view-chef")?redirect(base_url('admin/view-chef')):redirect(base_url('admin/view-user')); 
         echo json_encode(array('status'=>200));   
         }
        }
    }
     /*
     * get user deteail by id
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function UserDetailById($id='')
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $data=array();
    $data['userdetail']=$this->yper_model->UserDetailById($id);
    $this->layout->view('admin/user-detail',$data);
    }
  /*
     * get all user data
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getChefallListdata()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $get=$this->input->get();
        $tablesearch=!empty($get['table_search'])?$get['table_search']:'';
        $config=array();
        $data = array();
        $countPage=$this->yper_model->countCheflistdata($tablesearch);
        $config['baseurl']=base_url('admin/view-chef');
        $config['total_rows']=$countPage->totalrow;
        $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
        $this->load->library('Paging_config');
        $data['page_links']=$this->paging_config->get_config($config);
        $pagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset,'table_search'=>$tablesearch);
        $data['arrview'] = $this->yper_model->getChefallListdata($pagination);
       // var_dump($data['arrview']);exit;
        $arrExtraContent = array();
        $this->layout->view('admin/chef-list',$data); 
    }
     /*
     * get user deteail by id
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function ChefDetailById($id='')
    {
        $data=array();
    $data['userdetail']=$this->yper_model->ChefDetailById($id);
    $this->layout->view('admin/user-detail',$data);
    }
    /*
     * get all Chef Dish
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function getChefDishallListdata()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $get=$this->input->get();
        $tablesearch=!empty($get['table_search'])?$get['table_search']:'';
        $filterChef=!empty($get['chef'])?$get['chef']:'';
        $config=array();
        $data = array();
        $countPage=$this->yper_model->countDishlistdata($tablesearch);
        $config['baseurl']=base_url('admin/view-chefdish');
        $config['total_rows']=$countPage->totalrow;
        $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
        $this->load->library('Paging_config');
        $data['page_links']=$this->paging_config->get_config($config);
        $pagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset,'table_search'=>$tablesearch,'filterChef'=>$filterChef);
        $data['arrview'] = $this->yper_model->getChefDishallListdata($pagination);
        $data['cheflist'] = $this->yper_model->getChefLisNametdata();
        //var_dump($data['arrview']);exit;
        $arrExtraContent = array();
        $this->layout->view('admin/chefdish-list',$data); 
    }
     /*
     * Delete Chef Dish
     * @author Shiv Kumar Tiwari
     * @date 19 May 2018
     */
    public function deleteChefDish()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $post=$this->input->post();
        $get=$this->input->get();
       // var_dump($get);exit;
        if(!empty($post) || !empty($get))
        {
         $deleteid=!empty($post['deleteid'])?$post['deleteid']:$get['deleteid'];
         $isDelete=$this->yper_model->deleteChefDish($deleteid);
         if($isDelete)
         {
         $this->session->set_flashdata('success',"Well Done! Record Delete Successfully");   
        $Jsonajaxres=json_encode(array('status'=>200));
        if(!empty($post))
        {
            echo $Jsonajaxres;
        }
        else{
        echo !empty($get['page'])?redirect(base_url('admin/view-chefdish')."?page=".$get['page']):redirect(base_url('admin/view-chefdish'));
        }
        
         }
        }
    }
    /*
     * getreview data
     * @author Shiv Kumar Tiwari
     * @date 21 May 2018
     */
    public function getreviewdata()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $get=$this->input->get();
        $tablesearch=!empty($get['table_search'])?$get['table_search']:'';
        $filterUser=!empty($get['user'])?$get['user']:'';
        $config=array();
        $data = array();
        $countPage=$this->yper_model->countReviewlistdata($tablesearch);
        //var_dump($countPage);exit;
        $config['baseurl']=base_url('admin/view-review');
        $config['total_rows']=$countPage->totalrow;
        $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
        $this->load->library('Paging_config');
        $data['page_links']=$this->paging_config->get_config($config);
        $pagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset,'table_search'=>$tablesearch,'filterUser'=>$filterUser);
        $data['arrview'] = $this->yper_model->getreviewdata($pagination);
        $data['getAllUserlist'] = $this->yper_model->getAllUserlist();
        //  var_dump($data['arrview']);exit;
        $arrExtraContent = array();
        $this->layout->view('admin/view-reviewlist',$data);
    }
    /*
     * Delete Chef REVIEW
     * @author Shiv Kumar Tiwari
     * @date 19 May 2018
     */
    public function deleteChefReview()
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $post=$this->input->post();
        $get=$this->input->get();
       // var_dump($get);exit;
        if(!empty($post) || !empty($get))
        {
         $deleteid=!empty($post['deleteid'])?$post['deleteid']:$get['deleteid'];
         $isDelete=$this->yper_model->deleteChefReview($deleteid);
         if($isDelete)
         {
         $this->session->set_flashdata('success',"Well Done! Record Delete Successfully");   
        $Jsonajaxres=json_encode(array('status'=>200));
        if(!empty($post))
        {
            echo $Jsonajaxres;
        }
        else{
        echo !empty($get['page'])?redirect(base_url('admin/view-review')."?page=".$get['page']):redirect(base_url('admin/view-review'));
        }
        
         }
        }
    }
    /*
     * get review deteail by id
     * @author Shiv Kumar Tiwari
     * @date 17 May 2018
     */
    public function reviewDetailById($id='')
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $data=array();
    $data['reviewdetail']=$this->yper_model->getreviewDetailbyid($id);
   // var_dump($data);exit;
    $this->layout->view('admin/review-detail',$data);
    }
    /*
     * get review deteail by id
     * @author Shiv Kumar Tiwari
     * @date 30 May 2018
     */
    public function chefchat_detailuser($VarId='')
    {
       $VarFromId=$this->uri->segment('3');
       $get=$this->input->get();
       $data=array();
       $data['Chatuser_list']=$this->yper_model->getUserlistBychefid($VarFromId);
       $data['VarFromId']=$VarFromId;
       $toGetid=!empty($get['t'])?$get['t']:'';
       if(!empty($toGetid))
       {
      $arrUserchat=array("user_id_from"=>$VarFromId,"user_id_to"=>$toGetid);
       $data['userchat']=$this->yper_model->UserChatGetDate($arrUserchat);
      $data['profile']=$this->yper_model->GetChatProfileUser($arrUserchat);
      $data['gettodata']=$this->yper_model->GetChatProfileTodata($arrUserchat);
       }
      // var_dump($data['profile']);
     //var_dump($data['userchat']);exit;
      $arrExtraContent=array();
     $arrExtraContent['js'] = array("assets/js/pages/mailbox.js"); 
     $this->layout->view('admin/chefchat_detailuser',$data,$arrExtraContent); 
    }
     /*
     * get all chef list
     * @author Shiv Kumar Tiwari
     * @date 1 May 2018
     */
    public function chefchat_list()
    {
        $get=$this->input->get();
        $data=array();
        $count=$this->yper_model->countChatlistUser();
        //var_dump($count);exit;
        $config['baseurl']=base_url('admin/chefchat-list');
       $config['total_rows']=$count->totalrow;
      $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
      $this->load->library('Paging_config');
        $data['page_links']=$this->paging_config->get_config($config);
      $pagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset);
      $data['arrview']=$this->yper_model->getRecentlyChat($pagination);
     $this->layout->view('admin/chefchat-list',$data);  
    }
      /*
     * add per person vise ammount
     * @author Shiv Kumar Tiwari
     * @date 1 May 2018
     */
    public function add_perpersonammount()
    {
     $post=$this->input->post();
     $data=array();
     if(!empty($post))
     {
      foreach($post['per_person_ammount'] as $key=>$value)
      {
          $this->yper_model->deletePrsonViseAmmount($key+1);
       $data=array('person'=>$key+1,'per_person_ammount'=>$value,'per_per_show_chef'=>$post['per_person_ammount_chef'][$key]);
       $isInsert=$this->yper_model->insertPrsonViseAmmount($data);
       if(!empty($isInsert))
       {
       $this->session->set_flashdata('success1',"Welldone!Record Insert Successfully");
      //redirect(base_url('admin/add-ammount'));
       }
      }
     }
     $data['getPerammount']=$this->yper_model->getPerammount();
     //var_dump($data['getPerammount']);exit;
     $this->layout->view('admin/add-ammount-vise-person',$data);  
    }
    /*
     * view user booking list
     * @author Shiv Kumar Tiwari
     * @date 16 june 2018
     */
    public function viewUerbookingList()
    {
        $get=$this->input->get();
       $varSearch=!empty($get['table_search'])?$get['table_search']:'';
        $data=array();
      $countPage=$this->yper_model->CountUerbookingList(array('search'=>$varSearch));
      $config['baseurl']=base_url('admin/booking');
      $config['total_rows']=$countPage->totalrow;
     $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
      $this->load->library('Paging_config');
      $data['page_links']=$this->paging_config->get_config($config);
      $arrPagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset,'search'=>$varSearch);
      $data['allbookinglist']=$this->yper_model->viewUerbookingList($arrPagination);
   $this->layout->view('admin/booking-list',$data); 
    }
    /*
     * get review deteail by id
     * @author Shiv Kumar Tiwari
     * @date 16 june 2018
     */
    public function orderDetailByOrderId($id='')
    {
        $this->adminauth->isLoginCheck('', SITE_SESSION_NAME);
        $data=array();
    $data['orderDetail']=$this->yper_model->orderDetailByOrderId($id);
     $data['chefOrderDish']=$this->yper_model->orderChefDishDetailByOrderId($id);
  //  var_dump($data['chefOrderDish']);exit;
    $this->layout->view('admin/booking-detail',$data);
    }
      /*
     * get user wallet data
     * @author Shiv Kumar Tiwari
     * @date 18 june 2018
     */
    public function getWalletdata()
    {
        $get=$this->input->get();
        $count=$this->yper_model->countWalletdata();
       // var_dump($count[0]->totalrow);exit;
      $config['baseurl']=base_url('admin/wallet');
      $config['total_rows']=$count[0]->totalrow;
     $offset=!empty($get['page'])?$get['page']*PAGING_END_LIMIT-PAGING_END_LIMIT:0;
      $this->load->library('Paging_config');
      $data['page_links']=$this->paging_config->get_config($config);
      $arrPagination=array('limit'=>PAGING_END_LIMIT,'offset'=>$offset);
     $data['arrData']=$this->yper_model->getWalletdata($arrPagination); 
//     var_dump($data['page_links']);exit;
     $this->layout->view('admin/View-wallet',$data);
    }
}

