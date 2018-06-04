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

import App from './App';
import router from './router';


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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
