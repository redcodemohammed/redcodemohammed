<template>
	<section id="skills">
		<!-- title -->
		<h2>02. Skills</h2>

		<!-- skills -->
		<div class="skills">
			<!-- programming languages -->
			<div class="skills-list">
				<div class="skills-list--title">Languages</div>
				<div class="skill">00. Javascript</div>
				<div class="skill">01. Typescript</div>
				<div class="skill">02. Python</div>
				<div class="skill">03. HTML</div>
				<div class="skill">04. CSS</div>
			</div>

			<!-- tools -->
			<div class="skills-list">
				<div class="skills-list--title">Tools</div>
				<div class="skill">00. Git + Github</div>
				<div class="skill">01. Command Line</div>
				<div class="skill">02. Linux</div>
				<div class="skill">03. Insomnia</div>
				<div class="skill">04. VScode</div>
			</div>

			<!-- frameworks -->
			<div class="skills-list">
				<div class="skills-list--title">Frameworks</div>
				<div class="skill">00. Vue.js</div>
				<div class="skill">01. React.js</div>
				<div class="skill">02. Flutter</div>
				<div class="skill">03. Express.js</div>
				<div class="skill">04. Feathers.js</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	@apply md:px-28 px-5 relative flex flex-col justify-center font-bold;
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
