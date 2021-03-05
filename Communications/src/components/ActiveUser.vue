<template>
  <div>
    <h3>{{this.nameShown}}</h3>
    <h3>{{this.ageShown}}</h3>
  </div>
</template>
<script>
export default {
  props: ["nameShown", "ageShown"],
  data() {
    return {};
  }
};
</script>