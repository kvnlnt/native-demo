/**
* Viewport manager
* @module viewport
* @version 1.0
*/

"use strict";

flowroute.viewport = (function(module){

    /** @exports viewport  */

    /**
     * On scroll inspect sections
     * @function floworoute.viewport.on_scroll
     * @memberOf module:viewport
     */
    module.set_viewport = function(){

        // viewport, height and vertical scroll position
        var viewport = $(window);
        module.height   = viewport.height();
        module.top      = viewport.scrollTop();
        module.bottom   = module.top + module.height;

        return module;

    };

    // boot file
    $(document).on('ready scroll', module.set_viewport);

    // export
    return module;

})(flowroute.viewport || {});