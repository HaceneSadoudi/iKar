<section id="search-section">
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-lg-12 main-form__container">
                <div class="search-form__wrapper">
                    <form id="search-form" class="" autocomplete="off">
                        <div class="search-form__inner-wrapper d-flex align-items-end">
                            <div class="input-group">
                                <small class="">Ville de départ</small>
                                <div class="input-group-row m-0">
                                    <input name="depart" data-suggestion class="input-sm rounded-0" type="text" placeholder="Ex: Paris, Avignon, Lille..." />
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                                <ul class="suggestion-box"></ul>
                            </div>
                            <div class="input-group position-relative">
                                <small class="">Ville d'arrivée</small>
                                <div class="input-group-row m-0">
                                    <input name="arrivee" data-suggestion class="input-sm rounded-0" type="text" placeholder="Ex: Paris, Avignon, Lille..." />
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                                <ul class="suggestion-box"></ul>
                            </div>
                            <div class="input-group">
                                <small class="">Nombre de places</small>
                                <div class="input-group-row m-0">
                                    <input name="nbplaces" class="input-sm rounded-0" type="text" placeholder="Ex: 1, 2, 3" />
                                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="input-group">
                                <input class="button2 w-100 rounded-0" type="submit" value="Rechercher">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="result-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div id="search-result"></div>
            </div>
        </div>
    </div>
</section>