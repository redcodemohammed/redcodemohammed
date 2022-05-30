<template>
  <section
    style="background: #242629"
    id="services"
    class="min-h-screen md:px-28 py-10 px-5 relative flex flex-col gap-10 md:gap-20 justify-center text-center"
  >
    <!-- title -->
    <h2 style="color: #fffffe" class="font-bold text-2xl mb-10 md:text-5xl">00. What I can offer you</h2>

    <!-- services cards container -->
    <div class="grid grid-cols-10 justify-center">
      <div class="col-start-2 lg:col-start-3 col-span-8 lg:col-span-6 grid grid-cols-6 gap-5">
        <!-- front end card -->
        <div
          style="background: #16161a"
          class="shadow-sm col-span-6 aspect-1/1 xl:col-span-2 rounded-md p-5 flex flex-col align-middle justify-center gap-5"
        >
          <font-awesome-icon style="color: #fffffe" class="text-5xl" icon="code" />

          <span class="font-bold text-xl" style="color: #fffffe">Frontend Development</span>
          <p style="color: #94a1b2">
            Using <a href="https://tailwindcss.com/" target="_blank" class="font-bold" style="color: #00b6fc">Tailwind</a> and
            <a class="font-bold" href="https://www.typescriptlang.org" target="_blank" style="color: #3066c9">Typescript</a> and
            <a class="font-bold" href="https://vuejs.org/" target="_blank" style="color: #00c587">Vue.js</a> on the frontend side, I can
            build your websites making sure that it's fast, responsive and works on all devices.
          </p>
        </div>
        <!-- front end card -->
        <div
          style="background: #16161a"
          class="shadow-sm col-span-6 aspect-1/1 xl:col-span-2 rounded-md p-5 flex flex-col align-middle justify-center gap-5"
        >
          <font-awesome-icon style="color: #fffffe" class="text-5xl" icon="server" />

          <span class="font-bold text-xl" style="color: #fffffe">Backend Development</span>
          <p style="color: #94a1b2">
            I use <a href="https://nestjs.com/" target="_blank" class="font-bold" style="color: #ff0023">Nest.js</a> and
            <a href="https://www.mongodb.com/" target="_blank" class="font-bold" style="color: #1d9b52">Mongodb</a> on the backend, with the
            help of <a class="font-bold" href="https://www.typescriptlang.org" target="_blank" style="color: #3066c9">Typescript</a> and
            <a href="https://nodejs.org/" target="_blank" class="font-bold" style="color: #48b161">Node.js</a>, I can build your backend
            and making sure it's fast, secure and scalable.
          </p>
        </div>
        <!-- mobile apps card -->
        <div
          style="background: #16161a"
          class="shadow-sm col-span-6 aspect-1/1 xl:col-span-2 rounded-md p-5 flex flex-col align-middle justify-center gap-5"
        >
          <font-awesome-icon style="color: #fffffe" class="text-5xl" icon="mobile-android" />

          <span class="font-bold text-xl" style="color: #fffffe">Mobile Development</span>
          <p style="color: #94a1b2">
            When it comes to mobile app, I prefer using
            <a href="https://reactnative.dev/" target="_blank" class="font-bold" style="color: #00daff">React Native</a> for its simplicity
            and performance, to ensure that your users will have a great experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
