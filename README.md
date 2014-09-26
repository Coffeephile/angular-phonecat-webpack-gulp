#Step-15 Webpack version using gulp to create build-file

`index.html` is modified to use the build-file from the dist folder!

##Setup
`npm install` (for adding webpack)

##Development workflow
`webpack ./app/js/main.js ./app/js/bundle/bundle.js --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.

##Build
Create uglified file by using: `gulp`