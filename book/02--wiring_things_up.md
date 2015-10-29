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
  - dist/
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
    
  </body>
</html>
```

We haven't done much here yet. We have a HTML shell with a ```<script src="dist/vue.js"></script>``` call to our ```vue.js``` file. 

Open it in your browser and check that there are no errors connecting to your ```vue.js``` file via your browser's developer tools.

> You can generally open your browser's developer tools by pressing ```Ctrl+Shift+I```


```js

```