<?php

require_once "trajet.class.php";


class trajetTable {
    
    public static function getTrajet($depart, $arrivee) {
        $em = dbconnection::getInstance()->getEntityManager();
        $trajetRepo = $em->getRepository('trajet');
        $trajet = $trajetRepo->findOneBy(array('depart' => $depart, 'arrivee' => $arrivee));
        return $trajet;
    }
}