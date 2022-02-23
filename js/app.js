import { validatePassword, validateLength } from "./validation.js";

/* ############################################################# */
/* ################### SIGN-UP STEPS DOTS #################### */
/* ############################################################# */
$(document).on("click", ".progress-bar__dot", function (e) {
  const targetStepIndex = $(this).index(".progress-bar__dot");
  const targetStep = $("#custom-form .step").eq(targetStepIndex);
  const currentStep = $("#custom-form .step.active");
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

$(document).ready(function () {
  /* ############################################################# */
  /* ####################### FIXED NAVBAR ######################## */
  /* ############################################################# */
  $(window).bind("scroll", function () {
    const headerHeight = $("header").height();
    if ($(window).scrollTop() > headerHeight) {
      $("#search-section").addClass("fixed");
    } else {
      $("#search-section").removeClass("fixed");
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
