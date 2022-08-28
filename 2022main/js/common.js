$(function() {
    $(window).on('resize load', function () {
        //mainVertical();
    });	
	mainVertical();
	gnbMenu();
	pointer();
	moNav();
	moMember();
});

// 메인 - 서비스소개
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
				
				var footHeight = $('.footer_section').outerHeight();
				if($('.footer_section').hasClass('swiper-slide-visible')){
					$('.btn_top_wrap').css('position','fixed').css('bottom',footHeight + 70).addClass('on');
					$('.swiper-pagination').css({'display':'none'})
				}else{
					$('.btn_top_wrap').css('position','fixed').css('bottom','70px').removeClass('on');
					$('.swiper-pagination').css({'display':'block'})
				}

				if ($(window).width() < 720) {
					var footHeight = $('.footer_section').outerHeight();
					if($('.footer_section').hasClass('swiper-slide-visible')){
						$('.btn_top_wrap').css('position','fixed').css('bottom',footHeight + 40).addClass('on');
					}else{
						$('.btn_top_wrap').css('position','fixed').css('bottom','40px').removeClass('on');
					}
				}
			},
			transitionEnd: function(){		
			},
			// reachEnd: function () {
			// 	$('.swiper-pagination').css({"display":"none"})
			// },
			// slidePrevTransitionStart: function () {
			// 	$('.swiper-pagination').css({"display":"block"})
			// },
			// slideChangeTransitionEnd: function(){
			// 	alert(this.activeIndex);
			// },
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

    $('.btn_top_wrap a').click(function(){
		mainVertical.slideTo(0,600);
	});
	
}

// 상단메뉴 페이지인식
function gnbMenu(depth1) {
    $('.gnb li').eq(depth1-1).find('> a').addClass('on');
}

// 모바일 mo_nav_open 
function moNav() {
	$('.btn_nav_open').on('click',function(){
		var href = $(this).attr("href");
		$('.mo_nav_wrap' + href).addClass('on');
		$('body').css({'height':$(window).height(), 'overflow':'hidden'});
	});
	$('.mo_nav_wrap .btn_close').on('click', function(e){
		e.preventDefault();
		$('.mo_nav_wrap').removeClass('on');
		$('body').css({'height':$(window).height(), 'overflow':'auto'});
	});
}

//모바일 - 반려인, 사장님 셀렉트박스
function moMember() {
	$(".mo_member dt a").click(function(e) {
		e.preventDefault();
		$(".mo_member dd ul").toggle();
	});
	$(".mo_member dd ul li a").click(function(e) {
		e.preventDefault();
		var text = $(this).html();
		$(".mo_member dt a span").html(text);
		$(".mo_member dd ul").hide();
	});
}

//마우스 포인터
function pointer() {
	var cursor = $(".pointer");
	$(document).mousemove(function (e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		console.log(e.pageX, e.pageY);
		cursor.css({
			top: mouseY + "px",
			left: mouseX + "px"
		});

		$("a, button, .swiper-pagination-bullet, input[type=submit]").on("mouseenter mouseleave", function (e) {
			if (e.type == "mouseenter") {
				cursor.addClass("on");
			} else if (e.type == "mouseleave") {
				cursor.removeClass("on");
			}
		});
	})
}