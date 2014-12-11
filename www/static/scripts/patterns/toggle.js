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
    module.directive = '[fr-toggle]';

    /**
     * toggle element target
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