<template lang="html">
  <div class="p-b-20">
    <div class="card">
      <div class="card-block">
        <h1 class="card-title">{{text}}</h1>
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        <button class="btn btn-success cur-pntr" v-on:click="register()">Register</button>
        <button class="btn btn-failure cur-pntr" v-on:click="unregister()">Unregister</button>
      </div>
      <!-- <div class="card-footer text-muted">
        <input type="text" class="form-control" placeholder="Comment on this post"/>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    register: function() {
      this.$store.dispatch('register', this.text);
    },
    unregister: function() {
      this.$store.dispatch('unregister', this.text);
    }
  }
}
</script>

<style lang="css">
.p-b-20 {
  padding-bottom: 20px;
}

.cur-pntr {
  cursor: pointer;
}
</style>
