<?php

require_once "voyage.class.php";


class voyageTable {

    public static function getVoyagesByTrajet($trajet, $nbPlace) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $qb = $voyageRepo->createQueryBuilder('v');
        $voyages = $qb->select('v.id,IDENTITY(v.trajet),IDENTITY(v.conducteur), v.tarif, v.nbPlace, v.heureDepart, v.contraintes ')
            ->where('v.trajet = ' . $trajet->id)
            ->andWhere($qb->expr()->gte('v.nbPlace ', ':nbr'))
            ->setParameter('nbr', $nbPlace)
            ->getQuery()
            ->getResult();
        return $voyages;
    }

    public static function getVoaygeById($id) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $voyage = $voyageRepo->findOneBy(array('id' => $id));
        return $voyage;
    }

    public static function getVoaygeByConducteur($conducteur) {
        $em = dbconnection::getInstance()->getEntityManager();
        $voyageRepo = $em->getRepository('voyage');
        $voyage = $voyageRepo->findBy(array('conducteur' => $conducteur));
        return $voyage;
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

    public static function updateVoyage($voyage, $reserve) {
        $em = dbconnection::getInstance()->getEntityManager();
        $v = $em->getRepository('voyage')->findOneBy($voyage);
        if($v = NULL) {
            echo 0;
        }
        $v->nbPlace -= $reserve;
        echo 1;
        $em->flush();
    }
}
