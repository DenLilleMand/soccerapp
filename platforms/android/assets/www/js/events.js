/**
 * Created by sjuften on 06-06-15.
 */

function loadEvents(arr){
    parseStringDateAndSort(arr);
    for (var item = 0; item<arr.length;item++) {
        var test = arr[item];
        for (var i = 0; i < test.attendees.length; i++) {
            if (getCurrentUser().id == test.attendees[i].id && test.attendees[i].registered == "true") {
                $('#eventList').append('<li value="' + arr[item].id + '" onclick="getEvent(this.value)" style="height: 70px;" data-corners="false" data-shadow="false" data-wrapperels="div"  data-theme="c" class="ui-btn ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#expandedEvent" style="text-decoration: none"  class="ui-link-inherit"><img height="100%" src="img/download.jpg" class="ui-li-thumb"><h3 class="ui-li-heading">' + arr[item].time + '</h3><p class="ui-li-desc">' + arr[item].date + '</p><p class="ui-li-desc">Tryk for mere information</p></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>')

            }
            if (getCurrentUser().id == test.attendees[i].id && test.attendees[i].registered == "false") {
                $('#invitedEventList').append('<li value="' + arr[item].id + '" onclick="getEvent(this.value)" style="height: 70px;" data-corners="false" data-shadow="false" data-wrapperels="div"  data-theme="c" class="ui-btn ui-li ui-li-has-thumb ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#expandedEvent" style="text-decoration: none"  class="ui-link-inherit"><img height="100%" src="img/download.jpg" class="ui-li-thumb"><h3 class="ui-li-heading">' + arr[item].time + '</h3><p class="ui-li-desc">' + arr[item].date + '</p><p class="ui-li-desc">Tryk for mere information</p></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>')
            }
        }


    }
};

function loadEvent(arr){
    $('#expandedEvent').children().remove();
    $('#expandedEvent').append('<label  id="time" style="color: #000000;display: inline;margin-bottom: 20px;">Tidspunkt: </label><br/>');
    $('#expandedEvent').append(' <label  id="date" style="color: #000000;display: inline;margin-bottom: 20px;">Dato: </label><br/>');
    $('#expandedEvent').append(' <label  id="location" style="color: #000000;display: inline;margin-bottom: 20px;">Lokation: </label><br/>');
    $('#expandedEvent').append(' <label id="maxAtend" style="color: #000000;display: inline;margin-bottom: 20px;">Max Deltagere: </label><br/>');
    $('#expandedEvent').append(' <label id="location" style="color: #000000;display: inline;margin-bottom: 20px;">DeltagerList: </label><br/>');


    $('#expandedEvent').append('<ul data-role="listview" class="ui-listview" id="_eventAttendees"></ul>');

   $('#time').append('<p style="color: #000000;display: inline;">'+arr.time+'</p><br>');
    $('#date').append('<p style="color: #000000;display: inline">'+arr.date+'</p><br>');
    $('#location').append('<p style="color: #000000;display: inline">'+arr.location+'</p><br>');
    $('#maxAtend').append('<p style="color: #000000;display: inline">'+arr.maxAttendees+'</p><br>');
    for(var item = 0; item<arr.attendees.length;item++){
        if(arr.attendees[item].registered=="true"){
            $('#_eventAttendees').append('<li style="background-color: #000000;margin-bottom: 20px;">'+arr.attendees[item].firstname+ " " +arr.attendees[item].lastname+'</li>')

        }
    }

}
function getEvent(id){
    for (var item=0; item<getAllEvents().length;item++){
        if(getAllEvents()[item].id==id){
            loadEvent(getAllEvents()[item]);
        }

    }

}
function parseStringDateAndSort(arr){
    var newDates = [];
    //scans the dates
    //comapre with a split
    for(var item =0; item<arr.length;item++){
        var from = arr[item].date.split("/");
        //Lovely stackoverflow :)
        var dato = new Date(from[2], from[1] - 1, from[0]);
        //adds the new date to the man
        newDates.push(dato);
    }
    setParsedDate(arr,newDates);
    sortByDateThenTime(arr);
    parseDateToString(arr);
}
function setParsedDate(arr, parsedDate){
    for (var item = 0; item<arr.length;item++){
        //Sets the new date for sorting
        arr[item].date = parsedDate[item];
    }
}
function sortByDateThenTime(arr){
    arr.sort(function(a,b){
        if (new Date(a.date) < new Date(b.date))
            return -1;
        if (a.time > b.time)
            return 1;
        return 0;
    });
}


function parseDateToString(arr){
    for (var item = 0; item<arr.length;item++){
        //Sets the new date for sorting
        var getDate = new Date(arr[item].date);
        var parsedDate = (getDate.getDate() + '/' + getDate.getMonth()) + '/' +  getDate.getFullYear();
        arr[item].date = parsedDate;
    }
}

