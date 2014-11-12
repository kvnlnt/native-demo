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
     * @param  {object} e click event
     * @return {null}
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
     * @return {[type]} [description]
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