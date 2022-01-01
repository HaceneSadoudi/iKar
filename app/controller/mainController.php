<?php

class mainController {


	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->reservations = reservationTable::getReservationByVoyage($request['voyage']);
		return context::SUCCESS;
	}

	public static function chercherVoyage($request, $context) {
		$depart = isset($request['depart']) ? $request['depart'] : "";
		$arrivee = isset($request['arrivee']) ? $request['arrivee'] : "";
		$context->params = !isset($request['depart']) && !isset($request['arrivee']) ? false : true;
		$trajet = trajetTable::getTrajet($depart, $arrivee);
		$context->voyages = voyageTable::getVoyagesByTrajet($trajet);
		return context::SUCCESS;
	}
}
