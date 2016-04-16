(function($, kendo) {
    var settings, layout,
    mainView, terminalAviationView,
    noRouteCallback, terminalAviationCallback;

    window.bl = window.bl || {};

    settings = {
        router: null
    };


    /* NOTE: 
        These callbacks should eventually be moved into 
        dependency modules instead of being declared here. 
    */

    noRouteCallback = function() {
        if (!mainView) {
            window.bl.templateLoader('../layout/main.html', 'main-template').done(function(templateId) {
                mainView = new window.bl.views.Main(templateId, settings);
                layout.showIn('#layout', mainView.view);
            });
        }
        else {
            layout.showIn('#layout', mainView.view);
        }
    };

    terminalAviationCallback = function() {
        if (!terminalAviationView) {
            window.bl.templateLoader('../layout/terminal-aviation/main.html', 'terminal-aviation-main-template').done(function(templateId) {
                terminalAviationView = new window.bl.views.TerminalAviation(templateId, settings);
                layout.showIn('#layout', terminalAviationView.view);
            });
        }
        else {
            layout.showIn('#layout', terminalAviationView.view);
        }
    };

    // Get the main layout situated
    layout = new kendo.Layout('<section id="layout"></section>');

    // Configure the client-side router with our known navigation callbacks
    settings.router = new window.bl.Router({
        noRouteCallback: noRouteCallback,
        terminalAviationCallback: terminalAviationCallback
    });

    // Let's rock!
    layout.render($('#app'));
    settings.router.start();

})(window.jQuery, window.kendo);