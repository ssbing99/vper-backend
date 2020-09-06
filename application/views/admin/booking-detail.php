<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
       Order Details
      </h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/booking');?>">Booking
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
                        <li><a href="#highlights" class="<?php echo!empty($_GET['search_h']) ? "active" : '' ?>" data-toggle="tab" id="art">Chef Dish</a></li>

                    </ul>

                    <div class="tab-content">

                        <div class="active tab-pane" id="timeline">
                              <?php
                                if (!empty($orderDetail)) {?>
                                
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                       <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Order NUmber :</label> <br>
                                            <p> <?php echo $orderDetail->order_number;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Total Days :</label> <br>
                                            <p> <?php echo $orderDetail->total_days;?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Book Time :</label><br> 
                                            <p><?php echo $orderDetail->book_time;?></p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Book Date :</label><br>
                                            <p><?php echo date('d M Y',strtotime($orderDetail->book_date));?></p>
                                        </div>
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Total Person :</label><br>
                                            <p><?php echo $orderDetail-> 	total_person ;?></p>
                                        </div>
                                          


                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Total Price :</label><br> 
                                            <p><?php echo $orderDetail->total_price ." NOK";?></p>
                                        </div>
                                    </div>
                                   
                                    <div class="row">
                                          <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Address :</label><br> 
                                            <p><?php echo $orderDetail->address;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Country :</label><br> 
                                            <p><?php echo $orderDetail->cname;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> State :</label><br> 
                                            <p><?php echo $orderDetail->sname;?></p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                          <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> city :</label><br> 
                                            <p><?php echo $orderDetail->cityname;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> phone :</label><br> 
                                            <p><?php echo $orderDetail->phone;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> email :</label><br> 
                                            <p><?php echo $orderDetail->email;?></p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                          <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> pincode :</label><br> 
                                            <p><?php echo $orderDetail->pincode;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Payment Status :</label><br> 
                                            <p><?php echo ($orderDetail->payment_status==1)?"Success":"Pending";?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> User Choice :</label><br> 
                                           <?php
                                           if($orderDetail->booking_type==1)
                                           {
                                           ?>
                                            <p><?php echo $orderDetail->alergies;?></p>
                                           <?php } elseif($orderDetail->booking_type==2){?>
                                            <p><?php echo $orderDetail->foodbox_menu;?></p>
                                           <?php } else{?>
                                            <p><?php echo $orderDetail->other;?></p>
                                           <?php } ?>
                                        </div>
                                    </div>
                                   
                                    
                     
                                    </div>
                                


                                <?php }else{?>
         <h4 style="text-align: center;color: red;">No Records Found</h4>
        
     <?php }?>
                                


                            </div>
                               
                        </div>
                                 <div class="tab-pane" id="highlights">
          
                            <!-- /.box -->


                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label class="label-control" style="font-weight:bold;">Chef Dish :</label><br> 
                                           <?php
                                           if(!empty($chefOrderDish))
                                           {
                                           $i=1;
                                        foreach($chefOrderDish as $chefOrderDishobj)
                                        {
                                            ?>
                                            <p><?php echo $i.". ";?><?php echo!empty($chefOrderDishobj->name) ? $chefOrderDishobj->name : ''; ?><p>
                                           <?php $i++;} }else {echo "No record Found";}?>
                                           </div>
                                     

                                        
                                    </div>

                                </div>
                            </div>


                            <!-- /.content -->



                        </div>
                        <!-- /.tab-pane -->

                        <!-- /.tab-pane -->

                  
                        <!-- /.tab-pane -->

                     
                        <!-- /.tab-pane -->

                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                </div>
               
                      

                        </div>
                        <!-- /.tab-pane -->
                        </div>
                    
</div>
    </section>
    </div>
 
