<template>
  <nav>
    <!-- logo image -->
    <router-link class="logo" to="/">
      <img class="logo--image" src="/images/brand.png" alt="Keep logo" />
    </router-link>

    <!-- links -->
    <div v-if="$route.name == 'Home'">
      <ul class="links">
        <li>
          <a class="links--link" href="#about"><span class="links--link--number">00.</span> About</a>
        </li>
        <li>
          <a class="links--link" href="#experience"><span class="links--link--number">01.</span> Experience</a>
        </li>
        <li>
          <a class="links--link" href="#skills"><span class="links--link--number">02.</span> Skills</a>
        </li>
        <li>
          <a class="links--link" href="#contact"><span class="links--link--number">03.</span> Contact</a>
        </li>
        <li>
          <router-link v-if="false" class="links--link" to="/blogs"><span class="links--link--number">04.</span> Blogs</router-link>
        </li>
      </ul>
      <ul class="flex gap-5 font-bold" v-if="false">
        <li>
          <router-link class="blog-link" to="/blogs">Blogs</router-link>
        </li>
      </ul>
    </div>
    <ul class="flex gap-5 font-bold" v-else>
      <li>
        <router-link class="links--link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="blog-link" v-if="false" to="/blogs">Blogs</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  @apply flex items-center justify-between bg-rich-black px-6 py-2 border-b-2 border-eerie-black;
  min-height: 10vh;
}

.logo--image {
  @apply w-24;
}

.links {
  @apply sm:flex sm:gap-3 md:gap-5 lg:gap-8 items-center font-bold hidden;
}
.links--link {
  @apply hover:text-han-blue transition-colors duration-150 ease-out;
}

.blog-link {
  @apply sm:hidden border border-crimson px-4 py-1;
}

.links--link--number {
  @apply text-crimson;
}
</style>
