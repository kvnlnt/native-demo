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
    module.directive = 'fr-image';

    /**
     * Container for all registered elements
     * @memberOf module:images
     */
    module.elements = [];

    /**
     * Graceful degradation for SVG images
     * @memberOf module:images
     */
    module.degrade_svg = function(el){

        // get params
        this.el     = el;
        this.$el    = $(el);
        this.src    = this.$el.attr('src');
        this.image  = this.$el.attr(module.directive);
        this.newsrc = this.image.length ? this.image : this.src.replace('.svg','.png');

        // replace
        this.$el.attr('src', this.newsrc);

        // return func
        return this;

    };

    /**
     * Helper iterate function
     * @memberOf module:images
     * @param {number} k key or index
     * @param {object} v value
     */
    module.each = function(k, v){

        module.elements.push(new module.degrade_svg(v));
        return this;

    };

    /**
     * Initialize module
     * @memberOf module:images
     */
    module.init = function(){
        
        // gracefully degrade svg images
        if(!Modernizr.svg){ 
            $('['+module.directive+']').each(module.each);
        }

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.images || {});