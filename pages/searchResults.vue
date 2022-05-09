<template>
  <div class="search-results">
    <SearchBar form="mini" />
    <b-container>
      <b-row class="results">
        <b-col v-for="(job, index) in jobList" :key="index" class="result-box">
          <div class="top-info">
            <h3>{{ job.title }}</h3>
            <h5>{{ job.company_name || 'Not listed' }}</h5>
            <h5>{{ job.country || 'Not listed' }}</h5>
            <p>
              {{ job.description }}
            </p>
          </div>
          <div class="bottom-info">
            <p class="time">
              {{ formatTime(job.date_posted) || 'Not listed' }}
            </p>
            <a :href="job.detail_url" target="_blank"
              ><button>More Info</button></a
            >
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/SearchBar.vue'

export default Vue.extend({
  name: 'SearchResults',
  components: { SearchBar },
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
    jobList() {
      return this.$store.getters.jobs
    },
  },
  methods: {
    formatTime(time) {
      if (time !== null) {
        return this.$timeAgo.format(new Date(time))
      } else {
        return null
      }
    },
  },
})
</script>
