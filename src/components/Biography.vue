<template>
<v-container fill-height class="page">
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
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 600px) {
  .footer {
    width: 95% !important;
  }

  /* .page {
    margin: 0 0 0 0;
    position: fixed;
  } */
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

.background {
  /* width: 90%; */
}

</style>

<script>
</script>
