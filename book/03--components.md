# Components

One of the central features of Vue.js is the ability to create reusable components. This is something similar to React.js and most modern JavaScript frameworks.

Let's go do that.

First create a new set of files to work from (I moved my ```first.html``` and ```first.js``` to a separate folder). Create something like ```index.html```, ```component.js``` with a dist folder with the ```vue.js``` library in it as before.

I have something like this inside my examples folder:

```
index.html
component.js
- dist/
  vue.js
```

In this quick example we'll create a profile page. We'll use a component to make our HTML very lightweight.

In our ```index.html``` file, let's create the following HTML shell. Notice the ```<main></main>``` tag with an ```id``` of ```app```:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Vue.js Component Example</title>
    <script src="dist/vue.js"></script>
    </head>
  <body>
    <main id="app">
      ...
    </main>
    <script src="component.js"></script>
  </body>
</html>
```

Inside our ```<main id="app"></main>``` create our custom profile component like so:

```html
<main id="app">
  <profile></profile>
</main>
```

Right now this does nothing. As expected. What we need to do to make this work is:

1. Create the custom ```<profile></profile>``` component
2. Register that component with Vue.js
3. Make Vue.js aware in which element we want to make our Vue.js app

In our ```component.js``` file write the following:

```js
new Vue({
  el: '#app',
});
```

Here, as with our last example, we have made a new instance of Vue and told it, using the ```el``` attribute, where in our HTML we would like to make our Vue.js app. In this example it is within the ```<main></main>``` tag with an id of app.

We now have a working area in which our profile component will be injected (namely, the ```<profile></profile>``` tag).

Let's register our profile component.

To do that, above our ```new Vue({});``` instance, write the following:

```js
var Profile = Vue.extend({

});
```

Here we have created a new object called Profile. We make sure to use ```.extend``` method, as this enables us to make our object a ```Vue.js``` component.

Inside our ```Profile``` object we need to define what should be returned when we include our ```<profile></profile>``` custom component inside our HTML file.

To do this we need to provide a _template_.

Update our object:

```js
var Profile = Vue.extend({
  template: '<div>{{ name }}</div>'
});
```

Here we offer a string value, inside which is a div with a call to a variable inside some mustaches.

Inside our string we can also just offer pure HTML, we can also provide a link to a template. We do that by starting our string with a #, so "#profile" would search for a script template with an ID of profile. We'll cover that later, for now we'll contain everything we need in a single string.

As you may have noticed we have included a called to a name method or variable. We currently don't have one. We can create one like so:

```js
var Profile = Vue.extend({
  template: '<div> {{ name }} </div>',
  data: function () {
    return {
      name: 'Andrew Duckworth'
    }
  }
})
```

Here, as before, we create some data to return. Unlike the example in the last section however, we use a function which returns our data. If we don't do this our component will be an empty set of ```<div>```s.

We are now nearly ready. Before we can open up our browser we have to ensure we register our new component. To do so, write the following line beneath our Profile object:

```js
Vue.component('profile', Profile);
```

Here we are registering our component with Vue. The first parameter is the HTML-like element we will use and the second parameter is a reference to which object we are registering with Vue.

Altogether our ```component.js``` file should look something like:

```js
var Profile = Vue.extend({
  template: '<div> {{ name }} </div>',
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
```

Open up our ```index.html``` file in a browser and you should see my name. Smashing.

We haven't done anything massive here, in terms of a comprehensive app, but we have successfully created and registered our custom component. If you take a few seconds to imagine here, you can envisage that our profile tag could call an external API, render our picture, bio etc.


> ### Important
>       
> Make sure that you put your components _above_ where you instantiate your Vue object. If you do not do this, it will create an error!




## todo DELETE THIS AFTER

template with a # will search for a ```<script type="text/x-template" id="grid-template"></script>``` this is better when you have comprehensive templates and not simple strings

quicker way to register:

```
// extend and register in one step
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
```