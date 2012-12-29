TwitterApp
==========

This is an updated version of my [demo of the amd pattern](https://github.com/danne567/amd.pattern) running on [Node.js](http://nodejs.org/).

##Start the app
    node app.js

##Run the require.js optimizer
    node r.js -o build.js

Edit layout.jade and replace this

    script(src='scripts/lib/require.js', data-main='scripts/main')

with this

    script(src='scripts/lib/require.js', data-main='scripts/main-built')
