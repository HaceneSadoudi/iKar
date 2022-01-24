<?php

require_once "utilisateur.class.php";

class utilisateurTable {

    public static function getUserByLoginAndPass($login, $pass) {
        $em = dbconnection::getInstance()->getEntityManager();
        $userRepository = $em->getRepository('utilisateur');
        $user = $userRepository->findOneBy(array(
            'identifiant' => $login,
            'pass' => $pass
        ));
        return $user;
    }

    public static function getUserByIdentifiant($id) {
        $em = dbconnection::getInstance()->getEntityManager();

        $userRepository = $em->getRepository('utilisateur');
        $user = $userRepository->findOneBy(array('identifiant' => $id));
        return $user;
    }

    public static function setUser($identifiant, $pass, $nom, $prenom) {
        $em = dbconnection::getInstance()->getEntityManager();
        $ut = new utilisateur();
        $ut->identifiant = $identifiant;
        $ut->pass = $pass;
        $ut->nom  = $nom;
        $ut->prenom = $prenom;
        $em->persist($ut);
        $em->flush();
    }
}
