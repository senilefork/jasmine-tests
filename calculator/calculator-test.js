
it('should calculate the monthly rate correctly', function () {
  let testValues = {
    amount:1200,
    rate: 25,
    years:2

  };
  expect(calculateMonthlyPayment(testValues)).toEqual('64.05');
});


it("should return a result with 2 decimal places", function() {
  let testValues = {
    amount:50000,
    rate: 10,
    years:2

  };
  expect(calculateMonthlyPayment(testValues)).toEqual('2307.25');
});

/// etc
