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
          <vue-picture-swipe :items="[{
            src: 'static/img/deep-slumber-compressed.jpg',
            thumbnail: 'static/img/deep-slumber-compressed.jpg',
            w: 2723,
            h: 3498,
            title: 'dsgdsg',
          },
          {
            src: 'static/img/drowning-for-eternity-comp.jpg',
            thumbnail: 'static/img/drowning-for-eternity-comp.jpg',
            w: 2391,
            h: 3403,
          },
          {
            src: 'static/img/long-lost-comp.jpg',
            thumbnail: 'static/img/long-lost-comp.jpg',
            w: 1905,
            h: 3676,
          },
          {
            src: 'static/img/untitled-face-comp.jpg',
            thumbnail: 'static/img/untitled-face-comp.jpg',
            w: 2868,
            h: 3285,
          },
          {
            src: 'static/img/Torso-comp.jpg',
            thumbnail: 'static/img/Torso-comp.jpg',
            w: 2352,
            h: 2914,
          },
          {
            src: 'static/img/mask-comp.jpg',
            thumbnail: 'static/img/mask-comp.jpg',
            w: 2742,
            h: 3844,
          },
          {
            src: 'static/img/Bleeding-Luna-comp.jpg',
            thumbnail: 'static/img/Bleeding-Luna-comp.jpg',
            w: 2378,
            h: 3956,
          },
          ]" :options="{shareButtons:[
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
            {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
            {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'}]}">
          </vue-picture-swipe>
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

// export default {
//   data() {
//     return {
//       items: [{
//         src: 'static/img/deep-slumber-compressed.jpg',
//         thumbnail: 'static/img/deep-slumber-compressed.jpg',
//         w: 2723,
//         h: 3498,
//       },
//       {
//         src: 'static/img/drowning-for-eternity-comp.jpg',
//         thumbnail: 'static/img/drowning-for-eternity-comp.jpg',
//         w: 2391,
//         h: 3403,
//       },
//       {
//         src: 'static/img/long-lost-comp.jpg',
//         thumbnail: 'static/img/long-lost-comp.jpg',
//         w: 1905,
//         h: 3676,
//       },
//       {
//         src: 'static/img/untitled-face-comp.jpg',
//         thumbnail: 'static/img/untitled-face-comp.jpg',
//         w: 2868,
//         h: 3285,
//       },
//       {
//         src: 'static/img/untitled-torso-comp.jpg',
//         thumbnail: 'static/img/untitled-torso-comp.jpg',
//         w: 2834,
//         h: 3497,
//       },
//       {
//         src: 'static/img/mask-comp.jpg',
//         thumbnail: 'static/img/mask-comp.jpg',
//         w: 2742,
//         h: 3844,
//       },
//       ] };
//   },
// };
</script>
