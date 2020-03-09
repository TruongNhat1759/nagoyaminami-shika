$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.smoothScroll();
      this.toTop();
      this.Gnavi();
      this.findLink();
      this.BlogJs();
    },

    smoothScroll: function () {
      $('a[href^="#"]').click(function () {
        $('.menu-icon').removeClass('active');
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 80
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 115
            }, 600);
          }
        }
        return false;
      });
      $(window).load(function () {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 80
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 115
            }, 600);
          }
        }
      });

    },

    toTop: function () {
      $("#totop, .f-call").hide();
      $(window).scroll(function () {
        var vW = $(window).width();
        if ($(this).scrollTop() > 100) {
          $('#totop').fadeIn();
          if (vW < 641) {
            $('.f-call').fadeIn();
          } else {
            $('.f-call').stop().fadeOut();
          }
        } else {
          $('#totop').stop().fadeOut();
          $('.f-call').stop().fadeOut();
        }
      });
    },

    Gnavi: function () {
      $('.over').mouseenter(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideDown();
        }
      });
      $('.over').mouseleave(function () {
        if ($(this).hasClass('flag')) {
          return false;
        } else {
          $(this).find('.submenu').stop().slideUp();
        }
      });
      $('.menu-icon').click(function () {
        $(this).toggleClass('active');
        $('#gnavi').stop().fadeToggle('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.close-menu').click(function () {
        $('.menu-icon').removeClass('active');
        $('#gnavi').fadeOut('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
      });
      $('.over').click(function () {
        if ($(this).hasClass('flag')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.submenu').stop().slideUp();
          } else {
            $('.over').removeClass('active');
            $('.submenu').stop().slideUp();
            $(this).addClass('active');
            $(this).find('.submenu').stop().slideDown();
          }
        }
      });
      $(window).bind("load resize scroll", function () {
        var vW = $(window).width();
        var Hhead = $('#mainvisual').outerHeight();
        var HhTop = $('#header').outerHeight();
        var HCall = $('.f-call').outerHeight();
        var top = $(this).scrollTop();
        if (vW > 640) {
          $('.menu-icon').removeClass('active');
          $('.over').removeClass('flag');
          $('#gnavi').removeAttr('style');
          $('#wrapper').removeAttr('style');
          $('.footer03').removeAttr('style');
          if (top > Hhead) {
            $('#gnavi-fixed').addClass('fixed');
          } else {
            $('#gnavi-fixed').removeClass('fixed');
          }
        } else {
          $('.over').addClass('flag');
          $('.submenu').removeAttr('style');
          $('#gnavi-fixed').removeClass('fixed');
          $('#wrapper').css('padding-top', HhTop);
          $('#gnavi').css({
            'top': HhTop,
            'height': 'calc(100% - ' + HhTop + 'px)'
          });
          $('.footer03').css('margin-bottom', HCall + 1);
          $('#totop').css('bottom', HCall + 10);
        }

      });

    },
    findLink: function() {
      if($( ".under-bnr" ).length){
        $(".under-bnr li").click(function(){
          window.location = $(this).find("a").attr("href");
          return false;
        });
      }
		},
    
    BlogJs:function(){
      if($( ".infor-detail-img" ).length){
        $('a[rel=imgblog]').fancybox({
          "padding":5,
          "overlayOpacity":0.8,
          "nextEffect":'fade',
          "prevEffect":'fade',
        });
      }
      if($( ".staff-slide" ).length){
        $('.staff-thumb li').eq(0).addClass('selected');
					$('.staff-thumb li').click(function(e){
						e.preventDefault();
						var imagePath = $(this).find('img').attr('src');
						var mainImage = $('.staff-slide').find('img');
						var selectedNo = $(this).parents('.staff-thumb').find('li');
						$(selectedNo).removeClass('selected');
						$(this).addClass('selected');
						if (imagePath == mainImage.attr('src')) {
							return;
						} else {
							$(mainImage).fadeOut('fast', function () {
								$(this).fadeIn().attr('src', imagePath);
							});
						}
					});
      }
    },

  };

  obj.init();

});
