<ul class="search-list">
    <?php $count = 0;
    foreach ($context->voyages as $row) {
        if ($count % 2 == 0) { ?>
            <div class="row justify-content-center">
            <?php } ?>
            <div class="col-12 col-md-10 col-lg-6 col-xl-6  px-xl-3">
                <li class="search-card">
                    <div class="content">
                        <div>
                            <p class="mb-2"><b>Heure de départ : <?php echo $row['heureDepart'], ":00" ?></b></p>
                            <p class="mb-2"><b>Contraintes : <?php echo $row['contraintes'] ?></b></p>
                            <p class="">Il rest que <?php echo $row['nbPlace'] ?> place(s) </p>
                        </div>
                        <div>
                            <h2><?php echo $row['tarif'] ?> €</h2>
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