<?php

class mainController {


	public static function accueil($request, $context) {
		return context::SUCCESS;
	}

	public static function testMvc($request, $context) {
		$context->user = utilisateurTable::getUserByLoginAndPass($request['user'], $request['pass']);
		return context::SUCCESS;
	}
}
