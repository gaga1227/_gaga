;(function() {
  'use strict';

  // app data
  const data = {
    items: [
      { text: 'Bananas', checked: true },
      { text: 'Apples', checked: false }
    ],
    title: 'My Shopping List',
    newItem: ''
  };

  // Declaring components
  const ItemsComponent = Vue.extend({
    data: () => data, // ES6 lambda format
    template: // ES6 string literal format
    `<ul>
      <li v-for="item in items" :class="{ \'removed\': item.checked }">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked">
            {{ item.text }}
          </label>
        </div>
      </li>
    </ul>`
  });

  const ChangeTitleComponent = Vue.extend({
    data() { // ES6 object literal short hand
      return data;
    },
    template: '<input v-model="title"/>' // plain string format
  });

  const AddItemComponent = Vue.extend({
    data: function () { // anonymous function format
      return data;
    },
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
    },
    template: // ES6 string literal format
    `<div class="input-group">
       <input type="text" class="form-control" placeholder="add shopping list item"
         v-model="newItem"
         @keyup.enter="addItem">
       <span class="input-group-btn">
         <button @click="addItem" class="btn btn-default" type="button">Add!</button>
       </span>
    </div>`
  });

  // Registering components
  Vue.component('items-component', ItemsComponent);
  Vue.component('change-title-component', ChangeTitleComponent);
  Vue.component('add-item-component', AddItemComponent);

  // Create Vue instance
  new Vue({
    el: '#app',
    data: data
  });
})();