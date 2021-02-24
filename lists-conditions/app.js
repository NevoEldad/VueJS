const app = Vue.createApp({
    data() {
      return {
        inputValue:'',
        tasks:[],
        showMore:true
      };
    },
    computed:{
      name:''
    },
    methods: {
      addTask(){
          this.tasks.push(this.inputValue);
          this.inputValue=''
      }
    }
  });
  
  app.mount('#assignment');
  