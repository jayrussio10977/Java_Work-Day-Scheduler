// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var collection = 

$(function () {
  var currentTime = dayjs().hour();
  var textData = localStorage.getItem("slots");
  
  
  function name(params) {
    console.log(params);
  }
  
  $(".time-block").each(collection, function (index, element) {
    console.log(element.children);
    
    var elementHour = $(element).attr("id");
    if (currentTime === parseInt(elementHour)) {
      $(element).removeClass("past");
      $(element).addClass("present");
    }
    
    if (currentTime < parseInt(elementHour)) {
      $(element).removeClass("present");
      $(element).addClass("past");
    }
    
    if (currentTime > parseInt(elementHour)) {
      $(element).addClass("past");
    }
    
    $(".time-block").submit(function (e) {
      e.preventDefault();
      console.log(e.target);
      const { id, value } = e.target;
      
      if (!textData[id]) {
        localStorage.setItem("slots", JSON.stringify({ id: value }));
      }
      
      localStorage.removeItem("slots", JSON.parse({ id }));
      localStorage.setItem("slots", JSON.stringify({ id: value }));
    });
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var button = document.getElementById("save")
  
  button.addEventListener("click", handleSave)
  
  function handleSave(event) {
    console.log("saving...", event.target);
  }


  
  
  
  
  



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.




});
