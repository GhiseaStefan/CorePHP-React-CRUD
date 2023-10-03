<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'database.php';
include 'userController.php';

$database = new DbConnect;
$dbConnection = $database->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        getUsers($dbConnection);
        break;
    case "POST":
        createUser($dbConnection);
        break;
    case "PUT":
        updateUser($dbConnection);
        break;
    case "DELETE":
        deleteUser($dbConnection);
        break;
}
?>