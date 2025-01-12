<template>
  <div class="search-results">
    <SearchBar form="mini" />
    <b-container>
      <b-row class="results">
   
        <b-col v-for="(job, index) in jobList" :key="index" class="result-box">
          <div class="top-info">
            <h3>{{ job.job_title }}</h3>
            <h5>{{ job.employer_name || "Not listed" }}</h5>
            <h5>{{ job.job_country || "Not listed" }}</h5>
            <p>
              <short-text :text="job.job_description" :target="150" />
            </p>
          </div>
          <div class="bottom-info">
            <p class="time">
              {{ job.job_posted_at || "Not listed" }}
            </p>
            <a :href="job.apply_options[0].apply_link" target="_blank"
              ><button>More Info</button></a
            >
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import SearchBar from "~/components/SearchBar.vue";

export default Vue.extend({
  name: "SearchResults",
  components: { SearchBar },
  layout: "stripedLayout",
  head() {
    return {
      title: "Aniwork",
    };
  },
  computed: {
    mobileWidth() {
      return this.$store.getters.width < 768;
    },
    tabletWidth() {
      return this.$store.getters.width < 1200;
    },
    jobList() {
      return this.$store.getters.jobs;
    },
  },
  methods: {
    formatTime(time) {
      if (time !== null) {
        return this.$timeAgo.format(new Date(time));
      } else {
        return null;
      }
    },
  },
});
</script>
