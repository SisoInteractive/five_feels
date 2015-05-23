
    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        direction: 'vertical',
        speed: 1000,
        spaceBetween: 100,
        noSwiping:true,
        parallax:true
    });

    var startX;
    var setTimeout1;
    var setTimeout2;

    mySwiper.on('onTouchStart', function (swiper, e) {
        //mySwiper.lockSwipeToPrev()
        var startX=e.changedTouches[0].pageY;
    });

    mySwiper.on('onTouchMove', function (swiper, e) {
        //mySwiper.lockSwipeToPrev()
        clearTimeout(setTimeout1);
        clearTimeout(setTimeout2);
    });

    mySwiper.on('onTransitionEnd', function (swiper){

        if (swiper.activeIndex == 1) {

            $('.scene02 .block-content').addClass('moveToNextScene');
            $('.block-content.moveToNextScene').show();
            $('.scene02 .block-content').show();
            setTimeout1 = setTimeout(function (){
                $('.block-content.moveToNextScene').fadeOut(900);
                setTimeout2 = setTimeout(function (){
                    mySwiper.slideNext();
                }, 800);
            }, 1300);

            $('.page3-text').hide();
            $('.page3').hide();
        }

        if( mySwiper.previousIndex ==2 && swiper.activeIndex == 1){
            mySwiper.slideTo(0, 800, false);
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
        }

        if (swiper.activeIndex == 0) {
            $('.scene02 .block-content').removeClass('moveToNextScene');
            $('.scene02 .block-content').show();
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
        }
        if (swiper.activeIndex == 2) {
            $('.scene02 .block-content').removeClass('moveToNextScene');
            $('.scene02 .block-content').show();
            clearTimeout(setTimeout1);
            clearTimeout(setTimeout2);
            $('.page3-text').fadeIn(400);
            var page3 = setTimeout(function(){
                $('.page3').fadeIn(1400);
            },300)
            //mySwiper.slideTo(0, 1000, false);
        }

        if (swiper.activeIndex == 7) {
            demo.start();
        }else{
            demo.reset();
        }

        console.log(swiper.activeIndex)
    });


