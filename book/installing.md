# Installing Vue.js

The easiest way to install Vue.js onto our machine is to grab either the uncompressed or production files from the website.

## Download via website or wget

The latest versions of Vue.js can be found in the installation area.

To get your copy either manually download or use something like wget:

```bash
wget https://raw.github.com/vuejs/vue/1.0.1/dist/vue.js
```

This will download the ```vue.js``` file.

> Notice this is a link to a specific number. Please check if this is the latest. If you want the compiled production version, it should be ```vue.min.js``` instead of ```vue.js```.

## Using NPM

Grabbing the files via wget is fine when you are playing with a product, but not so great if you are setting off to build your project with a package manager.

The easiest method there is to use NPM.

To do that, the command is:

```bash
npm install vue
```

This will install the latest stable version.

## Further Resources