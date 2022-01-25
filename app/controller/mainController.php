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
	
	public static function connexion($request, $context) {

		if (isset($request['lidentifiant']) && isset($request['lpass'])) {
			$identifiant = $request['lidentifiant'];
			$pass = $request['lpass'];
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
		$user = utilisateurTable::getUserByIdentifiant($request['ridentifiant']);
		if ($user == NULL) {
			$user = utilisateurTable::setUser(
				$request['ridentifiant'],
				$request['rpass'],
				$request['rnom'],
				$request['rprenom']
			);
			echo 1;
			$request['lidentifiant'] = $request['ridentifiant'];
			$request['lpass'] = $request['rpass'];
			mainController::connexion($request, $context);
		} else {
			echo 0;
		}
		return context::NONE;
	}
}
