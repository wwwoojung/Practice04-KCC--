$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop()

        if (sct > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        };
    })

    $('.main_visual .visual_slide').on('init', function () {
        const current = $('.visual_slide .slick-current');

        const a = new Array(6);
        for (let i = 0; i < a.length; i++) {
            current.find('.slide').append('<div class="s"><span class="bg"></span></div>')
        }

        const span = $('.slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(../images/main_slide01.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        })

        current.addClass('on').siblings().removeClass('on');
    })

    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 0,
        fade: true,
    });

    $('.main_visual .visual_slide').on('beforeChange', function () {
        $('.circle').removeClass('on')
        $('.slick-slide').find('.slide .bg').css({ width: 0 });
        $('.slick-slide').find('.slide').children().remove();
    })

    $('.main_visual .visual_slide').on('afterChange e', function (e, s, c) {
        const current = $('.visual_slide .slick-current');
        console.log(c, s.slideCount);

        $('.main_visual .slide_box .slide_num .slides').text(s.slideCount);
        $('.main_visual .slide_box .slide_num .current').text(c ? (c + 1) : 1);

        $('.main_visual .slide_box .slide_text li').removeClass('on');
        $('.main_visual .slide_box .slide_text li').eq(c).addClass('on');

        $('.circle').addClass('on');

        const a = new Array(6);
        for (let i = 0; i < a.length; i++) {
            current.find('.slide').append('<div class="s"><span class="bg"></span></div>')
        }

        const span = $('.slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(../images/main_slide0${c + 1}.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        })

        current.addClass('on').siblings().removeClass('on');
    });

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

    $('#video').YTPlayer({
        videoURL: 'https://youtu.be/-PiJlB3JJ9Y',
        containment: '.video_box',
        autoPlay: false,
        optimizeDisplay: false,
        showControls: false,
        playOnlyIfVisible: true,
    });

    let play = true
    $('.main_cm .video_box .control').on('click', function () {
        $(this).toggleClass('on')

        if (play) {
            $('#video').YTPPlay();
        } else {
            $('#video').YTPPause();
        }

        play = !play;
    })
})