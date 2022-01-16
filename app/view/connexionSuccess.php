<div class="sign-container" id="sign-container">
    <div class="form-container sign-up-container">
        <form action="#">
            <h1>Inscription</h1>
            <div class="social-container">
                <div id="g-sign-up" class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
            <span>Ou utilisez votre email pour l'inscription</span>
            <div class="form-row">
                <div class="col">
                    <input type="text" placeholder="Nome" />
                </div>
                <div class="col">
                    <input type="text" placeholder="Prénom" />
                </div>
            </div>
            <input type="text" placeholder="Pseudo" />
            <input type="text" placeholder="Date de naissance" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <button>Inscription</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form action="" id="connexionForm">
            <h1>Connexion</h1>
            <div class="social-container">
                <div id="g-sign-in" class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
            <span>Ou utilisez votre email</span>
            <input type="text" placeholder="Pseudo" name="pseudo" />
            <input type="password" placeholder="Mot de passe" name="pass" />
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