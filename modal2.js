$(document).ready(function(){
$(".open-modal").click(function(){
    let info=$(this).attr("data-info");
    $("#modalContent").text(info);
    $("#infoModal").modal("show");
});
});