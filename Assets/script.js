//Variables being called
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var hour = moment().hour();
var textarea = $("#text");


// Function to set planner

function setPlanner() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  $(".time-block").each(function(){
    var id = $(this).attr("id");
  console.log(id)
    var schedule = localStorage.getItem(id);
    console.log(schedule)
    if (schedule !== null) {
       textarea.val(schedule);
    }
  });
}

// Save Button
setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
  var time = $(this).parent().attr("id");
  var schedule = $(this).siblings(".schedule").val();
  localStorage.setItem(time, schedule);
});

//

function pastPresentFuture() {
  $(".time-block").each(function () {
    var thisHour = parseInt($(this).attr("id"));
 
    if (thisHour > hour) {
      $(this).addClass("future");
    } 
    else if (thisHour === hour) {
     $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
}
pastPresentFuture();




