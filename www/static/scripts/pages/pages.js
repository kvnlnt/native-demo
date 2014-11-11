var pages = (function(module){
    
    module.init = function(){
        console.log('page has loaded');
    };

    $(document).on('ready', module.init);

})(pages || {});