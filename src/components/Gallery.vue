<template>
<v-container fill-height class="page">
  <v-layout class="layout-container">
    <div class="background gallery" style="height: 85vh; padding: 2rem 0.5rem 2rem 2rem">
       <v-layout>
        <v-flex md12>
          <h2>Gallery</h2>
        </v-flex>
      </v-layout>
      <!-- <div style="max-height:90%; margin-top: -65%; overflow-y: scroll;"> -->
      <v-layout justify-center style="height: unset!important;">
        <v-flex md12 justify-center>
          <vue-scrollbar classes="my-scrollbar" ref="Scrollbar" style="overflow:hidden;">
            <div class="scroll-me">
          <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
            </div>
          </vue-scrollbar>
        </v-flex>
      </v-layout>
      <!-- </div> -->
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
    padding:10px 0 0 10px!important;
  }

    .layout-container {
    /* margin-top: 20vh !important; */
    width: 95% !important;
  }

.my-scrollbar{
  height: 40em !important;
}
}

.container.fill-height .layout {
  height:unset!important;
}

figure {
  display:inline!important;
}

.background {
  overflow:hidden;
  width: 100%;
}

.my-gallery {
  padding:10px 0 0 0px;
}

 .my-gallery img {
   height: 350px !important;
   /* height: 25em; */
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

.page {
    position: fixed;
    /* width: inherit; */
    /* margin:-50px 0; */
  }

  html {
    overflow:  hidden !important;
  }

  .router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

.my-scrollbar{
  width: 100%;
  min-width: 300px;
  height: 50em;
  background: rgba(33, 33, 33, 0.00) !important;
}

.scroll-me{
  min-width: 100px;
}


</style>

<script>

import VueScrollbar from 'vue2-scrollbar';

import 'vue2-scrollbar/dist/style/vue2-scrollbar.css';

export default {

  components: { VueScrollbar },

  data() {
    return {
      slide1: [
        {
          src: 'static/img/deep-slumber-comp.jpg',
          msrc: 'static/img/deep-slumber-comp.jpg',
          w: 1749,
          h: 1362,
          title: 'Deep slumber - Oil on wood panel - 47 x 60cm - 2017',
          alt: 'Deep slumber - Oil on wood panel',
        },
        {
          src: 'static/img/drowning-for-eternity-comp.jpg',
          msrc: 'static/img/drowning-for-eternity-comp.jpg',
          w: 1196,
          h: 1702,
          title: 'Drowning for Eternity - Oil on canvas - 70 x 50cm - 2017',
          alt: 'Drowning for Eternity - Oil on canvas',
        },
        {
          src: 'static/img/untitled-face-comp.jpg',
          msrc: 'static/img/untitled-face-comp.jpg',
          w: 2868,
          h: 3285,
          title: 'Untitled - Oil on canvas - 73 x 60cm - 2018',
          alt: 'Untitled - Oil on canvas',
        },
        {
          src: 'static/img/Torso-comp.jpg',
          msrc: 'static/img/Torso-comp.jpg',
          w: 2834,
          h: 3497,
          title: 'Untitled - Oil on canvas - 100 x 81cm - 2018',
          alt: 'Untitled - Oil on canvas',
        },
        {
          src: 'static/img/long-lost-comp.jpg',
          msrc: 'static/img/long-lost-comp.jpg',
          w: 1905,
          h: 3676,
          title: 'Long-lost - Oil on canvas - 73 x 41cm - 2018',
          alt: 'Long-lost - Oil on canvas',
        },
        {
          src: 'static/img/Bleeding-Luna-comp.jpg',
          msrc: 'static/img/Bleeding-Luna-comp.jpg',
          w: 1189,
          h: 1978,
          title: 'Bleeding Luna - Oil on canvas - 2018',
          alt: 'Bleeding Luna - Oil on canvas',
        },
        {
          src: 'static/img/broken-dancer-comp.jpg',
          msrc: 'static/img/broken-dancer-comp.jpg',
          w: 1439,
          h: 1747,
          title: 'Broken dancer - Oil on canvas - 100 x 81cm - 2018',
          alt: 'Broken dancer - Oil on canvas',
        },
        {
          src: 'static/img/dreamer-comp.jpg',
          msrc: 'static/img/dreamer-comp.jpg',
          w: 1004,
          h: 1178,
          title: 'Dreamer - Oil on canvas - 100 x 83cm - 2018',
          alt: 'Dreamer - Oil on canvas',
        },
        {
          src: 'static/img/eclipsim-comp.jpg',
          msrc: 'static/img/eclipsim-comp.jpg',
          w: 1429,
          h: 1827,
          title: 'Eclipsim - Oil on canvas - 76 x 60cm - 2018',
          alt: 'Eclipsim - Oil on canvas',
        },
        {
          src: 'static/img/Sielunpalo.jpg',
          msrc: 'static/img/Sielunpalo.jpg',
          w: 1080,
          h: 902,
          title: 'Soul aflame - Oil on canvas - 100 x 120 cm - 2019',
          alt: 'Soul aflame - Oil on canvas',
        },
        {
          src: 'static/img/Sisters.jpg',
          msrc: 'static/img/Sisters.jpg',
          w: 1150,
          h: 840,
          title: 'Sisters - Oil on canvas - 68 x 86 cm - 2019',
          alt: 'Sisters - Oil on canvas',
        },
        {
          src: 'static/img/Torso.jpg',
          msrc: 'static/img/Torso.jpg',
          w: 1080,
          h: 1481,
          title: 'Torso - Egg tempera and oil on canvas - 42 x 30 cm - 2019',
          alt: 'Torso - Egg tempera and oil on canvas',
        },
        {
          src: 'static/img/The Fall.jpg',
          msrc: 'static/img/The Fall.jpg',
          w: 1080,
          h: 1317,
          title: 'The Fall - Oil on canvas - 68 x 86 cm - 2019',
          alt: 'The Fall - Oil on canvas',
        },
        {
          src: 'static/img/old-man-and-the-moon-comp.jpg',
          msrc: 'static/img/old-man-and-the-moon-comp.jpg',
          w: 1356,
          h: 1695,
          title: 'Old man and the moon - Oil on copper - 24 x 17cm - 2018',
          alt: 'Old man and the moon - Oil on copper',
        },
      ],
    };
  },
};
</script>
