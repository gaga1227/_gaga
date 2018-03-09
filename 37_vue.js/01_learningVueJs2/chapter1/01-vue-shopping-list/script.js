const data = {
  items: [
    { text: 'Bananas', checked: true },
    { text: 'Apples', checked: false }
  ],
  title: 'My Shopping List',
  newItem: ''
};

(function(){
  'use strict';

  new Vue({
    el: '#app',
    data: data,
    methods: {
      addItem: function () {
        const text = this.newItem.trim();
        if (text) {
          this.items.push({
            text: text,
            checked: false
          });
          this.newItem = '';
        }
      }
    }
  });
})();
