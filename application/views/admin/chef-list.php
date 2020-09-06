<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h4>
             Chef
        </h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/view-chef'); ?>">Chef</a></li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <?php
        $flashdata = $this->session->flashdata('success');
        if (!empty($flashdata)) {
            ?>
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
       <?php echo $flashdata; ?>
            </div>
        <?php } ?>
        <!-- /.row -->

        <div class="row">
            <div class="col-12">

                <div class="box padding-0">


                    <div class="box-header">
                        <div class="row">       
                            <div class="col-sm-5">    
                                <h3 class="box-title">All Chef</h3>
                            </div>

                            <div class="col-sm-3">
                                <form method="get">
                                    <div class="box-tools">
                                        <div class="input-group input-group-sm">
                                            <input type="text" name="table_search" class="form-control" value="<?php echo !empty($_GET['table_search'])?$_GET['table_search']:''?>" placeholder="Search by email,phone">

                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="col-sm-4">
                                <div class="row">
                                    
                                <div class="col-sm-6 text-center">
                                    <form>
                                        <select name="status" class="changeallstatus"  date-url="<?php echo base_url('admin/change_status');?>">
                                            <option>Select Option</option>
                                            <option value="1">Active</option>
                                             <option value="0">Deactive</option>
                                        </select>                                     
                                   </form>
                                </div>
                                    <div class="col-sm-6">
                                   <button class="btn btn-social-icon btn-circle checkalldelete" data-toggle="modal" data-target="#modal-primary" value="" date-url="<?php echo base_url('admin/deleteUser').'?method='."view-chef"; ?>"><i class="glyphicon glyphicon-trash"></i></button>
                                  </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>



                    <!-- /.box-header -->
                    <div class="box-body no-padding">
                        <table class="table table-hover table-responsive">
                            <tr> 
                                <th>
                            <div class="controls">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" name="styled_single_checkbox" class="custom-control-input checkall"> 
                                    <span class="custom-control-indicator"></span> 
                                </label>
                            </div> 
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Active Status</th>
                            <th>Members Status</th>
                            <th>Action</th>
                            </tr>
                            <tr>
                                <?php
                                if (!empty($arrview)) {
                                    foreach ($arrview as $arrviewobj) {
                                        ?>
                                        <th>
                                    <div class="controls">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" required value="<?php echo $arrviewobj->id; ?> " name="single_checkbox" class="custom-control-input checkItemdelete"> <span class="custom-control-indicator"></span> </label>
                                    </div> 
                                    </th>
                                    <td><a href="<?php echo base_url('admin/chef-detail').'/'.$arrviewobj->id;?>"><?php echo $arrviewobj->fname . " " . $arrviewobj->lname; ?></a></td>
                                    <td><?php echo $arrviewobj->email; ?></td>
                                    <td><?php echo $arrviewobj->phone; ?></td>
                                    <td><span class="label label-<?php echo $arrviewobj->status==1?'success':'danger';?>"><?php
                                                    if ($arrviewobj->status == 1) {
                                                        echo "Active";
                                                    } else {
                                                        echo "Deactive";
                                                    }
                                                    ?></span></td>
                                    <td><span class="<?php echo ($arrviewobj->member_upgrade =='1') ? 'label label-success' : 'label label-danger'; ?>"><?php echo ($arrviewobj->member_upgrade =='1') ? 'Menber Upgraded' : 'No'; ?></span></td>

                                    <td>
                                        <button class="btn btn-social-icon btn-circle deleteUser" data-toggle="modal" data-target="#modal-primary" value="<?= $arrviewobj->id; ?>" data-url="<?php echo base_url('admin/deleteUser') . '?deleteid='. $arrviewobj->id.'&method='.'admin/view-chef'; ?>"><i class="glyphicon glyphicon-trash"></i></button>

                                    </td>  
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


