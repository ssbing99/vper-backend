<?php
$varmethod=$this->router->fetch_method();
?>
<script>
function myMap() {
    var lat='<?php echo $userdetail->latitude ;?>';
    var long='<?php echo $userdetail->longitude  ;?>';
var mapProp= {
    center:new google.maps.LatLng(lat,long),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
          <?php echo ($varmethod!="ChefDetailById")?"Customer  Details":"Chef Details";?>
      </h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="<?php echo ($varmethod!="ChefDetailById")?base_url('admin/view-user'):base_url('admin/view-chef');?>"><?php echo ($varmethod!="ChefDetailById")?"Customer's":"Chef";?>
</a></li>
        <li class="breadcrumb-item active">Details</li>
      </ol>
    </section>

<section class="content">
<div class="row">
            <div class="container-fluid">
            
                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">

                        <li><a class="active" href="#timeline" data-toggle="tab">Basic Information </a></li>

                    </ul>

                    <div class="tab-content">

                        <div class="active tab-pane" id="timeline">
                              <?php
                                if (!empty($userdetail)) {?>
                                
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                       <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Name :</label> <br>
                                            <p> <?php echo $userdetail->fname." ".$userdetail->lname;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Email :</label> <br>
                                            <p> <?php echo $userdetail->email;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Phone :</label> <br>
                                            <p> <?php echo $userdetail->phone;?></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Last Login :</label><br> 
                                            <p><?php echo date('d M Y',strtotime($userdetail->last_login));?></p>
                                        </div>


                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Created Date :</label><br>
                                            <p><?php echo date('d M Y',strtotime($userdetail->date_created));?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Image :</label><br>
                                            <img src="<?php echo !empty($userdetail->user_image)?base_url().$userdetail->user_image:base_url().UPLOAD_DIR."noimage.jpg";?>" height="50" width="50">
                                        </div>
                                    </div>
                                    <?php
                                    if($varmethod=="ChefDetailById")
                                    {
                                        $country=$this->yper_model->getCountryName($userdetail->country );
                                    ?>
                                      <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Country :</label><br> 
                                            <p><?php echo !empty($country->name)?$country->name:'' ;?></p>
                                        </div>


                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> City :</label><br>
                                            <p><?php echo $userdetail->city ;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;">  Address :</label><br>
                                            <p><?php echo $userdetail->address ;?></p>
                                        </div>
                                    </div>
                                    <?php } ?>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Status :</label><br> 
                                            <p><?php echo ($userdetail->status==1)?"Active":"Deactive";?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> User Referal Code  :</label><br> 
                                            <p><?php echo $userdetail->user_referal_code ;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Register Referal Code  :</label><br> 
                                            <p><?php echo $userdetail->register_referal_code  ;?></p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                          <?php
                                    if($varmethod=="ChefDetailById")
                                    {
                                    ?>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> About :</label><br> 
                                            <p><?php echo $userdetail->about_me;?></p>
                                        </div>
                                         <?php } ?>
                                    </div>
                     
                                    </div>
                                
                                   
                                <div class="col-md-6" id="googleMap">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDA8qmOqYF6i21r5TlNEC6JMbRhZ77bG4&v=3.exp&libraries=places&callback=myMap"></script>
                                </div>


     <?php }else{?>
         <h4 style="text-align: center;color: red;">No Records Found</h4>
        
     <?php }?>
                                


                            </div>
                               
                        </div>
                      

                        </div>
                        <!-- /.tab-pane -->
                        </div>
                    
</div>
    </section>
    </div>
