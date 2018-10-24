const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var determineOutput = function(number) {
  if(number >= 10) {
    return letters[number-10];
  }
  return number.toString();
}

var bases = function(number, base) {
  var newNumber = "";
  while(number >= base) {
    var remainder = number % base;
    newNumber = determineOutput(remainder) + newNumber;
    number = (number-remainder)/base;
  }
  newNumber = determineOutput(number) + newNumber;
  return newNumber;
}

$(document).ready(function() {
  $("#bases").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number-input").val());
    var base = parseInt($("#base-input").val());
    if((!number && number != 0) || number <= 0 || (!base) || base < 2 || base > 36) {
      $("#not-valid").show();
      $("#results").hide();
      return;
    }
    var newNumber = bases(number, base);
    $("#number").text(number);
    $("#base").text(base);
    $("#output").text(newNumber);
    $("#results").show();
    $("#not-valid").hide();
  });
});
