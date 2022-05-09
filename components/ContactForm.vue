<template>
  <div class="form-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Full Name" label-for="fullname">
        <b-form-input
          id="fullname"
          v-model="form.fullname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email address" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Message" label-for="message">
        <b-form-textarea
          id="message"
          v-model="form.message"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button block type="submit">Send Message</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        message: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.fullname = ''
      this.form.email = ''
      this.form.message = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
