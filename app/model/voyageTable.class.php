<?php

require_once "voyage.class.php";


class voyageTable {

    public static function getVoyagesByTrajet($trajet) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $voyages = $voyageRepo->findBy(array('trajet' => $trajet));
        return $voyages;
    }

    public static function setVoyage($conducteur, $trajet, $prix, $nbPlace, $heureDepart, $contraintes) {
        $em = dbconnection::getInstance()->getEntityManager();
        $v = new voyage();
        $v->conducteur = $conducteur;
        $v->trajet = $trajet;
        $v->tarif = $prix;
        $v->nbPlace = $nbPlace;
        $v->heureDepart = $heureDepart;
        $v->contraintes = $contraintes;

        $em->persist($v);
        $em->flush();
    }

}
