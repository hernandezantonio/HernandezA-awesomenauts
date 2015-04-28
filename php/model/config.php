<?php

require_once(__DIR__ . "/database.php");
session_start();
session_regenerate_id(true); 

$path = "/AntonioHawesomenauts/php/";

$host = "localhost";
$username = "root";
$password = "root";
$database = "awesomenauts_db";

//this is asking if the connection is set 
if (!isset($_SESSION["connection"])) {
    $connection = new Database($host, $username, $password, $database);
    $_SESSION["connection"] = $connection;
}