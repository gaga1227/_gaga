const squareFn = function(el, binding) {
  el.innerHTML = Math.pow(binding.value, 2);
};
const sqrtFn = function(el, binding) {
  el.innerHTML = Math.sqrt(binding.value);
};
export default {
  // Plugins must provide an install method that has access to the global Vue object
  install: function(Vue) {
    Vue.directive('square', squareFn);
    Vue.directive('sqrt', sqrtFn);
  }
};
