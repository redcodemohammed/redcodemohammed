<template>
  <section id="contact">
    <!-- title -->
    <h2>03. Contact</h2>

    <div class="text">
      <h1>Get in touch</h1>
      <p>If you like my work, or have a question or anything else to say, my inbox is always open and I will try to get back to you!</p>
      <a href="mailto:redcodemohammed@gmail.com"> Say something interesting</a>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply md:px-28 px-5 relative flex flex-col justify-center font-bold text-center;
  min-height: 80vh;
}

h2 {
  @apply font-bold text-2xl mb-10;
  @apply md:text-5xl;
  color: #fffffe;
}

.text {
  @apply flex flex-col justify-center items-center gap-8;
}

h1 {
  @apply text-center text-4xl;
  @apply md:text-3xl;
  color: #fffffe;
}

p {
  @apply text-center font-bold lg:w-1/2;
  color: #94a1b2;
}

a {
  @apply text-center font-bold p-2 rounded-sm;
  background: #7f5af0;
}
</style>
