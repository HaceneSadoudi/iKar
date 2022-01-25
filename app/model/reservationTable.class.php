<?php

require_once "reservation.class.php";


class reservationTable {
    
    public static function getReservationByVoyage($voyage) {
        $em = dbconnection::getInstance()->getEntityManager();
        $reservationRepo = $em->getRepository('reservation');
        $reservations = $reservationRepo->findBy(array('voyage' => $voyage));
        return $reservations;
    }

    public static function setReservation($voyage, $voyageur) {
        $em = dbconnection::getInstance()->getEntityManager();
        $reservation = new reservation();
        $reservation->voyage = voyageTable::getVoaygeById($voyage);;
        $reservation->voyageur = voyageTable::getVoaygeByConducteur($voyageur);
        $em->persist($reservation);
        $em->flush();
    }
}