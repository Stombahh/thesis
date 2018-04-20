<template>
<v-container>
  <v-layout class="layout-container">
    <div class="background">
      <h1>Kalle Pitkänen</h1>
      <h2><i>Oil and tempera artist</i></h2>
    </div>
  </v-layout>

  <v-layout class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>About the artist</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12 lg7>
          <p>
            Born 1994 in Helsinki Finland, Kalle Pitkänen uses oil paints and tempera to create dark and surreal pictures inspired by dreams, soul-searching and death. With appreciation towards the craftsmanship and the technical know-how of the old masters like
            Rembrandt, Tizian and Rubens, Pitkänen seeks to paint atmospheric scenes that takes the viewer to another world beneath the surface of dreaming.
          </p>
          <p>
            <i>My work tends to have a melancholic appearance or ”spirit” and this is something I aim for. There is something fascinating in the unknown. Everyone at times wonder what might come after death and what waits us beyond the limits of our knowledge. After all this is only natural and in a way, I'm doing the same thing through my art.</i>
          </p>
        </v-flex>
        <v-flex md12 lg5 justify-center>
          <div class="profile-image">
            <img src="/static/img/profile.jpg">
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>

  <v-layout column class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>Gallery</h2>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md12>

        </v-flex>
      </v-layout>
    </div>
  </v-layout>

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
          <p style="padding-right:10px;">Please take contact if you want to order painting or ask something</p>
          <v-flex><v-icon style="width:20px; margin-bottom:5px;">fas fa-map-marker-alt</v-icon><span>Helsinki, Finland</span></v-flex>
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

  <v-layout column class="the-footer">
    <div class="the-footer-background">
      <v-layout>
        <v-flex md12>
          <h2>Footer</h2>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* Extra small devices (phones, 600px and down) */

@media only screen and (max-width: 600px) {
  .layout-container {
    margin-top: 20vh !important;
    width: 95% !important;
  }
  .profile-image {
    margin:0 !important;
  }

  p {
    font-size: 1.4em!important;
  }
}

@media only screen and (min-width: 1900px) {
  .layout-container {
    /* margin-top: 20vh !important; */
    width: 55% !important;
  }

  .the-footer {
    width: 55% !important;
  }

}

.container {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 3840px;
}

.layout-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 32vh;
  margin-bottom: 12vh;
  width: 70%;
  /* background: grey */
}

.profile-image {
  display: flex;
  justify-content: center;
  margin-left:30px;
}

.profile-image img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 5px;
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

/* .testi {
  justify-content:center;
  height: 200px;
} */


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

.background {
  background: rgba(33, 33, 33, 0.90);
  border-radius: 5px;
  padding: 2rem;
  /* width: 100%; */
}

.content-padding {
  padding-top: 10px;
}

.the-footer {
  width: 70%;
}

.the-footer-background {
  border-radius: 5px 0 0 5px;
  background: rgba(33, 33, 33, 0.70);
  padding: 1rem 0 1rem 2rem;
}

span {
  font-size: 1.4em;
  margin-left: 10px;
}

p {
  /* font-size: 1.4em; */
  font-size: 2.3vh;
}

h1 {
  font-weight: 300;
  font-size: 8vh;
  margin-bottom: 20px;
}

h2 {
  font-weight: 300;
  font-size: 5vh;
}

h3 {
  font-weight: 300;
  font-size: 1.6em;
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
