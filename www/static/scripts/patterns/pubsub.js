/**
 * Publish/Subscribe module
 * @module pubsub
 * @version 1.0
 * @example USAGE
 * // subscribe handler to event
 * flowroute.pubsub.subscribe("/some/topic", handle);
 * // Unsubscribe handler from event
 * flowroute.pubsub.unsubscribe("/some/topic", handle);
 * // publish event with data
 * flowroute.pubsub.publish("/some/topic", [ "a", "b", "c" ]); 
 */

flowroute.pubsub = (function(module) {

    "use strict";

    /** @exports pubsub  */

    // event object
    module.o = $({});

    /**
     * Subscribe to event
     * @memberOf module:pubsub
     */
    module.subscribe = function() {
        module.o.on.apply(module.o, arguments);
    };

    /**
     * Unsubscribe to event
     * @memberOf module:pubsub
     */
    module.unsubscribe = function() {
        module.o.off.apply(module.o, arguments);
    };

    /**
     * Publish event
     * @memberOf module:pubsub
     */
    module.publish = function() {
        module.o.trigger.apply(module.o, arguments);
    };

    // export
    return module;

})(flowroute.pubsub || {});
