"use strict";

describe("Investment", function() {

var stock, investment;

  beforeEach(function() {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100
    });
  });
  // Given an investment, it should be of a stock
  it("should be of a stock", function() {
    // var stock = new Stock();
    // var investment = new Investment({
    //   stock: stock,
    //   shares: 100
    // });
    expect(investment.stock).toBe(stock);
  });

  // Given an investment, it should have the invested shares quantity
  it("should have the invested shares quantity", function() {
    // var stock = new Stock();
    // var investment = new Investment({
    //   stock:  stock,
    //   shares: 100
    // });
    expect(investment.shares).toEqual(100);
  });
});
