#Step-15 Webpack version using gulp to create build-file

`index.html` is modified to use the build-file from the dist folder!

##Setup
`sudo npm install -g webpack` (for adding webpack)

##Development workflow (not needed in this step, cause this only add `gulp` to show how a simple build works; see next section)
`webpack ./app/js/main.js ./app/js/bundle/bundle.js --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.

##Build
Create uglified file by using: `gulp`