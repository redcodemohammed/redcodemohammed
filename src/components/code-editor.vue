<template>
  <div class="editor-container">
    <h3>{{ title }}</h3>
    <prism-editor class="my-editor" v-model="code" :highlight="highlighter" readonly line-numbers></prism-editor>
    <button @click="copy" class="copy-button">Copy</button>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'

import 'prism-themes/themes/prism-nord.css' // import syntax highlighting styles

export default {
  props: ['title', 'code', 'language'],
  components: {
    PrismEditor
  },
  methods: {
    highlighter(code) {
      const lang = this.language == 'javascript' ? languages.js : this.language == 'css' ? languages.css : languages.html
      return highlight(code, lang) // languages.<insert language> to return html with markup
    },
    copy() {
      const clipboard = navigator.clipboard
      clipboard.writeText(this.code)
    }
  }
}
</script>

<style>
.editor-container {
  @apply relative;
}
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
.copy-button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 16px;
  line-height: 1.5;
}
</style>
