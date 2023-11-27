<?php

include __DIR__ . '/db.php';

$textTodo = $_POST['todo'] ?? null;

$todo = [
  'text' => $textTodo,
  'done' => false,
];

$todos[] = $todo;

header('Content-type: application/json');

$response = [
  'success'=> true,
  'results'=> $todos, 
];

echo json_encode($response);
?>