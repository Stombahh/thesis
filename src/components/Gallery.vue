<template>
<v-container fill-height>
  <v-layout class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>Gallery</h2>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md12>
          <vue-picture-swipe :items="items"></vue-picture-swipe>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

@media only screen and (max-width: 600px) {
  .my-gallery img {
    width:96%!important;
    height:96%!important;
  }
  .my-gallery {
    padding:10px 0 0 0!important;
  }
}

.background {
  /* width: 90%; */
}

.my-gallery {
  padding:10px 0 0 35px;
}
 .my-gallery img {
   height: 350px;
   margin-top:2px;
   border: 1px solid rgb(60, 60, 60);
}


.my-gallery img:hover {
  filter: brightness(60%);

}

.my-gallery a {
  color: #fff;

}

</style>

<script>

export default {
  data() {
    return {
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
