/**
 * All Parts
 * @module parts
 * @version 1.0
 */

flowroute.parts = (function(module) {

    "use strict";

    /** @exports parts  */

    /**
     * DOM directive (aka jquery selector)
     * @memberOf module:parts
     */
    module.directive = 'section';

    /**
     * Collection of parts on page
     * @memberOf module:parts
     */
    module.parts = [];

    /**
     * On part view, add viewed class
     * @memberOf module:parts
     */
    module.on_view = function(el) {

        // get part
        var part = $(el);

        // has it been viewed?
        var been_viewed = part.hasClass('viewed');

        // no? add a class and call methods
        if (!been_viewed) {
            part.addClass('viewed');
            flowroute.analytics.log('part', 'viewed', part);
        }

        return el;

    };

    /**
     * Tracks parts in view and calls corresponding functions
     * @memberOf module:parts
     */
    module.track_views = function() {

        // get parts that have not been viewed
        var unviewed = module.parts.not('.viewed');

        // get all parts in view and mark them viewed
        unviewed.each(function(k, v){
            var is_being_viewed = flowroute.viewport.contains_part(v);
            if(is_being_viewed){ module.on_view(v); }
        });

        return unviewed;

    };

    /**
     * Initialize module
     * @memberOf module:parts
     */
    module.init = function() {

        // collect parts
        module.parts = $(module.directive);

        // register wow parts
        flowroute.pubsub.subscribe('VIEWPORT:UPDATE', module.track_views);

        // call manually on init
        module.track_views();

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.parts || {});