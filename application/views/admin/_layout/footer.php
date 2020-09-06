<footer class="main-footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
            Copyright &copy; 2018
            </div>
<!--            <div class="col-md-4 text-center">
                Version 1.1.0
            </div>-->
            <div class="col-md-6 text-right">
                Version 1.1.0
            <!--<a href="http://codeyiizen.com/">Developed By Codeyiizen</a>-->
            </div>
        </div>
    </div>
</footer>
<!---    Common Js  ------------------------------->
<!-- popper -->

<script src="<?php echo base_url(); ?>assets/vendor_components/popper/dist/popper.min.js"></script>
<!-- Bootstrap v4.0.0-beta -->
<script src="<?php echo base_url(); ?>assets/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>assets/vendor_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?php echo base_url(); ?>assets/vendor_components/fastclick/lib/fastclick.js"></script>
<!-- mínimo admin App -->
<script src="<?php echo base_url(); ?>assets/js/template.js"></script>
<!-- mínimo admin horizontal-layout -->

<!-- mínimo admin for demo purposes -->
<script src="<?php echo base_url(); ?>assets/js/demo.js"></script>
<script src="<?php echo base_url(); ?>assets/js/custom.js"></script>


<!----------------------------------------------------------------------------------->

<?php
if (!empty($arrJs['js'])) {
    foreach ($arrJs['js'] as $jsPath) {
        ?>
        <script src="<?php echo base_url() . $jsPath; ?>"></script>
    <?php }
} ?>
<script type="text/javascript">
    !function (window, document, $) {
        "use strict";
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    }(window, document, jQuery);
</script>
<!-- steps  -->
<!--<script src="<?php echo base_url(); ?>assets/vendor_components/jquery-steps-master/build/jquery.steps.js"></script>-->

<!-- validate  -->
<!--<script src="<?php echo base_url(); ?>assets/vendor_components/jquery-validation-1.17.0/dist/jquery.validate.min.js"></script>-->

<!-- Sweet-Alert  -->
<!--<script src="<?php echo base_url(); ?>assets/vendor_components/sweetalert/sweetalert.min.js"></script>-->

<!-- wizard  -->
<!--<script src="<?php echo base_url(); ?>assets/js/pages/steps.js"></script>-->

<!---   Multi Upload  --------------------->

<!--<script src="<?php echo base_url(); ?>assets/js/jquery-latest.min.js"></script>
<script src="<?php echo base_url(); ?>assets/js/pages/jquery.fileuploads.init.js"></script> 
<script src="<?php echo base_url(); ?>assets/js/plugins/jquery.filer/js/jquery.filer.min.js"></script>-->

<!-- Bootstrap WYSIHTML5 -->
<!--<script src="<?php echo base_url(); ?>assets/vendor_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js"></script>	
<script src="<?php echo base_url(); ?>assets/js/pages/editor.js"></script>-->
<!-- date-range-picker -->
	<script src="<?php echo base_url(); ?>assets/vendor_components/moment/min/moment.min.js"></script>
	<script src="<?php echo base_url(); ?>assets/vendor_components/bootstrap-daterangepicker/daterangepicker.js"></script>
<!-- bootstrap datepicker -->
<script src="<?php echo base_url(); ?>assets/vendor_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript">
    //$(function(){
        //$('#chkdate').datepicker();
    //})
</script>


<!-- delete model-->
<div class="modal modal-primary fade" id="modal-primary">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Confirmation</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body showtext">
                <p>Are your sure ! want remove this ?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline" data-dismiss="modal">Close</button>
                <a href="" class="btn btn-outline float-right" id="deletedata" value="">Yes ! I AM SURE</a>
                <button type="button" class="btn btn-outline float-right" id="deletebutton"  style="display:none;">Yes ! I AM SURE</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->


