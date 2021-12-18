<?php

class mainController {


	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->voyages = voyageTable::getVoyagesByTrajet($request['trajet']);
		return context::SUCCESS;
	}
}
