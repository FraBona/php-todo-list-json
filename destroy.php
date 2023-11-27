<?php 

include __DIR__ . '/array.php';

$index = $_POST['id'] ?? null;
var_dump($index);

array_splice($todos, 1, $index);