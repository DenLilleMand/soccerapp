$('#_goBack').on('click',function(){
    window.history.back();
});
$('#_showUsers').on('click',function(){
    $('html, body').animate({
        scrollTop: $("#_showUsers").offset().top
    }, 700);
    $('#_allShowedUsers').toggle(700);

});
$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
});
$( document ).on( "pagecontainershow", function() {
    // For example, on first page: <div data-role="page" data-title="Info">
    current = $( ".ui-page-active" ).jqmData( "title" );
    // Change the heading
    $( "[data-role='header'] p" ).text( current );
    $("#_createEventButton").show();
    if(current == "Tilføj Event"){
        $("#_createEventButton").hide();
    }
});

$("#_pickAll").on("click",function(){
    if($(this).is(':checked')){
        $('input[type="checkbox"]').filter('.custom').each(function(){
            var val = $(this).val();
            $('#cb'+val+'').prop('checked', true).checkboxradio('refresh');
            //("input[type='checkbox']").prop("checked",true).checkboxradio("refresh");
        });
    }
    else{
        $('input[type="checkbox"]').filter('.custom').each(function(){
            var val = $(this).val();
            $('#cb'+val+'').prop('checked', false).checkboxradio('refresh');
        });
    }

    //$('input[type="checkbox"]').filter('.userPicked').each(function(){



   // });




});


/**
 * Created by sjuften on 07-06-15.
 */
