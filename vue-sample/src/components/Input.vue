<template lang="html">
  <div>
    <p>{{ msg }}</p>
    <input type="text" v-model="message"/>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data: function() {
    return {
      message: this.msg
    }
  }
}
</script>

<style lang="css">
</style>
