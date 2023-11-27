<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" href="./main.css">
</head>
<body>

  <div id="app">
    <div class="container">
      <h1>{{ message }}</h1>
      <input @keyup.enter="sendTodo" type="text" placeholder="Nuova ToDo" v-model="newTodo">
    </div>
    <div class="container">
      <ul>
        <li class="todo_item" v-for="(todo, i) in todos" :key="i">
        <span :class="{
          done: todo.done
        }">{{todo.text}}</span>
        <span>elimina</span></li>
      </ul>
    </div>
  </div>


  <script src="./app.js"></script>
</body> 
</html>