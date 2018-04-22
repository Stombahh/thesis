<template>
<v-container fill-height>
  <v-layout class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>Gallery</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md12>
          <vue-picture-swipe :items="items" :shareEl="false"></vue-picture-swipe>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
 .my-gallery img {
  width:20%;
  height: 20%;
}

.my-gallery img:hover {
  opacity: 0.4;
  background-color: black;
}

.my-gallery a {
  color: #fff;
}

</style>


<script>

export default {
  data() {
    return {
      // shareButtons: [
      //   { id: 'download', download: false },
      // ],
      items: [{
        src: 'static/img/deep-slumber.jpg',
        thumbnail: 'static/img/deep-slumber.jpg',
        w: 2723,
        h: 3498,
      },
      {
        src: 'static/img/drowning-for-eternity.jpg',
        thumbnail: 'static/img/drowning-for-eternity.jpg',
        w: 2391,
        h: 3403,
      },
      {
        src: 'static/img/long-lost.jpg',
        thumbnail: 'static/img/long-lost.jpg',
        w: 1905,
        h: 3676,
      },
      {
        src: 'static/img/untitled-face.jpg',
        thumbnail: 'static/img/untitled-face.jpg',
        w: 2868,
        h: 3285,
      },
      {
        src: 'static/img/untitled-torso.jpg',
        thumbnail: 'static/img/untitled-torso.jpg',
        w: 2834,
        h: 3497,
      },
      {
        src: 'static/img/mask.jpg',
        thumbnail: 'static/img/mask.jpg',
        w: 2742,
        h: 3844,
      },
      ] };
  },
};
</script>
