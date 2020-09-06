<?php
$varmethod=$this->router->fetch_method();
?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
       Review Details
      </h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard');?>"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="<?php echo base_url('admin/view-review');?>">Reviews
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

                    </ul>

                    <div class="tab-content">

                        <div class="active tab-pane" id="timeline">
                              <?php
                                if (!empty($reviewdetail)) {?>
                                
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
<!--                                       <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> User Name :</label> <br>
                                            <p> <?php echo $reviewdetail->fname." ".$reviewdetail->lname;?></p>
                                        </div>-->
                                        <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Name :</label> <br>
                                            <p> <?php echo $reviewdetail->name;?></p>
                                        </div>
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Image :</label><br>
                                       <img src="<?php echo !empty($reviewdetail->image)?base_url().$reviewdetail->image:base_url().UPLOAD_DIR."noimage.jpg";?>" height="50" width="50">
                                        </div>
<div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Created Date :</label><br>
                                            <p><?php echo date('d M Y',strtotime($reviewdetail->created_date));?></p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        
                                           <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Rating :</label><br> 
                                          <div class="rating">
                                              <?php
                                              for($x=1;$x<=$reviewdetail->ratings;$x++) {?>
                                            <?php echo   "<i class='glyphicon glyphicon-star'></i>";  }?>
                                              <?php
if (strpos($reviewdetail->ratings,'.')) {
        echo '<i class="glyphicon glyphicon-star half"></i>';
        $x++;
    }
     while ($x<=5) {
        echo "<i class='glyphicon glyphicon-star' style='color:gray;'></i>";
        $x++;
    }
    ?>
  
  
  
</div>
                                 <!--<p><?php echo ($reviewdetail->status==1)?"Active":"Deactive";?></p>-->
                                        </div>


                                      
                                         <div class="col-md-4">
                                            <label class="label-control" style="font-weight:bold;"> Text :</label><br> 
                                            <p><?php echo $reviewdetail->review_text;?></p>
                                        </div>
                                    </div>
                                   
                                    <div class="row">
                                         
                                        
                                    </div>
                                   
                                    
                     
                                    </div>
                                


                                <?php }else{?>
         <h4 style="text-align: center;color: red;">No Records Found</h4>
        
     <?php }?>
                                


                            </div>
                               
                        </div>
                      

                        </div>
                        <!-- /.tab-pane -->
                        </div>
                    
</div>
    </section>
    </div>
    <style type="text/css">
 .glyphicon-star {
  font-size: 20px;
  color: #e67e22;
 }
 
 .glyphicon-star.half{
     position: relative;
 }
 .glyphicon-star.half:before{
position: relative;
z-index: 9;
width: 47%;
display: block;
overflow: hidden;
       content: '\e006';
 }
 .glyphicon-star.half:after{
content: '\e006';
position: absolute;
z-index: 8;
color: #bdc3c7;
top: 0;
left: 0;
 }
   

    </style>
