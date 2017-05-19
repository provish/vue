<template lang="html">
  <section>
    <app-news v-for="item in news"></app-news>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: [1,11,1,1,11,1,1,1,1,1,1,1,1,1]
    }
  }
}
</script>

<style lang="css">
</style>
