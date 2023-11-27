<?php 

include __DIR__ . '/array.php';

header('Content-type: application/json');

$response = [
  'success'=> true,
  'results'=> $todos, 
];

echo json_encode($response);

?>