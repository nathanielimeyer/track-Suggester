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

  function finalSuggestion(){
    if (aCount > bCount && aCount > cCount) {
      $(".winner").text("PHP or web design");
      $(".winningOption").text("first option");
      $(".winningOptionCount").text(aCount);
      $(".companyType").text("a startup or a mom and pop website company");
      $(".productType").text("depressing little web pages");
      $(".feeling").text("miserable");
      $("#clearWinner").show();
    } else if (bCount > aCount && bCount > cCount) {
      $(".winner").text("Java");
      $(".winningOption").text("second option");
      $(".winningOptionCount").text(bCount);
      $(".companyType").text("a midsize company");
      $(".productType").text("cool mobile or desktop applications");
      $(".feeling").text("awesome");
      $("#clearWinner").show();
    } else if (cCount > bCount && cCount > aCount) {
      $(".winner").text("C# and .NET");
      $(".winningOption").text("third option");
      $(".winningOptionCount").text(bCount);
      $(".companyType").text("an uptight old company with a stifling culture");
      $(".productType").text("boring business applications");
      $(".feeling").text("miserable");
      $("#clearWinner").show();
    } else if (aCount === bCount) {
      $(".winner").text("php or Java");
      $(".winningOption").text("option A and B");
      $("#responsesTied").show();
    }  else if (aCount === cCount) {
      $(".winner").text("php or C#");
      $(".winningOption").text("option A and C");
      $("#responsesTied").show();
    }  else {
      $(".winner").text("Java or C#");
      $(".winningOption").text("option B and C");
      $("#responsesTied").show();
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
    finalSuggestion();
    event.preventDefault();
  })
});
