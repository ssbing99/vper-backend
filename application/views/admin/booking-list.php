<style>
  .vertical-alignment-helper {
    display: table;
    height: 100%;
    width: 100%;
  }

  .vertical-align-center {
    /* To center vertically */
    display: table-cell;
    vertical-align: middle;
  }

  .modal-content {
    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */
    width: inherit;
    height: inherit;
    /* To center horizontally */
    margin: 0 auto;
  }
</style>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h4>
      Booking
    </h4>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="<?php echo base_url('admin/dashboard'); ?>"><i class="fa fa-dashboard"></i>
          Home</a></li>
      <li class="breadcrumb-item"><a href="<?php echo base_url('admin/booking'); ?>">Booking</a></li>
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
                <h3 class="box-title">All Booking</h3>
              </div>

              <div class="col-sm-3">
                <form method="get">
                  <div class="box-tools">
                    <div class="input-group input-group-sm">
                      <input type="text" name="table_search" class="form-control"
                             value="<?php echo !empty($_GET['table_search']) ? $_GET['table_search'] : '' ?>"
                             placeholder="Search By Order No">

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
                                        <select name="status" class="changeallstatus"  date-url="<?php echo base_url('admin/change_status'); ?>">
                                            <option>Select Option</option>
                                            <option value="1">Active</option>
                                             <option value="0">Deactive</option>
                                        </select>
                                   </form>
                                </div>-->
                  <!--  <div class="col-sm-6">-->
                  <!-- <button class="btn btn-social-icon btn-circle checkalldelete" data-toggle="modal" data-target="#modal-primary" value="" date-url="<?php echo base_url('admin/deleteUser') . '?method=' . "view-chef"; ?>"><i class="glyphicon glyphicon-trash"></i></button>-->
                  <!--</div>-->

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
                <th>Oerder Number</th>
                <th>ChefName</th>
                <th>UserName</th>
                <th>Book Date</th>
                <th>Price</th>
                <th>Total Days</th>
                <th>Total Person</th>
                <th>Payment Status</th>

              </tr>
              <tr>
                  <?php
                  if (!empty($allbookinglist)) {
                  foreach ($allbookinglist

                  as $allbookinglistobj) {
                  ?>
                <!--                                        <th>
                                    <div class="controls">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" required value="<?php echo $allbookinglistobj->id; ?> " name="single_checkbox" class="custom-control-input checkItemdelete"> <span class="custom-control-indicator"></span> </label>
                                    </div>
                                    </th>-->
                <td><a
                    href="<?php echo base_url('admin/order-detail') . '/' . $allbookinglistobj->id; ?>"><?php echo $allbookinglistobj->order_number; ?></a>
                </td>
                <td><a
                    href="<?php echo base_url('admin/chef-detail') . '/' . $allbookinglistobj->chef_id; ?>"><?php echo $allbookinglistobj->cfname . " " . $allbookinglistobj->clname; ?></a>
                </td>
                <td><a
                    href="<?php echo base_url('admin/user-detail') . '/' . $allbookinglistobj->user_id; ?>"><?php echo $allbookinglistobj->ufname . " " . $allbookinglistobj->ulname; ?></a>
                </td>
                <td><?php echo $allbookinglistobj->book_date; ?></td>
                <td><?php if ($allbookinglistobj->discount_ammount > 0) echo $allbookinglistobj->discount_ammount . " NOK"; else echo $allbookinglistobj->total_price . " NOK"; ?></td>

                <td><?php echo $allbookinglistobj->total_days; ?></td>
                <td>
                  <button type="button" class="personDay btn btn-info" data-toggle="modal"
                          data-book="<?php echo str_replace('"', "'", json_encode(json_decode($allbookinglistobj->booking_details)->total_person)); ?>"
                          data-target="#person">View
                  </button>
                </td>
                <!--                                    <td>-->
                  <?php //echo $allbookinglistobj->total_person; ?><!--</td>-->
                <td><span
                    class="label label-<?php echo $allbookinglistobj->payment_status == 1 ? 'success' : 'danger'; ?>"><?php
                        if ($allbookinglistobj->payment_status == 1) {
                            echo "Complete";
                        } else {
                            echo "Missing";
                        }
                        ?></span></td>

              </tr>
                <?php
                }
                } else {
                    ?>
                  <tr>
                    <td colspan="9"><h4 style="text-align: center;color: red;">No Records Found</h4></td>
                  </tr><?php } ?>

            </table>
            <div class="modal fade" id="person" role="dialog">
              <div class="vertical-alignment-helper">
                <div class="modal-dialog vertical-align-center">
                  <div class="modal-content w-25">
                    <div class="modal-header">
                      <h5></h5>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                      <div id="day_person"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

<script>
    $(document).on('click', '.personDay', function () {
        var noOfPerson = $(this).data('book');
        var arr = noOfPerson;
        if (!Array.isArray(noOfPerson)) {
            var data = noOfPerson.replace('[', '').replace(']', '');
            arr = data.split(',');
        }

        var html = "";
        var number = "";
        var personText = "";
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                if (arr[i] != 0) {
                    if (arr[i] > 1) {
                        personText = " persons";
                    } else {
                        personText = " person";
                    }
                    html += "<p>Day " + Number(i + 1) + ": " + "<b>" + arr[i] + personText + "</b>" + "</p>";
                }
            } else if (arr[i] != "0") {
                number = arr[i].replace("'", "").replace("'", "");
                if (Number(number) > 1) {
                    personText = " persons";
                } else {
                    personText = " person";
                }
                html += "<p>Day " + Number(i + 1) + ": " + "<b>" + number + personText + "</b>" + "</p>";
            }
        }

        $('#day_person').html(html);
    });

    $(document).on("click", ".vertical-alignment-helper", function(){
        $('#person').modal('toggle');
    });
</script>


