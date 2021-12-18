<?php

require_once "reservation.class.php";


class reservationTable {
    
    public static function getReservationByVoyage($voyage) {
        $em = dbconnection::getInstance()->getEntityManager();
        $reservationRepo = $em->getRepository('reservation');
        $reservations = $reservationRepo->findBy(array('voyage' => $voyage));
        return $reservations;
    }
}