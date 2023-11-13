$(function () {
    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.main_visual .visual_slide').on('init afterchange', function (e, s, c) {
        const current = $('.visual_slide .slick-current')
        console.log
    })
})