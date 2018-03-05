<?php 
require_once '../includes/db.php'; // The mysql database connection script

$data=json_decode(file_get_contents("php://input"),true);

$id=$data['id'];
$task = $data['task'];
$description = $data['description'];



$query="update tasks set task='$task',description='$description' where id='$id'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

$json_response = json_encode($result);

?>