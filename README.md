#Step-13 Webpack version (simple)

##Setup
`npm install` (for adding webpack)

##Development workflow
`webpack ./app/js/main.js ./app/js/bundle/bundljs --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.
