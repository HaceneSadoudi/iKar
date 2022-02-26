<div id="custom-form__section">
    <div class="row m-0">
        <div class="col-lg-7 custom-form__container">
            <div class="custom-form__wrapper">
                <h1 class="title">Proposer un voyage</h1>
                <form id="js-propose-form" class="custom-form" autocomplete="off">
                    <div class="input-group">
                        <div class="input-group-row form-group">
                            <select class="" id="" required>
                                <option value="" hidden>Ville de départ</option>
                                <?php foreach ($context->allCities as $row) { ?>
                                    <option value="<?php echo $row['depart'] ?>"><?php echo $row['depart'] ?></option>
                                <?php } ?>
                            </select>
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <small class="alert-message">Error</small>
                    </div>
                    <div class="input-group">
                        <div class="input-group-row">
                            <select class="input-lg w-100" name="depart" required>
                                <option value="" disabled selected hidden>Ville d'arrivée </option>
                                <?php foreach ($context->allCities as $row) { ?>
                                    <option value="<?php echo $row['depart'] ?>"><?php echo $row['depart'] ?></option>
                                <?php } ?>
                            </select>
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <small class="alert-message">Error</small>
                    </div>
                    <div class="input-group">
                        <div class="input-group-row">
                            <input name="nbplaces" class="input-lg w-100" type="number" max="15" placeholder="Nombre de places" required />
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <small class="alert-message">Error</small>
                    </div>
                    <div class="input-group">
                        <div class="input-group-row">
                            <input name="nbplaces" class="input-lg w-100" type="number" placeholder="Prix par place" required />
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <small class="alert-message">Error</small>
                    </div>
                    <div class="input-group">
                        <div class="input-group-row">
                            <input name="depart" class="input-lg w-100" type="text" placeholder="Contraintes" />
                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <small class="alert-message">Error</small>
                    </div>
                    <div class="input-group mb-3">
                        <input class="button button-lg" id="submit" type="button" value="Valider">
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-5 custom-info__container">
            <div class="custom-info__wrapper">
            </div>
        </div>
    </div>
</div>