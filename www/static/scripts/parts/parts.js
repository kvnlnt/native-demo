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

        // loop all views in viewport and call on view method
        module.in_viewport().each(function(index, el){
            module.on_view(el);
        });

    };

    /**
     * On view event
     * @function floworoute.parts.on_scroll
     * @memberOf module:parts
     */
    module.on_view = function(el){

        // get part
        var part = $(el);

        // has it been viewed?
        var been_viewed = part.hasClass('viewed');

        // no? add a class and call methods
        if(!been_viewed){
            part.addClass('viewed');
            flowroute.analytics.log('part','viewed',part);
        }
        
        return part;

    };

    /**
     * Get parts in view port
     * @function floworoute.parts.viewport_check_all
     * @memberOf module:parts
     */
    module.in_viewport = function(classIndicator){

        var classIndicator = 'viewed' || classIndicator;

        // Loop parts that have not been viewed and check if they're in the viewport
        return module.parts.not(classIndicator).filter(function(i){
            return flowroute.viewport.contains_part(module.parts[i]); 
        });

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