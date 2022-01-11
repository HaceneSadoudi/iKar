<div class="">
    <div class="container">
        <div class="row justify-content-end">

            <div class="col-4">
                <form action="" method="POST" id="rechercheVoyageForm">
                    <input hidden value="rechercheVoyage" name="action">
                    <div class="step step-one active">
                        <div class="input-group">
                            <input type="text" class="form-control" name="depart" id="depart" placeholder="Ville de départ">
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" name="arrivee" id="arrivee" placeholder="Ville d'arrivée">
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" name="nbplaces" id="nbplaces" placeholder="Nombre de places">
                        </div>
                        <div class="input-group">
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
            <div class="col-8 bg-img"></div>
        </div>
    </div>
</div>
<section class="main-section">
    <div class="container ">
        <div class="row">
            <div class="col-10 offset-1" id="searchResult"></div>
        </div>
    </div>
</section>