<?php

class mainController {

	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->reservations = reservationTable::getReservationByVoyage($request['voyage']);
		return context::SUCCESS;
	}

	public static function rechercheVoyage($request, $context) {
		$trajet = trajetTable::getTrajet($request['depart'], $request['arrivee']);
		if ($trajet == NULL) return context::ERROR;
		$context->voyages = voyageTable::getVoyagesByTrajet($trajet);
		if ($context->voyages == false) {
			return context::ERROR;
		}
		return context::SUCCESS;
	}

	public static function searchVoyage($request, $context) {
		return context::SUCCESS;
	}

	public static function proposeVoyage($request, $context) {
		if (
			isset($request['depart'])
			&& isset($request['arrivee'])
			&& isset($request['heureDepart'])
			&& isset($request['prix'])
			&& isset($request['nbPlace'])
		) {
			$trajet = trajetTable::getTrajet($request['depart'], $request['arrivee']);
			// TODO - if(heure & prix & place are not given , they will be replaced by blank text and then doctrine insert blank text in place of number)
			if ($trajet != NULL) {
				$user = utilisateurTable::getUserById($context->getSessionAttribute('id'));
				$v = voyageTable::setVoyage($user, $trajet, $request['prix'], $request['nbPlace'], $request['heureDepart'], $request['contraintes']);
				echo 1;
			} else echo 0;
			return context::NONE;
		}
		return context::SUCCESS;
	}

	public static function connexion($request, $context) {

		if (isset($request['identifiant']) && isset($request['pass'])) {
			$identifiant = $request['identifiant'];
			$pass = $request['pass'];
			if (!empty($identifiant) && !empty($pass)) {
				$exist = utilisateurTable::getUserByLoginAndPass($identifiant, $pass);
				if ($exist) {
					$context->setSessionAttribute('is_logged', 'true');
					$context->setSessionAttribute('id', $exist->id);
					$context->setSessionAttribute('identifiant', $exist->identifiant);
					$context->setSessionAttribute('nom', $exist->nom);
					$context->setSessionAttribute('prenom', $exist->prenom);
					$context->setSessionAttribute('image', $exist->avatar);
					echo 1;
				} else {
					echo 0;
				}
				return context::NONE;
			}
		}
		return context::SUCCESS;
	}



	public static function deconnexion($request, $context) {
		session_destroy();
		global $nameApp;
		$context->redirect('index.php?action=accueil');
		return context::SUCCESS;
	}


	public static function inscription($request, $context) {

		if (
			isset($request['identifiant']) && 
			isset($request['pass']) &&
			isset($request['prenom']) &&
			isset($request['nom'])
		) {
			$user = utilisateurTable::getUserByIdentifiant($request['identifiant']);
			if ($user == NULL) {
				$user = utilisateurTable::setUser(
					$request['identifiant'],
					$request['pass'],
					$request['nom'],
					$request['prenom']
				);
				echo 1;
				$request['identifiant'] = $request['identifiant'];
				$request['pass'] = $request['pass'];
				mainController::connexion($request, $context);
			} else {
				echo 0;
			}
			return context::NONE;
		}
		return context::SUCCESS;
	}
}
