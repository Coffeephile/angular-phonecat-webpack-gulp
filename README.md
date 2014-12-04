#Extend version of the Angular Phonecat tutorial with added steps to include [webpack](http://webpack.github.io) and [gulp](http://gulpjs.com)

I created this fork because I didn't know how to split up an Angular project in a nice way. I used [RequireJS](http://requirejs.org) [before](https://twitter.com/escapedcat/status/433160981426880512) but it always felt too complicated in a way.

I tried a cleaner approach in 3 steps:

1. Just splitting files
2. Adding [webpack](http://webpack.github.io) to combine splitted files
3. Utilizing [gulp](http://gulpjs.com) to create a uglified build-file

I'm still not sure if this is the way to go, but so far it's working out. If you discover this and you have an opinion or feedback on this I'm more than happy to listen to it. [Open an issue](https://github.com/escapedcat/angular-phonecat-webpack-gulp/issues/new) or [send me a tweet](https://twitter.com/escapedcat).




##[Step-13 Split version](https://github.com/escapedcat/angular-phonecat-webpack-gulp/tree/step-13)

###Changes
Only the `controllers.js` file is split into two seperated controller files.



##[Step-14 Webpack version (simple)](https://github.com/escapedcat/angular-phonecat-webpack-gulp/tree/step-14)

###Setup
`npm install -g webpack` (for adding webpack)

###Development workflow
`webpack ./app/js/main.js ./app/js/bundle/bundle.js --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.



##[Step-15 Webpack version using gulp to create build-file](https://github.com/escapedcat/angular-phonecat-webpack-gulp/tree/step-15)

`index.html` is modified to use the build-file from the dist folder!

###Setup
`npm install -g webpack` (for adding webpack)

###Development workflow (not needed in this step, cause this only adds gulp to show how a simple build works; see next section)
`webpack ./app/js/main.js ./app/js/bundle/bundle.js --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.

###Build
Create uglified file by using: `gulp`