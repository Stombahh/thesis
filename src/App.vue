<template>
<v-app dark>
  <v-navigation-drawer
      clipped
      fixed
      width="190"
      v-model="drawer"
      app
      temporary="true"
    >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-btn :to="{ name: 'biography'}" flat right>Biography</v-btn>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-btn :to="{ name: 'gallery'}" flat right>Gallery</v-btn>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-btn :to="{ name: 'contact'}" flat right>Contact</v-btn>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <!-- start: navbar -->
  <v-toolbar app :clipped-left="clipped">
    <v-btn :to="{ name: 'mainpage'}" flat v-text="title" class="toolbar__title"></v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
   <v-btn :to="{ name: 'biography'}" flat>Biography</v-btn>
   <v-btn :to="{ name: 'gallery'}" flat>Gallery</v-btn>
   <v-btn :to="{ name: 'contact'}" flat>Contact</v-btn>
 </v-toolbar-items>
 <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
  <!-- end: navbar -->


  <!-- start: content -->
  <v-content>
    <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
       <router-view/>
    </transition>
  </v-content>
  <!-- end: content -->

  <v-footer height="60" style="bottom: 0; position: fixed;" v-if="['contact'].includes($route.name)" >
    <v-btn href="https://www.instagram.com/kallepitkanen/" flat icon><v-icon large>fab fa-instagram</v-icon></v-btn>
    <v-spacer></v-spacer>
    <div style="padding-right:15px;">&copy; {{ new Date().getFullYear() }} Kalle Pitkänen</div>
  </v-footer>

</v-app>
</template>

<style>
 
/* @import '/node_modules/vue2-scrollbar/style/vue2-scrollbar.css'; */

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  /* body {
    background: rgb(233, 233, 233);
    font-family:Arial, Helvetica, sans-serif;
  } */
  html, body {
    /* height: calc(100% - 50px); */
  }

  #app {
    /* margin: 50px auto 0 auto; 
    height: calc(60% - 50px);  */
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

.content {
  background-image: url(/static/img/bg-image3.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: 'EB Garamond', serif;
}

/* .content--wrap {
  margin-top: 20px;
} */

@media only screen and (max-width: 600px) {
  .layout-container {
    /* margin-top: 20% !important; */
    width: 95% !important;
    line-height: 1.2;

    justify-content: center !important;
    align-items: flex-start !important; 
  }

  .content {
    margin-top: 20px;
  }

  .background {
    padding: 1em!important;
  }

  .page {
    /* margin: -50px 0 0 0; */
    /* position:fixed; */
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
    width: 56% !important;
  }
}

.page {
  position: fixed;
}

html {
  overflow: hidden !important;
}

/* .layout {
  height:0;
} */

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
  align-items: center;
  width: 70%;
}

.background {
  background: rgba(33, 33, 33, 0.90);
  border-radius: 5px;
  padding: 2rem;
  /* margin: 10px 0 10px 0; */
}

.content-padding {
  padding-top: 10px;
}

.btn--flat {
  font-family: 'EB Garamond', serif;
  font-size:18pt!important;
}

.toolbar__title {
  font-family: 'EB Garamond', serif;
  /* font-size:24pt!important; */
  text-transform: none;
  margin-left: 20px!important;
  /* text-rendering:  */
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
export default {
  data() {
    return {
      drawer: false,
      title: 'Kalle Pitkänen',
    };
  },
  name: 'App',
};
</script>
