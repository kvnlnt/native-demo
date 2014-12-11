/**
 * Images module used to manage responsive images, etc
 * @module images
 * @version 1.0
 */

flowroute.images = (function(module){

    "use strict";
    
    /** @exports images */

    /**
     * DOM directive (aka jquery selector)
     * @memberOf module:images
     */
    module.directive = '[fr-image]';

    /**
     * Graceful degradation for SVG images
     * @memberOf module:images
     */
    module.degrade_svg = function(){

        $(module.directive).each(function(){
            
            // get clicked element
            var el     = $(this);
            var src    = el.attr('src');
            var newsrc = src.replace('.svg','.png');

            // replace svg image with png replacement
            el.attr('src', newsrc);

        });

    };

    /**
     * Initialize module
     * @memberOf module:images
     */
    module.init = function(){
        
        // gracefully degrade svg images
        if(!Modernizr.svg){ module.degrade_svg(); }

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.images || {});