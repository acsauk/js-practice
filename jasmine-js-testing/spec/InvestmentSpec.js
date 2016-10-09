"use strict";

describe("Investment", function() {

var stock, investment;

  beforeEach(function() {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20
    });
  });
  // Given an investment, it should be of a stock
  it("should be of a stock", function() {
    expect(investment.stock).toBe(stock);
  });

  // Given an investment, it should have the invested shares quantity
  it("should have the invested shares quantity", function() {
    expect(investment.shares).toEqual(100);
  });

  // Given an investment, it should have the share paid price
  it("should have the share price user has paid", function() {
    expect(investment.sharePrice).toEqual(20);
  });

  // Given an investment, it should have a cost
  it("should have the cost of the investment", function() {
    expect(investment.cost).toEqual(2000);
  });

  describe("when it's stock share price increases", function() {
    beforeEach(function() {
      stock.sharePrice = 40;
    });

    it("should have a positive return on investment", function() {
      expect(investment.roi()).toEqual(1);
    });
  });

});
