const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify-es').default; // 压缩文件
const concat = require('gulp-concat'); // 合并文件
const babel = require("gulp-babel");
const wrap = require('gulp-wrap');

const files = [
    'lib/stream.js'
];

gulp.task('lint', function () {
    return gulp.src(files)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('scripts', function () {
    return gulp.src(files)
        .pipe(babel())
        .pipe(wrap({src: 'lib/template.txt'}, {variable: 'data'}))
        .pipe(uglify({
            mangle: {
                eval: true,toplevel:false ,properties: {regex: /^_/},
            },
            compress: {
                unused: true,
                keep_fargs: false,
                unsafe: true
            },
            // keep_classnames:true,
            // output: {
            //     beautify: true,
            // }

        }))
        .pipe(concat('js-stream.js'))
        .pipe(gulp.dest('bin/'))
});

gulp.task('build', ['lint', 'scripts']);
gulp.task('default', ['build']);
