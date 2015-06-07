function addUsers (arr){
    arr.sort(sortLastName);
    $( ".sortNumber").each(function() {
        var id = $(this).attr("id");
        for (var item = 0; item<arr.length;item++){
            if(arr[item].firstname.charAt(0).toUpperCase() == id.toUpperCase()){
                $("#"+id+"").after('<p style="width:90%;color:#000000;text-align: left;padding-bottom: 5px;margin:0;margin-left: 10px;margin-top: 5px;border-bottom: 1px solid lightgrey;">'+arr[item].firstname+ " " + arr[item].lastname+'</p>');
            }
        }
    });
};
function sortLastName(a,b) {
    if (a.firstname < b.firstname)
        return -1;
    if (a.lastname > b.lastname)
        return 1;
    return 0;
}




