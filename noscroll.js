$(function() {
    var oldScroll = window.onscroll;
    $(document).on('focus', 'input', function(e) {
        window.onscroll = function () { 
            window.scroll(0,0); 
        } ;
        setTimeout(function() {
            window.onscroll = oldScroll;
        }, 100);
    });

});
