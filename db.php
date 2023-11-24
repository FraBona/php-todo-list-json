<?php 

$todos = ["HTML","CSS","JAVASCRIPT","VUE","PHP"];

header('Content-type: application/json');

$response = [
  'success'=> true,
  'results'=> $todos, 
];

echo json_encode($response);

?>