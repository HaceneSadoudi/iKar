$(document).ready(function () {
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
        /* $("#searchResult").html(code_html);
        $("#bandeau .content").text("Recherche Terminé");
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
  $(document).on('click', "#rechercher-btn", (e) => {
    e.preventDefault();
    $.ajax({
      url : "dispatcherAjax.php?action=accueil",
      type : "POST",
      success: function(response, status) {
        console.log(response);
        $("#page_maincontent").empty();
        $("#page_maincontent").html(response);
      },
      error : function(jqXhr, textStatus, errorThrown) {
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      }
    })
  });
  /* ############################################################# */
  /* ####################  NAVBAR PROPOSER  #################### */
  /* ############################################################# */
  $(document).on('click', "#proposer-btn", (e) => {
    e.preventDefault();
    $.ajax({
      url : "dispatcherAjax.php?action=proposeVoyage",
      type : "POST",
      success: function(response, status) {
        console.log(response);
        $("#page_maincontent").empty();
        $("#page_maincontent").html(response);
      },
      error : function(jqXhr, textStatus, errorThrown) {
        notif(
          "error",
          "Une erreur s'est produite. Veuillez réessayer plus tard"
        );
      }
    })
  });
  /* ############################################################# */
  /* ####################  NAVBAR CONNEXION  ##################### */
  /* ############################################################# */
  $(document).on("click", "#connexion-btn", () => {
    $.ajax({
      // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
      url: "dispatcherAjax.php?action=connexion",
      type: "POST",
      dataType: "text",
      success: function (code_html, statut) {
        // code_html contient le HTML renvoyé
        $("#page_maincontent").empty();
        $("#page_maincontent").html(code_html);
        gapi.signin2.render("g-sign-in", {
          scope: "profile email openid",
          width: 200,
          height: 40,
          longtitle: true,
          theme: "dark",
          onsuccess: function (googleUser) {
            // Called when the user signs in
          },
          onfailure: function (e) {
            console.warn("Google Sign-In failure: " + e.error);
          },
        });
        gapi.signin2.render("g-sign-up", {
          scope: "profile email openid",
          width: 200,
          height: 40,
          longtitle: true,
          theme: "dark",
          onsuccess: function (googleUser) {
            // Called when the user signs in
          },
          onfailure: function (e) {
            console.warn("Google Sign-In failure: " + e.error);
          },
        });
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
  /* #######################  INSCRIPTION  ####################### */
  /* ############################################################# */
  $("#page_maincontent").on("submit", "#inscriptionForm", (e) => {
    e.preventDefault();
    var fdata = $("#inscriptionForm").serialize();
    if (signUpValidation())
      $.ajax({
        // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
        url: "dispatcherAjax.php?action=inscription",
        type: "POST",
        data: fdata,
        dataType: "text",
        success: function (response, statut) {
          if (response == 0) {
            /* $("#bandeau").removeClass("success").addClass("error");
          $("#bandeau .content").text(
            "L'identifiant de l'utilisateur existe déjà"
          );
          $("#bandeau").show().delay(4000).fadeOut(); */
            notif("error", "L'identifiant de l'utilisateur existe déjà");
          } else if (response == 11 || response == 10) {
            /* $("#bandeau").removeClass("error").addClass("success");
          $("#bandeau .content").text("Votre compte a été créé avec succès");
          $("#bandeau").show().delay(4000).fadeOut(); */
            notif("success", "Votre compte a été créé avec succès");
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
});
