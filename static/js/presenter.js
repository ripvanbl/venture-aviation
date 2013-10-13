(function($, kendo) {
    var settings, router, layout, mainView, noRouteCallback;

    window.bl = window.bl || {};

    settings = {
        router: null,
        mainViewTemplateId: null
    };

    noRouteCallback = function() {
        if (!mainView) {
            window.bl.templateLoader('../layout/main.html', 'main-template').done(function(id) {
                settings.mainViewTemplateId = id;
                mainView = new window.bl.views.Main(settings);
                layout.showIn('#layout', mainView.view);
            });
        }
        else {
            layout.showIn('#layout', mainView.view);
        }
    };

    layout = new kendo.Layout('<section id="layout"></section>');

    settings.router = new window.bl.Router({
        noRouteCallback: noRouteCallback
    });

    layout.render($('#app'));
    settings.router.start();
})(window.jQuery, window.kendo);