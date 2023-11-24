const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'To do List',
        todos: [
          'HTML',
          'CSS',
          'JAVASCRIPT',
          'VUE'
        ]
      }
    },
    methods: {
      requestData(){
        axios.get('db.php')
        .then(res =>{
          this.todos = res.data.results;
        }) 
      }
    },
    created(){
      this.requestData();
    }
  }).mount('#app')