function compute() {

  /*
    defining varialbes based ids of the index.html
  */  
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("yearsValue").value;
  var interest = principal * years * (rate / 100);
  var year = new Date().getFullYear() + parseInt(years);

  /*
    performing validation on the 'Amount' text field
    validation fails if user input either zero or negative values
  */
  if (
    (document.getElementById("principal").value == 0) |
    (document.getElementById("principal").value < 0)
  ) {
    document.getElementById("principal").value = "";
    document.getElementById("result").innerHTML = "";

    window.alert("Enter a positive number");
    document.getElementById("principal").focus();
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
  }
}

/*
    showing dynamic value of the slide-bar
*/
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
