function getAllData(){
    return JSON.parse(sessionStorage.getItem("allData"));

}
function setAllData(arr){
    sessionStorage.setItem("allData", JSON.stringify(arr));
    setCurrentUser();
    setAllUsers();
    setAllEvents();
}

function getData() {
    return $.ajax({
        url: "allTestData.json",
        type: 'GET'
    });
}
function handleData(data /* , textStatus, jqXHR */ ) {
    console.log(data);
    setAllData(data);


}
function getCurrentUser(){
    return JSON.parse(sessionStorage.getItem("currentUser"));
}
function setCurrentUser(){
    sessionStorage.setItem('currentUser',JSON.stringify(getAllData().allData.currentUser))
}
function getAllEvents(){
    return JSON.parse(sessionStorage.getItem("allEvents"));
}
function setAllEvents(){
    sessionStorage.setItem('allEvents',JSON.stringify(getAllData().allData.events))
}
function getAllUsers(){

    return JSON.parse(sessionStorage.getItem("allUsers"));
}
function setAllUsers(){
    sessionStorage.setItem('allUsers',JSON.stringify(getAllData().allData.allUsers))
}