<template lang="html">
  <section>
    <h1>Registered</h1>
    <app-news :text="item.text" v-for="item in news"></app-news>
  </section>
</template>

<script>
export default {
  computed: {
    news: function() {
      return this.$store.getters.getRegistered;
    }
  }
}
</script>

<style lang="css">
</style>
