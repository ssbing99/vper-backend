<?php
$controller = $this->router->fetch_class();
$varAction = $this->router->fetch_method();
$session=$this->session->userdata(SITE_SESSION_NAME);
$admin_type=$session['Yper_admin']['admin_type'];
?>

<!-- sidebar menu: : style can be found in sidebar.less -->
<ul class="sidebar-menu" data-widget="tree">
     <li class="<?php echo (in_array($varAction, array('dashboard','profile'))) ? 'active' : ''; ?>">
        <a href="<?php echo base_url('admin/dashboard'); ?>">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>

    </li>
     <li class="treeview <?php echo (in_array($varAction, array('getChefallListdata','ChefDetailById','getChefDishallListdata','getreviewdata','reviewDetailById','add_perpersonammount'))) ? 'active' : ''; ?>">
        <a href="#">
            <i class="glyphicon glyphicon-cutlery"></i>Chef's
        </a>
        <ul class="treeview-menu">
           <!--<li class="<?php echo (in_array($varAction, array('getUserallListdata','UserDetailById'))) ? 'active' : ''; ?>"><a href="<?php echo base_url('admin/view-user'); ?>">View User</a></li>-->
           <li class="<?php echo (in_array($varAction, array('getChefallListdata','ChefDetailById'))) ? 'active' : ''; ?>"><a href="<?php echo base_url('admin/view-chef'); ?>">Our Chef</a></li>
           <li class="<?php echo (in_array($varAction, array('getChefDishallListdata'))) ? 'active' : ''; ?>"><a href="<?php echo base_url('admin/view-chefdish'); ?>">Dishes</a></li>
        <li class="<?php echo (in_array($varAction, array('getreviewdata','reviewDetailById'))) ? 'active' : ''; ?>"><a href="<?php echo base_url('admin/view-review'); ?>">Reviews</a></li>
        <li class="<?php echo (in_array($varAction, array('add_perpersonammount'))) ? 'active' : ''; ?>"><a href="<?php echo base_url('admin/add-ammount'); ?>">Add Amount</a></li>
      </ul>
    </li>
     <li class="<?php echo (in_array($varAction, array('getUserallListdata','UserDetailById'))) ? 'active' : ''; ?>">
        <a href="<?php echo base_url('admin/view-user'); ?>">
            <i class="glyphicon glyphicon-user"></i> <span>Customers</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>

    </li>
     <li class="<?php echo (in_array($varAction, array('chefchat_detailuser','chefchat_list'))) ? 'active' : ''; ?>">
        <a href="<?php echo base_url('admin/chefchat-list'); ?>">
            <i class="fa fa-snapchat"></i> <span>Chefchat</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>

    </li>
     <li class="<?php echo (in_array($varAction, array('viewUerbookingList','orderDetailByOrderId'))) ? 'active' : ''; ?>">
        <a href="<?php echo base_url('admin/booking'); ?>">
            <i class="fa fa-cc-amex"></i> <span>Booking</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>

    </li>
    <li class="<?php echo (in_array($varAction, array('getWalletdata'))) ? 'active' : ''; ?>">
        <a href="<?php echo base_url('admin/wallet'); ?>">
            <i class="fab fa-google-wallet"></i> <span>Wallet</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>

    </li>
        
   
   
   

</ul>