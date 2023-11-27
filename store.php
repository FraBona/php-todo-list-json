<?php

include __DIR__ . '/array.php';


$textTodo = $_POST['todo'] ?? null;

$todo = [
  'text' => $textTodo,
  'done' => false,
];

$todos[] = $todo;

$response = [
  'success'=> true,
  'results'=> $todos, 
];

header('Content-type: application/json');
$json =  json_encode($response);

echo $json;

file_put_contents("todo.json", $json)
?>