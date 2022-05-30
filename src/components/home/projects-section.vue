<template>
  <section id="projects" class="min-h-screen md:px-28 py-10 px-5 relative flex flex-col gap-10 md:gap-20 justify-center text-center">
    <!-- title -->
    <h2 style="color: #fffffe" class="font-bold text-2xl mb-10 md:text-5xl">01. Projects I have done before</h2>

    <!-- services cards container -->
    <div class="grid grid-cols-10 justify-center">
      <!-- catagories -->
      <div class="grid grid-cols-4 gap-4 col-span-4 col-start-4">
        <button v-for="i in 4" :key="i" class="border-2 p-3 rounded-full text-lg cursor-pointer">Web</button>
      </div>
    </div>
  </section>
</template>
