<?php
class Paging_config
{
    private $CI;


    public function __construct()
    {
        $this->CI =& get_instance();
    }
    public function get_config($conf=array())
    {
        //var_dump($conf);exit;
        //$this->CI =& get_instance();
        $this->CI->load->library('pagination');
        $config['base_url'] = $conf['baseurl'];
        $config['total_rows'] = $conf['total_rows'];
        $config['per_page'] = PAGING_END_LIMIT;
        $config['use_page_numbers'] = TRUE;
        $config['page_query_string'] = TRUE;
        $config['reuse_query_string'] = TRUE;
        $config['query_string_segment'] = 'page';
        $config['full_tag_open'] = '<ul class="pagination">';
        $config['full_tag_close'] = '</ul>';
        $config['cur_tag_open'] = '<li class="active"><a href="#">';
        $config['cur_tag_close'] = '</a></li>';
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['prev_link'] = '&laquo';
        $config['prev_tag_open'] = '<li class="prev">';
        $config['prev_tag_close'] = '</li>';
        $config['next_link'] = '&raquo';
        $config['next_tag_open'] = '<li>';
        $config['next_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
       
        //var_dump($config);exit;
        $this->CI->pagination->initialize($config);
        return $this->CI->pagination->create_links();
    }
}
?>
