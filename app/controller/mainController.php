<?php

class mainController {


	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->trajet = trajetTable::getTrajet($request['depart'], $request['arrivee']);
		return context::SUCCESS;
	}
}
