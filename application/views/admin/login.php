<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from html-templates.multipurposethemes.com/bootstrap-4/admin/minimo-admin/minimoadmin-horizontal-nav/pages/examples/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2018 07:38:02 GMT -->
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="http://html-templates.multipurposethemes.com/bootstrap-4/admin/minimo-admin/images/favicon.ico">

    <title><?php echo SITE_ADMIN_TITLE;?> </title>
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
	<!-- Bootstrap v4.0.0-beta -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/bootstrap/dist/css/bootstrap.min.css">

	<!-- Font Awesome -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/font-awesome/css/font-awesome.css">

	<!-- Ionicons -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/Ionicons/css/ionicons.css">

	<!-- Theme style -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/master_style.css">

	<!-- mínimo admin Skins. Choose a skin from the css/skins
	   folder instead of downloading all of them to reduce the load. -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/skins/_all-skins.css">	

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!-- google font -->
        <style>
            @font-face {
                font-family: 'FontAwesome';
                src: url('<?php echo base_url('assets/vendor_components/font-awesome'); ?>/fonts/fontawesome-webfont.eot');
                src: url('<?php echo base_url('assets/vendor_components/font-awesome'); ?>/fonts/fontawesome-webfont(1).eot') format('embedded-opentype'), 
                    url('<?php echo base_url('assets/vendor_components/font-awesome'); ?>/fonts/fontawesome-webfont.woff') format('woff2'), 
                    url('<?php echo base_url('assets/vendor_components/font-awesome'); ?>/fonts/fontawesome-webfont.woff2') format('woff'), 
                    url('<?php echo base_url('assets/vendor_components/font-awesome'); ?>/fonts/fontawesome-webfont') format('truetype');
                font-weight: normal;
                font-style: normal;
              }
              @font-face { 
    font-family: "Ionicons";
    src: url('<?php echo base_url('assets/vendor_components/Ionicons'); ?>/icon/ionicons.eot') format("embedded-opentype");
    src: url('<?php echo base_url('assets/vendor_components/Ionicons'); ?>/icon/ionicons.eot') format("embedded-opentype"),
    url('<?php echo base_url('assets/vendor_components/Ionicons'); ?>/icon/ionicons.ttf') format('truetype'),
    url('<?php echo base_url('assets/vendor_components/Ionicons'); ?>/icon/ionicons.woff')  format("woff"),
    url('<?php echo base_url('assets/vendor_components/Ionicons'); ?>/icon/ionicons.svg')  format("svg")
    ;
}
        </style>

</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="<?php echo base_url();?>" style="color:white;"><b><?php echo SITE_ADMIN_TITLE;?> </b>Admin</a>
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>
   <?php 
   $error_msg=$this->session->flashdata('error');
   if(!empty($error_msg)) {?><div class="bg-red-active color-palette">
       <h4 class="text-center"> <?php echo $error_msg;?></h4></div><?php } ?>

    <form  method="post" class="form-element" action="<?php echo base_url('authenticate');?>">
      <div class="form-group has-feedback">
        <input type="text" name="username" class="form-control" placeholder="Email" required data-validation-required-message="This field is required">
     <span class="ion ion-email form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" name="password" class="form-control" placeholder="Password" >
        <span class="ion ion-locked form-control-feedback"></span>
      </div>
      <div class="row">
<!--        <div class="col-6">
          <div class="checkbox">
            <input type="checkbox" id="basic_checkbox_1" name="remember_me">
			<label for="basic_checkbox_1">Remember Me</label>
          </div>
        </div>-->
        <!-- /.col -->
<!--        <div class="col-6">
         <div class="fog-pwd">
          	<a href="javascript:void(0)"><i class="ion ion-locked"></i> Forgot pwd?</a><br>
          </div>
        </div>-->
        <!-- /.col -->
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-info btn-block btn-flat margin-top-10">SIGN IN</button>
        </div>
        <!-- /.col -->
      </div>
    </form>

<!--    <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-social-icon btn-circle btn-facebook"><i class="fa fa-facebook"></i></a>
      <a href="#" class="btn btn-social-icon btn-circle btn-google"><i class="fa fa-google-plus"></i></a>
    </div>-->
    <!-- /.social-auth-links -->

    <div class="margin-top-30 text-center">
    	<!--<p>Don't have an account? <a href="register.html" class="text-info m-l-5">Sign Up</a></p>-->
    </div>

  </div>
  <!-- /.login-box-body -->
</div>

<!-- /.login-box -->


	<!-- jQuery 3 -->
	<script src="<?php echo base_url();?>assets/vendor_components/jquery/dist/jquery.min.js"></script>
	
	<!-- popper -->
	<script src="<?php echo base_url();?>assets/vendor_components/popper/dist/popper.min.js"></script>
	
	<!-- Bootstrap v4.0.0-beta -->
	<script src="<?php echo base_url();?>assets/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <!-- form validation-->
       

</body>

<!-- Mirrored from html-templates.multipurposethemes.com/bootstrap-4/admin/minimo-admin/minimoadmin-horizontal-nav/pages/examples/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2018 07:38:02 GMT -->
</html>
