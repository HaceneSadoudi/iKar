<div class="container">
    <div class="row ">
        <div class="col-6 offset-3">
            <form action="" method="POST" id="rechercheVoyageForm">
                <input hidden value="rechercheVoyage" name="action">
                <div class="step step-one active">
                    <div class="input-group">
                        <input type="text" class="form-control" name="depart" id="depart" placeholder="Ville de départ">
                    </div>
                    <div class="wrap-btn first">
                        <button type="button" class="next-btn">Suivant</button>
                    </div>
                </div>
                <div class="step step-two">
                    <div class="input-group">
                        <input type="text" class="form-control" name="arrivee" id="arrivee" placeholder="Ville d'arrivée">
                    </div>
                    <div class="wrap-btn">
                        <button type="button" class="prev-btn">Précédent</button>
                        <button type="button" class="next-btn">Suivant</button>
                    </div>
                </div>
                <div class="step step-three">
                    <div class="input-group">
                        <input type="text" class="form-control" name="nbplaces" id="nbplaces" placeholder="Nombre de places">
                    </div>
                    <div class="wrap-btn">
                        <button type="button" class="prev-btn">Précédent</button>
                        <button type="submit" class="next-btn search-btn">Rechercher</button>
                    </div>
                </div>
                <div class="step step-four">
                    <a href="javascrip:void(0)" class="next-btn">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <span class="depart"></span>
                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                        <span class="arrivee"></span>
                    </a>
                </div>
            </form>

        </div>
    </div>
    <div class="row">
        <div class="col-10 offset-1" id="searchResult"></div>
    </div>
</div>