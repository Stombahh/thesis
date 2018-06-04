<template>
<v-container fill-height>
  <v-layout class="layout-container">
    <div class="background">
      <v-layout>
        <v-flex md12>
          <h2>Gallery</h2>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex md12 justify-center>
          <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
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

figure {
  display:inline!important;
}

.background {
  width: 100%;
}

.my-gallery {
  padding:10px 0 0 0;
  align-items: center;
}
 .my-gallery img {
   height: 350px;
   margin: 0 1px 0 1px;
   border: 1px solid rgb(60, 60, 60);
}

.my-gallery img:hover {
  filter: brightness(60%);
}

.my-gallery a {
  color: #fff;
}

.pswp__caption__center {
  font-size: 14pt!important;
  text-align: center!important;
}

</style>

<script>

export default {
  data() {
    return {
      slide1: [{
        src: 'static/img/deep-slumber-comp.jpg',
        msrc: 'static/img/deep-slumber-comp.jpg',
        w: 2723,
        h: 3498,
        title: 'Deep slumber - Oil on wood panel - 47x60cm - 2017',
        alt: 'Deep slumber - Oil on wood panel',
      },
      {
        src: 'static/img/Torso-comp.jpg',
        msrc: 'static/img/Torso-comp.jpg',
        w: 2834,
        h: 3497,
        title: 'Torso - Oil on canvas - 100x81cm',
        alt: 'Torso - Oil on canvas',
      },
      {
        src: 'static/img/mask-comp.jpg',
        msrc: 'static/img/mask-comp.jpg',
        w: 2742,
        h: 3844,
        title: 'Mask - Oil on canvas - 70x50cm',
        alt: 'Mask - Oil on canvas',
      },
      {
        src: 'static/img/untitled-face-comp.jpg',
        msrc: 'static/img/untitled-face-comp.jpg',
        w: 2868,
        h: 3285,
        title: 'Face - Oil on canvas - 73x60cm',
        alt: 'Face - Oin on canvas',
      },
      {
        src: 'static/img/drowning-for-eternity-comp.jpg',
        msrc: 'static/img/drowning-for-eternity-comp.jpg',
        w: 2391,
        h: 3403,
        title: 'Drowning for Eternity - Oil on canvas - 70x50cm',
        alt: 'Drowning for Eternity - Oil on canvas',
      },
      {
        src: 'static/img/long-lost-comp.jpg',
        msrc: 'static/img/long-lost-comp.jpg',
        w: 1905,
        h: 3676,
        title: 'Long-lost - Oil on canvas - 73x41cm',
        alt: 'Long-lost - Oil on canvas',
      },
      {
        src: 'static/img/Bleeding-Luna-comp.jpg',
        msrc: 'static/img/Bleeding-Luna-comp.jpg',
        w: 1189,
        h: 1978,
        title: 'Bleeding Luna - Oil on canvas',
        alt: 'Bleeding Luna',
      },
      ] };
  },
};
</script>
