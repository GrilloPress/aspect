var Profile = Vue.extend({
  template: '<div>{{ name }}</div>',
  data: function () {
    return {
      name: 'Andrew Duckworth'
    }
  }
})

// register the tag <Profile>
Vue.component('profile', Profile)

// Make sure your new Vue instance comes after your components
new Vue({
  el: '#app',
});