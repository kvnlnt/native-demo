/**
* Command pattern for any backend api calls
* @module api
* @version 1.0
*/

flowroute.api = (function(module){

    "use strict";

    /** @exports api  */

    /**
     * Initialize module
     * @memberOf module:api
     */
    module.init = function(){
        
        // register wow api
        // $(document)

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.api || {});