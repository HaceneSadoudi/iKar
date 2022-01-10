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

	public static function connexion($request, $context) {

		if (isset($request['pseudo']) && isset($request['pass'])) {
			$pseudo = $request['pseudo'];
			$pass = $request['pass'];

			if (!empty($pseudo) && !empty($pass)) {
				$exist = utilisateurTable::getUserByLoginAndPass($pseudo, $pass);
				echo json_encode($exist);
				if ($exist) {
					$context->setSessionAttribute('is_logged', 'true');
					$context->setSessionAttribute('id', $exist->id);
					$context->setSessionAttribute('identifiant', $exist->identifiant);
					$context->setSessionAttribute('nom', $exist->nom);
					$context->setSessionAttribute('prenom', $exist->prenom);
					$context->setSessionAttribute('image', $exist->avatar);
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
}
