<?php

/*
 * To handle all email after change status
 */

class Emails {

    public function __construct() {
        ;
    }

    /*
     * handle all email sending through send grid api
     * @param $arrData
     * @return void
     * @author Shiv Kumar Tiwari
     * @date 16 dec 2017
     */

    public function sendMailViaGrid($argArrData) {
        //$to,$toname,$subject,$link
        $url = 'https://api.sendgrid.com/api/mail.send.json';
        $data = array(
            "api_user" => "shiv@codeyiizen",
            "api_key" => "Shiv@francesco123",
            "to" => $argArrData['to'],
            "toname" => $argArrData['name'],
            "subject" => $argArrData['subject'],
            "html" => $argArrData['body'],
            "from" => "sales@praxoldistribution.com"
        );
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $json_dec = curl_exec($ch);
        //$json_dec = json_encode($response, true);
        curl_close($ch);
        //return $json_dec;
    }


    /*
     * Handles forget 
     * @param $arrData
     * @return void
     * @author Shiv Kumar Tiwari
     * @date 30 june 2018
     */

    public function SendForgetEmail($message) {
       // var_dump($message);exit;
        $msg='';
       $msg .= "<h1>Message</h1>";
        $msg .= "Message:<strong>Reset Your Password</strong><br>";
        $msg .= "Your Forget Email Link:<strong>{$message}</strong><br>";
         $msg .= "Data: <strong>" . date('d-m-Y H:i:s') . "</strong><br>";
        return $msg;
  }

}
