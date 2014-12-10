/**
 * All Parts
 * @module parts
 * @version 1.0
 */

flowroute.parts = (function(module) {

    "use strict";

    /** @exports parts  */

    /**
     * Parts identifying selector
     * @member flowroute.parts.directive
     * @memberOf module:parts
     */
    module.directive = 'section';

    /**
     * Collection of parts on page
     * @member flowroute.parts.parts
     * @memberOf module:parts
     */
    module.parts = [];

    /**
     * On view event
     * @function floworoute.parts.mark_viewed
     * @memberOf module:parts
     */
    module.mark_viewed = function(el) {

        // get part
        var part = $(el);

        // has it been viewed?
        var been_viewed = part.hasClass('viewed');

        // no? add a class and call methods
        if (!been_viewed) {
            part.addClass('viewed');
            flowroute.analytics.log('part', 'viewed', part);
        }

        return part;

    };

    /**
     * Get parts in view port
     * @function floworoute.parts.track_views
     * @memberOf module:parts
     */
    module.track_views = function(viewClass) {

        var viewClass = '.viewed' || viewClass;
        var unviewed = module.parts.not(viewClass);

        // get all parts in view and mark them viewed
        unviewed.each(function(k, v){
            var is_being_viewed = flowroute.viewport.contains_part(v);
            if(is_being_viewed){ module.mark_viewed(v); }
        });

        return unviewed;

    };

    /**
     * Initialize module
     * @function floworoute.parts.init
     * @memberOf module:parts
     */
    module.init = function() {

        // collect parts
        module.parts = $(module.directive);

        // register wow parts
        flowroute.pubsub.subscribe('VIEWPORT:SCROLL', module.track_views);

        // call manually on init
        module.track_views();

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.parts || {});