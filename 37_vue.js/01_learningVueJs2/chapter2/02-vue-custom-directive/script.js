;(function() {
  'use strict';

  // Register custom vue directive
  // - directive can be defined as a single function, equivalent to update() fn
  // - or can be defined as object with bind(), update(), unbind() fns
  Vue.directive('square', function(el, binding) {
    // use directive for low-level direct DOM manipulations
    el.innerHTML = Math.pow(binding.value, 2);
  });

  new Vue({
    el: '#app',
    data: { item: 42 }
  });
})();