/**
 * Created by wangZhi on 2016/8/19.
 */
/*------------------------滚动事件 start------------------------*/
function scrollBind() {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 100;
        var scrollTop = $(window).scrollTop();
        var navDefault = $('.navbar-default');
        scrollTop > navHeight ? navDefault.addClass('on'):navDefault.removeClass('on');
    });
}
/*------------------------滚动事件 end------------------------*/

/*------------------------点击导航变色和滚动效果 start------------------------*/
function clickNavScroll() {
    var pageScrollA = $('a.page-scroll');
    pageScrollA.on('click' , function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });
}
/*------------------------点击导航变色和滚动效果 end------------------------*/

/*------------------------轮播banner封装(放4个) start------------------------*/
function bannerPicCol4( obj ) {
    $(obj).owlCarousel({
        slideSpeed : 200,
        paginationSpeed : 2000,
        itemsCustom : [
            [0,1],
            [450,1],
            [600,1],
            [700,2],
            [1000,4],
            [1200,4],
            [1400,4],
            [1600,5]
        ]
    });
}
/*------------------------轮播banner封装(放4个) end------------------------*/

/*------------------------轮播banner封装(放5个) start------------------------*/
function bannerPicCol5( obj ) {
    $(obj).owlCarousel({
        slideSpeed : 200,
        paginationSpeed : 2000,
        itemsCustom : [
            [0,1],
            [450,1],
            [600,1],
            [700,2],
            [1000,5],
            [1200,5],
            [1400,5],
            [1600,5]
        ]
    });
}
/*------------------------轮播banner封装(放5个) end------------------------*/

/*------------------------过滤选项卡效果封装 start------------------------*/
function isoTope( objDiv , catUlA ) {
    var $container = $(objDiv);
    var $catA = $(catUlA);
    $container.isotope({
        filter : '*',
        animationOption : {
            duration : 750,
            easing : 'linear'
        }
    });
    $catA.on('click', function () {
        $catA.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter : selector,
            animationOption : {
                duration : 750,
                easing : 'linear'
            }
        });
        return false;
    });
}
/*------------------------过滤选项卡效果封装 end------------------------*/

/*------------------------滚动监听效果 start------------------------*/
function scrollSpy() {
    $('body').scrollspy({
        target : '.navbar-default',
        offset : 80
    });
}
/*------------------------滚动监听效果 end------------------------*/