<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      {{goal}}>
      <slot :item="goal" some-other="some-other"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["finish", "bla"]
    };
  }
};
</script>
