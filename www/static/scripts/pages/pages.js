var pages = (function(module){
    
    module.init = function(){
        console.log('page loaded');
    };

    $(document).on('ready', module.init);

})(pages || {});