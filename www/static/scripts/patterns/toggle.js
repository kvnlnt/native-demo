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
     * toggle element target
     * @memberOf module:toggle
     * @param {Object} element - click event
     */
    module.toggle = function(element, target){

        // get clicked element
        var el = $(element);

        // toggle show class
        target.toggleClass('show');

        // rotate icon
        el.find('i').toggleClass('fa-rotate-90');

        return target;

    };

    /**
     * Get target from element
     * @memberOf module:toggle
     * @param {Object} element - click event
     */
    module.get_target = function(element){

        // get clicked element
        var el = $(element);

        // get target to toggle
        var target = $('#' + el.attr('['+module.directive+']'));

        return target;

    };


    /**
     * On click event
     * @memberOf module:toggle
     * @param {Object} element - click event
     */
    module.click = function(e){
        e.preventDefault();
        e.stopPropagation();
        var target = module.get_target(this);
        module.toggle(this, target);
        return e;
    };

    /**
     * Helper iterate function
     * @memberOf module:toggle
     * @param {number} k key or index
     * @param {object} v value
     */
    module.each = function(k, v){
        $(this).on('click', module.click);
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