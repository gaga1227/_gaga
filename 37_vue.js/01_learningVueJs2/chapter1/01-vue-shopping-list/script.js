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

  new Vue({ // jshint ignore:line
    el: '#app',
    data: data,
    methods: {
      addItem: function () {
        var text; // jshint ignore:line

        text = this.newItem.trim();
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
