"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //gulp connect dev server
var open = require('gulp-open'); //opens a url in the webbrowser

var browserify = require('browserify');//bundles js
var reactify = require('reactify');//react jsx to js
var source = require('vinyl-source-stream');//use conventional text streams with gulp

var concat = require('gulp-concat');//gulp files concatenator
var lint = require('gulp-eslint');





var config = {
    port: 9005,
    baseUrl: "http://localhost",
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        ],
        fonts: [
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
            'node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}


gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true,
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.baseUrl + ':' + config.port + '/'
        }));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('lint', function(){
    return gulp.src(config.paths.js)
            .pipe(lint({
                config: 'eslint.config.json'
            }))
            .pipe(lint.format());
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('fonts', function(){
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch(config.paths.js, ['css']);
    gulp.watch(config.paths.js, ['fonts']);
})

gulp.task('default', ['html', 'js', 'lint', 'css', 'fonts','open', 'watch']);