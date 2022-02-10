import { validatePassword, validateLength } from "./validation.js";

/* ############################################################# */
/* ################### SIGN-UP STEPS DOTS #################### */
/* ############################################################# */
$(document).on("click", ".progress-bar__dot", function (e) {
  const targetStepIndex = $(this).index(".progress-bar__dot");
  const targetStep = $("#register-form .step").eq(targetStepIndex);
  const currentStep = $("#register-form .step.active");
  const currentStepIndex = currentStep.index();
  const dots = $(this).parent().find(".progress-bar__dot");
  console.log("[C:" + currentStepIndex + "],[T:" + targetStepIndex + "]");
  // Going backward
  for (let i = currentStepIndex; i >= targetStepIndex; i--) {
    if (i == currentStepIndex && currentStepIndex != targetStepIndex) {
      currentStep.removeClass("active");
      targetStep.addClass("active");
      targetStep.addClass("animate__animated animate__fadeInLeft");
      dots.eq(i).removeClass("current");
    } else if (i == targetStepIndex && currentStepIndex != targetStepIndex) {
      dots.eq(i).removeClass("checked").addClass("current");
    } else {
      dots.eq(i).removeClass("checked");
    }
  }
});

/* ############################################################# */
/* #################  VALIDATE LOGIN ENTRIES  ################## */
/* ############################################################# */
export function validateLoginEntries() {
  let loginUsername = $("#login-form input[type=text]"),
    loginPassword = $("#login-form input[type=password]");

  return {
    username: loginUsername.trim().substr(0, 20),
    password: loginPassword.trim().substr(0, 20),
  };
}

$(document).ready(function () {
  /* ############################################################# */
  /* ####################### FIXED NAVBAR ######################## */
  /* ############################################################# */
  $(window).bind("scroll", function () {
    const $top_nav = $(".top-nav").outerHeight(true) + 10;
    if ($(this).scrollTop() > $top_nav) {
      $(".main-nav").addClass("fixed");
    } else {
      $(".main-nav").removeClass("fixed");
    }
  });
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
});
