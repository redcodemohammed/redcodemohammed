<template>
  <section id="about">
    <!-- title -->
    <h2>01. About</h2>

    <p>
      So I am <span class="font-bold">Mohammed</span> I enjoy making things with web technologies, I started with the web development back
      in 2017, when I found out that I want to make websites! <br />
      <br />
      Right now, I am working remotely as a freelancer, and I am focusing on building user interfaces with
      <a href="https://vuejs.org/" class="font-bold" target="_blank" style="color: #00c587">Vue.js</a> for our new ideas and projects. My
      main focus these days is focusing on my design skills, trying new techs on both the front-end and the back-end. <br />
      <br />
      Here is a list of some technologies I enjoy working with:
    </p>

    <div class="justify-center flex mt-10">
      <div class="technologies">
        <a :href="technology.link" target="_blank" class="technology" v-for="technology in technologies" :key="technology.id">{{
          technology.name
        }}</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutSection',
  data: () => ({
    technologies: [
      { id: 0, name: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { id: 1, name: 'Typescript', link: 'https://www.typescriptlang.org/' },
      { id: 2, name: 'React', link: 'https://reactjs.org/' },
      { id: 3, name: 'Node.js', link: 'https://nodejs.org/en/' },
      { id: 4, name: 'Vue.js', link: 'https://vuejs.org/' },
      { id: 5, name: 'Feathers.js', link: 'https://feathersjs.com/' },
      { id: 6, name: 'Tailwind.css', link: 'https://tailwindcss.com/' },
      { id: 7, name: 'MongoDB', link: 'https://www.mongodb.com/' },
      { id: 8, name: 'Express.js', link: 'https://expressjs.com/' }
    ]
  })
};
</script>
<style scoped>
section {
  @apply md:px-28 px-5 relative flex flex-col justify-center text-center;
  min-height: 80vh;
}

h2 {
  @apply font-bold text-2xl mb-10;
  @apply md:text-5xl;
  color: #fffffe;
}

p {
  @apply lg:px-28;
  color: #94a1b2;
}

.technologies {
  @apply grid grid-cols-3 grid-rows-3 gap-3 lg:w-1/3 mt-3;
}
.technology {
  @apply text-center font-bold p-2 rounded-sm cursor-pointer select-none;
  background: #7f5af0;
  color: #fffffe;
}
</style>
