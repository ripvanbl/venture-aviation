(function($, kendo) {
    window.bl = window.bl || {};
    window.bl.views = window.bl.views || {};
    
    window.bl.views.Main = function(options) {
        var view,
        settings = $.extend({}, options);
        
        view = new kendo.View(settings.mainViewTemplateId);
        
        return {
            view: view
        };
    };
})(window.jQuery, window.kendo);