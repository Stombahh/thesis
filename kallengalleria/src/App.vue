<template>
<v-app dark>

  <!-- start: navbar -->
  <v-toolbar app :clipped-left="clipped">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn> -->
    <!-- <v-btn icon @click.stop="clipped = !clipped">
      <v-icon>web</v-icon>
    </v-btn> -->
    <!-- <v-btn icon @click.stop="fixed = !fixed">
      <v-icon>remove</v-icon>
    </v-btn> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
   <v-btn flat>Biography</v-btn>
   <v-btn flat>Gallery</v-btn>
   <v-btn flat>Contact</v-btn>
 </v-toolbar-items>
  </v-toolbar>
  <!-- end: navbar -->

  <!-- start: content -->
  <v-content>
    <router-view/>
  </v-content>
  <!-- end: content -->

  <!-- start: footer -->
  <!-- <v-footer :fixed="fixed" app>
    <span>&copy; 2018</span>
  </v-footer> -->
  <!-- end: footer -->

</v-app>
</template>

<style>

.content {
  background-image: url(/static/img/bg-image.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: 'EB Garamond', serif;
}

/* #app {
  font-family: 'Caveat Brush', cursive;
} */

/* h1 {
  font-family: 'Caveat Brush', cursive;
  font-size: 50pt ;
} */

.btn--flat {
  font-family: 'EB Garamond', serif;
  font-size:18pt;
}

.toolbar__title {
  font-family: 'EB Garamond', serif;
  font-size:24pt;
}

</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Kalle Pitkänen',
    };
  },
  name: 'App',
};
</script>
