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
		$trajet = trajetTable::getTrajet($depart, $arrivee);
		$context->voyages = voyageTable::getVoyagesByTrajet($trajet);
		return context::SUCCESS;
	}
}
