<template>
  <div class="">
    <router-view/>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  computed: {
    authUser(){
      return this.$store.state.auth.user
    }
  },
  methods: {
    
  }
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
