<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show/Hide</button>
    <ul v-if="!detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{friend.phone}}
      </li>
      <li>
        <strong>EMail:</strong>
        {{friend.email}}
        }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 123,
        name: "Eli",
        phone: "055555555",
        email: "Eli@eliserver.com"
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>