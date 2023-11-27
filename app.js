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
        }) 
      },
      sendTodo(){
        const data = {
          todo : this.newTodo,
        } 
        axios.post('store.php', data, {
          headers: {
            'Content-type': 'multipart/form-data'
          },
        })
        .then(res => {
          this.todos = res.data.results;
        })
      }
    },
    created(){
      this.requestData();
    }
  }).mount('#app')