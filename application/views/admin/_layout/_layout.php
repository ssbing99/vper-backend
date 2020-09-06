<!DOCTYPE html>
<html lang="en">
  <?php $this->load->view('admin/_layout/head');?>
<body class="hold-transition skin-blue layout-top-nav">
<div class="wrapper">
 <?php $this->load->view('admin/_layout/header');?>
 <?php //$this->load->view('admin/_layout/sibebar-menu');?>
 <?php echo $content; ?>
 <?php $this->load->view('admin/_layout/footer');?>
</div>
<!-- ./wrapper -->
</body>
</html>
