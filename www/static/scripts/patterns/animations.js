/**
* Animations
* @module animations
* @version 1.0
*/

"use strict";

flowroute.animations = (function(module){

    /** @exports animations  */

    /**
     * Initialize module
     * @function floworoute.animations.init
     * @memberOf module:animations
     */
    module.init = function(){
        
        // register wow animations

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.animations || {});