$(document).ready(function(){
  var nameInput = "";
    $("#nameForm").submit(function(event){
      var nameInput = $("input#name").val();
      if (!nameInput) {
        $("#nameOutput").show();
      }
      event.preventDefault();
    });
});
