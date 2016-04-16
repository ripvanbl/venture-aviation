(function($, kendo) {
    window.bl = window.bl || {};

    window.bl.templateLoader = function(path, id) {
        var deferred;

        deferred = $.Deferred();

        $.get(path).done(function(result) {
            $('body').append('<script id="' + id + '" type="text/x-kendo-template">' + result + '</script>');
            deferred.resolve(id);
        }).fail(function(result) {
            kendo.logToConsole('Error loading template: ' + path);
            deferred.reject(id);
        });

        return deferred.promise();
    };
})(window.jQuery);