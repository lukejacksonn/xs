const fs = require('fs');

const sass = require('node-sass');
const bf = require('browserify');
const min = require('harp-minify');
const dir = require('recursive-readdir');
const svgo = require('svgo');

// Configure svgo
const s = new svgo({ plugins: [{cleanupIDs: false, }] });

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

// Concat svg files into one
const svg = new Promise((resolve, reject) => {
  const optim = path => new Promise((resolve, reject) => s.optimize(f(path), x => resolve(x)));
  const isvg = (f) => f.endsWith('.svg');
  dir('src/assets', (err, files) => {
    resolve(Promise.all(files.filter(isvg).map(b => optim(b))));
  });
});

// Inject transformed code into dist file
Promise.all([js, css, svg]).then(files => {
  const svgs = files[2].map(x => x.data);
  fs.writeFileSync('index.html', f('index.html')
    .replace(/<style>(.+)?<\/style>/, `<style>${min.css(files[1])}</style>`)
    .replace(/<script>(.+)?<\/script>/, `<script>${min.js(files[0])}</script>`)
    .replace(/<svgs>(.+)?<\/svgs>/, `<svgs>${svgs.join('')}</svgs>`)
  , 'utf8');
}).catch(e => console.log(e));
