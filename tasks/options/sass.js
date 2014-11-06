module.exports = {
    app_files: {
        options: {
            style: 'compressed',
            sourcemap:'file',
        },
        files: {
            'www/static/assets/styles.min.css': 'www/static/styles/styles.scss'
        }
    }
}

