<template>
	<div class="loading-screen">
		<div>Hey!, please wait :)</div>
		<canvas class="loading"></canvas>
	</div>
</template>
<style scoped>
.loading-screen {
	@apply fixed top-0 w-screen h-screen bg-eerie-black z-30 flex items-center justify-center text-4xl;
}

.loading {
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	z-index: 0;
}
</style>
<script>
import particles from 'particlesjs'
export default {
	mounted() {
		particles.init({
			selector: '.loading',
			color: ['#DA0037', '#444444', '#4a65c2', '#EDEDED'],
			maxParticles: 60,
			sizeVariations: 3,
			// connectParticles: true,
			speed: 0.8,
		})
	},
}
</script>
