module.exports = {
    options: {
        compress: {
            dead_code: true
        },
        preserveComments: false,
        mangle: false,
        sourceMap:true,
    },
    app_files: {
        src: [
            'www/static/scripts/scripts.js',
            'www/static/scripts/patterns/**/*.js',
            'www/static/scripts/pieces/**/*.js', 
            'www/static/scripts/parts/**/*.js', 
            'www/static/scripts/pages/**/*.js',
        ],
        dest: 'www/static/assets/scripts.min.js',
    },
    vendor_files: {
        src: 'www/static/vendor/**/*.js',
        dest: 'www/static/assets/vendor.min.js'
    },
}