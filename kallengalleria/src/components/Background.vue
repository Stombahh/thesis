<template>
<v-container>
  <v-layout class="layout-container">
    <div class="background">
      <h1>About the artist</h1>
      <h2><i>Oil and tempera artist</i></h2>
    </div>
  </v-layout>
  <v-layout column class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>About the artist</h2>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md8>
          <p>
            Born 1994 in Helsinki Finland, Kalle Pitkänen uses oil paints and tempera to create dark and surreal pictures inspired by dreams, soul-searching and death. With appreciation towards the craftsmanship and the technical know-how of the old masters like
            Rembrandt, Tizian and Rubens, Pitkänen seeks to paint atmospheric scenes that takes the viewer to another world beneath the surface of dreaming.
          </p>
          <p>
            <i>My work tends to have a melancholic appearance or ”spirit” and this is something I aim for. There is something fascinating in the unknown. Everyone at times wonder what might come after death and what waits us beyond the limits of our knowledge. After all this is only natural and in a way, I'm doing the same thing through my art.</i>
          </p>
        </v-flex>
        <v-flex md4>testi</v-flex>
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
  <v-layout column class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>Contact</h2>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md12>
          <p>yhteystietoja</p>
        </v-flex>
      </v-layout>
      <v-layout md12>
          <v-form md12 v-model="valid" ref="form" lazy-validation style="width:100%;">
            <v-layout md12>
              <v-layout md6>
                <v-flex >
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
                </v-flex>
              </v-layout>
              <v-layout md6>
                <v-flex>
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
                </v-flex>
              </v-layout>
            </v-layout>
            <v-btn @click="submit" :disabled="!valid">Send</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-layout>
    </div>
  </v-layout>
  <v-layout column class="dooter">
    <div class="background">
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
  }
}

.container {
  /* padding: 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.layout-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 32vh;
  margin-bottom: 12vh;
  width: 70%;
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
  width: 400px;
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
  background: rgba(33, 33, 33, 0.70);
  border-radius: 10px;
  padding: 2rem;
}

.content-padding {
  padding-top: 10px;
}

.dooter {
  width: 70%;
}

p {
  font-size: 1.4em;
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
