/**
* Main menu module
* @namespace menu
* @version 1.0
*/

flowroute.menu = (function(module){

    // register dom elements
    var el           = module.el = {};
    el.main          = $("#menu .main");
    el.links         = $("#menu .main .links");
    el.page_links    = $("#menu .main .links .page");
    el.account_links = $("#menu .main .links .account");
    el.menu          = $("#menu");
    el.top           = $("#menu .top");
    el.toggle        = $("#menu .toggle");
    
    /**
     * Toggle menu hamburger
     * @memberof menu
     * @param  {object} e - click event
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
     * Initialize module
     * @memberof menu
     */
    module.init = function(){
        
        // toggle menu on click
        el.toggle.on('click', module.toggle);

    };

    // boot file
    $(document).on('ready', module.init);

    // return the module
    return module;

})(flowroute.menu || {});