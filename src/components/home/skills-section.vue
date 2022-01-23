<template>
    <section id="skills">
        <!-- title -->
        <h2>02. Skills</h2>

        <!-- skills -->
        <div class="skills">
            <div class="skills-list" v-for="skill in skills" :key="skill.id">
                <div class="skills-list--title">{{ skill.title }}</div>
                <div class="skill" v-for="_ in skill.skills" :key="_.id">{{ _.name }}</div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SkillsSection',
    data: () => ({
        skills: [
            {
                id: 0,
                title: '00. Languages',
                skills: [
                    { id: 0, name: '00. Javascript' },
                    { id: 1, name: '01. Typescript' },
                    { id: 2, name: '02. Python' },
                    { id: 3, name: '03. HTML' },
                    { id: 4, name: '04. CSS' }
                ]
            },
            {
                id: 1,
                title: '01. Tools',
                skills: [
                    { id: 0, name: '00. Git + Github' },
                    { id: 1, name: '01. Command Line' },
                    { id: 2, name: '02. Linux' },
                    { id: 3, name: '03. Insomnia' },
                    { id: 4, name: '04. VScode' }
                ]
            },
            {
                id: 2,
                title: '02. Frameworks',
                skills: [
                    { id: 0, name: '00. Vue.js' },
                    { id: 1, name: '01. React.js' },
                    { id: 2, name: '02. Flutter' },
                    { id: 3, name: '03. Express.js' },
                    { id: 4, name: '04. Feathers.js' }
                ]
            }
        ]
    })
}
</script>
<style scoped>
section {
    @apply md:px-28 px-5 py-5 relative flex flex-col justify-center font-bold;
    min-height: 80vh;
}

h2 {
    @apply text-crimson font-bold text-2xl mb-4;
    @apply md:text-3xl;
}
.skills {
    @apply flex gap-10 flex-col;
    @apply lg:flex-row  lg:justify-center lg:items-center;
}

.skills-list--title {
    @apply text-han-blue font-bold text-xl my-4 mb-2;
    @apply md:text-3xl;
}

.skill {
    @apply text-lg m-5 mx-0;
}
</style>
