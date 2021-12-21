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
		$trajet = trajetTable::getTrajet($request['depart'], $request['arrivee']);
		$context->voyages = voyageTable::getVoyagesByTrajet($trajet);
		return context::SUCCESS;
	}
}
