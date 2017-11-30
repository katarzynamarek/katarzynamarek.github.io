

$(document).ready(function() {
  $("#text").hide();
  $("#bulb").click(function(event) {
    $("#bulb").css("color","yellow");
    $('h2').fadeOut();
    $('#text').fadeIn();
    $("#text").show();
  });
});
