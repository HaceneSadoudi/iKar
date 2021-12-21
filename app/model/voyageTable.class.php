<?php

require_once "voyage.class.php";


class voyageTable {

    public static function getVoyagesByTrajet($trajet) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $voyages = $voyageRepo->findBy(array('trajet' => $trajet));
        return $voyages;
    }

}
