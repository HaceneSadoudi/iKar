<section class="py-5 my-5" id="profile-section">
    <div class="container">
        <h1 class="mb-5">Paramètres de compte</h1>
        <div class="bg-white shadow rounded-lg d-block d-sm-flex row">
            <div class="profile-tab-nav border-right col-lg-4">
                <div class="img-circle text-center mb-3">
                    <img src="images/person_1.jpg" alt="Image" class="shadow">
                </div>
                <h4 class="text-center">
                    <?php echo $context->getSessionAttribute('identifiant') ?>
                </h4>
            </div>
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
                    <i class="fa fa-home text-center mr-1"></i>
                    Compte
                </a>
                <a class="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
                    <i class="fa fa-key text-center mr-1"></i>
                    Mot de passe
                </a>
                <a class="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
                    <i class="fa fa-user text-center mr-1"></i>
                    Sécurité
                </a>
                <a class="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
                    <i class="fa fa-tv text-center mr-1"></i>
                    Application
                </a>
                <a class="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
                    <i class="fa fa-bell text-center mr-1"></i>
                    Notification
                </a>
            </div>
        </div>
        <div class="tab-content p-4 p-md-5 col-lg-8" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                <h3 class="mb-4">Compte</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Prénom</label>
                            <input type="text" name="prenom" class="form-control" value="<?php echo $context->getSessionAttribute('prenom'); ?>">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Nom</label>
                            <input type="text" name="nom" class="form-control" value="<?php echo $context->getSessionAttribute('nom'); ?>">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Identifiant</label>
                            <input type="text" name="identifiant" class="form-control" value="<?php echo $context->getSessionAttribute('identifiant'); ?>">
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Modifier</button>
                    <button class="btn btn-light">Annuler</button>
                </div>
            </div>
            <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                <h3 class="mb-4">Mot de passe</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Ancien mot de passe</label>
                            <input type="password" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Nouveau mot de passe</label>
                            <input type="password" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Confirmer le nouveau mot de passe</label>
                            <input type="password" class="form-control">
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Modifier</button>
                    <button class="btn btn-light">Annuler</button>
                </div>
            </div>
            <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                <h3 class="mb-4">Securité</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Connexion</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>Two-factor auth</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="recovery">
                                <label class="form-check-label" for="recovery">
                                    Recovery
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Modifier</button>
                    <button class="btn btn-light">Annuler</button>
                </div>
            </div>
            <div class="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
                <h3 class="mb-4">Application Settings</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="app-check">
                                <label class="form-check-label" for="app-check">
                                    App check
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                <label class="form-check-label" for="defaultCheck2">
                                    Lorem ipsum dolor sit.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-light">Cancel</button>
                </div>
            </div>
            <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
                <h3 class="mb-4">Notification Settings</h3>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="notification1">
                        <label class="form-check-label" for="notification1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="notification2">
                        <label class="form-check-label" for="notification2">
                            hic nesciunt repellat perferendis voluptatum totam porro eligendi.
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="notification3">
                        <label class="form-check-label" for="notification3">
                            commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
                        </label>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-light">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>