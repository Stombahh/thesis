<template>
  <v-container row-wrap>
    <v-layout>
    <v-flex flex md1></v-flex>
    <v-flex flex md10>
    <v-layout class="elementtest1">
        <v-flex md3></v-flex>
        <v-flex md6 justify-center="true" align-content-center="true" class="title">
          <h1>Kallen Galleria</h1>
          <h2>Oil and tempera artist</h2>
        </v-flex>
        <v-flex md3></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex lg1></v-flex>
      <v-flex class="container">
        <h2>About the artist</h2>
        <v-layout>
          <v-flex md8>
            <div class="content-padding">
              <p>
                Born 1994 in Helsinki Finland, Kalle Pitkänen uses oil paints and tempera to create dark and surreal pictures inspired by dreams, soul-searching and death. With appreciation towards the craftsmanship and the technical know-how of the old masters like Rembrandt, Tizian and Rubens, Pitkänen seeks to paint atmospheric scenes that takes the viewer to another world beneath the surface of dreaming.
              </p>
              <p>
                <i>My work tends to have a melancholic appearance or ”spirit” and this is something I aim for. There is something fascinating in the unknown. Everyone at times wonder what might come after death and what waits us beyond the limits of our knowledge. After all this is only natural and in a way, I'm doing the same thing through my art.</i>
              </p>
            </div>
          </v-flex>
          <v-flex md4>testi</v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg1></v-flex>
    </v-layout>

    <v-layout class="elementtest2">
      <!-- <v-flex md1></v-flex> -->
      <v-flex xs10 class="container">
        <h2>Gallery</h2>

      </v-flex>
      <!-- <v-flex md1></v-flex> -->
    </v-layout>

    <v-layout class="elementtest2">
      <!-- <v-flex md1></v-flex> -->
      <v-flex class="container">
        <h2>Contact</h2>
        <v-layout row wrap>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout column>
            <v-flex md6>
              <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules"
                required
                color
                box
              ></v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                color
                box
              ></v-text-field>
            </v-flex>
            <!-- <v-flex m1></v-flex> -->
            <v-flex md6>
              <v-text-field
                label="Message"
                v-model="message"
                :rules="messageRules"
                multi-line
                rows="4"
                required
                box
                color
              ></v-text-field>
            </v-flex>
            </v-layout>
            <v-btn
              @click="submit"
              :disabled="!valid"
            >Send</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-layout>
      </v-flex>
      <!-- <v-flex md1></v-flex> -->
    </v-layout>

    <v-layout class="elementtest2">
      <v-flex md1></v-flex>
      <v-flex class="container">
        <span>
          &copy; 2018
        </span>
      </v-flex>
      <v-flex md1></v-flex>
    </v-layout>
    </v-flex>
    <v-flex flex md1></v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>


/* .container {
  width: 80%;
} */

section {
  /* margin-bottom: 500px;
  margin-top: 600px;
  /* z-index: 2; */
}

/* .flex title {
  width: 40%;
} */


v-card-title {
  padding: 20px;
  font-size:5vh;
}

v-text-field {
  margin:10px;
}

.input-group {
  width: 100%;
}

.label {
  font-size: 20px;
}

.primary--text {
  color: #fff !important;
  /* font-weight: bold; */
  /* font-size: 20px; */
}

.input-group label {
  font-size: 30px !important;
}

.flex.container {
  background:rgba(33, 33, 33, 0.70);
  padding:20px;
}

.title {
  background:rgba(33, 33, 33, 0.70);
  border-radius:10px;
  padding:2rem;
}

.content-padding {
  padding-top:10px;
}

.elementtest1 {
  margin-top:25%;
  text-align: center;
  /* height: 80%; */
  /* height:1000px; */
}

.elementtest2 {
  /* padding:30px; */
  margin-top:50%;
  border-radius:10px;
  /* background:rgba(33, 33, 33, 0.70); */
  /* height:200px; */

}
p {
  font-size: 1.4em;
}

h1 {
  font-weight: 300;
  font-size: 8vh;
  margin-bottom:20px;
}

h2 {
  font-weight: 300;
  font-size:5vh;
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
