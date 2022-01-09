<div class="row">
    <div id="bandeau" style="display : none" class="col-6 offset-3 alert alert-info alert-dismissible fade show">
        <strong>Recherche Terminée</strong>
    </div>
</div>
<ul class="search-list">
    <?php $count = 0;
    foreach ($context->voyages as $row) {
        if ($count % 2 == 0) { ?>
            <div class="row justify-content-center">
            <?php } ?>
            <div class="col-6">
                <li class="search-card">
                    <div href="" class="reserve-btn">Resérver</div>
                    <div class="content">
                        <div>
                            <p><b>Heure de départ : <?php echo $row->heureDepart, ":00" ?></b></p>
                            <p><b>Contraintes : <?php echo $row->contraintes ?></b></p>
                            <p>Il rest que <?php echo $row->nbPlace ?> place(s) </p>
                        </div>
                        <div>
                            <h2><?php echo $row->tarif ?> €</h2>
                        </div>
                    </div>
                </li>
            </div>
            <?php if ($count % 2 != 0) { ?>
            </div>
        <?php }
            $count++; ?>
    <?php } ?>
</ul>