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
        axios.get('./db.php')
      }
    },
    created(){
      this.requestData();
    }
  }).mount('#app')