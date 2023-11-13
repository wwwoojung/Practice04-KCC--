$(function () {
    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.main_visual .visual_slide').on('init afterChange e', function (e, s, c) {
        const current = $('.visual_slide .slick-current');
        console.log(c, s.slideCount);

        $('.main_visual .slide_box .slide_num .slides').text(s.slideCount);
        $('.main_visual .slide_box .slide_num .current').text(c ? (c + 1) : 1);

        $('.main_visual .slide_box .slide_text li').eq(c).addClass('on')
            .siblings().removeClass('on');
    })
})