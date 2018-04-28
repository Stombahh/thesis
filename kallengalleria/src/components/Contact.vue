<template>
<v-container fill-height>
  <v-layout class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex>
          <h2>Contact</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
      <v-flex md6 xs12 class="contact-leftside">
        <v-flex>
          <p style="padding-right:10px;">Feel free to take contact if you want to order painting or ask something.</p>
          <v-flex><v-icon style="width:20px; margin-bottom:5px;">fas fa-map-marker-alt</v-icon><span>Sipoo, Finland</span></v-flex>
          <v-flex><v-icon style="width:20px; margin-bottom:5px;">fas fa-mobile-alt</v-icon><span>+358 50 4678 732</span></v-flex>
          <v-flex><v-icon style="width:20px; margin-bottom:5px;">fas fa-envelope</v-icon><span>kalle.pitkanen@hotmail.com</span></v-flex>
        </v-flex>
      </v-flex>
      <v-flex md6 xs12 class="contact-rightside">
          <v-form v-model="valid" ref="form" lazy-validation style="width:100%;">
                  <v-text-field class="contact-field"
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    required
                    color
                    solo-inverted
                    prepend-icon="edit"


                  ></v-text-field>
                  <v-text-field class="contact-field"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    color
                    solo-inverted
                    prepend-icon="email"

                  ></v-text-field>
                  <v-text-field
                    label="Message"
                    v-model="message"
                    :rules="messageRules"
                    multi-line
                    rows="3"
                    row-height="16"
                    required
                    solo-inverted
                    color

                  ></v-text-field>
            <v-btn @click="submit" :disabled="!valid">Send</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>

  <!-- <v-layout class="layout-container" style="">
    <div class="background" style="position:fixed;">
      <v-layout>
        <v-flex md12>
          <h2>Footer</h2>
        </v-flex>
      </v-layout>
    </div>
  </v-layout> -->

    <v-footer height="60" class="pa-3">
        <!-- <v-spacer></v-spacer> -->
        <v-btn href="https://www.instagram.com/infernumart/" flat icon><v-icon large>fab fa-instagram</v-icon></v-btn>
        <v-btn href="https://www.facebook.com/kalle.pitkanen" flat icon><v-icon large>fab fa-facebook-square</v-icon></v-btn>
        <v-spacer></v-spacer>
        <div style="padding-right:15px;">&copy; {{ new Date().getFullYear() }} Kalle Pitkänen</div>
        <!-- <v-spacer></v-spacer> -->
    </v-footer>
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width: 600px) {
  .footer {
    width: 95% !important;
  }
}

@media only screen and (min-width: 1900px) {
  .footer {
    width: 55% !important;
  }
}

.background {
  width: 100%;
  /* margin: 20px; */
}

.contact-leftside {
  width: 100%;
  margin-bottom: 20px;
  /* padding-right: 10px; */
}

.contact-rightside {
  width: 100%;
}

textarea {
  color: black;
}

.primary--text {
  color: #fff !important;
  /* font-weight: bold; */
  /* font-size: 20px; */
}

/* .input-group__details ::before {
  min-height: 0px !important;
  height: 0 !important;
  padding-top: 0px !important;
} */

.input-group {
  /* width: 400px; */
  /* padding: 0; */
}
.input-group.input-group--solo {
  margin-bottom:10px;
  margin-right: 10px;
}

input .input-group--text-field input {
  height: 50px !important;
}

.footer {
  width: 70%;
  border-radius: 5px 5px 0 0;
}

</style>

<script>
import axios from 'axios';

export default {

  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          message: this.message,
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
