module.exports = function(grunt) {

    // main dev task, kill any running servers, starts up new ones, opens up a browser and starts watching scripts and styles
    grunt.registerTask('dev', ['shell:killservers', 'shell:runserver', 'open:dev', 'watch']);
    
    // default grunt task...
    grunt.registerTask('default', 'dev');

    // compile all assets
    grunt.registerTask('assets', ['uglify:app_files', 'uglify:vendor_files', 'sass:app_files', 'sass:vendor_files']);

    // run both serverside and clientside tests
    grunt.registerTask('test', ['shell:test', 'jasmine']);

    // run jsdocs
    grunt.registerTask('doc', ['shell:sphinx', 'jsdoc', 'connect:docs']);

};