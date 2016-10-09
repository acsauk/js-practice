beforeEach(function () {
  jasmine.addMatchers({
    toBeAGoodInvestment: function(util, customEqualityTesters) {
      return {
        compare: function(actual, expected) {
          return {
            pass: actual.isGood() === true,
            message: "Expected investment to be a good investment"
          }
        },

        negativeCompare: function(actual, expected) {
          return {
            pass: actual.isGood() === false,
            message: "Expected investment to be a bad investment"
          }
        }
      }
    }
  });
});
