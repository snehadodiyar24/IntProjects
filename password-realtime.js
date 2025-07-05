document.getElementById("password").addEventListener("input", function () {
  var pass = this.value;
  var length = pass.length;

  // Strength check
  if (length === 0) {
    document.getElementById("length").textContent = "Strength: ";
    return;
  }

  if (length < 8) {
    document.getElementById("length").textContent = "Strength: Weak";
  } else if (length >= 8 && length < 12) {
    document.getElementById("length").textContent = "Strength: Medium";
  } else {
    document.getElementById("length").textContent = "Strength: Strong";
  }

  // Pattern checks
  var upper = /[A-Z]/;
  var lower = /[a-z]/;
  var number = /[0-9]/;
  var special = /[!@#$%^&*(),.?":{}|<>]/;

  document.getElementById("capital").style.color = upper.test(pass) ? "blue" : "red";
  document.getElementById("small").style.color = lower.test(pass) ? "blue" : "red";
  document.getElementById("number").style.color = number.test(pass) ? "blue" : "red";
  document.getElementById("spchar").style.color = special.test(pass) ? "blue" : "red";
});
