$(document).ready(function () {
  "use strict";

  PageLoad();
  scrollBarSmooth();
  splittingGo();
  cursorEffect();
  otherCode();
});

function PageLoad() {
  $("body").removeClass("hide_this");
  var tl_loader = new TimelineLite();
  tl_loader.staggerFrom(
    ".texts_loader path",
    1,
    { delay: 0.3, autoAlpha: 0, ease: Power2.easeOut },
    0.1
  );
  TweenMax.from(".figure_first", 0.6, {
    delay: 1.5,
    x: -20,
    scale: 0.6,
    autoAlpha: 0,
    ease: Power1.easeOut,
  });
  TweenMax.from(".figure_second", 0.6, {
    delay: 1.5,
    x: 70,
    scale: 0.6,
    autoAlpha: 0,
    ease: Power1.easeOut,
  });

  setTimeout(function () {
    var tl = new TimelineLite();
    tl.staggerFrom(
      ".title_home_eff .word",
      1,
      { delay: 1.4, x: 20, autoAlpha: 0, ease: Power2.easeOut },
      0.15
    );
    TweenMax.from(".subtitle_hom_g", 1, {
      delay: 1.9,
      y: -20,
      autoAlpha: 0,
      ease: Power2.easeOut,
    });
    TweenMax.from(".abs_hom_sc", 1, {
      delay: 2.3,
      y: -20,
      autoAlpha: 0,
      ease: Power2.easeOut,
    });
    TweenMax.from(".text_effect_go", 5, {
      delay: 2.3,
      autoAlpha: 0,
      ease: Power2.easeOut,
    });

    $("body").removeClass("hidden_ball");

    TweenMax.to($(".loader_go"), 0.7, {
      force3D: true,
      yPercent: -101,
      delay: 1,
      ease: Power2.easeInOut,
    });
    TweenMax.set($(".loader_go"), {
      visibility: "hidden",
      delay: 1.8,
      opacity: 0,
    });

    animationsOnScroll();
  }, 1000);
  // },20);
}

function scrollBarSmooth() {
  if ($(window).width() <= 1024) {
    $("body").removeClass("smooth_scroll");
  }
  if ($("body").hasClass("smooth_scroll")) {
    const ScrollArea = document.querySelector("#content_scroll");
    var scrollbar = window.Scrollbar;
    // Use plugins
    scrollbar.use(OverscrollPlugin);
    // Config
    var ScrollbarOptions = {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "bounce",
          damping: 0.2,
          maxOverscroll: 60,
        },
      },
    };
    // Initialise
    var scrollbar = Scrollbar.init(ScrollArea, ScrollbarOptions);

    // $('.go_to_contacts').on("click", function() {
    // 	scrollbar.scrollIntoView(document.querySelector('#contacts'), {
    // 		offsetTop: 50,
    // 		damping:15,
    // 	});
    // });
  }
}

function splittingGo() {
  if ($("[data-splitting]").length) {
    Splitting();
  }
}

function animationsOnScroll() {
  var controller = new ScrollMagic.Controller();

  // animate each
  $(".has_opacity").each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();

    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight,
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on("enter", function () {
      $this.delay($this.attr("data-delay")).queue(function (next) {
        TweenMax.to($this, 0.8, {
          force3D: true,
          autoAlpha: 1,
          delay: 0.1,
          ease: Power2.easeOut,
        });
        next();
      });
    });
    scene.on("leave", function (event) {
      $this.removeClass("active");
    });
  });

  $(".has_animation").each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();

    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight,
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on("enter", function () {
      $this.delay($this.attr("data-delay")).queue(function (next) {
        TweenMax.to($this, 0.8, {
          force3D: true,
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.1,
          ease: Power2.easeOut,
        });
        next();
      });
    });
    scene.on("enter", function () {
      $this.addClass("active");
    });
  });

  $(".has_animation_from_right").each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();

    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight,
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on("enter", function () {
      $this.delay($this.attr("data-delay")).queue(function (next) {
        TweenMax.to($this, 0.8, {
          force3D: true,
          opacity: 1,
          x: 0,
          delay: 0.1,
          ease: Power2.easeOut,
        });
        next();
      });
    });
    scene.on("leave", function (event) {
      $this.removeClass("active");
    });
  });

  $(".has_mask").each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();

    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight,
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on("enter", function () {
      var tl = new TimelineLite();
      $this.find(".word").each(function (index, element) {
        tl.to(
          element,
          0.6,
          { y: 0, opacity: 1, autoAlpha: 1, delay: 0.1, ease: Power2.easeOut },
          index * 0.03
        );
      });
    });
    scene.on("enter", function () {
      $this.addClass("active");
    });
  });
  $(".has_mask_right").each(function () {
    var $this = $(this);
    var $thisHeight = $(this).height();

    var scene = new ScrollMagic.Scene({
      triggerElement: $this[0],
      duration: $thisHeight,
    }).addTo(controller);
    scene.triggerHook(1);
    scene.on("enter", function () {
      var tl = new TimelineLite();
      $this.find(".word").each(function (index, element) {
        tl.to(
          element,
          0.6,
          { x: 0, opacity: 1, autoAlpha: 1, delay: 0.1, ease: Power2.easeOut },
          index * 0.01
        );
      });
    });
    scene.on("enter", function () {
      $this.addClass("active");
    });
  });
}

