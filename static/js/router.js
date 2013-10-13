(function($, kendo) {
    window.bl = window.bl || {};
    
    window.bl.Router = function(options) {
        var router,
        settings = $.extend({}, options);
        
        router = new kendo.Router({ 
            routeMissing: function() {
                router.navigate('/');
            }
        });
        
        router.route('/', settings.noRouteCallback);
        
        return router;
    };
})(window.jQuery, window.kendo);