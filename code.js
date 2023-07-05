function calculateMonthlyPayment() {
  const loanAmount = document.getElementById("loanAmount").value;
  const interestRate = document.getElementById("interestRate").value;
  const loanTerm = document.getElementById("loanTerm").value;

  const principal = parseFloat(loanAmount);
  const rate = parseFloat(interestRate);
  const term = parseFloat(loanTerm);

  if (isNaN(principal) || isNaN(rate) || isNaN(term)) {
    document.getElementById("error").innerHTML = "Please enter valid values.";
    document.getElementById("result").innerHTML = "";
    return;
  }

  const monthlyInterestRate = rate / 100 / 12;
  const totalPayments = term * 12;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  const monthlyPayment = principal / discountFactor;

  document.getElementById("error").innerHTML = "";
  document.getElementById("result").innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2);
}

// Error handling for AJAX requests
$(document).ajaxError(function(event, xhr, settings, error) {
  document.getElementById("error").innerHTML = "An error occurred during the calculation.";
  document.getElementById("result").innerHTML = "";
});
