/*============================Menu Table===================
- 1, init
- 2, header
- 3, toteHot
- 4, toteSelling
- 5, feedback
- 6, instagram 
- 7, slider
- 8, scroll
*/
/* ============================= 1, init  ============================= */

$(document).ready(function() {
	$('.loader').delay(1000).fadeOut('slow');
	header.init();
	toteHot.init();
	toteSelling.init();
	feedback.init();
	instagram.init();
	slider.init();
	scroll.init();
});

/* ============================= 2, header ============================= */
const header = {
	init: function () {
		this.addContainer();
		this.clickBars();
	},
	addContainer: function () {
		let wightScreen=screen.width;
		let childWrapper=document.querySelector('.header .left ul');
		$(window).on("resize load",function(){
			wightScreen=screen.width;
			if(wightScreen<767){
				childWrapper.classList.add('container')
			}else{
				childWrapper.classList.remove('container')
			}
		})
	},
	clickBars:function(){
		$('.bars .menu').click(function(e){
			e.stopPropagation();
			$('.header .nav').toggleClass('active');
		})
	}
}
/* ============================= 3,toteHot  ============================= */
const toteHot = {
	init: function () {
		this.toteHotSlider();
		this.hoverDots();
	},
	toteHotSlider: function () {
		$('.tote-hot__slider').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			loop:false,
			dots:false,
			nav:false,
			responsive:{
				0:{
					items:2,
					margin:0
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		})
	},
	hoverDots:function(){
		$('.product-item .category span').hover(function(){
			let nameImg=$(this).attr('data-img');
			let elementImg=$($(this).parents()[2]).find('.img-show img:first-child');
			$(elementImg).attr('src',`assets/images/${nameImg}`)
		})
	}
	
}
/* ============================= 4,toteSelling  ============================= */
const toteSelling = {
	init: function () {
		this.toteSellingSlider();
	},
	toteSellingSlider: function () {
		$('.tote-selling__slider').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			loop:false,
			dots:false,
			nav:false,
			responsive:{
				0:{
					items:2,
					margin:0
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		})
	}
}
/* ============================= 5,feedback  ============================= */
const feedback  = {
	init: function () {
		this.feedbackSlider();
	},
	feedbackSlider: function () {
		let position = 0;
		let heightItem;
		let heightWrapper;
		//height item
		$(window).on('load resize',function(){
			heightItem=$('.feedback__slider-item').outerHeight(true);
			heightWrapper=heightItem*3;
			$('.feedback__wrapper').css({'height':heightWrapper+'px'});
		})
		//kiem tra co bao nhieu item
		let coutItem=$('.feedback__slider').children().length;
		$('.feedback .next').click(function(){
			if(position >=0 && position < (coutItem-3)){
				position+=1;
				$('.feedback__slider').css({
					transform: "translateY(" + -position*heightItem  + "px)"
				});
				let itemActive=$('.feedback__slider-item.active');
				$('.feedback__slider-item').removeClass('active');
				itemActive.next().addClass('active');
			}else{
				position=0;
				$('.feedback__slider').css({
					transform: "translateY(" + -position*heightItem  + "px)"
				});
				$('.feedback__slider-item').removeClass('active');
				$('.feedback__slider-item:nth-child(2)').addClass('active');
			}
			
		})
		$('.feedback .prev').click(function(){
			if(position >0 ){
				position-=1;
				$('.feedback__slider').css({
					transform: "translateY(" + -position*heightItem  + "px)"
				});
				let itemActive=$('.feedback__slider-item.active');
				$('.feedback__slider-item').removeClass('active');
				itemActive.prev().addClass('active');
			}else{
				position=0;
				$('.feedback__slider').css({
					transform: "translateY(" + -position*heightItem  + "px)"
				});
				$('.feedback__slider-item').removeClass('active');
				$('.feedback__slider-item:nth-child(2)').addClass('active');
			}
		})
	}
}
/* ============================= 6,instagram ============================= */
const instagram = {
	init: function () {
		this.instagramSlider();
	},
	instagramSlider: function () {
		$('.instagram__slider').owlCarousel({
			stagePadding: 100,
			loop:true,
			margin:30,
			nav:false,
			dots:false,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1,
					margin:12

				},
				600:{
					items:3,
					margin:20
				},
				1000:{
					items:4
				}
			}
		})
	}
}
/* ============================= 7,slider ============================= */
const slider = {
	init: function () {
		this.slider();
	},
	slider: function () {
		$('.slider-wrapper').owlCarousel({
			nav:false,
			dots:true,
			items:1,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true
		})
	}
}
/* ============================= 8,scroll============================= */
const scroll = {
	init: function () {
		this.scroll();
	},
	scroll: function () {
		$(window).scroll(function(){
			if($(window).scrollTop()>$('header').outerHeight(true)){
				$('header').addClass('fix-top');

			}else{
				$('header').removeClass('fix-top');
			}
			if($(window).scrollTop()>$('.tote-new').outerHeight(true)){
				$('.tote-new .ellipse img:last-child').addClass('rotate')
				$('.tote-new .ellipse img:first-child').addClass('scale')
			}
		})
	}
}