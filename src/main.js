// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VParallax,
  VTextField,
  VToolbar,
  transitions,
} from 'vuetify';
import VuePreview from 'vue-preview';

import VueScroll from 'vue2-scrollbar';

import App from './App';
import router from './router';

import '../node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css';

import '../node_modules/vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VForm,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VParallax,
    VTextField,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

// Vue.component('vue-preview', VuePreview);
Vue.use(VuePreview, {
  barsSize: { top: 0, bottom: 0 },
  // shareEl: false,
});

Vue.use(VueScroll);

// Vue.use(Slick, {

//   data() {
//     return {
//       slickOptions: {
//         slidesToShow: 3,
//         // Any other options that can be got from plugin documentation
//       },
//     };
//   },

//   // All slick methods can be used too, example here
//   methods: {
//     next() {
//       this.$refs.slick.next();
//     },

//     prev() {
//       this.$refs.slick.prev();
//     },

//     reInit() {
//       // Helpful if you have to deal with v-for to update dynamic lists
//       this.$nextTick(() => {
//         this.$refs.slick.reSlick();
//       });
//     },
//   },
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
