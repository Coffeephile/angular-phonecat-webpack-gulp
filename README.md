#Step-14 Webpack version (simple)

##Setup
`sudo npm install -g webpack` (for adding webpack globally)

##Development workflow
`webpack ./app/js/main.js ./app/js/bundle/bundle.js --progress --colors -d --watch`

This creates the bundle.js and the sourcemap-file.
The sourcemap file gets created because of the debug option (`-d`).

Every change of the JavaScript files will be watched and Webpack rebuilds the build-file automatically.
