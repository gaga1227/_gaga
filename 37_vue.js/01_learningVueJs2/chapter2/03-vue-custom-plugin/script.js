import Vue from 'vue/dist/vue.js';
import VueMathPlugin from './VueMathPlugin.js';

// Register custom plugin
Vue.use(VueMathPlugin);

// Register custom plugin from inline function
Vue.use(function customInlinePlugin(Vue) {
  Vue.directive('double', function(el, binding) {
    el.innerHTML = binding.value * 2;
  });
});

window.App = new Vue({
  el: '#app',
  data: { item: 49 }
});