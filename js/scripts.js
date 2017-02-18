$(document).ready(function(){
  var nameInput = "";
  $("#nameForm").show();

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
    });

    $("#question1").submit(function(event){
      var answer1 = $("#answer1").val();
      $("#question1").hide();
      $("#question2").show();
      $(".companyType").text(answer1);
      event.preventDefault();
    });

    $("#question2").submit(function(event){
      var answer2 = $("#answer2").val();
      $("#question2").hide();
      $("#question3").show();
      $(".productType").text(answer2);
      event.preventDefault();
    });

    $("#question3").submit(function(event){
      var answer3 = $("#answer3").val();
      $("#question3").hide();
      $("#question4").show();
      $(".response3").text(answer3);
      event.preventDefault();
    });

    $("#question4").submit(function(event){
      var answer4 = $("#answer4").val();
      $("#question4").hide();
      $("#question5").show();
      $(".response4").text(answer4);
      event.preventDefault();
    });

    $("#question5").submit(function(event){
      var answer5 = $("#answer5").val();
      $("#question5").hide();
      $(".response5").text(answer5);
      $("#suggestedTrack").show();
      event.preventDefault();
    });
});
