<template>
    <div>
      <h1>Message Component</h1>
      <ul>
        <li v-for="post in posts">{{post.text}}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: "Message component data"
      }
    },
    computed: {
      posts(){
        console.log("inside posts", this.$store);
        return this.$store.getters.getPost
      }
    }
  }
</script>
