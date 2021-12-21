<!-- Form -->
<div id="rechercheVoyage">
    <form id="rechercheVoyageForm" action="" method="GET" >
        <input hidden value="rechercheVoyage" name="action">
        <div class="input-group input">
            <input list="depart" class="form-control autocomplete" name="depart" type="text">
            <span data-placeholder="Départ"></span>
        </div>
        <div class="input-group input">
            <input list="arrivee" class="form-control autocomplete" name="arrivee" type="text">                           
            <span class="" data-placeholder="Arrivée"></span>
        </div>
        <div class="input-group button">
            <input type="submit" value="Chercher" class="btn">    
        </div>                                                                                                                                                                   
    </form>
</div>
        