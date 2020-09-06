  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
        Dashboard
        <small>Control panel</small>
      </h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- boxes (Stat box) -->
      <div class="row">
        <div class="col-xl-3 col-md-6 col">
          <div class="info-box bg-blue">
            <span class="info-box-icon push-bottom"><i class="glyphicon glyphicon-cutlery"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Chef</span>
              <a href="<?php echo base_url('admin/view-chef');?>"><span class="info-box-number"><?php echo (!empty($countchef->totalrow)) ? $countchef->totalrow :0;?></span></a>

<!--              <div class="progress">
                <div class="progress-bar" style="width: 45%"></div>
              </div>-->
<!--              <span class="progress-description">
                    45% Increase in 28 Days
              </span>-->
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-xl-3 col-md-6 col">
          <div class="info-box bg-green">
            <span class="info-box-icon push-bottom"><i class="glyphicon glyphicon-user"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Customer</span>
              <a href="<?php echo base_url('admin/view-user');?>"><span class="info-box-number"><?php echo (!empty($countcustomer->totalrow)) ? $countcustomer->totalrow :0;?></span></a>

<!--              <div class="progress">
                <div class="progress-bar" style="width: 40%"></div>
              </div>
              <span class="progress-description">
                    40% Increase in 28 Days
              </span>-->
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-xl-3 col-md-6 col">
          <div class="info-box bg-purple">
            <span class="info-box-icon push-bottom"><i class="ion ion-ios-cloud-download-outline"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Dishes</span>
              <a href="<?php echo base_url('admin/view-chefdish');?>">  <span class="info-box-number"><?php echo (!empty($countdish->totalrow)) ? $countdish->totalrow :0;?></span></a>

<!--              <div class="progress">
                <div class="progress-bar" style="width: 85%"></div>
              </div>
              <span class="progress-description">
                    85% Increase in 28 Days
              </span>-->
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-xl-3 col-md-6 col">
          <div class="info-box bg-red">
            <span class="info-box-icon push-bottom"><i class="glyphicon glyphicon-shopping-cart"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Total Bokking</span>
              <a href="<?php echo base_url('admin/booking');?>"><span class="info-box-number"><?php echo (!empty($total_book->total)) ? $total_book->total :0;?></span></a>

