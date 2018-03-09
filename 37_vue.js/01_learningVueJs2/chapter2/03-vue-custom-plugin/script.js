import Vue from 'vue/dist/vue.js';
import VueMathPlugin from './VueMathPlugin.js';

// Register custom plugin
Vue.use(VueMathPlugin);

window.App = new Vue({
  el: '#app',
  data: { item: 49 }
});