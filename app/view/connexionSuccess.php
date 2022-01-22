<div class="sign-container" id="sign-container">
    <div class="form-container sign-up-container">
        <form action="#" id="inscriptionForm">
            <h1>Inscription</h1>
            <div class="social-container">
                <div id="g-sign-up" class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
            <span>Ou utilisez votre email pour l'inscription</span>
            <div class="input-group">
                <input name="rnom" type="text" placeholder="Nom" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="rprenom" type="text" placeholder="Prénom" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="ridentifiant" type="text" placeholder="Pseudo" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input type="password" name="rpass" class="password" placeholder="Mot de passe" />
                <span class="alert-message">Error</span>
                <button type="button" class="pwdToggle"><i class="fa fa-eye" aria-hidden="true"></i></button>
            </div>

            <button class="mt-2">Inscription</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form action="" id="connexionForm" method="POST">
            <h1>Connexion</h1>
            <div class="social-container">
                <div id="g-sign-in" class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
            <span>Ou utilisez votre email</span>
            <!-- Identifiant -->
            <div class="input-group">
                <input type="text" placeholder="Identifiant" name="lidentifiant" />
                <span class="alert-message">Error</span>
            </div>
            <!-- Password -->
            <div class="input-group">
                <input type="password" class="password" placeholder="Mot de passe" name="lpass" />
                <span class="alert-message">Error</span>
                <button type="button" class="pwdToggle"><i class="fa fa-eye" aria-hidden="true"></i></button>
            </div>
            <a href="#">Mot de pass oublier?</a>
            <button type="submit" id="seConnecter">Se connecter</button>
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>Bienvenu!</h1>
                <p>Pour restez connecter avec nous, connectez-vous avec vous informations personnelles</p>
                <button class="ghost" id="signInButton">Se connecter</button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>Salut!</h1>
                <p>Entrez vous données personnelles et commencez votre voyage avec nous.</p>
                <button class="ghost" id="signUpButton">Inscription</button>
            </div>
        </div>
    </div>
</div>