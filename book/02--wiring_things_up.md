# Wiring Things Up

Let's wire up an example.

Move, or download, the Vue.js file into a directory. I'll be using ```/examples/``` to hold my examples and inside that a single directory called ```/dist/``` to hold the ```vue.js``` file.

```
mkdir examples && cd examples && mkdir dist
```

Move the vue.js file into our ```/dist/``` folder. Our folder should look something like this:

```
examples/
  - dist/
    vue.js
```

Next, inside create our ```/examples/``` directory create a JavaScript file called ```first.js``` and a HTML file called ```first.html```.

```
# from the root of our examples file
touch first.js first.html
```

> If you haven't encountered it before, the touch command creates the files you indicate to the left of the command. I use ```touch``` because it makes me feel like a wizard. A wizard of the order of UNIX or something.

We should now have something resembling:

```
examples/
        first.html
        first.js
        dist/
             vue.js
```

## Wiring up our first example

In our ```first.html``` example write the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>First Vue.js Example</title>
    <script src="dist/vue.js"></script>
    </head>
  <body>
    <script src="first.js"></script>
  </body>
</html>
```

We haven't done much here yet. We have a HTML shell with a ```<script src="dist/vue.js"></script>``` call to our ```vue.js``` file and included our empty ```first.js``` file at the bottom as well.

Open it in your browser and check that there are no errors connecting to your ```vue.js``` file via your browser's developer tools.

> You can generally open your browser's developer tools by pressing ```Ctrl+Shift+I```

Inside our new ```first.js``` file we can now write some Vue.js code.

```js
new Vue({
  el: '#message',
  data: {
    message: 'Hello Vue.js!'
  }
})
```

Let's go through what we have written:

1. First we initalized our first ```vue``` object. We do this by declaring ```new Vue({})```
2. Inside our new vue object we declared which HTML element our object should transform into a Vue.js powered app
    - Our HTML element with the id of message now has access to all of Vue.js. This is very similar to how Angular works with ```ng-app```
3. We've provided some data, which is a message with poignant, thought-provoking content.
    - The data attribute is an object with some key:value pairs. We've created one with a key of message with the value of a string saying hello
5. In our HTML, within the element with #message, we can now use the message variable within mustaches {{}}.

We now have some exciting message to share. Let's update our HTML. First we need to create a HTML element with the id of message and within that, a set of mustache brackets with our message variable.

Our ```first.html``` should look something like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>First Vue.js Example</title>
    <script src="dist/vue.js"></script>
  </head>
  <body>
    <main id="message">
      {{ message }}
    </main>
    <script src="first.js"></script>
  </body>
</html>
```

So, we have ensured we provide Vue with an element with the id of message. That is, our  ```<main id="message"></main>```.

And inside that we have placed our Vue template. At this point in time, our Vue template is just a mustache bracket with a reference to our data object.

> If you get an error saying "Vue can't find element" ensure your ```first.js``` script is appearing below your ```main#message``` HTML element.

Now when you open your browser at first.html it should load up your Vue object and inject into your HTML our super special message.

Add some more data to your first example, calling it within the same element.

Here is an example with a function call and an integer in our Vue object:

```js
new Vue({
  el: '#message',
  data: {
    message: 'Hello Vue.js!',
    second: 2, //integer
    third: repeatMe("yolo") //function
  }
});

// create a function that we can call in our Vue object.

function repeatMe(message){
  
  return message;
  
}
```

To call these extra data key:values we just include them inside our mustache brackets like so:

```html
<main id="message">
  {{ message }} {{ second }} {{ third }}
</main>
```

## Further Resources


- [Getting Started Guide](http://vuejs.org/guide/index.html)
- [Introduction to Vue.js from the official blog](http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)