<?php 

$todos = ["HTML","CSS","JAVASCRIPT","VUE"];

header('Content-type: application/json');

echo json_encode($todos);

?>