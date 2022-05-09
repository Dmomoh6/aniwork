<template>
  <div :class="form === 'large' ? 'search-bar' : 'search-bar-mini'">
    <div class="search-input">
      <img v-if="theme === 'darkMode'" src="~/assets/svg/search-dark.svg" />
      <img v-else src="~/assets/svg/search.svg" />
      <input
        v-model="query"
        placeholder="Job Description, Keyword or Company"
      />
    </div>

    <div class="search-button">
      <button @click="search">Find Jobs</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: String,
      default: "large",
    },
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
  },
  methods: {
    async search() {
      if (this.query !== "") {
        this.$store.dispatch("changeLoading", true);
        const jobs = await this.$jobSearchApi.getJobs(this.query);
        this.$store.dispatch("changeJobs", jobs);
        this.$store.dispatch("changeLoading", false);

        this.$router.push({
          name: "searchResults",
        });
      } else {
        alert("Please enter a Job Description or Keyword");
      }
    },
  },
};
</script>
