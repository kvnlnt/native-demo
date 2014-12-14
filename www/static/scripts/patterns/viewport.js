/**
* Viewport manager
* @module viewport
* @version 1.0
*/

flowroute.viewport = (function(module){

    "use strict";

    /** @exports viewport  */

    /**
     * Check if element is in viewport
     * @memberOf module:viewport
     * @param {object} el part object (should be a <section>)
     */
    module.contains_part = function(el, elTop){

        // get params
        var part        = $(el);
        var part_top    = elTop || part.offset().top;
        var in_viewport = part_top >= this.top && part_top <= this.bottom;

        return in_viewport;

    };

    /**
     * Calc and set viewport dimensions and broadcast update event
     * @memberOf module:viewport
     */
    module.set_viewport = function(){

        // viewport, height and vertical scroll position
        var viewport    = $(window);
        module.height   = viewport.height();
        module.top      = viewport.scrollTop();
        module.bottom   = module.top + module.height;

        // publish scroll event
        flowroute.pubsub.publish('VIEWPORT:UPDATE');

        return module;

    };

    /**
     * Initialize
     * @memberOf module:viewport
     */
    module.init = function(){

        $(document).on('scroll', flowroute.util.debounce(module.set_viewport, 100));
        module.set_viewport();

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.viewport || {});