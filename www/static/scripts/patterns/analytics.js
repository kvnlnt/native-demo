/**
* Analytics
* @module analytics
* @version 1.0
*/

"use strict";

flowroute.analytics = (function(module){

    /** @exports analytics  */

    /**
     * Initialize module
     * @function floworoute.analytics.init
     * @memberOf module:analytics
     */
    module.init = function(){
        
        // register wow analytics
        // $(document)

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.analytics || {});