$(document).ready(function(){

    const headerSlider = $("#headerSlider");

    headerSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    $('#headerSliderLeft').click(function() {
        console.log('left');
        headerSlider.trigger('prev.owl.carousel');
    })

    $('#headerSliderRight').click(function() {
        console.log('right');
        headerSlider.trigger('next.owl.carousel');
    })

    headerSlider.on('changed.owl.carousel', function (event) {
        var count = event.item.count;
        var index = event.item.index;
        $('.slide-controls-number__active').text(index - 3);
        $('.slide-controls-number__total').text(count);
    })

    headerSlider.on('initialized.owl.carousel', function (event) {
        var count = event.item.count;
        var index = event.item.index;
        $('.slide-controls-number__active').text(index+1);
        $('.slide-controls-number__total').text(count);
    })

});