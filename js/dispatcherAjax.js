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

  /* ############################################################# */
  /* ################  RECHERCHE VOYAGE ACCUEIL  ################# */
  /* ############################################################# */
  $("#page_maincontent").on('submit', '#hero_search_form', function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    var depart = $(this).find('input[name=depart]').val();
    var arrivee = $(this).find('input[name=arrivee]').val();
    var nbPlaces = $(this).find('input[name=nbplaces]').val();
    alert(depart + " " + arrivee +" "+ nbPlaces);
    $.ajax({
      url: "dispatcherAjax.php",
      type: "POST",
      data: formData,
      dataType: "text",
      success: function(response, status) {
        $("#page_maincontent").empty();
        $("#page_maincontent").html(response);
        $("#rechercheVoyageForm input[name=depart]").val(depart);
        $("#rechercheVoyageForm input[name=arrivee]").val(arrivee);
        $("#rechercheVoyageForm input[name=nbplaces]").val(nbPlaces);
        $("#rechercheVoyageForm").submit();
      },
      error : function(jqXhr, textStatus, errorThrown) {
        
      }
    });

  })

  /* ############################################################# */
  /* ####################  RECHERCHE VOYAGE  ##################### */
  /* ############################################################# */
  $("#page_maincontent").on("submit", "#rechercheVoyageForm", function (e) {
    e.preventDefault(); // Stop from submitting

    var formData = $(this).serialize();
    var depart = $("input[name=depart]").val().trim();
    var arrivee = $("input[name=arrivee]").val().trim();
    if (depart == "" || arrivee == "") $(".step.step-four .next-btn").click();
    $("span.depart").text(depart);
    $("span.arrivee").text(arrivee);
    $.ajax({
      // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
      url: "dispatcherAjax.php",
      type: "POST",
      data: formData,
      dataType: "text",
      success: function (code_html, statut) {
        $("#voyage_search_result").html(code_html);
        /*$("#bandeau .content").text("Recherche Terminé");
        $("#bandeau").show().delay(4000).animate({ opacity: 0 }); */
        notif("success", "Recherche Terminé");
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
        /*  $("#bandeau .content").text("Désolé, une erreur s'est produite");
        $("#bandeau").show().delay(4000).fadeOut(); */
      },
    });
  });

  /* ############################################################# */
  /* ####################  NAVBAR RECHERCHER  #################### */
  /* ############################################################# */
  $(document).on("click", "#rechercher-btn", (e) => {
    e.preventDefault();
    $.ajax({
      url: "dispatcherAjax.php?action=accueil",
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
  $(document).on("click", ".connexion-btn", () => {
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
  $("#page_maincontent").on("submit", "#connexionForm", (e) => {
    e.preventDefault();

    var formData = $("#connexionForm").serialize();
    if (loginValidation())
      $.ajax({
        // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
        url: "dispatcherAjax.php?action=connexion",
        type: "POST",
        data: formData,
        dataType: "text",
        success: function (response, statut) {
          if (response == 0) {
            /*  $("#bandeau").removeClass("success").addClass("error");
          $("#bandeau .content").text(
            "L'identifiant ou le mot de passe est invalide"
          );
          $("#bandeau").show().delay(4000).fadeOut(); */
            notif("error", "L'identifiant ou le mot de passe est invalide");
          } else if (response == 1) {
            /* $("#bandeau").removeClass("error").addClass("success");
          $("#bandeau .content").text("Vous êtes connecté");
          $("#bandeau").show().delay(4000).fadeOut(); */
            notif("success", "Vous êtes maintenant connecté");
            setTimeout(function () {
              window.location.href = "index.php";
            }, 2500);
          } else {
            /* $("#bandeau").removeClass("success").addClass("error");
          $("#bandeau .content").text(
            "Une erreur s'est produite. Veuillez réessayer plus tard"
          );
          $("#bandeau").show().delay(4000).fadeOut(); */
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
  $(document).on("click", "#deco", (e) => {
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
      if (
        validation.validateName(firstName) &&
        validation.validateName(lastName)
      ) {
        ShowSuccess(lastNameInput);
        ShowSuccess(firstNameInput);
        goToNextStep(currentStepIndex, currentStep, dots);
      } else if (!validation.validateName(lastName)) {
        lastNameInput.parent().addClass("animate__animated animate__shakeX");
        showError(
          lastNameInput,
          "Le nom doit contenir au minimum 2 caractères alphabétiques"
        );
      } else if (!validation.validateName(firstName)) {
        if (isLastInputInStep == 0) {
          // the keyup event was in lastNameInput
          firstNameInput.focus();
          ShowSuccess(lastNameInput);
        } else {
          // the keyup event was in firstNameInput
          firstNameInput.parent().addClass("animate__animated animate__shakeX");
          ShowSuccess(lastNameInput);
          showError(
            firstNameInput,
            "Le nom doit contenir au minimum 2 caractères alphabétiques"
          );
        }
      }
    }

    // Second step (Username)
    if (currentStepIndex == 2) {
      const identifiantInput = currentStep.find("input[name=identifiant]");
      const identifiant = identifiantInput.val().trim();
      if (validation.validateUsername(identifiant)) {
        ShowSuccess(identifiantInput);
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
    if($(this).hasClass("step")) {
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
    const password = $(this).val();
    const constraint_item = $(this)
      .parents(".step")
      .find(".password-constraints__item");
    const constraint_item_icon = constraint_item.find(".fa");
    let allChecked = true;
    if (validation.validateLength(password, 8, 50)) {
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
    if (validation.containsLowercase(password)) {
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
    if (validation.containsUppercase(password)) {
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
    if (validation.containsDigit(password)) {
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
    if (validation.containsSymbol(password)) {
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
      ShowSuccess($(this));
    } else {
      $(this).parents(".input-group").removeClass("success");
    }
  });
  
  /* ############################################################# */
  /* #######################  INSCRIPTION  ####################### */
  /* ############################################################# */
  $("#page_maincontent").on("click", "#register-form #submit", (e) => {
    const passwordInput = $(e.target).parents(".step").find("input[name=pass]");
    const password = passwordInput.val().trim();
    if (validation.validatePassword(password)) {
      ShowSuccess(passwordInput);
      const formData = $("#register-form").serialize();
      $.ajax({
        url: "dispatcherAjax.php?action=inscription",
        type: "POST",
        data: formData,
        dataType: "text",
        success: function (response, status) {
          if (response == 0) {
            notif("error", "L'identifiant de l'utilisateur existe déjà");
          } else if (response == 11 || response == 10) {
            notif("success", "Votre compte a été créé avec succès");
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
