 <?php $sess_data=$this->custom_session->custom_userdata(SITE_SESSION_NAME);
     // var_dump($sess_data);exit; ?>
<header class="main-header">
    <!-- Logo -->
    <a href="<?php echo base_url('admin/dashboard');?>" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <!--<span class="logo-mini"><img src="<?php echo base_url();?>assets/images/logo.svg" class=" " alt="logo" /></span> -->
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b><?php echo SITE_ADMIN_TITLE;?></b> Admin</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top top-navbar navbar-expand-md">
     
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle d-block d-lg-none" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      
      <ul class="navbar-nav mr-auto mt-md-0">	
          <li>
              <?php $this->load->view('admin/_layout/sibebar-menu');?>
          </li>
		<!-- .Megamenu -->
<!--		<li class="nav-item dropdown mega-dropdown"> <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-th-large"></i></a>
			<div class="dropdown-menu scale-up-left">
				<ul class="mega-dropdown-menu row">
					<li class="col-lg-3 col-md-3 col-12 m-b-30">
						<h5 class="m-b-20">Yoga Retreat Organiser</h5>
						 List style 
						<ul class="list-style-none">
							<li><a href="<?php echo base_url('admin/yoga-center-view');?>">Yoga Centres View</a></li>
							<li><a href="<?php echo base_url('admin/yoga-center-add');?>">Add New Yoga Centres</a></li>
							<li><a href="<?php echo base_url('admin/yoga-instructors-view');?>">Yoga Instructors View</a></li>
							<li><a href="<?php echo base_url('admin/yoga-instructors-add');?>">Yoga Instructors Add</a></li>
						</ul>
					</li>
					<li class="col-lg-3 col-md-3 col-12 m-b-30">
						<h5 class="m-b-20"></h5>
						 List style 
						<ul class="list-style-none">
							<li><a href="<?php echo base_url('admin/yoga-testimonials-view');?>">Yoga Testimonials View</a></li>
							<li><a href="<?php echo base_url('admin/yoga-testimonials-add');?>">Yoga Testimonials Add</a></li>
							<li><a href="<?php echo base_url('admin/yoga-reviews-view');?>">Yoga Reviews View</a></li>
							<li><a href="<?php echo base_url('admin/yoga-reviews-add');?>">Yoga Reviews Add</a></li>
						</ul>
					</li>
                                        <li class="col-lg-3 col-md-3 col-12 m-b-30">
						<h5 class="m-b-20">Yoga Retreats Details</h5>
						 List style 
						<ul class="list-style-none">
							<li><a href="<?php echo base_url('admin/yoga-retreateview');?>">Yoga retreats</a></li>
							
						</ul>
					</li>
					<li class="col-lg-3 col-md-3 col-12 m-b-30">
						<h5 class="m-b-20">List style</h5>
						 List style 
						<ul class="list-style-none">
							<li><a href="javascript:void(0)">You can give link</a></li>
							<li><a href="javascript:void(0)">Give link</a></li>
							<li><a href="javascript:void(0)">Another Give link</a></li>
							<li><a href="javascript:void(0)">Forth link</a></li>
						</ul>
					</li>
					<li class="col-lg-3 col-md-3 col-12 m-b-30">
						<h5 class="m-b-20">List style</h5>
						 List style 
						<ul class="list-style-none">
							<li><a href="javascript:void(0)">You can give link</a></li>
							<li><a href="javascript:void(0)">Give link</a></li>
							<li><a href="javascript:void(0)">Another Give link</a></li>
							<li><a href="javascript:void(0)">Forth link</a></li>
						</ul>
					</li>
				</ul>
			</div>
                        </li>-->
		<!-- /.Megamenu -->
	</ul>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu user-area">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">            
              <img src="<?php echo !empty($sess_data['avatar'])?  base_url().UPLOAD_ADMIN_PROFILE.'/160x160_'.$sess_data['avatar']:base_url().UPLOAD_ADMIN_PROFILE.'/'.'noimage.png';?>" class="user-image rounded-circle" alt="User Image">
            </a>
            <ul class="dropdown-menu scale-up">             
              <!-- User Login -->              
                 <li>
                 <a href="<?php echo base_url('admin/profile');?>" class="btn btn-default btn-flat">
                 <i class="fa fa-user"></i>
                 My Profile</a>
                 </li>
                 <li>
                 <a href="<?php echo base_url('admin/profile');?>" class="btn btn-default btn-flat">
                 <i class="fa fa-key"></i>
                 Change Password</a>
                 </li>
                 <li>
                 <a href="<?php echo base_url('admin/logout');?>" class="btn btn-default btn-flat">
                 <i class="fa fa-power-off"></i>
                 Sign out</a>
                 </li>          
            </ul>
          </li>
          <!-- Messages: style can be found in dropdown.less-->
<!--          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope"></i>
              <span class="label label-success">5</span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header">You have 5 messages</li>
              <li>
                 inner menu: contains the actual data 
                <ul class="menu inner-content-div">
                  <li> start message 
                    <a href="#">
                      <div class="pull-left">
                        <img src="../images/user2-160x160.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Lorem Ipsum
                          <small><i class="fa fa-clock-o"></i> 15 mins</small>
                         </h4>
                         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                    </a>
                  </li>
                   end message 
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="../images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Nullam tempor
                          <small><i class="fa fa-clock-o"></i> 4 hours</small>
                         </h4>
                         <span>Curabitur facilisis erat quis metus congue viverra.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="../images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Proin venenatis
                          <small><i class="fa fa-clock-o"></i> Today</small>
                         </h4>
                         <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="../images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Praesent suscipit
                        <small><i class="fa fa-clock-o"></i> Yesterday</small>
                         </h4>
                         <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="../images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Donec tempor
                          <small><i class="fa fa-clock-o"></i> 2 days</small>
                         </h4>
                         <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">See all e-Mails</a></li>
            </ul>
          </li>-->
          <!-- Notifications: style can be found in dropdown.less -->
<!--          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell"></i>
              <span class="label label-warning">7</span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header">You have 7 notifications</li>
              <li>
                 inner menu: contains the actual data 
                <ul class="menu inner-content-div">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> Curabitur id eros quis nunc suscipit blandit.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i> In gravida mauris et nisi
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> Praesent eu lacus in libero dictum fermentum.
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> Nunc fringilla lorem 
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>-->
          <!-- Tasks: style can be found in dropdown.less -->
<!--          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag"></i>
              <span class="label label-danger">6</span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header">You have 6 tasks</li>
              <li>
                 inner menu: contains the actual data 
                <ul class="menu inner-content-div">
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Lorem ipsum dolor sit amet
                        <small class="pull-right">30%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-aqua" style="width: 30%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">30% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Vestibulum nec ligula
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-danger" style="width: 20%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Donec id leo ut ipsum
                        <small class="pull-right">70%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-light-blue" style="width: 70%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">70% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Praesent vitae tellus
                        <small class="pull-right">40%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-yellow" style="width: 40%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Nam varius sapien
                        <small class="pull-right">80%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-red" style="width: 80%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                  <li> Task item 
                    <a href="#">
                      <h3>
                        Nunc fringilla
                        <small class="pull-right">90%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-primary" style="width: 90%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">90% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                   end task item 
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>          -->
          <!-- Control Sidebar Toggle Button -->
<!--          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-cog fa-spin"></i></a>
          </li>-->
        </ul>
      </div>
    </nav>
  </header>

