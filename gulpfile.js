'use strict';

/** ======== DEPENDENCIAS QUE SE HAN DESCARGADO ======== */

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    $               = require('gulp-load-plugins')(),
    del             = require('del'),
    runSequence     = require('run-sequence'),
    connectNgdocs   = require('gulp-connect'),
    autoprefixer    = require('gulp-autoprefixer'),
    gulpDocs        = require('gulp-ngdocs');

// Optimiza las imagenes
gulp.task('images', function() {
	return gulp.src('./img/**/*')
	.pipe($.changed('./_build/img'))
	.pipe($.imagemin({
	  optimizationLevel: 3,
	  progressive: true,
	  interlaced: true
	}))
	.pipe(gulp.dest('./_build/img'));
});

// Sincroniza las tareas con el navegador solo se preocupa por el css compilado
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

// Minifica el JS
gulp.task('minify-js', function() {
  gulp.src('js/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest('./_build/'));
});

// Minifica el CSS
gulp.task('minify-css', function() {
  gulp.src(['./css/**/*.css'])
    .pipe($.rename({suffix: '.min'}))
    .pipe($.minifyCss({keepBreaks:true}))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_build/css/'));
});

// Minifica el HTML
gulp.task('minify-html', function() {
  var opts = {
    comments: true,
    spare: true,
    conditionals: true
  };

  gulp.src('./*.html')
    .pipe($.minifyHtml(opts))
    .pipe(gulp.dest('./_build/'));
});

// Copia fuentes desde un módulo fuera de nuestro proyecto
gulp.task('fonts', function() {
  gulp.src('./fonts/**/*.{ttf,woff,eof,eot,svg}')
    .pipe($.changed('./_build/fonts'))
    .pipe(gulp.dest('./_build/fonts'));
});

// Inicia servidor web
gulp.task('server', function(done) {
  return browserSync({
    server: {
      baseDir: './'
    }
  }, done);
});

// Inicia el servidor web desde la carpeta _build para comprobar cómo se verá en la producción
/*gulp.task('server-build', function(done) {
  return browserSync({
    server: {
      baseDir: './_build/'
    }
  }, done);
});
*/

// elimina la carpeta de construcción
gulp.task('clean:build', function (cb) {
  del([
     './_build/**',

        '!./_build',
        '!./_build/cv2017.pdf'
  ], cb);
});



/*        gulp.task('clean:build', function (cb) {
          del([
            './_build/'
            // if we don't want to clean any file we can use negate pattern
            //'!dist/mobile/deploy.json'
          ], cb);
        });
*/



// Concatena los archivos
gulp.task('concat', function() {
  gulp.src('./js/*.js')
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest('./_build/'));
});

// Detecta una posible fuga de memoria EventEmitter. 11 oyentes añadidos.
require('events').EventEmitter.prototype._maxListeners = 100;

// index.html Construccion
// script/css concatenacion
gulp.task('usemin', function() {
  return gulp.src('./index.html')
    // add templates path
    .pipe($.htmlReplace({
      'templates': '<script type="text/javascript" src="js/templates.js"></script>'
    }))
    .pipe($.usemin({
      css: [$.minifyCss(), 'concat'],
      libs: [$.uglify()],
      nonangularlibs: [$.uglify()],
      angularlibs: [$.uglify()],
      appcomponents: [$.uglify()],
      mainapp: [$.uglify()]
    }))
    .pipe(gulp.dest('./_build/'));
});

// templateCache de todos los archivos
gulp.task('templates', function() {
  return gulp.src([
      './**/*.html',
      '!bower_components/**/*.*',
      '!node_modules/**/*.*',
      '!_build/**/*.*'
    ])
    .pipe($.minifyHtml())
    .pipe($.angularTemplatecache({
      module: 'yeison'
    }))
    .pipe(gulp.dest('_build/js'));
});

// Recarga todos los navegadores
gulp.task('bs-reload', function() {
  browserSync.reload();
});

// Calcular el tamaño de la carpeta de construcción
gulp.task('build:size', function() {
  var s = $.size();

  return gulp.src('./_build/**/*.*')
    .pipe(s)
    .pipe($.notify({
      onLast: true,
      message: function() {
        return 'Total build size ' + s.prettySize;
      }
    }));
});

gulp.task('ngdocs', [], function () {
  var options = {
    html5Mode: true,
    startPage: '/api',
    title: "My Awesome Docs",
    titleLink: "/api"
  }
  return gulp.src('components/*.js')
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('./docs'));
});

gulp.task('connect_ngdocs', function() {
  connectNgdocs.server({
    root: 'docs',
    livereload: false,
    fallback: 'docs/index.html',
    port: 8083
  });
});

gulp.task('autoprefix', function () {
    gulp.src('css/estilos.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});

// Tarea predeterminada que se ejecutará con el comando `gulp`
// Esta tarea predeterminada ejecutará BrowserSync y luego utilizará Gulp para ver los archivos.
// Cuando se cambia un archivo, se emite un evento a BrowserSync con la ruta de acceso de archivo.
gulp.task('default', ['browser-sync', 'ngdocs', 'connect_ngdocs'], function() {
  gulp.watch('css/*.css', function(file) {
    if (file.type === "changed") {
      reload(file.path);
    }
  });
  gulp.watch(['*.html', 'views/*.html'], ['bs-reload']);
  gulp.watch(['app/*.js', 'components/**/*.js', 'js/*.js'], ['bs-reload']);
  gulp.watch('css/**/*.css');
});


/**
 * Tareas de construcción:
 * 1. Limpiar y contruir la carpeta
 * 2. Copiar y minimizar imágenes
 * 3. Minificar y copiar todos los archivos HTML en el $templateCache
 * 4. Contruir el index.html
 * 5. Minificar y copiar todos los archivos JS
 * 6. Copiar las fuentes
 * 7. Mostrar tamaño de carpeta de construcción
 * 
 */
gulp.task('build', function(callback) {
  runSequence(
    'clean:build',
    'images',
    'templates',
    'usemin',
    'fonts',
    'build:size',
    callback);
});
