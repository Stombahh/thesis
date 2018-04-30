import Vue from 'vue';
import Router from 'vue-router';
import Mainpage from '@/components/Mainpage';
import Biography from '@/components/Biography';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: Mainpage,
    },
    {
      path: '/biography',
      name: 'biography',
      component: Biography,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
