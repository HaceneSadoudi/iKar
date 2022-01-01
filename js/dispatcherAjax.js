
$(document).ready(function() {
 
    $("#chercherVoyageForm").submit(function(e){ 
    e.preventDefault();

    var formData = $(this).serialize();
    $.ajax({
        // url : 'monApplicationAjax.php?action=testVoyage&depart='+formData['depart']+'&arrivee='+formData['arrivee'],
        url : 'dispatcherAjax.php',
        type : 'POST',
        data : formData,
        dataType : 'text',
        success : function(code_html, statut){ // code_html contient le HTML renvoyé
            $('#searchResult').html(code_html );
            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );alert("Error");
        }
    }); 
   
    
});
});
