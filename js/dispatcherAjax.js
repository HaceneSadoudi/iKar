$(document).ready(function () {
  
  
  // RECHERCHE VOYAGE
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
        $("#searchResult").html(code_html);
        $("#bandeau .content").text("Recherche Terminé");
        $("#bandeau").show().delay(4000).animate({ opacity: 0 });
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        $("#bandeau .content").text("Désolé, une erreur s'est produite");
        $("#bandeau").show().delay(4000).fadeOut();
      },
    });
  });

  // NAVBAR CONNEXION
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
      },
    });
  });


  // ####################  CONNEXION  #########################
  $("#page_maincontent").on("submit", "#connexionForm", (e) => {
    e.preventDefault();
    
    var identifiant = $("#connexionForm input[name=identifiant]").val().trim();
    var pass = $("#connexionForm input[name=pass]").val().trim();

    $.ajax({
      // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
      url: "dispatcherAjax.php?action=connexion",
      type: "POST",
      data: "identifiant=" + identifiant + "&pass=" + pass,
      dataType: "text",
      success: function (response, statut) {
        if (response == 0) {
          $("#bandeau").removeClass("success").addClass("error");
          $("#bandeau .content").text("L'identifiant ou le mot de passe est invalide");
          $("#bandeau").show().delay(4000).fadeOut();
        } else if(response == 1) {
          $("#bandeau").removeClass("error").addClass("success");
          $("#bandeau .content").text("Vous êtes connecté");
          $("#bandeau").show().delay(4000).fadeOut();
          setTimeout(function() {
            window.location.href = "index.php";
          },2500); 
        }else {
          $("#bandeau").removeClass("success").addClass("error");
          $("#bandeau .content").text("Une erreur s'est produite. Veuillez réessayer plus tard");
          $("#bandeau").show().delay(4000).fadeOut();
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });
  });

  // DECONNEXION
  $(document).on("click", "#deco", (e) => {
    e.preventDefault();

    $.ajax({
      // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
      url: "dispatcherAjax.php?action=deconnexion",
      type: "POST",
      dataType: "text",
      success: function (code_html, statut) {
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });
  });

  
  });
