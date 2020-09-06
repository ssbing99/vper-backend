<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

Class Common
{

    private $CI;

    function __construct() {
        $this->CI = &get_instance();
        $this->CI->load->library('session');
         
    }
    public function commonbase64decode($imagepath,$base64image)
    {
        $img = $base64image;
        $img = str_replace('data:image/png;base64,', '', $img);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $timestamp=  time();
	 $file=$imagepath.uniqid(). '.png';
	$success = file_put_contents($file, $data);
     return $success ? $file : '';
        
  }
  public function sendGCMCurl($fields,$headers)
  {
   
   $ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
return $result;   
  }
}

