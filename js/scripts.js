function Pizza(inputtedQuantity, inputtedToppings, inputtedSize) {
  this.quantity = inputtedQuantity;
  this.toppings = inputtedToppings;
  this.size = inputtedSize;
}

Pizza.prototype.cost = function() {
    var cost = 9;
    var toppingsNumber = this.inputtedToppings.length;

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

    var inputtedToppings =[];
    var inputtedSize = $("input[name=Size]").val();
    var inputtedQuantity = parseInt($("textarea#quantity").val());
    var newPizza = new Pizza(inputtedToppings, inputtedSize, inputtedQuantity);

    $.each($("input[name='Toppings']:checked"), function(){
        inputtedToppings.push($(this).val());
    });

    $(".pizza-show").show();

    $(".new-pizza").append("Quantity:  " + inputtedQuantity  + "</br> Toppings: " + "</br>" + inputtedToppings.join(", ") + "</br> Size: " + inputtedSize);
    $(".pizza-cost").text(newPizza.cost());

  });

});
