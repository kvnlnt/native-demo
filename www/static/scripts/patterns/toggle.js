/**
* Toggle directive
* @module toggle
* @version 1.0
* @example USAGE
* // shows result on click
* <a fr-toggle="showme">show the hidden content</a>
* <div id="showme" style="display:none;">I'm currently hidden</div>
*/

flowroute.toggle = (function(module){

    "use strict";

    /** @exports toggle */

    /**
     * DOM elements
     * @memberOf module:toggle
     */
    module.directive = 'fr-toggle';

    /**
     * Container for all registered toggle elements
     * @memberOf module:toggle
     */
    module.elements = [];

    /**
     * Toggle function
     * @memberOf module:toggle
     * @param {Object} element - click event
     */
    module.toggle = function(el, target){

        // set element
        var that     = this;
        this.el      = el;
        this.$el     = $(el);
        this.target  = target || $('#'+this.$el.attr(module.directive));
        this.$target = $(this.target);

        // toggle target on el click
        this.$el.on('click', function(e){
            that.$target.toggleClass('show');
            that.$el.find('i').toggleClass('fa-rotate-90');
        });

        // return func
        return this;

    };

    /**
     * Helper iterate function
     * @memberOf module:toggle
     * @param {number} k key or index
     * @param {object} v value
     */
    module.each = function(k, v){

        module.elements.push(new module.toggle(v));
        return this;

    };

    /**
     * Initialize module
     * @memberOf module:toggle
     */
    module.init = function(){
        
        // register each element
        $('['+module.directive+']').each(module.each);

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.toggle || {});