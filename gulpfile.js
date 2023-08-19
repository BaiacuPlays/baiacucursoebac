const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate'); // Importando a biblioteca de obfuscação

function comprimeimagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimejavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate()) // Utilizando o plugin de obfuscação
        .pipe(gulp.dest('./build/scripts'));
}

function compilasass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilasass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimejavascript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeimagem));
}
