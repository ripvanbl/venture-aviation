(function($, kendo) {
    window.bl = window.bl || {};
    window.bl.views = window.bl.views || {};
    
    window.bl.views.Main = function(templateId, options) {
        var view, 
        settings = $.extend({}, options);
        
        view = new kendo.View(templateId);
        
        return {
            view: view
        };
    };
})(window.jQuery, window.kendo);