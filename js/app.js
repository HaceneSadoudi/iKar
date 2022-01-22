$(document).ready(function () {
  /* ############################################################# */
  /* ################  PASSWORD HIDE/SHOW TOGGLE  ################ */
  /* ############################################################# */
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

  /* ############################################################# */
  /* ####################  LOGIN VALIDATION  ##################### */
  /* ############################################################# */
  loginValidation = function () {
    let loginUsername = $("#connexionForm input[type=text]"),
      loginPassword = $("#connexionForm input[type=password]"),
      valid = true;

    if (loginUsername.val().trim().length == 0) {
      showError(loginUsername, "L'identifiant ne peut pas être vide");
      valid = false;
    } else {
      hideError(loginUsername);
    }

    if (loginPassword.val().trim().length == 0) {
      showError(loginPassword, "Le mot de passe ne peut pas être vide");
      valid = false;
    } else {
      hideError(loginPassword);
    }
    return valid;
  };

  /* ############################################################# */
  /* ###################  SIGN-UP VALIDATION  #################### */
  /* ############################################################# */
  signUpValidation = function () {
    let signupLastname = $("#inscriptionForm input[name=rnom]"),
      signupFirstname = $("#inscriptionForm input[name=rprenom]"),
      signupUsername = $("#inscriptionForm input[name=ridentifiant]"),
      signupPassword = $("#inscriptionForm input[name=rpass]"),
      valid = true;

    if (signupLastname.val().trim().length == 0) {
      showError(signupLastname, "Le nom ne peut pas être vide");
      valid = false;
    } else {
      hideError(signupLastname);
    }

    if (signupFirstname.val().trim().length == 0) {
      showError(signupFirstname, "Le prénom ne peut pas être vide");
      valid = false;
    } else {
      hideError(signupFirstname);
    }
    if (signupUsername.val().trim().length < 4) {
      showError(
        signupUsername,
        "L'identifiant doit comporter au moins 4 caractères"
      );
      valid = false;
    } else {
      hideError(signupUsername);
    }
    if (signupPassword.val().trim().length < 6) {
      showError(
        signupPassword,
        "Le mot de passe doit comporter au moins 6 caractères"
      );
      valid = false;
    } else {
      hideError(signupPassword);
    }
    return valid;
  };

  /* ############################################################# */
  /* ####################  SHOW INPUT ERROR  ##################### */
  /* ############################################################# */
  var showError = function (input, message) {
    const alert_message = input.next();
    alert_message.css("visibility", "visible");
    alert_message.text(message);
  };
  /* ############################################################# */
  /* ####################  HIDE INPUT ERROR  ##################### */
  /* ############################################################# */
  var hideError = function (input) {
    const alert_message = input.next();
    alert_message.css("visibility", "hidden");
  };
});
