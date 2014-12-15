/**
 * Tracks DOM elements that have been presented in viewport
 * @module tracker
 * @version 1.0
 */

flowroute.tracker = (function(module) {

    "use strict";

    /** @exports tracker  */

    /**
     * Directive (aka html attribute to look for)
     * @memberOf module:tracker
     */
    module.directive = 'fr-track';

    /**
     * CSS class name used to keep track of tracked objects
     * @memberOf module:tracker
     */
    module.tracked = 'tracked';

    /**
     * Elements collected from current page
     * @memberOf module:tracker
     */
    module.elements = [];

    /**
     * On element view, add tracked class
     * @memberOf module:tracker
     */
    module.on_view = function(el) {

        // get element
        var element = $(el);

        // has it been viewed? let's double check
        var been_tracked = element.hasClass(module.tracked);

        // grab tracking value from directive
        var value = element.attr(module.directive);

        // no? add a class and call methods
        if (!been_tracked) {
            element.addClass(module.tracked);
        }

        return el;

    };

    /**
     * Tracks tracker in view and calls corresponding functions
     * @memberOf module:tracker
     */
    module.track = function(e, elements) {

        // get tracker that have not been viewed
        var elements = elements || module.elements;
        var unviewed = elements.not('.'+module.tracked);

        // get all tracker in view and mark them viewed
        unviewed.each(function(k, v){
            var is_being_viewed = flowroute.viewport.contains_part(v);
            if(is_being_viewed){ module.on_view(v); }
        });

        return unviewed;

    };

    /**
     * Initialize module
     * @memberOf module:tracker
     */
    module.init = function() {

        // collect tracker
        module.elements = $('['+module.directive+']');

        // register wow tracker
        flowroute.pubsub.subscribe('VIEWPORT:UPDATE', module.track);

        // call manually on init
        module.track();

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.tracker || {});