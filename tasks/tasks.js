module.exports = function(grunt) {

    grunt.registerTask('dev', ['shell:killservers', 'shell:runserver', 'open:dev', 'watch']);
    grunt.registerTask('default', 'dev');

};