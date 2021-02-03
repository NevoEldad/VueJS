const app = Vue.createApp({
  data() {
    return {
      fullName: 'Eldad Nevo',
      age: 29,
      externalImage:
        'https://www.nicepng.com/png/full/149-1495532_gwent-tracker-home-good-profile-picture-for-discord.png'
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    }
  }
});
app.mount('#assignment');
