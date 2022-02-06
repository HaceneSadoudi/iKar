<?php

class validation {

    public static function isEmpty($data) {
        return $data ? true : false;
    }

    public static function clean($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    public static function isUsername($data) {
        return preg_match("/^(?:[A-Za-z])[A-Za-z0-9]{3,20}$/", $data);
    }

    public static function isPassword($data) {
        return preg_match("/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/", $data);
    }

    public static function isName($data) {
        return preg_match("/^[a-zA-Z]{2,20}$/", $data);
    }
}
