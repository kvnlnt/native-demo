/**
* Toggle directive
* @module toggle
* @version 1.0
*/

"use strict";

flowroute.toggle = (function(module){

    /** @exports toggle */

    /**
     * DOM elements
     * @member flowroute.toggle.el
     * @memberOf module:toggle
     */
    module.directive = '[fr-toggle]';

    /**
     * toggle element target
     * @function floworoute.toggle.toggle
     * @memberOf module:toggle
     * @param  {Object} e - click event
     */
    module.toggle = function(e){

        // prevent default
        e.preventDefault();
        e.stopPropagation();

        // get clicked element
        var el = $(this);

        // get target to toggle
        var target = $('#' + el.attr('fr-toggle'));

        // toggle show class
        target.toggleClass('show');

        // rotate icon
        el.find('i').toggleClass('fa-rotate-90');

    };

    /**
     * Initialize module
     * @function floworoute.toggle.init
     * @memberOf module:toggle
     */
    module.init = function(){
        
        // register each element
        $(module.directive).each(function(){
            $(this).on('click', module.toggle);
        });

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.toggle || {});