beforeEach(function () {
  jasmine.addMatchers({
    toBeAGoodInvestment: function(util, customEqualityTesters) {
      return {
        compare: function(actual, expected) {
          var passed = actual.isGood() === true;
          return {
            pass: passed,
            message: "Expected good investment to be true; instead got " + actual.isGood()
          }
          return result;
        }
      }
    }
  });
});
