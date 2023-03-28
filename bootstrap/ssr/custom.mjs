if ($(".main-header li.dropdown ul").length) {
  $(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
}
if ($(".mobile-menu").length) {
  $(".mobile-menu .menu-box").mCustomScrollbar();
  var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
  $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
  $(".sticky-header .main-menu").append(mobileMenuContent);
  $(".mobile-menu li.dropdown .dropdown-btn").on("click", function() {
    $(this).toggleClass("open");
    $(this).prev("ul").slideToggle(500);
  });
  $(".mobile-menu li.dropdown .dropdown-btn").on("click", function() {
    $(this).prev(".megamenu").slideToggle(900);
  });
  $(".mobile-nav-toggler").on("click", function() {
    $("body").addClass("mobile-menu-visible");
  });
  $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on("click", function() {
    $("body").removeClass("mobile-menu-visible");
  });
}
if ($(".scroll-to-target").length) {
  $(".scroll-to-target").on("click", function() {
    var target = $(this).attr("data-target");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 1e3);
  });
}
if ($(".parallax-scene-1").length) {
  var scene = $(".parallax-scene-1").get(0);
  new Parallax(scene);
}
if ($(".parallax-scene-2").length) {
  var scene = $(".parallax-scene-2").get(0);
  new Parallax(scene);
}
if ($(".parallax-scene-3").length) {
  var scene = $(".parallax-scene-3").get(0);
  new Parallax(scene);
}
if ($(".parallax-scene-4").length) {
  var scene = $(".parallax-scene-4").get(0);
  new Parallax(scene);
}
if ($(".parallax-scene-5").length) {
  var scene = $(".parallax-scene-5").get(0);
  new Parallax(scene);
}
if ($(".scroll-nav").length) {
  $(".scroll-nav").onePageNav();
}
if ($(".quantity-spinner").length) {
  $("input.quantity-spinner").TouchSpin({
    verticalbuttons: true
  });
}
function headerStyle() {
  if ($(".main-header").length) {
    var windowpos = $(window).scrollTop();
    var siteHeader = $(".main-header");
    var scrollLink = $(".scroll-top");
    if (windowpos >= 350) {
      siteHeader.addClass("fixed-header");
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass("fixed-header");
      scrollLink.fadeOut(300);
    }
  }
}
headerStyle();
function isotopeBlock() {
  if ($(".isotope-block").length) {
    $(".isotope-block").isotope();
  }
}
isotopeBlock();
function bottomParallax() {
  if ($(".bottom-parallax").length) {
    var windowpos = $(window).scrollTop();
    var siteFooter = $(".footer-area").height();
    var sitebodyHeight = $(".boxed_wrapper").height();
    var finalHeight = sitebodyHeight - siteFooter - 1e3;
    if (windowpos >= finalHeight) {
      $("body").addClass("parallax-visible");
    } else {
      $("body").removeClass("parallax-visible");
    }
  }
}
function handlePreloader() {
  if ($(".loader-wrap").length) {
    $(".loader-wrap").delay(1e3).fadeOut(500);
  }
  TweenMax.to($(".loader-wrap .overlay"), 1.2, {
    force3D: true,
    left: "100%",
    ease: Expo.easeInOut
  });
}
if ($(".preloader-close").length) {
  $(".preloader-close").on("click", function() {
    $(".loader-wrap").delay(200).fadeOut(500);
  });
}
function beforeAfterTwentyTwenty() {
  if ($(".before-after-twentytwenty").length) {
    $(".before-after-twentytwenty").each(function() {
      var Self = $(this);
      var objName = Self.attr("id");
      $("#" + objName).twentytwenty();
      $(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(e) {
        var paneTarget = $(e.target).attr("data-target");
        var $thePane = $(".tab-pane" + paneTarget);
        var twentyTwentyContainer = "#" + objName;
        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
        if (0 === twentyTwentyHeight) {
          $thePane.find(twentyTwentyContainer).trigger("resize");
        }
      });
    });
  }
}
function CounterNumberChanger() {
  var timer = $(".timer");
  if (timer.length) {
    timer.appear(function() {
      timer.countTo();
    });
  }
}
function projectMasonaryLayout() {
  if ($(".masonary-layout").length) {
    $(".masonary-layout").isotope({
      layoutMode: "masonry"
    });
  }
  if ($(".post-filter").length) {
    $(".post-filter li").children(".filter-text").on("click", function() {
      var Self = $(this);
      var selector = Self.parent().attr("data-filter");
      $(".post-filter li").removeClass("active");
      Self.parent().addClass("active");
      $(".filter-layout").isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  }
  if ($(".post-filter.has-dynamic-filters-counter").length) {
    var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find("li");
    activeFilterItem.each(function() {
      var filterElement = $(this).data("filter");
      var count = $(".filter-layout").find(filterElement).length;
      $(this).children(".filter-text").append('<span class="count">' + count + "</span>");
    });
  }
}
function onHoverthreeDmovement() {
  var tiltBlock = $(".js-tilt");
  if (tiltBlock.length) {
    $(".js-tilt").tilt({
      maxTilt: 20,
      perspective: 700,
      glare: true,
      maxGlare: 0
    });
  }
}
function tabBox() {
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function(e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));
      if ($(target).is(":visible")) {
        return false;
      } else {
        target.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn");
        $(this).addClass("active-btn");
        target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
        target.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }
}
function directionswitch() {
  if ($(".page_direction").length) {
    $(".direction_switch button").on("click", function() {
      $(".boxed_wrapper").toggleClass(function() {
        return $(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl";
      });
    });
  }
}
function swithcerMenu() {
  if ($(".switch_menu").length) {
    $(".switch_btn button").on("click", function() {
      $(".switch_menu").toggle(500);
    });
    $("#styleOptions").styleSwitcher({
      hasPreview: true,
      fullPath: "assets/css/color/",
      cookie: {
        expires: 30,
        isManagingLoad: true
      }
    });
  }
}
function datepicker() {
  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }
}
function priceFilter() {
  if ($(".price-ranger").length) {
    $(".price-ranger #slider-range").slider({
      range: true,
      min: 10,
      max: 200,
      values: [11, 99],
      slide: function(event, ui) {
        $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
        $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
      }
    });
    $(".price-ranger .ranger-min-max-block .min").val("$" + $(".price-ranger #slider-range").slider("values", 0));
    $(".price-ranger .ranger-min-max-block .max").val("$" + $(".price-ranger #slider-range").slider("values", 1));
  }
}
function bannerSlider() {
  if ($(".banner-slider").length > 0) {
    var bannerSlider2 = new Swiper(".banner-slider", {
      spaceBetween: 0,
      slidesPerView: 1,
      mousewheel: true,
      height: 640,
      grabCursor: true,
      loop: true,
      speed: 1400,
      autoplay: {
        delay: 5e3
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      navigation: {
        nextEl: ".banner-slider-button-next",
        prevEl: ".banner-slider-button-prev"
      }
    });
    bannerSlider2.on("slideChange", function() {
      var csli = bannerSlider2.realIndex + 1, curnum = $("#current");
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: -10,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: function() {
          TweenMax.to(curnum, 0.1, {
            force3D: true,
            y: 10
          });
          curnum.html("0" + csli);
        }
      });
      TweenMax.to(curnum, 0.2, {
        force3D: true,
        y: 0,
        delay: 0.3,
        opacity: 1,
        ease: Power2.easeOut
      });
    });
    var totalSlides = bannerSlider2.slides.length - 2;
    $("#total").html("0" + totalSlides);
  }
}
function languageSwitcher() {
  if ($("#polyglot-language-options").length) {
    $("#polyglotLanguageSwitcher").polyglotLanguageSwitcher({
      effect: "slide",
      animSpeed: 500,
      testMode: true,
      onChange: function(evt) {
        alert("The selected language is: " + evt.selectedItem);
      }
    });
  }
}
if ($(".theme_carousel").length) {
  $(".theme_carousel").each(function(index) {
    var $owlAttr = {}, $extraAttr = $(this).data("options");
    $.extend($owlAttr, $extraAttr);
    $(this).owlCarousel($owlAttr);
  });
}
if ($(".banner-carousel").length) {
  $(".banner-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 9e3,
    navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  });
}
if ($(".partner-carousel").length) {
  $(".partner-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: false,
    stagePadding: 0,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 6e3,
    navText: ['<span class="flaticon-next left"></span>', '<span class="flaticon-next right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
  });
}
if ($("#testimonials-style1__thumb").length) {
  let testimonialsThumb = new Swiper("#testimonials-style1__thumb", {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 1400,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 5e3
    }
  });
  new Swiper("#testimonials-style1__carousel", {
    observer: true,
    observeParents: true,
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5e3
    },
    thumbs: {
      swiper: testimonialsThumb
    },
    pagination: {
      el: "#testimonials-style1__carousel-pagination",
      type: "bullets",
      clickable: true
    }
  });
}
if ($(".testimonial-style2__carousel").length) {
  $(".testimonial-style2__carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    stagePadding: 0,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 6e3,
    navText: ['<span class="flaticon-next left"></span>', '<span class="flaticon-next right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });
}
if ($(".slider-bg-slide").length) {
  $(".slider-bg-slide").each(function() {
    var Self = $(this);
    var bgSlideOptions = Self.data("options");
    Self.vegas(bgSlideOptions);
  });
}
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function() {
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");
    if ($(this).hasClass("active") !== true) {
      $(outerBox).find(".accordion .acc-btn").removeClass("active");
    }
    if ($(this).next(".acc-content").is(":visible")) {
      return false;
    } else {
      $(this).addClass("active");
      $(outerBox).children(".accordion").removeClass("active-block");
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
      target.addClass("active-block");
      $(this).next(".acc-content").slideDown(300);
    }
  });
}
if ($(".dial").length) {
  $(".dial").appear(function() {
    var elm = $(this);
    elm.attr("data-fgColor");
    var perc = elm.attr("value");
    elm.knob({
      "value": 0,
      "min": 0,
      "max": 100,
      "skin": "tron",
      "readOnly": true,
      "thickness": 0.05,
      "dynamicDraw": true,
      "displayInput": false
    });
    $({
      value: 0
    }).animate({
      value: perc
    }, {
      duration: 2e3,
      easing: "swing",
      progress: function() {
        elm.val(Math.ceil(this.value)).trigger("change");
      }
    });
    $(this).append(function() {
    });
  }, {
    accY: 20
  });
}
if ($(".progress-levels .progress-box .bar-fill").length) {
  $(".progress-box .bar-fill").each(function() {
    $(".progress-box .bar-fill").appear(function() {
      var progressWidth = $(this).attr("data-percent");
      $(this).css("width", progressWidth + "%");
    });
  }, {
    accY: 0
  });
}
if ($(".progress-levels-style2 .progress-box-style2 .bar-fill").length) {
  $(".progress-box-style2 .bar-fill").each(function() {
    $(".progress-box-style2 .bar-fill").appear(function() {
      var progressWidth = $(this).attr("data-percent");
      $(this).css("width", progressWidth + "%");
    });
  }, {
    accY: 0
  });
}
if ($(".count-box").length) {
  $(".count-box").appear(function() {
    var $t = $(this), n = $t.find(".count-text").attr("data-stop"), r = parseInt($t.find(".count-text").attr("data-speed"), 10);
    if (!$t.hasClass("counted")) {
      $t.addClass("counted");
      $({
        countNum: $t.find(".count-text").text()
      }).animate({
        countNum: n
      }, {
        duration: r,
        easing: "linear",
        step: function() {
          $t.find(".count-text").text(Math.floor(this.countNum));
        },
        complete: function() {
          $t.find(".count-text").text(this.countNum);
        }
      });
    }
  }, {
    accY: 0
  });
}
$(".video-popup").magnificPopup({
  type: "iframe"
  // other options
});
if ($(".lightbox-image").length) {
  $(".lightbox-image").fancybox({
    openEffect: "fade",
    closeEffect: "fade",
    youtube: {
      controls: 0,
      showinfo: 0
    },
    helpers: {
      media: {}
    }
  });
}
if ($(".paroller").length) {
  $(".paroller").paroller({
    factor: -0.1,
    // multiplier for scrolling speed and offset, +- values for direction control  
    factorLg: -0.1,
    // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
    type: "foreground",
    // background, foreground  
    direction: "vertical"
    // vertical, horizontal  
  });
}
if ($(".paroller-2").length) {
  $(".paroller-2").paroller({
    factor: 0.05,
    // multiplier for scrolling speed and offset, +- values for direction control  
    factorLg: 0.05,
    // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
    type: "foreground",
    // background, foreground  
    direction: "horizontal"
    // vertical, horizontal  
  });
}
if ($(".wow").length) {
  var wow = new WOW({
    boxClass: "wow",
    // animated element css class (default is wow)
    animateClass: "animated",
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: false,
    // trigger animations on mobile devices (default is true)
    live: true
    // act on asynchronously loaded content (default is true)
  });
  wow.init();
}
if ($("[data-aos]").length) {
  AOS.init({
    duration: "1000",
    disable: "false",
    easing: "ease",
    mirror: true
  });
}
if ($("#contact-form").length) {
  $("#contact-form").validate({
    submitHandler: function(form) {
      var form_btn = $(form).find('button[type="submit"]');
      var form_result_div = "#form-result";
      $(form_result_div).remove();
      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
      var form_btn_old_msg = form_btn.html();
      form_btn.html(form_btn.prop("disabled", true).data("loading-text"));
      $(form).ajaxSubmit({
        dataType: "json",
        success: function(data) {
          if (data.status = "true") {
            $(form).find(".form-control").val("");
          }
          form_btn.prop("disabled", false).html(form_btn_old_msg);
          $(form_result_div).html(data.message).fadeIn("slow");
          setTimeout(function() {
            $(form_result_div).fadeOut("slow");
          }, 6e3);
        }
      });
    }
  });
}
if ($("#search-popup").length) {
  $(".search-toggler").on("click", function() {
    $("#search-popup").addClass("popup-visible");
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      $("#search-popup").removeClass("popup-visible");
    }
  });
  $(".close-search,.search-popup .overlay-layer").on("click", function() {
    $("#search-popup").removeClass("popup-visible");
  });
}
$("select:not(.ignore)").niceSelect();
jQuery(document).on("ready", function() {
  (function($2) {
    tabBox();
    directionswitch();
    swithcerMenu();
    CounterNumberChanger();
    onHoverthreeDmovement();
    datepicker();
    beforeAfterTwentyTwenty();
    priceFilter();
    languageSwitcher();
  })(jQuery);
});
jQuery(window).on("scroll", function() {
  (function($2) {
    headerStyle();
    bottomParallax();
  })(jQuery);
});
jQuery(window).on("load", function() {
  (function($2) {
    handlePreloader();
    projectMasonaryLayout();
    bannerSlider();
    isotopeBlock();
  })(jQuery);
});