function otherCode() {
  $(".burger_go").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".menu_mobile_go").fadeIn();
      var tl = new TimelineLite();
      tl.staggerFrom(
        ".menu_mobile_go .menu_head_go li,.languages_go",
        1,
        { y: 20, autoAlpha: 0, ease: Power2.easeOut },
        0.1
      );
      hideScroll();
    } else {
      $(".menu_mobile_go").fadeOut();
      enableScroll();
    }
  });

  function hideScroll() {
    $("html").addClass("hide_scroll");
  }

  function enableScroll() {
    $("html").removeClass("hide_scroll");
  }

  $(".ap_go").on("mousedown touchstart", function (event) {
    TweenMax.to("#ball", 0.1, {
      transformOrigin: "15px 15px",
      borderWidth: "1px",
      scale: 2,
    });
  });
  $(".ap_go").on("mouseup touchend", function (event) {
    TweenMax.to("#ball", 0.1, { borderWidth: "2px", scale: 1, x: -15, y: -15 });
  });

  // Accordion
  $(".title_accord").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".descr_accord").slideToggle();
    $(this).next(".descr_accord").toggleClass("active");
  });

  // Sliders
  if ($("#case_slider").length) {
    const swiper = new Swiper("#case_slider", {
      loop: true,
      slidesPerView: 1,
      speed: 1000,
      autoHeight: true,
      slidesPerView: "auto",
      spaceBetween: 100,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
      },
      pagination: {
        el: ".progress_bar_cases",
        type: "progressbar",
      },
      navigation: {
        nextEl: "#cases_next",
      },
      on: {
        init: function () {
          $(".swiper-slide-active").addClass("active");

          $(".swiper-slide-next").find(".descr_this_case").css("opacity", "0");
        },
        transitionStart: function () {
          $(".swiper-slide-active")
            .find(".descr_this_case")
            .css("opacity", "0.5");

          $(".swiper-slide-next").find(".descr_this_case").css("opacity", "0");
        },
        transitionEnd: function (swiper) {
          $(".swiper-slide-active")
            .find(".descr_this_case")
            .css("opacity", "1");
          $(".swiper-slide-next").find(".descr_this_case").css("opacity", "0");
        },
      },
      breakpoints: {
        320: {
          spaceBetween: 92,
          slidesPerView: "auto",
        },
        992: {
          spaceBetween: 92,
          speed: 600,
          slidesPerView: "auto",
        },
        1366: {
          spaceBetween: 92,
          slidesPerView: 1,
        },
        1601: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
    });
  }
}

