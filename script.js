function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("yearsValue").value;
  var interest = principal * years * (rate / 100);
  var year = new Date().getFullYear() + parseInt(years);

  if (
    (document.getElementById("principal").value == 0) |
    (document.getElementById("principal").value < 0)
  ) {
    window.alert("Enter a positive number");
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();

    document.getElementById("principal").value = "";
  } else {
    document.getElementById("result").innerHTML =
      "If you deposit " +
      principal +
      ",<br>at an interest rate of " +
      rate +
      "%<br>You will receive an amount of " +
      interest +
      ",<br>in the year " +
      year +
      "<br>";

      document.getElementById("principal").value = "";
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function validatePrincipal() {
  if (
    (document.getElementById("principal").value == 0) |
    (document.getElementById("principal").value < 0)
  ) {
    window.alert("Enter a positive number");
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
  }
}
