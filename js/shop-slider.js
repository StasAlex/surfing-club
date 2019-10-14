$(document).ready(function(){

    const shopSlider = $("#shopSlider");

    shopSlider.owlCarousel({
        margin: 2,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            //breakpoint from 0 up
            0:{
                items: 1,
            },
            //breakpoint from 1200 up
            1254:{
                items: 3,
            }
        }
    });

    $('#shopSliderLeft').click(function() {
        console.log('left');
        shopSlider.trigger('prev.owl.carousel');
    })

    $('#shopSliderRight').click(function() {
        console.log('right');
        shopSlider.trigger('next.owl.carousel');
    })

    // headerSlider.on('changed.owl.carousel', function (event) {
    //     var count = event.item.count;
    //     var index = event.item.index;
    //     $('.slide-controls-number__active').text(index - 3);
    //     $('.slide-controls-number__total').text(count);
    // })
    //
    // headerSlider.on('initialized.owl.carousel', function (event) {
    //     var count = event.item.count;
    //     var index = event.item.index;
    //     $('.slide-controls-number__active').text(index+1);
    //     $('.slide-controls-number__total').text(count);
    // })

});