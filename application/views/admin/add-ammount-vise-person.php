<!-- Content Wrapper. Contains page content -->

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h4>
         ADD Amount 
        </h4>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i> Home</a></li>
             <li class="breadcrumb-item"><a href="<?php echo base_url('admin/view-users'); ?>">Add Amount</a></li>
            <!--<li class="breadcrumb-item"><a href="<?php echo base_url('admin/yoga-instructors-view'); ?>">Instructors</a></li>-->
            <li class="breadcrumb-item active">Add</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">
<?php   $flashdata=$this->session->flashdata('success1');
if(!empty($flashdata))
{ ?>
                            <div class="alert alert-success alert-dismissible flash-messages">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
<!--                            <h4><i class="icon fa fa-check"></i> Alert!</h4>-->
                            <?php echo $flashdata; ?>
                          </div>
                            <?php } ?>
        <!-- Validation Forms -->
        <div class="box box-default padding-0">
            <div class="box-header with-border">
<!--                <h3 class="card-title"> <?php echo!empty($updatedata->id) ? "Update Yoga Instructors" : "Add New Yoga Instructors"; ?> </h3>-->
                <h3 class="card-title mt-10">Add Amount</h3>
                <!--<h6 class="card-subtitle">Bootstrap Form Validation check the <a href="http://reactiveraven.github.io/jqBootstrapValidation/">official website </a></h6>-->

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>-->
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div class="row">
                    <div class="col">
                        <form novalidate action="<?php echo base_url('admin/add-ammount'); ?>" method="post" enctype="multipart/form-data">
                          
<?php
$personcount=range(1,15);
foreach($personcount as $key=>$value)
{
?>
                           
                            <div class="row">
<div class="col-sm-4">
                                    <h5>For Person <?php echo $value;?>  <span class="text-danger"></span></h5>
</div>    <div class="col-sm-4">
                                    <h5> Amount   <span class="text-danger"></span></h5>
                                    <div class="form-group">
                                        <input type="text" name="per_person_ammount[]" class="form-control" required data-validation-required-message="This field is required" value="<?php echo !empty($getPerammount[$key]->per_person_ammount)?$getPerammount[$key]->per_person_ammount:'0';?>"> <div class="help-block"></div></div>
                                <!--<div class="form-control-feedback"><small>Add <code>required</code> attribute to field for required validation.</small></div>-->
                                </div>
                                <div class="col-sm-4">
                                    <h5> Amount Show To Chef  <span class="text-danger"></span></h5>
                                    <div class="form-group">
                                        <input type="text" name="per_person_ammount_chef[]" class="form-control" required data-validation-required-message="This field is required" value="<?php echo !empty($getPerammount[$key]->per_per_show_chef)?$getPerammount[$key]->per_per_show_chef:'0';?>"> <div class="help-block"></div></div>
                                <!--<div class="form-control-feedback"><small>Add <code>required</code> attribute to field for required validation.</small></div>-->
                                </div>
                            </div>
<?php } ?>
<div class="text-xs-right">
               <button type="submit" class="btn btn-info" style="margin-top: 39px;">SUBMIT</button>

                            </div>
                        </form>

                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
<script type="text/javascript">
    $('body').on('click','.ishome',function(){
     var is_home1=$('.ishome').is(":checked")?1:0;
   $("input[name='is_home']").val(is_home1);
    })
    </script>
    <script type="text/javascript">
setTimeout(function() {
    $('.flash-messages').fadeOut('fast');
}, 3000);
</script>


