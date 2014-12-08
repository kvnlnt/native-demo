/**
* Responsive Images Module
* @module images
* @version 1.0
*/

"use strict";

flowroute.images = (function(module){

    /** @exports images */

    /**
     * DOM elements
     * @member flowroute.images.el
     * @memberOf module:images
     */
    module.directive = '[fr-image]';

    /**
     * Replace all svg images with png counterparts
     * @function floworoute.images.svg_fallback
     * @memberOf module:images
     * @param  {Object} e - click event
     */
    module.degrade_svg = function(){

        // get clicked element
        var el = $(this);
        var src = el.attr('src');
        var newsrc = src.replace('.svg','.png');
        el.attr('src', newsrc);

    };

    /**
     * Initialize module
     * @function floworoute.images.init
     * @memberOf module:images
     */
    module.init = function(){
        
        // Fix svg images
        if(!Modernizr.svg){
            $(module.directive).each(module.degrade_svg);
        }

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.images || {});