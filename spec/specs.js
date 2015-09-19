describe('Pizza', function(){
  it('creates a new pizza order with the given specifications', function() {
    var testPizza =  new Pizza(3, "Onion", "medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppings).to.equal("Onion");
    expect(testPizza.size).to.equal("medium");
  });

  it('it determines the cost of the pizza order', function(){
    var testPizza =  new Pizza(3, "Pepperoni", "medium");
    expect(testPizza.cost()).to.equal(42);
  });

  it('it does not charge for pizzas with no additional toppings', function(){
    var testPizza =  new Pizza(1, "", "large");
    expect(testPizza.cost()).to.equal(15);
  });

});
