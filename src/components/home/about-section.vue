<template>
    <section id="about">
        <!-- title -->
        <h2>00. About</h2>

        <p>
            Hello, my name is
            <router-link to="/" class="red">Mohammed</router-link> I enjoy making things with web technologies, I started with the web
            development back in 2017, when I found out that I want to make websites! <br />
            <br />
            Right now, I am working at a start up,
            <a href="https://turtanu.com" target="_blank" class="blue">Turtanu</a>, where I am focusing on building user interfaces with
            <a href="https://vuejs.org/" target="_blank" class="red">Vue.js</a> for our new ideas and projects. My main focus these days is
            focusing on my design skills, trying new techs on both the front-end and the back-end. <br />
            <br />
            Here is a list of some technologies I enjoy working with:
        </p>

        <div class="technologies">
            <a :href="technology.link" target="_blank" class="technology" v-for="technology in technologies" :key="technology.id">{{
                technology.name
            }}</a>
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
}
</script>
<style scoped>
section {
    @apply md:px-28 px-5 relative flex flex-col justify-center;
    min-height: 80vh;
}

h2 {
    @apply text-crimson font-bold text-2xl mb-4;
    @apply md:text-3xl;
}

p {
    @apply lg:w-2/3;
}

.technologies {
    @apply grid grid-cols-3 grid-rows-3 gap-3 lg:w-1/3 mt-3;
}
.technology {
    @apply bg-crimson  text-center font-bold p-2 rounded-sm cursor-pointer select-none;
    @apply hover:bg-han-blue transition-colors duration-300;
}
</style>
