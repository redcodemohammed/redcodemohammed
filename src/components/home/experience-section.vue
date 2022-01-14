<template>
	<section id="experience">
		<!-- title -->
		<h2>01. Experience</h2>

		<p>
			In the few past years, I have been working on some personal project and some other
			projects for our start-up
			<a href="https://turtanu.com" target="_blank" class="blue">Turtanu</a>, here are some
			exmaples:
		</p>

		<div class="projects">
			<a class="project" href="https://vip-veranda.nl/" target="_blank">VIP Veranda</a>

			<a class="project" href="https://turtanu.com/" target="_blank">Turtanu.com</a>

			<a class="project" href="/" target="_blank">My website</a>
		</div>
	</section>
</template>

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
	@apply lg:w-1/2;
}

.projects {
	@apply grid grid-cols-3 grid-rows-3 gap-3 lg:w-1/3 mt-3;
}
.project {
	@apply bg-han-blue  text-center font-bold p-2 rounded-sm cursor-pointer select-none;
	@apply hover:bg-crimson transition-colors duration-300;
}
</style>
