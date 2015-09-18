describe('Pizza', function(){
  it('creates a new pizza order with the given specifications', function() {
    var testPizza =  new Pizza(3, 4, "Medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppings).to.equal(4);
    expect(testPizza.size).to.equal("Medium");
  });

  // it('it determines the cost of the ticket', function(){
  //   var testTicket =  new Ticket("first-run", "matinee", "child");
  //   expect(testTicket.cost()).to.equal(7);
  // });
});
