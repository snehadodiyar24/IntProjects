
    function checkFirstName() {
      var fname = document.getElementById("FirstName").value.trim();
      var length = fname.length;
      var nameMsg = document.getElementById("fnameLength");

      if (length === 0) {
        nameMsg.textContent = "";
      } else if (length < 4) {
        nameMsg.textContent = "Too short (min 4 characters)";
        nameMsg.style.color = "red";
      } else {
        nameMsg.textContent = "";
      }
    }

    function validateContactNumber() {
      var contactNumber = document.getElementById("Number").value.trim();
      var contactLength = contactNumber.length;
      var messageElement = document.getElementById("noLength");

      if (contactLength === 0) {
        messageElement.textContent = "";
      } else if (contactLength !== 10) {
        messageElement.textContent = "Contact number must be exactly 10 digits.";
        messageElement.style.color = "red";
      } else if (!/^\d{10}$/.test(contactNumber)) {
        messageElement.textContent = "Contact number must contain only digits.";
        messageElement.style.color = "red";
      } else {
        messageElement.textContent = "Good";
      }
    }
    function validateEmail() {
  var email = document.getElementById("email").value.trim();
  var emailError = document.getElementById("emailError");

  if (email.length === 0) {
    emailError.textContent = "";
    return;
  }
  var hasAt = email.includes("@");
  var hasDot = email.includes(".");
  var hasCom = email.includes(".com");

  if (!hasAt) {
    emailError.textContent = "Email must contain '@'.";
    emailError.style.color = "red";
  } else if (!hasDot) {
    emailError.textContent = "Email must contain '.'.";
    emailError.style.color = "red";
  } else if (!hasCom) {
    emailError.textContent = "Email must contain '.com'.";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "Good";
    emailError.style.color="green";
  }
}
function validatePassword() {
  var pwd = document.getElementById("password").value;
  var pwdError = document.getElementById("passwordError");

  var minLength = 8;
  var uppercase = /[A-Z]/;
  var lowercase = /[a-z]/;
  var number = /[0-9]/;
  var specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  let errors = [];

  if (pwd.length < minLength) {
    errors.push("At least 8 characters");
  }
  if (!uppercase.test(pwd)) {
    errors.push("At least 1 uppercase letter");
  }
  if (!lowercase.test(pwd)) {
    errors.push("At least 1 lowercase letter");
  }
  if (!number.test(pwd)) {
    errors.push("At least 1 number");
  }
  if (!specialChar.test(pwd)) {
    errors.push("At least 1 special character");
  }

  if (errors.length > 0) {
    pwdError.textContent = "Password must have: " + errors.join(", ");
    pwdError.style.color = "red";
  } else {
    pwdError.textContent = "Strong password!";
    pwdError.style.color = "green";
  }
}


  