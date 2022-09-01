$(function() {
    $(window).on('resize load', function () {
        //mainVertical();
    });	
	mainVertical();
	mainVisual();
	mainBusiness();
	pcNav();
	moNav();
});

// 메인 - 메인비주얼
function mainVertical() {
    var mainVertical = new Swiper('.fullscreen', {
        direction: 'vertical',
        effect: 'slide',
        slidesPerView: 'auto',
        speed: 800,
        allowTouchMove:false,
        simulateTouch:false,
        touchStartPreventDefault:false,
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				observer : true,
				observeParents : true,
        mousewheel: {
            releaseOnEdges: true,
						invert: false,
        },
        mousewheelControl: true,
        pagination: {
            el: '.fullscreen .swiper-pagination',
            clickable : true,
        },

        on:{
			init: function(){
			},
			transitionStart: function(){
				if(this.activeIndex != 0){
					$('.btn_top_wrap').fadeIn(500);
				}else{
					$('.btn_top_wrap').fadeOut(500);
				}
				
				//footer_section pagenation, header 삭제
				if ($('.footer_section').hasClass('swiper-slide-visible')) {
					$('#header_wrap').addClass('on');
					$('.swiper-pagination').css({'display':'none'})
				} else {
					$('#header_wrap').removeClass('on');
					$('.swiper-pagination').css({'display':'block'})
				}
			},
			transitionEnd: function(){		
			},
		},

    breakpoints: {
			1024: {
				allowTouchMove:true,
				simulateTouch:true,
				grabCursor: true,
				touchStartPreventDefault:true,
			},
		},
  });
	// $('.btn_top_wrap a').click(function(){
	// 	mainVertical.slideTo(0,600);
	// });
}

// 메인 - 메인비주얼
function mainVisual() {
	var mainslider = new Swiper('.mainvisual', {
    speed: 1000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    effect: "fade",
    allowTouchMove : true,
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    observer: true,
		observeParents: true,
  	// loop: true,
    
    scrollbar: {
      el: ".mainvisual .swiper-scrollbar",
			//draggable: true,
    },
    on: {
      init: function () {
        $(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").removeClass("animate");
        $(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
      },
      slideChangeTransitionStart: function () {
        $(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").removeClass("animate");
      },
      slideChangeTransitionEnd: function () {
        $(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
      }
    },
     pagination: {
      el: '.mainvisual .swiper-pagination',      
      type: 'fraction',
      clickable : true,
    },    
    navigation: {
      nextEl: '.mainvisual .swiper-button-next',
      prevEl: '.mainvisual .swiper-button-prev',
    },
      
  }); 
  
  $(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
  
  // 메인 - 메인비주얼 Play/Stop
	$('.mainvisual .swiper-play-pause').on("click", function () {
			var $this = $(this);
			if ($this.hasClass('pause')) {
					$this.removeClass('pause').addClass('play').text('Play');
					mainslider.autoplay.start();
					/* mainslider.slideNext(); */
					$(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").eq(0).addClass("animate");
					
			} else {
			$this.addClass('pause').removeClass('play').text('Pause');
					mainslider.autoplay.stop();
					$(".mainvisual .swiper-scrollbar .swiper-scrollbar-drag").removeClass("animate");
			}
	});
}

// 메인 - 사업소개
function mainBusiness() {
		var businessinfo = new Swiper('.businessinfo', {
			speed: 300,
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
			slidesPerView: 1,
			loop: true,
			observer: true,
			observeParents: true,
	});
	
	//탭메뉴
	businessinfo.on('slideChange', function () {
			$('.business_nav li').removeClass('on');
			$('.business_nav li').eq(this.realIndex).addClass('on');
			$('.business_text li').removeClass('on');
    	$('.business_text li').eq(this.realIndex).addClass('on');
	});
	$('.business_nav li').on("click", function () {
			var index = $(this).index();
			businessinfo.slideToLoop(index,300,false);
	});	
}

// PC 네비
function pcNav() {
	$('.gnb ul li .dep2').hide();
	
	$('.gnb > ul').on('mouseenter focusin', function(){
			$(this).find('.dep1').addClass('on');
			$(this).find('.dep2').stop().slideDown('300');			
			$('.header .util a').addClass('on');
			$('.header .logo a').addClass('on');
			$('.gnb .gnb_bg').addClass('on');
			//$(".gnb").find('.gnb_bg').stop(true, false).animate({"height":"400"}, 300);		
	});
	$('.gnb > ul').on('mouseleave focusout',function(){
			$(this).find('.dep1').removeClass('on');
			$(this).find('.dep2').stop().slideUp('300');
			$('.header .util a').removeClass('on');
			$('.header .logo a').removeClass('on');
			$('.gnb .gnb_bg').removeClass('on');
			//$(".gnb").find('.gnb_bg').stop(true, false).animate({"height":"0"}, 300);
	});

	$(".gnb > ul li").on('mouseenter focusin', function(){
			$(this).find('.dep1').addClass('active');
	});
	$(".gnb > ul li").on('mouseleave focusout',function(){
			$(this).find('.dep1').removeClass('active');
	});
	
	
}

// 모바일 mo_nav_open 
// function moNav() {
// 	$('.btn_nav_open').on('click',function(){
// 		var href = $(this).attr("href");
// 		$('.mo_nav_wrap' + href).addClass('on');
// 		$('body').css({'height':$(window).height(), 'overflow':'hidden'});
// 	});
// 	$('.mo_nav_wrap .btn_close').on('click', function(e){
// 		e.preventDefault();
// 		$('.mo_nav_wrap').removeClass('on');
// 		$('body').css({'height':$(window).height(), 'overflow':'auto'});
// 	});
// }

