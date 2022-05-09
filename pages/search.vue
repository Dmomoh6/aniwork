<template>
  <div class="search-page">
    <SearchBar />
  </div>
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'

export default Vue.extend({
  components: { SearchBar },
  name: 'SearchPage',
  layout: 'stripedLayout',
  head() {
    return {
      title: 'Aniwork',
    }
  },
  computed: {
    mobileWidth() {
      return this.$store.getters.width < 768
    },
    tabletWidth() {
      return this.$store.getters.width < 1200
    },
  },
})
</script>