<!--              <div class="progress">
                <div class="progress-bar" style="width: 50%"></div>
              </div>
              <span class="progress-description">
                    50% Increase in 28 Days
              </span>-->
            </div>
            <!-- /.info-box-content -->
          </div>
          <!-- /.info-box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

 <!-- PRODUCT LIST -->
                         <div class="row">
                             <div class="col-xl-4 col-md-6 col">
			  <div class="box box-primary">
				<div class="box-header with-border">
				  <h3 class="box-title">Recently Chat</h3>

				  <div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
					</button>
					<!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>-->
				  </div>
				</div>
				<!-- /.box-header -->
				<div class="box-body">
				  <ul class="products-list product-list-in-box">
					<?php
                                        if(!empty($recent_chat))
                                        {
                                            foreach($recent_chat as $recent_chatobj)
                                            {   ?>
                                      <li class="item">
					  <div class="product-img">
						<img src="<?php echo !empty($recent_chatobj->user_image)?base_url('').$recent_chatobj->user_image:base_url('').UPLOAD_DIR."noimage.jpg";?>" alt="Product Image">
					  </div>
					  <div class="product-info">
						<a href="<?php echo base_url('admin/chefchat-detail').'/'.$recent_chatobj->user_id_from."?t=".$recent_chatobj->user_id_to;?> " class="product-title">
                                                    <?php echo $recent_chatobj->fname." ".$recent_chatobj->lname;?>
						  <!--<span class="label label-warning pull-right"></span></a>-->
						<span class="product-description">
							  <?php echo $recent_chatobj->message;?>
							</span>
					  </div>
					</li>
                                        <?php }} ?>
					<!-- /.item -->
					
					<!-- /.item -->
				  </ul>
				</div>
				<!-- /.box-body -->
				<div class="box-footer text-center">
				  <a href="<?php echo base_url('admin/chefchat-list');?>" class="uppercase">View All Chat</a>
				</div>
				<!-- /.box-footer -->
			  </div>
                             </div>
                              <div class="col-xl-4 col-md-6 col">
			  <div class="box box-primary">
				<div class="box-header with-border">
				  <h3 class="box-title">Top 5 Recently Wallet</h3>

				  <div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
					</button>
					<!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>-->
				  </div>
				</div>
				<!-- /.box-header -->
				<div class="box-body">
				  <ul class="products-list product-list-in-box">
					<?php
                                        if(!empty($latestWallet))
                                        {
                                            foreach($latestWallet as $latestWalletobj)
                                            {   ?>
                                      <li class="item">
                                          <div class="product-img">
						<img src="<?php echo !empty($latestWalletobj->to_image)?base_url('').$latestWalletobj->to_image:base_url('').UPLOAD_DIR."noimage.jpg";?>" alt="Product Image">
					  </div>
                                          <?php
                                $varFromurl=($latestWalletobj->from_type=="chef")?base_url('admin/chef-detail').'/'.$latestWalletobj->user_id_from:base_url('admin/user-detail').'/'.$latestWalletobj->user_id_from;
                                // $varTourl=($latestWalletobj->to_type=="chef")?base_url('admin/chef-detail').'/'.$arrDataobj->user_id:base_url('admin/user-detail').'/'.$arrDataobj->user_id;
                                ?>
                                  <div class="product-info">
						<a href="<?php echo $varFromurl;?> " class="product-title">
                                                    <?php echo $latestWalletobj->from_fname . " " . $latestWalletobj->from_lname;?></a>
						  <!--<span class="label label-warning pull-right"></span></a>-->
						<span class="product-description">
							  <?php echo $latestWalletobj->ammount;?>
							</span>
					  </div>
                                          
					</li>
                                        <?php }} ?>
					<!-- /.item -->
					
					<!-- /.item -->
				  </ul>
				</div>
				<!-- /.box-body -->
				<div class="box-footer text-center">
				  <a href="<?php echo base_url('admin/wallet');?>" class="uppercase">View All Wallet List</a>
				</div>
				<!-- /.box-footer -->
			  </div>
                             </div>
                              <div class="col-xl-4 col-md-6 col">
			  <div class="box box-primary">
				<div class="box-header with-border">
				  <h3 class="box-title">Top 5 Recently Order</h3>

				  <div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
					</button>
					<!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>-->
				  </div>
				</div>
				<!-- /.box-header -->
				<div class="box-body">
				  <ul class="products-list product-list-in-box">
					<?php
                                        if(!empty($allbookinglist))
                                        {
                                            foreach($allbookinglist as $allbookinglistobj)
                                            {   ?>
                                      <li class="item">
                                           <div class="product-img">
						<img src="<?php echo !empty($allbookinglistobj->customer_image)?base_url('').$allbookinglistobj->customer_image:base_url('').UPLOAD_DIR."noimage.jpg";?>" alt="Product Image">
					  </div>
					   <div class="product-info">
						Order Number:<a href="<?php echo base_url('admin/order-detail').'/'.$allbookinglistobj->id;?> " class="product-title">
                                                    <?php echo $allbookinglistobj->order_number; ?>
						  <!--<span class="label label-warning pull-right"></span></a>-->
						<span class="product-description">
							Total Person:  <?php echo $allbookinglistobj->total_person;?>
							</span>
                                                    <span class="product-description">
							Booking Date:  <?php echo date('d M y',strtotime($allbookinglistobj->book_date));?>
							</span>
                                                 <span class="product-description">
							Price:  <?php echo $allbookinglistobj->total_price;?>
							</span></a>
					  </div>
					</li>
                                        <?php }} ?>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
					<!-- /.item -->
					
					<!-- /.item -->
				  </ul>
				</div>
				<!-- /.box-body -->
				<div class="box-footer text-center">
				  <a href="<?php echo base_url('admin/booking');?>" class="uppercase">View All Order</a>
				</div>
				<!-- /.box-footer -->
			  </div>
                             </div>
                         </div>
			  <!-- /.box -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

