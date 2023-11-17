$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop()

        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        };
    })

    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
    });

    $('.main_visual .visual_slide').on('init afterChange e', function (e, s, c) {
        const current = $('.visual_slide .slick-current');
        console.log(c, s.slideCount);

        $('.main_visual .slide_box .slide_num .slides').text(s.slideCount);
        $('.main_visual .slide_box .slide_num .current').text(c ? (c + 1) : 1);

        $('.main_visual .slide_box .slide_text li').eq(c).addClass('on')
            .siblings().removeClass('on');

        $('.circle').addClass('on');
    });

    $('.main_visual .visual_slide').on('beforeChange', function () {
        $('.circle').removeClass('on')
    })

    $('.main_visual .slide_box .control .left').on('click', function () {
        $('.main_visual .visual_slide').slick('slickPrev')
    })

    $('.main_visual .slide_box .control .right').on('click', function () {
        $('.main_visual .visual_slide').slick('slickNext')
    })

    let st = true;
    $('.main_visual .slide_box .control .play').on('click', function () {
        $(this).toggleClass('on');
        $('.main_visual .slide_box .circle').toggleClass('stop');

        if (st) {
            $('.main_visual .visual_slide').slick('slickPause')
        } else {
            $('.main_visual .visual_slide').slick('slickPlay')
        }

        st = !st;
    })

    $('.main_notice .news_content a').on('click', function (e) {
        e.preventDefault()
    })

    $('#promotion').YTPlayer({
        videoURL: 'https://youtu.be/-PiJlB3JJ9Y',
        containment: '.main_TV .movie_case',
        showControls: false,
        optimizeDisplay: false,
        playOnlyIfVisible: true,
        autoPlay: false,
    });



    let movie = true;


    $('.movie_play').on('click', function () {
        if (movie) {
            $('#promotion').YTPPlay();
        }
        else {
            $('#promotion').YTPPause();
        }

        $(this).toggleClass('on');

        movie = !movie;
    })

    $(window).on('scroll', function () {
        const sct = $(this).scrollTop();

        if (sct > 200) {
            $('.totop').addClass('on')
        } else {
            $('.totop').removeClass('on')
        }
    })

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
})