<?php 
require_once '../includes/db.php'; // The mysql database connection script

$data=json_decode(file_get_contents("php://input"),true);



$task = $data['task'];
$desc = $data['desc'];



$query="INSERT INTO tasks(task,description)  VALUES ('$task', '$desc')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);

?>