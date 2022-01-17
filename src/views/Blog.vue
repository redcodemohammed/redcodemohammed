<template>
  <section>
    <div class="blog">
      <h2>{{ blog.title }}</h2>
      <p class="secondary-title">{{ blog.secondaryTitle }}</p>
      <p class="publish-date">{{ blog.publishDate }}</p>

      <!-- tags -->
      <div class="tags">
        <router-link class="tag" v-for="tag in blog.tags" :key="tag" :to="'/blogs/tag/' + tag">#{{ tag }}</router-link>
      </div>
      <!-- image -->
      <img class="blog-image" v-if="blog.image !== ''" :src="blog.image" alt="Blog image" />

      <!-- content -->
      <div class="blog-content">
        <div v-for="(section, i) in blog.content" :key="i">
          <h3>{{ section.title }}</h3>
          <p v-for="(line, j) in section.body" :key="j">
            <span v-if="line.type == 'text'">{{ line.content }}</span>
            <img :src="line.content" alt="image" v-else-if="line.type == 'image'" />
            <iframe
              v-else-if="line.type == 'video'"
              :src="line.content"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <code-editor v-else-if="line.type == 'code'" :language="line.language" :code="line.content" :title="line.title"></code-editor>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import codeEditor from '../components/code-editor.vue'
export default {
  name: 'Blog',
  components: {
    codeEditor
  },
  async beforeMount() {
    const blogId = this.$route.params.id
    const blog = await import('../blogs/blog-' + blogId + '.json')
    this.blog = blog
    document.title = `Mohammed | ${this.blog.title}`
  },
  data: () => ({
    blog: {
      title: '',
      secondaryTitle: '',
      publishDate: '',
      tags: [],
      image: '',
      content: []
    }
  })
}
</script>
<style scoped>
section {
  @apply flex flex-col items-center justify-center mt-10;
}
.blog {
  @apply lg:w-1/2 p-5;
}

.blog-image {
  @apply w-full h-auto;
}

h2 {
  @apply text-4xl mb-5;
}
.secondary-title {
  @apply text-2xl text-gray-300 mb-5 font-sans;
}

.blog-content {
  @apply mt-10 text-xl;
}
.blog-content div {
  @apply my-28;
}
.blog-content div h3 {
  @apply text-crimson text-3xl;
}
.blog-content div p {
  @apply my-5;
}
.blog-content iframe {
  @apply w-full h-96;
}

.tags {
  @apply flex flex-row flex-wrap gap-5 items-center my-5;
}

.tag {
  @apply text-han-blue bg-eerie-black px-5 py-2 rounded-md;
}

.publish-date {
  @apply text-gray-300 font-sans;
}
</style>
