<template>
  <div>
    name:
    <input type="text" v-model="name" />
    {{namee}}
    age:
    <input type="text" v-model="age" />
    {{agee}}
    <button @click="addUser">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return { age: "", name: "" };
  },
  computed: {
    agee() {
      return this.age;
    },
    namee() {
      return this.name;
    }
  },
  methods: {
    addUser() {
      this.$emit("add-user", { name: this.namee, age: this.agee });
      this.age = "";
      this.name = "";
    }
  }
};
</script>