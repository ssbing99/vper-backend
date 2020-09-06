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
        $post=$this->input->post();
        $get=$this->input->get();
        //var_dump($get);exit;
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
         ($get['method']=="admin/view-chef")?redirect(base_url('admin/view-chef')):redirect(base_url('admin/view-user')); 
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
        echo !empty($post)?$Jsonajaxres:!empty($get['page'])?redirect(base_url('admin/view-chefdish')."?page=".$get['page']):redirect(base_url('admin/view-chefdish'));
         }
        }
    }
}

