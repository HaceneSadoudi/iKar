import * as v from "./validation.js";
import { showError, hideError, showSuccess } from "./handle-errors.js";
$(document).ready(function () {
  $("form").attr("autocomplete", "off");
  /* ############################################################# */
  /* #######################  HANDLE NOTIF  ###################### */
  /* ############################################################# */
  var notif = (type, msg, duration = 4000) => {
    var types = ["error", "success", "warning", "info"];
    for (const e of types) {
      $("#bandeau").removeClass(e);
    }
    $("#bandeau").addClass(type);
    $("#bandeau .content").text(msg);
    $("#bandeau").show().delay(duration).fadeOut();
  };

  $("#page_maincontent").on("keyup", "input[data-suggestion]", function (e) {
    const keyword = $(this).val().trim();
    const suggestionBox = $(this).parents(".input-group-row").next();
    if (keyword.length > 0) {
      $.ajax({
        url: "dispatcherAjax.php?action=suggestCities",
        type: "POST",
        data: "keyword=" + keyword,
        dataType: "text",
        success: (response, _status) => {
          if (response) {
            suggestionBox.addClass("show");
            suggestionBox.empty();
            suggestionBox.html(response);
          } else {
            suggestionBox.removeClass("show");
          }
        },
        error: (jqXhr, textStatus, errorThrown) => {},
      });
    } else {
      suggestionBox.removeClass("show");
    }
  });

  $(document).on("click", ".suggestion-item", function (e) {
    e.preventDefault();
    const suggestBox = $(e.target).parents("ul.suggestion-box");
    const input = suggestBox.prev().find("input");
    input.val($(e.target).text());
    suggestBox.removeClass("show");
  });

  function isCityExiste(input) {
    const city = input.val();
    const suggestions = input
      .parents(".input-group-row")
      .next()
      .find(".suggestion-item")
      .map(function () {
        return $(this).text();
      })
      .get();
    return suggestions.includes(city);
  }
  /* ############################################################# */
  /* #######################  SEARCH VOYAGE  ##################### */
  /* ############################################################# */
  $(document).on("submit", "#search-form", function (e) {
    e.preventDefault();
    const departInput = $(this).find("input[name=depart]");
    const arriveeInput = $(this).find("input[name=arrivee]");
    const nbPlacesInput = $(this).find("input[name=nbplaces]");
    // Cleaning inputs
    var depart = $(this).find("input[name=depart]").val().trim();
    var arrivee = $(this).find("input[name=arrivee]").val().trim();
    var nbPlaces = $(this).find("input[name=nbplaces]").val().trim();
    // Validate inputs
    if (
      isCityExiste(departInput) &&
      isCityExiste(arriveeInput) &&
      !isNaN(nbPlaces) &&
      nbPlaces > 0
    ) {
      // Close suggestion box of the form
      $(this).find(".suggestion-box").removeClass("show");
      $.ajax({
        url: "dispatcherAjax.php?action=rechercheVoyageResult",
        type: "POST",
        data: {
          depart: depart,
          arrivee: arrivee,
          nbplaces: nbPlaces,
        },
        dataType: "html",
        success: function (response, status) {
          $("#search-result").empty();
          $("#search-result").html(response);
          $("#search-form input[name=depart]").val(depart);
          $("#search-form  input[name=arrivee]").val(arrivee);
          $("#search-form  input[name=nbplaces]").val(nbPlaces);
          // $("#search-form ").submit();
        },
        error: function (jqXhr, textStatus, errorThrown) {},
      });
    } else {
      $("#search-result").empty();
    }
  });
  /* ############################################################# */
  /* #########  HOME FORM SEARCH + NAV SEARCH BUTTON  ############ */
  /* ############################################################# */
  $(document).on(
    "click",
    "#main-form input[type=submit], #rechercher-btn",
    function (e) {
      e.preventDefault();
      var depart = $(this).parents("form").find("input[name=depart]").val();
      var arrivee = $(this).parents("form").find("input[name=arrivee]").val();
      var nbPlaces = $(this).parents("form").find("input[name=nbplaces]").val();
      if (!$("header .main-nav .main-nav__search").length)
        $.ajax({
          url: "dispatcherAjax.php?action=rechercheVoyage",
          type: "POST",
          dataType: "text",
          success: function (response, status) {
            $("#page_maincontent").empty();
            $("#page_maincontent").html(response);
            // Copy data from main form to search form
            $("#search-form input[name=depart]").val(depart);
            $("#search-form input[name=depart]").keyup();
            $("#search-form input[name=arrivee]").val(arrivee);
            $("#search-form input[name=arrivee]").keyup();
            $("#search-form input[name=nbplaces]").val(nbPlaces);
            setTimeout(() => $("#search-form").submit(), 100);
          },
          error: function (jqXhr, textStatus, errorThrown) {},
        });
    }
  );

  /* ############################################################# */
  /* ####################  NAVBAR PROPOSER  #################### */
  /* ############################################################# */
  $(document).on("click", "#proposer-btn", (e) => {
    e.preventDefault();
    $.ajax({
      url: "dispatcherAjax.php?action=proposeVoyage",
      type: "POST",
      success: function (response, status) {
        console.log(response);
        $("#page_maincontent").empty();
        $("#page_maincontent").html(response);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      },
    });
  });
  /* ############################################################# */
  /* ####################  NAVBAR CONNEXION  ##################### */
  /* ############################################################# */
  $(document).on("click", "#connexion-btn", (e) => {
    $.ajax({
      // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
      url: "dispatcherAjax.php?action=connexion",
      type: "POST",
      dataType: "text",
      success: function (response, statut) {
        $("#page_maincontent").empty();
        $("#page_maincontent").html(response);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      },
    });
  });
  /* ############################################################# */
  /* ####################  NAVBAR INSCRIPTION  ##################### */
  /* ############################################################# */
  $(document).on("click", ".inscription-btn", function (e) {
    e.preventDefault();
    $.ajax({
      url: "dispatcherAjax.php?action=inscription",
      type: "POST",
      dataType: "text",
      success: function (code_html, statut) {
        $("#page_maincontent").empty();
        $("#page_maincontent").html(code_html);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      },
    });
  });

  /* ############################################################# */
  /* #######################  CONNEXION  ######################### */
  /* ############################################################# */
  $("#page_maincontent").on("submit", "#login-form", function (e) {
    e.preventDefault();
    const usernameInput = $(this).find("input[name=identifiant]");
    const passwordInput = $(this).find("input[name=pass]");
    // Sanitizing & Cleaning inputs
    const maxLength = 20;
    const username = usernameInput.val().trim().substr(0, maxLength);
    const password = passwordInput.val().trim().substr(0, maxLength);
    // Validating inputs
    if (!v.validateLength(username, 1)) {
      usernameInput.parent().addClass("animate__animated animate__shakeX");
      showError(usernameInput, "Identifiant incorrect");
    } else hideError(usernameInput);
    if (!v.validateLength(password, 1)) {
      passwordInput.parent().addClass("animate__animated animate__shakeX");
      showError(passwordInput, "Mot de passe incorrect");
    } else hideError(passwordInput);
    if (v.validateLength(username, 1) && v.validateLength(password, 1))
      $.ajax({
        url: "dispatcherAjax.php?action=connexion",
        type: "POST",
        data: "identifiant=" + username + "&pass=" + password,
        dataType: "text",
        success: function (response, _statut) {
          if (response == 0) {
            notif("error", "L'identifiant ou le mot de passe est invalide");
          } else if (response == 1) {
            notif("success", "Vous êtes maintenant connecté");
            setTimeout(function () {
              window.location.href = "index.php";
            }, 2500);
          } else {
            notif(
              "error",
              "Une erreur s'est produite. Veuillez réessayer plus tard"
            );
          }
        },
        error: function (jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
          notif(
            "error",
            "Une erreur s'est produite. Veuillez réessayer plus tard"
          );
        },
      });
  });

  /* ############################################################# */
  /* #######################  DECONNEXION  ####################### */
  /* ############################################################# */
  $(document).on("click", "#disconnect", (e) => {
    notif("success", "Vous êtes maintenant déconnecté");
  });

  /* ############################################################# */
  /* ###############  ENTER EVENT (REGISTER FORM)  ############### */
  /* ############################################################# */
  $(document).on("keyup", "#register-form", function (e) {
    const isLastInputInStep = $(e.target)
      .parents(".input-group")
      .next()
      .find("input[type=button]").length;
    if (e.which == 13)
      $(e.target)
        .parents(".step")
        .find("input[type=button]")
        .trigger("click", [isLastInputInStep]);
  });
  /* ############################################################# */
  /* ############  PREVENT SUBMIT ON ENTER KEY PRESS   ########### */
  /* ############  INSIDE USERNAME INPUT (LOGIN FORM)  ########### */
  /* ############################################################# */
  $(document).on(
    "keypress",
    "#login-form input[name=identifiant]",
    function (e) {
      if (e.which == 13) {
        const usernameInput = $(this);
        const passwordInput = $(this)
          .parents("#login-form")
          .find("input[name=pass]");

        e.preventDefault(); // Prevent submitting when the user clicks Enter key inside username input
        if (!v.validateLength(usernameInput.val().trim(), 1)) {
          usernameInput.parent().addClass("animate__animated animate__shakeX");
          showError(usernameInput, "Identifiant incorrect");
        } else {
          hideError(usernameInput);
          passwordInput.focus();
        }
      }
    }
  );

  /* ############################################################# */
  /* #################  NEXT STEP BUTTON EVENT  ################## */
  /* ############################################################# */
  $(document).on("click", ".next-step-btn", function (e, isLastInputInStep) {
    const nextBtn = $(e.currentTarget);
    const currentStep = nextBtn.parent().parent();
    const currentStepIndex = currentStep.index() + 1;
    const dots = currentStep.parent().parent().find(".progress-bar__dot");

    // First step (lastname + firstname)
    if (currentStepIndex == 1) {
      const firstNameInput = currentStep.find("input[name=prenom]");
      const lastNameInput = currentStep.find("input[name=nom]");
      const firstName = firstNameInput.val().trim();
      const lastName = lastNameInput.val().trim();
      if (v.validateName(firstName) && v.validateName(lastName)) {
        showSuccess(lastNameInput);
        showSuccess(firstNameInput);
        goToNextStep(currentStepIndex, currentStep, dots);
      } else if (!v.validateName(lastName)) {
        lastNameInput.parent().addClass("animate__animated animate__shakeX");
        showError(
          lastNameInput,
          "Le nom doit contenir au minimum 2 caractères alphabétiques"
        );
      } else if (!v.validateName(firstName)) {
        if (isLastInputInStep == 0) {
          // the keyup event was in lastNameInput
          firstNameInput.focus();
          showSuccess(lastNameInput);
        } else {
          // the keyup event was in firstNameInput
          firstNameInput.parent().addClass("animate__animated animate__shakeX");
          showSuccess(lastNameInput);
          showError(
            firstNameInput,
            "Le prénom doit contenir au minimum 2 caractères alphabétiques"
          );
        }
      }
    }

    // Second step (Username)
    if (currentStepIndex == 2) {
      const identifiantInput = currentStep.find("input[name=identifiant]");
      const identifiant = identifiantInput.val().trim();
      if (v.validateUsername(identifiant)) {
        showSuccess(identifiantInput);
        goToNextStep(currentStepIndex, currentStep, dots);
      } else {
        identifiantInput.parent().addClass("animate__animated animate__shakeX");
        showError(
          identifiantInput,
          "l'identifiant doit contenir au minimum 4 caractères alphanumériques et commence par une lettre"
        );
      }
    }
  });
  // FIXME Prevent signup/signin when user is logged
  /* ############################################################# */
  /* ##########  REMOVE ANIMATION CLASSES AFTER FINISH  ########## */
  /* ############################################################# */
  $(document).on("animationend", ".animate__animated", function () {
    // the animation is on the step element
    if ($(this).hasClass("step")) {
      $(this).find("input").eq(0).focus();
    }
    $(this).removeClass(
      "animate__animated animate__shakeX animate__fadeInLeft animate__fadeInRight"
    );
  });

  /* ############################################################# */
  /* #####################  GO TO NEXT STEP  ##################### */
  /* ############################################################# */
  const goToNextStep = function (index, currentStep, dots) {
    dots
      .eq(index - 1)
      .removeClass("current")
      .addClass("checked");
    dots.eq(index).addClass("current");
    currentStep
      .removeClass("active")
      .next()
      .addClass("active animate__animated animate__fadeInRight");
  };

  /* ############################################################# */
  /* ###################  PASSWORD VALIDATION  ################### */
  /* ############################################################# */
  $(document).on("keyup", "#register-form input[name=pass]", function (e) {
    e.preventDefault();
    const password = $(this).val().trim();
    const constraint_item = $(this)
      .parents(".step")
      .find(".password-constraints__item");
    const constraint_item_icon = constraint_item.find(".fa");
    let allChecked = true;
    if (v.validateLength(password, 8, 20)) {
      constraint_item.eq(0).addClass("checked");
      constraint_item_icon
        .eq(0)
        .removeClass("fa-circle-o")
        .addClass("fa-check-circle-o");
    } else {
      constraint_item.eq(0).removeClass("checked");
      constraint_item_icon
        .eq(0)
        .removeClass("fa-check-circle-o")
        .addClass("fa-circle-o");
      allChecked = false;
    }
    if (v.containsLowercase(password)) {
      constraint_item.eq(1).addClass("checked");
      constraint_item_icon
        .eq(1)
        .removeClass("fa-circle-o")
        .addClass("fa-check-circle-o");
    } else {
      constraint_item.eq(1).removeClass("checked");
      constraint_item_icon
        .eq(1)
        .removeClass("fa-check-circle-o")
        .addClass("fa-circle-o");
      allChecked = false;
    }
    if (v.containsUppercase(password)) {
      constraint_item.eq(2).addClass("checked");
      constraint_item_icon
        .eq(2)
        .removeClass("fa-circle-o")
        .addClass("fa-check-circle-o");
    } else {
      constraint_item.eq(2).removeClass("checked");
      constraint_item_icon
        .eq(2)
        .removeClass("fa-check-circle-o")
        .addClass("fa-circle-o");
      allChecked = false;
    }
    if (v.containsDigit(password)) {
      constraint_item.eq(3).addClass("checked");
      constraint_item_icon
        .eq(3)
        .removeClass("fa-circle-o")
        .addClass("fa-check-circle-o");
    } else {
      constraint_item.eq(3).removeClass("checked");
      constraint_item_icon
        .eq(3)
        .removeClass("fa-check-circle-o")
        .addClass("fa-circle-o");
      allChecked = false;
    }
    if (v.containsSymbol(password)) {
      constraint_item.eq(4).addClass("checked");
      constraint_item_icon
        .eq(4)
        .removeClass("fa-circle-o")
        .addClass("fa-check-circle-o");
    } else {
      constraint_item.eq(4).removeClass("checked");
      constraint_item_icon
        .eq(4)
        .removeClass("fa-check-circle-o")
        .addClass("fa-circle-o");
      allChecked = false;
    }
    if (allChecked) {
      showSuccess($(this));
    } else {
      $(this).parents(".input-group").removeClass("success");
    }
  });

  /* ############################################################# */
  /* #######################  INSCRIPTION  ####################### */
  /* ############################################################# */
  $("#page_maincontent").on("click", "#register-form #submit", (e) => {
    const passwordInput = $(e.target).parents(".step").find("input[name=pass]");
    const form = $("#register-form");
    // Clean inputs
    const lastname = form.find("input[name=nom]").val().trim();
    const firstname = form.find("input[name=prenom]").val().trim();
    const username = form.find("input[name=identifiant]").val().trim();
    const password = passwordInput.val().trim();
    if (v.validatePassword(password)) {
      showSuccess(passwordInput);
      $.ajax({
        url: "dispatcherAjax.php?action=inscription",
        type: "POST",
        data: {
          nom: lastname,
          prenom: firstname,
          identifiant: username,
          pass: password,
        },
        dataType: "text",
        success: function (response, status) {
          if (response == 0) {
            notif("error", "L'identifiant de l'utilisateur existe déjà");
          } else if (response == 11 || response == 10) {
            notif("success", "Votre compte a été créé avec succès");
            setTimeout(function () {
              window.location.href = "index.php";
            }, 2500);
          } else if (response == 2) {
            notif("error", "Les données saisies sont invalides!");
          } else {
            notif(
              "error",
              "Une erreur s'est produite. Veuillez réessayer plus tard"
            );
          }
        },
        error: function (jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
          notif(
            "error",
            "Une erreur s'est produite. Veuillez réessayer plus tard"
          );
        },
      });
    } else {
      passwordInput.parent().addClass("animate__animated animate__shakeX");
      showError(passwordInput);
    }
  });

  /* ############################################################# */
  /* #########################  PROPOSER  ######################## */
  /* ############################################################# */
  $(document).on("submit", "#proposeForm", function (e) {
    var formData = $(this).serialize();
    console.log(formData);
    e.preventDefault();
    $.ajax({
      url: "dispatcherAjax.php?action=proposeVoyage",
      type: "POST",
      data: formData,
      success: function (response, status) {
        console.log(response);
        if (response == 0) {
          notif("error", "Ce trajet n'est pas disponible");
        } else if (response == 1) {
          notif("success", "Votre voyage a été publié");
          setTimeout(function () {
            window.location.href = "index.php";
          }, 3500);
        } else {
          notif(
            "error",
            "Une erreur s'est produite. Veuillez réessayer plus tard"
          );
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      },
    });
  });
});
