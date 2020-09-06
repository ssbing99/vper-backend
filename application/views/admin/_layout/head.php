<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="http://html-templates.multipurposethemes.com/bootstrap-4/admin/minimo-admin/images/favicon.ico">

    <title><?php echo SITE_ADMIN_TITLE;?></title>
    
	<!-- Bootstrap v4.0.0-beta -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/bootstrap/dist/css/bootstrap.css">
<!--        <link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/bootstrap/dist/css/bootstrap.min.css">-->
	
	<!-- font awesome -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/font-awesome/css/font-awesome.css">
	
	<!-- ionicons -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/Ionicons/css/ionicons.css">
	
	<!-- theme style -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/master_style.css" type="text/css">
	
	<!-- horizontal menu style -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/horizontal_menu_style.css">
	
	<!-- mínimo admin skins. choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/skins/_all-skins.css">
	
	<!-- morris chart -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/morris.js/morris.css">
	
	<!-- jvectormap -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/jvectormap/jquery-jvectormap.css">
	
	<!-- date picker -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css">
	
	<!-- daterange picker -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_components/bootstrap-daterangepicker/daterangepicker.css">
	
	<!-- bootstrap wysihtml5 - text editor -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css">
	<!-- gallery -->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor_components/gallery/css/animated-masonry-gallery.css" />
   

 <!-- fancybox -->
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor_components/lightbox-master/dist/ekko-lightbox.css" />
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

     <style type="text/css" media="screen">
		.ace-editor { 
			min-height: 300px;
		}
               
                .deletemultiple 
                {
                    text-align: center;
                    margin: auto;
                    position: relative;
                    }
                    .dataTables_empty
                    {
                    text-align: center;
                   color:red;
                    }
       
	</style>
<!--        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
      
	<!--alerts CSS -->
         <link href="<?php echo base_url();?>assets/vendor_components/sweetalert/sweetalert.css" rel="stylesheet" type="text/css">

	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
        <!-- bootstrap wysihtml5 - text editor -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/vendor_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css">
        
        <!-- Bootstrap fileupload css -->
<!--    <link href="<?php echo base_url();?>assets/js/bootstrap-fileupload/bootstrap-fileupload.css" rel="stylesheet" />-->
<!--    <link href="<?php echo base_url();?>assets/css/components.css" rel="stylesheet" type="text/css" />-->
    
     <!-- Jquery filer css -->
    <link href="<?php echo base_url();?>assets/js/plugins/jquery.filer/css/jquery.filer.css" rel="stylesheet" />
    <link href="<?php echo base_url();?>assets/js/plugins/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css" rel="stylesheet" />
<!--       <script src="<?php echo base_url(); ?>assets/vendor_components/jquery/dist/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/horizontal-layout.js"></script>
 -->
    
    <!-- gallery -->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor_components/gallery/css/animated-masonry-gallery.css" />
   
    <!-- fancybox -->
      <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/vendor_components/lightbox-master/dist/ekko-lightbox.css" />
      

    <!-- mínimo admin horizontal-layout -->
    <!--<script src="<?php echo base_url(); ?>assets/vendor_components/jquery/dist/jquery.min.js"></script>-->
    <script src="<?php echo base_url();?>assets/js/jquery-1.11.1.min.js"></script>
    <script src="<?php echo base_url(); ?>assets/js/horizontal-layout.js"></script>
    <link rel="stylesheet" href="<?php echo base_url();?>assets/css/jquery-ui.css">
  <!--<link rel="stylesheet" href="/resources/demos/style.css">-->
  <!--<script src="<?php echo base_url();?>assets/js/jquery-1.12.4.js"></script>-->
  </head>



