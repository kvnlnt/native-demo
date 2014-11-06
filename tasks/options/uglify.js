module.exports = {
    options: {
        compress: {
            dead_code: true
        },
        preserveComments: false,
        mangle: true,
        sourceMap:true,
    },
    app_files: {
        src: 'www/static/scripts/**/*.js',
        dest: 'www/static/assets/scripts.min.js'
    },
    vendor_files: {
        src: 'www/static/vendor/**/*.js',
        dest: 'www/static/assets/vendor.min.js'
    },
}