$(document).ready(function(){
  var nameInput = "";
  var aCount = 0;
  var bCount = 0;
  var cCount = 0;

  $("#nameForm").show();

  function responseCounter(answer){
    if (answer === "A") {
      aCount++
    } else if (answer === "B") {
      bCount++
    } else {
      cCount++
    }
  }

  $("#nameForm").submit(function(event){
    nameInput = $("input#name").val();
    if (!nameInput) {
      $("#nameOutput").show();
    }
    else {
      $("#nameOutput").hide();
      $("#nameForm").hide();
      $(".echoName").text(nameInput);
      $("#question1").show();
    }
    event.preventDefault();
  })

  $("#question1").submit(function(event){
    var answer1 = $("#answer1").val();
    responseCounter(answer1);
    $("#question1").hide();
    $("#question2").show();
    event.preventDefault();
  })

  $("#question2").submit(function(event){
    var answer2 = $("#answer2").val();
    responseCounter(answer2);
    $("#question2").hide();
    $("#question3").show();
    event.preventDefault();
  })

  $("#question3").submit(function(event){
    var answer3 = $("#answer3").val();
    responseCounter(answer3);
    $("#question3").hide();
    $("#question4").show();
    event.preventDefault();
  })

  $("#question4").submit(function(event){
    var answer4 = $("#answer4").val();
    responseCounter(answer4);
    $("#question4").hide();
    $("#question5").show();
    event.preventDefault();
  })

  $("#question5").submit(function(event){
    var answer5 = $("#answer5").val();
    responseCounter(answer5);
    $("#question5").hide();
    $(".showACount").text(aCount);
    $(".showBCount").text(bCount);
    $(".showCCount").text(cCount);
    $("#suggestedTrack").show();
    event.preventDefault();
  })
});
