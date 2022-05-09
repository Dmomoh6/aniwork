<template>
  <transition>
    <b-container class="layout" fluid>
      <b-container>
        <b-navbar toggleable="md">
          <b-navbar-brand>
            <nuxt-link to="/"
              ><b-img
                v-if="!mobileWidth"
                :src="
                  theme === '' ? '/images/logo.svg' : '/images/logo-dark.svg'
                "
              /><b-img
                v-else
                :src="
                  theme === '' ? '/images/icon.svg' : '/images/icon-dark.svg'
                "
              />
            </nuxt-link>
          </b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template :default="{ expanded }"> </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item
                :class="path === '/search' ? 'active' : ''"
                :to="{ name: 'search' }"
                >Job Search</b-nav-item
              >
              <b-nav-item @click="navigation('about-section')"
                >About Us</b-nav-item
              >
              <b-nav-item @click="navigation('contact-section')"
                >Reach Out</b-nav-item
              >
              <b-nav-item @click="toggleTheme"
                ><img
                  v-if="!mobileWidth"
                  :src="theme === '' ? '/images/dark.svg' : '/images/light.svg'"
                />
                <template v-else>Switch Theme</template></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
      <nuxt />
      <b-container class="footer">
        © Copyright Aniwork 2022. Designed and developed by Emmanuel Momoh
      </b-container>
    </b-container>
  </transition>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      theme: '',
    }
  },
  computed: {
    mobileWidth() {
      return this.$store.getters.width < 768
    },
    path() {
      return this.$route.path
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.resize)
  },
  mounted() {
    this.resize()
    const localTheme = localStorage.getItem('theme')
    this.theme = localTheme

    document.documentElement.setAttribute('data-theme', localTheme)
  },

  methods: {
    resize() {
      if (process.client) {
        this.$store.dispatch('changeWidth', window.innerWidth)
      }
    },
    toggleTheme() {
      this.theme = this.theme === 'darkMode' ? '' : 'darkMode'
      document.documentElement.setAttribute('data-theme', this.theme)

      this.$store.commit('setTheme', this.theme)

      localStorage.setItem('theme', this.theme)
    },
    navigation(option) {
      if (this.$route.name === 'index') {
        window.scrollTo({
          top: document.getElementById(option).offsetTop,
          behavior: 'smooth',
        })
      } else {
        this.$router.push({ name: 'index' })
        setTimeout(() => {
          window.scrollTo({
            top: document.getElementById(option).offsetTop,
            behavior: 'smooth',
          })
        }, 50)
      }
    },
  },
}
</script>
