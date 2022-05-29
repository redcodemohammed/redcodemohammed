<template>
  <section>
    <!-- text -->
    <div class="text">
      <div class="text--upper">Hi, my name is</div>
      <div class="text--bottom">
        Mohammed, <br />
        <typewriter class="typewriter" :replace="replace" :type-interval="100" :replace-interval="1000">
          <div>I make Websites :3</div>
        </typewriter>
      </div>
      <p class="about-me">
        I am a web developer specializing in building user interfaces using web technologies, I am obsessed in
        <a href="https://www.typescriptlang.org" target="_blank" style="color: #3066c9">Typescript</a>
        and <a href="https://vuejs.org/" target="_blank" style="color: #00c587">Vue.js</a>. Currently, I am working as a freelancer
        fullstack developer.
      </p>
    </div>

    <!-- links -->
    <div class="links">
      <a href="https://www.github.com/redcodemohammed" target="_blank" rel="noopener noreferrer">
        <img class="link--logo" src="/images/github.svg" alt="github" />
      </a>

      <a href="https://www.instagram.com/s127x/" target="_blank" rel="noopener noreferrer">
        <img class="link--logo" src="/images/instagram.svg" alt="instagram" />
      </a>

      <a href="https://www.linkedin.com/in/redcodemohammed/" target="_blank">
        <img class="link--logo" src="/images/linkedin.svg" alt="linkedin logo" />
      </a>

      <a href="https://codepen.io/redcodemohammed" target="_blank">
        <img class="link--logo" src="/images/codepen.svg" alt="codepen logo" />
      </a>
      <!-- vertical line -->
      <img src="/images/line-vertical.png" alt="" />
    </div>

    <!-- email -->
    <div class="email">
      <a href="mailto:redcodemohammed@gmail.com" target="_blank" style="color: #7f5af0"> redcodemohammed@gmail.com </a>
    </div>

    <canvas class="background"></canvas>
  </section>
</template>
<script>
import particles from 'particlesjs';
import Typewriter from 'typewriter-vue';

export default {
  name: 'hero-section',
  components: {
    Typewriter
  },
  data: () => ({
    replace: [
      { from: 'Websites :3', to: 'APIs' },
      { from: 'APIs', to: 'Android Apps' },
      { from: 'Android Apps', to: 'Telegram Bots' },
      { from: 'Telegram Bots', to: 'Websites ❤️' }
    ]
  }),
  mounted() {
    particles.init({
      selector: '.background',
      color: ['#2cb67d', '#16161a', '#7f5af0', '#fffffe'],
      maxParticles: 40,
      sizeVariations: 3,
      connectParticles: true,
      speed: 1
    });
  }
};
</script>
<style scoped>
section {
  /* background: url(/images/background.png); */
  background: url(/blob-scene-haikei.svg);
  @apply min-h-screen p-6 pb-0 bg-cover bg-no-repeat bg-center relative z-20;
  min-height: 100vh;
}

.text {
  @apply flex flex-col absolute top-28 right-0 z-10;
  @apply md:px-28 px-5;
}

.text--upper {
  @apply text-crimson font-bold text-2xl mb-4;
  @apply md:text-3xl;
  color: #fffffe;
}
.text--bottom {
  @apply font-bold text-4xl;
  @apply md:text-5xl;
  line-height: 1.5em;
}
.about-me {
  @apply font-medium;
  @apply lg:w-1/2;
  @apply md:text-xl;
  color: #94a1b2;
}

.links {
  @apply hidden z-10 fixed bottom-0 flex-col items-center justify-center gap-3;
  @apply md:flex;
}

.link--logo {
  @apply w-8;
}

.email {
  @apply hidden  absolute bottom-10 right-5 border-b-2 border-han-blue py-2 z-10;
  @apply md:block;
}

.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
