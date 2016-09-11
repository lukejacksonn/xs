const fs = require('fs');
const sass = require('node-sass');
const min = require('harp-minify');
const bf = require('browserify');

// Configure browserify and babel
const b = bf().transform('babelify', { presets: ['es2015'] });

// Read utf8 contents of a file
const f = path => fs.readFileSync(path, 'utf8');

// Transforms sass file into css string
const css = new Promise((resolve, reject) => {
  resolve(sass.renderSync({
    data: f('src/index.scss'),
  }).css.toString());
});

// Transforms es6 file into es5 string
const js = new Promise((resolve, reject) => {
  b.add('src/index.js').bundle((err, x) => {
    if(err) reject(err);
    else resolve(x.toString());
  });
});

// Inject transformed code into dist file
Promise.all([js, css]).then(files => {
  fs.writeFileSync('dist/index.html', f('src/index.html')
    .replace(/\{\{script\}\}/, min.js(files[0]))
    .replace(/\{\{style\}\}/, min.css(files[1]))
  , 'utf8');
});
