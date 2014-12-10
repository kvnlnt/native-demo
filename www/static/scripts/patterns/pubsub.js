/**
 * Publish/Subscribe
 * @module pubsub
 * @version 1.0
 * Usage:
 * flowroute.pubsub.subscribe("/some/topic", handle);
 * flowroute.pubsub.publish("/some/topic", [ "a", "b", "c" ]);
 * flowroute.pubsub.unsubscribe("/some/topic", handle); // Unsubscribe just this handler
 */

flowroute.pubsub = (function(module) {

    "use strict";

    /** @exports pubsub  */

    var o = $({});

    module.subscribe = function() {
        o.on.apply(o, arguments);
    };

    module.unsubscribe = function() {
        o.off.apply(o, arguments);
    };

    module.publish = function() {
        o.trigger.apply(o, arguments);
    };

    // export
    return module;

})(flowroute.pubsub || {});
