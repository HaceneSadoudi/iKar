jQuery(document).ready(function ($) {
  "use strict";

  // ### Step By Step (Interactive) Form
  var steps = $("form .step");
  const nextBtn = $("form .next-btn");
  const prevBtn = $("form .prev-btn");
  const submitBtn = $("form input[type=submit]");
  const form = $("form#recherche-voyage__form");

  nextBtn.on("click", (e) => {
    changeStep("next");
  });
  prevBtn.on("click", (e) => {
    changeStep("prev");
  });
  submitBtn.on("click", (e) => {
    changeStep("next");
  });

  function changeStep(str) {
    var active = $("form .step.active");
    var index = steps.index(active);

    steps[index].classList.remove("active");
    console.log(index);
    if (index == steps.length - 1) {
      index = -1;
    }
    if (str == "next") {
      steps[index + 1].classList.add("active");
    } else if (str == "prev") {
      steps[index - 1].classList.add("active");
    }
  }
