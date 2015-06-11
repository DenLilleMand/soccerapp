/**
 * Created by sjuften on 06-06-15.
 */



function maxAttendess(){
    $('#_maxAtendees').append('<option>Vælg antal deltagere</option>');

    for (var item =1; item<=15;item++){
        $('#_maxAtendees').append('<option value="'+item+'">'+item+'</option>');
    }
};
function pickTime(){
    $('#_newTimeEvent').append('<option id="EmptyFun" value="0">Vælg tidspunkt</option>');
    var min = 0;
    for (var item = 10 ;item<=23; item++){
        for(var i=0; i<3;i++){
            if(min==0){
                $('#_newTimeEvent').append('<option value="'+item +":"+ min+'">'+item + ":"+'00</option>');
            }
            min = min+15;
            $('#_newTimeEvent').append('<option value="'+item +":"+ min+'">'+item +":"+ min+'</option>');
        }
        min = 0;

    }
    $('#_newTimeEvent').append('<option value="24">24:00</option>');
}
function getAllUsersForEvent(arr){
    if(isEmpty(arr)){
        arr.sort(sortLastName);
        for (var item = 0; item<arr.length;item++){
            $('#_allShowedUsers').append(' <div class="ui-checkbox"><input value="'+arr[item].id+'" type="checkbox" name="cb'+arr[item].id+'" id="cb'+arr[item].id+'" class="custom"><label for="cb'+arr[item].id+'" data-theme="c" class="ui-btn ui-btn-icon-left ui-corner-top ui-btn-up-c"><span class="ui-btn-inner ui-corner-top"><span class="ui-btn-text">'+arr[item].firstname+'</span><span class="ui-icon ui-icon-ui-icon-checkbox-off ui-icon-checkbox-off"></span></span></label></div>');
        }
    }


}

function creatEvent(){
    var userId = [];
    var name = $('#_newNameEvent').val();
    var lokation = $('#_newLokationEvent').val();
    var time =  $('#_newTimeEvent').val();
    var atendees =  $('#_maxAtendees').val();
    var date =  $('#_newDateEvent').val();
    var description =  $('#_newDescriptionEvent').val();
    $('input[type="checkbox"]').filter('.custom').each(function(){
        if($(this).is(':checked')){
            var val   = $(this).val();
            if(val!=0){
                userId.push(val);
            }
        }
    });
    if(name==""){
        alert("Du skal vælge en lokation")
    }
    if(lokation==""){
        alert("Du skal vælge en lokation")
    }
    if(time==0){
      alert("Du skal vælge et tidspunkt")
    }
    if(atendees==0){
        alert("Du skal vælge deltagere")
    }
    if(date=="Vælg dato"){
        alert("Du skal vælge en dato");
    }
    if(userId.length<=0){
        alert("Du skal vælge deltagere");
    }
    else{
            var createEvent = {name:name,location:lokation,date:date, time:time,maxAttendees:atendees,attendees:userId,description:description};
        //send this object to the controller
        var event = {event: createEvent};
            console.log(event);
    }




}
