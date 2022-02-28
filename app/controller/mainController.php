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
					$html .= "<li><a href='' class='suggestion-item select-menu__button'>" . $cities[$key]['depart'] . "</a></li>";
				}
				echo $html;
			}
		}
		return context::NONE;
	}

	public static function rechercheVoyageResult($request, $context) {
		if (isset($request['depart']) && isset($request['arrivee']) && isset($request['nbplaces'])) {
			// Clean inputs
			$depart = validation::clean($request['depart']);
			$arrivee = validation::clean($request['arrivee']);
			$nbPlaces = validation::clean($request['nbplaces']);
			// Validate inputs
			if (
				validation::isCityExists($depart) &&
				validation::isCityExists($arrivee) &&
				is_numeric($nbPlaces) &&
				$nbPlaces > 0
			) {
				$trajet = trajetTable::getTrajet($depart, $arrivee);
				if (!$trajet) return context::ERROR;
				$context->voyages = voyageTable::getVoyagesByTrajet($trajet, $nbPlaces);
				if (!$context->voyages) return context::ERROR;
				return context::SUCCESS;
			}
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
			// Clean data
			$depart = validation::clean($request['depart']);
			$arrivee = validation::clean($request['arrivee']);
			$tarif = validation::clean($request['tarif']);
			$nbplaces = validation::clean($request['nbplaces']);
			$constraintes = validation::clean($request['constraintes']);
			// Validate data
			if (
				validation::isCityExists($depart) &&
				validation::isCityExists($arrivee) &&
				is_numeric($tarif) &&
				$tarif > 0 &&
				$tarif <= 1000 &&
				is_numeric($nbplaces) &&
				$nbplaces > 0 &&
				$nbplaces <= 15
			) {
				$trajet = trajetTable::getTrajet($depart, $arrivee);
				$user = utilisateurTable::getUserById($context->getSessionAttribute('id'));
				$v = voyageTable::setVoyage($user, $trajet, $request['prix'], $request['nbPlace'], $request['heureDepart'], $request['contraintes']);
				echo 1;
			} else echo 0;
			return context::NONE;
		}
		// Get all cities
		$context->allCities = trajetTable::getAllCities();
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
}
