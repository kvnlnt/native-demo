module.exports = {
    app_styles: {
        files: ['www/static/styles/**/*.scss'],
        tasks: ['sass:app_files'],
        options: {
            livereload: true,
        },
    },
    app_scripts: {
        files: ['www/static/scripts/**/*.js'],
        tasks: ['uglify:app_files']
    },
    vendor_scripts: {
        files: ['www/static/vendor/**/*.js'],
        tasks: ['uglify:vendor_files']
    }
}