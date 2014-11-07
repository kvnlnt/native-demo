var menu = (function(module){

    var DOM           = {};
    DOM.main          = $("#menu .main");
    DOM.links         = $("#menu .main .links");
    DOM.page_links    = $("#menu .main .links .page");
    DOM.account_links = $("#menu .main .links .account");
    DOM.menu          = $("#menu");
    DOM.top           = $("#menu .top");
    DOM.toggle        = $("#menu .toggle");
    
    module.toggle = function(e){
        e.preventDefault();
        DOM.links.toggleClass('hidden');
        DOM.toggle.find('i').toggleClass('fa-rotate-90');
    };

    module.init = function(){
        
        DOM.toggle.on('click', module.toggle);

    };

    // boot file
    $(document).on('ready', module.init);

})(menu || {});