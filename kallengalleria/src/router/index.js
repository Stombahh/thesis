import Vue from 'vue';
import Router from 'vue-router';
import Background from '@/components/Background';
import Parallax from '@/components/Parallax';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Background',
      component: Background,
    },
    {
      path: '/',
      name: 'Parallax',
      component: Parallax,
    },
  ],
});
