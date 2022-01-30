<div id="register-container">
    <div class="row m-0">
        <div class="col-lg-7 register-form-container">
            <div class="register-form-wrapper">
                <ul class="progress-bar">
                    <li class="progress-bar__dot current"><span>1</span><i class="fa fa-check"></i></li>
                    <li class="progress-bar__connector"></li>
                    <li class="progress-bar__dot"><span>2</span><i class="fa fa-check"></i></li>
                    <li class="progress-bar__connector"></li>
                    <li class="progress-bar__dot"><span>3</span><i class="fa fa-check"></i></li>
                </ul>
                <h1 class="title">Création de votre compte</h1>
                <form id="register-form" class="">
                    <div class="step animate__animated active">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="nom" type="text" placeholder="Nom" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="prenom" class="" type="text" placeholder="Prénom" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <button class="button next-step-btn">Suivant</button>
                        </div>
                    </div>
                    <div class="step animate__animated">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="identifiant" type="text" placeholder="Identifiant" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <button class="button next-step-btn">Suivant</button>
                        </div>
                    </div>
                    <div class="step animate__animated">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="pass" type="password" placeholder="Mot de passe" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <button class="button next-step-btn" type="submit">Créer mon compte</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-5 register-info-container">
            <div class="register-info-wrapper">
            </div>
        </div>
    </div>
</div>