function start() {
  document.getElementById("submitBtn").addEventListener("click", function () {
    formula();
  });
}
function formula() {
  var userIn = document.getElementById("numberIn").value;
  var results = document.getElementById("results");
  results.innerHTML = userIn / 3;
  results.style.display = "block";
}
start();