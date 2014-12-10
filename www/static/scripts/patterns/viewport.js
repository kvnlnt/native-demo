/**
* Viewport manager
* @module viewport
* @version 1.0
*/

"use strict";

flowroute.viewport = (function(module){

    /** @exports viewport  */

    /**
     * Check if element is in viewport
     * @type {object} el
     */
    module.contains_part = function(el){

        // get params
        var part        = $(el);
        var part_top    = part.offset().top;
        var in_viewport = part_top >= this.top && part_top <= this.bottom;

        return in_viewport;

    };

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