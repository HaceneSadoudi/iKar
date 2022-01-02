<?php
//nom de l'application
$nameApp = "app";

//action par défaut
$action = "accueil";

if (key_exists("action", $_REQUEST))
	$action =  $_REQUEST['action'];

require_once 'lib/core.php';
require_once $nameApp . '/controller/mainController.php';

foreach (glob($nameApp . '/model/*.class.php') as $model)
	include_once $model;

session_start();

$context = context::getInstance();
$context->init($nameApp);

$view = $context->executeAction($action, $_REQUEST);

//traitement des erreurs de bases, reste a traiter les erreurs d'inclusion
if ($view === false) {
	echo "Une grave erreur s'est produite, il est probable que l'action " . $action . " n'existe pas...";
	die;
}
//inclusion du layout qui va lui meme inclure le template view
elseif ($view != context::NONE) {
	include($nameApp . "/view/" . $action . $view . ".php");
}
