function Pizza(inputtedQuantity, inputtedToppings, inputtedSize) {
  this.quantity = inputtedQuantity;
  this.toppings = inputtedToppings;
  this.size = inputtedSize;
}

Pizza.prototype.cost = function() {
    var cost = 9;
    var toppingArray = this.toppings.split(" ");

    //toppings cost
    if (toppingArray == "") {
      cost = cost
    } else {
      cost = cost + (toppingArray.length * 2);
    }
    
    if (this.size === "small" ) {
      cost = cost;
    } else if (this.size === "medium") {
      cost = cost + 3;
    } else {
      cost = cost + 6;
    }
    cost =  this.quantity * cost;

return cost;
};



$(document).ready(function() {
  $("form#pizza-select").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = $("input#toppings").val();
    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedQuantity = parseInt($("input#quantity").val());
    var newPizza = new Pizza(inputtedQuantity,inputtedToppings, inputtedSize);




    $(".pizza-show").show();

    $(".new-pizza").append("Quantity:  " + inputtedQuantity  + "</br> Toppings: " + "</br>"  + "</br> Size: " + inputtedSize);
    $(".pizza-cost").text(newPizza.cost());

  });

});
