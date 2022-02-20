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

  var siteSliderRange = function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  // siteSliderRange();

  var siteCountDown = function () {
    $("#date-countdown").countdown("2020/10/10", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
            '<span class="countdown-block"><span class="label">%d</span> days </span>' +
            '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
            '<span class="countdown-block"><span class="label">%M</span> min </span>' +
            '<span class="countdown-block"><span class="label">%S</span> sec</span>'
        )
      );
    });
  };
  // siteCountDown();

  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

