<?php 

$todos = [
  [
  'text' => 'PHP',
  'done' => false
  ],
  [
  'text' => 'JavaScript',
  'done' => false
  ],
  [
  'text' => 'HTML',
  'done' => true
  ],
  [
  'text' => 'CSS',
  'done' => true
  ]
  ];

header('Content-type: application/json');

$response = [
  'success'=> true,
  'results'=> $todos, 
];

echo json_encode($response);

?>