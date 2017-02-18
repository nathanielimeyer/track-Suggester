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
      $(".suggestedTrack").show();
      event.preventDefault();
    });

// Put in last question form
//     $(".suggestedTrack").show();


});
