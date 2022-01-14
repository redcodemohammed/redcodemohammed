<template>
	<div class="home">
		<heroSection></heroSection>
		<lineSection></lineSection>
		<aboutSection></aboutSection>
		<lineSection></lineSection>
		<experienceSection></experienceSection>
		<lineSection></lineSection>
		<skillsSection></skillsSection>
		<lineSection></lineSection>
		<contactSection></contactSection>
		<div class="text-center">Made with ❤️ By Mohammed</div>
	</div>
</template>

<script>
import heroSection from '@/components/home/hero-section.vue'
import aboutSection from '@/components/home/about-section.vue'
import experienceSection from '@/components/home/experience-section.vue'
import skillsSection from '@/components/home/skills-section.vue'
import contactSection from '@/components/home/contact-section.vue'
import lineSection from '@/components/line.vue'
export default {
	name: 'Home',
	components: {
		heroSection,
		aboutSection,
		experienceSection,
		skillsSection,
		contactSection,
		lineSection,
	},
}
</script>
<style></style>
