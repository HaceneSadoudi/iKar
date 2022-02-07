<?php

require_once "trajet.class.php";


class trajetTable {

    public static function getTrajet($depart, $arrivee) {
        $em = dbconnection::getInstance()->getEntityManager();
        $trajetRepo = $em->getRepository('trajet');
        $trajet = $trajetRepo->findOneBy(array('depart' => $depart, 'arrivee' => $arrivee));
        return $trajet;
    }

    public static function getCities($keyword) {
        $em = dbconnection::getInstance()->getEntityManager();
        $trajetRepo = $em->getRepository('trajet');
        $qb = $trajetRepo->createQueryBuilder('t');
        $cities = $qb->select('DISTINCT t.depart')
            ->where($qb->expr()->like('t.depart', ':keyword'))
            ->setParameter('keyword', ucfirst($keyword) . '%')
            ->getQuery()
            ->getResult();

        return $cities;
    }

    public static function setTrajet($depart, $arrivee, $distance) {
        $em = dbconnection::getInstance()->getEntityManager();
        $t = new trajet();
        $t->depart = $depart;
        $t->arrivee = $arrivee;
        $t->distance = $distance;

        $em->persist($t);
        $em->flush();
    }
}
