/**
* All Parts
* @module parts
* @version 1.0
*/

"use strict";

flowroute.parts = (function(module){

    /** @exports parts  */

    /**
     * Parts identifying selector
     * @member flowroute.parts.directive
     * @memberOf module:parts
     */
    module.directive = 'section';

    /**
     * Collection of parts on page
     * @member flowroute.parts.parts
     * @memberOf module:parts
     */
    module.parts = [];

    /**
     * On scroll event
     * @function floworoute.parts.on_scroll
     * @memberOf module:parts
     */
    module.on_scroll = function(){

        // check if in viewport
        module.in_viewport().each(module.set_viewed);

    };

    module.set_viewed = function(v, k){

        console.log(v,k);

    };

    /**
     * Get parts in view port
     * @function floworoute.parts.viewport_check_all
     * @memberOf module:parts
     */
    module.in_viewport = function(){

        // check if in viewport
        var in_view = module.parts.filter(function(i){
            return module.is_viewable(module.parts[i]); 
        });
        return in_view;

    };

    /**
     * Check if part is in viewport
     * @function floworoute.parts.viewport_check
     * @memberOf module:parts
     */
    module.is_viewable = function(el){

        // get params
        var viewport = flowroute.viewport;
        var part     = $(el);
        var top      = part.offset().top;
        var in_view  = top >= viewport.top && top <= viewport.bottom;

        return in_view;

    };

    /**
     * Initialize module
     * @function floworoute.parts.init
     * @memberOf module:parts
     */
    module.init = function(){

        // collect parts
        module.parts = $(module.directive);
        
        // register wow parts
        $(document).on('scroll', module.on_scroll);

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.parts || {});