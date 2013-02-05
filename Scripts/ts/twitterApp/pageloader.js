define(["require", "exports"], function(require, exports) {
    var PageLoader = (function () {
        function PageLoader() {
            this.$loader = $('<div>', {
                id: 'loader'
            }).css({
                display: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)'
            }).html('<div class="loader-text" style="margin-top: 10%; font-size: 50px; text-align: center;">Loading...</div>').appendTo('body');
        }
        PageLoader.prototype.showLoader = function () {
            this.$loader.fadeIn('fast');
        };
        PageLoader.prototype.hideLoader = function () {
            this.$loader.fadeOut('fast');
        };
        return PageLoader;
    })();
    exports.PageLoader = PageLoader;    
})
