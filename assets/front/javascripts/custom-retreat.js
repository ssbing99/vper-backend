///*
// * Customize ajax request 
// * Authour : Maneesh Tiwari 
// */
////var RetreatType;
//function send_ajax_request(objData, callback) {
//        var returnData = '';
//        $.ajax({
//                url: objData.url,
//                type: objData.type,
//             data: {    
//                 data: JSON.stringify(objData.sendData)
//                },
//                success: function (response) {
//            //alert(response)
//                         //location.reload();
//                         callback(response);
//                },
//                error: function (XMLHttpRequest, textStatus, errorThrown) {
//                            returnData = errorThrown;
//                }
//       });
//       return returnData;
//}
//$(document).ready(function () {
//   getRetreat();
//});
// 
// 
//function getRetreat() {
//    var objData = {};
//    var sendData = {};
//    var type = 'retreat';
//    sendData = {
//        type: type,
//        };
//     objData = {
//              url: BASE_URL + 'getAllRetreate',
//              type: 'post',
//              sendData: sendData
//     };
//    send_ajax_request(objData, function (callback) {
//        //var callback = $.parseJSON(callback);
//       
//         
//     });
//}
