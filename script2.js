$(document).ready(function () {
    $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.find('figcaption').text() || item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // Smooth zoom effect
            easing: 'ease-in-out',
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true, // Allows clicking on images to navigate
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tCounter: '' // Hides counter (e.g., "1 of 5")
        },
        disableOn: function () {
            return $(window).width() > 640; // Disable popup for smaller screens
        }
    });
});
