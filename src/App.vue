<template>
  <div id="app">
    <!-- <app-bar></app-bar> -->
    <router-view />
  </div>
</template>
<script>
// import appBar from './components/app-bar.vue';
export default {
  components: {
    // 'app-bar': appBar
  },

  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
#app {
  @apply min-h-screen text-cultured;
  background: #16161a;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

.red {
  @apply text-crimson;
}
.blue {
  @apply text-han-blue;
}
</style>
