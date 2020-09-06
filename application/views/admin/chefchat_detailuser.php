 <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Chat
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item active">Chat</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-lg-3 col-12">
          <!--<a href="compose.html" class="btn btn-success btn-block btn-shadow margin-bottom">Compose</a>-->

          <div class="box box-solid">
            <div class="box-header with-border">
              <h3 class="box-title">User</h3>

<!--              <div class="box-tools">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>-->
            </div>
            <div class="box-body no-padding mailbox-nav">
              <ul class="nav nav-pills flex-column">
<!--                <li class="nav-item"><a class="nav-link active" href="javascript:void(0)"><i class="ion ion-ios-email-outline"></i> Inbox
                  <span class="label label-success pull-right">12</span></a></li>
                <li class="nav-item"><a class="nav-link" href="javascript:void(0)"><i class="ion ion-paper-airplane"></i> Sent</a></li>-->
              <?php
              if(!empty($Chatuser_list))
              {
                 // var_dump($Chatuser_list);exit;
                  foreach($Chatuser_list as $Chatuser_listobj)
                  {
              
              ?>
                  <li class="nav-item"><a class="nav-link" href="<?php echo base_url('admin/chefchat-detail')."/".$VarFromId."?t=".$Chatuser_listobj->user_id_to;?>" data-id="<?php echo $Chatuser_listobj->user_id_to;?>"><i class="ion ion-email-unread"></i><?php echo $Chatuser_listobj->fname." ".$Chatuser_listobj->lname;?></a></li>
              <?php }} ?>
<!--                <li class="nav-item"><a class="nav-link" href="javascript:void(0)"><i class="ion ion-star"></i>  Starred <span class="label label-warning pull-right">14</span></a>
                </li>-->
                <!--<li class="nav-item"><a class="nav-link" href="javascript:void(0)"><i class="ion ion-trash-a"></i> Trash</a></li>-->
              </ul>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /. box -->
<!--          <div class="box box-solid">
            <div class="box-header with-border">
              <h3 class="box-title">Labels</h3>

              <div class="box-tools">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="box-body no-padding mailbox-nav">
              <ul class="nav nav-pills flex-column">
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o text-red"></i> Important</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o text-yellow"></i> Promotions</a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-circle-o text-light-blue"></i> Social</a></li>
              </ul>
            </div>
             /.box-body 
          </div>-->
          <!-- /.box -->
          
        </div>
        <!-- /.col -->
        <div class="col-lg-9 col-12">
          
       
          <div class="box box-primary">
<!--            <div class="box-header with-border">
              <h3 class="box-title">Inbox</h3>

              <div class="box-tools pull-right">
                <div class="has-feedback">
                  <input type="text" class="form-control input-sm" placeholder="Search Mail">
                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
               /.box-tools 
            </div>-->
            <!-- /.box-header -->
            <div class="box-body no-padding">
                
            <table class="table table-hover table-responsive">
                <tbody><tr>
                  <th>Name</th>
                  <th>Phone</th>
                   <th>Email</th>
                   <th>Image</th>
                  </tr>
                <tr>
                    <?php
                    if(!empty($profile))
                    {
                        ?>
	<td><?php echo $profile->fname." ".$profile->lname;?></td>
        <td><?php echo $profile->phone;?></td>
        <td><?php echo $profile->email;?></td>
        
        <td><img src="<?php echo !empty($profile->user_image)?base_url().'/'.$profile->user_image:base_url().'/'.UPLOAD_DIR."noimage.jpg";?>" height="50px" width="50px"></td>
        
        </tr>
                    <?php } else { ?>
        
                                <tr>
                                    <td colspan="9"><h4 style="text-align: center;color: red;">No Records Found</h4></td>
                                </tr><?php } ?>
              </tbody>
             
            </table>
              <div class="mailbox-controls">
                <!-- Check all button -->
<!--                <button type="button" class="btn btn-default btn-outline btn-sm checkbox-toggle"><i class="ion ion-android-checkbox-outline-blank"></i>
                </button>-->
<!--                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-trash-a"></i></button>
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-reply"></i></button>
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-share"></i></button>
                </div>-->
                <!-- /.btn-group -->
                <div class="btn-group">
<!--				  <div class="btn-group">
					<button type="button" class="btn btn-default btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				      <i class="ion ion-flag margin-r-5"></i>
					  <span class="caret"></span>
					</button>
					<div class="dropdown-menu">
					    <a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				  </div>-->