function cursorEffect() {
  var e = {
      x: 0,
      y: 0,
    },
    t = {
      x: 0,
      y: 0,
    },
    n = 0.25,
    o = !1,
    a = document.getElementById("ball"),
    i = document.getElementById("ball-loader");
  TweenLite.set(a, {
    xPercent: -50,
    yPercent: -50,
  }),
    document.addEventListener("mousemove", function (t) {
      var n = window.pageYOffset || document.documentElement.scrollTop;
      (e.x = t.pageX), (e.y = t.pageY - n);
    }),
    TweenLite.ticker.addEventListener("tick", function () {
      o ||
        ((t.x += (e.x - t.x) * n),
        (t.y += (e.y - t.y) * n),
        TweenLite.set(a, {
          x: t.x,
          y: t.y,
        }));
    }),
    $(".parallax-wrap").mouseenter(function (e) {
      TweenMax.to(this, 0.3, {
        scale: 2,
      }),
        TweenMax.to(a, 0.3, {
          scale: 2,
          borderWidth: "1px",
          opacity: 0.2,
        }),
        TweenMax.to(i, 0.3, {
          scale: 2,
          borderWidth: "1px",
          top: 1,
          left: 1,
        }),
        TweenMax.to($(this).children(), 0.3, {
          scale: 0.5,
        }),
        (o = !0);
    }),
    $(".parallax-wrap").mouseleave(function (e) {
      TweenMax.to(this, 0.3, {
        scale: 1,
      }),
        TweenMax.to(a, 0.3, {
          scale: 1,
          borderWidth: "2px",
          opacity: 1,
        }),
        TweenMax.to(i, 0.3, {
          scale: 1,
          borderWidth: "2px",
          top: 0,
          left: 0,
        }),
        TweenMax.to($(this).children(), 0.3, {
          scale: 1,
          x: 0,
          y: 0,
        }),
        (o = !1);
    }),
    $(".parallax-wrap").mousemove(function (e) {
      var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
      (n = e),
        (o = 2),
        (i = this.getBoundingClientRect()),
        (l = n.pageX - i.left),
        (r = n.pageY - i.top),
        (d = window.pageYOffset || document.documentElement.scrollTop),
        (t.x = i.left + i.width / 2 + (l - i.width / 2) / o),
        (t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o),
        TweenMax.to(a, 0.3, {
          x: t.x,
          y: t.y,
        }),
        (s = e),
        (p = c = this),
        (h = c.querySelector(".parallax-element")),
        (x = 20),
        (u = p.getBoundingClientRect()),
        (w = s.pageX - u.left),
        (f = s.pageY - u.top),
        (m = window.pageYOffset || document.documentElement.scrollTop),
        TweenMax.to(h, 0.3, {
          x: ((w - u.width / 2) / u.width) * x,
          y: ((f - u.height / 2 - m) / u.height) * x,
          ease: Power2.easeOut,
        });
    }),
    $(".hide-ball").mouseenter(function (e) {
      TweenMax.to("#ball", 0.2, {
        borderWidth: "1px",
        scale: 2,
        opacity: 0,
      });
    }),
    $(".hide-ball").mouseleave(function (e) {
      TweenMax.to("#ball", 0.3, {
        borderWidth: "2px",
        scale: 1,
        opacity: 1,
      });
    }),
    $(".link").mouseenter(function (e) {
      TweenMax.to("#ball", 0.2, {
        borderWidth: "0px",
        scale: 2,
        backgroundColor: "rgba(127, 127, 127, 1)",
        opacity: 0.15,
      });
    }),
    $(".link").mouseleave(function (e) {
      TweenMax.to("#ball", 0.3, {
        borderWidth: "2px",
        scale: 1,
        backgroundColor: "rgba(127, 127, 127, 0)",
        opacity: 1,
      });
    }),
    jQuery(document).ready(function () {
      var e = !1,
        n = "";

      function l(t, o) {
        (e = !0),
          $("body").addClass("page-is-changing"),
          $(".cd-cover-layer").one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              r(t, o),
                (n = t),
                $(".cd-cover-layer").off(
                  "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
                );
            }
          ),
          d() || (r(t, o), (n = t));
      }

      function r(n, l) {
        n = "" == n ? "index.html" : n;
        var r = $('<div class="cd-main-content "></div>');
        r.load(n + " .cd-main-content > *", function (c) {
          $("main").html(r);
          var s = c.match(/<title[^>]*>([^<]+)<\/title>/)[1];
          $("head title").html(s), $("html, body").scrollTop(0);
          var p = d() ? 30 : 0;
          setTimeout(function () {
            $("body").removeClass("page-is-changing"),
              $(".cd-cover-layer").one(
                "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function () {
                  (e = !1),
                    $(".cd-cover-layer").off(
                      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
                    );
                }
              ),
              // ga("set", "page", "/" + n), ga("send", "pageview"),
              // LoadViaAjax(),
              $(".parallax-wrap").mouseleave(function (e) {
                TweenMax.to(this, 0.3, {
                  scale: 1,
                }),
                  TweenMax.to(a, 0.3, {
                    scale: 1,
                    borderWidth: "2px",
                    opacity: 1,
                  }),
                  TweenMax.to(i, 0.3, {
                    scale: 1,
                    borderWidth: "2px",
                    top: 0,
                    left: 0,
                  }),
                  TweenMax.to($(this).children(), 0.3, {
                    scale: 1,
                    x: 0,
                    y: 0,
                  }),
                  (o = !1);
              }),
              $(".parallax-wrap").mouseenter(function (e) {
                TweenMax.to(this, 0.3, {
                  scale: 2,
                }),
                  TweenMax.to(a, 0.3, {
                    scale: 2,
                    borderWidth: "1px",
                    opacity: 0.2,
                  }),
                  TweenMax.to(i, 0.3, {
                    scale: 2,
                    borderWidth: "1px",
                    top: 1,
                    left: 1,
                  }),
                  TweenMax.to($(this).children(), 0.3, {
                    scale: 0.5,
                  }),
                  (o = !0);
              }),
              $(".parallax-wrap").mousemove(function (e) {
                var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                (n = e),
                  (o = 2),
                  (i = this.getBoundingClientRect()),
                  (l = n.pageX - i.left),
                  (r = n.pageY - i.top),
                  (d =
                    window.pageYOffset || document.documentElement.scrollTop),
                  (t.x = i.left + i.width / 2 + (l - i.width / 2) / o),
                  (t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o),
                  TweenMax.to(a, 0.3, {
                    x: t.x,
                    y: t.y,
                  }),
                  (s = e),
                  (p = c = this),
                  (h = c.querySelector(".parallax-element")),
                  (x = 20),
                  (u = p.getBoundingClientRect()),
                  (w = s.pageX - u.left),
                  (f = s.pageY - u.top),
                  (m =
                    window.pageYOffset || document.documentElement.scrollTop),
                  TweenMax.to(h, 0.3, {
                    x: ((w - u.width / 2) / u.width) * x,
                    y: ((f - u.height / 2 - m) / u.height) * x,
                    ease: Power2.easeOut,
                  });
              }),
              TweenMax.to("#ball", 0.3, {
                borderWidth: "2px",
                scale: 1,
                opacity: 1,
              }),
              $(".hide-ball").mouseenter(function (e) {
                TweenMax.to("#ball", 0.2, {
                  borderWidth: "1px",
                  scale: 2,
                  opacity: 0,
                });
              }),
              $(".hide-ball").mouseleave(function (e) {
                TweenMax.to("#ball", 0.3, {
                  borderWidth: "2px",
                  scale: 1,
                  opacity: 1,
                });
              }),
              $(".link").mouseenter(function (e) {
                TweenMax.to("#ball", 0.2, {
                  borderWidth: "0px",
                  scale: 3,
                  backgroundColor: "rgba(127, 127, 127, 1)",
                  opacity: 0.15,
                });
              }),
              $(".link").mouseleave(function (e) {
                TweenMax.to("#ball", 0.3, {
                  borderWidth: "2px",
                  scale: 1,
                  backgroundColor: "rgba(127, 127, 127, 0)",
                  opacity: 1,
                });
              }),
              d() || (e = !1);
          }, p),
            n != window.location &&
              l &&
              window.history.pushState(
                {
                  path: n,
                },
                "",
                n
              );
        });
      }

      function d() {
        return $("html").hasClass("csstransitions");
      }
      (firstLoad = !1),
        $("body").on("click", '[data-type="page-transition"]', function (t) {
          t.preventDefault();
          var n = $(this).attr("href");
          e || l(n, !0), (firstLoad = !0);
        }),
        $(window).on("popstate", function () {
          if (firstLoad) {
            var t = location.pathname.split("/"),
              o = t[t.length - 1];
            e || n == o || l(o, !1);
          }
          firstLoad = !0;
        });
    });
}
