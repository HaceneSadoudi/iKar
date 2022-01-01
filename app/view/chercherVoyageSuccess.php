<div class="container" id="searchResult">
    <div class="row">
        <div class="col-4">
            <div id="chercherVoyage">
                <form id="chercherVoyageForm" action="" method="GET">
                    <input hidden value="chercherVoyage" name="action">
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
        </div>


        <div class="col-4">
            <?php if ($context->voyages != null && $context->params == true) {
                echo
                '<div  id="bandeau" class="col-12 no-padding m-0 alert alert-info alert-dismissible fade show">',
                '<strong>Recherche Terminée</strong>',
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
                '<span aria-hidden="true">&times;</span>',
                '</button>',
                '</div>';
            ?>

                <ul class="search-list">
                    <?php foreach ($context->voyages as $row) { ?>
                        <li class="search-card">
                            <div class="top">
                                <div>
                                    <div class="timeline">

                                        <div class="box">

                                            <div class="container d-flex">
                                                 
                                                <div class="lines">
                                                    <div class="top">
                                                        <span>Depart</span>
                                                        <div class="dot"></div>  
                                                        <span>15:30</span> 
                                                    </div>                                                                        
                                                    <div class="line"></div>
                                                    <div class="bottom">
                                                        <span>Depart</span>
                                                        <div class="dot"></div>  
                                                        <span>11:00</span> 
                                                    </div>
                                                </div>
                                                
                                        



                                            </div>

                                        </div>


                                    </div>
                                    <h3 class="tarif">20$</h3>

                                </div>
                                <div class="bottom">

                                    <div class="thumbnail">
                                        <span class="name">John</span>
                                    </div>
                                    <p class="nbPlace">3 place reste</p>

                                </div>
                        </li>

                    <?php } ?>
                </ul>

            <?php } else if($context->default == true) {
                echo '<div  id="bandeau" class="col-12 m-0 alert alert-info alert-dismissible fade show">
                  <strong></strong> Aucun voyage correspond à votre recherche. 
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                  </button>
              </div>';
            } ?>
        </div>

    </div>
</div>