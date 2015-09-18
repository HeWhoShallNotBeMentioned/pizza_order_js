function Ticket(movie, timeOfDay, age) {
  this.movie = movie;
  this.timeOfDay = timeOfDay;
  this.age = age;

}

Ticket.prototype.cost = function() {
    var cost = 9;

    if (this.movie === "first-run") {
      cost += 2;
    }

    if (this.timeOfDay === "matinee") {
      cost -= 2;
      }

    if (this.age === "child"  || this.age === "senior") {
      cost -= 2;
    }
return cost;
};



$(document).ready(function() {



  $("form#ticket-select").submit(function(event) {
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
