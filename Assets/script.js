function getLocalStorage(key) {
let value = localStorage.getItem(key);
if (value){
    $("#text${key}").text(value);
  } 
}

$(document).ready(function() {
 $("#currentDay").text(moment().format("dddd, MMMM Do"));
 for (let i=9; i<18; i++) {
