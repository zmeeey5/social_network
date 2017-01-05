(function ($){
    'use strict';

    var $dropDown = $('._dropDown');
    var $postDate = $('#postDate');

    $dropDown.on('click', function (e) {
        var $el = $(e.target).closest('._dropDown');

        $el.toggleClass('is-open');
    });

    $postDate.pickadate({
        selectMonths: true,
        selectYears: 17
    });
})(jQuery);
