<template>
  <div>
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoal from "./components/CourseGoals.vue";

export default {
  components: {
    TheHeader
    // BadgeList,
    // UserInfo,
    // CourseGoal
  },
  data() {
    return {
      activeUser: {
        name: "Eldad Nevo",
        description: "Doing stuff",
        role: "admin"
      }
    };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>