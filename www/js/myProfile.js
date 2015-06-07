/**
 * Created by sjuften on 06-06-15.
 */


function loadProfile(arr){
    $('#myProfile').children().remove();
    $('#myProfile').append('<label  id="firstname" style="color: #000000;display: inline;margin-bottom: 20px;">Fornavn: </label>');
    $('#myProfile').append(' <label  id="lastname" style="color: #000000;display: inline;margin-bottom: 20px;">Efternavn: </label>');
    $('#myProfile').append(' <label  id="numberOfEvents" style="color: #000000;display: inline;margin-bottom: 20px;">Deltagelser: </label>');
    $('#myProfile').append(' <label id="active" style="color: #000000;display: inline;margin-bottom: 20px;">Aktiveret: </label>');

    $('#firstname').append('<p style="color: #000000;display: inline;margin: 20px;">'+arr.firstname+'</p><br>');
    $('#lastname').append('<p style="color: #000000;display: inline">'+arr.lastname+'</p><br>');
    $('#numberOfEvents').append('<p style="color: #000000;display: inline">'+arr.NumberOfEvents+'</p><br>');
    $('#active').append('<p style="color: #000000;display: inline">'+arr.Active+'</p><br>');

}