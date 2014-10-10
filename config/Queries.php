<?php

require_once "config.php";
date_default_timezone_set('Asia/Ulan_Bator');

class Query {

    public static function Login($username, $password) {
        $db = DataBase::getInstance();
        $query = "select * from user where username = '$username' and password = '$password'";
        $check = $db->query($query);
        if ($check) {
            if ($check->num_rows > 0) {
                $result = Error_message::Error_number(1000);
                $result["data"] = mysqli_fetch_assoc($check);
            } else {
                $result = Error_message::Error_number(1001);
            }
        } else {
            $result = Error_message::Error_number(2001);
        }
        return $result;
    }

}
