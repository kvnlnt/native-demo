/**
* All menu functionality is contained within this module.
* @module menu
* @version 1.0
*/

"use strict";

flowroute.menu = (function(module){

    /** @exports menu */

    /**
     * DOM elements
     * @member flowroute.menu.el
     * @memberOf module:menu
     */
    var el           = module.el = {};
    el.main          = $("#menu .main");
    el.links         = $("#menu .main .links");
    el.page_links    = $("#menu .main .links .page");
    el.account_links = $("#menu .main .links .account");
    el.menu          = $("#menu");
    el.top           = $("#menu .top");
    el.toggle        = $("#menu .toggle");
    el.toggle_sub    = $("#menu .toggle-sub");

    /**
     * toggles menu hamburger button
     * @function flowroute.menu.toggle
     * @memberOf module:menu
     * @param  {Object} e - click event
     */
    module.toggle = function(e){

        // prevent default
        e.preventDefault();

        // toggle show class
        el.links.toggleClass('show');

        // rotate hamburger
        el.toggle.find('i').toggleClass('fa-rotate-90');

    };

    /**
     * toggles submenus dropwdown button
     * @function flowroute.menu.toggle
     * @memberOf module:menu
     * @param  {Object} e - click event
     */
    module.toggle_sub = function(e){

        // prevent default
        e.preventDefault();

        // get element
        var element = $(e.target);

        // get submenu
        var submenu = element.siblings('.sub');

        // toggle show class
        submenu.toggleClass('show');

        // rotate hamburger
        element.find('i').toggleClass('fa-rotate-270');

    };    

    /**
     * Initialize module
     * @function flowroute.menu.init
     * @memberOf module:menu
     */
    module.init = function(){
        
        // toggle menu on click
        el.toggle.on('click', module.toggle);
        el.toggle_sub.on('click', module.toggle_sub);

    };

    // boot file
    $(document).on('ready', module.init);

    // export
    return module;

})(flowroute.menu || {});