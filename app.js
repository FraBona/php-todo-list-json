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
          console.log(res.data.results);
        })
      }
    },
    created(){
      this.requestData();
    }
  }).mount('#app')