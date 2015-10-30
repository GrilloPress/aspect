var Profile = Vue.extend({
  template: '<div class="{{css}}"> {{ name }} - {{job}}</div>',
  data: function () {
    return {
      name: 'Andrew Duckworth',
      job: 'Product Manager',
      css: 'vip'
    }
  }
})

// register the tag <Profile>
Vue.component('profile', Profile)

// Make sure your new Vue instance comes after your components
new Vue({
  el: '#app',
});