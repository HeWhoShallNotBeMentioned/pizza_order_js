function Pizza(quantity, toppings, size) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function() {
    var cost = 9;
    var toppingsNumber = this.toppings.length;

    cost = cost + (toppingsNumber * 2);

    if (this.size === "Small" ) {
      cost = cost;
    } else if (this.size === "Medium") {
      cost = cost + 3;
    } else {
      cost = cost + 3;
    }
    cost =  this.quantity * cost;

return cost;
};



$(document).ready(function() {
  $("form#pizza-select").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("input[name=movie]:checked").val();
    var inputtedMovieTitle = $("input[id]:checked").val();
    var inputtedTimeOfDay = $("input[name=time-of-day]:checked").val();
    var inputtedAge = $("input[name=age]:checked").val();

    var newTicket = new Ticket(inputtedMovie, inputtedTimeOfDay, inputtedAge);
    $(".ticket-show").show();

    $(".new-ticket").append("Movie Title: " + inputtedMovieTitle + "</br> Time of Day: " + newTicket.timeOfDay + "</br> Age: " + newTicket.age);
    $(".ticket-cost").text(newTicket.cost());

  });

});
