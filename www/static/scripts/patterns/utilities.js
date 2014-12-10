/**
 * Animations
 * @module util
 * @version 1.0
 */

flowroute.util = (function(module) {

    "use strict";

    /** @exports util  */

    /**
     * Debounce function
     * @param {function} func The function to be debounced
     * @param {number} wait milliseconds to wait
     * @param {boolean} immedaite on true, trigger on leading edge, else tailing
     * @type {[type]}
     */
    module.debounce = function(func, wait, immediate) {

        // timeout obj
        var timeout;

        // wrapper function
        return function() {

            var context = this;
            var args    = arguments;
            var later   = function() {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);

        };

    };

    // export
    return module;

})(flowroute.util || {});