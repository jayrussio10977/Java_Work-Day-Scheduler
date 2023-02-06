


$(function () {
  var currentTime = dayjs().hour();
  var textData = localStorage.getItem("slots");


  function name(params) {
    console.log(params);
  }

  $(".time-block").each(function (index, element) {


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

  function handleSave() {
    console.log($(this).siblings(".description").val())

    var userInput = $(this).siblings(".description").val()
    var time = $(this).siblings(".hour").attr("id")

    localStorage.setItem(time, userInput)

  }

  $(".saveBtn").click(handleSave)














});
