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

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

