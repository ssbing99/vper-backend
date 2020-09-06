 $(".checkall").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
  $('body').on('change', '.changeallstatus', function (e) {
      var statuschange=$(this).val();
      var checkedVals = $('.checkItemdelete:checked').map(function () {
        return this.value;
    }).get();
    
    if (checkedVals.join(",") == '')
    {
        $('.showtext').html("Please select one of them to change status!");
        $('#deletedata').hide();
           $('#modal-primary').modal();
    }
    else
    {
     $('.showtext').html("Are your sure ! want change this status?");
        var url = $(this).attr('date-url');
        $('#deletedata').hide();
        $('#deletebutton').show();
           $('#modal-primary').modal();
        $('#deletebutton').click(function () {
            $.ajax({
                url: url,
                type: "POST",
                data: {statuschangeid: checkedVals,statuschange:statuschange},
                dataType: 'JSON',
                success: function (res) {
                    location.reload();
                }
            })
        })
    }
})
$('body').on('click', '.checkalldelete', function (e) {
      var checkedVals = $('.checkItemdelete:checked').map(function () {
        return this.value;
    }).get();
    
    if (checkedVals.join(",") == '')
    {
        $('.showtext').html("Please select one of them to delete!");
        $('#deletedata').hide();
           $('#modal-primary').modal();
    }
    else
    {
     $('.showtext').html("Are your sure ! want delete this?");
        var url = $(this).attr('date-url');
        $('#deletedata').hide();
        $('#deletebutton').show();
           $('#modal-primary').modal();
        $('#deletebutton').click(function () {
            $.ajax({
                url: url,
                type: "POST",
                data: {deleteid: checkedVals},
                dataType: 'JSON',
                success: function (res) {
                    location.reload();
                }
            })
        })
    }
})
$('body').on('click','.deleteUser',function(){
    var url=$(this).attr('data-url');
   $('#deletedata').attr('href',url);
})