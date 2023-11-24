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
    }
  }).mount('#app')