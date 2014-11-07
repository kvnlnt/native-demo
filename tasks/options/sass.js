module.exports = {
    app_files: {
        options: {
            style: 'compressed',
            sourcemap:'file',
        },
        files: {
            'www/static/assets/styles.min.css': 'www/static/styles/styles.scss'
        }
    },
    vendor_files: {
        options: {
            style: 'compressed',
            sourcemap:'file',
        },
        files: {
            'www/static/assets/vendor.min.css': 'www/static/vendor/styles/vendor.scss'
        }
    }
}

