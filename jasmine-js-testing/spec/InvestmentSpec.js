describe("Investment", function() {
  // Given an investment, it should be of a stock
  it("should be of a stock", function() {
    var investment = new Investment();
    expect(investment.stock).toBe(stock);
  });
});
