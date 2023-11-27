const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'To do List',
        todos: [],
        newTodo: '',
      }
    },
    methods: {
      requestData(){
        axios.get('db.php')
        .then(res =>{
          this.todos = res.data.results;
          console.log(this.todos);
        }) 
      },
      sendTodo(){
        const data = {
          todo : this.newTodo,
        } 
        axios.post('store.php', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })
        .then((res) => {
          this.todos = res.data.results
          console.log(this.todos);
        })
        this.newTodo = ''
      },
      destroyTodo(index){
        const data = {
          id: index,
        }
        axios.post('destroy.php', data,{
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })
        const removed = this.todos.splice(index, 0);
        axios.post('destroy.php', removed,{
          headers: {
            'Content-Type': 'multipart/form-removed'
          },
        })
      }
    },
    created(){
      this.requestData();
    }
  }).mount('#app')