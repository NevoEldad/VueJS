<template>
  <section>
    <base-card>
      <template v-slot:header>
        <div>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </div>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"]
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>