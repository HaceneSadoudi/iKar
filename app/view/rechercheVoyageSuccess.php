<div id="bandeau" style="display : none" class="no-padding m-0 alert alert-info alert-dismissible fade show">
    <strong>Recherche Terminée</strong>
</div>
<ul class="search-list">
    <?php $count = 0;
    foreach ($context->voyages as $row) {
        if ($count % 2 == 0) { ?>
            <div class="row">
            <?php } ?>
            <li class="col-5 search-card">
                <div>
                    <p><strong>Heure de départ : </strong></p>
                    <p><strong>Contraintes : </strong></p>
                    <p>Il rest que 5 place(s) </p>
                </div>
                <div>
                    <h2>900 €</h2>
                </div>
            </li>
            <?php if ($count % 2 != 0) { ?>
            </div>
            <?php } $count++; ?>
    <?php } ?>
</ul>