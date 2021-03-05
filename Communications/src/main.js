import { createApp } from 'vue';

import App from './App.vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

const app = createApp(App);

app.component('active-user', ActiveUser);
app.component('user-data', UserData);

app.mount('#app');

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
