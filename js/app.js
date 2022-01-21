$(document).ready(function () {
  // PASSWORD HIDE/SHOW TOGGLE
  $(document).on("click", ".pwdToggle", (e) => {
    var pwdInput = $(e.currentTarget).parent().find("input");
    var icon =
      e.target == e.currentTarget
        ? $(e.target).children().first() // e.target == e.currentTarget == <button>
        : $(e.target); // e.target == <i> AND e.currentTarget == <button>
    if (pwdInput.attr("type") == "password") {
      pwdInput.prop("type", "text");
      icon.addClass("fa-eye-slash");
    } else {
      pwdInput.prop("type", "password");
      icon.removeClass("fa-eye-slash");
    }
  });

  loginValidation = function () {
    let loginUsername = $("#connexionForm input[type=text]"),
      loginPassword = $("#connexionForm input[type=password]"),
      valid = true;

    if (loginUsername.val().trim().length < 4) {
      showError(
        loginUsername,
        "L'identifiant doit comporter au moins 4 caractères"
      );
      valid = false;
    } else {
      showSuccess(loginUsername);
    }

    if (loginPassword.val().trim().length < 6) {
      showError(
        loginPassword,
        "Le mot de passe doit comporter au moins 6 caractères"
      );
      valid = false;
    } else {
      showSuccess(loginPassword);
    }
    return valid;
  };

  var showError = function (input, message) {
    const alert_message = input.next();
    alert_message.css("visibility", "visible");
    alert_message.text(message);
  };
  var showSuccess = function (input) {
    const alert_message = input.next();
    alert_message.css("visibility", "hidden");
  };
});
