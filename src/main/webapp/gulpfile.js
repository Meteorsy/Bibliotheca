let
    gulp = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync'),
    plugins = require('gulp-load-plugins')();

// TODO: Compile Scss files and convert it to css
gulp.task('css', () => {
    gulp.src('app/app.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
        .pipe(plugins.rename('app.min.css'))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'));
});

// TODO: Zip the image and remove the file path
gulp.task('img', () => {
    gulp.src('app/components/**/**/*.{png,jpg,svg}')
        .pipe(plugins.changed('dist/img'))
        .pipe(plugins.rename((path) => {
            path.dirname = '';
        }))
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('dist/img'));
});

// TODO: Compile ES6 javascript files and convert it to ES5
gulp.task('js', ['lint'], () => {
    browserify({
        entries: './app/app.js',
        debug: true
    }).transform(babelify)
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(plugins.uglify())
        .on('error', plugins.util.log)
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

// TODO: Lint the javascript files with specially rules
gulp.task('lint', () => {
    gulp.src(['app/app.js', 'app/components/**/**/*.react.js', 'app/**/*.js'])
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});

// TODO: Replace the local resources to CDN
gulp.task('html', () => {
    gulp.src(['./index.html'])
        .pipe(plugins.replace('./application/views/app/lib/html5shiv/dist/html5shiv.min.js', '//cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/respond/dest/respond.min.js', '//cdn.bootcss.com/respond.js/1.4.2/respond.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/jquery/dist/jquery.min.js', '//cdn.bootcss.com/jquery/2.2.4/jquery.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/bootstrap/dist/css/bootstrap.min.css', '//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css'))
        .pipe(plugins.replace('./application/views/app/lib/bootstrap/dist/js/bootstrap.min.js', '//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/font-awesome/css/font-awesome.min.css', '//cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css'))
        .pipe(plugins.replace('./application/views/app/lib/react/react-dom.min.js', '//cdn.bootcss.com/react/15.1.0/react-dom.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/react/react-with-addons.min.js', '//cdn.bootcss.com/react/15.1.0/react-with-addons.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/react-router/ReactRouter.min.js', '//cdn.bootcss.com/react-router/2.4.1/ReactRouter.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/flux/dist/Flux.min.js', '//cdn.bootcss.com/flux/2.1.1/Flux.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/gsap/src/minified/TweenMax.min.js', '//cdn.bootcss.com/gsap/1.18.5/TweenMax.min.js'))
        .pipe(plugins.replace('./application/views/app/lib/jquery-validation/dist/jquery.validate.min.js', '//cdn.bootcss.com/jquery-validate/1.15.0/jquery.validate.min.js'))
        .pipe(plugins.replace('./dist/css/app.min.css', './css/app.min.css'))
        .pipe(plugins.replace('./dist/js/app.min.js', './js/app.min.js'))
        .pipe(plugins.replace('./dist/img/favicon.ico', './img/favicon.ico'))
        .pipe(gulp.dest('./dist'));
});

// TODO: Delete the dist directory
gulp.task('clean', (cb) => {
    del([
        'dist'
    ], cb);
});

// TODO: Watch tasks
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('img-watch', ['img'], browserSync.reload);

// TODO: BrowserSync
gulp.task('server', ['css', 'js', 'img'], () => {
    browserSync.init({
        server: './'
    });

    gulp.watch(['app/app.scss', 'app/components/**/**/*.scss'], ['css-watch']);
    gulp.watch(['app/app.js', 'app/components/**/**/*.react.js', 'app/**/*.js'], ['js-watch']);
    gulp.watch(['app/components/**/**/*.{jpg, png, svg}'], ['img-watch']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

// TODO: Default task
gulp.task('default', ['clean', 'server']);