/**
* Command pattern for any backend analytics calls
* @module analytics
* @version 1.0
*/

flowroute.analytics = (function(module){

    "use strict";

    /** @exports analytics  */

    /**
     * Log event
     * @param {string} type categorical type
     * @param {string} evt event name
     * @param {string} data data to be stored
     * @memberOf module:analytics
     */
    module.log = function(type, evt, data){
        
        // console.log('analytics', type, evt, data);

    };

    /**
     * Initialize module
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