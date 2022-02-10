<div id="register-container">
    <div class="row m-0">
        <div class="col-lg-7 register-form__container">
            <div class="register-form__wrapper">
                <ul class="progress-bar">
                    <li class="progress-bar__dot current"><span>1</span><i class="fa fa-check"></i></li>
                    <li class="progress-bar__connector"></li>
                    <li class="progress-bar__dot"><span>2</span><i class="fa fa-check"></i></li>
                    <li class="progress-bar__connector"></li>
                    <li class="progress-bar__dot"><span>3</span><i class="fa fa-check"></i></li>
                </ul>
                <h1 class="title">Création de votre compte</h1>
                <form id="register-form" class="" autocomplete="off">
                    <div class="step active">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="nom" type="text" placeholder="Nom" autofocus />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="prenom" type="text" placeholder="Prénom" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <input class="button next-step-btn" type="button" value="Suivant">
                        </div>
                    </div>
                    <div class="step">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="identifiant" type="text" placeholder="Identifiant" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <input class="button next-step-btn" type="button" value="Suivant">
                        </div>
                    </div>
                    <div class="step">
                        <div class="input-group">
                            <div class="input-group-row">
                                <input name="pass" type="password" placeholder="Mot de passe" />
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </div>
                            <small class="alert-message">Error</small>
                        </div>
                        <div class="input-group">
                            <ul class="password-constraints">
                                <li class="password-constraints__item">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                    <span>Entre 8 et 50 caractères</span>
                                </li>
                                <li class="password-constraints__item">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                    <span>Une minuscule au moins</span>
                                </li>
                                <li class="password-constraints__item">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                    <span>Une majuscule au moins</span>
                                </li>
                                <li class="password-constraints__item">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                    <span>Un chiffre au moins</span>
                                </li>
                                <li class="password-constraints__item">
                                    <i class="fa fa-circle-o" aria-hidden="true"></i>
                                    <span>Un caractère spécial au moins (@&/!*#...)</span>
                                </li>
                            </ul>
                        </div>
                        <div class="input-group mb-3">
                            <input class="button button-lg" id="submit" type="button" value="Créer mon compte">
                        </div>
                    </div>
                    <div class="input-group mt-4">
                        <p>Vous êtes déjà membre, <a href="" class="connexion-btn">S'identifier</a></p>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-5 register-info__container">
            <div class="register-info__wrapper">
            </div>
        </div>
    </div>
</div>