<!-- Content Wrapper. Contains page content -->
<link rel="stylesheet" href="<?php echo base_url() ?>assets/css/chosen.css"/>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h4>
             Reviews
        </h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/view-review'); ?>">Reviews</a></li>
        </ol>
    </section>
    <!--<div class="clearfix">&nbsp;</div>-->
<!--    <div class="container-fluid">
             <form action="" method="get">
            <div class="row">
                
                <div class="col-md-6">
                    <select name="user[]" class="form-control chosen-select" id="status_sel" multiple="multiple">
                        <option value="">Select Chef</option>
                      <?php
                      if(!empty($getAllUserlist))
                      {
                          foreach($getAllUserlist as $getAllUserlistobj)
                          {
                          ?>
                        <option value="<?php echo $getAllUserlistobj->id;?>"<?php if(!empty($_GET['user'])  && in_array($getAllUserlistobj->id,$_GET['user'])){echo "selected";}?>><?php echo $getAllUserlistobj->fname." ".$getAllUserlistobj->lname; ?></option>
                      <?php } }?>
                    </select>
                </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-info" >Search</button>
                </div>
            </div>
            <div class="clearfix">&nbsp;</div>
            
        </form>
   
    </div>-->
    <!-- Main content -->
    <section class="content">

        <?php
        $flashdata = $this->session->flashdata('success');
        if (!empty($flashdata)) {
            ?>
            <div class="alert alert-success alert-dismissible flash-messages">
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
                                <h3 class="box-title">All Reviews</h3>
                            </div>

                            <div class="col-sm-3">
                                <form method="get">
                                    <div class="box-tools">
                                        <div class="input-group input-group-sm">
                                            <input type="text" name="table_search" class="form-control" value="<?php echo !empty($_GET['table_search'])?$_GET['table_search']:''?>" placeholder="Search Name,Text">

                                            <div class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="col-sm-4">
                                <div class="row">
                                    
<!--                                <div class="col-sm-6 text-center">
                                    <form>
                                        <select name="status" class="changeallstatus"  date-url="<?php echo base_url('admin/change_status')."?method="."Chefreview";?>">
                                            <option>Select Option</option>
                                            <option value="1">Active</option>
                                             <option value="0">Deactive</option>
                                        </select>                                     
                                   </form>
                                </div>-->
                                    <div class="col-sm-6">
                                   <button class="btn btn-social-icon btn-circle checkalldelete" data-toggle="modal" data-target="#modal-primary" value="" date-url="<?php echo base_url('admin/deleteChefReview'); ?>"><i class="glyphicon glyphicon-trash"></i></button>
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
                            <th>Image</th>
                            <th>Name</th>
                            <!--<th>Text</th>-->
                            <th>Review By</th>
                            <th>Review To</th>
                            <!--<th>status</th>-->
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
                                       <td><img src="<?php echo !empty($arrviewobj->image)?base_url().$arrviewobj->image:base_url().Chefdish_DIR."noimage.jpg";?>" height="50" width="50">
                                       </td>
                                       
                                       <td><a href="<?php echo base_url('admin/review-detail').'/'.$arrviewobj->id;?>"><?php echo $arrviewobj->name; ?></a></td>
                                    <!--<td><?php echo $arrviewobj->review_text ; ?></td>-->
                                       <?php
                                     $linkurl=($arrviewobj->user_type=="user")?base_url('admin/user-detail')."/".$arrviewobj->user_id:base_url('admin/chef-detail')."/".$arrviewobj->user_id;  
                                     $reviewer_to=$this->yper_model->reviewername($arrviewobj->chef_id);
                                    if(!empty($reviewer_to)) {
                                        $linkurlTo=($reviewer_to->user_type=="chef")?base_url('admin/chef-detail')."/".$reviewer_to->uid:base_url('admin/user-detail')."/".$reviewer_to->uid; 
                                    }
                                     ?>
                                       <td><a href="<?php echo $linkurl;?>"><?php echo $arrviewobj->fname." ".$arrviewobj->lname; ?></a></td>
                                     <td><a href="<?php echo $linkurlTo;?>"><?php echo (!empty($reviewer_to->fname))?$reviewer_to->fname." ".$reviewer_to->lname:''; ?></a></td>
<!--                                   <td><span class="label label-<?php echo $arrviewobj->status==1?'success':'danger';?>"><?php
                                                    if ($arrviewobj->status == 1) {
                                                        echo "Active";
                                                    } else {
                                                        echo "Deactive";
                                                    }
                                                    ?></span></td>-->

                                    <td>
                                        <?php
                                        $varpage=!empty($_GET['page'])?$_GET['page']:'';
                                        ?>
                                        <button class="btn btn-social-icon btn-circle deleteUser" data-toggle="modal" data-target="#modal-primary" value="<?= $arrviewobj->id; ?>" data-url="<?php echo base_url('admin/deleteChefReview') . '?deleteid='. $arrviewobj->id.'&page='.$varpage; ?>"><i class="glyphicon glyphicon-trash"></i></button>

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

 <script type="text/javascript">
setTimeout(function() {
    $('.flash-messages').fadeOut('fast');
}, 3000);
</script>

