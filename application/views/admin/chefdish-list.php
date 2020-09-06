<!-- Content Wrapper. Contains page content -->
<link rel="stylesheet" href="<?php echo base_url() ?>assets/css/chosen.css"/>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h4>
             Dishes
        </h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/view-chefdish'); ?>">Dishes</a></li>
        </ol>
    </section>
    <div class="clearfix">&nbsp;</div>
    <div class="container-fluid">
             <form action="" method="get">
            <div class="row">
                
                <div class="col-md-6">
                    <select name="chef[]" class="form-control chosen-select" id="status_sel" multiple="multiple">
                        <option value="">Select Chef</option>
                      <?php
                      if(!empty($cheflist))
                      {
                          foreach($cheflist as $cheflistobj)
                          {
                          ?>
                        <option value="<?php echo $cheflistobj->chefid;?>"<?php if(!empty($_GET['chef'])  && in_array($cheflistobj->chefid,$_GET['chef'])){echo "selected";}?>><?php echo $cheflistobj->fname." ".$cheflistobj->lname; ?></option>
                      <?php } }?>
                    </select>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-info" >Search</button>
                </div>
            </div>
            <div class="clearfix">&nbsp;</div>
            
        </form>
   
    </div>
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
                                <h3 class="box-title">All Dishes</h3>
                            </div>

                            <div class="col-sm-3">
                                <form method="get">
                                    <div class="box-tools">
                                        <div class="input-group input-group-sm">
                                            <input type="text" name="table_search" class="form-control" value="<?php echo !empty($_GET['table_search'])?$_GET['table_search']:''?>" placeholder="Search Dishname">

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
                                        <select name="status" class="changeallstatus"  date-url="<?php echo base_url('admin/change_status')."?method="."Chefdish";?>">
                                            <option>Select Option</option>
                                            <option value="1">Active</option>
                                             <option value="0">Deactive</option>
                                        </select>                                     
                                   </form>
                                </div>
                                    <div class="col-sm-6">
                                   <button class="btn btn-social-icon btn-circle checkalldelete" data-toggle="modal" data-target="#modal-primary" value="" date-url="<?php echo base_url('admin/deleteChefDish'); ?>"><i class="glyphicon glyphicon-trash"></i></button>
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
                             <th>Dish Name</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>status</th>
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
                                    <td><?php echo $arrviewobj->name; ?></td>
                                       <td><img src="<?php echo !empty($arrviewobj->image)?base_url().$arrviewobj->image:base_url().Chefdish_DIR."noimage.jpg";?>" height="50" width="50">
                                       </td>
                                       <td><a href="<?php echo base_url('admin/chef-detail').'/'.$arrviewobj->id;?>"><?php echo $arrviewobj->fname." ".$arrviewobj->lname; ?></a></td>
                                    <td><span class="label label-<?php echo $arrviewobj->status==1?'success':'danger';?>"><?php
                                                    if ($arrviewobj->status == 1) {
                                                        echo "Active";
                                                    } else {
                                                        echo "Deactive";
                                                    }
                                                    ?></span></td>

                                    <td>
                                        <?php
                                        $varpage=!empty($_GET['page'])?$_GET['page']:'';
                                        ?>
                                        <button class="btn btn-social-icon btn-circle deleteUser" data-toggle="modal" data-target="#modal-primary" value="<?= $arrviewobj->id; ?>" data-url="<?php echo base_url('admin/deleteChefDish') . '?deleteid='. $arrviewobj->id.'&page='.$varpage; ?>"><i class="glyphicon glyphicon-trash"></i></button>

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

<script type="text/javascript">
    $(function (){
        $(".chosen-select").chosen({default_multiple_text:"Tesjkahfkjasg"});
    });
</script>
<script type="text/javascript" src="<?php echo base_url() ?>assets/js/chosen.jquery.js"></script>



