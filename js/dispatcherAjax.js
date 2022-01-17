$(document).ready(function () {
  
  
  // RECHERCHE VOYAGE
  $("#page_maincontent").on("submit", "#rechercheVoyageForm", function (e) {
    e.preventDefault(); // Stop from submitting

    var formData = $(this).serialize();
    alert($(this).html());
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
        // code_html contient le HTML renvoyé
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


  });
