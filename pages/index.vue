<template>
  <div class="homepage">
    <b-container class="d-flex">
      <b-row class="title">
        <b-col align-self="start" class="find">
          Find your <span class="orange">Dream Job</span> and Take the Next Step
          in your <span class="orange">Career</span>
          <b-button class="d-block button" @click="toSearch"
            >Search Listings</b-button
          >
        </b-col>
      </b-row>
      <div v-if="!mobileWidth" style="margin-top: 30px">
        <b-row align-v="baseline" class="float-right">
          <b-img v-if="!tabletWidth" src="/images/image4.png" />
          <b-img class="vertical-image second" src="/images/image3.png" />
        </b-row>

        <b-row align-v="baseline" class="float-right">
          <b-img v-if="!tabletWidth" src="/images/image2.png" />
          <b-img class="second" src="/images/image1.png" />
        </b-row>
      </div>
    </b-container>
    <b-container id="about-section" class="first" fluid>
      <b-container class="d-flex first-container">
        <b-row class="about-section">
          <b-col class="who-we-are">
            <h3 class="header">WHO WE ARE</h3>
            <p class="text">
              We bridge the gap between employers and members of the labour
              market. <br /><br />
              We partner with organizations to ensure that the best job
              oppourtunities are made available to our users.
            </p>
          </b-col>

          <b-col v-if="!tabletWidth">
            <div class="animation">
              <video autoplay muted loop>
                <source src="/mp4/animation.mp4" type="video/mp4" />
              </video>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container id="contact-section" class="d-flex">
      <b-row class="contact-section">
        <b-col align-self="start" class="contact-form">
          <ContactForm />
        </b-col>
        <b-col class="reach-out">
          <h3 class="header">REACH OUT TO US</h3>
          <p class="text">
            We’re just one message away and are elated to hear from you.
          </p>
          <ul class="social-icons">
            <li>
              <FontAwesomeIcon
                class="fa-2x"
                :icon="['fab', 'instagram-square']"
              />
            </li>
            <li>
              <FontAwesomeIcon
                class="fa-2x"
                :icon="['fab', 'facebook-square']"
              />
            </li>
            <li>
              <FontAwesomeIcon
                class="fa-2x"
                :icon="['fab', 'twitter-square']"
              />
            </li>
            <li>
              <FontAwesomeIcon class="fa-2x" :icon="['fab', 'linkedin']" />
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'defaultLayout',
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
  methods: {
    toSearch() {
      this.$router.push('/search')
    },
  },
})
</script>