<!--				  <div class="btn-group">
					<button type="button" class="btn btn-default btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				  	  <i class="ion ion-folder margin-r-5"></i>
					  <span class="caret"></span>
					</button>
					<div class="dropdown-menu">
					    <a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				  </div>-->
				</div>
                <!-- /.btn-group -->
<!--                <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-refresh"></i></button>
                <div class="pull-right">
                  1-50/200
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-chevron-right"></i></button>
                  </div>
                   /.btn-group 
                </div>-->
                <!-- /.pull-right -->
              </div>
                <?php
                if(!empty($userchat))
                {
                    foreach($userchat as $userchatobj)
                    {
                $currentDateTime =$userchatobj->date_created;
                $time = date('h:i A', strtotime($currentDateTime));  
                ?>
              <div class="mailbox-messages">
               <!-- Message. Default to the left -->
               <?php
               if($userchatobj->user_id_from==$VarFromId)
               {
                 
               ?>
				<div class="direct-chat-msg">
				  <div class="direct-chat-info clearfix">
					<span class="direct-chat-name pull-left"><?php echo !empty($profile->fname)?$profile->fname." ".$profile->lname:'';?></span>
                                        <span class="direct-chat-timestamp pull-right"><?php echo date('d M y',  strtotime($userchatobj->date_created))." ".$time;?></span>
				  </div>
				  <!-- /.direct-chat-info -->
				  <img class="direct-chat-img" src="<?php echo !empty($profile->user_image)?base_url().'/'.$profile->user_image:base_url().'/'.UPLOAD_DIR."noimage.jpg";?>" alt="message user image">
				  <!-- /.direct-chat-img -->
				  <div class="direct-chat-text">
                                <?php echo ($userchatobj->user_id_from==$VarFromId)?$userchatobj->message:'';?>
				 </div>
				  <!-- /.direct-chat-text -->
				</div>
               <?php } ?>
              <?php 
             if($userchatobj->user_id_from!=$VarFromId)
             {
               
                 ?>
               <div class="direct-chat-msg right">
				  <div class="direct-chat-info clearfix">
					<span class="direct-chat-name pull-right"><?php echo !empty($gettodata->fname)?$gettodata->fname." ".$gettodata->lname:'';?> </span>
					<span class="direct-chat-timestamp pull-left"><?php echo date('d M y',  strtotime($userchatobj->date_created))." ".$time;?></span>
				  </div>
				  <!-- /.direct-chat-info -->
				  <img class="direct-chat-img" src="<?php echo !empty($gettodata->user_image)?base_url().'/'.$gettodata->user_image:base_url().'/'.UPLOAD_DIR."noimage.jpg";?>" alt="message user image">
				  <!-- /.direct-chat-img -->
				  <div class="direct-chat-text">
				<?php echo ($userchatobj->user_id_from!=$VarFromId)?$userchatobj->message:'';?>
				  </div>
				  <!-- /.direct-chat-text -->
				</div>
             <?php } ?>
                <!-- /.table -->
              </div>
                <?php }} ?>
              <!-- /.mail-box-messages -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer no-padding">
              <div class="mailbox-controls">
                <!-- Check all button -->
<!--                <button type="button" class="btn btn-default btn-outline btn-sm checkbox-toggle"><i class="ion ion-android-checkbox-outline-blank"></i>
                </button>-->
<!--                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-trash-a"></i></button>
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-reply"></i></button>
                  <button type="button" class="btn btn-default btn-outline btn-sm"><i class="ion ion-share"></i></button>
                </div>-->
                <!-- /.btn-group -->
<!--                <div class="btn-group">
				  <div class="btn-group">
					<button type="button" class="btn btn-default btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				      <i class="ion ion-flag margin-r-5"></i>
					  <span class="caret"></span>
					</button>
					<div class="dropdown-menu">
					    <a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				  </div>
				  <div class="btn-group">
					<button type="button" class="btn btn-default btn-outline btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				  	  <i class="ion ion-folder margin-r-5"></i>
					  <span class="caret"></span>
					</button>
					<div class="dropdown-menu">
					    <a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
						<a class="dropdown-item" href="#">Something else here</a>
					</div>
				  </div>
				</div>-->
                <!-- /.btn-group -->
<!--                <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-refresh"></i></button>
                <div class="pull-right">
                  1-50/200
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-default btn-outline btn-sm"><i class="fa fa-chevron-right"></i></button>
                  </div>-->
                  <!-- /.btn-group -->
                </div>
                <!-- /.pull-right -->
              </div>
            </div>
          </div>
          <!-- /. box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <style>
      #foo {
    width: 100px;
    height: 150px;
    overflow-y: scroll;
}
  </style>

