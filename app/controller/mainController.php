<?php
include_once 'validation.php';
class mainController {

	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->reservations = reservationTable::getReservationByVoyage($request['voyage']);
		return context::SUCCESS;
	}

	public static function rechercheVoyage($request, $context) {
		return context::SUCCESS;
	}

	public static function suggestCities($request, $context) {
		if (isset($request['keyword'])) {
			// Clean input
			$keyword = validation::clean($request['keyword']);
			// Validate input
			if (validation::isAlphanumeric($keyword)) {
				$cities = trajetTable::getCities($request['keyword']);
				$html = "";
				foreach ($cities as $key => $city) {
					$html .= "<li><a href='' class='suggestion-item'>" . $cities[$key]['depart'] . "</a></li>";
				}
				echo $html;
			}
		}
		return context::NONE;
	}

	public static function rechercheVoyageResult($request, $context) {
		$trajet = trajetTable::getTrajet($request['depart'], $request['arrivee']);
		if (!$trajet) return context::ERROR;
		$context->voyages = voyageTable::getVoyagesByTrajet($trajet);
		if (!$context->voyages) return context::ERROR;
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
			// Sanitize & Clean inputs
			$identifiant = validation::clean($request['identifiant']);
			$pass = validation::clean($request['pass']);
			// Validate inputs
			if (validation::isUsername($identifiant) && validation::isPassword($pass)) {
				$exist = utilisateurTable::getUserByIdentifiant($identifiant);
				if ($exist) {
					$hash_from_database = $exist->pass;
					if (password_verify($pass, $hash_from_database)) {
						$context->setSessionAttribute('is_logged', 'true');
						$context->setSessionAttribute('id', $exist->id);
						$context->setSessionAttribute('identifiant', $exist->identifiant);
						$context->setSessionAttribute('nom', $exist->nom);
						$context->setSessionAttribute('prenom', $exist->prenom);
						echo 1;
					} else {
						echo 0;
					}
				} else {
					echo 0;
				}
				return context::NONE;
			}
			echo 0;
			return context::NONE;
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
			// Sanitize & Clean inputs
			$username = validation::clean($request['identifiant']);
			$password = validation::clean($request['pass']);
			$lastname = validation::clean($request['nom']);
			$firstname = validation::clean($request['prenom']);
			// Validate inputs
			if (
				validation::isUsername($username) &&
				validation::isPassword($password) &&
				validation::isName($lastname) &&
				validation::isName($firstname)
			) {
				$user = utilisateurTable::getUserByIdentifiant($username);
				if ($user == NULL) {
					$user = utilisateurTable::setUser(
						$username,
						password_hash($password, PASSWORD_DEFAULT),
						$lastname,
						$firstname
					);
					echo 1; // User added successfully
					$request['identifiant'] = $username;
					$request['pass'] = $password;
					mainController::connexion($request, $context);
				} else {
					echo 0; // Username already exists
				}
				return context::NONE;
			}
			echo 2; // inputs not valid
			return context::NONE;
		}
		return context::SUCCESS;
	}

	public function encrypt_password($pass) {		
		$salt = substr(md5(uniqid(rand(), TRUE)),0,4);
		return hash("sha512", $pass.$salt);
	}
}
