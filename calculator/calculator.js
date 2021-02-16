window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

 function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let inputAmount = document.getElementById("loan-amount").value;
  let inputYears = document.getElementById("loan-years").value;
  let inputYearlyRate = document.getElementById("loan-rate").value;
  var valuesObject = {amount:inputAmount, rate:inputYearlyRate , years:inputYears};
  update();
 
   
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let object = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(object));
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount
  let i = (values.rate/100)/12
  let n = (values.years) *12
  let returnAmount = ((p*i)/(1 - (1+i)**-n)).toFixed(2);
  return returnAmount;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  //calculateMonthlyPayment(getCurrentUIValues());
  let monthlyAmount = document.getElementById("monthly-payment");
  monthlyAmount.innerHTML = `$ ${monthly}`;
}

