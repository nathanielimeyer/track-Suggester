$(document).ready(function(){
  var nameInput = "";
    $("#nameForm").submit(function(event){
      nameInput = $("input#name").val();
      if (!nameInput) {
        $("#nameOutput").show();
      }
      else {
        $("#nameOutput").hide();
        $("#nameForm").hide();
        $(".echoName").text(nameInput);
        $(".suggestedTrack").show();
      }
      event.preventDefault();
    });
});
