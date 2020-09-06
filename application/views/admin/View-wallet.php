<!-- Content Wrapper. Contains page content -->
<?php
//var_dump($detail);
?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h4>
             Wallet
        </h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/wallet'); ?>">Wallet</a></li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- /.row -->

        <div class="row">
            <div class="col-12">

                <div class="box padding-0">


                    <div class="box-header">
                        <div class="row">       
                            <div class="col-sm-5">    
                                <h3 class="box-title">All Wallet List</h3>
                            </div>

<!--                            <div class="col-sm-3">
                                <form method="get">
                                    <div class="box-tools">
                                        <div class="input-group input-group-sm">
                                            <input type="text" name="table_search" class="form-control" value="<?php echo !empty($_GET['table_search'])?$_GET['table_search']:''?>" placeholder="Search">

                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>-->

                            <div class="col-sm-4">
                                <div class="row">
                                    
<!--                                <div class="col-sm-6 text-center">
                                    <form>
                                        <select name="status" class="changeallstatus"  date-url="<?php echo base_url('admin/change_status');?>">
                                            <option>Select Option</option>
                                            <option value="1">Active</option>
                                             <option value="0">Deactive</option>
                                        </select>                                     
                                   </form>
                                </div>-->
<!--                                    <div class="col-sm-6">
                                   <button class="btn btn-social-icon btn-circle checkalldelete" data-toggle="modal" data-target="#modal-primary" value="" date-url="<?php echo base_url('admin/deleteUser').'?method='."view-chef"; ?>"><i class="glyphicon glyphicon-trash"></i></button>
                                  </div>-->
                                    
                            </div>
                        </div>
                    </div>
                </div>



                    <!-- /.box-header -->
                    <div class="box-body no-padding">
                        <table class="table table-hover table-responsive">
                            <tr> 
<!--                                <th>
                            <div class="controls">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="styled_single_checkbox" class="custom-control-input checkall"> 
                                    <span class="custom-control-indicator"></span> 
                                </label>
                            </div> 
                            </th>-->
                            <th>From</th>
                            <th>To</th>
                            <th>Ammount</th>
                            <th>Date</th>
                            </tr>
                            <tr>
                                <?php
                                if (!empty($arrData)) {
                                    foreach ($arrData as $arrDataobj) {
                                        ?>
<!--                                        <th>
                                    <div class="controls">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" required value="<?php echo $arrviewobj->id; ?> " name="single_checkbox" class="custom-control-input checkItemdelete"> <span class="custom-control-indicator"></span> </label>
                                    </div> 
                                    </th>-->
                                <?php
                                $varFromurl=($arrDataobj->from_type=="chef")?base_url('admin/chef-detail').'/'.$arrDataobj->user_id_from:base_url('admin/user-detail').'/'.$arrDataobj->user_id_from;
                                 $varTourl=($arrDataobj->to_type=="chef")?base_url('admin/chef-detail').'/'.$arrDataobj->user_id:base_url('admin/user-detail').'/'.$arrDataobj->user_id;
                                ?>
                                    <td><a href="<?php echo $varFromurl;?> "><?php echo $arrDataobj->from_fname . " " . $arrDataobj->from_lname; ?></a></td>
                                     <td><a href="<?php echo $varTourl;?> "><?php echo $arrDataobj->to_fname . " " . $arrDataobj->to_lname; ?></a></td>
                                  <td><?php echo $arrDataobj->ammount; ?></td>
                                    <td><?php echo date('d M Y',strtotime($arrDataobj->created_date));?></td>
                                    </tr>
                                <?php
                                }
                            } else {
                                ?>
                                <tr>
                                    <td colspan="9"><h4 style="text-align: center;color: red;">No Records Found</h4></td>
                                </tr><?php } ?>

                        </table>
                        <div class="clearfix mrgB"></div>
                        <div class="text-right">
<?php echo $page_links; ?>  
                        </div> 
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
        </div>

    </section>

    <!-- /.content -->
</div>

<!-- /.content-wrapper -->


