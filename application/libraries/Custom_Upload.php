<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Custom_Upload {

    private $CI;

    function __construct() {
        $this->CI = &get_instance();
    }

    /**
     *
     * function for create a uniquiee id as file name
     * @author Shiv kumar Tiwari
     * @Mob - +919266913291
     * @skype - shiv.tiwari86
     * @param - null
     * @return string $filename
     */
    function GUID() {
        if (function_exists('com_create_guid') === true) {
            return trim(com_create_guid(), '{}');
        }

        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }

    /**
     *
     * function for upload image and return data as array
     * @author Shiv kumar Tiwari
     * @Mob - +919266913291
     * @skype - shiv.tiwari86
     * @param - string $name what type of upload is
     * @return mixed array $aUploadData
     */
    function uploadImage($path, $name, $avance = array(), $i = '') {
        $aUploadData = array(
            'error' => array()
        );
        $arrDataThumb = false;
        $nameFile = ($i != '') ? $_FILES[$name]['name'][$i] : $_FILES[$name]['name'];
        $name = ($i != '') ? $name[$i] : $name;
        $ext = pathinfo($nameFile, PATHINFO_EXTENSION);
        $config['upload_path'] = FCPATH . $path;
        //$config['max_width'] = '510';
        // $config['max_height'] = '2024';
        $config['max_size'] = '2048'; //2MB
        $config['allowed_types'] = 'gif|jpg|png|jpeg|bmp';
        $config['file_name'] = $this->GUID();
        $paththumbs = $config['upload_path'] . "/";
        $this->CI->load->library('upload', $config);
        if (!$this->CI->upload->do_upload($name)) {
            $aUploadData['error'] = $this->CI->upload->display_errors();
        } else {
            $aUploadData = array_merge($aUploadData, $this->CI->upload->data());
            foreach ($avance as $key => $value) {

                $avance['width'] = $value['width'];
                $avance['height'] = $value['height'];
                $arrDataThumb200 = array('source_path' => $config['upload_path'] . "/" . $config['file_name'] . "." . $ext,
                    "thumb_path" => $paththumbs . $avance['width'] . "x" . $avance['height'] . "_" . $config['file_name'] . "." . $ext,
                    'width' => $avance['width'], 'height' => $avance['height'], 'file_name' => $config['file_name']);
               // var_dump($arrDataThumb200);

                if ($arrDataThumb200) {
                    $this->createThumb($arrDataThumb200);
                }
            }

            return $aUploadData;
        }
        return $aUploadData;
    }
    function uploadImagess($path, $name, $avance = array(), $i = '') {
        $aUploadData = array(
            'error' => array()
        );
        $arrDataThumb = false;
        $nameFile = ($i != '') ? $_FILES[$name]['name'][$i] : $_FILES[$name]['name'];
        $name = ($i != '') ? $name[$i] : $name;
        $ext = pathinfo($nameFile, PATHINFO_EXTENSION);
        $config['upload_path'] = FCPATH . $path;
        //$config['max_width'] = '510';
        // $config['max_height'] = '2024';
        $config['max_size'] = '2048'; //2MB
        $config['allowed_types'] = 'gif|jpg|png|jpeg|bmp';
        $config['file_name'] = $this->GUID();
        $paththumbs = $config['upload_path'] . "/";
        $this->CI->load->library('upload', $config);
        if (!$this->CI->upload->do_upload($name)) {
            $aUploadData['error'] = $this->CI->upload->display_errors();
        } else {
            $aUploadData = array_merge($aUploadData, $this->CI->upload->data());
            foreach ($avance as $key => $value) {

                $avance['width'] = $value['width'];
                $avance['height'] = $value['height'];
                $arrDataThumb200 = array('source_path' => $config['upload_path'] . "/" . $config['file_name'] . "." . $ext,
                    "thumb_path" => $paththumbs . $avance['width'] . "x" . $avance['height'] . "_" . $config['file_name'] . "." . $ext,
                    'width' => $avance['width'], 'height' => $avance['height'], 'file_name' => $config['file_name']);
               // var_dump($arrDataThumb200);

                if ($arrDataThumb200) {
                    $this->createThumbs($arrDataThumb200);
                }
            }

            return $aUploadData;
        }
        return $aUploadData;
    }
    

    function uploadImageblogauthorimage($path, $name, $avance = array(), $i = '') {

        $aUploadData = array(
            'error' => array()
        );
        $arrDataThumb = false;
        $nameFile = ($i != '') ? $_FILES[$name]['name'][$i] : $_FILES[$name]['name'];
        $name = ($i != '') ? $name[$i] : $name;
        $ext = pathinfo($nameFile, PATHINFO_EXTENSION);
        $config['upload_path'] = FCPATH . $path;
        //$config['max_width'] = '510';
        // $config['max_height'] = '2024';
        $config['max_size'] = '2048'; //2MB
        $config['allowed_types'] = 'gif|jpg|png|jpeg|bmp';
        $config['file_name'] = $this->GUID();
        $paththumbs = $config['upload_path'] . "/";
        //   $paththumb = $config['upload_path'] .'/thumb_831x325/';
        /* if ( ! is_dir($paththumb)) {
          mkdir($paththumb);
          } */
        if (!is_dir($paththumbs)) {
            mkdir($paththumbs);
        }

        $arrDataThumb200 = array('source_path' => $config['upload_path'] . "/" . $config['file_name'] . "." . $ext,
            "thumb_path" => $paththumbs . $avance['width'] . "x" . $avance['height'] . "_" . $config['file_name'] . "." . $ext,
            'width' => $avance['width'], 'height' => $avance['height'], 'file_name' => $config['file_name']);
        //var_dump($arrDataThumb200);exit;
        /* $arrDataThumb831 = array('source_path' => $config['upload_path'] . "/" . $config['file_name'] . "." . $ext,
          "thumb_path" => $paththumb . SITE_ADMIN_AVATAR_PREFIXCAT . $config['file_name'] . "." . $ext,
          'width' => $avances['width'], 'height' => $avances['height'], 'file_name' => $config['file_name']); */

        $this->CI->load->library('upload', $config);
        if (!$this->CI->upload->do_upload($name)) {
            $aUploadData['error'] = $this->CI->upload->display_errors();
        } else {
            $aUploadData = array_merge($aUploadData, $this->CI->upload->data());
            if ($arrDataThumb200) {
                $this->createThumb($arrDataThumb200);
            }
            /*  if ($arrDataThumb831) {
              $this->createThumb($arrDataThumb831);
              } */
            return $aUploadData;
        }

        return $aUploadData;
    }

    public function multiuploadImage($path, $name, $avance = array()) {
        // var_dump($avance);exit;
        $aUploadData = array(
            'error' => array()
        );
        $arrDataThumb = false;
        $name_array = array();
        $count = count($_FILES[$name]['size']);
        foreach ($_FILES as $key => $value)
            for ($s = 0; $s <= $count - 1; $s++) {
                $_FILES[$name]['name'] = $value['name'][$s];
                $_FILES[$name]['type'] = $value['type'][$s];
                $_FILES[$name]['tmp_name'] = $value['tmp_name'][$s];
                $_FILES[$name]['error'] = $value['error'][$s];
                $_FILES[$name]['size'] = $value['size'][$s];
                $ext = pathinfo($value['name'][$s], PATHINFO_EXTENSION);
                ///
                $config['upload_path'] = FCPATH . $path . "/";
                $config['max_size'] = '1515120'; //5mb
                $config['allowed_types'] = 'gif|jpg|png|jpeg|bmp';
                $config['file_name'] = $this->GUID();
                $this->CI->load->library('upload', $config);
                if (!$this->CI->upload->do_upload($name)) {
                    $aUploadData['error'] = $this->CI->upload->display_errors();
                } else {
                    $aUploadData[] = array_merge($aUploadData, $this->CI->upload->data());
                    $data = $this->CI->upload->data();
                    $name_array[] = $data['file_name']; //"/thumb_510x417/" . SITE_ADMIN_AVATAR_PREFIX 
                    foreach ($avance as $key => $val) {
                        $varwidth = $val['width'];
                        $varheight = $val['height'];
                        $arrDataThumb = array('source_path' => $config['upload_path'] . "/" . $data['file_name'],
                            "thumb_path" => $config['upload_path'] . $varwidth . "x" . $varheight . "_" . $data['file_name'],
                            'width' => $varwidth, 'height' => $varheight, 'file_name' => $config['file_name']);
                        //var_dump($arrDataThumb200);exit;
                        if ($arrDataThumb) {
                            $this->createThumb($arrDataThumb);
                        }
                    }
//                    
                }
            }
        //var_dump($name_array);exit;
        return $name_array;
    }

    public function uploadImageBas64($argImageData) {
        list($varMimeType, $arrImageData) = explode(';', $argImageData['img']);
        $arrBase64Image = explode(',', $arrImageData);
        $varExtension = trim(str_replace("data:image/", "", $varMimeType));
        $varFileName = "";
        if ($arrBase64Image) {
            $varFileName = $this->GUID() . ".{$varExtension}";
            $varImageDataBase64 = base64_decode($arrBase64Image[1]);
            file_put_contents($argImageData['img_dest'] . "/{$varFileName}", $varImageDataBase64);
        }
        return $varFileName;
    }

    /**
     *
     * function for create thumb
     * @author Shiv kumar Tiwari
     * @Mob - +919266913291
     * @skype - shiv.tiwari86
     * @param - mixed array to initialise the config
     * @return - void
     */
    public function createThumb($argArrData) {
        $this->changePermission($argArrData['source_path'], 0777);
        $config['image_library'] = 'gd2';
        $config['source_image'] = $argArrData['source_path'];
        $config['new_image'] = $argArrData['thumb_path'];
        $config['create_thumb'] = TRUE;
        $config['maintain_ratio'] = false;
        $config['thumb_marker'] = false;
        $config['width'] = $argArrData['width'];
        $config['height'] = $argArrData['height'];
        $this->CI->load->library('image_lib', $config);
        $this->CI->image_lib->initialize($config);
        $this->CI->image_lib->resize();
        $this->CI->image_lib->clear();
    }
    
     public function createThumbs($argArrData) {
        $this->changePermission($argArrData['source_path'], 0777);
        $config['image_library'] = 'gd2';
        $config['source_image'] = $argArrData['source_path'];
        $config['new_image'] = $argArrData['thumb_path'];
        $config['create_thumb'] = TRUE;
        $config['maintain_ratio'] = false;
        $config['thumb_marker'] = false;
        $config['width'] = $argArrData['width'];
        $config['height'] = $argArrData['height'];
        $this->CI->load->library('image_lib', $config);
        $this->CI->image_lib->initialize($config);
        $this->CI->image_lib->resize();
        $this->CI->image_lib->clear();
    }

    /**
     *
     * function for change permission of teh file
     * @author Shiv kumar Tiwari
     * @Mob - +919266913291
     * @skype - shiv.tiwari86
     * @param - string $filename,int permission
     * @return - void
     */
    public function changePermission($filePath, $permission) {
        return chmod($filePath, 0777);
    }

    /**
     *
     * function for crop and return file name
     * @author Shiv kumar Tiwari
     * @Mob - +919266913291
     * @skype - shiv.tiwari86
     * @param - array('file_type','file_name','m_width','m_height',
     *          'o_width','o_height','imageMain')
     * @return string return file name
     */
    function CropImages($argArrData = array()) {
        $varReturnedFileName = "";
        if (isset($argArrData)) {
            $fileType = strtolower($argArrData["file_type"]);
            $finalname = $argArrData['file_name'];
            $main_width = $argArrData['m_width'];
            $main_height = $argArrData['m_height'];
            $org_width = $argArrData['o_width'];
            $org_height = $argArrData['o_height'];
            $sImage = $argArrData['imageMain'];
            $x = (isset($argArrData['x'])) ? $argArrData['x'] : 0;
            $y = (isset($argArrData['y'])) ? $argArrData['y'] : 0;
            $path = $argArrData['path'];
            if ($fileType == "image/jpeg" || $fileType == "image/pjpeg" || $fileType == 'jpg' || $fileType == 'jpeg' || $fileType == 'pjpeg') {
                $src = imagecreatefromjpeg($sImage);
                $main = imagecreatetruecolor($main_width, $main_height);
                imagecopyresampled($main, $src, 0, 0, $x, $y, $main_width, $main_height, $org_width, $org_height);
                imagejpeg($main, $path . $finalname . ".jpeg", 90);
                $varReturnedFileName = $finalname . ".jpeg";
            } else if ($fileType == "image/png" || $fileType == "png") {
                $src = imagecreatefrompng($sImage);
                $main = imagecreatetruecolor($main_width, $main_height);
                imagecopyresampled($main, $src, 0, 0, $x, $y, $main_width, $main_height, $org_width, $org_height);
                imagepng($main, $path . $finalname . ".png", 8);
                $varReturnedFileName = $finalname . ".png";
            }
        }
        return $varReturnedFileName;
    }

}

?>