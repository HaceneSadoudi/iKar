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

$(document).on("click", ".progress-bar__dot", function (e) {
  const targetStepIndex = $(this).index(".progress-bar__dot");
  const targetStep = $("#register-form .step").eq(targetStepIndex);
  const currentStep = $("#register-form .step.active");
  const currentStepIndex = currentStep.index();
  const dots = $(this).parent().find(".progress-bar__dot");
  console.log("[C:" + currentStepIndex + "],[T:" + targetStepIndex+"]");
  // Going backward
  for (let i = currentStepIndex; i >= targetStepIndex; i--) {
    if (i == currentStepIndex && currentStepIndex != targetStepIndex) {
      currentStep.removeClass("active");
      targetStep.addClass("active");
      //currentStep.removeClass("animate__fadeInLeft");
      targetStep.addClass("animate__animated animate__fadeInLeft");
      dots.eq(i).removeClass("current");
    }else if(i == targetStepIndex && currentStepIndex != targetStepIndex) {
      dots.eq(i).removeClass("checked").addClass("current");
    }else {
      dots.eq(i).removeClass("checked");
    }
  }
});
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
