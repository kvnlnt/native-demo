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
    module.directive = 'img.responsive';

    /**
     * Replace all svg images with png counterparts
     * @function floworoute.images.svg_fallback
     * @memberOf module:images
     * @param  {Object} e - click event
     */
    module.svg_fallback = function(){

        // get clicked element
        var el = $(this);

        console.log(el);

    };

    /**
     * Initialize module
     * @function floworoute.images.init
     * @memberOf module:images
     */
    module.init = function(){
        
        // register each element
        $(module.directive).each(module.svg_fallback);

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.images || {});