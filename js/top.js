// JavaScript Document
$(function () {
  "use strict";
  var obj = {
    init: function () {
      this.slider();
      this.BlogIDX();
      this.Customscroll();
      this.TopJS();
    },

    slider: function () {
      $('.main-slide').slick({
        dots: false,
        autoplay: true,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 800,
        touchMove: true,
      });
    },

    BlogIDX: function () {
      $.ajax({
        'url': 'information/_custom/',
        'dataType': 'jsonp',
        'success': function (json) {
          $.each(json.data, function (i, val) {
            var img = "";
            if (val.image1 !== "") {
              img = $(val.image1).attr('src');
            } else {
              img = "images/infomation_img01.jpg";
            }
            var $li_ind = $('<li/>').html(
              '<a href="information/' + val.url + '"><p class="b01-img"><img src="' + img + '" alt="' + val.title + '"></p>'
              + '<div class="b01-cont"><p class="b01-date">' + val.date.substr(0, 4) + '.' + val.date.substr(5, 2) + '.' + val.date.substr(8, 2) + '</p>'
              + '<p class="b01-ttl">' + val.title + '</p></div></a>'
            );
            $li_ind.appendTo('.b01-list');

          });
        }
      });
    },


    Customscroll: function () {
      $('.b01-scroll').mCustomScrollbar({
        theme: "dark"
      });
    },

    TopJS: function () {
      $('.box01').parallax({
        imageSrc: 'images/b01_bg.jpg'
      });
      $('.b04-itm01').parallax({
        imageSrc: 'images/b04_bg01.jpg'
      });
      $('.b04-itm02').parallax({
        imageSrc: 'images/b04_bg02.jpg'
      });
      $('.b04-itm03').parallax({
        imageSrc: 'images/b04_bg03.jpg'
      });

      $(window).bind("load resize scroll", function () {
        var vW = $(window).width();
        var Hhead = $('#mainvisual').outerHeight();
        var SCtop = $(this).scrollTop();
        var HMain = $('.main-cont').outerHeight();

        $('#mainvisual .main-btn').removeAttr('style');

        if (vW > 640) {
          if (SCtop > Hhead + 200) {
            $('#footer .main-btn').addClass('fixed');
          } else {
            $('#footer .main-btn').removeClass('fixed');
          }
        } else {
          $('#footer .main-btn').removeClass('fixed');
          $('#mainvisual .main-btn').css({
            'top': HMain
          });
        }
      });
    },


  };

  obj.init();

});
