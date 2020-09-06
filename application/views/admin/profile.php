<?php
//var_dump($objprofiledata);exit;
?>
<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
        My Profile
      </h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/profile');?>">Profile</a></li>
<!--        <li class="breadcrumb-item active">User profile</li>-->
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">
        <div class="col-xl-4 col-lg-5">

          <!-- Profile Image -->
          <div class="box box-primary">
              <?php 
$successmsg=$this->session->flashdata("Success");
$error_msg=$this->session->flashdata("error");
if(!empty($successmsg))
{?>
 <div class="alert alert-success alert-dismissible flash-messages">
     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><?php echo $successmsg;?></div>
<?php } if(!empty($error_msg))
{
?><div class="alert alert-danger alert-dismissible">
     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><?php echo $error_msg;?></div><?php }

?>
            <div class="box-body box-profile">
              <img class="profile-user-img rounded-circle img-fluid mx-auto d-block" style="width: 50%;" src="<?php echo !empty($objprofiledata->avatar)?  base_url().UPLOAD_ADMIN_PROFILE.'/600x600_'.$objprofiledata->avatar:base_url().UPLOAD_ADMIN_PROFILE.'/'.'noimage.png';?>"  alt="User profile picture">

              <h3 class="profile-username text-center"><?php  echo !empty($objprofiledata->first_name) ? $objprofiledata->first_name: '';?> <?php echo !empty($objprofiledata->last_name) ? $objprofiledata->last_name :'';?></h3>

              <!--<p class="text-muted text-center">Accoubts Manager Jindal Cop.</p>-->
				
              <div class="row social-states">
<!--				  <div class="col-6 text-right"><a href="#" class="link"><i class="ion ion-ios-people-outline"></i> 254</a></div>
				  <div class="col-6 text-left"><a href="#" class="link"><i class="ion ion-images"></i> 54</a></div>-->
			  </div>
            
              <div class="row">
              	<div class="col-12">
              		<div class="profile-user-info">
						<p><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;<?php echo !empty($objprofiledata->email)?$objprofiledata->email:'';?></p>
						<p><i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;<?php echo !empty($objprofiledata->Conatct_number)?$objprofiledata->Conatct_number:'';?></p>
						<p><i class="fa fa-location-arrow"></i>&nbsp;&nbsp;&nbsp;<?php echo !empty($objprofiledata-> 	Address)?$objprofiledata-> 	Address:'';?></p>
<!--						<div class="map-box">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329" width="100%" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
						<p class="margin-bottom">Social Profile</p>
						<div class="user-social-acount">
							<button class="btn btn-circle btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></button>
							<button class="btn btn-circle btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></button>
							<button class="btn btn-circle btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></button>
						</div>-->
					</div>
             	</div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-xl-8 col-lg-7">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              
              <li><a class="active" href="#timeline" data-toggle="tab">Personal Info</a></li>
              <li><a href="#activity" data-toggle="tab">Change Avatar</a></li>
              <li><a href="#settings" data-toggle="tab">Change Password</a></li>
            </ul>
                        
            <div class="tab-content">
             
             <div class="active tab-pane" id="timeline">
                   <form  action="<?php echo base_url('admin/profile');?>" method="post"> 
                  <div class="form-group">
						<h5>First Name <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="first_name" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="text" value="<?php echo !empty($objprofiledata->first_name)?$objprofiledata->first_name:'';?>"> <div class="help-block"></div></div>
						
					</div>
                    <div class="form-group">
						<h5>Last Name <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="last_name" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="text" value="<?php echo !empty($objprofiledata->last_name)?$objprofiledata->last_name:'';?>"> <div class="help-block"></div></div>
						
					</div>
<!--                    <div class="form-group">
						<h5>Email <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="email" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="text" value="<?php echo !empty($objprofiledata->email)?$objprofiledata->email:'';?>"> <div class="help-block"></div></div>
						
					</div>-->
                    <div class="form-group">
						<h5>Contact <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="Conatct_number" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="text" value="<?php echo !empty($objprofiledata->Conatct_number)?$objprofiledata->Conatct_number:'';?>"> <div class="help-block"></div></div>
						
					</div>
                    <div class="form-group">
						<h5>ADDreess <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="Address" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="text" value="<?php echo !empty($objprofiledata->Address)?$objprofiledata->Address:'';?>"> <div class="help-block"></div></div>
						
					</div>
                   <div class="text-xs-right">
                    
                     <button type="submit" class="btn btn-info">Submit</button>
                 
                  </div>
                </form>
               
         
              </div>    
              <!-- /.tab-pane -->
              
              <div class="tab-pane" id="activity">
                    <form novalidate action="<?php echo base_url('admin/profile');?>" enctype="multipart/form-data" method="post">
                  <div class="form-group">
						<h5>File Input Field <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="picture" class="form-control" required="" aria-invalid="false" type="file"> <div class="help-block"></div></div>
					</div>
                   <div class="text-xs-right">
                    
                     <button type="submit" class="btn btn-info">Submit</button>
                 
                  </div>
                </form>
                <!-- Post -->
                <!-- /.post -->
                
              </div>
              <!-- /.tab-pane -->
              
              <div class="tab-pane" id="settings">
                <form novalidate method="post" action="<?php echo base_url('admin/profile');?>">
                  <div class="form-group">
						<h5>Old Password <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="password" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="password"> <div class="help-block"></div></div>
						
					</div>
                       <div class="form-group">
						<h5>New Password <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="new_password" class="form-control" required="" data-validation-required-message="This field is required" aria-invalid="false" type="password"><div class="help-block"></div></div>
					</div>
                       <div class="form-group">
						<h5>Confirm Password <span class="text-danger">*</span></h5>
						<div class="controls">
							<input name="cp_password" data-validation-match-match="new_password" class="form-control" required="" aria-invalid="true" type="password"><div class="help-block"></div>
                                                </div></div>
                 <div class="text-xs-right">
                    
                     <button type="submit" class="btn btn-info">Submit</button>
                 
                  </div>
                </form>
              </div>
              <!-- /.tab-pane -->
            </div>
            <!-- /.tab-content -->
          </div>
          <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
   <script type="text/javascript">
setTimeout(function() {
    $('.flash-messages').fadeOut('fast');
}, 3000);
</script>
   

