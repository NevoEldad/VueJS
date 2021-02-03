const app = Vue.createApp({
  data() {
    return {
      goalA: 'Just do itA',
      goalB: 'Just do itB',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.goalA;
      }
      return this.goalB;
    }
  }
});

app.mount('#user-goal');
