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

