<?php

require_once "voyage.class.php";


class voyageTable {

    public static function getVoyagesByTrajet($trajet) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $voyages = $voyageRepo->findBy(array('trajet' => $trajet));
        return $voyages;
    }

    public static function getVoyage($depart, $arrivee) {
        
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $trajet = trajetTable::getTrajet($depart, $arrivee);
        $voyages = $voyageRepo->findBy(array('trajet' => $trajet->id));
        return $voyages;
    } 
}
