<div class="propose-container" id="propose-container">
    <div class="form-container sign-up-container">
        <form action="#" id="proposeForm">
            <h1>Propser Un Voyage</h1>
            <div class="input-group">
                <input name="depart" type="text" placeholder="Depart" value="Paris" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="arrivee" type="text" placeholder="Arrivée" value="Nice" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="heureDepart" type="number" placeholder="Heure De Départ" value="16" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="prix" type="number" placeholder="Prix" value="30" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <input name="nbPlace" type="number" placeholder="Nombre De Places" value="3" />
                <span class="alert-message">Error</span>
            </div>
            <div class="input-group">
                <div class="checkbox">
                    <label>
                        <input name="contraintes" type="checkbox" value="PHP">
                        Animaux non acceptés
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input name="contraintes" type="checkbox" value="Java">
                        Boissons non acceptées
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input name="contraintes" type="checkbox" value="Java">
                        Non Fumeur
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input name="contraintes" checked type="hidden" value="Aucune contraites">
                    </label>
                </div>
            </div>
            <button type="submit" class="mt-2">Valider</button>
        </form>
    </div>
</div>