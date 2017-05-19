<template>
<div id="app">
  <app-nav></app-nav>
  <!-- <app-message msg=""></app-message> -->
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        Details
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
      <div class="col-md-2">
        Ads
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
  .index-side-pad{
    padding: 0 50px 0 50px;
  };

  .m-t-60 {
    margin-top: 60px;
  }
</style>
