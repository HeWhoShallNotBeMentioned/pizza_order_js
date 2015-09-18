describe('Ticket', function(){
  it('creates a new ticket with the given specifications', function() {
    var testTicket =  new Ticket("First-release", "Matinee", "Adult");
    expect(testTicket.movie).to.equal("First-release");
    expect(testTicket.timeOfDay).to.equal("Matinee");
    expect(testTicket.age).to.equal("Adult");
  });

  it('it determines the cost of the ticket', function(){
    var testTicket =  new Ticket("first-run", "matinee", "child");
    expect(testTicket.cost()).to.equal(7);
  });
});
